import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipButtons } from './tip-buttons';

describe('TipButtons', () => {
  let component: TipButtons;
  let fixture: ComponentFixture<TipButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipButtons],
    }).compileComponents();

    fixture = TestBed.createComponent(TipButtons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
