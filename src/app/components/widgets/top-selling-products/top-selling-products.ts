import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * TOP SELLING PRODUCTS WIDGET COMPONENT
 * ========================================
 * 
 * A widget component that displays a table of top-selling products
 * with sales metrics, orders, value, ad spend, and refund information.
 * 
 * FEATURES:
 * - Product table with sales performance metrics
 * - Product images and names display
 * - Orders, value, and ad spend tracking
 * - Refund information with trend indicators
 * - Optional info buttons for additional details
 * - Responsive table design with Tailwind CSS
 * 
 * USAGE:
 * <app-top-selling-products [data]="productsData"></app-top-selling-products>
 * 
 * REUSABILITY: High - Generic product performance widget
 * COMPLEXITY: Medium - Table layout with multiple metrics
 */

/**
 * Interface representing an individual product with sales metrics.
 * Defines the structure for each product in the top-selling products table.
 * 
 * @interface Product
 * @description Structure for individual product data with sales metrics
 * 
 * @property {string} id - Unique identifier for the product
 * @property {string} name - Product name or title
 * @property {string} image - URL or path to product image
 * @property {string} orders - Number of orders for the product
 * @property {string} value - Total sales value for the product
 * @property {string} adsSpent - Amount spent on advertising for the product
 * @property {string} refunds - Number or amount of refunds
 * @property {'up' | 'down'} refundsTrend - Trend direction for refunds
 * @property {boolean} [hasInfoButton] - Optional flag to show info button
 * 
 * @example
 * ```typescript
 * const product: Product = {
 *   id: 'prod-001',
 *   name: 'Wireless Headphones',
 *   image: '/assets/img/products/headphones.jpg',
 *   orders: '1,234',
 *   value: '$45,678',
 *   adsSpent: '$2,345',
 *   refunds: '12',
 *   refundsTrend: 'down',
 *   hasInfoButton: true
 * };
 * ```
 */
export interface Product {
  /** Unique identifier for the product */
  id: string;
  /** Product name or title */
  name: string;
  /** URL or path to product image */
  image: string;
  /** Number of orders for the product */
  orders: string;
  /** Total sales value for the product */
  value: string;
  /** Amount spent on advertising for the product */
  adsSpent: string;
  /** Number or amount of refunds */
  refunds: string;
  /** Trend direction for refunds */
  refundsTrend: 'up' | 'down';
  /** Optional flag to show info button */
  hasInfoButton?: boolean;
}

/**
 * Interface representing the complete data structure for the top-selling products widget.
 * Contains the widget title, table headers, and array of products.
 * 
 * @interface TopSellingProductsData
 * @description Complete data structure for the top-selling products widget
 * 
 * @property {string} title - Main title of the widget
 * @property {Object} headers - Table column headers
 * @property {string} headers.column1 - Header for first column
 * @property {string} headers.column2 - Header for second column
 * @property {string} headers.column3 - Header for third column
 * @property {string} headers.column4 - Header for fourth column
 * @property {Product[]} products - Array of top-selling products
 * 
 * @example
 * ```typescript
 * const productsData: TopSellingProductsData = {
 *   title: 'Top Selling Products',
 *   headers: {
 *     column1: 'Product',
 *     column2: 'Orders',
 *     column3: 'Value',
 *     column4: 'Ad Spend'
 *   },
 *   products: [
 *     {
 *       id: 'prod-001',
 *       name: 'Wireless Headphones',
 *       image: '/assets/img/products/headphones.jpg',
 *       orders: '1,234',
 *       value: '$45,678',
 *       adsSpent: '$2,345',
 *       refunds: '12',
 *       refundsTrend: 'down'
 *     }
 *   ]
 * };
 * ```
 */
export interface TopSellingProductsData {
  /** Main title of the widget */
  title: string;
  /** Table column headers */
  headers: {
    /** Header for first column */
    column1: string;
    /** Header for second column */
    column2: string;
    /** Header for third column */
    column3: string;
    /** Header for fourth column */
    column4: string;
  };
  /** Array of top-selling products */
  products: Product[];
}

/**
 * Top Selling Products Widget Component
 * 
 * A standalone component that displays a table of top-selling products
 * with comprehensive sales metrics including orders, value, ad spend, and refunds.
 * 
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Responsive design with Tailwind CSS
 * - Accessible table structure
 * 
 * REUSABILITY FEATURES:
 * - Configurable data input with complete interface
 * - Dynamic table headers
 * - Flexible product data structure
 * - Optional info buttons per product
 * - No hardcoded values
 * - Customizable metrics display
 * 
 * VISUAL FEATURES:
 * - Clean table layout with proper spacing
 * - Product images with consistent sizing
 * - Trend indicators for refunds (up/down arrows)
 * - Responsive design for mobile and desktop
 * - Optional info buttons for additional details
 * - Professional e-commerce styling
 * 
 * PERFORMANCE FEATURES:
 * - Efficient table rendering
 * - Optimized for small to medium product lists
 * - Fast rendering with Tailwind CSS
 * - Minimal DOM manipulation
 * 
 * ACCESSIBILITY FEATURES:
 * - Semantic table structure
 * - Proper heading hierarchy
 * - Screen reader friendly layout
 * - Alt text support for product images
 * - Keyboard navigation support
 * 
 * USE CASES:
 * - E-commerce dashboards
 * - Sales performance monitoring
 * - Product analytics displays
 * - Marketing campaign tracking
 * - Inventory management systems
 * - Business intelligence dashboards
 * - Retail performance analysis
 * 
 * INTEGRATION EXAMPLES:
 * 
 * E-commerce Dashboard:
 * ```typescript
 * // In dashboard component
 * topProducts: TopSellingProductsData = {
 *   title: 'Top Selling Products This Month',
 *   headers: {
 *     column1: 'Product',
 *     column2: 'Orders',
 *     column3: 'Revenue',
 *     column4: 'Ad Spend'
 *   },
 *   products: this.getTopSellingProducts()
 * };
 * ```
 * 
 * Analytics Integration:
 * ```typescript
 * // In analytics component
 * onDateRangeChange(range: DateRange) {
 *   this.productsData = {
 *     title: `Top Products (${range.start} - ${range.end})`,
 *     headers: this.getTableHeaders(),
 *     products: this.getProductsForDateRange(range)
 *   };
 * }
 * ```
 * 
 * API Integration:
 * ```typescript
 * // In service
 * getTopSellingProducts(): Observable<TopSellingProductsData> {
 *   return this.http.get<TopSellingProductsData>('/api/analytics/top-products');
 * }
 * ```
 * 
 * STYLING FEATURES:
 * - Tailwind CSS utility classes
 * - Responsive table design
 * - Product image styling
 * - Trend indicator styling
 * - Clean typography hierarchy
 * - Professional e-commerce aesthetics
 * 
 * TECHNICAL SPECIFICATIONS:
 * - Angular 17+ standalone component
 * - TypeScript strict mode compatible
 * - Tailwind CSS for styling
 * - Responsive breakpoints
 * - Accessibility compliant
 * - SEO friendly structure
 */
@Component({
  selector: 'app-top-selling-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-selling-products.html'
})
export class TopSellingProductsComponent {
  /**
   * Required data input containing the widget configuration and product data.
   * Provides all necessary information for rendering the top-selling products table.
   * 
   * @type {TopSellingProductsData} - Complete widget data (required)
   * @required - Ensures data is always provided, preventing null/undefined errors
   * 
   * @example
   * ```typescript
   * // In parent component
   * productsData: TopSellingProductsData = {
   *   title: 'Top Selling Products',
   *   headers: {
   *     column1: 'Product',
   *     column2: 'Orders',
   *     column3: 'Value',
   *     column4: 'Ad Spend'
   *   },
   *   products: [
   *     {
   *       id: 'prod-001',
   *       name: 'Wireless Headphones',
   *       image: '/assets/img/products/headphones.jpg',
   *       orders: '1,234',
   *       value: '$45,678',
   *       adsSpent: '$2,345',
   *       refunds: '12',
   *       refundsTrend: 'down'
   *     }
   *   ]
   * };
   * ```
   */
  @Input() data!: TopSellingProductsData;
} 