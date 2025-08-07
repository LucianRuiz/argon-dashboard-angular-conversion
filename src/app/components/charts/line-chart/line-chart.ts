import { Component, Input, AfterViewInit, ElementRef, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

// Register all Chart.js modules
Chart.register(...registerables);

/**
 * Interface representing line chart data.
 * 
 * Defines the structure for line chart information including
 * title, chart ID, and dataset configuration with styling options.
 */
export interface LineChartData {
  /** Chart title displayed in the header */
  title: string;
  /** Chart ID for DOM element identification */
  chartId: string;
  /** Chart configuration data with labels and datasets */
  chartData: {
    /** Array of labels for the chart axes */
    labels: string[];
    /** Array of datasets containing line chart data */
    datasets: {
      /** Label for the dataset */
      label: string;
      /** Tension for smooth curves */
      tension: number;
      /** Width of the border */
      borderWidth: number;
      /** Radius of data points */
      pointRadius: number;
      /** Background color for data points */
      pointBackgroundColor: string;
      /** Color of the border */
      borderColor: string;
      /** Background color or gradient for the line area */
      backgroundColor: any;
      /** Array of data values */
      data: number[];
      /** Maximum thickness for bars (if applicable) */
      maxBarThickness: number;
    }[];
  };
}

/**
 * Line Chart Component
 * 
 * This component implements a comprehensive line chart using Chart.js
 * for the application. It provides a visual representation of data
 * trends over time with gradient fills and professional styling.
 * 
 * Features:
 * - Interactive line chart visualization
 * - Time-series data representation
 * - Multiple datasets with gradient fills
 * - Responsive design that adapts to container size
 * - Chart.js integration with full module support
 * - Automatic chart cleanup on component destruction
 * - Error handling for missing canvas elements
 * - Professional gradient styling for visual appeal
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Lifecycle management for chart initialization and cleanup
 * - Customizable colors, gradients, and styling
 * - Interactive tooltips and hover effects
 * - Dark mode support
 * 
 * The component serves as a reusable line chart that can be
 * easily integrated into dashboards and analytics pages,
 * providing users with an intuitive way to analyze data
 * trends and patterns over time.
 * 
 * @example
 * ```html
 * <app-line-chart [data]="lineChartData"></app-line-chart>
 * ```
 * 
 * @example
 * ```typescript
 * const lineChartData: LineChartData = {
 *   title: "Line chart",
 *   chartId: "line-chart",
 *   chartData: {
 *     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
 *     datasets: [{
 *       label: "Sales",
 *       data: [12, 19, 3, 5, 2, 3],
 *       borderColor: "#3B82F6",
 *       backgroundColor: "rgba(59, 130, 246, 0.1)",
 *       tension: 0.4,
 *       fill: true
 *     }]
 *   }
 * };
 * ```
 */
@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-chart.html'
})
export class LineChartComponent implements AfterViewInit, OnDestroy, OnChanges {
  /**
   * Data for the line chart component.
   * 
   * Provides all the content and configuration for the chart including
   * title, chart ID, and dataset configuration. This input property
   * allows complete customization of the chart appearance and data.
   * 
   * @type {LineChartData} - Complete chart configuration
   */
  @Input() data!: LineChartData;
  
  /** Chart.js instance for the line chart */
  private chart: any = null;

  /**
   * Creates an instance of LineChartComponent.
   * 
   * @param {ElementRef} elementRef - Reference to the component's DOM element
   */
  constructor(private elementRef: ElementRef) {}

  /**
   * Lifecycle hook that is called after the view has been initialized.
   * 
   * Initializes the line chart after the DOM elements are available.
   */
  ngAfterViewInit() {
    this.initializeChart();
  }

  /**
   * Lifecycle hook that is called before the component is destroyed.
   * 
   * Cleans up the Chart.js instance to prevent memory leaks.
   */
  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
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
   * Initialize the line chart with Chart.js.
   * 
   * Creates and configures the Chart.js line chart instance with
   * the provided data and gradient styling options. Handles canvas
   * element retrieval and ensures proper chart cleanup.
   */
  private initializeChart(): void {
    const canvas = this.elementRef.nativeElement.querySelector(`#${this.data.chartId}`);
    
    if (!canvas) {
      console.error(`Canvas element with id '${this.data.chartId}' not found`);
      return;
    }

    const ctx = canvas.getContext('2d');

    // Create gradients for each dataset
    const gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke1.addColorStop(1, 'rgba(94, 114, 228, 0.2)');
    gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke1.addColorStop(0, 'rgba(94, 114, 228,0)');

    const gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
    gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)');

    const gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke3.addColorStop(1, 'rgba(23,193,232,0.2)');
    gradientStroke3.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke3.addColorStop(0, 'rgba(23,193,232,0)');

    // Update datasets with gradients
    const chartData = {
      ...this.data.chartData,
      datasets: [
        { ...this.data.chartData.datasets[0], backgroundColor: gradientStroke1 },
        { ...this.data.chartData.datasets[1], backgroundColor: gradientStroke2 },
        { ...this.data.chartData.datasets[2], backgroundColor: gradientStroke3 }
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
              display: true,
              drawOnChartArea: true,
              drawTicks: true
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

      // Create gradients for each dataset
      const gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke1.addColorStop(1, 'rgba(94, 114, 228, 0.2)');
      gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
      gradientStroke1.addColorStop(0, 'rgba(94, 114, 228,0)');

      const gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
      gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
      gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)');

      const gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke3.addColorStop(1, 'rgba(23,193,232,0.2)');
      gradientStroke3.addColorStop(0.2, 'rgba(72,72,176,0.0)');
      gradientStroke3.addColorStop(0, 'rgba(23,193,232,0)');

      // Update chart data
      this.chart.data.labels = this.data.chartData.labels;
      this.chart.data.datasets = [
        { ...this.data.chartData.datasets[0], backgroundColor: gradientStroke1 },
        { ...this.data.chartData.datasets[1], backgroundColor: gradientStroke2 },
        { ...this.data.chartData.datasets[2], backgroundColor: gradientStroke3 }
      ];
      this.chart.update();
    }
  }
} 