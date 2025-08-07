import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing a payment method
 * Defines the structure for credit/debit card information
 */
export interface PaymentMethod {
  /** Unique identifier for the payment method */
  id: number;
  /** Card brand (Visa, Mastercard, etc.) */
  brand: string;
  /** Card number (partially masked) */
  number: string;
  /** Cardholder name */
  holder: string;
  /** Card expiration date (MM/YY) */
  expiry: string;
  /** Path to the card brand icon */
  icon: string;
}

/**
 * Interface defining data for the payment methods component
 * Structures the data and widget configurations
 */
export interface PaymentMethodsData {
  /** Payment methods widget title */
  title: string;
  /** Text for the add new card button */
  addNewCardButton: string;
  /** Tooltip text for edit card action */
  editCardTooltip: string;
  /** Array of available payment methods */
  methods: PaymentMethod[];
}

/**
 * Payment Methods Component
 * 
 * Component that displays a list of payment methods (cards) with
 * basic information and options for managing the cards.
 * 
 * Features:
 * - List of credit/debit cards
 * - Masked card number information
 * - Card brand icons
 * - Cardholder name and expiration date
 * - Option to add new cards
 * - Edit buttons for each card
 * - Responsive and modern design
 * 
 * Security:
 * - Partially masked card numbers
 * - Only displays necessary information
 * - Does not store complete sensitive data
 * 
 * Visual:
 * - Clean cards with organized information
 * - Brand icons for quick identification
 * - Action buttons with tooltips
 * - Responsive design for different screens
 * 
 * Usage:
 * ```html
 * <app-payment-methods [data]="paymentMethodsData"></app-payment-methods>
 * ```
 * 
 * Data example:
 * ```typescript
 * const paymentMethodsData: PaymentMethodsData = {
 *   title: 'Payment Methods',
 *   addNewCardButton: 'Add New Card',
 *   editCardTooltip: 'Edit card',
 *   methods: [
 *     {
 *       id: 1,
 *       brand: 'Visa',
 *       number: '**** **** **** 1234',
 *       holder: 'John Doe',
 *       expiry: '12/25',
 *       icon: '/assets/img/visa.png'
 *     }
 *   ]
 * };
 * ```
 * 
 * Functionalities:
 * - Optimized rendering with trackBy
 * - Support for multiple card types
 * - Intuitive interface for payment management
 * - Ready for integration with payment systems
 * 
 * Dependencies:
 * - Angular Common Module for directives
 * - Tailwind CSS for styling
 * - Font Awesome for action icons
 */
@Component({
  selector: 'app-payment-methods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-methods.html'
})
export class PaymentMethodsComponent {
  /** Payment methods configuration and data */
  @Input() data!: PaymentMethodsData;

  /**
   * Track by function for optimizing ngFor rendering
   * Uses payment method ID for efficient DOM updates
   * @param index - Current index in the array
   * @param item - Current payment method
   * @returns Unique identifier for the payment method
   */
  trackByMethod(index: number, item: PaymentMethod): number {
    return item.id;
  }
} 