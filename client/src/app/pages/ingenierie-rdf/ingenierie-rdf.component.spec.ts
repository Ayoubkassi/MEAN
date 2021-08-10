import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenierieRdfComponent } from './ingenierie-rdf.component';

describe('IngenierieRdfComponent', () => {
  let component: IngenierieRdfComponent;
  let fixture: ComponentFixture<IngenierieRdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenierieRdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenierieRdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
