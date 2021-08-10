import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenierieEdcComponent } from './ingenierie-edc.component';

describe('IngenierieEdcComponent', () => {
  let component: IngenierieEdcComponent;
  let fixture: ComponentFixture<IngenierieEdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenierieEdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenierieEdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
