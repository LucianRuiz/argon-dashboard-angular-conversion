import { Component, Input, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

// Register all Chart.js modules
Chart.register(...registerables);

/**
 * Complete data structure for the revenue line chart component.
 * 
 * Contains all configuration data needed to render the revenue
 * line chart including title, chart ID, legend, and dataset configuration.
 */
export interface RevenueLineChartData {
  /** Chart title displayed in the header */
  title: string;
  /** Chart ID for DOM element identification */
  chartId: string;
  /** Legend items with labels and colors */
  legend: { 
    /** Label text for the legend item */
    label: string; 
    /** Color for the legend item */
    color: string; 
  }[];
  /** Chart configuration data with labels and datasets */
  chartData: {
    /** Array of labels for the chart axes */
    labels: string[];
    /** Array of datasets containing revenue data */
    datasets: any[];
  };
}

/**
 * Revenue Line Chart Component
 * 
 * This component implements a comprehensive revenue line chart using Chart.js
 * for the application. It provides a visual representation of revenue data
 * over time with professional styling and interactive features.
 * 
 * Features:
 * - Interactive revenue line chart visualization
 * - Time-series data representation
 * - Responsive design that adapts to container size
 * - Customizable legend with colors
 * - Chart.js integration with full module support
 * - Automatic chart cleanup on component destruction
 * - Professional grid and axis styling
 * - Interactive tooltips and hover effects
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Lifecycle management for chart initialization and cleanup
 * - Error handling for missing canvas elements
 * 
 * The component serves as a reusable revenue chart that can be
 * easily integrated into dashboards and financial analytics pages,
 * providing users with an intuitive way to analyze revenue trends
 * and patterns over time.
 * 
 * @example
 * ```html
 * <app-revenue-line-chart [data]="revenueChartData"></app-revenue-line-chart>
 * ```
 */
@Component({
  selector: 'app-revenue-line-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './revenue-line-chart.html'
})
export class RevenueLineChartComponent implements AfterViewInit, OnDestroy {
  /**
   * Data for the revenue line chart component.
   * 
   * Provides all the content and configuration for the chart including
   * title, chart ID, legend, and dataset configuration. This input
   * property allows complete customization of the chart appearance and data.
   * 
   * @type {RevenueLineChartData} - Complete chart configuration
   */
  @Input() data!: RevenueLineChartData;

  /** Chart.js instance for the revenue line chart */
  private chart: any = null;

  /**
   * Creates an instance of RevenueLineChartComponent.
   * 
   * @param {ElementRef} elementRef - Reference to the component's DOM element
   */
  constructor(private elementRef: ElementRef) {}

  /**
   * Lifecycle hook that is called after the view has been initialized.
   * 
   * Initializes the revenue line chart after the DOM elements are available.
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
   * Initialize the revenue line chart with Chart.js.
   * 
   * Creates and configures the Chart.js line chart instance with
   * the provided revenue data and professional styling options.
   * Handles canvas element retrieval and ensures proper chart cleanup.
   */
  private initializeChart(): void {
    const canvas = this.elementRef.nativeElement.querySelector(`#${this.data.chartId}`);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (this.chart) this.chart.destroy();
    
    this.chart = new Chart(ctx, {
      type: 'line',
      data: this.data.chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        interaction: { intersect: false, mode: 'index' },
        scales: {
          y: {
            grid: { display: true, drawOnChartArea: true, drawTicks: false },
            ticks: { display: true, padding: 10, color: '#9ca2b7' }
          },
          x: {
            grid: { display: true, drawOnChartArea: true, drawTicks: true },
            ticks: { display: true, color: '#9ca2b7', padding: 10 }
          }
        }
      }
    });
  }
} 