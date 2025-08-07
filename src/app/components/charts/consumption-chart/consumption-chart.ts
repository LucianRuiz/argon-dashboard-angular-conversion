import { Component, Input, OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var Chart: any;

/**
 * Interface representing room consumption data.
 * 
 * Defines the structure for individual room consumption information
 * including room name, consumption percentage, and color styling.
 */
export interface RoomConsumptionData {
  /** Room name or identifier */
  name: string;
  /** Consumption percentage as string */
  percentage: string;
  /** Tailwind CSS gradient classes for room color styling */
  color: string;
}

/**
 * Interface representing consumption chart data.
 * 
 * Contains total consumption information and room breakdown
 * for the consumption chart visualization.
 */
export interface ConsumptionChartData {
  /** Total watts consumption displayed in the chart center */
  totalWatts: string;
  /** Array of room consumption data for breakdown */
  rooms: RoomConsumptionData[];
}

/**
 * Consumption Chart Component
 * 
 * This component implements a sophisticated consumption chart using Chart.js
 * for the application. It provides a visual representation of energy
 * consumption by room with a doughnut chart and detailed room breakdown.
 * 
 * Features:
 * - Interactive doughnut chart visualization
 * - Energy consumption by room breakdown
 * - Real-time data updates with chart re-rendering
 * - Color mapping from Tailwind gradients to Chart.js colors
 * - Total consumption display in chart center
 * - Room breakdown table with color indicators
 * - Responsive design with dark mode support
 * - Tooltip integration for additional information
 * - Smooth chart animations and transitions
 * - Professional chart configuration and styling
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Lifecycle management for chart initialization and updates
 * - Error handling for missing canvas elements
 * 
 * Chart Configuration:
 * - Doughnut chart with 90% cutout for center display
 * - No legend display (colors shown in table instead)
 * - Responsive sizing with maintained aspect ratio
 * - Gradient stroke effects for visual appeal
 * 
 * Color Mapping:
 * - Maps Tailwind CSS gradient classes to Chart.js hex colors
 * - Supports blue, slate, cyan, emerald, and orange gradients
 * - Fallback to default blue color for unmapped gradients
 * 
 * The component serves as a reusable consumption chart that can be
 * easily integrated into energy monitoring dashboards and analytics
 * pages, providing users with an intuitive way to analyze energy
 * consumption patterns by room.
 * 
 * @example
 * ```html
 * <app-consumption-chart [data]="consumptionData"></app-consumption-chart>
 * ```
 * 
 * @example
 * ```typescript
 * const consumptionData: ConsumptionChartData = {
 *   totalWatts: '2,300',
 *   rooms: [
 *     {
 *       name: 'Living Room',
 *       percentage: '35',
 *       color: 'from-blue-500 to-violet-500'
 *     }
 *   ]
 * };
 * ```
 */
@Component({
  selector: 'app-consumption-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consumption-chart.html'
})
export class ConsumptionChartComponent implements AfterViewInit, OnChanges {
  /**
   * Data for the consumption chart component.
   * 
   * Provides all the content and configuration for the chart including
   * total watts consumption and room breakdown data. This input property
   * allows complete customization of the chart appearance and data.
   * 
   * @type {ConsumptionChartData} - Complete chart configuration
   */
  @Input() data!: ConsumptionChartData;
  
  /** Chart.js instance for the consumption chart */
  private chart: any = null;

  /**
   * Lifecycle hook that is called after the view has been initialized.
   * 
   * Initializes the consumption chart after the DOM elements
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
   * Initialize the Chart.js doughnut chart.
   * 
   * Sets up chart configuration, colors, and data with a delay
   * to ensure DOM elements are ready. Creates the Chart.js instance
   * with professional styling and color mapping from Tailwind gradients.
   */
  private initChart() {
    setTimeout(() => {
      const canvas = document.getElementById("chart-consumption") as HTMLCanvasElement;
      if (canvas && this.data) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          // Create gradient stroke for visual appeal
          const gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
          gradientStroke1.addColorStop(1, 'rgba(203,12,159,0.2)');
          gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
          gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)');

          // Map Tailwind gradient classes to Chart.js hex colors
          const colorMap: { [key: string]: string } = {
            'from-blue-500 to-violet-500': '#5e72e4',
            'from-slate-600 to-slate-300': '#8392ab',
            'from-blue-700 to-cyan-500': '#11cdef',
            'from-emerald-500 to-teal-400': '#2dce89',
            'from-orange-500 to-yellow-500': '#fb6340'
          };

          const backgroundColor = this.data.rooms.map(room => 
            colorMap[room.color] || '#5e72e4'
          );

          // Create Chart.js instance
          this.chart = new Chart(ctx, {
            type: "doughnut",
            data: {
              labels: this.data.rooms.map(room => room.name),
              datasets: [{
                label: "Consumption",
                weight: 9,
                cutout: 90,
                tension: 0.9,
                pointRadius: 2,
                borderWidth: 2,
                backgroundColor: backgroundColor,
                data: this.data.rooms.map(room => parseInt(room.percentage)),
                fill: false
              }],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false, // Legend hidden, colors shown in table
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
                    drawOnChartArea: false,
                    drawTicks: false,
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
                    drawTicks: false,
                  },
                  ticks: {
                    display: false,
                  }
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
   * Updates labels, background colors, and data values efficiently,
   * maintaining the color mapping from Tailwind gradients.
   */
  private updateChart() {
    if (this.chart && this.data) {
      // Map Tailwind gradient classes to Chart.js hex colors
      const colorMap: { [key: string]: string } = {
        'from-blue-500 to-violet-500': '#5e72e4',
        'from-slate-600 to-slate-300': '#8392ab',
        'from-blue-700 to-cyan-500': '#11cdef',
        'from-emerald-500 to-teal-400': '#2dce89',
        'from-orange-500 to-yellow-500': '#fb6340'
      };

      const backgroundColor = this.data.rooms.map(room => 
        colorMap[room.color] || '#5e72e4'
      );

      // Update chart data
      this.chart.data.labels = this.data.rooms.map(room => room.name);
      this.chart.data.datasets[0].backgroundColor = backgroundColor;
      this.chart.data.datasets[0].data = this.data.rooms.map(room => parseInt(room.percentage));
      this.chart.update();
    }
  }
} 
