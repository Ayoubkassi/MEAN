import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNewComponent } from './single-new.component';

describe('SingleNewComponent', () => {
  let component: SingleNewComponent;
  let fixture: ComponentFixture<SingleNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
