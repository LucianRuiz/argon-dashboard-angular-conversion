import { Injectable } from '@angular/core';
import { SecondaryNavbarData, NavbarMenuItem, NavbarDropdownSection, NavbarDropdownItem } from '../components/layout/secondary-navbar/secondary-navbar';

/**
 * SecondaryNavbarDataService
 * 
 * Provides configuration and mock data for the application's secondary navbar navigation.
 * This service supplies the complete structure, menu items, dropdowns, and sections for the
 * secondary navbar, supporting different layouts and modules throughout the application.
 * The service is designed for demo and UI prototyping purposes, simulating backend responses
 * for comprehensive navbar navigation functionality.
 * 
 * The service manages:
 * - Complete navbar structure with logo and branding
 * - Multi-level dropdown menus with sections and items
 * - Navigation routes for all application modules
 * - Buy now button configuration
 * - Menu item states (expanded, active, etc.)
 * 
 * @example
 * ```typescript
 * constructor(private navbarDataService: SecondaryNavbarDataService) {}
 * 
 * ngOnInit() {
 *   const navbarData = this.navbarDataService.getDefaultNavbar();
 *   this.navbarConfig = navbarData;
 * }
 * ```
 */
@Injectable({ providedIn: 'root' })
export class SecondaryNavbarDataService {
  /**
   * Base navbar configuration containing all menu items, dropdowns, and navigation structure.
   * This private property stores the complete navbar data structure that can be customized
   * and returned by service methods.
   */
  private baseNavbarData: SecondaryNavbarData = {
    logoText: 'Argon Dashboard 2 PRO',
    logoRoute: '/dashboard/default',
    menuItems: [
      {
        title: 'Pages',
        hasDropdown: true,
        isExpanded: false,
        isActive: false,
        dropdownSections: [
          {
            title: 'Dashboards',
            icon: 'ni ni-spaceship',
            items: [
              { title: 'Default', route: '/dashboard/default' },
              { title: 'Automotive', route: '/dashboard/automotive' },
              { title: 'Smart Home', route: '/dashboard/smart-home' },
              { title: 'Virtual Reality', route: '/dashboard/virtual-reality/vr-default' },
              { title: 'CRM', route: '/dashboard/crm' }
            ]
          },
          {
            title: 'Users',
            icon: 'ni ni-building',
            items: [
              { title: 'Reports', route: '/pages/users/reports' },
              { title: 'New User', route: '/pages/users/new-user' }
            ]
          },
          {
            title: 'Profile',
            icon: 'ni ni-shop',
            items: [
              { title: 'Overview', route: '/pages/profile/overview' },
              { title: 'Teams', route: '/pages/profile/teams' },
              { title: 'Projects', route: '/pages/profile/projects' }
            ]
          },
          {
            title: 'Projects',
            icon: 'ni ni-box-2',
            items: [
              { title: 'General', route: '/pages/projects/general' },
              { title: 'Timeline', route: '/pages/projects/timeline' },
              { title: 'New Project', route: '/pages/projects/new-project' }
            ]
          },
          {
            title: 'Account',
            icon: 'ni ni-single-02',
            items: [
              { title: 'Settings', route: '/pages/account/settings' },
              { title: 'Billing', route: '/pages/account/billing' },
              { title: 'Invoice', route: '/pages/account/invoice' },
              { title: 'Security', route: '/pages/account/security' }
            ]
          },
          {
            title: 'Extra',
            icon: 'ni ni-folder-17',
            items: [
              { title: 'Pricing Page', route: '/pages/pricing' },
              { title: 'Messages', route: '/pages/chat' },
              { title: 'Widgets', route: '/pages/widgets' }
            ]
          }
        ]
      },
      {
        title: 'Authentication',
        hasDropdown: true,
        isExpanded: false,
        isActive: false,
        dropdownSections: [
          {
            title: 'Sign In',
            icon: 'ni ni-single-02',
            items: [
              { title: 'Basic', route: '/pages/authentication/signin/basic' },
              { title: 'Cover', route: '/pages/authentication/signin/cover' },
              { title: 'Illustration', route: '/pages/authentication/signin/illustration' }
            ]
          },
          {
            title: 'Sign Up',
            icon: 'ni ni-single-02',
            items: [
              { title: 'Basic', route: '/pages/authentication/signup/basic' },
              { title: 'Cover', route: '/pages/authentication/signup/cover' },
              { title: 'Illustration', route: '/pages/authentication/signup/illustration' }
            ]
          },
          {
            title: 'Reset Password',
            icon: 'ni ni-single-02',
            items: [
              { title: 'Basic', route: '/pages/authentication/reset/basic' },
              { title: 'Cover', route: '/pages/authentication/reset/cover' },
              { title: 'Illustration', route: '/pages/authentication/reset/illustration' }
            ]
          },
          {
            title: 'Lock',
            icon: 'ni ni-single-02',
            items: [
              { title: 'Basic', route: '/pages/authentication/lock/basic' },
              { title: 'Cover', route: '/pages/authentication/lock/cover' },
              { title: 'Illustration', route: '/pages/authentication/lock/illustration' }
            ]
          },
          {
            title: '2-Step Verification',
            icon: 'ni ni-single-02',
            items: [
              { title: 'Basic', route: '/pages/authentication/verification/basic' },
              { title: 'Cover', route: '/pages/authentication/verification/cover' },
              { title: 'Illustration', route: '/pages/authentication/verification/illustration' }
            ]
          },
          {
            title: 'Error',
            icon: 'ni ni-single-02',
            items: [
              { title: '404', route: '/pages/authentication/error/404' },
              { title: '500', route: '/pages/authentication/error/500' }
            ]
          }
        ]
      },
      {
        title: 'Applications',
        hasDropdown: true,
        isExpanded: false,
        isActive: false,
        dropdownSections: [
          {
            title: 'Kanban',
            icon: 'ni ni-single-copy-04',
            items: [
              { title: 'Kanban', route: '/applications/kanban' }
            ]
          },
          {
            title: 'Wizard',
            icon: 'ni ni-laptop',
            items: [
              { title: 'Wizard', route: '/applications/wizard' }
            ]
          },
          {
            title: 'DataTables',
            icon: 'ni ni-badge',
            items: [
              { title: 'DataTables', route: '/applications/datatables' }
            ]
          },
          {
            title: 'Calendar',
            icon: 'ni ni-notification-70',
            items: [
              { title: 'Calendar', route: '/applications/calendar' }
            ]
          }
        ]
      },
      {
        title: 'Ecommerce',
        hasDropdown: true,
        isExpanded: false,
        isActive: false,
        dropdownSections: [
          {
            title: 'Orders',
            icon: 'ni ni-cart',
            items: [
              { title: 'Order List', route: '/ecommerce/orders/order-list' },
              { title: 'Order Details', route: '/ecommerce/orders/details' }
            ]
          },
          {
            title: 'General',
            icon: 'ni ni-box-2',
            items: [
              { title: 'Overview', route: '/ecommerce/overview' },
              { title: 'Referral', route: '/ecommerce/referral' }
            ]
          },
          {
            title: 'Products',
            icon: 'ni ni-planet',
            items: [
              { title: 'New Product', route: '/ecommerce/products/new-product' },
              { title: 'Edit Product', route: '/ecommerce/products/edit-product' },
              { title: 'Product Page', route: '/ecommerce/products/product-page' },
              { title: 'Products List', route: '/ecommerce/products/products-list' }
            ]
          }
        ]
      },
      {
        title: 'Docs',
        hasDropdown: true,
        isExpanded: false,
        isActive: false,
        dropdownSections: [
          {
            title: 'Getting Started',
            icon: 'ni ni-planet',
            description: 'All about overview, quick start, license and contents',
            items: [
              { title: 'Getting Started', route: 'https://www.creative-tim.com/learning-lab/tailwind/html/what-is-tailwind-css/argon-dashboard/' }
            ]
          },
          {
            title: 'Foundation',
            icon: 'ni ni-single-copy-04',
            description: 'See our colors, icons and typography',
            items: [
              { title: 'Foundation', route: 'https://www.creative-tim.com/learning-lab/tailwind/html/colors/argon-dashboard/' }
            ]
          },
          {
            title: 'Components',
            icon: 'ni ni-app',
            description: 'Explore our collection of fully designed components',
            items: [
              { title: 'Components', route: 'https://www.creative-tim.com/learning-lab/tailwind/html/alert/argon-dashboard/' }
            ]
          },
          {
            title: 'Plugins',
            icon: 'ni ni-chart-bar-32',
            description: 'Check how you can integrate our plugins',
            items: [
              { title: 'Plugins', route: 'https://www.creative-tim.com/learning-lab/tailwind/html/charts/argon-dashboard/' }
            ]
          }
        ]
      }
    ],
    buyNowText: 'Buy Now',
    buyNowUrl: 'https://www.creative-tim.com/product/argon-dashboard-pro-tailwind'
  };

  /**
   * Retrieves the default navbar configuration with complete menu structure.
   * 
   * Returns a copy of the base navbar data containing:
   * - Logo configuration with text and default route
   * - Complete menu structure with dropdowns and sections
   * - Navigation items for all application modules (Pages, Authentication, Applications, Ecommerce, Docs)
   * - Buy now button configuration
   * - Menu item states and icons
   * 
   * The returned data includes:
   * - 5 main menu categories with dropdown sections
   * - Authentication pages (Sign In, Sign Up, Reset Password, Lock, 2-Step Verification, Error)
   * - Application modules (Kanban, Wizard, DataTables, Calendar)
   * - Ecommerce functionality (Orders, Products, General)
   * - Documentation links with descriptions
   * 
   * @returns SecondaryNavbarData - Complete navbar configuration with all menu items and structure
   * 
   * @example
   * ```typescript
   * const navbarData = this.navbarDataService.getDefaultNavbar();
   * // navbarData contains complete menu structure with:
   * // - Logo: 'Argon Dashboard 2 PRO' -> '/dashboard/default'
   * // - Pages dropdown with Dashboards, Users, Profile, Projects, Account, Extra
   * // - Authentication dropdown with all auth pages
   * // - Applications dropdown with Kanban, Wizard, DataTables, Calendar
   * // - Ecommerce dropdown with Orders, Products, General
   * // - Docs dropdown with external documentation links
   * ```
   */
  getDefaultNavbar(): SecondaryNavbarData {
    return { ...this.baseNavbarData };
  }
} 