import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcdemieFormationComponent } from './acdemie-formation.component';

describe('AcdemieFormationComponent', () => {
  let component: AcdemieFormationComponent;
  let fixture: ComponentFixture<AcdemieFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcdemieFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcdemieFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
