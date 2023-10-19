import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsModalComponent } from './years-modal.component';

describe('YearsModalComponent', () => {
  let component: YearsModalComponent;
  let fixture: ComponentFixture<YearsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
