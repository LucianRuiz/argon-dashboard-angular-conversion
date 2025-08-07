import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';

// Import layout components
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { SidebarComponent } from '../../../../components/layout/sidebar/sidebar';
import { NavbarComponent } from '../../../../components/layout/navbar/navbar';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';

// Import widgets
import { BillingInformationComponent, BillingInformationData } from '../../../../components/sections/billing-information/billing-information';
import { InvoicesListComponent, InvoicesListData } from '../../../../components/lists/invoices-list/invoices-list';
import { BillingTransactionsComponent, BillingTransactionsData } from '../../../../components/sections/billing-transactions/billing-transactions';
import { PaymentMethodsComponent, PaymentMethodsData } from '../../../../components/lists/payment-methods/payment-methods';

import { SummaryCardsComponent, SummaryCardsData } from '../../../../components/cards/summary-cards/summary-cards';
import { SettingsTabsComponent, SettingsTabsData } from '../../../../components/forms/settings-tabs/settings-tabs';
import { CreditCardVisualComponent, CreditCardVisualData } from '../../../../components/cards/credit-card-visual/credit-card-visual';

// Import service
import { BillingDataService } from '../../../../services/billing-data.service';

// Import interfaces
import { SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { NavbarData } from '../../../../components/layout/navbar/navbar';

/**
 * Billing Component
 * 
 * This component implements the comprehensive billing management page for the application.
 * It provides a complete interface for managing user billing information, payment methods,
 * transaction history, invoices, and billing settings in a complete dashboard layout
 * with specialized billing and financial widgets.
 * 
 * Features:
 * - Billing information widget for address and contact management
 * - Invoices list widget with payment history and status
 * - Billing transactions widget for detailed transaction tracking
 * - Payment methods widget for credit card and payment management
 * - Summary cards widget for billing overview and statistics
 * - Settings tabs for organized billing configuration options
 * - Credit card visual widget for payment method display
 * - Sidebar navigation for easy access to other sections
 * - Navbar with search and filtering capabilities
 * - Footer with additional navigation options
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Perfect scrollbar for smooth navigation
 * - Billing data management through dedicated service
 * - Real-time billing status and transaction updates
 * 
 * The component serves as a comprehensive billing management interface, providing
 * users with complete control over their billing information, payment methods,
 * transaction history, and billing preferences in an organized and user-friendly
 * layout focused on financial management and transparency.
 * 
 * @example
 * ```html
 * <app-billing></app-billing>
 * ```
 */
@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [
    CommonModule,
    PerfectScrollbarDirective,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    ArgonConfiguratorComponent,
    BillingInformationComponent,
    InvoicesListComponent,
    BillingTransactionsComponent,
    PaymentMethodsComponent,

    SummaryCardsComponent,
    SettingsTabsComponent,
    CreditCardVisualComponent
  ],
  templateUrl: './billing.html'
})
export class BillingComponent {

  /** Observable for sidebar configuration data */
  public sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  public navbarData$: Observable<NavbarData>;
  
  /** Observable for billing information data */
  public billingInformationData$: Observable<BillingInformationData>;
  
  /** Observable for invoices list data */
  public invoicesListData$: Observable<InvoicesListData>;
  
  /** Observable for billing transactions data */
  public billingTransactionsData$: Observable<BillingTransactionsData>;
  
  /** Observable for payment methods data */
  public paymentMethodsData$: Observable<PaymentMethodsData>;

  /** Observable for summary cards data */
  public summaryCardsData$: Observable<SummaryCardsData>;
  
  /** Observable for settings tabs data */
  public settingsTabsData$: Observable<SettingsTabsData>;
  
  /** Observable for credit card visual data */
  public creditCardVisualData$: Observable<CreditCardVisualData>;
  
  /**
   * Creates an instance of BillingComponent.
   * 
   * Initializes the component by subscribing to data streams from BillingDataService
   * for sidebar, navbar, and all billing-related sections including billing information,
   * invoices, transactions, payment methods, summary cards, settings tabs, and credit
   * card visual data.
   * 
   * @param billingDataService - Service for managing billing data and financial configurations
   */
  constructor(private billingDataService: BillingDataService) {
    this.sidebarData$ = this.billingDataService.getSidebarData();
    this.navbarData$ = this.billingDataService.getNavbarData();
    this.billingInformationData$ = this.billingDataService.getBillingInformationData();
    this.invoicesListData$ = this.billingDataService.getInvoicesListData();
    this.billingTransactionsData$ = this.billingDataService.getBillingTransactionsData();
    this.paymentMethodsData$ = this.billingDataService.getPaymentMethodsData();

    this.summaryCardsData$ = this.billingDataService.getSummaryCardsData();
    this.settingsTabsData$ = this.billingDataService.getSettingsTabsData();
    this.creditCardVisualData$ = this.billingDataService.getCreditCardVisualData();
  }
} 
