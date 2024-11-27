import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionTacheComponent } from './edition-tache.component';

describe('EditionTacheComponent', () => {
  let component: EditionTacheComponent;
  let fixture: ComponentFixture<EditionTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditionTacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
