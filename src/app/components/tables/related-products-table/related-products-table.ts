import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * RELATED PRODUCTS TABLE COMPONENT
 * ========================================
 *
 * A table component for displaying related products with ratings,
 * pricing, and availability information.
 *
 * FEATURES:
 * - Related product display with images and details
 * - Star rating system with half-star support
 * - Product availability indicators
 * - Price and rating information
 * - Responsive design with Tailwind CSS
 *
 * USAGE:
 * <app-related-products-table [products]="relatedProductsList"></app-related-products-table>
 *
 * REUSABILITY: High - Generic related products display
 * COMPLEXITY: Low - Simple product data display with ratings
 */

/**
 * Interface representing related product data structure.
 *
 * @property {string} id - Unique product identifier
 * @property {string} image - Product image URL
 * @property {string} name - Product name
 * @property {string} price - Formatted price string
 * @property {number} rating - Product rating (0-5, can include decimals)
 * @property {boolean} available - Whether the product is available
 *
 * @example
 * const relatedProduct: RelatedProduct = {
 *   id: 'prod-001',
 *   image: '/assets/images/headphones.jpg',
 *   name: 'Wireless Headphones',
 *   price: '$99.99',
 *   rating: 4.5,
 *   available: true
 * };
 */
export interface RelatedProduct {
  id: string;
  image: string;
  name: string;
  price: string;
  rating: number;
  available: boolean;
}

/**
 * Related Products Table Component
 *
 * A standalone component for displaying related products with
 * ratings, pricing, and availability information.
 *
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Star rating calculation system
 * - Responsive design with Tailwind CSS
 * - Minimal dependencies (only CommonModule)
 *
 * REUSABILITY FEATURES:
 * - Configurable product data input
 * - Flexible rating display system
 * - Availability status indicators
 * - No hardcoded values
 * - Easily extendable for additional features
 *
 * USE CASES:
 * - E-commerce product recommendations
 * - Related items displays
 * - Product comparison tables
 * - Cross-selling interfaces
 * - Product catalog enhancements
 *
 * INTEGRATION EXAMPLE:
 *
 * ```typescript
 * // In parent component
 * relatedProducts: RelatedProduct[] = [];
 *
 * ngOnInit() {
 *   this.loadRelatedProducts();
 * }
 *
 * loadRelatedProducts() {
 *   this.productService.getRelatedProducts().subscribe(data => {
 *     this.relatedProducts = data;
 *   });
 * }
 * ```
 */
@Component({
  selector: 'app-related-products-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './related-products-table.html'
})
export class RelatedProductsTableComponent {
  /**
   * Array of related products to display in the table.
   * @type {RelatedProduct[]}
   * @default []
   */
  @Input() products: RelatedProduct[] = [];

  /**
   * Calculates star rating display configuration.
   * Converts numeric rating to full and half star counts.
   * @param rating - Product rating (0-5, can include decimals)
   * @returns {object} Object containing full stars array and half star boolean
   */
  getStars(rating: number): { full: number[]; half: boolean } {
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    return { full: Array(full).fill(0), half };
  }
} 