import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademieCertifComponent } from './academie-certif.component';

describe('AcademieCertifComponent', () => {
  let component: AcademieCertifComponent;
  let fixture: ComponentFixture<AcademieCertifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademieCertifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademieCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
