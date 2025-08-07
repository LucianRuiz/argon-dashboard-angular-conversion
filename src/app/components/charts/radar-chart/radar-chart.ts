import { Component, Input, OnInit, OnDestroy, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

// Register all Chart.js modules
Chart.register(...registerables);

/**
 * Complete data structure for the radar chart component.
 * 
 * Contains all configuration data needed to render the radar
 * chart including title, chart ID, and dataset configuration
 * with labels, colors, and data values.
 */
export interface RadarChartData {
  /** Chart title displayed in the header */
  title: string;
  /** Chart ID for DOM element identification */
  chartId: string;
  /** Chart configuration data with labels and datasets */
  chartData: {
    /** Array of labels for the radar chart axes */
    labels: string[];
    /** Array of datasets containing radar data */
    datasets: {
      /** Label for the dataset */
      label: string;
      /** Background color for the radar area */
      backgroundColor: string;
      /** Array of data values for each axis */
      data: number[];
      /** Optional border dash pattern for the line */
      borderDash?: number[];
    }[];
  };
}

/**
 * Radar Chart Component
 * 
 * This component implements a comprehensive radar chart using Chart.js
 * for the application. It provides a visual representation of multivariate
 * data in a circular format, ideal for comparing multiple variables or
 * performance metrics across different categories.
 * 
 * Features:
 * - Interactive radar chart visualization
 * - Multivariate data comparison
 * - Multiple datasets with different colors
 * - Responsive design that adapts to container size
 * - Chart.js integration with full module support
 * - Automatic chart cleanup on component destruction
 * - Error handling for missing canvas elements
 * - Professional radar chart styling
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Lifecycle management for chart initialization and cleanup
 * - Optional border dash patterns for visual variety
 * 
 * The component serves as a reusable radar chart that can be
 * easily integrated into dashboards and analytics pages,
 * providing users with an intuitive way to compare multiple
 * variables or performance metrics in a circular format.
 * 
 * @example
 * ```html
 * <app-radar-chart [data]="radarChartData"></app-radar-chart>
 * ```
 */
@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radar-chart.html',
  styleUrls: ['./radar-chart.css']
})
export class RadarChartComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  /**
   * Data for the radar chart component.
   * 
   * Provides all the content and configuration for the chart including
   * title, chart ID, and dataset configuration. This input property
   * allows complete customization of the chart appearance and data.
   * 
   * @type {RadarChartData} - Complete chart configuration
   */
  @Input() data!: RadarChartData;
  
  /** Chart.js instance for the radar chart */
  private chart: Chart | null = null;

  /**
   * Creates an instance of RadarChartComponent.
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
   * Initializes the radar chart after the DOM elements are available.
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
   * Initialize the radar chart with Chart.js.
   * 
   * Creates and configures the Chart.js radar chart instance with
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
      type: 'radar',
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
