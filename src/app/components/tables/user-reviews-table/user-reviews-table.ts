import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * USER REVIEWS TABLE COMPONENT
 * ========================================
 *
 * A table component for displaying user reviews and feedback
 * with sentiment analysis and user information.
 *
 * FEATURES:
 * - User review display with sentiment indicators
 * - Color-coded review status (positive, neutral, negative)
 * - User avatar and employment information
 * - Responsive design with Tailwind CSS
 * - Sentiment-based visual feedback
 *
 * USAGE:
 * <app-user-reviews-table [users]="reviewsList"></app-user-reviews-table>
 *
 * REUSABILITY: High - Generic user reviews display
 * COMPLEXITY: Low - Simple review data display
 */

/**
 * Interface representing user review data structure.
 *
 * @property {number} id - Unique review identifier
 * @property {string} name - User's full name
 * @property {string} avatar - User's avatar image URL
 * @property {string} function - User's job function or role
 * @property {'positive' | 'neutral' | 'negative'} review - Review sentiment
 * @property {string} email - User's email address
 * @property {string} employed - Employment date or status
 *
 * @example
 * const userReview: UserReview = {
 *   id: 1,
 *   name: 'John Doe',
 *   avatar: '/assets/avatars/john.jpg',
 *   function: 'Software Engineer',
 *   review: 'positive',
 *   email: 'john.doe@company.com',
 *   employed: '2023-01-15'
 * };
 */
export interface UserReview {
  id: number;
  name: string;
  avatar: string;
  function: string;
  review: 'positive' | 'neutral' | 'negative';
  email: string;
  employed: string;
}

/**
 * User Reviews Table Component
 *
 * A standalone component for displaying user reviews and feedback
 * with sentiment analysis and visual indicators.
 *
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Sentiment-based color coding
 * - Responsive design with Tailwind CSS
 * - Minimal dependencies (only CommonModule)
 *
 * REUSABILITY FEATURES:
 * - Configurable review data input
 * - Flexible sentiment display options
 * - Color-coded review status
 * - No hardcoded values
 * - Easily extendable for additional features
 *
 * USE CASES:
 * - Customer feedback displays
 * - Employee review systems
 * - Product review management
 * - Sentiment analysis dashboards
 * - User satisfaction tracking
 *
 * INTEGRATION EXAMPLE:
 *
 * ```typescript
 * // In parent component
 * reviews: UserReview[] = [];
 *
 * ngOnInit() {
 *   this.loadReviews();
 * }
 *
 * loadReviews() {
 *   this.reviewService.getReviews().subscribe(data => {
 *     this.reviews = data;
 *   });
 * }
 * ```
 */
@Component({
  selector: 'app-user-reviews-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-reviews-table.html'
})
export class UserReviewsTableComponent {
  /**
   * Array of user reviews to display in the table.
   * @type {UserReview[]}
   * @default []
   */
  @Input() users: UserReview[] = [];

  /**
   * Returns Tailwind CSS color class based on review sentiment.
   * Provides visual feedback for different review types.
   * @param review - Review sentiment ('positive', 'neutral', 'negative')
   * @returns {string} Tailwind CSS color class
   */
  getReviewColor(review: string): string {
    switch (review) {
      case 'positive':
        return 'bg-cyan-500';
      case 'neutral':
        return 'bg-slate-700';
      case 'negative':
        return 'bg-red-600';
      default:
        return 'bg-slate-700';
    }
  }
} 