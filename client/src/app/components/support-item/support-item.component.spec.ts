import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportItemComponent } from './support-item.component';

describe('SupportItemComponent', () => {
  let component: SupportItemComponent;
  let fixture: ComponentFixture<SupportItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
