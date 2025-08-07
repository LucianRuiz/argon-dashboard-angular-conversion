import { Component, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var Chart: any;

/**
 * Interface representing consumption day chart data.
 * 
 * Defines the structure for daily consumption chart information
 * including title, labels, data values, and styling options.
 */
export interface ConsumptionDayChartData {
  /** Chart title displayed in the header */
  title: string;
  /** Array of labels for the X-axis (typically days of the week) */
  labels: string[];
  /** Array of consumption values for each label */
  data: number[];
  /** Background color for the chart bars (hex color or gradient) */
  backgroundColor: string;
}

/**
 * Consumption Day Chart Component
 * 
 * This component implements a comprehensive daily consumption bar chart
 * using Chart.js for the application. It provides a visual representation
 * of daily energy consumption patterns with professional styling and
 * responsive design.
 * 
 * Features:
 * - Interactive bar chart visualization
 * - Daily consumption data representation
 * - Real-time data updates with chart re-rendering
 * - Customizable background colors for bars
 * - Responsive design with dark mode support
 * - Grid lines with dashed styling for better readability
 * - Smooth animations and transitions
 * - Optimized bar thickness for better visualization
 * - Professional chart configuration and styling
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Lifecycle management for chart initialization and updates
 * - Error handling for missing canvas elements
 * 
 * Chart Configuration:
 * - Bar chart with rounded corners (4px border radius)
 * - Maximum bar thickness of 6px for optimal display
 * - Dashed grid lines for better readability
 * - Hidden legend (data shown directly on bars)
 * - Responsive sizing with maintained aspect ratio
 * 
 * Styling:
 * - Custom font family (Open Sans) for axis labels
 * - Consistent color scheme with dashboard theme
 * - Grid lines with 5px dash pattern
 * - Padding and spacing optimized for readability
 * 
 * The component serves as a reusable consumption chart that can be
 * easily integrated into energy monitoring dashboards and analytics
 * pages, providing users with an intuitive way to analyze daily
 * consumption patterns and trends.
 * 
 * @example
 * ```html
 * <app-consumption-day-chart [data]="dailyConsumptionData"></app-consumption-day-chart>
 * ```
 * 
 * @example
 * ```typescript
 * const dailyConsumptionData: ConsumptionDayChartData = {
 *   title: 'Consumption per day',
 *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
 *   data: [1200, 1400, 1100, 1600, 1300, 1800, 1500],
 *   backgroundColor: '#5e72e4'
 * };
 * ```
 */
@Component({
  selector: 'app-consumption-day-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consumption-day-chart.html'
})
export class ConsumptionDayChartComponent implements AfterViewInit, OnChanges {
  /**
   * Data for the consumption day chart component.
   * 
   * Provides all the content and configuration for the chart including
   * title, labels, data values, and background color. This input
   * property allows complete customization of the chart appearance
   * and data.
   * 
   * @type {ConsumptionDayChartData} - Complete chart configuration
   */
  @Input() data!: ConsumptionDayChartData;
  
  /** Chart.js instance for the consumption day chart */
  private chart: any = null;

  /**
   * Lifecycle hook that is called after the view has been initialized.
   * 
   * Initializes the consumption day chart after the DOM elements
   * are available, with a delay to ensure DOM readiness.
   */
  ngAfterViewInit() {
    this.initChart();
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
   * Initialize the Chart.js bar chart.
   * 
   * Sets up chart configuration, styling, and data with a delay
   * to ensure DOM elements are ready. Creates the Chart.js instance
   * with professional styling and responsive options.
   */
  private initChart() {
    setTimeout(() => {
      const canvas = document.getElementById("chart-cons-week") as HTMLCanvasElement;
      if (canvas && this.data) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          // Create Chart.js instance
          this.chart = new Chart(ctx, {
            type: "bar",
            data: {
              labels: this.data.labels,
              datasets: [
                {
                  label: "Watts",
                  tension: 0.4,
                  borderWidth: 0,
                  borderRadius: 4,
                  borderSkipped: false,
                  backgroundColor: this.data.backgroundColor,
                  data: this.data.data,
                  maxBarThickness: 6,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false, // Legend hidden for cleaner design
                },
              },
              interaction: {
                intersect: false,
                mode: "index",
              },
              scales: {
                y: {
                  grid: {
                    drawBorder: false,
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: false,
                    borderDash: [5, 5], // Dashed grid lines
                  },
                  ticks: {
                    display: true,
                    padding: 10,
                    color: "#9ca2b7",
                  },
                },
                x: {
                  grid: {
                    drawBorder: false,
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: false,
                    borderDash: [5, 5], // Dashed grid lines
                  },
                  ticks: {
                    beginAtZero: true,
                    display: true,
                    padding: 10,
                    font: {
                      size: 12,
                      family: "Open Sans",
                      style: "normal",
                    },
                    color: "#9ca2b7",
                  },
                },
              },
            },
          });
        }
      }
    }, 100);
  }

  /**
   * Update chart data when input changes.
   * 
   * Re-renders chart with new data without recreating the instance.
   * Updates labels, background color, and data values efficiently.
   */
  private updateChart() {
    if (this.chart && this.data) {
      // Update chart data
      this.chart.data.labels = this.data.labels;
      this.chart.data.datasets[0].backgroundColor = this.data.backgroundColor;
      this.chart.data.datasets[0].data = this.data.data;
      this.chart.update();
    }
  }
} 
