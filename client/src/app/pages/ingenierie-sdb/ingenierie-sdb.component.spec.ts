import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenierieSdbComponent } from './ingenierie-sdb.component';

describe('IngenierieSdbComponent', () => {
  let component: IngenierieSdbComponent;
  let fixture: ComponentFixture<IngenierieSdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenierieSdbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenierieSdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
