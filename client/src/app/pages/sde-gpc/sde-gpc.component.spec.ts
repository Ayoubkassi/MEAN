import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdeGpcComponent } from './sde-gpc.component';

describe('SdeGpcComponent', () => {
  let component: SdeGpcComponent;
  let fixture: ComponentFixture<SdeGpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdeGpcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdeGpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
