import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEditproductComponent } from './main-editproduct.component';

describe('MainEditproductComponent', () => {
  let component: MainEditproductComponent;
  let fixture: ComponentFixture<MainEditproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEditproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEditproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
