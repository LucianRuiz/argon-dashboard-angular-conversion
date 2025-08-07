import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';
import { InvoiceDataService } from '../../../../services/invoice-data.service';
import { SidebarComponent, SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';
import { NavbarComponent, NavbarData } from '../../../../components/layout/navbar/navbar';
import { InvoiceDetailsComponent, InvoiceDetailsData } from '../../../../components/sections/invoice-details/invoice-details';
import { SettingsTabsComponent, SettingsTabsData } from '../../../../components/forms/settings-tabs/settings-tabs';

/**
 * Account Invoice Component
 * 
 * This component implements the account invoice management page for the application.
 * It provides a comprehensive interface for viewing and managing user invoices,
 * including invoice details, billing information, payment history, and invoice
 * settings in a complete dashboard layout with specialized invoice widgets.
 * 
 * Features:
 * - Invoice details widget with comprehensive billing information
 * - Settings tabs for organized invoice management options
 * - Invoice history and payment tracking
 * - Billing address and payment method management
 * - Invoice download and printing capabilities
 * - Payment status and due date tracking
 * - Sidebar navigation for easy access to other sections
 * - Navbar with search and filtering capabilities
 * - Footer with additional navigation options
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Perfect scrollbar for smooth navigation
 * - Invoice data management through dedicated service
 * - Real-time invoice status updates
 * 
 * The component serves as a comprehensive invoice management interface, providing
 * users with complete visibility into their billing information, payment history,
 * and invoice management capabilities in an organized and user-friendly layout
 * focused on financial transparency and management.
 * 
 * @example
 * ```html
 * <app-account-invoice></app-account-invoice>
 * ```
 */
@Component({
  selector: 'app-account-invoice',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    PerfectScrollbarDirective,
    ArgonConfiguratorComponent,
    InvoiceDetailsComponent,
    SettingsTabsComponent
  ],
  templateUrl: './invoice.html'
})
export class AccountInvoiceComponent {
  /** Observable for sidebar configuration data */
  public sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  public navbarData$: Observable<NavbarData>;
  
  /** Observable for invoice details data */
  public invoiceData$: Observable<InvoiceDetailsData>;
  
  /** Observable for settings tabs data */
  public settingsTabsData$: Observable<SettingsTabsData>;

  /**
   * Creates an instance of AccountInvoiceComponent.
   * 
   * Initializes the component by subscribing to data streams from InvoiceDataService
   * for sidebar configuration, navbar configuration, invoice details, and settings
   * tabs data.
   * 
   * @param invoiceDataService - Service for managing account invoice data and configurations
   */
  constructor(private invoiceDataService: InvoiceDataService) {
    this.sidebarData$ = this.invoiceDataService.getSidebarData();
    this.navbarData$ = this.invoiceDataService.getNavbarData();
    this.invoiceData$ = this.invoiceDataService.getInvoiceData();
    this.settingsTabsData$ = this.invoiceDataService.getSettingsTabsData();
  }
} 
