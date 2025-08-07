import { Component, Input, OnInit, OnDestroy, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

// Register all Chart.js modules
Chart.register(...registerables);

/**
 * Complete data structure for the polar chart component.
 * 
 * Contains all configuration data needed to render the polar
 * chart including title, chart ID, and dataset configuration
 * with labels, data values, and colors.
 */
export interface PolarChartData {
  /** Chart title displayed in the header */
  title: string;
  /** Chart ID for DOM element identification */
  chartId: string;
  /** Chart configuration data with labels and datasets */
  chartData: {
    /** Array of labels for each polar segment */
    labels: string[];
    /** Array of datasets containing polar data */
    datasets: {
      /** Label for the dataset */
      label: string;
      /** Array of data values for each segment */
      data: number[];
      /** Array of background colors for each segment */
      backgroundColor: string[];
    }[];
  };
}

/**
 * Polar Chart Component
 * 
 * This component implements a comprehensive polar area chart using Chart.js
 * for the application. It provides a visual representation of data in a
 * circular format where each segment's area represents the data value,
 * making it ideal for showing proportions and distributions.
 * 
 * Features:
 * - Interactive polar area chart visualization
 * - Proportional data representation
 * - Multiple datasets with different colors
 * - Responsive design that adapts to container size
 * - Chart.js integration with full module support
 * - Automatic chart cleanup on component destruction
 * - Error handling for missing canvas elements
 * - Professional polar chart styling
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Lifecycle management for chart initialization and cleanup
 * - Color-coded segments for easy data interpretation
 * 
 * The component serves as a reusable polar chart that can be
 * easily integrated into dashboards and analytics pages,
 * providing users with an intuitive way to visualize data
 * proportions and distributions in a circular format.
 * 
 * @example
 * ```html
 * <app-polar-chart [data]="polarChartData"></app-polar-chart>
 * ```
 */
@Component({
  selector: 'app-polar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './polar-chart.html',
  styleUrls: ['./polar-chart.css']
})
export class PolarChartComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  /**
   * Data for the polar chart component.
   * 
   * Provides all the content and configuration for the chart including
   * title, chart ID, and dataset configuration. This input property
   * allows complete customization of the chart appearance and data.
   * 
   * @type {PolarChartData} - Complete chart configuration
   */
  @Input() data!: PolarChartData;
  
  /** Chart.js instance for the polar chart */
  private chart: Chart | null = null;

  /**
   * Creates an instance of PolarChartComponent.
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
   * Initializes the polar chart after the DOM elements are available.
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
   * Initialize the polar chart with Chart.js.
   * 
   * Creates and configures the Chart.js polar area chart instance with
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
      type: 'polarArea',
      data: this.data.chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
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
