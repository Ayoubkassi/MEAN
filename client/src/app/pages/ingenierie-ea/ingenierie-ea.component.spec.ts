import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenierieEaComponent } from './ingenierie-ea.component';

describe('IngenierieEaComponent', () => {
  let component: IngenierieEaComponent;
  let fixture: ComponentFixture<IngenierieEaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenierieEaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenierieEaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
