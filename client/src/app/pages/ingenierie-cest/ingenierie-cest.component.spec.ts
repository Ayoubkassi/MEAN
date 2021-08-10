import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenierieCestComponent } from './ingenierie-cest.component';

describe('IngenierieCestComponent', () => {
  let component: IngenierieCestComponent;
  let fixture: ComponentFixture<IngenierieCestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenierieCestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenierieCestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
