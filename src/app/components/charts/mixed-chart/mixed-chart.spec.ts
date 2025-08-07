import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedChart } from './mixed-chart';

describe('MixedChart', () => {
  let component: MixedChart;
  let fixture: ComponentFixture<MixedChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixedChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixedChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
