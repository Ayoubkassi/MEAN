import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdeModel3dComponent } from './sde-model3d.component';

describe('SdeModel3dComponent', () => {
  let component: SdeModel3dComponent;
  let fixture: ComponentFixture<SdeModel3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdeModel3dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdeModel3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
