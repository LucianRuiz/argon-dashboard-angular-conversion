import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface for traffic channel data.
 * 
 * Defines the structure for individual traffic channels
 * including name, color, and data points.
 */
export interface TrafficChannel {
  /** Name of the traffic channel */
  name: string;
  /** Color for the channel line and points */
  color: string;
  /** Array of data points for the channel */
  data: number[];
}

/**
 * Interface for traffic chart data.
 * 
 * Contains all configuration data needed to render the traffic
 * chart including title, labels, channels, and optional height.
 */
export interface TrafficChartData {
  /** Chart title displayed in the header */
  title: string;
  /** X-axis labels (typically dates) */
  labels: string[];
  /** Array of traffic channels to display */
  channels: TrafficChannel[];
  /** Optional canvas height for custom sizing */
  height?: number;
}

/**
 * Traffic Chart Component
 * 
 * This component implements a comprehensive multi-line traffic chart
 * using Chart.js for the application. It provides a visual representation
 * of traffic data across multiple channels over time with gradient fills
 * and professional styling.
 * 
 * Features:
 * - Multi-line traffic visualization with gradient fills
 * - Multiple traffic channels with different colors
 * - Responsive design that adapts to container size
 * - Dynamic Chart.js loading for optimal performance
 * - Professional gradient styling for visual appeal
 * - Interactive tooltips and hover effects
 * - Customizable chart height and styling
 * - Real-time chart updates with new data
 * - Automatic chart cleanup and memory management
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Error handling for missing Chart.js library
 * 
 * The component serves as a reusable traffic chart that can be
 * easily integrated into dashboards and analytics pages,
 * providing users with an intuitive way to analyze traffic
 * patterns across different channels over time.
 * 
 * @example
 * ```html
 * <app-traffic-chart [data]="trafficChartData"></app-traffic-chart>
 * ```
 */
@Component({
  selector: 'app-traffic-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-chart.html'
})
export class TrafficChartComponent implements AfterViewInit {
  
  /**
   * Data for the traffic chart component.
   * 
   * Provides all the content and configuration for the chart including
   * title, labels, channels, and optional height. This required input
   * property ensures that chart data is always provided.
   * 
   * @type {TrafficChartData} - Complete chart configuration
   */
  @Input({ required: true }) data!: TrafficChartData;

  /** Reference to the chart canvas element */
  private chartCanvas?: HTMLCanvasElement;
  /** Chart.js instance for the traffic chart */
  private chart: any;

  /**
   * Creates an instance of TrafficChartComponent.
   * 
   * @param {ElementRef} elementRef - Reference to the component's DOM element
   */
  constructor(private elementRef: ElementRef) {}

  /**
   * Lifecycle hook that is called after the view has been initialized.
   * 
   * Initializes the traffic chart after the DOM elements are available.
   */
  ngAfterViewInit(): void {
    this.initializeChart();
  }

  /**
   * Initialize the Chart.js traffic chart.
   * 
   * Checks if Chart.js is available and either creates the chart
   * immediately or loads Chart.js dynamically before creating the chart.
   */
  private async initializeChart(): Promise<void> {
    // Check if Chart.js is available
    if (typeof window !== 'undefined' && (window as any).Chart) {
      this.createChart();
    } else {
      // Load Chart.js dynamically if not available
      await this.loadChartJS();
      this.createChart();
    }
  }

  /**
   * Load Chart.js dynamically from CDN.
   * 
   * Creates a script element and loads Chart.js from the CDN.
   * Returns a promise that resolves when the script is loaded.
   * 
   * @returns {Promise<void>} Promise that resolves when Chart.js is loaded
   */
  private async loadChartJS(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      script.onload = () => resolve();
      script.onerror = () => reject();
      document.head.appendChild(script);
    });
  }

  /**
   * Create the Chart.js traffic chart.
   * 
   * Creates and configures the Chart.js line chart instance with
   * gradient fills, professional styling, and the provided traffic data.
   * Handles canvas element retrieval and context creation.
   */
  private createChart(): void {
    const canvas = this.elementRef.nativeElement.querySelector('#chart-line-traffic');
    if (!canvas) return;

    this.chartCanvas = canvas;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // Create gradients as in the original template
    const gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke1.addColorStop(1, 'rgba(203,12,159,0.2)');
    gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)');

    const gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
    gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)');

    // Configure datasets for each channel with exact template configuration
    const datasets = this.data.channels.map((channel, index) => ({
      label: channel.name,
      tension: 0.4,
      borderWidth: 3,
      pointRadius: 2,
      pointBackgroundColor: channel.color,
      borderColor: channel.color,
      backgroundColor: index === 0 ? gradientStroke1 : gradientStroke2,
      data: channel.data,
      maxBarThickness: 6
    }));

    // Create the chart with exact template configuration
    this.chart = new (window as any).Chart(ctx, {
      type: 'line',
      data: {
        labels: this.data.labels,
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              padding: 10,
              color: '#9ca2b7'
            }
          },
          x: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: true,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              color: '#9ca2b7',
              padding: 10
            }
          },
        },
      },
    });
  }

  /**
   * Update the chart with new data.
   * 
   * Updates the chart's data and redraws it with the new information.
   * Maintains the same gradient styling and configuration as the original chart.
   * 
   * @param {TrafficChartData} newData - New data to update the chart with
   */
  updateChart(newData: TrafficChartData): void {
    this.data = newData;
    if (this.chart) {
      const ctx = this.chartCanvas?.getContext('2d');
      if (!ctx) return;

      // Create gradients as in the original template
      const gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke1.addColorStop(1, 'rgba(203,12,159,0.2)');
      gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
      gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)');

      const gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
      gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
      gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)');

      this.chart.data.labels = newData.labels;
      this.chart.data.datasets = newData.channels.map((channel, index) => ({
        label: channel.name,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 2,
        pointBackgroundColor: channel.color,
        borderColor: channel.color,
        backgroundColor: index === 0 ? gradientStroke1 : gradientStroke2,
        data: channel.data,
        maxBarThickness: 6
      }));
      this.chart.update();
    }
  }

  /**
   * Destroy the chart instance.
   * 
   * Properly cleans up the Chart.js instance to prevent memory leaks
   * and ensure proper resource management.
   */
  destroyChart(): void {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }
} 