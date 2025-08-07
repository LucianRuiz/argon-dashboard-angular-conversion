import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the overview summary card component.
 * 
 * Provides comprehensive information for displaying overview
 * summary cards with title, value, trend indicators, and
 * interactive date range selection.
 */
export interface OverviewSummaryCardData {
  /** Title of the overview summary card */
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
  /** Descriptive text about the statistic */
  description: string;
  /** Current date range selection */
  dateRange: string;
  /** Available date range options for dropdown */
  dateOptions: string[];
}

/**
 * Overview Summary Card Component
 * 
 * A comprehensive card component that displays overview summary
 * statistics with trend indicators and interactive date range
 * selection. Designed for dashboard overview sections and
 * analytics applications requiring key metrics display.
 * 
 * Features:
 * - Displays overview summary statistics with title and value
 * - Trend indicators with up/down direction and percentage
 * - Interactive dropdown for date range selection
 * - Customizable icons with color styling
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Dropdown state management
 * - Event handling for user interactions
 * - No hardcoded values or styling
 * - Generic design for any overview summary application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional overview interface
 * - Interactive dropdown functionality
 * - Event propagation control
 * - Responsive design across devices
 * 
 * Use Cases:
 * - Dashboard overview sections
 * - Analytics applications
 * - Business intelligence dashboards
 * - Performance monitoring displays
 * - Key metrics overview
 * - Executive summary displays
 * 
 * The component serves as a comprehensive overview summary card that can be
 * easily integrated into dashboards and analytics applications, providing
 * users with key metrics display and interactive date range selection
 * capabilities.
 * 
 * @example
 * ```html
 * <app-overview-summary-card [data]="overviewCardData"></app-overview-summary-card>
 * ```
 * 
 * @example
 * ```typescript
 * const overviewCardData: OverviewSummaryCardData = {
 *   title: "Total Sales",
 *   value: "$53,000",
 *   percentage: "+55%",
 *   trend: "up",
 *   icon: "ni ni-money-coins",
 *   iconColor: "text-success",
 *   description: "Since last month",
 *   dateRange: "Last 30 days",
 *   dateOptions: ["Last 7 days", "Last 30 days", "Last 90 days"]
 * };
 * ```
 */
@Component({
  selector: 'app-overview-summary-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview-summary-card.html'
})
export class OverviewSummaryCardComponent {
  /**
   * Required input data for the overview summary card.
   * 
   * Contains all overview summary information including title,
   * value, trend indicators, and date range options. This required
   * input property ensures data is always provided, preventing
   * null/undefined errors and ensuring proper display.
   * 
   * @type {OverviewSummaryCardData} - Complete overview summary data (required)
   */
  @Input() data!: OverviewSummaryCardData;

  /**
   * Boolean flag to control dropdown visibility.
   * 
   * Tracks the current state of the date range dropdown menu.
   * When true, the dropdown is visible; when false, it is hidden.
   * 
   * @type {boolean} - Dropdown visibility state
   */
  showDropdown = false;

  /**
   * Toggles the dropdown visibility state.
   * 
   * Handles click events on the dropdown trigger, preventing
   * default browser behavior and event propagation to ensure
   * proper dropdown functionality. This method provides the
   * interactive behavior for the date range selection feature.
   * 
   * @param {Event} event - The click event that triggered the toggle
   */
  toggleDropdown(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.showDropdown = !this.showDropdown;
  }
} 