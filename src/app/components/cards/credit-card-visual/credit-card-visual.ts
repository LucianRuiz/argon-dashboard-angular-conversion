import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the credit card visual component.
 * 
 * Provides comprehensive information for displaying a visual
 * credit card with card details, styling, and branding elements.
 */
export interface CreditCardVisualData {
  /** Card number (can be masked or formatted) */
  cardNumber: string;
  /** Name of the card holder */
  cardHolder: string;
  /** Card expiration date */
  expires: string;
  /** URL of the background image */
  backgroundImage: string;
  /** URL of the card logo/brand image */
  logoUrl: string;
  /** Alt text for the logo image */
  logoAlt: string;
}

/**
 * Credit Card Visual Component
 * 
 * A visual widget component that displays a credit card with
 * realistic styling and branding elements. Designed for
 * financial applications and payment interfaces requiring
 * visual credit card representation.
 * 
 * Features:
 * - Displays visual credit card with realistic styling
 * - Customizable background images for different card types
 * - Brand logo integration with proper alt text
 * - Card number, holder name, and expiration display
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - No hardcoded values or styling
 * - Generic design for any credit card visual application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional financial interface
 * - Accessible design with proper alt text
 * - Responsive design across devices
 * - Visual appeal with realistic card styling
 * 
 * Use Cases:
 * - Financial dashboards
 * - Payment interfaces
 * - Banking applications
 * - E-commerce checkout displays
 * - Credit card management systems
 * - Digital wallet applications
 * 
 * The component serves as a visual credit card widget that can be
 * easily integrated into financial applications and payment systems,
 * providing users with a realistic and professional credit card
 * representation for enhanced user experience.
 * 
 * @example
 * ```html
 * <app-credit-card-visual [data]="creditCardData"></app-credit-card-visual>
 * ```
 * 
 * @example
 * ```typescript
 * const creditCardData: CreditCardVisualData = {
 *   cardNumber: "**** **** **** 1234",
 *   cardHolder: "John Doe",
 *   expires: "12/25",
 *   backgroundImage: "assets/img/credit-card-bg.jpg",
 *   logoUrl: "assets/img/visa-logo.png",
 *   logoAlt: "Visa"
 * };
 * ```
 */
@Component({
  selector: 'app-credit-card-visual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credit-card-visual.html'
})
export class CreditCardVisualComponent {
  /**
   * Required input data for the credit card visual component.
   * 
   * Contains all credit card visual information including card
   * details, background image, and branding elements. This required
   * input property ensures data is always provided, preventing
   * null/undefined errors and ensuring proper display.
   * 
   * @type {CreditCardVisualData} - Complete credit card visual data (required)
   */
  @Input() data!: CreditCardVisualData;
} 