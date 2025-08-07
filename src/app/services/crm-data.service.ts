import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';
import { CrmStatsCardData } from '../components/cards/crm-stats-card/crm-stats-card';
import { NewTabCardData } from '../components/cards/new-tab-card/new-tab-card';
import { CalendarWidgetData } from '../components/widgets/calendar-widget/calendar-widget';
import { CategoriesWidgetData } from '../components/widgets/categories-widget/categories-widget';
import { BirthdayCardData } from '../components/cards/birthday-card/birthday-card';
import { TransactionsTableData } from '../components/tables/transactions-table/transactions-table';
import { RevenueTableData } from '../components/tables/revenue-table/revenue-table';

/**
 * CrmDataService
 *
 * This Angular service provides mock data and utility methods for the CRM dashboard module.
 * It supplies data for statistics cards, new tab cards, calendar widgets, categories, 
 * birthday cards, transactions, revenue tables, navbar, and sidebar.
 * 
 * The service manages:
 * - CRM statistics and metrics visualization
 * - Calendar events and scheduling
 * - Transaction and revenue data
 * - User notifications and birthday alerts
 * - Navigation components (sidebar, navbar)
 * 
 * The service is intended for demo and UI prototyping purposes, simulating backend 
 * responses for the CRM dashboard.
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({
  providedIn: 'root'
})
export class CrmDataService {
  
  /**
   * Creates an instance of CrmDataService.
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
   * Retrieves navbar data specifically configured for the CRM page.
   * 
   * @returns Observable<NavbarData> - Observable containing navbar configuration with breadcrumbs,
   *          search placeholder, and notifications
   */
  getNavbarData(): Observable<NavbarData> {
      return of({
        breadcrumbIcon: 'ni ni-box-2',
        breadcrumbTitle: 'Automotive',
        breadcrumbSection: 'Pages',
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
   * Retrieves CRM statistics cards data for displaying key performance metrics.
   * 
   * @returns Observable<CrmStatsCardData[]> - Observable containing array of stats cards
   *          with titles, values, trends, and chart configurations
   */
  getStatsCards(): Observable<CrmStatsCardData[]> {
    return of([
      {
        title: 'Visitors',
        value: '5,927',
        trend: '+55%',
        trendColor: 'text-lime-500',
        chartId: 'chart-line-1',
        chartData: {
          labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
          gradientColors: {
            color1: 'rgba(94, 114, 228, 0.02)',
            color2: 'rgba(130, 94, 228, 0.0)',
            color3: 'rgba(94, 114, 228, 0)'
          },
          borderColor: "#5e72e4"
        }
      },
      {
        title: 'Income',
        value: '$130,832',
        trend: '+90%',
        trendColor: 'text-lime-500',
        chartId: 'chart-line-2',
        chartData: {
          labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          data: [60, 80, 75, 90, 67, 100, 90, 110, 120],
          gradientColors: {
            color1: "rgba(203,12,159,0.02)",
            color2: "rgba(72,72,176,0.0)",
            color3: "rgba(203,12,159,0)"
          },
          borderColor: "#5e72e4",
          formatCurrency: true
        }
      }
    ]);
  }

  /**
   * Retrieves new tab card data for creating additional tabs or sections.
   * 
   * @returns Observable<NewTabCardData> - Observable containing new tab configuration
   *          with icon and title
   */
  getNewTabCard(): Observable<NewTabCardData> {
    return of({
      icon: 'fa fa-plus',
      title: 'New tab'
    });
  }

  /**
   * Retrieves calendar widget data for displaying CRM events and appointments.
   * 
   * @returns Observable<CalendarWidgetData> - Observable containing calendar configuration,
   *          current date, and event list with styling
   */
  getCalendarWidget(): Observable<CalendarWidgetData> {
    return of({
      title: 'Calendar',
      currentDate: new Date(),
      type: 'widget',
      initialDate: '2020-12-01',
      events: [
        { date: '2020-11-18', title: 'Call with Dave', className: 'bg-gradient-to-tl from-red-600 to-orange-600' },
        { date: '2020-11-21', title: 'Lunch meeting', className: 'bg-gradient-to-tl from-orange-500 to-yellow-500' },
        { date: '2020-11-29', title: 'All day conference', className: 'bg-gradient-to-tl from-emerald-500 to-teal-400' },
        { date: '2020-12-01', title: 'Meeting with Mary', className: 'bg-gradient-to-tl from-blue-700 to-cyan-500' },
        { date: '2020-12-03', title: 'Winter Hackaton', className: 'bg-gradient-to-tl from-red-600 to-orange-600' },
        { date: '2020-12-07', title: 'Digital event', className: 'bg-gradient-to-tl from-orange-500 to-yellow-500' },
        { date: '2020-12-10', title: 'Marketing event', className: 'bg-gradient-to-tl from-blue-500 to-violet-500' },
        { date: '2020-12-19', title: 'Dinner with Family', className: 'bg-gradient-to-tl from-red-600 to-orange-600' },
        { date: '2020-12-23', title: 'Black Friday', className: 'bg-gradient-to-tl from-blue-700 to-cyan-500' },
        { date: '2020-12-02', title: 'Cyber Week', className: 'bg-gradient-to-tl from-orange-500 to-yellow-500' }
      ]
    });
  }

  /**
   * Retrieves categories widget data for displaying CRM categories and their statistics.
   * 
   * @returns Observable<CategoriesWidgetData> - Observable containing category items with
   *          icons, titles, descriptions, and color schemes
   */
  getCategoriesWidget(): Observable<CategoriesWidgetData> {
    return of({
      title: 'Categories',
      categories: [
        {
          icon: 'devices',
          title: 'Devices',
          description: '250 in stock, 346+ sold',
          color: 'from-zinc-800 to-zinc-700'
        },
        {
          icon: 'settings',
          title: 'Tickets',
          description: '123 closed, 15 open',
          color: 'from-zinc-800 to-zinc-700'
        },
        {
          icon: 'box-3d-50',
          title: 'Error logs',
          description: '1 is active, 40 closed',
          color: 'from-zinc-800 to-zinc-700'
        }
      ]
    });
  }

  /**
   * Retrieves birthday card data for displaying user birthday notifications.
   * 
   * @returns Observable<BirthdayCardData> - Observable containing birthday card configuration
   *          with background image, title, message, and button text
   */
  getBirthdayCard(): Observable<BirthdayCardData> {
    return of({
      backgroundImage: 'assets/img/ivancik.jpg',
      title: "Hey John!",
      message: "Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.",
      buttonText: "Read More"
    });
  }

  /**
   * Retrieves birthday notification data for displaying birthday alerts.
   * 
   * @returns Observable<BirthdayCardData> - Observable containing birthday notification
   *          with background image, title, and action button
   */
  getBirthdayNotification(): Observable<BirthdayCardData> {
    return of({
      backgroundImage: 'assets/img/kal-visuals-square.jpg',
      title: "Today is Martina's birthday. Wish her the best of luck!",
      buttonText: "Send Message"
    });
  }

  /**
   * Retrieves transactions table data for displaying financial transactions.
   * 
   * @returns Observable<TransactionsTableData> - Observable containing transaction list
   *          with company names, dates, amounts, and transaction types
   */
  getTransactionsTable(): Observable<TransactionsTableData> {
    return of({
      title: 'Transactions',
      period: '23 - 30 March 2021',
      transactions: [
        {
          type: 'expense',
          company: 'Netflix',
          date: '27 March 2020, at 12:30 PM',
          amount: '- $ 2,500',
          amountColor: 'from-red-600 to-orange-600'
        },
        {
          type: 'income',
          company: 'Apple',
          date: '23 March 2020, at 04:30 AM',
          amount: '+ $ 2,000',
          amountColor: 'from-emerald-500 to-teal-400'
        },
        {
          type: 'income',
          company: 'Partner #22213',
          date: '19 March 2020, at 02:50 AM',
          amount: '+ $ 1,400',
          amountColor: 'from-emerald-500 to-teal-400'
        }
      ]
    });
  }

  /**
   * Retrieves revenue table data for displaying revenue metrics and performance.
   * 
   * @returns Observable<RevenueTableData> - Observable containing revenue data with
   *          periods, amounts, and performance indicators
   */
  getRevenueTable(): Observable<RevenueTableData> {
    return of({
      title: 'Revenue',
      period: '01 - 07 June 2021',
      transactions: [
        {
          type: 'income',
          company: 'via PayPal',
          date: '07 June 2021, at 09:00 AM',
          amount: '+ $ 4,999',
          amountColor: 'from-emerald-500 to-teal-400'
        },
        {
          type: 'income',
          company: 'Partner #90211',
          date: '07 June 2021, at 09:00 AM',
          amount: '+ $ 700',
          amountColor: 'from-emerald-500 to-teal-400'
        },
        {
          type: 'expense',
          company: 'Services',
          date: '07 June 2021, at 07:10 PM',
          amount: '- $ 1,800',
          amountColor: 'from-red-600 to-orange-600'
        }
      ]
    });
  }
} 
