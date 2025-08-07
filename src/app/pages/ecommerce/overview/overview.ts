import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SidebarDataService } from '../../../services/sidebar-data.service';
import { SidebarData } from '../../../components/layout/sidebar/sidebar';
import { NavbarData } from '../../../components/layout/navbar/navbar';
import { OverviewDataService } from '../../../services/overview-data.service';
import { SidebarComponent } from '../../../components/layout/sidebar/sidebar';
import { NavbarComponent } from '../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../components/layout/argon-configurator/argon-configurator';
import { SalesByCountryComponent } from '../../../components/tables/sales-by-country/sales-by-country';
import { BarChartHorizontalComponent } from '../../../components/charts/bar-chart-horizontal/bar-chart-horizontal';
import { OverviewSummaryCardsComponent } from '../../../components/cards/overview-summary-cards/overview-summary-cards';
import { RevenueLineChartComponent } from '../../../components/charts/revenue-line-chart/revenue-line-chart';
import { OverviewSummaryCardData } from '../../../components/cards/overview-summary-card/overview-summary-card';
import { RevenueLineChartData } from '../../../components/charts/revenue-line-chart/revenue-line-chart';
import { CountryData } from '../../../components/tables/sales-by-country/sales-by-country';
import { BarChartHorizontalData } from '../../../components/charts/bar-chart-horizontal/bar-chart-horizontal';
import { ChannelsPieChartComponent } from '../../../components/charts/channels-pie-chart/channels-pie-chart';
import { ChannelPieChartData } from '../../../components/charts/channels-pie-chart/channels-pie-chart';
import { TopSellingProductsComponent } from '../../../components/widgets/top-selling-products/top-selling-products';
import { TopSellingProductsData } from '../../../components/widgets/top-selling-products/top-selling-products';
import { PerfectScrollbarDirective } from '../../../components/layout/sidebar/perfect-scrollbar.directive';


/**
 * Ecommerce Overview Component
 * 
 * This component implements the main overview dashboard for the ecommerce system.
 * It provides a comprehensive analytics interface displaying key performance
 * metrics, sales data, revenue trends, and business insights through various
 * charts, graphs, and summary cards in a complete dashboard layout.
 * 
 * Features:
 * - Overview summary cards with key performance indicators
 * - Revenue line chart showing trends over time
 * - Sales by country visualization with geographic data
 * - Horizontal bar chart for comparative analysis
 * - Channels pie chart showing sales distribution
 * - Top selling products ranking and performance
 * - Sidebar navigation for easy access to other sections
 * - Navbar with search and filtering capabilities
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Real-time data updates through service integration
 * - Interactive charts and visualizations
 * 
 * The component serves as the primary analytics dashboard, providing
 * business owners, managers, and analysts with comprehensive insights
 * into sales performance, revenue trends, geographic distribution,
 * channel effectiveness, and product performance in an intuitive
 * and visually appealing layout.
 * 
 * @example
 * ```html
 * <app-ecommerce-overview></app-ecommerce-overview>
 * ```
 */
@Component({
  selector: 'app-ecommerce-overview',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    SalesByCountryComponent,
    BarChartHorizontalComponent,
    OverviewSummaryCardsComponent,
    RevenueLineChartComponent,
    ChannelsPieChartComponent,
    TopSellingProductsComponent,
    PerfectScrollbarDirective
  ],
  templateUrl: './overview.html'
})
export class EcommerceOverviewComponent {
  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;
  
  /** Observable for sales by country data */
  countrySalesData$: Observable<CountryData[]>;
  
  /** Observable for horizontal bar chart data */
  barChartHorizontalData$: Observable<BarChartHorizontalData>;
  
  /** Observable for overview summary cards data */
  overviewSummaryCardsData$: Observable<OverviewSummaryCardData[]>;
  
  /** Observable for revenue line chart data */
  revenueLineChartData$: Observable<RevenueLineChartData>;
  
  /** Observable for channels pie chart data */
  channelsPieChartData$: Observable<ChannelPieChartData>;
  
  /** Observable for top selling products data */
  topSellingProductsData$: Observable<TopSellingProductsData>;

  /**
   * Creates an instance of EcommerceOverviewComponent.
   * 
   * Initializes the component by subscribing to data streams from OverviewDataService
   * for sidebar, navbar, and all analytics widgets including country sales, bar charts,
   * summary cards, revenue trends, channel distribution, and top selling products.
   * 
   * @param overviewDataService - Service for managing overview data and analytics configurations
   */
  constructor(private overviewDataService: OverviewDataService) {
    this.sidebarData$ = this.overviewDataService.getSidebarData();
    this.navbarData$ = this.overviewDataService.getNavbarData();
    this.countrySalesData$ = this.overviewDataService.getCountrySalesData();
    this.barChartHorizontalData$ = this.overviewDataService.getBarChartHorizontalData();
    this.overviewSummaryCardsData$ = this.overviewDataService.getOverviewSummaryCardsData();
    this.revenueLineChartData$ = this.overviewDataService.getRevenueLineChartData();
    this.channelsPieChartData$ = this.overviewDataService.getChannelsPieChartData();
    this.topSellingProductsData$ = this.overviewDataService.getTopSellingProductsData();
  }
} 
