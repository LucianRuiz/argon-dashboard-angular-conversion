import { Component, Input, AfterViewInit, ElementRef, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

// Register all Chart.js modules
Chart.register(...registerables);

/**
 * Interface representing bar chart data.
 * 
 * Defines the structure for bar chart information including
 * title, chart ID, and dataset configuration with styling options.
 */
export interface BarChartData {
  /** Chart title displayed in the header */
  title: string;
  /** Chart ID for DOM element identification */
  chartId: string;
  /** Chart configuration data with labels and datasets */
  chartData: {
    /** Array of labels for the chart axes */
    labels: string[];
    /** Array of datasets containing bar chart data */
    datasets: {
      /** Label for the dataset */
      label: string;
      /** Weight of the dataset for relative sizing */
      weight: number;
      /** Width of the border */
      borderWidth: number;
      /** Border radius for rounded corners */
      borderRadius: number;
      /** Background color for the bars */
      backgroundColor: string;
      /** Array of data values */
      data: number[];
      /** Whether to fill the bars */
      fill: boolean;
      /** Maximum thickness for bars */
      maxBarThickness: number;
    }[];
  };
}

/**
 * Bar Chart Component
 * 
 * This component implements a comprehensive vertical bar chart using Chart.js
 * for the application. It provides a visual representation of data in a
 * vertical bar format, making it ideal for comparing values across categories
 * and showing data trends over time.
 * 
 * Features:
 * - Interactive vertical bar chart visualization
 * - Category comparison with vertical orientation
 * - Real-time data updates with chart re-rendering
 * - Customizable colors and styling
 * - Responsive design with dark mode support
 * - Professional chart configuration and styling
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Lifecycle management for chart initialization and cleanup
 * - Error handling for missing canvas elements
 * - Optimized bar thickness for better visualization
 * - Grid lines for better readability
 * 
 * The component serves as a reusable vertical bar chart that can be
 * easily integrated into dashboards and analytics pages,
 * providing users with an intuitive way to compare data across
 * categories in a traditional vertical format.
 * 
 * @example
 * ```html
 * <app-bar-chart [data]="barChartData"></app-bar-chart>
 * ```
 * 
 * @example
 * ```typescript
 * const barChartData: BarChartData = {
 *   title: "Bar chart",
 *   chartId: "bar-chart",
 *   chartData: {
 *     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
 *     datasets: [{
 *       label: "Sales",
 *       data: [12, 19, 3, 5, 2, 3],
 *       backgroundColor: "#3B82F6",
 *       borderColor: "#3B82F6",
 *       borderWidth: 0,
 *       borderRadius: 4
 *     }]
 *   }
 * };
 * ```
 */
@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar-chart.html'
})
export class BarChartComponent implements AfterViewInit, OnDestroy, OnChanges {
  /**
   * Data for the bar chart component.
   * 
   * Provides all the content and configuration for the chart including
   * title, chart ID, and dataset configuration. This input property
   * allows complete customization of the chart appearance and data.
   * 
   * @type {BarChartData} - Complete chart configuration
   */
  @Input() data!: BarChartData;
  
  /** Chart.js instance for the bar chart */
  private chart: any = null;

  /**
   * Creates an instance of BarChartComponent.
   * 
   * @param {ElementRef} elementRef - Reference to the component's DOM element
   */
  constructor(private elementRef: ElementRef) {}

  /**
   * Lifecycle hook that is called after the view has been initialized.
   * 
   * Initializes the bar chart after the DOM elements are available.
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
   * Initialize the bar chart with Chart.js.
   * 
   * Creates and configures the Chart.js vertical bar chart instance with
   * the provided data and styling options. Handles canvas element retrieval
   * and ensures proper chart cleanup.
   */
  private initializeChart(): void {
    const canvas = this.elementRef.nativeElement.querySelector(`#${this.data.chartId}`);
    
    if (!canvas) {
      console.error(`Canvas element with id '${this.data.chartId}' not found`);
      return;
    }

    const ctx = canvas.getContext('2d');

    // Destroy existing chart if it exists
    if (this.chart) {
      this.chart.destroy();
    }

    // Create new chart
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: this.data.chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
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
              color: '#9ca2b7'
            }
          },
          x: {
            grid: {
              display: false,
              drawOnChartArea: true,
              drawTicks: true
            },
            ticks: {
              display: true,
              color: '#9ca2b7',
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
      // Update chart data
      this.chart.data.labels = this.data.chartData.labels;
      this.chart.data.datasets = this.data.chartData.datasets;
      this.chart.update();
    }
  }
} 