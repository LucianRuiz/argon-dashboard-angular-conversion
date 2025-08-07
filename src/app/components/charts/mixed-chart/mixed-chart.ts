import { Component, Input, OnInit, OnDestroy, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

// Register all Chart.js modules
Chart.register(...registerables);

/**
 * Complete data structure for the mixed chart component.
 * 
 * Contains all configuration data needed to render the mixed
 * chart including title, chart ID, and dataset configuration
 * with support for both bar and line chart types in a single chart.
 */
export interface MixedChartData {
  /** Chart title displayed in the header */
  title: string;
  /** Chart ID for DOM element identification */
  chartId: string;
  /** Chart configuration data with labels and datasets */
  chartData: {
    /** Array of labels for the chart axes */
    labels: string[];
    /** Array of datasets containing mixed chart data */
    datasets: {
      /** Type of chart (bar, line, etc.) */
      type: string;
      /** Label for the dataset */
      label: string;
      /** Weight of the dataset for relative sizing */
      weight: number;
      /** Tension for smooth curves in line charts */
      tension: number;
      /** Width of the border */
      borderWidth: number;
      /** Background color for data points */
      pointBackgroundColor: string;
      /** Color of the border */
      borderColor: string;
      /** Background color or gradient for the dataset */
      backgroundColor: any;
      /** Border radius for bar charts */
      borderRadius: number;
      /** Whether to skip borders on certain elements */
      borderSkipped: boolean;
      /** Array of data values */
      data: number[];
      /** Maximum thickness for bars */
      maxBarThickness: number;
      /** Optional radius for data points */
      pointRadius?: number;
      /** Optional fill setting for line charts */
      fill?: boolean;
    }[];
  };
}

/**
 * Mixed Chart Component
 * 
 * This component implements a comprehensive mixed chart using Chart.js
 * for the application. It provides a visual representation that combines
 * different chart types (such as bars and lines) in a single chart,
 * allowing for complex data comparisons and analysis.
 * 
 * Features:
 * - Interactive mixed chart visualization
 * - Support for multiple chart types in one view
 * - Bar and line chart combination
 * - Gradient fills for enhanced visual appeal
 * - Responsive design that adapts to container size
 * - Chart.js integration with full module support
 * - Automatic chart cleanup on component destruction
 * - Error handling for missing canvas elements
 * - Professional mixed chart styling
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Lifecycle management for chart initialization and cleanup
 * - Customizable colors, gradients, and styling
 * - Interactive tooltips and hover effects
 * 
 * The component serves as a reusable mixed chart that can be
 * easily integrated into dashboards and analytics pages,
 * providing users with an intuitive way to compare different
 * types of data in a single, comprehensive visualization.
 * 
 * @example
 * ```html
 * <app-mixed-chart [data]="mixedChartData"></app-mixed-chart>
 * ```
 */
@Component({
  selector: 'app-mixed-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mixed-chart.html',
  styleUrls: ['./mixed-chart.css']
})
export class MixedChartComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  /**
   * Data for the mixed chart component.
   * 
   * Provides all the content and configuration for the chart including
   * title, chart ID, and dataset configuration. This input property
   * allows complete customization of the chart appearance and data.
   * 
   * @type {MixedChartData} - Complete chart configuration
   */
  @Input() data!: MixedChartData;
  
  /** Chart.js instance for the mixed chart */
  private chart: Chart | null = null;

  /**
   * Creates an instance of MixedChartComponent.
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
   * Initializes the mixed chart after the DOM elements are available.
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
   * Initialize the mixed chart with Chart.js.
   * 
   * Creates and configures the Chart.js mixed chart instance with
   * the provided data and styling options. Handles gradient creation
   * for line datasets and ensures proper chart cleanup.
   */
  private initializeChart(): void {
    const canvas = this.elementRef.nativeElement.querySelector(`#${this.data.chartId}`);
    
    if (!canvas) {
      console.error(`Canvas element with id '${this.data.chartId}' not found`);
      return;
    }

    const ctx = canvas.getContext('2d');

    // Create gradient for line dataset
    const gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke1.addColorStop(1, 'rgba(94, 114, 228, 0.2)');
    gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke1.addColorStop(0, 'rgba(94, 114, 228,0)');

    // Update datasets with gradient
    const chartData = {
      ...this.data.chartData,
      datasets: [
        this.data.chartData.datasets[0], // Bar dataset
        { ...this.data.chartData.datasets[1], backgroundColor: gradientStroke1 } // Line dataset
      ]
    };

    // Destroy existing chart if it exists
    if (this.chart) {
      this.chart.destroy();
    }

    // Create new chart
    this.chart = new Chart(ctx, {
      data: chartData as any,
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

      // Create gradient for line dataset
      const gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke1.addColorStop(1, 'rgba(94, 114, 228, 0.2)');
      gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
      gradientStroke1.addColorStop(0, 'rgba(94, 114, 228,0)');

      // Update chart data
      this.chart.data.labels = this.data.chartData.labels;
      this.chart.data.datasets = [
        this.data.chartData.datasets[0], // Bar dataset
        { ...this.data.chartData.datasets[1], backgroundColor: gradientStroke1 } // Line dataset
      ] as any;
      this.chart.update();
    }
  }
}
