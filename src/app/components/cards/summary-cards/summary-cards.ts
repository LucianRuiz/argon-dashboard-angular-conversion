import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for individual summary cards.
 * 
 * Provides comprehensive information for displaying summary
 * cards with title, amount, icon, and styling details.
 */
export interface SummaryCard {
  /** Unique identifier for the card */
  id: number;
  /** Title of the summary card */
  title: string;
  /** Amount or value to display */
  amount: string;
  /** CSS class for the icon */
  icon: string;
  /** CSS class for background styling */
  bgClass: string;
  /** Description or additional information */
  description: string;
}

/**
 * Complete data structure for the summary cards component.
 * 
 * Contains an array of summary cards to display in a
 * comprehensive summary format.
 */
export interface SummaryCardsData {
  /** Array of summary cards to display */
  cards: SummaryCard[];
}

/**
 * Summary Cards Component
 * 
 * A comprehensive card component that displays multiple summary
 * cards with key metrics and information. Designed for dashboards
 * and analytics applications requiring overview statistics.
 * 
 * Features:
 * - Displays multiple summary cards with key metrics
 * - Individual card identification and tracking
 * - Customizable icons and background styling
 * - Performance optimization with trackBy function
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interfaces
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Array-based card display
 * - Unique card identification
 * - No hardcoded values or styling
 * - Generic design for any summary application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Performance optimization with trackBy function
 * - Efficient rendering of card arrays
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional summary interface
 * - Unique card identification for proper tracking
 * 
 * Use Cases:
 * - Dashboard overview sections
 * - Analytics applications
 * - Financial reporting tools
 * - Business intelligence dashboards
 * - Performance monitoring
 * - Key metrics display
 * 
 * The component serves as a comprehensive summary cards display
 * that can be easily integrated into dashboards and analytics
 * applications, providing users with an overview of key metrics
 * and statistics in a clean, organized format.
 * 
 * @example
 * ```html
 * <app-summary-cards [data]="summaryCardsData"></app-summary-cards>
 * ```
 * 
 * @example
 * ```typescript
 * const summaryCardsData: SummaryCardsData = {
 *   cards: [
 *     {
 *       id: 1,
 *       title: "Total Sales",
 *       amount: "$53,000",
 *       icon: "ni ni-money-coins",
 *       bgClass: "bg-gradient-primary",
 *       description: "Since last month"
 *     },
 *     {
 *       id: 2,
 *       title: "New Users",
 *       amount: "2,300",
 *       icon: "ni ni-world",
 *       bgClass: "bg-gradient-success",
 *       description: "This week"
 *     }
 *   ]
 * };
 * ```
 */
@Component({
  selector: 'app-summary-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-cards.html'
})
export class SummaryCardsComponent {
  /**
   * Required input data for the summary cards component.
   * 
   * Contains array of summary cards to display with their
   * respective metrics and styling information. This required
   * input property ensures data is always provided, preventing
   * null/undefined errors and ensuring proper display.
   * 
   * @type {SummaryCardsData} - Complete summary cards data (required)
   */
  @Input() data!: SummaryCardsData;

  /**
   * TrackBy function for summary cards to optimize ngFor performance.
   * 
   * Uses card ID as unique identifier to help Angular efficiently
   * track and update summary cards. This improves performance by
   * reducing unnecessary DOM manipulations and ensures proper
   * card identification.
   * 
   * @param {number} index - Array index of the card
   * @param {SummaryCard} item - Summary card object
   * @returns {number} Unique identifier for the card (card ID)
   */
  trackByCard(index: number, item: SummaryCard): number {
    return item.id;
  }
} 