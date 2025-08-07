import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from './sidebar-data.service';
import { SettingsTabsData } from '../components/forms/settings-tabs/settings-tabs';
import { CreditCardVisualData } from '../components/cards/credit-card-visual/credit-card-visual';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';
import { BillingInformationData } from '../components/sections/billing-information/billing-information';
import { InvoicesListData} from '../components/lists/invoices-list/invoices-list';
import { BillingTransactionsData } from '../components/sections/billing-transactions/billing-transactions';
import { PaymentMethodsData } from '../components/lists/payment-methods/payment-methods';
import { CreditCardsData} from '../components/cards/credit-cards/credit-cards';
import { SummaryCardsData } from '../components/cards/summary-cards/summary-cards';

/**
 * BillingDataService
 * 
 * Service that provides mock data for the billing and payment management system.
 * This service manages all billing-related data including invoices, transactions,
 * payment methods, credit cards, and billing information.
 * 
 * The service provides data for:
 * - Billing information and company details
 * - Invoice management and history
 * - Transaction tracking and categorization
 * - Payment method management
 * - Credit card information and security
 * - Financial summary and statistics
 * - Navigation components (sidebar, navbar)
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({
  providedIn: 'root'
})
export class BillingDataService {
  
  /**
   * Creates an instance of BillingDataService.
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
   * Retrieves navbar data specifically configured for the Billing page.
   * 
   * @returns Observable<NavbarData> - Observable containing navbar configuration with breadcrumbs,
   *          search placeholder, and notifications
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Billing',
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
   * Retrieves billing information data for displaying company and contact details.
   * 
   * @returns Observable<BillingInformationData> - Observable containing billing information
   *          with company names, contact details, and VAT numbers
   */
  getBillingInformationData(): Observable<BillingInformationData> {
    return of({
      billingInfo: [
        {
          id: 1,
          name: 'Oliver Liam',
          companyName: 'Viking Burrito',
          emailAddress: 'oliver@burrito.com',
          vatNumber: 'FRB1235476'
        },
        {
          id: 2,
          name: 'Lucas Harper',
          companyName: 'Stone Tech Zone',
          emailAddress: 'lucas@stone-tech.com',
          vatNumber: 'FRB1235476'
        },
        {
          id: 3,
          name: 'Ethan James',
          companyName: 'Fiber Notion',
          emailAddress: 'ethan@fiber.com',
          vatNumber: 'FRB1235476'
        }
      ]
    });
  }

  /**
   * Retrieves invoices list data for displaying invoice history and management.
   * 
   * @returns Observable<InvoicesListData> - Observable containing invoice list with
   *          dates, numbers, amounts, and action buttons
   */
  getInvoicesListData(): Observable<InvoicesListData> {
    return of({
      title: 'Invoices',
      viewAllButton: 'View All',
      pdfButtonText: 'PDF',
      invoices: [
        {
          id: 1,
          date: 'March, 01, 2020',
          number: '#MS-415646',
          amount: 180
        },
        {
          id: 2,
          date: 'February, 10, 2021',
          number: '#RV-126749',
          amount: 250
        },
        {
          id: 3,
          date: 'April, 05, 2020',
          number: '#FB-212562',
          amount: 560
        },
        {
          id: 4,
          date: 'June, 25, 2019',
          number: '#QW-103578',
          amount: 120
        },
        {
          id: 5,
          date: 'March, 01, 2019',
          number: '#AR-803481',
          amount: 300
        }
      ]
    });
  }

  /**
   * Retrieves billing transactions data for displaying financial transaction history.
   * 
   * @returns Observable<BillingTransactionsData> - Observable containing transaction data
   *          organized by date sections with transaction types and amounts
   */
  getBillingTransactionsData(): Observable<BillingTransactionsData> {
    return of({
      title: 'Your Transactions',
      period: '23 - 30 March 2020',
      sections: {
        newest: {
          title: 'Newest',
          transactions: [
            {
              id: 1,
              type: 'expense',
              company: 'Netflix',
              date: '27 March 2020, at 12:30 PM',
              amount: '- $ 2,500',
              amountColor: 'from-red-600 to-orange-600'
            },
            {
              id: 2,
              type: 'income',
              company: 'Apple',
              date: '27 March 2020, at 04:30 AM',
              amount: '+ $ 2,000',
              amountColor: 'from-emerald-500 to-teal-400'
            }
          ]
        },
        yesterday: {
          title: 'Yesterday',
          transactions: [
            {
              id: 3,
              type: 'income',
              company: 'Stripe',
              date: '26 March 2020, at 13:45 PM',
              amount: '+ $ 750',
              amountColor: 'from-emerald-500 to-teal-400'
            },
            {
              id: 4,
              type: 'income',
              company: 'HubSpot',
              date: '26 March 2020, at 12:30 PM',
              amount: '+ $ 1,000',
              amountColor: 'from-emerald-500 to-teal-400'
            },
            {
              id: 5,
              type: 'income',
              company: 'Creative Tim',
              date: '26 March 2020, at 08:30 AM',
              amount: '+ $ 2,500',
              amountColor: 'from-emerald-500 to-teal-400'
            },
            {
              id: 6,
              type: 'pending',
              company: 'Webflow',
              date: '26 March 2020, at 05:00 AM',
              amount: 'Pending',
              amountColor: ''
            }
          ]
        }
      }
    });
  }

  /**
   * Retrieves payment methods data for displaying available payment options.
   * 
   * @returns Observable<PaymentMethodsData> - Observable containing payment method list
   *          with card brands, last digits, and expiry dates
   */
  getPaymentMethodsData(): Observable<PaymentMethodsData> {
    return of({
      title: 'Payment Method',
      addNewCardButton: 'Add New Card',
      editCardTooltip: 'Edit Card',
      methods: [
        {
          id: 1,
          brand: 'Mastercard',
          number: '7852',
          holder: 'Jack Peterson',
          expiry: '11/22',
          icon: '../../../../assets/img/logos/mastercard.png'
        },
        {
          id: 2,
          brand: 'Visa',
          number: '5248',
          holder: 'Jack Peterson',
          expiry: '11/22',
          icon: '../../../../assets/img/logos/visa.png'
        }
      ]
    });
  }

  /**
   * Retrieves credit cards data for displaying card management interface.
   * 
   * @returns Observable<CreditCardsData> - Observable containing credit card information
   *          with card details, status, and management options
   */
  getCreditCardsData(): Observable<CreditCardsData> {
    return of({
      cards: [
        {
          id: 1,
          brand: 'Visa',
          number: '4589',
          holder: 'John Michael',
          expiry: '06/2026',
          bgClass: 'bg-gradient-to-tl from-blue-600 to-cyan-400',
          icon: './assets/img/small-logos/logo-visa.svg'
        },
        {
          id: 2,
          brand: 'Mastercard',
          number: '5541',
          holder: 'John Michael',
          expiry: '06/2026',
          bgClass: 'bg-gradient-to-tl from-orange-500 to-pink-500',
          icon: './assets/img/small-logos/logo-mastercard.svg'
        }
      ]
    });
  }

  /**
   * Retrieves summary cards data for displaying financial overview and statistics.
   * 
   * @returns Observable<SummaryCardsData> - Observable containing summary cards with
   *          financial metrics, icons, and descriptions
   */
  getSummaryCardsData(): Observable<SummaryCardsData> {
    return of({
      cards: [
        {
          id: 1,
          title: 'Salary',
          amount: '+$2000',
          icon: 'fas fa-landmark',
          bgClass: 'bg-gradient-to-tl from-blue-500 to-violet-500',
          description: 'Belong Interactive'
        },
        {
          id: 2,
          title: 'Paypal',
          amount: '$455.00',
          icon: 'fab fa-paypal',
          bgClass: 'bg-gradient-to-tl from-blue-500 to-violet-500',
          description: 'Freelance Payment'
        }
      ]
    });
  }

  /**
   * Retrieves settings tabs data for displaying billing configuration options.
   * 
   * @returns Observable<SettingsTabsData> - Observable containing settings tabs configuration
   *          with tab names, icons, and content sections
   */
  getSettingsTabsData(): Observable<SettingsTabsData> {
    return of({
      tabs: [
        {
          id: 'messages',
          text: 'Messages',
          isActive: true
        },
        {
          id: 'social',
          text: 'Social',
          isActive: false
        },
        {
          id: 'notifications',
          text: 'Notifications',
          isActive: false
        },
        {
          id: 'backup',
          text: 'Backup',
          isActive: false
        }
      ]
    });
  }

  /**
   * Retrieves credit card visual data for displaying card information in visual format.
   * 
   * @returns Observable<CreditCardVisualData> - Observable containing credit card visual
   *          with card number, holder name, expiry date, and card styling
   */
  getCreditCardVisualData(): Observable<CreditCardVisualData> {
    return of({
      cardNumber: '4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852',
      cardHolder: 'Jack Peterson',
      expires: '11/22',
      backgroundImage: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/card-visa.jpg',
      logoUrl: '../../../../assets/img/logos/mastercard.png',
      logoAlt: 'Mastercard logo'
    });
  }
} 