import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Order Payment Details Data Interface
 * 
 * Defines the structure for order payment details display data.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The OrderPaymentDetailsData interface defines the essential properties
 * needed to display payment information for orders including card
 * type, number, and associated logo.
 * 
 * @interface
 * @since 1.0.0
 */
export interface OrderPaymentDetailsData {
  /** 
   * Title for the payment details section
   * @required - Section title provides context
   * @example "Payment Method", "Card Details", "Payment Information"
   */
  title: string;
  
  /** 
   * Type of payment card used
   * @required - Card type provides payment method identification
   * @example "Visa", "Mastercard", "American Express", "Discover"
   */
  cardType: string;
  
  /** 
   * Masked or formatted card number
   * @required - Card number provides payment identification
   * @example "**** **** **** 1234", "1234 **** **** 5678"
   */
  cardNumber: string;
  
  /** 
   * URL or path to the card logo image
   * @required - Card logo provides visual identification
   * @example "/assets/img/cards/visa.png", "https://example.com/mastercard.svg"
   */
  cardLogo: string;
}

/**
 * Order Payment Details Component
 * 
 * A component designed to display payment method information
 * for orders in a clean, professional format. Shows card type,
 * masked card number, and associated logo for payment identification.
 * 
 * @description
 * This component creates a professional payment details display
 * that shows payment method information in a visually appealing
 * manner. It's ideal for order confirmation pages, payment
 * history, and any interface that needs to present payment
 * method details securely.
 * 
 * @features
 * - Payment method display
 * - Card type identification
 * - Masked card number display
 * - Card logo visualization
 * - Responsive design
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - Clean, professional layout
 * - Secure information display
 * - Visual payment identification
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with required properties
 * - Performance optimized
 * - Memory efficient
 * - Unit test friendly
 * - No external dependencies
 * - Security-conscious display
 * 
 * @usecases
 * - Order confirmation pages
 * - Payment history displays
 * - E-commerce order details
 * - Invoice payment sections
 * - Transaction summaries
 * - Payment method management
 * - Billing information displays
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-order-payment-details 
 *   [data]="paymentData">
 * </app-order-payment-details>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { OrderPaymentDetailsComponent, OrderPaymentDetailsData } from './order-payment-details.component';
 * 
 * export class OrderDetailsComponent {
 *   paymentData: OrderPaymentDetailsData = {
 *     title: 'Payment Method',
 *     cardType: 'Visa',
 *     cardNumber: '**** **** **** 1234',
 *     cardLogo: '/assets/img/cards/visa.png'
 *   };
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-order-payment-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-payment-details.html'
})
export class OrderPaymentDetailsComponent {
  /**
   * Order payment details configuration data
   * 
   * @description
   * Required input property that defines the payment information
   * to be displayed. Contains payment method details including
   * card type, number, and logo.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {OrderPaymentDetailsData}
   * 
   * @example
   * ```typescript
   * data: OrderPaymentDetailsData = {
   *   title: 'Payment Method',
   *   cardType: 'Mastercard',
   *   cardNumber: '**** **** **** 5678',
   *   cardLogo: '/assets/img/cards/mastercard.png'
   * };
   * ```
   */
  @Input() data!: OrderPaymentDetailsData;
} 