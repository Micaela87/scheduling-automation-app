import { TestBed } from '@angular/core/testing';

import { WeekSlotsService } from './week-slots.service';

describe('WeekSlotsService', () => {
  let service: WeekSlotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekSlotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
