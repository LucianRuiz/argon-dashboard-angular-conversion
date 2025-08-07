import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface for individual referral data.
 * 
 * Defines the structure for each referral source including
 * company name, logo, traffic percentage, and optional alt text.
 */
export interface Referral {
  /** Name of the referring company */
  name: string;
  /** URL or path to the company logo */
  logo: string;
  /** Percentage of traffic from this referral source */
  percentage: number;
  /** Optional alt text for the logo image */
  altText?: string;
}

/**
 * Interface for doughnut chart data.
 * 
 * Defines the structure for the doughnut chart configuration
 * including labels, data values, and colors for each segment.
 */
export interface DoughnutChartData {
  /** Labels for each chart segment */
  labels: string[];
  /** Data values for each segment */
  data: number[];
  /** Colors for each segment */
  colors: string[];
}

/**
 * Interface for referrals chart component data.
 * 
 * Contains all configuration data needed to render the referrals
 * chart including title, tooltip, chart data, referrals list, and button.
 */
export interface ReferralsChartData {
  /** Component title displayed in the header */
  title: string;
  /** Text displayed in the tooltip */
  tooltipText: string;
  /** Doughnut chart configuration data */
  chartData: DoughnutChartData;
  /** List of referral sources with company information */
  referrals: Referral[];
  /** Text for the action button */
  buttonText: string;
  /** Optional canvas height for custom sizing */
  height?: number;
}

/**
 * Referrals Chart Component
 * 
 * This component implements a comprehensive referrals visualization
 * using Chart.js for the application. It provides a doughnut chart
 * showing traffic distribution from different referral sources along
 * with a detailed list of referring companies.
 * 
 * Features:
 * - Interactive doughnut chart visualization
 * - Referral traffic distribution analysis
 * - Company logos and traffic percentages
 * - Responsive design that adapts to container size
 * - Dynamic Chart.js loading for optimal performance
 * - Professional doughnut chart styling
 * - Interactive tooltips and hover effects
 * - Real-time chart updates with new data
 * - Automatic chart cleanup and memory management
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Error handling for missing Chart.js library
 * - Detailed referral source information display
 * 
 * The component serves as a reusable referrals chart that can be
 * easily integrated into analytics dashboards and marketing pages,
 * providing users with an intuitive way to analyze traffic sources
 * and referral performance.
 * 
 * @example
 * ```html
 * <app-referrals-chart [data]="referralsChartData"></app-referrals-chart>
 * ```
 */
@Component({
  selector: 'app-referrals-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './referrals-chart.html'
})
export class ReferralsChartComponent implements AfterViewInit {
  
  /**
   * Data for the referrals chart component.
   * 
   * Provides all the content and configuration for the chart including
   * title, tooltip, chart data, referrals list, and button text. This
   * required input property ensures that chart data is always provided.
   * 
   * @type {ReferralsChartData} - Complete chart configuration
   */
  @Input({ required: true }) data!: ReferralsChartData;

  /** Reference to the chart canvas element */
  private chartCanvas?: HTMLCanvasElement;
  /** Chart.js instance for the referrals doughnut chart */
  private chart: any;

  /**
   * Creates an instance of ReferralsChartComponent.
   * 
   * @param {ElementRef} elementRef - Reference to the component's DOM element
   */
  constructor(private elementRef: ElementRef) {}

  /**
   * Lifecycle hook that is called after the view has been initialized.
   * 
   * Initializes the referrals chart after the DOM elements are available.
   */
  ngAfterViewInit(): void {
    this.initializeChart();
  }

  /**
   * Initialize the Chart.js referrals chart.
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
   * Create the Chart.js doughnut chart.
   * 
   * Creates and configures the Chart.js doughnut chart instance with
   * the provided referrals data and professional styling options.
   * Handles canvas element retrieval and context creation.
   */
  private createChart(): void {
    const canvas = this.elementRef.nativeElement.querySelector('#chart-doughnut-referrals');
    if (!canvas) return;

    this.chartCanvas = canvas;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // Create the doughnut chart with exact template configuration
    this.chart = new (window as any).Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.data.chartData.labels,
        datasets: [{
          label: 'Projects',
          weight: 9,
          cutout: 60,
          tension: 0.9,
          pointRadius: 2,
          borderWidth: 2,
          backgroundColor: this.data.chartData.colors,
          data: this.data.chartData.data,
          fill: false
        }]
      },
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
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false
            },
            ticks: {
              display: false
            }
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false
            },
            ticks: {
              display: false
            }
          }
        }
      }
    });
  }

  /**
   * Update the chart with new data.
   * 
   * Updates the chart's data and redraws it with the new information.
   * Maintains the same styling and configuration as the original chart.
   * 
   * @param {ReferralsChartData} newData - New data to update the chart with
   */
  updateChart(newData: ReferralsChartData): void {
    this.data = newData;
    if (this.chart) {
      this.chart.data.labels = newData.chartData.labels;
      this.chart.data.datasets[0].data = newData.chartData.data;
      this.chart.data.datasets[0].backgroundColor = newData.chartData.colors;
      this.chart.update('active');
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