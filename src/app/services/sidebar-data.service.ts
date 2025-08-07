import { Injectable } from '@angular/core';
import { SidebarData } from '../components/layout/sidebar/sidebar';

/**
 * SidebarDataService
 *
 * This Angular service provides configuration and mock data for the application's sidebar navigation.
 * It supplies the structure, sections, and items for the sidebar, supporting different layouts and modules.
 * The service is intended for demo and UI prototyping purposes, simulating backend responses for sidebar navigation.
 * 
 * The service manages:
 * - Navigation structure with hierarchical menu items
 * - Logo and branding configuration
 * - Section organization (Dashboards, Pages, Applications, Ecommerce, Authentication)
 * - Footer visibility settings
 * - Icon and color theming
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({ providedIn: 'root' })
export class SidebarDataService {
  
  /**
   * Base sidebar configuration containing the complete navigation structure.
   * This includes all sections, items, and their hierarchical relationships.
   */
  private baseSidebarData: SidebarData = {
    logoUrl: './assets/img/logo-ct-dark.png',
    logoAltUrl: './assets/img/logo-ct.png',
    logoText: 'Argon Dashboard 2 PRO',
    showFooter: true,
    sections: [
      // Section without items
      {
        title: 'Empty section',
        icon: 'ni ni-circle-08',
        iconColor: 'text-pink-500',
        isExpanded: false,
        items: [],
        route: '/empty-section'
      },
      // Example of individual item
      {
        title: 'Home',
        icon: 'ni ni-world',
        iconColor: 'text-green-500',
        isExpanded: false,
        items: [
          { title: 'Home', route: '/home', miniText: 'H', icon: 'ni ni-world' }
        ]
      },
      // Example of section with dropdown
      {
        title: 'Example with Child',
        icon: 'ni ni-folder-17',
        iconColor: 'text-purple-500',
        isExpanded: false,
        items: [
          {
            title: 'Parent',
            miniText: 'P',
            icon: 'ni ni-folder-17',
            children: [
              { title: 'Child', route: '/example/child', miniText: 'C', icon: 'ni ni-single-02' }
            ]
          }
        ]
      },
      {
        title: 'Dashboards',
        icon: 'ni ni-shop',
        iconColor: 'text-blue-500',
        isExpanded: true,
        items: [
          { title: 'Landing', route: '/dashboard/landing', miniText: 'L', icon: '' },
          { title: 'Default', route: '/dashboard/default', miniText: 'D', icon: '' },
          { title: 'Automotive', route: '/dashboard/automotive', miniText: 'A', icon: '' },
          { title: 'Smart Home', route: '/dashboard/smart-home', miniText: 'S', icon: '' },
          { 
            title: 'Virtual Reality', 
            miniText: 'V', 
            icon: '',
            children: [
              { title: 'VR Default', route: '/dashboard/virtual-reality/vr-default', miniText: 'V', icon: '' },
              { title: 'VR Info', route: '/dashboard/virtual-reality/vr-info', miniText: 'V', icon: '' }
            ]
          },
          { title: 'CRM', route: '/dashboard/crm', miniText: 'C', icon: '' }
        ]
      },
      {
        title: 'Pages',
        showHeader: true,
        headerTitle: 'PAGES',
        icon: 'ni ni-ungroup',
        iconColor: 'text-orange-500',
        isExpanded: false,
        items: [
          { 
            title: 'Profile', 
            miniText: 'P', 
            icon: '',
            children: [
              { title: 'Profile Overview', route: '/pages/profile/overview', miniText: 'P', icon: '' },
              { title: 'Teams', route: '/pages/profile/teams', miniText: 'T', icon: '' },
              { title: 'All Projects', route: '/pages/profile/projects', miniText: 'A', icon: '' }
            ]
          },
          { 
            title: 'Users', 
            miniText: 'U', 
            icon: '',
            children: [
              { title: 'Reports', route: '/pages/users/reports', miniText: 'R', icon: '' },
              { title: 'New User', route: '/pages/users/new-user', miniText: 'N', icon: '' }
            ]
          },
          { 
            title: 'Account', 
            miniText: 'A', 
            icon: '',
            children: [
              { title: 'Settings', route: '/pages/account/settings', miniText: 'S', icon: '' },
              { title: 'Billing', route: '/pages/account/billing', miniText: 'B', icon: '' },
              { title: 'Invoice', route: '/pages/account/invoice', miniText: 'I', icon: '' },
              { title: 'Security', route: '/pages/account/security', miniText: 'S', icon: '' }
            ]
          },
          { 
            title: 'Projects', 
            miniText: 'P', 
            icon: '',
            children: [
              { title: 'General', route: '/pages/projects/general', miniText: 'G', icon: '' },
              { title: 'Timeline', route: '/pages/projects/timeline', miniText: 'T', icon: '' },
              { title: 'New Project', route: '/pages/projects/new-project', miniText: 'N', icon: '' }
            ]
          },
          { title: 'Pricing Page', route: '/pages/pricing', miniText: 'P', icon: '' },
          { title: 'Messages', route: '/pages/chat', miniText: 'C', icon: '' },
          { title: 'Widgets', route: '/pages/widgets', miniText: 'W', icon: '' },
          { title: 'Charts', route: '/pages/charts', miniText: 'C', icon: '' },
          { title: 'Sweet Alerts', route: '/pages/sweet-alerts', miniText: 'S', icon: '' },
          { title: 'Notifications', route: '/pages/notifications', miniText: 'N', icon: '' },
        ]
      },
      {
        title: 'Applications',
        icon: 'ni ni-ui-04',
        iconColor: 'text-cyan-500',
        isExpanded: false,
        items: [
          { title: 'Kanban', route: '/applications/kanban', miniText: 'K', icon: '' },
          { title: 'Wizard', route: '/applications/wizard', miniText: 'W', icon: '' },
          { title: 'DataTables', route: '/applications/datatables', miniText: 'D', icon: '' },
          { title: 'Calendar', route: '/applications/calendar', miniText: 'C', icon: '' },
          { title: 'Analytics', route: '/applications/analytics', miniText: 'A', icon: '' }
        ]
      },
      {
        title: 'Ecommerce',
        icon: 'ni ni-archive-2',
        iconColor: 'text-emerald-500',
        isExpanded: false,
        items: [
          { title: 'Overview', route: '/ecommerce/overview', miniText: 'O', icon: '' },
          { 
            title: 'Products', 
            miniText: 'P', 
            icon: '',
            children: [
              { title: 'New Product', route: '/ecommerce/products/new-product', miniText: 'N', icon: '' },
              { title: 'Edit Product', route: '/ecommerce/products/edit-product', miniText: 'E', icon: '' },
              { title: 'Product Page', route: '/ecommerce/products/product-page', miniText: 'P', icon: '' },
              { title: 'Products List', route: '/ecommerce/products/products-list', miniText: 'P', icon: '' }
            ]
          },
          { 
            title: 'Orders', 
            miniText: 'O', 
            icon: '',
            children: [
              { title: 'Order List', route: '/ecommerce/orders/order-list', miniText: 'L', icon: '' },
              { title: 'Order Details', route: '/ecommerce/orders/details', miniText: 'D', icon: '' }
            ]
          },
          { title: 'Referral', route: '/ecommerce/referral', miniText: 'R', icon: '' }
        ]
      },
      {
        title: 'Authentication',
        icon: 'ni ni-single-copy-04',
        iconColor: 'text-red-600',
        isExpanded: false,
        items: [
          { 
            title: 'Sign In', 
            miniText: 'S', 
            icon: '',
            children: [
              { title: 'Basic', route: '/pages/authentication/signin/basic', miniText: 'B', icon: '' },
              { title: 'Cover', route: '/pages/authentication/signin/cover', miniText: 'C', icon: '' },
              { title: 'Illustration', route: '/pages/authentication/signin/illustration', miniText: 'I', icon: '' }
            ]
          },
          { 
            title: 'Sign Up', 
            miniText: 'S', 
            icon: '',
            children: [
              { title: 'Basic', route: '/pages/authentication/signup/basic', miniText: 'B', icon: '' },
              { title: 'Cover', route: '/pages/authentication/signup/cover', miniText: 'C', icon: '' },
              { title: 'Illustration', route: '/pages/authentication/signup/illustration', miniText: 'I', icon: '' }
            ]
          },
          { 
            title: 'Reset Password', 
            miniText: 'R', 
            icon: '',
            children: [
              { title: 'Basic', route: '/pages/authentication/reset/basic', miniText: 'B', icon: '' },
              { title: 'Cover', route: '/pages/authentication/reset/cover', miniText: 'C', icon: '' },
              { title: 'Illustration', route: '/pages/authentication/reset/illustration', miniText: 'I', icon: '' }
            ]
          },
          { 
            title: 'Lock', 
            miniText: 'L', 
            icon: '',
            children: [
              { title: 'Basic', route: '/pages/authentication/lock/basic', miniText: 'B', icon: '' },
              { title: 'Cover', route: '/pages/authentication/lock/cover', miniText: 'C', icon: '' },
              { title: 'Illustration', route: '/pages/authentication/lock/illustration', miniText: 'I', icon: '' }
            ]
          },
          { 
            title: '2-Step Verification', 
            miniText: 'V', 
            icon: '',
            children: [
              { title: 'Basic', route: '/pages/authentication/verification/basic', miniText: 'B', icon: '' },
              { title: 'Cover', route: '/pages/authentication/verification/cover', miniText: 'C', icon: '' },
              { title: 'Illustration', route: '/pages/authentication/verification/illustration', miniText: 'I', icon: '' }
            ]
          },
          { title: 'Error 404', route: '/pages/authentication/error/404', miniText: 'E', icon: '' },
          { title: 'Error 500', route: '/pages/authentication/error/500', miniText: 'E', icon: '' }
        ]
      },
      // --- DOCS HEADER ---
     
      {
        title: 'Basic',
        showHeader: true,
        headerTitle: 'DOCS',
        icon: 'ni ni-spaceship',
        iconColor: 'text-slate-500',
        isExpanded: false,
        items: [
          {
            title: 'Getting Started',
            miniText: 'G',
            icon: '',
            isExpanded: false,
            children: [
              {
                title: 'Quick Start',
                miniText: 'Q',
                icon: '',
                route: 'https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/'
              },
              {
                title: 'License',
                miniText: 'L',
                icon: '',
                route: 'https://www.creative-tim.com/learning-lab/tailwind/html/license/argon-dashboard/'
              },
              {
                title: 'Contents',
                miniText: 'C',
                icon: '',
                route: 'https://www.creative-tim.com/learning-lab/tailwind/html/what-is-tailwind-css/argon-dashboard/'
              }
            ]
          },
          {
            title: 'Foundation',
            miniText: 'F',
            icon: '',
            isExpanded: false,
            children: [
              {
                title: 'Colors',
                miniText: 'C',
                icon: '',
                route: 'https://www.creative-tim.com/learning-lab/tailwind/html/colors/argon-dashboard/'
              },
              {
                title: 'Typography',
                miniText: 'T',
                icon: '',
                route: 'https://www.creative-tim.com/learning-lab/tailwind/html/typography/argon-dashboard/'
              }
            ]
          }
        ]
      },
      // --- COMPONENTS ---
      {
        title: 'Components',
        icon: 'ni ni-app',
        iconColor: 'text-slate-500',
        isExpanded: false,
        items: [
          {
            title: 'Alerts',
            miniText: 'A',
            icon: '',
            route: 'https://www.creative-tim.com/learning-lab/tailwind/html/alert/argon-dashboard/'
          },
          {
            title: 'Badge',
            miniText: 'B',
            icon: '',
            route: 'https://www.creative-tim.com/learning-lab/tailwind/html/chip/argon-dashboard/'
          },
          {
            title: 'Buttons',
            miniText: 'B',
            icon: '',
            route: 'https://www.creative-tim.com/learning-lab/tailwind/html/button/argon-dashboard/'
          },
          {
            title: 'Card',
            miniText: 'C',
            icon: '',
            route: 'https://www.creative-tim.com/learning-lab/tailwind/html/card/argon-dashboard/'
          },
          {
            title: 'Collapse',
            miniText: 'C',
            icon: '',
            route: 'https://www.creative-tim.com/learning-lab/tailwind/html/collapse/argon-dashboard/'
          },
          {
            title: 'Dropdowns',
            miniText: 'D',
            icon: '',
            route: 'https://www.creative-tim.com/learning-lab/tailwind/html/dropdown/argon-dashboard/'
          },
          {
            title: 'Forms',
            miniText: 'F',
            icon: '',
            route: 'https://www.creative-tim.com/learning-lab/tailwind/html/input/argon-dashboard/'
          },
          {
            title: 'Modal',
            miniText: 'M',
            icon: '',
            route: 'https://www.creative-tim.com/learning-lab/tailwind/html/modal/argon-dashboard/'
          },
          {
            title: 'Navs',
            miniText: 'N',
            icon: '',
            route: 'https://www.creative-tim.com/learning-lab/tailwind/html/tabs/argon-dashboard/'
          },
          {
            title: 'Navbar',
            miniText: 'N',
            icon: '',
            route: 'https://www.creative-tim.com/learning-lab/tailwind/html/navbar/argon-dashboard/'
          },
          {
            title: 'Progress',
            miniText: 'P',
            icon: '',
            route: 'https://www.creative-tim.com/learning-lab/tailwind/html/progress/argon-dashboard/'
          },
          {
            title: 'Tables',
            miniText: 'T',
            icon: '',
            route: 'https://www.creative-tim.com/learning-lab/tailwind/html/table/argon-dashboard/'
          },
          {
            title: 'Tooltips',
            miniText: 'T',
            icon: '',
            route: 'https://www.creative-tim.com/learning-lab/tailwind/html/tooltip/argon-dashboard/'
          }
        ]
      },
      // --- CHANGELOG ---
      {
        title: 'Changelog',
        icon: 'ni ni-align-left-2',
        iconColor: 'text-slate-500',
        isExpanded: false,
        items: []
      }
    ],
    footer: {
      enabled: true,
      image: './assets/img/illustrations/icon-documentation.svg',
      imageAlt: 'sidebar footer image',
      title: 'Need help?',
      description: 'Please check our docs',
      buttonText: 'Documentation',
      buttonUrl: 'https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/',
      buttonTarget: '_blank',
      buttonClasses: 'inline-block w-full px-8 py-2 mb-4 text-xs font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 hover:shadow-xs hover:-translate-y-px'
    }
  };

  /**
   * Retrieves the default sidebar configuration with footer enabled.
   * 
   * @returns SidebarData - Complete sidebar configuration with all sections and items
   */
  getDefaultSidebar(): SidebarData {
    return this.baseSidebarData;
  }

  /**
   * Retrieves sidebar configuration without footer for specific layouts.
   * 
   * @returns SidebarData - Sidebar configuration with footer disabled
   */
  getSidebarWithoutFooter(): SidebarData {
    return { ...this.baseSidebarData, showFooter: false };
  }
} 
