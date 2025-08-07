import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NavbarData, NavbarComponent } from '../../../components/layout/navbar/navbar';
import { SidebarData, SidebarComponent } from '../../../components/layout/sidebar/sidebar';
import { FooterComponent } from '../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../components/layout/argon-configurator/argon-configurator';
import { PerfectScrollbarDirective } from '../../../components/layout/argon-configurator/perfect-scrollbar.directive';
import { ExportButtonComponent, ExportButtonData } from '../../../components/buttons/export-button/export-button';
import { DateFilterComponent, DateFilterData } from '../../../components/widgets/date-filter/date-filter';
import { AnalyticsStatsCardsComponent, AnalyticsStatsCardsData } from '../../../components/cards/analytics-stats-cards/analytics-stats-cards';
import { TrafficChartComponent, TrafficChartData } from '../../../components/charts/traffic-chart/traffic-chart';
import { ReferralsChartComponent, ReferralsChartData } from '../../../components/charts/referrals-chart/referrals-chart';
import { SocialProgressComponent, SocialProgressData } from '../../../components/widgets/social-progress/social-progress';
import { PagesTableComponent, PagesTableData } from '../../../components/tables/pages-table/pages-table';
import { AnalyticsDataService } from '../../../services/analytics-data.service';

/**
 * Analytics Application Component
 * 
 * This component implements a comprehensive analytics dashboard that provides
 * detailed insights into website performance, user behavior, and business metrics.
 * It integrates multiple data visualization widgets to create a complete analytics
 * experience with export capabilities and date filtering.
 * 
 * Features:
 * - Interactive analytics dashboard with key performance indicators
 * - Traffic visualization with chart components
 * - Referral tracking and social media progress monitoring
 * - Page performance analysis with detailed metrics
 * - Data export functionality for reporting
 * - Date range filtering for time-based analysis
 * - Integration with layout components (sidebar, navbar, footer)
 * - Responsive design with Argon configurator support
 * 
 * The component serves as a central analytics hub, providing users with
 * comprehensive insights into their digital presence and performance metrics
 * through various visualization tools and data management features.
 * 
 * @example
 * ```html
 * <app-analytics></app-analytics>
 * ```
 */
@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    PerfectScrollbarDirective,
    ExportButtonComponent,
    DateFilterComponent,
    AnalyticsStatsCardsComponent,
    TrafficChartComponent,
    ReferralsChartComponent,
    SocialProgressComponent,
    PagesTableComponent
  ],
  templateUrl: './analytics.html'
})
export class AnalyticsComponent {

  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;

  /** Observable for export button configuration and functionality data */
  exportButtonData$: Observable<ExportButtonData>;

  /** Observable for date filter configuration and date range data */
  dateFilterData$: Observable<DateFilterData>;

  /** Observable for analytics statistics cards data */
  analyticsStatsCardsData$: Observable<AnalyticsStatsCardsData>;

  /** Observable for traffic chart visualization data */
  trafficChartData$: Observable<TrafficChartData>;

  /** Observable for referrals chart visualization data */
  referralsChartData$: Observable<ReferralsChartData>;

  /** Observable for social media progress tracking data */
  socialProgressData$: Observable<SocialProgressData>;

  /** Observable for pages table performance data */
  pagesTableData$: Observable<PagesTableData>;

  /**
   * Creates an instance of AnalyticsComponent.
   * 
   * Initializes the component by subscribing to data streams from AnalyticsDataService
   * for all analytics-related widgets including sidebar, navbar, export functionality,
   * date filtering, statistics cards, traffic charts, referral tracking, social progress,
   * and page performance data.
   * 
   * @param analyticsDataService - Service for managing analytics data and widget configurations
   */
  constructor(private analyticsDataService: AnalyticsDataService) {
    this.sidebarData$ = this.analyticsDataService.getSidebarData();
    this.navbarData$ = this.analyticsDataService.getNavbarData();
    this.exportButtonData$ = this.analyticsDataService.getExportButtonData();
    this.dateFilterData$ = this.analyticsDataService.getDateFilterData();
    this.analyticsStatsCardsData$ = this.analyticsDataService.getAnalyticsStatsCardsData();
    this.trafficChartData$ = this.analyticsDataService.getTrafficChartData();
    this.referralsChartData$ = this.analyticsDataService.getReferralsChartData();
    this.socialProgressData$ = this.analyticsDataService.getSocialProgressData();
    this.pagesTableData$ = this.analyticsDataService.getPagesTableData();
  }
} 