import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademieUtsComponent } from './academie-uts.component';

describe('AcademieUtsComponent', () => {
  let component: AcademieUtsComponent;
  let fixture: ComponentFixture<AcademieUtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademieUtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademieUtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
