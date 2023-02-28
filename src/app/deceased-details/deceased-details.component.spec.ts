import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeceasedDetailsComponent } from './deceased-details.component';

describe('DeceasedDetailsComponent', () => {
  let component: DeceasedDetailsComponent;
  let fixture: ComponentFixture<DeceasedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeceasedDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeceasedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
