import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing an invoice
 * Defines the structure for business invoice information
 */
export interface Invoice {
  /** Unique identifier for the invoice */
  id: number;
  /** Invoice issue date (string format) */
  date: string;
  /** Unique invoice number */
  number: string;
  /** Total invoice amount */
  amount: number;
}

/**
 * Interface defining data for the invoices list component
 * Structures the data and widget configurations
 */
export interface InvoicesListData {
  /** Invoices widget title */
  title: string;
  /** Text for the view all invoices button */
  viewAllButton: string;
  /** Text for the PDF download button */
  pdfButtonText: string;
  /** Array of invoices to display */
  invoices: Invoice[];
}

/**
 * Invoices List Component
 * 
 * Component that displays a list of invoices with basic information
 * and options to view details or download in PDF format.
 * 
 * Features:
 * - List of invoices with essential information
 * - Issue dates and invoice numbers
 * - Amounts with currency formatting
 * - Button to view all invoices
 * - PDF download options
 * - Clean and professional design
 * 
 * Business Functionalities:
 * - Invoice history management
 * - Quick access to financial information
 * - Official document downloads
 * - Navigation between invoices
 * 
 * Visual:
 * - Organized list with clear information
 * - Consistent date and amount formatting
 * - Clearly identified action buttons
 * - Responsive design for different devices
 * 
 * Usage:
 * ```html
 * <app-invoices-list [data]="invoicesData"></app-invoices-list>
 * ```
 * 
 * Data example:
 * ```typescript
 * const invoicesData: InvoicesListData = {
 *   title: 'Invoices',
 *   viewAllButton: 'View All',
 *   pdfButtonText: 'PDF',
 *   invoices: [
 *     {
 *       id: 1,
 *       date: 'March, 01, 2020',
 *       number: '#MS-415646',
 *       amount: 180
 *     },
 *     {
 *       id: 2,
 *       date: 'February, 10, 2021',
 *       number: '#RV-126749',
 *       amount: 250
 *     }
 *   ]
 * };
 * ```
 * 
 * Functionalities:
 * - Optimized rendering with trackBy
 * - Support for multiple date formats
 * - Ready for integration with invoicing systems
 * - Direct access to PDF documents
 * 
 * Use Cases:
 * - Administrative dashboards
 * - Customer portals
 * - Business management systems
 * - Accounting applications
 * 
 * Dependencies:
 * - Angular Common Module for directives
 * - Tailwind CSS for styling
 * - Font Awesome for icons
 */
@Component({
  selector: 'app-invoices-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoices-list.html'
})
export class InvoicesListComponent {
  /** Invoice configuration and list data */
  @Input() data!: InvoicesListData;

  /**
   * Track by function for optimizing ngFor rendering
   * Uses invoice ID for efficient DOM updates
   * @param index - Current index in the array
   * @param item - Current invoice
   * @returns Unique identifier for the invoice
   */
  trackByInvoice(index: number, item: Invoice): number {
    return item.id;
  }
} 