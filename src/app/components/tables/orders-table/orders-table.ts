import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Order, OrdersService } from '../../../services/order-list.service';

/**
 * ========================================
 * ORDERS TABLE COMPONENT
 * ========================================
 *
 * A comprehensive table component for managing and displaying orders
 * with selection, filtering, and export capabilities.
 *
 * FEATURES:
 * - Order data display with customer information
 * - Bulk selection and deselection functionality
 * - Status-based styling and icons
 * - CSV export functionality
 * - Customer display with images or initials
 * - Filtering capabilities
 * - Performance optimization with trackBy
 * - Responsive design with Tailwind CSS
 *
 * USAGE:
 * <app-orders-table [data]="ordersList"></app-orders-table>
 *
 * REUSABILITY: High - Generic orders management table
 * COMPLEXITY: Medium - Selection logic and export functionality
 */

/**
 * Orders Table Component
 *
 * A standalone component for displaying and managing orders with
 * advanced features like bulk selection, filtering, and export.
 *
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Service-based order management
 * - Bulk operations support
 * - Export functionality
 * - Status-based visual feedback
 * - Performance optimization with trackBy
 *
 * REUSABILITY FEATURES:
 * - Configurable data input
 * - Flexible customer display options
 * - Customizable status styling
 * - Service integration for order management
 * - No hardcoded dependencies
 *
 * USE CASES:
 * - E-commerce order management
 * - Sales dashboard displays
 * - Customer order tracking
 * - Bulk order operations
 * - Order analytics and reporting
 *
 * INTEGRATION EXAMPLE:
 *
 * ```typescript
 * // In parent component
 * orders: Order[] = [];
 *
 * ngOnInit() {
 *   this.loadOrders();
 * }
 *
 * loadOrders() {
 *   this.orderService.getOrders().subscribe(data => {
 *     this.orders = data;
 *   });
 * }
 * ```
 */
@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orders-table.html'
})
export class OrdersTableComponent {
  /**
   * Array of orders to display in the table.
   * @type {Order[]}
   * @required
   */
  @Input() data!: Order[];
  
  /**
   * Whether all orders are currently selected.
   * @type {boolean}
   * @default false
   */
  allSelected = false;

  constructor(private ordersService: OrdersService) {}

  /**
   * Gets the orders array, returning empty array if data is null.
   * @returns {Order[]} Array of orders
   */
  get orders(): Order[] {
    return this.data || [];
  }

  /**
   * Toggles the selection state of a specific order.
   * Updates the service and checks if all orders are selected.
   * @param orderId - Unique identifier of the order
   */
  toggleOrderSelection(orderId: string): void {
    this.ordersService.toggleOrderSelection(orderId);
    this.updateAllSelected();
  }

  /**
   * Toggles the selection state of all orders.
   * Selects all if none are selected, deselects all if all are selected.
   */
  toggleAllOrders(): void {
    if (this.allSelected) {
      this.ordersService.deselectAllOrders();
    } else {
      this.ordersService.selectAllOrders();
    }
    this.allSelected = !this.allSelected;
  }

  /**
   * Updates the allSelected state based on current selections.
   * Checks if all orders are selected and updates the flag accordingly.
   */
  updateAllSelected(): void {
    const selectedOrders = this.ordersService.getSelectedOrders();
    this.allSelected = selectedOrders.length === this.orders.length && this.orders.length > 0;
  }

  /**
   * Returns Tailwind CSS classes for status button styling.
   * Provides different styles based on order status.
   * @param status - Order status ('Paid', 'Refunded', 'Canceled')
   * @returns {string} CSS classes for the status button
   */
  getStatusButtonClass(status: string): string {
    switch (status) {
      case 'Paid':
        return 'border-emerald-500 bg-transparent text-center align-middle font-bold text-emerald-500 shadow-none transition-all hover:bg-transparent hover:text-emerald-500 hover:opacity-75 hover:shadow-none active:bg-emerald-500 active:text-black hover:active:bg-transparent hover:active:text-emerald-500 hover:active:opacity-75 hover:active:shadow-none mr-2 flex items-center justify-center';
      case 'Refunded':
        return 'border-slate-700 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all hover:bg-transparent hover:text-slate-700 hover:opacity-75 hover:shadow-none active:bg-slate-700 active:text-white hover:active:bg-transparent hover:active:text-slate-700 hover:active:opacity-75 hover:active:shadow-none mb-0 mr-2 flex align-center justify-center';
      case 'Canceled':
        return 'border-red-600 bg-transparent text-center align-middle font-bold text-red-600 shadow-none transition-all hover:bg-transparent hover:text-red-600 hover:opacity-75 hover:shadow-none active:bg-red-600 active:text-white hover:active:bg-transparent hover:active:text-red-600 hover:active:opacity-75 hover:active:shadow-none mb-0 mr-2 flex align-center justify-center';
      default:
        return '';
    }
  }

  /**
   * Returns Font Awesome icon class for order status.
   * Provides appropriate icons for different status types.
   * @param status - Order status ('Paid', 'Refunded', 'Canceled')
   * @returns {string} Font Awesome icon class
   */
  getStatusIcon(status: string): string {
    switch (status) {
      case 'Paid':
        return 'fas fa-check';
      case 'Refunded':
        return 'fas fa-undo';
      case 'Canceled':
        return 'fas fa-times';
      default:
        return '';
    }
  }

  /**
   * Determines how to display customer information.
   * Returns object with display type and value for customer representation.
   * @param customer - Customer object with image, initials, or name
   * @returns {object} Display configuration object
   */
  getCustomerDisplay(customer: any): any {
    if (customer.image) {
      return { type: 'image', value: customer.image };
    } else if (customer.initials) {
      return { type: 'initials', value: customer.initials, gradient: customer.gradient };
    }
    return { type: 'text', value: customer.name };
  }

  /**
   * Exports selected orders to CSV format.
   * Creates and downloads a CSV file with selected order data.
   */
  exportCSV(): void {
    const selectedOrders = this.ordersService.getSelectedOrders();
    if (selectedOrders.length === 0) {
      alert('Please select orders to export');
      return;
    }

    const headers = ['ID', 'Date', 'Status', 'Customer', 'Product', 'Revenue'];
    const csvContent = [
      headers.join(','),
      ...selectedOrders.map(order => [
        order.id,
        order.date,
        order.status,
        order.customer.name,
        order.product,
        order.revenue
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'orders.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  /**
   * Handles new order creation.
   * Placeholder for implementing new order logic.
   */
  newOrder(): void {
    // Implement new order logic
    console.log('New order clicked');
  }

  /**
   * Applies filtering to the orders table.
   * Placeholder for implementing filter logic.
   * @param filter - Filter string or criteria
   */
  applyFilter(filter: string): void {
    // Implement filtering logic
    console.log('Filter applied:', filter);
  }

  /**
   * TrackBy function for ngFor to optimize rendering performance.
   * Uses order ID as unique identifier for efficient DOM updates.
   * @param index - Current index in the array
   * @param order - Current order object
   * @returns {string} Order ID or index as unique identifier
   */
  trackByOrder(index: number, order: Order): string {
    return order.id || index.toString();
  }
} 