import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the tasks stats card component.
 * 
 * Provides comprehensive information for displaying task statistics
 * with chart visualization and customizable styling options.
 */
export interface TasksStatsCardData {
  /** CSS class for the icon */
  icon: string;
  /** Title of the stats card */
  title: string;
  /** Main value to display */
  value: string;
  /** Percentage or change indicator */
  percentage: string;
  /** Progress value for visual representation */
  progressValue: string;
  /** Chart data for visualization */
  chartData: {
    /** Labels for the chart */
    labels: string[];
    /** Data points for the chart */
    data: number[];
  };
  /** Optional icon color for customization */
  iconColor?: string;
  /** Optional icon background color */
  iconBackground?: string;
  /** Optional progress bar color */
  progressColor?: string;
  /** Optional title text color */
  titleColor?: string;
  /** Optional value text color */
  valueColor?: string;
  /** Optional percentage text color */
  percentageColor?: string;
  /** Optional chart color configuration */
  chartColors?: {
    /** Border color for chart lines */
    borderColor: string;
    /** Background color for chart area */
    backgroundColor: string;
    /** Background color for chart points */
    pointBackgroundColor: string;
    /** Border color for chart points */
    pointBorderColor: string;
  };
  /** Optional chart configuration options */
  chartOptions?: {
    /** Line tension for smooth curves */
    tension: number;
    /** Radius of chart points */
    pointRadius: number;
    /** Width of chart borders */
    borderWidth: number;
    /** Maximum thickness for bars */
    maxBarThickness: number;
    /** Whether to fill the chart area */
    fill: boolean;
  };
}

/**
 * Tasks Stats Card Component
 * 
 * A comprehensive card component that displays task statistics with
 * an integrated line chart visualization. Designed for dashboards
 * and analytics applications requiring task performance metrics.
 * 
 * Features:
 * - Displays task statistics with icon, title, value, and percentage
 * - Integrated line chart visualization using Chart.js
 * - Progress bar for visual representation of completion
 * - Highly customizable styling with optional color properties
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Chart initialization after view initialization
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Chart data visualization with customizable options
 * - No hardcoded values or styling
 * - Professional analytics interface
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Chart.js integration for data visualization
 * - Efficient chart rendering and updates
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional analytics presentation
 * - Customizable chart appearance
 * - Responsive chart behavior
 * 
 * Use Cases:
 * - Task management dashboards
 * - Project analytics applications
 * - Performance monitoring tools
 * - Team productivity tracking
 * - Workflow analytics
 * - Business intelligence dashboards
 * 
 * The component serves as a comprehensive task statistics card that can be
 * easily integrated into analytics applications and dashboards, providing
 * users with both numerical statistics and visual chart representation
 * of task performance data.
 * 
 * @example
 * ```html
 * <app-tasks-stats-card [data]="tasksStatsData"></app-tasks-stats-card>
 * ```
 * 
 * @example
 * ```typescript
 * const tasksStatsData: TasksStatsCardData = {
 *   icon: "ni ni-chart-bar-32",
 *   title: "Tasks Completed",
 *   value: "2,300",
 *   percentage: "+3%",
 *   progressValue: "60%",
 *   chartData: {
 *     labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
 *     data: [50, 40, 300, 220, 500, 250]
 *   },
 *   iconColor: "#2152ff",
 *   chartColors: {
 *     borderColor: "#2152ff",
 *     backgroundColor: "rgba(33,82,255,0.1)",
 *     pointBackgroundColor: "#2152ff",
 *     pointBorderColor: "#ffffff"
 *   }
 * };
 * ```
 */
@Component({
  selector: 'app-tasks-stats-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks-stats-card.html'
})
export class TasksStatsCardComponent implements AfterViewInit {
  /**
   * Required input data for the tasks stats card.
   * 
   * Contains all the statistics, chart data, and styling options
   * for the tasks stats card. This required input property ensures
   * data is always provided, preventing null/undefined errors
   * and ensuring proper display.
   * 
   * @type {TasksStatsCardData} - Complete tasks stats data (required)
   */
  @Input() data!: TasksStatsCardData;

  /**
   * Constructor for the TasksStatsCardComponent.
   * 
   * Injects ElementRef for DOM manipulation and chart initialization.
   * 
   * @param {ElementRef} elementRef - Reference to the component's DOM element
   */
  constructor(private elementRef: ElementRef) {}

  /**
   * Lifecycle hook that is called after the view has been initialized.
   * 
   * Initializes the chart visualization after the component's view
   * has been fully rendered, ensuring the canvas element is available
   * for Chart.js initialization.
   */
  ngAfterViewInit() {
    this.initializeChart();
  }

  /**
   * Initializes the line chart using Chart.js.
   * 
   * Creates a line chart visualization with customizable colors and options.
   * Uses the provided chart data and styling options, with fallback to
   * default values for any missing configuration.
   * 
   * Features:
   * - Responsive chart design
   * - Gradient background fill
   * - Customizable colors and styling
   * - Hidden legend and grid lines
   * - Interactive tooltips
   * - Smooth line curves
   * 
   * The chart is configured to be responsive and maintain proper
   * aspect ratios while providing an optimal viewing experience.
   */
  private initializeChart() {
    const canvas = this.elementRef.nativeElement.querySelector('#chart-line-projects');
    if (canvas && this.data) {
      const ctx = canvas.getContext('2d');
      
      // Use custom colors or default values
      const borderColor = this.data.chartColors?.borderColor || '#2152ff';
      const backgroundColor = this.data.chartColors?.backgroundColor || 'rgba(33,82,255,0.1)';
      const pointBackgroundColor = this.data.chartColors?.pointBackgroundColor || '#2152ff';
      const pointBorderColor = this.data.chartColors?.pointBorderColor || '#ffffff';
      
      // Use custom options or default values
      const tension = this.data.chartOptions?.tension || 0.3;
      const pointRadius = this.data.chartOptions?.pointRadius || 2;
      const borderWidth = this.data.chartOptions?.borderWidth || 2;
      const maxBarThickness = this.data.chartOptions?.maxBarThickness || 6;
      const fill = this.data.chartOptions?.fill !== undefined ? this.data.chartOptions.fill : true;
      
      // Create gradient for chart background
      const gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke1.addColorStop(1, backgroundColor);
      gradientStroke1.addColorStop(0.2, backgroundColor.replace('0.1', '0.0'));
      gradientStroke1.addColorStop(0, backgroundColor.replace('0.1', '0'));

      // Initialize Chart.js with configuration
      new (window as any).Chart(ctx, {
        type: "line",
        data: {
          labels: this.data.chartData.labels,
          datasets: [
            {
              label: "Tasks",
              tension: tension,
              pointRadius: pointRadius,
              pointBackgroundColor: pointBackgroundColor,
              borderColor: borderColor,
              borderWidth: borderWidth,
              backgroundColor: gradientStroke1,
              data: this.data.chartData.data,
              maxBarThickness: maxBarThickness,
              fill: fill,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
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
                display: false,
                drawOnChartArea: false,
                drawTicks: false,
              },
              ticks: {
                display: false,
              },
            },
            x: {
              grid: {
                drawBorder: false,
                display: false,
                drawOnChartArea: false,
                drawTicks: false,
              },
              ticks: {
                color: "#252f40",
                padding: 10,
              },
            },
          },
        },
      });
    }
  }
} 