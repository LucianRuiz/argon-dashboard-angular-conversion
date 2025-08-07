import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewSummaryCardComponent, OverviewSummaryCardData } from '../overview-summary-card/overview-summary-card';

/**
 * Overview Summary Cards Component
 * 
 * A container component that displays multiple overview summary cards
 * in a grid layout. This component serves as a wrapper for individual
 * overview summary cards, providing a structured way to display
 * multiple summary statistics in a dashboard format.
 * 
 * Features:
 * - Displays multiple overview summary cards in a grid layout
 * - Null-safe input handling with default empty array
 * - Integration with individual OverviewSummaryCardComponent
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Null-safe data handling (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule and OverviewSummaryCardComponent)
 * - Configurable data input with array interface
 * - No hardcoded values or styling
 * - Generic design for any overview summary application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional overview interface
 * - Null-safe input processing
 * - Efficient array handling
 * - Responsive grid layout
 * 
 * Use Cases:
 * - Dashboard overview sections
 * - Analytics applications
 * - Business intelligence dashboards
 * - Performance monitoring displays
 * - Key metrics overview
 * - Executive summary displays
 * 
 * The component serves as a container for multiple overview summary
 * cards that can be easily integrated into dashboards and analytics
 * applications, providing users with a structured overview of key
 * metrics and statistics.
 * 
 * @example
 * ```html
 * <app-overview-summary-cards [cards]="overviewCardsData"></app-overview-summary-cards>
 * ```
 * 
 * @example
 * ```typescript
 * const overviewCardsData: OverviewSummaryCardData[] = [
 *   {
 *     title: "Total Sales",
 *     value: "$53,000",
 *     percentage: "+55%",
 *     icon: "ni ni-money-coins",
 *     color: "success"
 *   },
 *   {
 *     title: "New Users",
 *     value: "2,300",
 *     percentage: "+3%",
 *     icon: "ni ni-world",
 *     color: "info"
 *   }
 * ];
 * ```
 */
@Component({
  selector: 'app-overview-summary-cards',
  standalone: true,
  imports: [CommonModule, OverviewSummaryCardComponent],
  templateUrl: './overview-summary-cards.html'
})
export class OverviewSummaryCardsComponent {
  /**
   * Private array to store the overview summary cards data.
   * 
   * This private property holds the actual array of overview summary
   * cards data, providing internal storage for the component's data.
   * 
   * @type {OverviewSummaryCardData[]} - Internal storage for cards data
   */
  private _cards: OverviewSummaryCardData[] = [];

  /**
   * Input setter for overview summary cards data.
   * 
   * Accepts an array of OverviewSummaryCardData or null, providing
   * null-safe handling by defaulting to an empty array when null
   * is provided. This ensures the component always has valid data
   * to work with.
   * 
   * @param {OverviewSummaryCardData[] | null} value - Array of overview summary cards data
   */
  @Input() set cards(value: OverviewSummaryCardData[] | null) {
    this._cards = value ?? [];
  }

  /**
   * Getter for overview summary cards data.
   * 
   * Returns the current array of overview summary cards data.
   * This getter provides access to the stored cards data for
   * template rendering and component logic.
   * 
   * @returns {OverviewSummaryCardData[]} Current array of overview summary cards data
   */
  get cards(): OverviewSummaryCardData[] {
    return this._cards;
  }
} 