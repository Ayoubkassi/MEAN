import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenierieReComponent } from './ingenierie-re.component';

describe('IngenierieReComponent', () => {
  let component: IngenierieReComponent;
  let fixture: ComponentFixture<IngenierieReComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenierieReComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenierieReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
