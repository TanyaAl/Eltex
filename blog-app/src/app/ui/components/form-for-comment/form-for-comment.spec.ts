import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForComment } from './form-for-comment';

describe('FormForComment', () => {
  let component: FormForComment;
  let fixture: ComponentFixture<FormForComment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormForComment],
    }).compileComponents();

    fixture = TestBed.createComponent(FormForComment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
