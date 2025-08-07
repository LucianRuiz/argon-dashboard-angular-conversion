import { Component, Input, AfterViewInit, ElementRef, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

// Registrar todos los módulos de Chart.js
Chart.register(...registerables);

/**
 * Interface representing line chart with gradient data
 * Defines the structure for line chart with gradient information
 */
export interface LineChartGradientData {
  /** Chart title displayed in the header */
  title: string;
  /** Chart ID for DOM element */
  chartId: string;
  /** Chart configuration data */
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      tension: number;
      borderWidth: number;
      pointRadius: number;
      borderColor: string;
      backgroundColor: any;
      fill: boolean;
      data: number[];
      maxBarThickness: number;
    }[];
  };
}

/**
 * Line Chart with Gradient Component
 * 
 * A line chart widget with gradient fill that displays data trends using Chart.js.
 * Features a responsive line chart with gradient background and customizable colors.
 * 
 * FEATURES:
 * - Interactive line chart with gradient fill using Chart.js
 * - Real-time data updates with chart re-rendering
 * - Customizable gradient colors and styling
 * - Responsive design
 * - Dark mode support
 * 
 * USAGE:
 * <app-line-chart-gradient [data]="lineChartGradientData"></app-line-chart-gradient>
 * 
 * EXAMPLE:
 * const lineChartGradientData: LineChartGradientData = {
 *   title: "Line chart with gradient",
 *   chartId: "line-chart-gradient",
 *   chartData: {
 *     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
 *     datasets: [{
 *       label: "Sales",
 *       data: [12, 19, 3, 5, 2, 3],
 *       borderColor: "#3B82F6",
 *       backgroundColor: gradient,
 *       tension: 0.4,
 *       fill: true
 *     }]
 *   }
 * };
 * 
 * REUSABILITY: High - Configurable line chart with gradient component
 * COMPLEXITY: Medium - Chart.js integration and gradient management
 */
@Component({
  selector: 'app-line-chart-gradient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-chart-gradient.html'
})
export class LineChartGradientComponent implements AfterViewInit, OnDestroy, OnChanges {
  /** Line chart with gradient data including labels, datasets, and styling */
  @Input() data!: LineChartGradientData;
  
  /** Chart.js instance for managing the chart */
  private chart: any = null;

  constructor(private elementRef: ElementRef) {}

  /**
   * Initialize chart after view is ready
   */
  ngAfterViewInit() {
    this.initializeChart();
  }

  /**
   * Lifecycle hook that is called when data-bound properties change.
   * 
   * Handles data changes and updates the chart accordingly.
   * Re-renders chart when input data changes.
   * 
   * @param {SimpleChanges} changes - Angular changes object containing property changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && !changes['data'].firstChange && this.data) {
      this.updateChart();
    }
  }

  /**
   * Clean up chart instance on component destruction
   */
  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  /**
   * Initialize the line chart with gradient using Chart.js
   */
  private initializeChart(): void {
    const canvas = this.elementRef.nativeElement.querySelector(`#${this.data.chartId}`);
    
    if (!canvas) {
      console.error(`Canvas element with id '${this.data.chartId}' not found`);
      return;
    }

    const ctx = canvas.getContext('2d');

    // Create gradients
    const gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke1.addColorStop(1, 'rgba(94, 114, 228, 0.2)');
    gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke1.addColorStop(0, 'rgba(94, 114, 228,0)');

    const gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
    gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)');

    // Update datasets with gradients
    const chartData = {
      ...this.data.chartData,
      datasets: [
        { ...this.data.chartData.datasets[0], backgroundColor: gradientStroke1 },
        { ...this.data.chartData.datasets[1], backgroundColor: gradientStroke2 }
      ]
    };

    // Destroy existing chart if it exists
    if (this.chart) {
      this.chart.destroy();
    }

    // Create new chart
    this.chart = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        interaction: {
          intersect: false,
          mode: 'index'
        },
        scales: {
          y: {
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false
            },
            ticks: {
              display: true,
              padding: 10,
              color: '#b2b9bf'
            }
          },
          x: {
            grid: {
              display: false,
              drawOnChartArea: false,
              drawTicks: false
            },
            ticks: {
              display: true,
              color: '#b2b9bf',
              padding: 10
            }
          }
        }
      }
    });
  }

  /**
   * Update chart data when input changes.
   * 
   * Re-renders chart with new data without recreating the instance.
   * Updates labels, datasets, and data values efficiently.
   */
  private updateChart(): void {
    if (this.chart && this.data) {
      const canvas = this.elementRef.nativeElement.querySelector(`#${this.data.chartId}`);
      
      if (!canvas) {
        console.error(`Canvas element with id '${this.data.chartId}' not found`);
        return;
      }

      const ctx = canvas.getContext('2d');

      // Create gradients
      const gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke1.addColorStop(1, 'rgba(94, 114, 228, 0.2)');
      gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
      gradientStroke1.addColorStop(0, 'rgba(94, 114, 228,0)');

      const gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
      gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
      gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)');

      // Update chart data
      this.chart.data.labels = this.data.chartData.labels;
      this.chart.data.datasets = [
        { ...this.data.chartData.datasets[0], backgroundColor: gradientStroke1 },
        { ...this.data.chartData.datasets[1], backgroundColor: gradientStroke2 }
      ];
      this.chart.update();
    }
  }
} 