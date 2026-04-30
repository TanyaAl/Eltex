/* eslint-disable dot-notation */
/* eslint-disable no-useless-return */
/* eslint-disable import/prefer-default-export */
import { Component, input, SimpleChanges, output, computed } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogPostType } from '../../../types/BlogPostType';

@Component({
  selector: 'app-form-for-add-blog-post',
  imports: [ReactiveFormsModule],
  templateUrl: './form-for-add-blog-post.html',
  styleUrl: './form-for-add-blog-post.scss',
})
export class FormForAddBlogPost {
  isOpen = input<boolean>(false);

  editingPost = input<BlogPostType | null>();

  close = output<void>();

  save = output<{ category: string; title: string; text: string }>();

  categories = ['Дизайн', 'Разработка'];

  protected formTitle = computed(() =>
    this.editingPost() ? 'Изменить статью' : 'Добавить статью',
  );

  protected saveBtnTitle = computed(() => (this.editingPost() ? 'Сохранить' : 'Добавить'));

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

  protected blogPostForm = new FormGroup({
    category: new FormControl('Разработка', { nonNullable: true, validators: Validators.required }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(25)],
    }),
    text: new FormControl('', { nonNullable: true, validators: Validators.required }),
  });

  get category() {
    return this.blogPostForm.get('category');
  }

  get title() {
    return this.blogPostForm.get('title');
  }

  get text() {
    return this.blogPostForm.get('text');
  }

  protected onSubmit() {
    if (this.blogPostForm.invalid) return;
    this.save.emit(this.blogPostForm.getRawValue());
    this.blogPostForm.reset();
  }

  protected onCancel() {
    this.blogPostForm.reset();
    this.close.emit();
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
}
