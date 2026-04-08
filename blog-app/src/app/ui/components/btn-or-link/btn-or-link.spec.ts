import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOrLink } from './btn-or-link';

describe('BtnOrLink', () => {
  let component: BtnOrLink;
  let fixture: ComponentFixture<BtnOrLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnOrLink],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnOrLink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
