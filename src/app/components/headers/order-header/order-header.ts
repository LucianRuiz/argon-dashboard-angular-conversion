import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Order Header Data Interface
 * 
 * Defines the structure for order header configuration data.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The OrderHeaderData interface defines the essential properties
 * needed to display order information in a header format.
 * 
 * @interface
 * @since 1.0.0
 */
export interface OrderHeaderData {
  /** 
   * Order number or identifier
   * @required - Order number is essential for order identification
   * @example "ORD-2024-001", "12345", "INV-2024-03-15"
   */
  orderNumber: string;
  
  /** 
   * Date when the order was placed or created
   * @required - Order date provides temporal context
   * @example "2024-03-15", "March 15, 2024", "15/03/2024"
   */
  orderDate: string;
  
  /** 
   * Order code or reference number
   * @required - Order code provides additional identification
   * @example "ABC123", "REF-001", "CODE-2024-001"
   */
  code: string;
}

/**
 * Order Header Component
 * 
 * A header component designed for order management and e-commerce interfaces.
 * Displays essential order information including order number, date, and code
 * for quick order identification and reference.
 * 
 * @description
 * This component creates a clean header for order-related pages that
 * helps users and administrators quickly identify and reference specific
 * orders. It's ideal for order details pages, order management systems,
 * and e-commerce platforms.
 * 
 * @features
 * - Order number display
 * - Order date information
 * - Order code reference
 * - Clean, professional design
 * - Consistent Argon Dashboard styling
 * - Responsive design
 * - Accessibility compliant
 * - Easy order identification
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with required properties
 * - Performance optimized
 * - No external dependencies
 * - Unit test friendly
 * - Memory efficient
 * 
 * @usecases
 * - Order details pages
 * - E-commerce order management
 * - Invoice headers
 * - Purchase order displays
 * - Order tracking interfaces
 * - Customer order history
 * - Order management dashboards
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-order-header 
 *   [data]="{ 
 *     orderNumber: 'ORD-2024-001', 
 *     orderDate: 'March 15, 2024', 
 *     code: 'ABC123' 
 *   }">
 * </app-order-header>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { OrderHeaderComponent, OrderHeaderData } from './order-header.component';
 * 
 * export class OrderDetailsComponent {
 *   orderHeaderData: OrderHeaderData = {
 *     orderNumber: 'INV-2024-03-15',
 *     orderDate: '2024-03-15',
 *     code: 'REF-001'
 *   };
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-order-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-header.html'
})
export class OrderHeaderComponent {
  /**
   * Order header configuration data
   * 
   * @description
   * Required input property that defines the order's identification
   * information including order number, date, and code. All properties
   * are mandatory for proper order header display.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {OrderHeaderData}
   * 
   * @example
   * ```typescript
   * data: OrderHeaderData = {
   *   orderNumber: 'ORD-2024-001',
   *   orderDate: 'March 15, 2024',
   *   code: 'ABC123'
   * };
   * ```
   */
  @Input() data!: OrderHeaderData;
} 