import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMenu1Component } from './simple-menu1.component';

describe('SimpleMenu1Component', () => {
  let component: SimpleMenu1Component;
  let fixture: ComponentFixture<SimpleMenu1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleMenu1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
