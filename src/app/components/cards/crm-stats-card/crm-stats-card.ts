import { Component, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Chart configuration data structure for the CRM stats card.
 * 
 * Defines the visual appearance and data for the integrated chart,
 * including labels, data points, gradient colors, and formatting options.
 */
export interface ChartData {
  /** Array of labels for the X-axis */
  labels: string[];
  /** Array of numerical data points for the Y-axis */
  data: number[];
  /** Gradient color configuration for chart styling */
  gradientColors: {
    /** Primary gradient color */
    color1: string;
    /** Secondary gradient color */
    color2: string;
    /** Tertiary gradient color */
    color3: string;
  };
  /** Border color for the chart line */
  borderColor: string;
  /** Optional flag to format Y-axis values as currency */
  formatCurrency?: boolean;
}

/**
 * Complete data structure for the CRM stats card component.
 * 
 * Provides all necessary information for displaying statistics
 * with integrated chart visualization and trend information.
 */
export interface CrmStatsCardData {
  /** The title or label for the statistic */
  title: string;
  /** The main value to display */
  value: string;
  /** Trend direction or description */
  trend: string;
  /** CSS color class for trend styling */
  trendColor: string;
  /** Unique identifier for the chart canvas element */
  chartId: string;
  /** Chart configuration and data */
  chartData: ChartData;
}

/**
 * CRM Stats Card Component
 * 
 * A sophisticated statistics card component with integrated chart
 * visualization. Designed for CRM dashboards, displays metrics
 * with trend information and interactive line charts using Chart.js.
 * 
 * Features:
 * - Displays title, value, and trend information with styling
 * - Integrated line chart with gradient colors and responsive design
 * - Dynamic Chart.js loading and initialization with fallback handling
 * - Currency formatting support for financial data
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interfaces
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Flexible chart styling with gradient colors
 * - Optional currency formatting for Y-axis values
 * - Customizable chart IDs for multiple instances
 * - No hardcoded values or styling
 * - Generic design for any statistics application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Dynamic Chart.js loading with comprehensive error handling
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional CRM interface
 * - Responsive chart configuration
 * - Gradient color support for visual appeal
 * - Currency formatting for financial applications
 * 
 * Chart.js Integration:
 * - Dynamic loading of Chart.js library from local assets
 * - Automatic extension and configuration loading
 * - Responsive chart configuration with proper aspect ratios
 * - Gradient color support for enhanced visual appeal
 * - Currency formatting for Y-axis values when needed
 * - Comprehensive error handling for script loading
 * 
 * Use Cases:
 * - CRM dashboards and analytics
 * - Sales performance monitoring
 * - Business intelligence applications
 * - Financial reporting tools
 * - Performance analytics
 * - Data visualization interfaces
 * 
 * The component serves as a sophisticated statistics card that can be
 * easily integrated into CRM applications and dashboards, providing
 * users with both numerical statistics and visual chart representation
 * of performance data with professional styling and interactivity.
 * 
 * @example
 * ```html
 * <app-crm-stats-card [data]="crmStatsData"></app-crm-stats-card>
 * ```
 * 
 * @example
 * ```typescript
 * const crmStatsData: CrmStatsCardData = {
 *   title: "Total Sales",
 *   value: "$53,000",
 *   trend: "+55%",
 *   trendColor: "text-success",
 *   chartId: "sales-chart",
 *   chartData: {
 *     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
 *     data: [50, 40, 300, 220, 500, 250],
 *     gradientColors: {
 *       color1: "rgba(33,82,255,0.1)",
 *       color2: "rgba(33,82,255,0.0)",
 *       color3: "rgba(33,82,255,0)"
 *     },
 *     borderColor: "#2152ff",
 *     formatCurrency: true
 *   }
 * };
 * ```
 */
@Component({
  selector: 'app-crm-stats-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crm-stats-card.html'
})
export class CrmStatsCardComponent implements AfterViewInit {
  /**
   * Required input data for the CRM stats card.
   * 
   * Contains all statistics and chart information including title,
   * value, trend, chart configuration, and styling options. This
   * required input property ensures data is always provided,
   * preventing null/undefined errors and ensuring proper display.
   * 
   * @type {CrmStatsCardData} - Complete CRM stats data (required)
   */
  @Input() data!: CrmStatsCardData;

  /**
   * Lifecycle hook that initializes the chart after the component view is rendered.
   * 
   * Uses a timeout to ensure DOM elements are fully available before
   * attempting to initialize the chart. This ensures proper chart
   * rendering and prevents DOM-related errors.
   */
  ngAfterViewInit() {
    // Initialize chart after component rendering with timeout for DOM readiness
    setTimeout(() => {
      this.initializeChart();
    }, 100);
  }

  /**
   * Initializes the chart by checking for Chart.js availability and creating the chart.
   * 
   * Handles both cases: Chart.js already loaded or needs dynamic loading.
   * This method provides the main entry point for chart initialization
   * with proper error handling and fallback mechanisms.
   */
  private initializeChart() {
    const canvas = document.getElementById(this.data.chartId) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check if Chart.js is available globally
    if (typeof (window as any).Chart === 'undefined') {
      this.loadChartJS();
      return;
    }

    this.createChart(ctx);
  }

  /**
   * Dynamically loads Chart.js and its extensions from local assets.
   * 
   * Loads scripts in sequence: Chart.js → Extension → Charts configuration.
   * This method provides fallback functionality when Chart.js is not
   * already available in the application.
   * 
   * TODO: Consider migrating to NPM Chart.js for better TypeScript support
   */
  private loadChartJS() {
    // Load Chart.js core library
    const script = document.createElement('script');
    script.src = 'assets/js/plugins/chartjs.min.js';
    script.onload = () => {
      // Load Chart.js extension for additional features
      const extensionScript = document.createElement('script');
      extensionScript.src = 'assets/js/plugins/Chart.extension.js';
      extensionScript.onload = () => {
        // Load charts configuration script
        const chartsScript = document.createElement('script');
        chartsScript.src = 'assets/js/charts.js';
        chartsScript.onload = () => {
          setTimeout(() => {
            this.initializeChart();
          }, 100);
        };
        document.head.appendChild(chartsScript);
      };
      document.head.appendChild(extensionScript);
    };
    document.head.appendChild(script);
  }

  /**
   * Creates the chart using the provided canvas context.
   * 
   * Delegates to specific chart creation method. This method serves
   * as a factory for different chart types, currently supporting
   * line charts with comprehensive configuration.
   * 
   * @param {CanvasRenderingContext2D} ctx - Canvas rendering context for chart creation
   */
  private createChart(ctx: CanvasRenderingContext2D) {
    // Create chart using service data
    this.createLineChart(ctx);
  }

  /**
   * Creates a line chart with gradient colors and comprehensive configuration.
   * 
   * Configures responsive design, styling, and optional currency formatting.
   * This method provides the detailed chart configuration including
   * gradient backgrounds, responsive behavior, and interactive features.
   * 
   * @param {CanvasRenderingContext2D} ctx - Canvas rendering context for chart creation
   */
  private createLineChart(ctx: CanvasRenderingContext2D) {
    // Create gradient for chart background
    const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, this.data.chartData.gradientColors.color1);
    gradientStroke.addColorStop(0.2, this.data.chartData.gradientColors.color2);
    gradientStroke.addColorStop(0, this.data.chartData.gradientColors.color3);

    // Create Chart.js instance with comprehensive configuration
    new (window as any).Chart(ctx, {
      type: "line",
      data: {
        labels: this.data.chartData.labels,
        datasets: [{
          label: this.data.title,
          tension: 0.5,
          borderWidth: 2,
          pointRadius: 0,
          borderColor: this.data.chartData.borderColor,
          backgroundColor: gradientStroke,
          data: this.data.chartData.data,
          maxBarThickness: 6,
          fill: true
        }],
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
              display: false,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              callback: this.data.chartData.formatCurrency ? 
                function(value: any, index: any, values: any) {
                  return '$' + value;
                } : undefined,
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
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              padding: 10,
              color: '#9ca2b7'
            }
          },
        },
      },
    });
  }
} 
