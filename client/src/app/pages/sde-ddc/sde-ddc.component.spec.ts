import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdeDdcComponent } from './sde-ddc.component';

describe('SdeDdcComponent', () => {
  let component: SdeDdcComponent;
  let fixture: ComponentFixture<SdeDdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdeDdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdeDdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
