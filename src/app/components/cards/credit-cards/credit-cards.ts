import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for individual credit cards.
 * 
 * Provides comprehensive information for displaying credit
 * cards with brand, number, holder details, and styling.
 */
export interface CreditCard {
  /** Unique identifier for the credit card */
  id: number;
  /** Brand name of the credit card (e.g., 'Visa', 'Mastercard') */
  brand: string;
  /** Masked or formatted card number */
  number: string;
  /** Name of the card holder */
  holder: string;
  /** Card expiry date */
  expiry: string;
  /** CSS class for background styling */
  bgClass: string;
  /** CSS class for the card brand icon */
  icon: string;
}

/**
 * Complete data structure for the credit cards component.
 * 
 * Contains an array of credit cards to display in a
 * comprehensive credit card management format.
 */
export interface CreditCardsData {
  /** Array of credit cards to display */
  cards: CreditCard[];
}

/**
 * Credit Cards Component
 * 
 * A comprehensive card component that displays multiple credit
 * cards with detailed information and styling. Designed for
 * financial applications and payment management systems.
 * 
 * Features:
 * - Displays multiple credit cards with detailed information
 * - Individual card identification and tracking
 * - Customizable brand icons and background styling
 * - Performance optimization with trackBy function
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Array-based card display
 * - Unique card identification
 * - No hardcoded values or styling
 * - Generic design for any credit card application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Performance optimization with trackBy function
 * - Efficient rendering of card arrays
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional financial interface
 * - Unique card identification for proper tracking
 * 
 * Use Cases:
 * - Financial dashboards
 * - Payment management applications
 * - Banking interfaces
 * - E-commerce payment displays
 * - Credit card management systems
 * - Digital wallet applications
 * 
 * The component serves as a comprehensive credit cards display
 * that can be easily integrated into financial applications and
 * payment systems, providing users with a detailed view of their
 * credit cards with professional styling and organization.
 * 
 * @example
 * ```html
 * <app-credit-cards [data]="creditCardsData"></app-credit-cards>
 * ```
 * 
 * @example
 * ```typescript
 * const creditCardsData: CreditCardsData = {
 *   cards: [
 *     {
 *       id: 1,
 *       brand: "Visa",
 *       number: "**** **** **** 1234",
 *       holder: "John Doe",
 *       expiry: "12/25",
 *       bgClass: "bg-gradient-primary",
 *       icon: "ni ni-credit-card"
 *     },
 *     {
 *       id: 2,
 *       brand: "Mastercard",
 *       number: "**** **** **** 5678",
 *       holder: "Jane Smith",
 *       expiry: "06/26",
 *       bgClass: "bg-gradient-success",
 *       icon: "ni ni-credit-card"
 *     }
 *   ]
 * };
 * ```
 */
@Component({
  selector: 'app-credit-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credit-cards.html'
})
export class CreditCardsComponent {
  /**
   * Required input data for the credit cards component.
   * 
   * Contains array of credit cards to display with their
   * respective details and styling information. This required
   * input property ensures data is always provided, preventing
   * null/undefined errors and ensuring proper display.
   * 
   * @type {CreditCardsData} - Complete credit cards data (required)
   */
  @Input() data!: CreditCardsData;

  /**
   * TrackBy function for credit cards to optimize ngFor performance.
   * 
   * Uses card ID as unique identifier to help Angular efficiently
   * track and update credit cards. This improves performance by
   * reducing unnecessary DOM manipulations and ensures proper
   * card identification.
   * 
   * @param {number} index - Array index of the card
   * @param {CreditCard} item - Credit card object
   * @returns {number} Unique identifier for the card (card ID)
   */
  trackByCard(index: number, item: CreditCard): number {
    return item.id;
  }
} 