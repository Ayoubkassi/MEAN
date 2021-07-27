import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEditnewsComponent } from './main-editnews.component';

describe('MainEditnewsComponent', () => {
  let component: MainEditnewsComponent;
  let fixture: ComponentFixture<MainEditnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEditnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEditnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
