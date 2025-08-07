import { Component, Input, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

// Register all Chart.js modules
Chart.register(...registerables);

/**
 * Complete data structure for the channels pie chart component.
 * 
 * Contains all configuration data needed to render the channels
 * pie chart including title, chart ID, legend, chart data, and
 * footer information.
 */
export interface ChannelPieChartData {
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
    /** Array of labels for each pie slice */
    labels: string[];
    /** Array of datasets containing pie chart data */
    datasets: any[];
  };
  /** Footer text displayed below the chart */
  footerText: string;
  /** Text for the footer action button */
  footerButtonText: string;
}

/**
 * Channels Pie Chart Component
 * 
 * This component implements a comprehensive channels pie chart using Chart.js
 * for the application. It provides a visual representation of channel
 * distribution data with legend, footer information, and interactive features.
 * 
 * Features:
 * - Interactive pie chart visualization
 * - Channel distribution data representation
 * - Custom legend with labels and colors
 * - Footer text and action button
 * - Responsive design that adapts to container size
 * - Chart.js integration with full module support
 * - Automatic chart cleanup on component destruction
 * - Error handling for missing canvas elements
 * - Professional pie chart styling
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Lifecycle management for chart initialization and cleanup
 * - Interactive tooltips for data exploration
 * - Customizable chart appearance and data
 * 
 * The component serves as a reusable channels pie chart that can be
 * easily integrated into dashboards and analytics pages,
 * providing users with an intuitive way to visualize channel
 * distributions and patterns in a circular format.
 * 
 * @example
 * ```html
 * <app-channels-pie-chart [data]="channelsPieChartData"></app-channels-pie-chart>
 * ```
 */
@Component({
  selector: 'app-channels-pie-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './channels-pie-chart.html'
})
export class ChannelsPieChartComponent implements AfterViewInit, OnDestroy {
  /**
   * Data for the channels pie chart component.
   * 
   * Provides all the content and configuration for the chart including
   * title, chart ID, legend, chart data, and footer information. This
   * input property allows complete customization of the chart appearance
   * and data.
   * 
   * @type {ChannelPieChartData} - Complete chart configuration
   */
  @Input() data!: ChannelPieChartData;

  /** Chart.js instance for the channels pie chart */
  private chart: any = null;

  /**
   * Creates an instance of ChannelsPieChartComponent.
   * 
   * @param {ElementRef} elementRef - Reference to the component's DOM element
   */
  constructor(private elementRef: ElementRef) {}

  /**
   * Lifecycle hook that is called after the view has been initialized.
   * 
   * Initializes the channels pie chart after the DOM elements are available.
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
   * Initialize the channels pie chart with Chart.js.
   * 
   * Creates and configures the Chart.js pie chart instance with
   * the provided data and styling options. Handles canvas element
   * retrieval and ensures proper chart cleanup.
   */
  private initializeChart(): void {
    const canvas = this.elementRef.nativeElement.querySelector(`#${this.data.chartId}`);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (this.chart) this.chart.destroy();
    
    this.chart = new Chart(ctx, {
      type: 'pie',
      data: this.data.chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        }
      }
    });
  }
} 