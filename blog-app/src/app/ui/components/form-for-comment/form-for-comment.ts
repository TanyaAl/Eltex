import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { FullPostFacade } from '../../../services/fullPost/full-post-facade';

@Component({
  selector: 'app-form-for-comment',
  templateUrl: './form-for-comment.html',
  styleUrl: './form-for-comment.scss',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormForComment {
  private facade = inject(FullPostFacade);
  submitComment = output<{ author: string; text: string }>();
  close = output<void>();
  targetPost = this.facade.targetPost;

  protected formForComment = new FormGroup({
    author: new FormControl('', { nonNullable: true, validators: Validators.required }),
    text: new FormControl('', { nonNullable: true, validators: Validators.required }),
  });

  protected onSubmit() {
    if (this.formForComment.invalid) return;
    console.log('FORM', this.formForComment.getRawValue());
    const data = this.formForComment.getRawValue();
    this.submitComment.emit(data);
    this.formForComment.reset();
  }

  protected onCancel() {
    this.formForComment.reset();
    this.close.emit();
  }
}
