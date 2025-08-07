import { Component, Input, OnInit, OnDestroy, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

// Register all Chart.js modules
Chart.register(...registerables);

/**
 * Data structure for individual bubble data points.
 * 
 * Defines the structure for each bubble in the chart with
 * x and y coordinates and radius for bubble size.
 */
export interface BubbleDataPoint {
  /** X-axis coordinate value */
  x: number;
  /** Y-axis coordinate value */
  y: number;
  /** Radius of the bubble (determines bubble size) */
  r: number;
}

/**
 * Complete data structure for the bubble chart component.
 * 
 * Contains all configuration data needed to render the bubble
 * chart including title, chart ID, and dataset configuration.
 */
export interface BubbleChartData {
  /** Chart title displayed in the header */
  title: string;
  /** Chart ID for DOM element identification */
  chartId: string;
  /** Chart configuration data with labels and datasets */
  chartData: {
    /** Array of labels for the chart axes */
    labels: string[];
    /** Array of datasets containing bubble data */
    datasets: {
      /** Label for the dataset */
      label: string;
      /** Array of bubble data points */
      data: BubbleDataPoint[];
      /** Background color for the bubbles */
      backgroundColor: string;
    }[];
  };
}

/**
 * Bubble Chart Component
 * 
 * This component implements a comprehensive bubble chart using Chart.js
 * for the application. It provides a visual representation of three-dimensional
 * data where each data point is represented as a bubble with position (x, y)
 * and size (radius).
 * 
 * Features:
 * - Interactive bubble chart visualization
 * - Three-dimensional data representation (x, y, radius)
 * - Responsive design that adapts to container size
 * - Customizable colors and styling
 * - Chart.js integration with full module support
 * - Automatic chart cleanup on component destruction
 * - Error handling for missing canvas elements
 * - Professional grid and axis styling
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Lifecycle management for chart initialization and cleanup
 * 
 * The component serves as a reusable bubble chart that can be
 * easily integrated into dashboards and data visualization pages,
 * providing users with an intuitive way to analyze relationships
 * between three variables in a single chart.
 * 
 * @example
 * ```html
 * <app-bubble-chart [data]="bubbleChartData"></app-bubble-chart>
 * ```
 */
@Component({
  selector: 'app-bubble-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bubble-chart.html'
})
export class BubbleChartComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  /**
   * Data for the bubble chart component.
   * 
   * Provides all the content and configuration for the chart including
   * title, chart ID, and dataset configuration. This input property
   * allows complete customization of the chart appearance and data.
   * 
   * @type {BubbleChartData} - Complete chart configuration
   */
  @Input() data!: BubbleChartData;
  
  /** Chart.js instance for the bubble chart */
  private chart: Chart | null = null;

  /**
   * Creates an instance of BubbleChartComponent.
   * 
   * @param {ElementRef} elementRef - Reference to the component's DOM element
   */
  constructor(private elementRef: ElementRef) {}

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * 
   * Currently empty but can be used for component initialization logic.
   */
  ngOnInit(): void {
    // Component initialization
  }

  /**
   * Lifecycle hook that is called after the view has been initialized.
   * 
   * Initializes the bubble chart after the DOM elements are available.
   */
  ngAfterViewInit(): void {
    this.initializeChart();
  }

  /**
   * Lifecycle hook that is called before the component is destroyed.
   * 
   * Cleans up the Chart.js instance to prevent memory leaks.
   */
  ngOnDestroy(): void {
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
   * Initialize the bubble chart with Chart.js.
   * 
   * Creates and configures the Chart.js bubble chart instance with
   * the provided data and styling options. Handles error cases for
   * missing canvas elements and ensures proper chart cleanup.
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
      type: 'bubble',
      data: this.data.chartData,
      options: {
        responsive: true,
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
              color: '#b2b9bf'
            }
          },
          x: {
            grid: {
              display: true,
              drawOnChartArea: true,
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
      // Update chart data
      this.chart.data.labels = this.data.chartData.labels;
      this.chart.data.datasets = this.data.chartData.datasets;
      this.chart.update();
    }
  }
}
