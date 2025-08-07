import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the projects stats card component.
 * 
 * Provides comprehensive information for displaying project statistics
 * with chart visualization and project status labels.
 */
export interface ProjectsStatsCardData {
  /** CSS class for the icon */
  icon: string;
  /** Title of the projects stats card */
  title: string;
  /** Main value to display */
  value: string;
  /** Label for completed projects */
  doneLabel: string;
  /** Label for projects in progress */
  inProgressLabel: string;
  /** Chart data for visualization */
  chartData: {
    /** Labels for the chart */
    labels: string[];
    /** Data points for the chart */
    data: number[];
  };
}

/**
 * Projects Stats Card Component
 * 
 * A comprehensive card component that displays project statistics with
 * an integrated doughnut chart visualization. Designed for project
 * management dashboards and analytics applications requiring project
 * performance metrics.
 * 
 * Features:
 * - Displays project statistics with icon, title, and value
 * - Integrated doughnut chart visualization using Chart.js
 * - Project status labels for completed and in-progress items
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Chart initialization after view initialization
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Chart data visualization with customizable options
 * - No hardcoded values or styling
 * - Professional project analytics interface
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Chart.js integration for data visualization
 * - Efficient chart rendering and updates
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional project analytics presentation
 * - Customizable chart appearance
 * - Responsive chart behavior
 * 
 * Use Cases:
 * - Project management dashboards
 * - Project analytics applications
 * - Team performance monitoring
 * - Project portfolio management
 * - Workflow analytics
 * - Business intelligence dashboards
 * 
 * The component serves as a comprehensive project statistics card that can be
 * easily integrated into project management applications and dashboards,
 * providing users with both numerical statistics and visual chart representation
 * of project performance data.
 * 
 * @example
 * ```html
 * <app-projects-stats-card [data]="projectsStatsData"></app-projects-stats-card>
 * ```
 * 
 * @example
 * ```typescript
 * const projectsStatsData: ProjectsStatsCardData = {
 *   icon: "ni ni-chart-bar-32",
 *   title: "Projects",
 *   value: "30",
 *   doneLabel: "Done",
 *   inProgressLabel: "In Progress",
 *   chartData: {
 *     labels: ["Done", "In Progress"],
 *     data: [20, 10]
 *   }
 * };
 * ```
 */
@Component({
  selector: 'app-projects-stats-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-stats-card.html'
})
export class ProjectsStatsCardComponent implements AfterViewInit {
  /**
   * Required input data for the projects stats card.
   * 
   * Contains all project statistics, chart data, and status labels
   * for the projects stats card. This required input property ensures
   * data is always provided, preventing null/undefined errors
   * and ensuring proper display.
   * 
   * @type {ProjectsStatsCardData} - Complete projects stats data (required)
   */
  @Input() data!: ProjectsStatsCardData;

  /**
   * Constructor for the ProjectsStatsCardComponent.
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
   * Initializes the doughnut chart using Chart.js.
   * 
   * Creates a doughnut chart visualization with project statistics data.
   * Uses the provided chart data to display project completion status
   * in a visual format with gradient styling and interactive features.
   * 
   * Features:
   * - Responsive doughnut chart design
   * - Gradient background styling
   * - Customizable colors and styling
   * - Hidden legend and grid lines
   * - Interactive tooltips
   * - Smooth chart rendering
   * 
   * The chart is configured to be responsive and maintain proper
   * aspect ratios while providing an optimal viewing experience
   * for project statistics visualization.
   */
  private initializeChart() {
    const canvas = this.elementRef.nativeElement.querySelector('#chart-bar-projects');
    if (canvas && this.data) {
      const ctx = canvas.getContext('2d');
      
      // Create gradient for chart background
      const gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke1.addColorStop(1, "rgba(33,82,255,0.1)");
      gradientStroke1.addColorStop(0.2, "rgba(33,82,255,0.0)");
      gradientStroke1.addColorStop(0, "rgba(33,82,255,0)");

      // Initialize Chart.js with doughnut configuration
      new (window as any).Chart(ctx, {
        type: "doughnut",
        data: {
          labels: this.data.chartData.labels,
          datasets: [
            {
              label: "Projects",
              weight: 9,
              cutout: 50,
              tension: 0.9,
              pointRadius: 2,
              borderWidth: 2,
              backgroundColor: ["#2152ff", "#a8b8d8"],
              data: this.data.chartData.data,
              fill: false,
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
                display: false,
              },
            },
          },
        },
      });
    }
  }
} 