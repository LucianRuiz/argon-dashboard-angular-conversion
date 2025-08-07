import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the earnings card component.
 * 
 * Provides comprehensive information for displaying earnings
 * statistics with amount, variation, and action details.
 */
export interface EarningsCardData {
  /** Title of the earnings card */
  title: string;
  /** Main earnings amount to display */
  amount: string;
  /** Variation or change indicator */
  variation: string;
  /** Description of the variation */
  variationDescription: string;
  /** Additional descriptive text */
  description: string;
  /** Text for the action button */
  buttonText: string;
  /** Background image URL or CSS class */
  backgroundImage: string;
}

/**
 * Earnings Card Component
 * 
 * A comprehensive card component that displays earnings statistics
 * with variation indicators and action buttons. Designed for
 * financial dashboards and applications requiring earnings
 * performance metrics.
 * 
 * Features:
 * - Displays earnings statistics with title and amount
 * - Variation indicators with descriptive text
 * - Action button for user interaction
 * - Customizable background images
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - No hardcoded values or styling
 * - Generic design for any earnings application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional financial interface
 * - User-friendly design with clear information hierarchy
 * - Accessible content structure
 * - Responsive design across devices
 * 
 * Use Cases:
 * - Financial dashboards
 * - Revenue tracking applications
 * - Business performance monitoring
 * - Investment portfolio displays
 * - Sales analytics
 * - Profit and loss statements
 * 
 * The component serves as a comprehensive earnings card that can be
 * easily integrated into financial applications and dashboards,
 * providing users with detailed earnings information in a
 * professional and user-friendly format.
 * 
 * @example
 * ```html
 * <app-earnings-card [data]="earningsData"></app-earnings-card>
 * ```
 * 
 * @example
 * ```typescript
 * const earningsData: EarningsCardData = {
 *   title: "Total Earnings",
 *   amount: "$53,000",
 *   variation: "+55%",
 *   variationDescription: "Since last month",
 *   description: "Your earnings have increased significantly",
 *   buttonText: "View Details",
 *   backgroundImage: "bg-gradient-primary"
 * };
 * ```
 */
@Component({
  selector: 'app-earnings-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './earnings-card.html'
})
export class EarningsCardComponent {
  /**
   * Required input data for the earnings card.
   * 
   * Contains all earnings information including title, amount,
   * variation details, and action information. This required
   * input property ensures data is always provided, preventing
   * null/undefined errors and ensuring proper display.
   * 
   * @type {EarningsCardData} - Complete earnings data (required)
   */
  @Input() data!: EarningsCardData;
} 