import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';

// Interfaces imported from components (following prompt standard)
import { InvoiceDetailsData } from '../components/sections/invoice-details/invoice-details';
import { SettingsTabsData } from '../components/forms/settings-tabs/settings-tabs';

/**
 * InvoiceDataService
 * 
 * Service that provides mock data for the Invoice page.
 * This service manages invoice-related data including invoice details,
 * company information, billing information, and settings configuration.
 * 
 * The service provides data for:
 * - Invoice details with line items and totals
 * - Company information and branding
 * - Customer billing information
 * - Settings tabs configuration
 * - Navigation components (sidebar, navbar)
 * 
 * This service is part of the billing and invoicing module.
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({
  providedIn: 'root'
})
export class InvoiceDataService {
  
  /**
   * Creates an instance of InvoiceDataService.
   * 
   * @param sidebarDataService - Service for managing sidebar data
   */
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar data using the existing sidebar service.
   * 
   * @returns Observable<SidebarData> - Observable containing the sidebar configuration
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves navbar data specifically configured for the Invoice page.
   * 
   * @returns Observable<NavbarData> - Observable containing navbar configuration with breadcrumbs,
   *          search placeholder, and notifications
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Invoice',
      breadcrumbSection: 'Account',
      searchPlaceholder: 'Type here...',
      signInText: 'Sign In',
      signInIcon: 'fa fa-user',
      configIcon: 'fa fa-cog',
      bellIcon: 'fa fa-bell',
      notifications: [
        { 
          avatarUrl: './assets/img/team-2.jpg', 
          title: '<span class="font-semibold">New message</span> from Laur',
          description: '',
          time: '13 minutes ago' 
        },
        { 
          avatarUrl: './assets/img/small-logos/logo-spotify.svg', 
          title: '<span class="font-semibold">New album</span> by Travis Scott',
          description: '',
          time: '1 day' 
        },
        {
          title: 'Payment successfully completed',
          description: '',
          time: '2 days'
        }
      ]
    });
  }

  /**
   * Retrieves settings tabs data for displaying configuration options.
   * 
   * @returns Observable<SettingsTabsData> - Observable containing settings tabs configuration
   *          with tab names and active states
   */
  getSettingsTabsData(): Observable<SettingsTabsData> {
    return of({
      tabs: [
        { id: 'messages', text: 'Messages', isActive: true },
        { id: 'social', text: 'Social', isActive: false },
        { id: 'notifications', text: 'Notifications', isActive: false },
        { id: 'backup', text: 'Backup', isActive: false }
      ]
    });
  }

  /**
   * Retrieves invoice data for displaying complete invoice information.
   * 
   * @returns Observable<InvoiceDetailsData> - Observable containing invoice data
   *          with company info, billing details, line items, and totals
   */
  getInvoiceData(): Observable<InvoiceDetailsData> {
    return of({
      companyInfo: {
        logo: 'assets/img/logo-ct-dark.png',
        logoDark: 'assets/img/logo-ct.png',
        address: 'St. Independence Embankment, 050105 Bucharest, Romania',
        phone: '+4 (074) 1090873'
      },
      billingInfo: {
        customerName: 'John Doe',
        address: [
          '4006 Locust View Drive',
          'San Francisco CA',
          'California'
        ]
      },
      invoiceDetails: {
        number: '#0453119',
        invoiceDate: '06/03/2019',
        dueDate: '11/03/2019'
      },
      items: [
        {
          id: 1,
          item: 'Premium Support',
          qty: 1,
          rate: 9.00,
          amount: 9.00
        },
        {
          id: 2,
          item: 'Soft UI Design System PRO',
          qty: 3,
          rate: 100.00,
          amount: 300.00
        },
        {
          id: 3,
          item: 'Parts for service',
          qty: 1,
          rate: 89.00,
          amount: 89.00
        }
      ],
      total: 698.00,
      contactInfo: {
        email: 'support@creative-tim.com'
      }
    });
  }
} 