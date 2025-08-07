import { Component, Input, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

// Register all Chart.js modules
Chart.register(...registerables);

/**
 * Interface for dropdown item.
 * 
 * Defines the structure for individual dropdown menu items
 * with text and navigation link.
 */
export interface DropdownItem {
  /** Display text for the dropdown item */
  text: string;
  /** Navigation link for the dropdown item */
  href: string;
}

/**
 * Interface for the Income Chart Widget.
 * 
 * Contains all configuration data needed to render the income
 * chart widget including title, value, percentage, chart data,
 * and styling options.
 */
export interface IncomeChartWidgetData {
  /** Widget title displayed in the header */
  title: string;
  /** Current value to display */
  value: string;
  /** Percentage change to display */
  percentage: string;
  /** Color for the percentage text (positive/negative) */
  percentageColor: string;
  /** Chart ID for DOM element identification */
  chartId: string;
  /** Array of dropdown menu items */
  dropdownItems: DropdownItem[];
  /** Optional background gradient for styling */
  backgroundGradient?: string;
  /** Optional color for the title text */
  titleColor?: string;
  /** Optional color for the main text */
  textColor?: string;
  /** Optional color for the dropdown icon */
  dropdownIconColor?: string;
  /** Chart configuration data with labels and datasets */
  chartData: {
    /** Array of labels for the chart axes */
    labels: string[];
    /** Array of datasets containing income data */
    datasets: {
      /** Label for the dataset */
      label: string;
      /** Array of data values */
      data: number[];
      /** Background color for the chart area */
      backgroundColor: string;
      /** Color of the border line */
      borderColor: string;
      /** Tension for smooth curves */
      tension: number;
      /** Width of the border */
      borderWidth: number;
      /** Radius of data points */
      pointRadius: number;
      /** Maximum thickness for bars */
      maxBarThickness: number;
      /** Whether to fill the area under the line */
      fill: boolean;
    }[];
  };
}

/**
 * Income Chart Widget Component
 * 
 * This component implements a comprehensive income chart widget
 * using Chart.js for the application. It provides a visual
 * representation of income data with additional metrics and
 * dropdown functionality in a compact widget format.
 * 
 * Features:
 * - Interactive income line chart visualization
 * - Current value and percentage change display
 * - Dropdown menu for additional actions
 * - Responsive design that adapts to container size
 * - Chart.js integration with full module support
 * - Automatic chart cleanup on component destruction
 * - Error handling for missing canvas elements
 * - Professional gradient styling for visual appeal
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Lifecycle management for chart initialization and cleanup
 * - Customizable colors and styling options
 * - Delayed initialization for DOM readiness
 * - Compact widget format for dashboard integration
 * 
 * The component serves as a reusable income chart widget that can be
 * easily integrated into dashboards and financial analytics pages,
 * providing users with a quick overview of income trends and metrics
 * in a compact, professional format.
 * 
 * @example
 * ```html
 * <app-income-chart-widget [data]="incomeChartData"></app-income-chart-widget>
 * ```
 */
@Component({
  selector: 'app-income-chart-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './income-chart-widget.html'
})
export class IncomeChartWidgetComponent implements AfterViewInit, OnDestroy {
  /**
   * Data for the income chart widget component.
   * 
   * Provides all the content and configuration for the widget including
   * title, value, percentage, chart data, and styling options. This
   * input property allows complete customization of the widget appearance
   * and data.
   * 
   * @type {IncomeChartWidgetData} - Complete widget configuration
   */
  @Input() data!: IncomeChartWidgetData;

  /** Chart.js instance for the income chart */
  private chart: Chart | null = null;

  /**
   * Creates an instance of IncomeChartWidgetComponent.
   * 
   * @param {ElementRef} elementRef - Reference to the component's DOM element
   */
  constructor(private elementRef: ElementRef) {}

  /**
   * Lifecycle hook that is called after the view has been initialized.
   * 
   * Initializes the income chart widget after the DOM elements are available,
   * with a delay to ensure DOM readiness.
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
   * Initialize the income chart with Chart.js.
   * 
   * Creates and configures the Chart.js line chart instance with
   * the provided income data and gradient styling options. Handles
   * canvas element retrieval and ensures proper chart cleanup.
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
   * Lifecycle hook that is called before the component is destroyed.
   * 
   * Cleans up the Chart.js instance to prevent memory leaks.
   */
  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }
} 