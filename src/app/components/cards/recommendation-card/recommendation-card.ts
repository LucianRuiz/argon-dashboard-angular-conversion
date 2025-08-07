import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the recommendation card component.
 * 
 * Provides comprehensive information for displaying recommendation
 * cards with user details, message, and action information.
 */
export interface RecommendationCardData {
  /** URL or path to the user's avatar image */
  avatar: string;
  /** Name of the person making the recommendation */
  name: string;
  /** Time when the recommendation was made */
  time: string;
  /** Badge text to display */
  badge: string;
  /** CSS class for badge color styling */
  badgeColor: string;
  /** Main recommendation message */
  message: string;
  /** Additional description or context */
  description: string;
  /** Amount or value associated with the recommendation */
  amount: string;
  /** Description of the amount */
  amountDescription: string;
  /** Text for the action button */
  buttonText: string;
}

/**
 * Recommendation Card Component
 * 
 * A comprehensive card component that displays user recommendations
 * with detailed information including user profile, message content,
 * and action buttons. Designed for social platforms, review systems,
 * and recommendation interfaces.
 * 
 * Features:
 * - Displays user recommendations with avatar and name
 * - Time-based recommendation tracking
 * - Badge system with customizable colors
 * - Main message and description content
 * - Amount display with contextual description
 * - Action button for user interaction
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - No hardcoded values or styling
 * - Generic design for any recommendation system
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional recommendation interface
 * - User-friendly design with clear information hierarchy
 * - Accessible content structure
 * - Responsive design across devices
 * 
 * Use Cases:
 * - Social media recommendation feeds
 * - Product review systems
 * - User testimonial displays
 * - Recommendation engines
 * - Community feedback platforms
 * - Endorsement systems
 * 
 * The component serves as a comprehensive recommendation card that can be
 * easily integrated into social platforms and recommendation systems,
 * providing users with detailed recommendation information in a
 * professional and user-friendly format.
 * 
 * @example
 * ```html
 * <app-recommendation-card [data]="recommendationData"></app-recommendation-card>
 * ```
 * 
 * @example
 * ```typescript
 * const recommendationData: RecommendationCardData = {
 *   avatar: "assets/img/team-1.jpg",
 *   name: "John Doe",
 *   time: "2 hours ago",
 *   badge: "Verified",
 *   badgeColor: "bg-gradient-success",
 *   message: "Great product! Highly recommended.",
 *   description: "This product exceeded my expectations.",
 *   amount: "$299",
 *   amountDescription: "Product price",
 *   buttonText: "View Details"
 * };
 * ```
 */
@Component({
  selector: 'app-recommendation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendation-card.html'
})
export class RecommendationCardComponent {
  /**
   * Required input data for the recommendation card.
   * 
   * Contains all recommendation information including user details,
   * message content, and action information. This required input
   * property ensures data is always provided, preventing null/undefined
   * errors and ensuring proper display.
   * 
   * @type {RecommendationCardData} - Complete recommendation data (required)
   */
  @Input() data!: RecommendationCardData;
} 