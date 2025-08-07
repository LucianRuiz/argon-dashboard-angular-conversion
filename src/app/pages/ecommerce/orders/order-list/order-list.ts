import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { OrdersService } from '../../../../services/order-list.service';
import { SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { NavbarData } from '../../../../components/layout/navbar/navbar';
import { Order } from '../../../../services/order-list.service';
import { SidebarComponent } from '../../../../components/layout/sidebar/sidebar';
import { NavbarComponent } from '../../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';
import { OrdersTableComponent } from '../../../../components/tables/orders-table/orders-table';

import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';

/**
 * Order List Component
 * 
 * This component implements the orders list page for the ecommerce system.
 * It provides a comprehensive interface for displaying and managing customer
 * orders with a table-based layout that includes order information, status,
 * customer details, and management capabilities for order processing.
 * 
 * Features:
 * - Orders table with comprehensive order information
 * - Order status tracking and management
 * - Customer information and contact details
 * - Order processing and fulfillment tools
 * - Sidebar navigation for easy access to other sections
 * - Navbar with search and filtering capabilities
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Perfect scrollbar for smooth navigation
 * - Order data management through dedicated service
 * 
 * The component serves as the main order management interface, providing
 * administrators and customer service representatives with a complete view
 * of all customer orders, their status, and management options in a clean,
 * organized table format optimized for order processing workflows.
 * 
 * @example
 * ```html
 * <app-order-list></app-order-list>
 * ```
 */
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.html',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    OrdersTableComponent,
    PerfectScrollbarDirective
  ]
})
export class OrderListComponent {
  /** Observable for sidebar configuration data */
  public sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  public navbarData$: Observable<NavbarData>;
  
  /** Observable for orders data */
  public ordersData$: Observable<Order[]>;
  
  /**
   * Creates an instance of OrderListComponent.
   * 
   * Initializes the component by subscribing to data streams from OrdersService
   * for sidebar configuration, navbar configuration, and orders data.
   * 
   * @param ordersService - Service for managing orders data and configurations
   */
  constructor(private ordersService: OrdersService) {
    this.sidebarData$ = this.ordersService.getSidebarData();
    this.navbarData$ = this.ordersService.getNavbarData();
    this.ordersData$ = this.ordersService.getOrders();
  }
} 