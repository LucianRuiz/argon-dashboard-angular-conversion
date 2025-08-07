import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Order Billing Info Data Interface
 * 
 * Defines the structure for order billing information display data.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The OrderBillingInfoData interface defines the essential properties
 * needed to display billing information for orders including customer
 * details and company information.
 * 
 * @interface
 * @since 1.0.0
 */
export interface OrderBillingInfoData {
  /** 
   * Title for the billing information section
   * @required - Section title provides context
   * @example "Billing Information", "Customer Details", "Invoice Address"
   */
  title: string;
  
  /** 
   * Customer's full name
   * @required - Customer name provides primary identification
   * @example "John Doe", "Jane Smith", "Alex Johnson"
   */
  name: string;
  
  /** 
   * Company name for business customers
   * @required - Company name provides business context
   * @example "Acme Corporation", "Tech Solutions Inc", "Global Enterprises"
   */
  companyName: string;
  
  /** 
   * Customer's email address
   * @required - Email address provides contact information
   * @example "john.doe@example.com", "jane.smith@company.com"
   */
  emailAddress: string;
  
  /** 
   * VAT number for tax purposes
   * @required - VAT number provides tax identification
   * @example "VAT123456789", "EU123456789", "GB123456789"
   */
  vatNumber: string;
}

/**
 * Order Billing Info Component
 * 
 * A component designed to display billing information for orders
 * in a clean, organized format. Shows customer details, company
 * information, and tax identification for billing purposes.
 * 
 * @description
 * This component creates a professional billing information display
 * that shows customer and company details in a structured manner.
 * It's ideal for order confirmation pages, invoice displays, and
 * any interface that needs to present billing information clearly.
 * 
 * @features
 * - Customer information display
 * - Company details presentation
 * - Contact information display
 * - Tax identification display
 * - Responsive design
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - Clean, organized layout
 * - Professional appearance
 * - Structured information display
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with required properties
 * - Performance optimized
 * - Memory efficient
 * - Unit test friendly
 * - No external dependencies
 * - Professional presentation
 * 
 * @usecases
 * - Order confirmation pages
 * - Invoice displays
 * - E-commerce order details
 * - Billing information sections
 * - Customer details displays
 * - Tax documentation
 * - Business transaction records
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-order-billing-info 
 *   [data]="billingData">
 * </app-order-billing-info>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { OrderBillingInfoComponent, OrderBillingInfoData } from './order-billing-info.component';
 * 
 * export class OrderDetailsComponent {
 *   billingData: OrderBillingInfoData = {
 *     title: 'Billing Information',
 *     name: 'John Doe',
 *     companyName: 'Acme Corporation',
 *     emailAddress: 'john.doe@acme.com',
 *     vatNumber: 'VAT123456789'
 *   };
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-order-billing-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-billing-info.html'
})
export class OrderBillingInfoComponent {
  /**
   * Order billing information configuration data
   * 
   * @description
   * Required input property that defines the billing information
   * to be displayed. Contains customer details, company information,
   * and tax identification.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {OrderBillingInfoData}
   * 
   * @example
   * ```typescript
   * data: OrderBillingInfoData = {
   *   title: 'Customer Details',
   *   name: 'Jane Smith',
   *   companyName: 'Tech Solutions Inc',
   *   emailAddress: 'jane.smith@techsolutions.com',
   *   vatNumber: 'EU987654321'
   * };
   * ```
   */
  @Input() data!: OrderBillingInfoData;
} 