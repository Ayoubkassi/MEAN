import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdeAuditeComponent } from './sde-audite.component';

describe('SdeAuditeComponent', () => {
  let component: SdeAuditeComponent;
  let fixture: ComponentFixture<SdeAuditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdeAuditeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdeAuditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
