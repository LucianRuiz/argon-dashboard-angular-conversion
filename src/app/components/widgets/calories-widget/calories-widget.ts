import { Component, Input, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

// Register all Chart.js modules
Chart.register(...registerables);

/**
 * ========================================
 * CALORIES WIDGET COMPONENT
 * ========================================
 *
 * A calories tracking widget that displays calorie data with a line chart.
 * Shows current calorie value, percentage, and historical data visualization.
 *
 * FEATURES:
 * - Line chart visualization using Chart.js
 * - Current calorie value display
 * - Percentage indicator with color coding
 * - Historical data trends
 * - Responsive design with dark mode support
 * - Gradient chart styling
 * - Automatic chart cleanup on destroy
 *
 * USAGE:
 * <app-calories-widget [data]="caloriesData"></app-calories-widget>
 *
 * REUSABILITY: High - Generic calories tracking widget
 * COMPLEXITY: Medium - Chart.js integration with lifecycle management
 */

/**
 * Interface for calories widget data.
 *
 * @property {string} title - Widget title
 * @property {string} value - Current calorie value
 * @property {string} percentage - Percentage indicator
 * @property {string} percentageColor - Color for percentage display
 * @property {string} chartId - Unique chart canvas ID
 * @property {Object} chartData - Chart.js configuration data
 *
 * @example
 * const caloriesData: CaloriesWidgetData = {
 *   title: 'Daily Calories',
 *   value: '1,200',
 *   percentage: '75%',
 *   percentageColor: 'text-success',
 *   chartId: 'calories-chart',
 *   chartData: {
 *     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
 *     datasets: [{
 *       label: 'Calories',
 *       data: [1200, 1350, 1100, 1400, 1250],
 *       backgroundColor: 'rgba(37,47,64,0.05)',
 *       borderColor: '#252f40',
 *       tension: 0.4,
 *       borderWidth: 2,
 *       pointRadius: 4,
 *       maxBarThickness: 6,
 *       fill: true
 *     }]
 *   }
 * };
 */
export interface CaloriesWidgetData {
  /** Widget title */
  title: string;
  /** Current calorie value */
  value: string;
  /** Percentage indicator */
  percentage: string;
  /** Color for percentage display */
  percentageColor: string;
  /** Unique chart canvas ID */
  chartId: string;
  /** Chart.js configuration data */
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      tension: number;
      borderWidth: number;
      pointRadius: number;
      maxBarThickness: number;
      fill: boolean;
    }[];
  };
}

/**
 * Calories widget component for displaying calorie tracking data.
 * 
 * A widget component for showing calorie data with a line chart.
 * Integrates with Chart.js for data visualization.
 */
@Component({
  selector: 'app-calories-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calories-widget.html'
})
export class CaloriesWidgetComponent implements AfterViewInit, OnDestroy {
  /** Calories widget data including title, value, and chart configuration */
  @Input() data!: CaloriesWidgetData;
  
  /** Chart.js instance for cleanup */
  private chart: Chart | null = null;

  constructor(private elementRef: ElementRef) {}

  /**
   * Initialize chart after view is ready.
   * Ensures DOM is ready before creating the chart.
   */
  ngAfterViewInit(): void {
    if (this.data && this.data.chartData) {
      // Delay to ensure DOM is ready
      setTimeout(() => {
        this.initializeChart();
      }, 200);
    }
  }

  /**
   * Initialize the Chart.js line chart.
   * Creates gradient background and configures chart options.
   */
  private initializeChart(): void {
    // Destroy existing chart if it exists
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }

    const canvas = this.elementRef.nativeElement.querySelector(`#${this.data.chartId}`);
    
    if (canvas) {
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(37,47,64,0.05)');
        gradientStroke.addColorStop(0.2, 'rgba(37,47,64,0.0)');
        gradientStroke.addColorStop(0, 'rgba(37,47,64,0)');

        const config: ChartConfiguration = {
          type: 'line',
          data: {
            labels: this.data.chartData.labels,
            datasets: [{
              label: this.data.chartData.datasets[0].label,
              tension: this.data.chartData.datasets[0].tension,
              borderWidth: this.data.chartData.datasets[0].borderWidth,
              pointRadius: this.data.chartData.datasets[0].pointRadius,
              borderColor: this.data.chartData.datasets[0].borderColor,
              backgroundColor: gradientStroke,
              data: this.data.chartData.datasets[0].data,
              maxBarThickness: this.data.chartData.datasets[0].maxBarThickness,
              fill: this.data.chartData.datasets[0].fill
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
                  display: false
                },
                ticks: {
                  display: false
                }
              },
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  display: false
                }
              }
            }
          }
        };
        
        this.chart = new Chart(ctx, config);
      }
    }
  }

  /**
   * Clean up chart instance when component is destroyed.
   * Prevents memory leaks by destroying Chart.js instance.
   */
  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }
} 