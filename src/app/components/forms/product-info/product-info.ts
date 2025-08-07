import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Product Info Data Interface
 * 
 * Defines the structure for product information display data.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The ProductInfoData interface defines the essential properties
 * needed to display basic product information including name,
 * image, status, and delivery information.
 * 
 * @interface
 * @since 1.0.0
 */
export interface ProductInfoData {
  /** 
   * Product name or title
   * @required - Product name provides primary identification
   * @example "iPhone 15 Pro", "MacBook Air M2", "iPad Pro"
   */
  name: string;
  
  /** 
   * URL or path to the product image
   * @required - Product image provides visual identification
   * @example "/assets/img/products/iphone15.jpg", "https://example.com/product.png"
   */
  image: string;
  
  /** 
   * Current status of the product
   * @required - Product status provides availability information
   * @example "In Stock", "Out of Stock", "Pre-order", "Discontinued"
   */
  status: string;
  
  /** 
   * Expected delivery date for the product
   * @required - Delivery date provides shipping information
   * @example "2024-03-15", "Next Day Delivery", "2-3 Business Days"
   */
  deliveryDate: string;
}

/**
 * Product Info Component
 * 
 * A component designed to display basic product information in a
 * clean, organized format. Shows product name, image, status, and
 * delivery information for e-commerce and product catalog interfaces.
 * 
 * @description
 * This component creates a professional product information display
 * that shows essential product details in a visually appealing manner.
 * It's ideal for product cards, product detail pages, and any interface
 * that needs to present basic product information.
 * 
 * @features
 * - Product name display
 * - Product image display
 * - Status information
 * - Delivery date information
 * - Responsive design
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - Clean, organized layout
 * - Visual product identification
 * - Status-based styling
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with required properties
 * - Performance optimized
 * - Memory efficient
 * - Unit test friendly
 * - No external dependencies
 * - Image optimization ready
 * 
 * @usecases
 * - E-commerce product cards
 * - Product catalog displays
 * - Product detail pages
 * - Shopping cart items
 * - Order confirmation pages
 * - Product search results
 * - Inventory management interfaces
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-product-info 
 *   [data]="productData">
 * </app-product-info>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { ProductInfoComponent, ProductInfoData } from './product-info.component';
 * 
 * export class ProductCatalogComponent {
 *   productData: ProductInfoData = {
 *     name: 'iPhone 15 Pro',
 *     image: '/assets/img/products/iphone15.jpg',
 *     status: 'In Stock',
 *     deliveryDate: 'Next Day Delivery'
 *   };
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-info.html'
})
export class ProductInfoComponent {
  /**
   * Product information configuration data
   * 
   * @description
   * Required input property that defines the product information
   * to be displayed. Contains name, image, status, and delivery
   * information for the product.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {ProductInfoData}
   * 
   * @example
   * ```typescript
   * data: ProductInfoData = {
   *   name: 'MacBook Air M2',
   *   image: '/assets/img/products/macbook.jpg',
   *   status: 'In Stock',
   *   deliveryDate: '2-3 Business Days'
   * };
   * ```
   */
  @Input() data!: ProductInfoData;
} 