import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent, SidebarData } from '../../../components/layout/sidebar/sidebar';
import { PerfectScrollbarDirective } from '../../../components/layout/sidebar/perfect-scrollbar.directive';
import { NavbarComponent, NavbarData } from '../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../components/layout/argon-configurator/argon-configurator';
import { CrmStatsCardComponent } from '../../../components/cards/crm-stats-card/crm-stats-card';
import { NewTabCardComponent } from '../../../components/cards/new-tab-card/new-tab-card';
import { CalendarWidgetComponent } from '../../../components/widgets/calendar-widget/calendar-widget';
import { CategoriesWidgetComponent } from '../../../components/widgets/categories-widget/categories-widget';
import { BirthdayCardComponent } from '../../../components/cards/birthday-card/birthday-card';
import { TransactionsTableComponent } from '../../../components/tables/transactions-table/transactions-table';
import { RevenueTableComponent } from '../../../components/tables/revenue-table/revenue-table';
import { CrmDataService } from '../../../services/crm-data.service';
import { Observable } from 'rxjs';

/**
 * CRM Dashboard Component
 * 
 * This component implements the Customer Relationship Management (CRM) dashboard
 * of the Argon Dashboard 2 PRO system. It provides a comprehensive interface for
 * managing customer relationships, sales activities, and business metrics through
 * various specialized widgets and data visualization tools.
 * 
 * Features:
 * - CRM statistics cards with key performance indicators
 * - New tab card for quick access to important functions
 * - Interactive calendar widget for scheduling and events
 * - Categories widget for customer segmentation
 * - Birthday card for customer relationship management
 * - Birthday notifications for proactive customer engagement
 * - Transactions table for detailed financial tracking
 * - Revenue table for sales performance analysis
 * - Integration with Argon configurator for customization
 * - Responsive design optimized for business workflows
 * 
 * The component serves as a central hub for CRM activities, providing sales teams
 * and managers with comprehensive tools for customer management, sales tracking,
 * and relationship building in a unified dashboard interface.
 * 
 * @example
 * ```html
 * <app-crm></app-crm>
 * ```
 */
@Component({
  selector: 'app-crm',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    PerfectScrollbarDirective,
    NavbarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    CrmStatsCardComponent,
    NewTabCardComponent,
    CalendarWidgetComponent,
    CategoriesWidgetComponent,
    BirthdayCardComponent,
    TransactionsTableComponent,
    RevenueTableComponent
  ],
  templateUrl: './crm.html'
})
export class CrmComponent {
  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;
  
  /** Observable for CRM statistics cards data */
  statsCards$: Observable<any[]>;
  
  /** Observable for new tab card data */
  newTabCard$: Observable<any>;
  
  /** Observable for calendar widget data */
  calendarWidget$: Observable<any>;
  
  /** Observable for categories widget data */
  categoriesWidget$: Observable<any>;
  
  /** Observable for birthday card data */
  birthdayCard$: Observable<any>;
  
  /** Observable for birthday notification data */
  birthdayNotification$: Observable<any>;
  
  /** Observable for transactions table data */
  transactionsTable$: Observable<any>;
  
  /** Observable for revenue table data */
  revenueTable$: Observable<any>;

  /**
   * Creates an instance of CrmComponent.
   * 
   * Initializes the component by subscribing to data streams from CrmDataService
   * for all CRM dashboard elements including sidebar, navbar, statistics cards,
   * new tab card, calendar widget, categories, birthday notifications, transactions,
   * and revenue data.
   * 
   * @param crmDataService - Service for managing CRM dashboard data and configurations
   */
  constructor(private crmDataService: CrmDataService) {
    this.sidebarData$ = this.crmDataService.getSidebarData();
    this.navbarData$ = this.crmDataService.getNavbarData();
    this.statsCards$ = this.crmDataService.getStatsCards();
    this.newTabCard$ = this.crmDataService.getNewTabCard();
    this.calendarWidget$ = this.crmDataService.getCalendarWidget();
    this.categoriesWidget$ = this.crmDataService.getCategoriesWidget();
    this.birthdayCard$ = this.crmDataService.getBirthdayCard();
    this.birthdayNotification$ = this.crmDataService.getBirthdayNotification();
    this.transactionsTable$ = this.crmDataService.getTransactionsTable();
    this.revenueTable$ = this.crmDataService.getRevenueTable();
  }
} 
