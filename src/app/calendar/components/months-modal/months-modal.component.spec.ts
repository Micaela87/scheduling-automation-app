import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsModalComponent } from './months-modal.component';

describe('MonthsModalComponent', () => {
  let component: MonthsModalComponent;
  let fixture: ComponentFixture<MonthsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
