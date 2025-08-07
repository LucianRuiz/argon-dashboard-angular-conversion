import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * PRODUCTS TABLE COMPONENT
 * ========================================
 *
 * A table component for displaying product information with inventory
 * management capabilities and selection functionality.
 *
 * FEATURES:
 * - Product data display with images and details
 * - Inventory status tracking (in stock/out of stock)
 * - Product selection functionality
 * - Performance optimization with trackBy
 * - Responsive design with Tailwind CSS
 * - SKU and quantity management
 *
 * USAGE:
 * <app-products-table [products]="productsList"></app-products-table>
 *
 * REUSABILITY: High - Generic product management table
 * COMPLEXITY: Low - Simple product data display
 */

/**
 * Interface representing product data structure.
 *
 * @property {number} id - Unique product identifier
 * @property {string} name - Product name
 * @property {string} category - Product category
 * @property {string} price - Formatted price string
 * @property {string} sku - Stock Keeping Unit
 * @property {number} quantity - Available quantity
 * @property {'in Stock' | 'Out of Stock'} status - Inventory status
 * @property {string} image - Product image URL
 * @property {boolean} [isSelected] - Whether the product is selected
 *
 * @example
 * const product: Product = {
 *   id: 1,
 *   name: 'Wireless Headphones',
 *   category: 'Electronics',
 *   price: '$99.99',
 *   sku: 'WH-001',
 *   quantity: 50,
 *   status: 'in Stock',
 *   image: '/assets/images/headphones.jpg',
 *   isSelected: false
 * };
 */
export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  sku: string;
  quantity: number;
  status: 'in Stock' | 'Out of Stock';
  image: string;
  isSelected?: boolean;
}

/**
 * Products Table Component
 *
 * A standalone component for displaying product information in a table format
 * with inventory management and selection capabilities.
 *
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Performance optimization with trackBy function
 * - Responsive design with Tailwind CSS
 * - Minimal dependencies (only CommonModule)
 *
 * REUSABILITY FEATURES:
 * - Configurable product data input
 * - Flexible product display options
 * - Selection state management
 * - No hardcoded values
 * - Easily extendable for additional features
 *
 * USE CASES:
 * - E-commerce product catalogs
 * - Inventory management systems
 * - Product selection interfaces
 * - Stock level monitoring
 * - Product analytics displays
 *
 * INTEGRATION EXAMPLE:
 *
 * ```typescript
 * // In parent component
 * products: Product[] = [];
 *
 * ngOnInit() {
 *   this.loadProducts();
 * }
 *
 * loadProducts() {
 *   this.productService.getProducts().subscribe(data => {
 *     this.products = data;
 *   });
 * }
 * ```
 */
@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.html',
  standalone: true,
  imports: [CommonModule]
})
export class ProductsTableComponent {
  /**
   * Array of products to display in the table.
   * @type {Product[]}
   * @required
   */
  @Input() products!: Product[];
  
  /**
   * TrackBy function for ngFor to optimize rendering performance.
   * Uses product ID as unique identifier for efficient DOM updates.
   * @param index - Current index in the array
   * @param product - Current product object
   * @returns {number} Product ID or index as unique identifier
   */
  trackByProduct(index: number, product: Product): number {
    return product.id || index;
  }
} 