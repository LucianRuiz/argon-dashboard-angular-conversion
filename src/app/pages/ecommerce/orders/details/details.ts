import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';

// Import layout components
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { SidebarComponent } from '../../../../components/layout/sidebar/sidebar';
import { NavbarComponent } from '../../../../components/layout/navbar/navbar';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';

// Import order details specific widgets
import { OrderHeaderComponent, OrderHeaderData } from '../../../../components/headers/order-header/order-header';
import { ProductInfoComponent, ProductInfoData } from '../../../../components/forms/product-info/product-info';
import { TrackingTimelineComponent, TrackingTimelineData } from '../../../../components/widgets/tracking-timeline/tracking-timeline';
import { OrderSummaryComponent, OrderSummaryData } from '../../../../components/sections/order-summary/order-summary';
import { OrderPaymentDetailsComponent, OrderPaymentDetailsData } from '../../../../components/sections/order-payment-details/order-payment-details';
import { OrderBillingInfoComponent, OrderBillingInfoData } from '../../../../components/sections/order-billing-info/order-billing-info';

// Import service
import { OrderDetailsService } from '../../../../services/order-details.service';

// Import interfaces
import { SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { NavbarData } from '../../../../components/layout/navbar/navbar';

/**
 * Order Details Component
 * 
 * This component implements the detailed order view page for the ecommerce system.
 * It provides a comprehensive interface for viewing complete order information,
 * including order header, product details, tracking timeline, payment information,
 * billing details, and order summary in a complete dashboard layout.
 * 
 * Features:
 * - Complete order information display with header and summary
 * - Product details with specifications and quantities
 * - Real-time tracking timeline with order status updates
 * - Payment details and transaction information
 * - Billing and shipping information management
 * - Order summary with totals and calculations
 * - Sidebar navigation for easy access to other sections
 * - Navbar with search and filtering capabilities
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Perfect scrollbar for smooth navigation
 * - Order data management through dedicated service
 * 
 * The component serves as a comprehensive order detail interface, providing
 * administrators, customer service representatives, and customers with complete
 * visibility into order status, tracking information, payment details, and
 * all related order information in an organized and user-friendly layout.
 * 
 * @example
 * ```html
 * <app-order-details></app-order-details>
 * ```
 */
@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [
    CommonModule,
    PerfectScrollbarDirective,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    ArgonConfiguratorComponent,
    OrderHeaderComponent,
    ProductInfoComponent,
    TrackingTimelineComponent,
    OrderSummaryComponent,
    OrderPaymentDetailsComponent,
    OrderBillingInfoComponent
  ],
  templateUrl: './details.html'
})
export class OrderDetailsComponent {
  /** Observable for sidebar configuration data */
  public sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  public navbarData$: Observable<NavbarData>;
  
  /** Observable for order header data */
  public orderHeaderData$: Observable<OrderHeaderData>;
  
  /** Observable for product information data */
  public productInfoData$: Observable<ProductInfoData>;
  
  /** Observable for tracking timeline data */
  public trackingTimelineData$: Observable<TrackingTimelineData>;
  
  /** Observable for order payment details data */
  public orderPaymentDetailsData$: Observable<OrderPaymentDetailsData>;
  
  /** Observable for order billing information data */
  public orderBillingInfoData$: Observable<OrderBillingInfoData>;
  
  /** Observable for order summary data */
  public orderSummaryData$: Observable<OrderSummaryData>;
  
  /**
   * Creates an instance of OrderDetailsComponent.
   * 
   * Initializes the component by subscribing to data streams from OrderDetailsService
   * for sidebar, navbar, and all order detail sections including header, product info,
   * tracking timeline, payment details, billing info, and order summary.
   * 
   * @param orderDetailsService - Service for managing order details data and configurations
   */
  constructor(private orderDetailsService: OrderDetailsService) {
    this.sidebarData$ = this.orderDetailsService.getSidebarData();
    this.navbarData$ = this.orderDetailsService.getNavbarData();
    this.orderHeaderData$ = this.orderDetailsService.getOrderHeaderData();
    this.productInfoData$ = this.orderDetailsService.getProductInfoData();
    this.trackingTimelineData$ = this.orderDetailsService.getTrackingTimelineData();
    this.orderPaymentDetailsData$ = this.orderDetailsService.getOrderPaymentDetailsData();
    this.orderBillingInfoData$ = this.orderDetailsService.getOrderBillingInfoData();
    this.orderSummaryData$ = this.orderDetailsService.getOrderSummaryData();
  }
} 
