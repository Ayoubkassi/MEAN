import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdeAccompagneComponent } from './sde-accompagne.component';

describe('SdeAccompagneComponent', () => {
  let component: SdeAccompagneComponent;
  let fixture: ComponentFixture<SdeAccompagneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdeAccompagneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdeAccompagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
