import { Component, input, SimpleChanges, output, computed, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogPostType } from '../../../types/BlogPostType';
import { CATEGORIES_SERVICE } from '../../../services/categories/categories-token';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CategoryEntity } from '../../../types/CategoryEntity';
import { CategoryDto } from '../../../types/CategoryDto';
import { startWith, map, Observable, combineLatest } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { NewPost } from '../../../types/NewPost';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-form-for-add-blog-post',
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe,
  ],
  templateUrl: './form-for-add-blog-post.html',
  styleUrl: './form-for-add-blog-post.scss',
})
export class FormForAddBlogPost {
  isOpen = input<boolean>(false);

  editingPost = input<BlogPostType | null>();

  close = output<void>();

  save = output<NewPost>();
  private categoriesService = inject(CATEGORIES_SERVICE);

  filteredCategories$!: Observable<CategoryEntity[]>;

  selectedFile: File | null = null;

  protected blogPostForm = new FormGroup({
    category: new FormControl<CategoryDto | string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(25)],
    }),
    text: new FormControl('', { nonNullable: true, validators: Validators.required }),
  });

  readonly isBackendMode = !environment.useLocalStorage;

  protected formTitle = computed(() =>
    this.editingPost() ? 'Изменить статью' : 'Добавить статью',
  );

  protected saveBtnTitle = computed(() => (this.editingPost() ? 'Сохранить' : 'Добавить'));

  ngOnInit() {
    const allCategories$ = this.categoriesService.getCategories();
    const searchInput = this.blogPostForm
      .get('category')!
      .valueChanges.pipe(startWith(this.blogPostForm.get('category')?.value || ''));
    this.filteredCategories$ = combineLatest([searchInput, allCategories$]).pipe(
      map(([inputValue, categories]) => {
        const searchName = typeof inputValue === 'string' ? inputValue : inputValue.name || '';
        return categories.filter((cat) =>
          cat.name.toLowerCase().includes(searchName.toLowerCase()),
        );
      }),
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    const post = changes['editingPost']?.currentValue;
    if (post) {
      this.blogPostForm.patchValue({
        category: post.category,
        title: post.title,
        text: post.text,
      });
    }
  }

  protected onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  protected onSubmit() {
    if (this.blogPostForm.invalid) return;

    const raw = this.blogPostForm.getRawValue();
    const categoryName = typeof raw.category === 'string' ? raw.category : raw.category?.name;

    this.save.emit({
      ...raw,
      category: categoryName as string,
      image: this.selectedFile,
    });
    this.blogPostForm.reset();
    this.selectedFile = null;
  }

  protected onCancel() {
    this.blogPostForm.reset();
    this.close.emit();
  }

  protected displayFn(cat: CategoryEntity | string): string {
    if (!cat) return '';
    return typeof cat === 'string' ? cat : cat.name;
  }

  protected hasError(controlName: string): boolean {
    const control = this.blogPostForm.get(controlName);
    const isInvalid = control?.invalid && control.touched;
    return Boolean(isInvalid);
  }

  private getErrorStr(errorCode: string, errorData: any) {
    switch (errorCode) {
      case 'required':
        return 'Поле должно быть заполнено';

      case 'minlength':
        const { requiredLength, actualLength } = errorData;
        return `Нужно еще ${requiredLength - actualLength} символов`;

      default:
        return 'Ошибка при заполнении поля';
    }
  }

  protected getControlErrors(controlName: string): string[] {
    const control = this.blogPostForm.get(controlName);
    const errors: Record<string, unknown> | null = control?.errors ?? null;
    if (errors) {
      const errorTextArray: string[] = [];
      Object.entries(errors).forEach(([errorKey, errorValue]) => {
        errorTextArray.push(this.getErrorStr(errorKey, errorValue));
      });
      return errorTextArray;
    }
    return [];
  }

  get category() {
    return this.blogPostForm.get('category');
  }

  get title() {
    return this.blogPostForm.get('title');
  }

  get text() {
    return this.blogPostForm.get('text');
  }
}
