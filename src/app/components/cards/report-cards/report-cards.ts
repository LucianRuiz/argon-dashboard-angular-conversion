import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for individual report cards.
 * 
 * Provides comprehensive information for displaying report
 * cards with title, value, icon, percentage, and background styling.
 */
export interface ReportCard {
  /** Title of the report card */
  title: string;
  /** Main value to display */
  value: string;
  /** CSS class for the icon */
  icon: string;
  /** Percentage or change indicator */
  percentage: string;
  /** Background image URL or CSS class */
  backgroundImage: string;
}

/**
 * Report Cards Component
 * 
 * A comprehensive card component that displays multiple report
 * cards with key metrics and visual styling. Designed for
 * reporting dashboards and analytics applications requiring
 * visual data presentation.
 * 
 * Features:
 * - Displays multiple report cards with key metrics
 * - Individual card identification and tracking
 * - Customizable icons and background images
 * - Performance optimization with trackBy function
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Default empty array for cards input
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Array-based card display
 * - Index-based card identification
 * - No hardcoded values or styling
 * - Generic design for any reporting application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Performance optimization with trackBy function
 * - Efficient rendering of card arrays
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional reporting interface
 * - Index-based identification for proper tracking
 * 
 * Use Cases:
 * - Reporting dashboards
 * - Analytics applications
 * - Business intelligence tools
 * - Performance monitoring displays
 * - Data visualization interfaces
 * - Executive summary displays
 * 
 * The component serves as a comprehensive report cards display
 * that can be easily integrated into reporting applications and
 * dashboards, providing users with visual representation of key
 * metrics and statistics.
 * 
 * @example
 * ```html
 * <app-report-cards [cards]="reportCardsData"></app-report-cards>
 * ```
 * 
 * @example
 * ```typescript
 * const reportCardsData: ReportCard[] = [
 *   {
 *     title: "Sales Report",
 *     value: "$53,000",
 *     icon: "ni ni-chart-bar-32",
 *     percentage: "+55%",
 *     backgroundImage: "bg-gradient-primary"
 *   },
 *   {
 *     title: "User Growth",
 *     value: "2,300",
 *     icon: "ni ni-world",
 *     percentage: "+3%",
 *     backgroundImage: "bg-gradient-success"
 *   }
 * ];
 * ```
 */
@Component({
  selector: 'app-report-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-cards.html'
})
export class ReportCardsComponent {
  /**
   * Input data for the report cards component.
   * 
   * Contains array of report cards to display with their
   * respective metrics and styling information. This input
   * property defaults to an empty array to prevent errors
   * when no data is provided.
   * 
   * @type {ReportCard[]} - Array of report cards (defaults to empty array)
   */
  @Input() cards: ReportCard[] = [];

  /**
   * TrackBy function for report cards to optimize ngFor performance.
   * 
   * Uses array index as unique identifier to help Angular efficiently
   * track and update report cards. This improves performance by
   * reducing unnecessary DOM manipulations and ensures proper
   * card identification.
   * 
   * @param {number} index - Array index of the card
   * @param {ReportCard} item - Report card object
   * @returns {number} Unique identifier for the card (array index)
   */
  trackByIndex(index: number, item: ReportCard): number {
    return index;
  }
} 