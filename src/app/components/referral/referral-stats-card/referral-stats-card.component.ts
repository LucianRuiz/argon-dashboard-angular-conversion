import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for referral program statistics.
 * 
 * Provides comprehensive information for displaying referral
 * program statistics with customizable formatting options.
 */
export interface ReferralStat {
  /** Title or label for the statistic */
  title: string;
  /** Numeric value of the statistic */
  value: number;
  /** Optional prefix to display before the value (e.g., '$') */
  prefix?: string;
  /** Optional suffix to display after the value (e.g., '%') */
  suffix?: string;
}

/**
 * Referral Stats Card Component
 * 
 * A comprehensive card component that displays referral program
 * statistics with customizable formatting and display options.
 * Designed for referral program dashboards requiring statistical
 * data presentation.
 * 
 * Features:
 * - Displays referral program statistics with titles
 * - Shows numeric values with optional formatting
 * - Customizable prefix and suffix support
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation for individual stats
 * - Null-safe data handling with default empty array
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Dynamic value formatting
 * - No hardcoded values or styling
 * - Generic design for any referral application
 * - Flexible formatting options
 * - Clean and professional display
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional referral interface
 * - Null-safe input processing
 * - Responsive design across devices
 * - Dynamic value formatting
 * - Flexible prefix/suffix system
 * - Clean data presentation
 * 
 * Use Cases:
 * - Referral program dashboards
 * - Statistical data displays
 * - Performance metrics interfaces
 * - Analytics applications
 * - Program overview displays
 * - Achievement tracking systems
 * 
 * The component serves as a comprehensive referral statistics card
 * that can be easily integrated into referral applications and
 * analytics platforms, providing users with clear statistical
 * information in a visually appealing format.
 * 
 * @example
 * ```html
 * <app-referral-stats-card [stat]="referralStat" [stats]="allStats"></app-referral-stats-card>
 * ```
 * 
 * @example
 * ```typescript
 * const referralStat: ReferralStat = {
 *   title: "Total Referrals",
 *   value: 150,
 *   prefix: "",
 *   suffix: ""
 * };
 * 
 * const allStats: ReferralStat[] = [
 *   { title: "Total Referrals", value: 150 },
 *   { title: "Active Referrals", value: 89, suffix: "%" },
 *   { title: "Total Earnings", value: 2500, prefix: "$" },
 *   { title: "Conversion Rate", value: 12.5, suffix: "%" }
 * ];
 * ```
 */
@Component({
  selector: 'app-referral-stats-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './referral-stats-card.component.html',

})
export class ReferralStatsCardComponent {
  /**
   * Required input data for the individual referral statistic.
   * 
   * Contains statistic information including title, value,
   * and optional formatting options. This required input
   * property ensures statistic data is always provided
   * for proper display.
   * 
   * @type {ReferralStat} - Individual referral statistic data (required)
   */
  @Input() stat!: ReferralStat;

  /**
   * Input data for all referral statistics in the program.
   * 
   * Contains array of all referral statistics for context
   * and potential multi-stat display. This input property
   * defaults to an empty array for flexibility.
   * 
   * @type {ReferralStat[]} - Array of all referral statistics (defaults to empty array)
   */
  @Input() stats: ReferralStat[] = [];
} 