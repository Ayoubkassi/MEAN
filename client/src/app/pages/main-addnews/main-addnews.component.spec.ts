import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAddnewsComponent } from './main-addnews.component';

describe('MainAddnewsComponent', () => {
  let component: MainAddnewsComponent;
  let fixture: ComponentFixture<MainAddnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAddnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAddnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
