import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageInfo } from './main-page-info';

describe('MainPageInfo', () => {
  let component: MainPageInfo;
  let fixture: ComponentFixture<MainPageInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPageInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
