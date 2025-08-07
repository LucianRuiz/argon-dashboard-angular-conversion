import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';
import { SidebarDataService } from './sidebar-data.service';

/**
 * Order interface for order management and display
 */
export interface Order {
  id: string;
  date: string;
  status: 'Paid' | 'Refunded' | 'Canceled';
  customer: {
    name: string;
    image?: string;
    initials?: string;
    gradient?: string;
  };
  product: string;
  revenue: string;
  selected: boolean;
}

/**
 * OrdersService
 * 
 * Provides mock data and configuration for the Order List page. This service supplies
 * comprehensive order management functionality including order listing, selection,
 * filtering, and bulk operations. The service is designed for demo and UI prototyping
 * purposes, simulating backend responses for order management functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the order list page
 * - Navbar data with breadcrumbs and notifications
 * - Complete order list with customer and product information
 * - Order selection and bulk operations
 * - Order status management (Paid, Refunded, Canceled)
 * - Customer information with avatars and gradients
 * 
 * @example
 * ```typescript
 * constructor(private ordersService: OrdersService) {}
 * 
 * ngOnInit() {
 *   this.ordersService.getOrders().subscribe(orders => {
 *     this.orderList = orders;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Private array containing all order data with customer and product information.
   * This property stores the complete order list that can be filtered, selected,
   * and manipulated by service methods.
   */
  private orders: Order[] = [
    {
      id: '#10421',
      date: '1 Nov, 10:20 AM',
      status: 'Paid',
      customer: {
        name: 'Orlando Imieto',
        image: 'assets/img/team-2.jpg'
      },
      product: 'Nike Sport V2',
      revenue: '$140,20',
      selected: false
    },
    {
      id: '#10422',
      date: '1 Nov, 10:53 AM',
      status: 'Paid',
      customer: {
        name: 'Alice Murinho',
        image: 'assets/img/team-1.jpg'
      },
      product: 'Valvet T-shirt',
      revenue: '$42,00',
      selected: false
    },
    {
      id: '#10423',
      date: '1 Nov, 11:13 AM',
      status: 'Refunded',
      customer: {
        name: 'Michael Mirra',
        initials: 'M',
        gradient: 'from-zinc-800 to-zinc-700'
      },
      product: 'Leather Wallet +1 more',
      revenue: '$25,50',
      selected: false
    },
    {
      id: '#10424',
      date: '1 Nov, 12:20 PM',
      status: 'Paid',
      customer: {
        name: 'Andrew Nichel',
        image: 'assets/img/team-3.jpg'
      },
      product: 'Bracelet Onu-Lino',
      revenue: '$19,40',
      selected: false
    },
    {
      id: '#10425',
      date: '1 Nov, 1:40 PM',
      status: 'Canceled',
      customer: {
        name: 'Sebastian Koga',
        image: 'assets/img/team-4.jpg'
      },
      product: 'Phone Case Pink x 2',
      revenue: '$44,90',
      selected: false
    },
    {
      id: '#10426',
      date: '1 Nov, 2:19 AM',
      status: 'Paid',
      customer: {
        name: 'Laur Gilbert',
        initials: 'L',
        gradient: 'from-blue-500 to-violet-500'
      },
      product: 'Backpack Niver',
      revenue: '$112,50',
      selected: false
    },
    {
      id: '#10427',
      date: '1 Nov, 3:42 AM',
      status: 'Paid',
      customer: {
        name: 'Iryna Innda',
        initials: 'I',
        gradient: 'from-zinc-800 to-zinc-700'
      },
      product: 'Adidas Vio',
      revenue: '$200,00',
      selected: false
    },
    {
      id: '#10428',
      date: '2 Nov, 9:32 AM',
      status: 'Paid',
      customer: {
        name: 'Arrias Liunda',
        initials: 'A',
        gradient: 'from-zinc-800 to-zinc-700'
      },
      product: 'Airpods 2 Gen',
      revenue: '$350,00',
      selected: false
    },
    {
      id: '#10429',
      date: '2 Nov, 10:14 AM',
      status: 'Paid',
      customer: {
        name: 'Rugna Ilpio',
        image: 'assets/img/team-5.jpg'
      },
      product: 'Bracelet Warret',
      revenue: '$15,00',
      selected: false
    },
    {
      id: '#10430',
      date: '2 Nov, 12:56 PM',
      status: 'Refunded',
      customer: {
        name: 'Anna Landa',
        image: 'assets/img/ivana-squares.jpg'
      },
      product: 'Watter Bottle India x 3',
      revenue: '$25,00',
      selected: false
    },
    {
      id: '#10431',
      date: '2 Nov, 3:12 PM',
      status: 'Paid',
      customer: {
        name: 'Karl Innas',
        initials: 'K',
        gradient: 'from-zinc-800 to-zinc-700'
      },
      product: 'Kitchen Gadgets',
      revenue: '$164,90',
      selected: false
    },
    {
      id: '#10432',
      date: '2 Nov, 5:12 PM',
      status: 'Paid',
      customer: {
        name: 'Oana Kilas',
        initials: 'O',
        gradient: 'from-blue-700 to-cyan-500'
      },
      product: 'Office Papers',
      revenue: '$23,90',
      selected: false
    }
  ];

  /**
   * Retrieves the complete list of orders with customer and product information.
   * 
   * Returns all orders including:
   * - Order ID, date, and status
   * - Customer information with avatars or initials
   * - Product details and revenue
   * - Selection state for bulk operations
   * 
   * @returns Observable<Order[]> - Complete order list
   * 
   * @example
   * ```typescript
   * this.ordersService.getOrders().subscribe(orders => {
   *   this.orderList = orders;
   *   this.totalRevenue = orders.reduce((sum, order) => 
   *     sum + parseFloat(order.revenue.replace('$', '').replace(',', '')), 0
   *   );
   * });
   * ```
   */
  getOrders(): Observable<Order[]> {
    return of(this.orders);
  }

  /**
   * Toggles the selection state of a specific order by ID.
   * 
   * Updates the selected property of the order with the specified ID.
   * This method is used for individual order selection in the UI.
   * 
   * @param orderId - The ID of the order to toggle selection
   * 
   * @example
   * ```typescript
   * this.ordersService.toggleOrderSelection('#10421');
   * // The order with ID #10421 will have its selected property toggled
   * ```
   */
  toggleOrderSelection(orderId: string): void {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.selected = !order.selected;
    }
  }

  /**
   * Selects all orders in the list for bulk operations.
   * 
   * Sets the selected property to true for all orders in the list.
   * This method is typically used for "Select All" functionality.
   * 
   * @example
   * ```typescript
   * this.ordersService.selectAllOrders();
   * // All orders will now have selected: true
   * ```
   */
  selectAllOrders(): void {
    this.orders.forEach(order => order.selected = true);
  }

  /**
   * Deselects all orders in the list.
   * 
   * Sets the selected property to false for all orders in the list.
   * This method is typically used for "Deselect All" functionality.
   * 
   * @example
   * ```typescript
   * this.ordersService.deselectAllOrders();
   * // All orders will now have selected: false
   * ```
   */
  deselectAllOrders(): void {
    this.orders.forEach(order => order.selected = false);
  }

  /**
   * Retrieves all currently selected orders.
   * 
   * Returns an array containing only the orders that have selected: true.
   * This method is useful for bulk operations on selected orders.
   * 
   * @returns Order[] - Array of selected orders
   * 
   * @example
   * ```typescript
   * const selectedOrders = this.ordersService.getSelectedOrders();
   * console.log(`${selectedOrders.length} orders selected`);
   * ```
   */
  getSelectedOrders(): Order[] {
    return this.orders.filter(order => order.selected);
  }

  /**
   * Retrieves sidebar configuration data for the order list page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the order list interface.
   * 
   * @returns Observable<SidebarData> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.ordersService.getSidebarData().subscribe(sidebarData => {
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
   * this.ordersService.getNavbarData().subscribe(navbarData => {
   *   this.breadcrumb = navbarData.breadcrumbTitle;
   *   this.notifications = navbarData.notifications;
   * });
   * ```
   */
  getNavbarData(): Observable<NavbarData> {
    const navbarData: NavbarData = {
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Order List',
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
          description: '13 minutes ago',
          time: '13 minutes ago'
        },
        {
          avatarUrl: 'assets/img/small-logos/logo-spotify.svg',
          title: 'New album by Travis Scott',
          description: '1 day',
          time: '1 day'
        },
        {
          iconSvg: `<svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>credit-card</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                <g transform="translate(1716.000000, 291.000000)">
                  <g transform="translate(453.000000, 454.000000)">
                    <path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                    <path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>`,
          title: 'Payment successfully completed',
          description: '2 days',
          time: '2 days'
        }
      ]
    };
    return of(navbarData);
  }
} 