import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for individual analytics statistics cards.
 * 
 * Provides comprehensive information for displaying analytics
 * statistics with title, value, percentage, trend, and styling.
 */
export interface StatsCard {
  /** Title of the analytics statistic */
  title: string;
  /** Main value to display */
  value: string;
  /** Percentage change indicator */
  percentage: string;
  /** Trend direction ('up' for positive, 'down' for negative) */
  trend: 'up' | 'down';
  /** CSS class for the icon */
  icon: string;
  /** CSS class for icon color styling */
  iconColor: string;
}

/**
 * Complete data structure for the analytics stats cards component.
 * 
 * Contains an array of analytics statistics cards to display
 * in a comprehensive analytics format.
 */
export interface AnalyticsStatsCardsData {
  /** Array of analytics statistics cards */
  cards: StatsCard[];
}

/**
 * Analytics Stats Cards Component
 * 
 * A comprehensive card component that displays multiple analytics
 * statistics cards with key metrics and trend indicators. Designed
 * for analytics dashboards and data visualization applications.
 * 
 * Features:
 * - Displays multiple analytics statistics cards with key metrics
 * - Individual card identification and tracking
 * - Percentage change indicators with trend direction
 * - Customizable icons and color styling
 * - Performance optimization with utility methods
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Array-based card display
 * - Dynamic color class generation
 * - No hardcoded values or styling
 * - Generic design for any analytics application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional analytics interface
 * - Dynamic color class generation
 * - Responsive design across devices
 * - Trend-based color coding
 * - Efficient percentage analysis
 * 
 * Use Cases:
 * - Analytics dashboards
 * - Data visualization applications
 * - Business intelligence tools
 * - Performance monitoring displays
 * - Key metrics overview
 * - Statistical analysis interfaces
 * 
 * The component serves as a comprehensive analytics stats cards display
 * that can be easily integrated into analytics applications and dashboards,
 * providing users with detailed statistical information with trend
 * indicators and professional styling.
 * 
 * @example
 * ```html
 * <app-analytics-stats-cards [data]="analyticsData"></app-analytics-stats-cards>
 * ```
 * 
 * @example
 * ```typescript
 * const analyticsData: AnalyticsStatsCardsData = {
 *   cards: [
 *     {
 *       title: "Total Users",
 *       value: "2,300",
 *       percentage: "+3%",
 *       trend: "up",
 *       icon: "ni ni-world",
 *       iconColor: "text-primary"
 *     },
 *     {
 *       title: "New Sessions",
 *       value: "1,200",
 *       percentage: "-2%",
 *       trend: "down",
 *       icon: "ni ni-chart-bar-32",
 *       iconColor: "text-success"
 *     }
 *   ]
 * };
 * ```
 */
@Component({
  selector: 'app-analytics-stats-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics-stats-cards.html'
})
export class AnalyticsStatsCardsComponent {
  
  /**
   * Required input data for the analytics stats cards component.
   * 
   * Contains array of analytics statistics cards to display with
   * their respective metrics, trends, and styling information.
   * This required input property ensures data is always provided,
   * preventing null/undefined errors and ensuring proper display.
   * 
   * @type {AnalyticsStatsCardsData} - Complete analytics stats data (required)
   */
  @Input({ required: true }) data!: AnalyticsStatsCardsData;

  /**
   * Determines if the percentage value represents a positive trend.
   * 
   * Analyzes the percentage string to determine if it starts with
   * a '+' sign, indicating a positive change or growth trend.
   * This method provides the logic for trend-based styling and
   * color coding of percentage values.
   * 
   * @param {string} percentage - The percentage string to analyze
   * @returns {boolean} True if the percentage is positive (starts with '+')
   */
  isPositive(percentage: string): boolean {
    return percentage.startsWith('+');
  }

  /**
   * Gets the appropriate color class for the percentage display.
   * 
   * Returns a Tailwind CSS color class based on whether the
   * percentage represents a positive or negative trend. This
   * method provides dynamic styling for percentage values to
   * enhance visual understanding of trends.
   * 
   * @param {string} percentage - The percentage string to analyze
   * @returns {string} Tailwind CSS color class for the percentage
   */
  getPercentageColorClass(percentage: string): string {
    return this.isPositive(percentage) ? 'text-emerald-500' : 'text-red-600';
  }
} 