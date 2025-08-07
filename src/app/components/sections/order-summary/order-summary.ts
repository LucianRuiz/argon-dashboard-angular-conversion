import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * ORDER SUMMARY WIDGET COMPONENT
 * ========================================
 *
 * A widget component for displaying order summary information including
 * individual items and total amounts.
 *
 * FEATURES:
 * - Display of order items with labels and values
 * - Total amount calculation and display
 * - Responsive design with Tailwind CSS
 * - Optimized rendering with trackBy function
 * - Clean, organized layout
 *
 * USAGE:
 * <app-order-summary [data]="orderSummaryData"></app-order-summary>
 *
 * REUSABILITY: High - Generic order summary display
 * COMPLEXITY: Low - Simple data display with optimization
 */

/**
 * Interface representing an individual order summary item.
 *
 * @property {string} label - Item label or description
 * @property {string} value - Item value (usually formatted as currency)
 *
 * @example
 * const item: OrderSummaryItem = {
 *   label: 'Subtotal',
 *   value: '$99.99'
 * };
 */
export interface OrderSummaryItem {
  label: string;
  value: string;
}

/**
 * Interface representing the total amount in the order summary.
 *
 * @property {string} label - Total label (e.g., 'Total', 'Grand Total')
 * @property {string} value - Total value (usually formatted as currency)
 *
 * @example
 * const total: OrderSummaryTotal = {
 *   label: 'Total',
 *   value: '$119.99'
 * };
 */
export interface OrderSummaryTotal {
  label: string;
  value: string;
}

/**
 * Interface representing the complete order summary data structure.
 *
 * @property {string} title - Summary title or heading
 * @property {OrderSummaryItem[]} items - Array of order items
 * @property {OrderSummaryTotal} total - Total amount information
 *
 * @example
 * const orderSummary: OrderSummaryData = {
 *   title: 'Order Summary',
 *   items: [
 *     { label: 'Subtotal', value: '$99.99' },
 *     { label: 'Shipping', value: '$10.00' },
 *     { label: 'Tax', value: '$10.00' }
 *   ],
 *   total: { label: 'Total', value: '$119.99' }
 * };
 */
export interface OrderSummaryData {
  title: string;
  items: OrderSummaryItem[];
  total: OrderSummaryTotal;
}

/**
 * Order Summary Widget Component
 *
 * A standalone component for displaying order summary information
 * with optimized rendering and clean layout.
 *
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Optimized rendering with trackBy function
 * - Responsive design with Tailwind CSS
 * - Minimal dependencies (only CommonModule)
 *
 * REUSABILITY FEATURES:
 * - Configurable data input with complete interface
 * - Dynamic item rendering
 * - No hardcoded values
 * - Flexible styling options
 * - Performance optimized
 *
 * USE CASES:
 * - E-commerce checkout summaries
 * - Order confirmation pages
 * - Shopping cart summaries
 * - Invoice displays
 * - Receipt generation
 *
 * INTEGRATION EXAMPLE:
 *
 * ```typescript
 * // In parent component
 * orderSummaryData: OrderSummaryData = {
 *   title: 'Order Summary',
 *   items: [
 *     { label: 'Subtotal', value: '$99.99' },
 *     { label: 'Shipping', value: '$10.00' }
 *   ],
 *   total: { label: 'Total', value: '$109.99' }
 * };
 * ```
 */
@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.html'
})
export class OrderSummaryComponent {
  /**
   * Order summary data containing title, items, and total information.
   * @type {OrderSummaryData}
   * @required
   */
  @Input() data!: OrderSummaryData;

  /**
   * TrackBy function for ngFor to optimize item rendering performance.
   * Uses index as unique identifier for efficient DOM updates.
   * @param index - Current index in the array
   * @param item - Current order summary item
   * @returns Index as unique identifier
   */
  trackByItem(index: number, item: OrderSummaryItem): number {
    return index;
  }
} 