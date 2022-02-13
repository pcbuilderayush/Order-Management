import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeProdComponent } from './see-prod.component';

describe('SeeProdComponent', () => {
  let component: SeeProdComponent;
  let fixture: ComponentFixture<SeeProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
