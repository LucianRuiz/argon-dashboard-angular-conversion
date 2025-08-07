import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for Sweet Alert card examples.
 * 
 * Provides comprehensive information for displaying Sweet Alert
 * demonstration cards with title, description, and interaction details.
 */
export interface SweetAlertCardData {
  /** Title of the Sweet Alert example */
  title: string;
  /** Description of the Sweet Alert example */
  description: string;
  /** Button text for the example */
  buttonText: string;
  /** Sweet Alert type/function to call */
  alertType: string;
}

/**
 * Sweet Alert Card Component
 * 
 * A reusable component for displaying Sweet Alert example cards
 * that demonstrates different types of Sweet Alert notifications.
 * Each card shows a title, description, and interactive button
 * that triggers the corresponding Sweet Alert functionality.
 * 
 * Features:
 * - Displays Sweet Alert example information with clear titles
 * - Interactive button with Sweet Alert functionality
 * - Responsive design with Tailwind CSS
 * - Dark mode support for enhanced user experience
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with simple interface
 * - No hardcoded values or styling
 * - Generic design for any Sweet Alert demonstration
 * - Integration with Sweet Alert library
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional alert demonstration interface
 * - Integration with external Sweet Alert library
 * - Responsive design across devices
 * - Accessible button interactions
 * 
 * Use Cases:
 * - Sweet Alert documentation pages
 * - UI component libraries
 * - Alert system demonstrations
 * - User interface showcases
 * - Development toolkits
 * - Interactive documentation
 * 
 * The component serves as a demonstration card that can be easily
 * integrated into Sweet Alert documentation or UI libraries,
 * providing users with interactive examples of different alert
 * types and functionalities.
 * 
 * @example
 * ```html
 * <app-sweet-alert-card [data]="cardData"></app-sweet-alert-card>
 * ```
 * 
 * @example
 * ```typescript
 * const cardData: SweetAlertCardData = {
 *   title: "Basic example",
 *   description: "A basic SweetAlert2 example",
 *   buttonText: "Try me!",
 *   alertType: "basic"
 * };
 * ```
 */
@Component({
  selector: 'app-sweet-alert-card',
  templateUrl: './sweet-alert-card.html',
  standalone: true,
  imports: [CommonModule]
})
export class SweetAlertCardComponent {
  
  /**
   * Required input data for the Sweet Alert card.
   * 
   * Provides all necessary information for displaying the Sweet Alert
   * demonstration card including title, description, button text, and
   * alert type. This required input property ensures data is always
   * provided, preventing null/undefined errors and ensuring proper
   * display and functionality.
   * 
   * @type {SweetAlertCardData} - Complete card configuration (required)
   */
  @Input({ required: true }) data!: SweetAlertCardData;

  /**
   * Handles Sweet Alert button click and displays the corresponding alert.
   * 
   * Calls the appropriate Sweet Alert function based on the alert type
   * using the integrated Sweet Alert library. This method provides
   * the interactive functionality for demonstrating different types
   * of Sweet Alert notifications.
   * 
   * The method integrates with the global Sweet Alert library to
   * display various types of alerts including success, error, warning,
   * and custom alert configurations.
   * 
   * @param {string} alertType - Type of Sweet Alert to display
   */
  showSweetAlert(alertType: string): void {
    // Declare the soft object for TypeScript compatibility
    (window as any).soft?.showSwal?.(alertType);
  }
} 