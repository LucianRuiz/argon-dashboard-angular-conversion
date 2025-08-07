import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';
import { OrderHeaderData } from '../components/headers/order-header/order-header';
import { ProductInfoData } from '../components/forms/product-info/product-info';
import { TrackingTimelineData } from '../components/widgets/tracking-timeline/tracking-timeline';
import { OrderSummaryData } from '../components/sections/order-summary/order-summary';
import { OrderPaymentDetailsData } from '../components/sections/order-payment-details/order-payment-details';
import { OrderBillingInfoData } from '../components/sections/order-billing-info/order-billing-info';

/**
 * OrderDetailsService
 * 
 * Provides mock data and configuration for the Order Details page. This service supplies
 * comprehensive order information including order header, product details, tracking timeline,
 * payment information, billing details, and order summary. The service is designed for demo
 * and UI prototyping purposes, simulating backend responses for order management functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the order details page
 * - Navbar data with breadcrumbs and notifications
 * - Order header information (order number, date, code)
 * - Product information and delivery status
 * - Tracking timeline with order progress steps
 * - Payment details and billing information
 * - Order summary with pricing breakdown
 * 
 * @example
 * ```typescript
 * constructor(private orderDetailsService: OrderDetailsService) {}
 * 
 * ngOnInit() {
 *   this.orderDetailsService.getOrderHeaderData().subscribe(headerData => {
 *     this.orderHeader = headerData;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar configuration data for the order details page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the order details interface.
   * 
   * @returns Observable<SidebarData> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.orderDetailsService.getSidebarData().subscribe(sidebarData => {
   *   this.sidebarConfig = sidebarData;
   * });
   * ```
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves navbar configuration data with breadcrumbs and notifications.
   * 
   * Returns navbar data including:
   * - Breadcrumb navigation with icon, title, and section
   * - Search functionality configuration
   * - User authentication elements (Sign In, config, bell)
   * - Sample notification list with avatars, titles, and timestamps
   * 
   * @returns Observable<NavbarData> - Navbar configuration with notifications
   * 
   * @example
   * ```typescript
   * this.orderDetailsService.getNavbarData().subscribe(navbarData => {
   *   this.breadcrumb = navbarData.breadcrumbTitle;
   *   this.notifications = navbarData.notifications;
   * });
   * ```
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Order Details',
      breadcrumbSection: 'Pages',
      searchPlaceholder: 'Type here...',
      signInText: 'Sign In',
      signInIcon: 'fa fa-user',
      configIcon: 'fa fa-cog',
      bellIcon: 'fa fa-bell',
      notifications: [
        {
          avatarUrl: 'assets/img/team-2.jpg',
          title: 'New message from Laur',
          description: 'New message',
          time: '13 minutes ago'
        },
        {
          iconSvg: 'assets/img/small-logos/logo-spotify.svg',
          title: 'New album by Travis Scott',
          description: 'New album',
          time: '1 day'
        },
        {
          iconSvg: 'assets/img/small-logos/logo-spotify.svg',
          title: 'Payment successfully completed',
          description: 'Payment completed',
          time: '2 days'
        }
      ]
    });
  }

  /**
   * Retrieves order header information including order number, date, and tracking code.
   * 
   * Returns order header data with:
   * - Order number for identification
   * - Order date for timeline reference
   * - Tracking code for shipment tracking
   * 
   * @returns Observable<OrderHeaderData> - Order header information
   * 
   * @example
   * ```typescript
   * this.orderDetailsService.getOrderHeaderData().subscribe(headerData => {
   *   this.orderNumber = headerData.orderNumber;
   *   this.orderDate = headerData.orderDate;
   *   this.trackingCode = headerData.code;
   * });
   * ```
   */
  getOrderHeaderData(): Observable<OrderHeaderData> {
    return of({
      orderNumber: "241342",
      orderDate: "23.02.2021",
      code: "KF332"
    });
  }

  /**
   * Retrieves product information and delivery status.
   * 
   * Returns product data including:
   * - Product name and image
   * - Delivery status and date information
   * - Product details for order reference
   * 
   * @returns Observable<ProductInfoData> - Product information and status
   * 
   * @example
   * ```typescript
   * this.orderDetailsService.getProductInfoData().subscribe(productData => {
   *   this.productName = productData.name;
   *   this.productImage = productData.image;
   *   this.deliveryStatus = productData.status;
   * });
   * ```
   */
  getProductInfoData(): Observable<ProductInfoData> {
    return of({
      name: "Smart Watch",
      image: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/smartwatch.jpg",
      status: "Delivered",
      deliveryDate: "Order was delivered 2 days ago"
    });
  }

  /**
   * Retrieves tracking timeline data with order progress steps.
   * 
   * Returns timeline data including:
   * - 4 tracking steps with timestamps and icons
   * - Order progress from receipt to delivery
   * - Completion status for each step
   * - Visual timeline representation
   * 
   * @returns Observable<TrackingTimelineData> - Order tracking timeline
   * 
   * @example
   * ```typescript
   * this.orderDetailsService.getTrackingTimelineData().subscribe(timelineData => {
   *   this.trackingSteps = timelineData.steps;
   *   this.timelineTitle = timelineData.title;
   * });
   * ```
   */
  getTrackingTimelineData(): Observable<TrackingTimelineData> {
    return of({
      title: "Track order",
      steps: [
        {
          id: 1,
          title: "Order received",
          time: "22 DEC 7:20 AM",
          icon: "ni ni-bell-55",
          isCompleted: false
        },
        {
          id: 2,
          title: "Generate order id #1832412",
          time: "22 DEC 7:21 AM",
          icon: "ni ni-html5",
          isCompleted: false
        },
        {
          id: 3,
          title: "Order transmited to courier",
          time: "22 DEC 8:10 AM",
          icon: "ni ni-cart",
          isCompleted: false
        },
        {
          id: 4,
          title: "Order delivered",
          time: "22 DEC 4:54 PM",
          icon: "ni ni-check-bold",
          isCompleted: false
        }
      ]
    });
  }

  /**
   * Retrieves payment details including card information and payment method.
   * 
   * Returns payment data including:
   * - Card type and masked card number
   * - Payment method logo
   * - Payment confirmation details
   * 
   * @returns Observable<OrderPaymentDetailsData> - Payment information
   * 
   * @example
   * ```typescript
   * this.orderDetailsService.getOrderPaymentDetailsData().subscribe(paymentData => {
   *   this.cardType = paymentData.cardType;
   *   this.cardNumber = paymentData.cardNumber;
   *   this.cardLogo = paymentData.cardLogo;
   * });
   * ```
   */
  getOrderPaymentDetailsData(): Observable<OrderPaymentDetailsData> {
    return of({
      title: "Payment details",
      cardType: "Mastercard",
      cardNumber: "**** **** **** 7852",
      cardLogo: "../../../assets/img/logos/mastercard.png"
    });
  }

  /**
   * Retrieves billing information for the order.
   * 
   * Returns billing data including:
   * - Customer name and company information
   * - Email address and VAT number
   * - Billing address details
   * 
   * @returns Observable<OrderBillingInfoData> - Billing information
   * 
   * @example
   * ```typescript
   * this.orderDetailsService.getOrderBillingInfoData().subscribe(billingData => {
   *   this.customerName = billingData.name;
   *   this.companyName = billingData.companyName;
   *   this.emailAddress = billingData.emailAddress;
   * });
   * ```
   */
  getOrderBillingInfoData(): Observable<OrderBillingInfoData> {
    return of({
      title: "Billing Information",
      name: "Oliver Liam",
      companyName: "Viking Burrito",
      emailAddress: "oliver@burrito.com",
      vatNumber: "FRB1235476"
    });
  }

  /**
   * Retrieves order summary with pricing breakdown and total.
   * 
   * Returns summary data including:
   * - Individual cost items (product price, delivery, taxes)
   * - Total order amount
   * - Price breakdown for transparency
   * 
   * @returns Observable<OrderSummaryData> - Order summary and pricing
   * 
   * @example
   * ```typescript
   * this.orderDetailsService.getOrderSummaryData().subscribe(summaryData => {
   *   this.orderItems = summaryData.items;
   *   this.totalAmount = summaryData.total;
   * });
   * ```
   */
  getOrderSummaryData(): Observable<OrderSummaryData> {
    return of({
      title: "Order Summary",
      items: [
        {
          label: "Product Price:",
          value: "$90"
        },
        {
          label: "Delivery:",
          value: "$14"
        },
        {
          label: "Taxes:",
          value: "$1.95"
        }
      ],
      total: {
        label: "Total:",
        value: "$105.95"
      }
    });
  }
} 