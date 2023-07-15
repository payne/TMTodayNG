import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingDatesComponent } from './meeting-dates.component';

describe('MeetingDatesComponent', () => {
  let component: MeetingDatesComponent;
  let fixture: ComponentFixture<MeetingDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
