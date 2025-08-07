import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * REVIEW STATS COMPONENT
 * ========================================
 *
 * A component for displaying review statistics with percentage bars and color coding.
 *
 * FEATURES:
 * - Displays review statistics with labels and percentages
 * - Color-coded progress bars for visual feedback
 * - Responsive design with Tailwind CSS
 * - Simple and clean statistics display
 *
 * USAGE:
 * <app-review-stats [stats]="reviewStats"></app-review-stats>
 *
 * REUSABILITY: High - Generic review statistics display
 * COMPLEXITY: Low - Simple statistics rendering
 */

/**
 * Interface representing a review statistic item.
 *
 * @property {string} label - Statistic label (e.g., '5 Stars', '4 Stars')
 * @property {number} percentage - Percentage value (0-100)
 * @property {string} color - Tailwind CSS color class for the progress bar
 *
 * @example
 * const reviewStat: ReviewStat = {
 *   label: '5 Stars',
 *   percentage: 75,
 *   color: 'bg-green-500'
 * };
 */
export interface ReviewStat {
  label: string;
  percentage: number;
  color: string;
}

@Component({
  selector: 'app-review-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-stats.html'
})
export class ReviewStatsComponent {
  /**
   * Array of review statistics to display.
   * @type {ReviewStat[]}
   * @default []
   */
  @Input() stats: ReviewStat[] = [];
} 