import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAddproductComponent } from './main-addproduct.component';

describe('MainAddproductComponent', () => {
  let component: MainAddproductComponent;
  let fixture: ComponentFixture<MainAddproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAddproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
