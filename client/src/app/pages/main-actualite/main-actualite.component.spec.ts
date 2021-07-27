import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainActualiteComponent } from './main-actualite.component';

describe('MainActualiteComponent', () => {
  let component: MainActualiteComponent;
  let fixture: ComponentFixture<MainActualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainActualiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
