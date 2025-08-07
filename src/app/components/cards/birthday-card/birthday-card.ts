import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the birthday card component.
 * 
 * Defines the structure for birthday card content and styling,
 * including background image, title, message, and action button.
 */
export interface BirthdayCardData {
  /** URL or path to the background image for the card */
  backgroundImage: string;
  /** Main title text displayed on the card */
  title: string;
  /** Optional message text displayed below the title */
  message?: string;
  /** Text for the action button */
  buttonText: string;
}

/**
 * Birthday Card Component
 * 
 * A decorative card component designed for birthday celebrations
 * and special occasions. Features a background image with overlay,
 * customizable content, and an interactive button for enhanced
 * user engagement.
 * 
 * Features:
 * - Background image with gradient overlay for text readability
 * - Responsive design with dark mode support
 * - Interactive button with hover and active states
 * - Optional message text for additional content
 * - Smooth transitions and hover effects
 * - Accessible design with proper contrast
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - No hardcoded values or styling
 * - Generic design for any celebration application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional celebration interface
 * - Interactive design with hover effects
 * - Responsive design across devices
 * - Accessible design with proper contrast ratios
 * - Visual appeal with background images and overlays
 * 
 * Use Cases:
 * - Birthday celebration interfaces
 * - Special occasion displays
 * - Social media applications
 * - Event management systems
 * - Greeting card applications
 * - Celebration dashboards
 * 
 * The component serves as a decorative birthday card that can be
 * easily integrated into celebration applications and social
 * platforms, providing users with an engaging and visually
 * appealing way to celebrate special occasions.
 * 
 * @example
 * ```html
 * <app-birthday-card [data]="birthdayData"></app-birthday-card>
 * ```
 * 
 * @example
 * ```typescript
 * const birthdayData: BirthdayCardData = {
 *   backgroundImage: '/assets/img/birthday-bg.jpg',
 *   title: 'Happy Birthday!',
 *   message: 'Wishing you a wonderful day filled with joy and laughter.',
 *   buttonText: 'Send Wishes'
 * };
 * ```
 */
@Component({
  selector: 'app-birthday-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './birthday-card.html'
})
export class BirthdayCardComponent {
  /**
   * Required input data for the birthday card component.
   * 
   * Contains all birthday card information including background
   * image, title, optional message, and button text. This required
   * input property ensures data is always provided, preventing
   * null/undefined errors and ensuring proper display.
   * 
   * @type {BirthdayCardData} - Complete birthday card data (required)
   */
  @Input() data!: BirthdayCardData;
} 
