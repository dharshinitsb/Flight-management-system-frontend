import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowScheduledFlightsPassengerComponent } from './show-scheduled-flights-passenger.component';

describe('ShowScheduledFlightsPassengerComponent', () => {
  let component: ShowScheduledFlightsPassengerComponent;
  let fixture: ComponentFixture<ShowScheduledFlightsPassengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowScheduledFlightsPassengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowScheduledFlightsPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
