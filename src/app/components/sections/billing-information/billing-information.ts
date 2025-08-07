import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Billing Info Interface
 * 
 * Defines the structure for individual billing information items.
 * This interface ensures type safety for billing information display.
 * 
 * @description
 * The BillingInfo interface defines the essential properties
 * needed to display and manage individual billing information
 * entries with unique identification.
 * 
 * @interface
 * @since 1.0.0
 */
export interface BillingInfo {
  /** 
   * Unique identifier for the billing information
   * @required - Billing info ID is essential for identification and tracking
   * @example 1, 2, 3, 4
   */
  id: number;
  
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
 * Billing Information Data Interface
 * 
 * Defines the complete structure for billing information configuration.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The BillingInformationData interface defines all properties needed
 * to display a complete billing information section with multiple
 * billing entries.
 * 
 * @interface
 * @since 1.0.0
 */
export interface BillingInformationData {
  /** 
   * Array of billing information items to display
   * @required - Billing info array provides billing entries
   * @example Array of BillingInfo objects
   */
  billingInfo: BillingInfo[];
}

/**
 * Billing Information Component
 * 
 * A component designed to display billing information in a clean,
 * organized format. Shows customer details, company information,
 * and tax identification for multiple billing entries.
 * 
 * @description
 * This component creates a professional billing information display
 * that shows multiple billing entries in a structured manner. It's
 * ideal for billing management pages, customer information displays,
 * and any interface that needs to present multiple billing records.
 * 
 * @features
 * - Multiple billing information display
 * - Customer details presentation
 * - Company information display
 * - Contact information management
 * - Tax identification display
 * - Responsive design
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - Clean, organized layout
 * - Track-by optimization
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with required properties
 * - Performance optimized with trackBy
 * - Memory efficient
 * - Unit test friendly
 * - No external dependencies
 * - Professional presentation
 * 
 * @usecases
 * - Billing management pages
 * - Customer information displays
 * - Invoice management systems
 * - Account billing sections
 * - Tax documentation displays
 * - Business transaction records
 * - Customer relationship management
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-billing-information 
 *   [data]="billingData">
 * </app-billing-information>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { BillingInformationComponent, BillingInformationData } from './billing-information.component';
 * 
 * export class BillingPageComponent {
 *   billingData: BillingInformationData = {
 *     billingInfo: [
 *       {
 *         id: 1,
 *         name: 'John Doe',
 *         companyName: 'Acme Corporation',
 *         emailAddress: 'john.doe@acme.com',
 *         vatNumber: 'VAT123456789'
 *       },
 *       {
 *         id: 2,
 *         name: 'Jane Smith',
 *         companyName: 'Tech Solutions Inc',
 *         emailAddress: 'jane.smith@techsolutions.com',
 *         vatNumber: 'EU987654321'
 *       }
 *     ]
 *   };
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-billing-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './billing-information.html'
})
export class BillingInformationComponent {
  /**
   * Billing information configuration data
   * 
   * @description
   * Required input property that defines the billing information
   * to be displayed. Contains array of billing entries with
   * customer and company details.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {BillingInformationData}
   * 
   * @example
   * ```typescript
   * data: BillingInformationData = {
   *   billingInfo: [
   *     {
   *       id: 1,
   *       name: 'John Doe',
   *       companyName: 'Acme Corporation',
   *       emailAddress: 'john.doe@acme.com',
   *       vatNumber: 'VAT123456789'
   *     }
   *   ]
   * };
   * ```
   */
  @Input() data!: BillingInformationData;

  /**
   * TrackBy function for optimizing list rendering
   * 
   * @description
   * Returns the unique identifier for each billing information item.
   * This function optimizes Angular's change detection by providing
   * a stable reference for list items.
   * 
   * @method
   * @public
   * @param {number} index - The index of the item in the array
   * @param {BillingInfo} item - The billing information item
   * @returns {number} The unique ID of the billing info item
   * 
   * @example
   * ```typescript
   * // Used in template with *ngFor
   * // <div *ngFor="let item of data.billingInfo; trackBy: trackByBillingInfo">
   * 
   * const billingInfoId = this.trackByBillingInfo(0, item);
   * console.log('Billing Info ID:', billingInfoId);
   * ```
   */
  trackByBillingInfo(index: number, item: BillingInfo): number {
    return item.id;
  }
} 