import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing sales overview data
 * Defines the structure for sales analytics with chart visualization
 */
export interface SalesOverviewData {
  /** Main title for the sales overview */
  title: string;
  /** Subtitle or time period description */
  subtitle: string;
  /** Percentage change with direction indicator */
  percentage: string;
  /** Trend direction - 'up' for positive, 'down' for negative */
  trend: 'up' | 'down';
  /** Optional chart height in pixels */
  height?: number;
  /** Optional array of data points for the chart */
  data?: number[];
  /** Optional array of labels for the chart */
  labels?: string[];
}

/**
 * Chart.js global declaration for TypeScript compatibility
 */
declare var Chart: any;

/**
 * Sales Overview Component
 * 
 * A component that displays sales analytics with an interactive line chart using Chart.js.
 * Shows sales trends over time with percentage changes and visual indicators.
 * Designed for business dashboards and sales reporting.
 * 
 * Features:
 * - Interactive line chart with gradient fill
 * - Sales trend indicators with percentage changes
 * - Responsive chart design
 * - Customizable data and labels
 * - Smooth animations and transitions
 * - Dark mode compatible styling
 * - Chart.js integration with custom configuration
 * 
 * Chart Features:
 * - Line chart with tension for smooth curves
 * - Gradient background fill for visual appeal
 * - Custom grid styling with dashed lines
 * - Responsive design that maintains aspect ratio
 * - Interactive tooltips and hover effects
 * - Custom font styling and colors
 * 
 * Visual Elements:
 * - Title and subtitle with trend indicators
 * - Arrow icons showing trend direction (up/down)
 * - Color-coded trend indicators (green for up, red for down)
 * - Canvas element for chart rendering
 * - Shadow effects and rounded corners
 * 
 * Data Visualization:
 * - Default data shows monthly sales from April to December
 * - Customizable data points and labels
 * - Smooth line transitions between data points
 * - Gradient fill below the line for area visualization
 * - Grid lines for better data readability
 * 
 * Chart Configuration:
 * - Responsive design that adapts to container size
 * - Custom gradient colors for visual appeal
 * - Disabled legend for cleaner appearance
 * - Interactive mode for better user experience
 * - Custom axis styling and formatting
 * 
 * Usage:
 * ```html
 * <app-sales-overview 
 *   [data]="salesData">
 * </app-sales-overview>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const salesData: SalesOverviewData = {
 *   title: 'Sales Overview',
 *   subtitle: 'in 2024',
 *   percentage: '12% more',
 *   trend: 'up',
 *   height: 300,
 *   data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
 *   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
 * };
 * ```
 * 
 * Chart.js Integration:
 * - Uses Chart.js library for rendering
 * - Custom gradient creation for visual effects
 * - Responsive configuration for different screen sizes
 * - Proper cleanup on component destruction
 * 
 * Styling Features:
 * - Shadow effects for depth
 * - Rounded corners for modern look
 * - Dark mode compatibility
 * - Responsive breakpoints
 * - Custom typography and spacing
 * 
 * Dependencies:
 * - Chart.js for chart rendering
 * - Tailwind CSS for styling
 * - Angular Common for structural directives
 * - Font Awesome for trend icons
 */
@Component({
  selector: 'app-sales-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-overview.html'
})
export class SalesOverviewComponent implements OnInit, OnDestroy {
  /** Sales overview data including title, trend, and chart configuration */
  @Input() data: SalesOverviewData = {
    title: 'Sales overview',
    subtitle: 'in 2021',
    percentage: '4% more',
    trend: 'up'
  };

  /** Unique chart ID generated for DOM element identification */
  chartId = `chart-${Math.random().toString(36).substr(2, 9)}`;
  
  /** Chart.js instance for chart management */
  private chart: any = null;

  /**
   * Lifecycle hook that is called after data-bound properties are initialized
   * Initializes the chart with a small delay to ensure DOM is ready
   */
  ngOnInit() {
    setTimeout(() => {
      this.initChart();
    }, 100);
  }

  /**
   * Lifecycle hook that is called when the component is destroyed
   * Properly cleans up the Chart.js instance to prevent memory leaks
   */
  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  /**
   * Initializes the Chart.js line chart with custom configuration
   * Creates gradient effects and sets up responsive behavior
   */
  private initChart() {
    const ctx = document.getElementById(this.chartId) as HTMLCanvasElement;
    if (!ctx) return;

    // Create gradient effect matching the original design
    const gradientStroke1 = ctx.getContext('2d')!.createLinearGradient(0, 230, 0, 50);
    gradientStroke1.addColorStop(1, 'rgba(94, 114, 228, 0.2)');
    gradientStroke1.addColorStop(0.2, 'rgba(94, 114, 228, 0.0)');
    gradientStroke1.addColorStop(0, 'rgba(94, 114, 228, 0)');

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.data.labels || ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Mobile apps',
          tension: 0.4,
          pointRadius: 0,
          borderColor: '#5e72e4',
          backgroundColor: gradientStroke1,
          borderWidth: 3,
          fill: true,
          data: this.data.data || [50, 40, 300, 220, 500, 250, 400, 230, 500],
          maxBarThickness: 6
        }]
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
              color: '#fbfbfb',
              font: {
                size: 11,
                family: "Open Sans",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              color: '#ccc',
              padding: 20,
              font: {
                size: 11,
                family: "Open Sans",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
        },
      },
    });
  }
}
