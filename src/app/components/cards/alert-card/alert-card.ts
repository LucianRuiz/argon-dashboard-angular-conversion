import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the alert card component.
 * 
 * Provides comprehensive information for displaying alert
 * messages with styling, content, and interactive elements.
 */
export interface AlertCardData {
  /** Unique identifier for the alert */
  id: string;
  /** Main content text of the alert */
  content: string;
  /** Text for the action link */
  linkText: string;
  /** URL for the action link */
  linkUrl: string;
  /** CSS gradient start color */
  gradientFrom: string;
  /** CSS gradient end color */
  gradientTo: string;
  /** CSS border color for the alert */
  borderColor: string;
}

/**
 * Alert Card Component
 * 
 * A reusable component for displaying alert messages with
 * different colors and gradients. Supports dynamic content,
 * links, and close functionality for enhanced user experience.
 * 
 * Features:
 * - Dynamic content and link text for flexible messaging
 * - Configurable gradients and border colors for visual variety
 * - Close button functionality for user control
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - No hardcoded values or styling
 * - Generic design for any alert application
 * - DOM manipulation for alert removal
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional alert interface
 * - Interactive close functionality
 * - Responsive design across devices
 * - Dynamic gradient styling
 * - Accessible alert messaging
 * 
 * Use Cases:
 * - Notification systems
 * - Warning displays
 * - Information alerts
 * - Success messages
 * - Error notifications
 * - System announcements
 * 
 * The component serves as a versatile alert card that can be
 * easily integrated into applications requiring user notifications,
 * providing users with clear and visually appealing alert messages
 * with interactive functionality.
 * 
 * @example
 * ```html
 * <app-alert-card [data]="alertData"></app-alert-card>
 * ```
 * 
 * @example
 * ```typescript
 * const alertData: AlertCardData = {
 *   id: "alert-1",
 *   content: "Your profile has been updated successfully!",
 *   linkText: "View Profile",
 *   linkUrl: "/profile",
 *   gradientFrom: "from-blue-500",
 *   gradientTo: "to-blue-600",
 *   borderColor: "border-blue-500"
 * };
 * ```
 */
@Component({
  selector: 'app-alert-card',
  templateUrl: './alert-card.html',
  standalone: true,
  imports: [CommonModule]
})
export class AlertCardComponent {
  
  /**
   * Required input data for the alert card.
   * 
   * Provides complete alert configuration including content,
   * styling, and behavior. This required input property ensures
   * data is always provided, preventing null/undefined errors
   * and ensuring proper display and functionality.
   * 
   * @type {AlertCardData} - Complete alert configuration (required)
   */
  @Input({ required: true }) data!: AlertCardData;

  /**
   * Handles alert close button click and removes the alert from the DOM.
   * 
   * Uses DOM manipulation to find and remove the alert element
   * when the close button is clicked. This method provides the
   * interactive functionality for user-controlled alert dismissal.
   * 
   * @param {Event} event - The click event that triggered the close action
   */
  onClose(event: Event): void {
    const alertElement = (event.target as HTMLElement).closest('[alert]');
    if (alertElement) {
      alertElement.remove();
    }
  }
} 