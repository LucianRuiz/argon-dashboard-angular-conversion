import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from '../services/sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';
import { CountryData } from '../components/tables/sales-by-country/sales-by-country';
import { BarChartHorizontalData } from '../components/charts/bar-chart-horizontal/bar-chart-horizontal';
import { StatsCardData } from '../components/cards/stats-card/stats-card';
import { OverviewSummaryCardData } from '../components/cards/overview-summary-card/overview-summary-card';
import { RevenueLineChartData } from '../components/charts/revenue-line-chart/revenue-line-chart';
import { ChannelPieChartData } from '../components/charts/channels-pie-chart/channels-pie-chart';
import { TopSellingProductsData } from '../components/widgets/top-selling-products/top-selling-products';

/**
 * OverviewDataService
 * 
 * Provides mock data and configuration for the Ecommerce Overview page. This service supplies
 * comprehensive analytics and business intelligence data including sales metrics, customer
 * insights, revenue charts, and product performance. The service is designed for demo and
 * UI prototyping purposes, simulating backend responses for ecommerce analytics functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the overview page
 * - Navbar data with breadcrumbs and navigation
 * - Overview summary cards with key performance indicators
 * - Country-based sales data with flags and metrics
 * - Horizontal bar charts for age-based sales analysis
 * - Revenue line charts with advertising channel data
 * - Channel distribution pie charts
 * - Top selling products with performance metrics
 * 
 * @example
 * ```typescript
 * constructor(private overviewDataService: OverviewDataService) {}
 * 
 * ngOnInit() {
 *   this.overviewDataService.getOverviewSummaryCardsData().subscribe(cards => {
 *     this.summaryCards = cards;
 *   });
 * }
 * ```
 */
@Injectable({ providedIn: 'root' })
export class OverviewDataService {
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar configuration data for the overview page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the overview interface.
   * 
   * @returns Observable<SidebarData> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.overviewDataService.getSidebarData().subscribe(sidebarData => {
   *   this.sidebarConfig = sidebarData;
   * });
   * ```
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves navbar configuration data with breadcrumbs for the overview page.
   * 
   * Returns navbar data including:
   * - Breadcrumb navigation with icon, title, and section
   * - Search functionality configuration
   * - User authentication elements (Sign In, config, bell)
   * - Empty notifications array for clean interface
   * 
   * @returns Observable<NavbarData> - Navbar configuration for overview page
   * 
   * @example
   * ```typescript
   * this.overviewDataService.getNavbarData().subscribe(navbarData => {
   *   this.breadcrumb = navbarData.breadcrumbTitle;
   *   this.section = navbarData.breadcrumbSection;
   * });
   * ```
   */
  getNavbarData(): Observable<NavbarData> {
    const navbarData: NavbarData = {
      breadcrumbIcon: 'ni ni-archive-2',
      breadcrumbTitle: 'Overview',
      breadcrumbSection: 'Ecommerce',
      searchPlaceholder: 'Type here...',
      signInText: 'Sign In',
      signInIcon: 'fa fa-user',
      configIcon: 'fa fa-cog',
      bellIcon: 'fa fa-bell',
      notifications: []
    };
    return of(navbarData);
  }

  /**
   * Retrieves overview summary cards data with key performance indicators.
   * 
   * Returns summary cards including:
   * - Sales metrics with percentage growth and trends
   * - Customer count with growth indicators
   * - Average revenue with trend analysis
   * - Date range options for filtering
   * - Icon configurations with colors
   * 
   * @returns Observable<OverviewSummaryCardData[]> - Array of summary card configurations
   * 
   * @example
   * ```typescript
   * this.overviewDataService.getOverviewSummaryCardsData().subscribe(cards => {
   *   this.salesCard = cards.find(card => card.title === 'Sales');
   *   this.customersCard = cards.find(card => card.title === 'Customers');
   *   this.revenueCard = cards.find(card => card.title === 'Avg. Revenue');
   * });
   * ```
   */
  getOverviewSummaryCardsData(): Observable<OverviewSummaryCardData[]> {
    return of([
      {
        title: 'Sales',
        value: '$230,220',
        percentage: '+55%',
        trend: 'up',
        icon: 'ni ni-money-coins',
        iconColor: 'green',
        description: 'since last month',
        dateRange: '6 May - 7 May',
        dateOptions: ['Yesterday', 'Last 7 days', 'Last 30 days']
      },
      {
        title: 'Customers',
        value: '3.200',
        percentage: '+12%',
        trend: 'up',
        icon: 'ni ni-world',
        iconColor: 'blue',
        description: 'since last month',
        dateRange: '6 May - 7 May',
        dateOptions: ['Yesterday', 'Last 7 days', 'Last 30 days']
      },
      {
        title: 'Avg. Revenue',
        value: '$1.200',
        percentage: '+$213',
        trend: 'up',
        icon: 'ni ni-paper-diploma',
        iconColor: 'orange',
        description: 'since last month',
        dateRange: '6 May - 7 May',
        dateOptions: ['Yesterday', 'Last 7 days', 'Last 30 days']
      }
    ]);
  }

  /**
   * Retrieves country-based sales data with flags and performance metrics.
   * 
   * Returns sales data by country including:
   * - Country names with flag images
   * - Sales volume and revenue values
   * - Bounce rate percentages
   * - Performance metrics for analysis
   * 
   * @returns Observable<CountryData[]> - Array of country sales data
   * 
   * @example
   * ```typescript
   * this.overviewDataService.getCountrySalesData().subscribe(countries => {
   *   this.topCountry = countries[0]; // United States
   *   this.totalRevenue = countries.reduce((sum, country) => 
   *     sum + parseFloat(country.value.replace('$', '').replace(',', '')), 0
   *   );
   * });
   * ```
   */
  getCountrySalesData(): Observable<CountryData[]> {
    return of([
      { country: 'United States', flag: '/assets/img/icons/flags/US.png', sales: '2500', value: '$230,900', bounce: '29.9%' },
      { country: 'Germany', flag: '/assets/img/icons/flags/DE.png', sales: '3900', value: '$440,000', bounce: '40.22%' },
      { country: 'Great Britain', flag: '/assets/img/icons/flags/GB.png', sales: '1400', value: '$190,700', bounce: '23.44%' },
      { country: 'Brasil', flag: '/assets/img/icons/flags/BR.png', sales: '562', value: '$143,960', bounce: '32.14%' },
      { country: 'Australia', flag: '/assets/img/icons/flags/AU.png', sales: '400', value: '$93,000', bounce: '56.83%' }
    ]);
  }

  /**
   * Retrieves horizontal bar chart data for age-based sales analysis.
   * 
   * Returns chart configuration including:
   * - Age group labels (16-20, 21-25, etc.)
   * - Sales data for each age group
   * - Chart styling and configuration
   * - Visual representation settings
   * 
   * @returns Observable<BarChartHorizontalData> - Horizontal bar chart configuration
   * 
   * @example
   * ```typescript
   * this.overviewDataService.getBarChartHorizontalData().subscribe(chartData => {
   *   this.ageChartTitle = chartData.title;
   *   this.ageChartData = chartData.chartData;
   * });
   * ```
   */
  getBarChartHorizontalData(): Observable<BarChartHorizontalData> {
    return of({
      title: 'Sales by Age',
      chartId: 'bar-chart-age',
      chartData: {
        labels: ['16-20', '21-25', '26-30', '31-36', '36-42', '42+'],
        datasets: [{
          label: 'Sales by age',
          weight: 5,
          borderWidth: 0,
          borderRadius: 4,
          backgroundColor: '#3A416F',
          data: [15, 20, 12, 60, 20, 15],
          fill: false
        }]
      }
    });
  }

  /**
   * Retrieves revenue line chart data with advertising channel performance.
   * 
   * Returns chart configuration including:
   * - Revenue data over time (Apr-Dec)
   * - Facebook Ads vs Google Ads comparison
   * - Chart styling with colors and legends
   * - Performance trend analysis
   * 
   * @returns Observable<RevenueLineChartData> - Revenue line chart configuration
   * 
   * @example
   * ```typescript
   * this.overviewDataService.getRevenueLineChartData().subscribe(chartData => {
   *   this.revenueChartTitle = chartData.title;
   *   this.revenueChartData = chartData.chartData;
   *   this.revenueLegend = chartData.legend;
   * });
   * ```
   */
  getRevenueLineChartData(): Observable<RevenueLineChartData> {
    return of({
      title: 'Revenue',
      chartId: 'chart-line-ecommerce',
      legend: [
        { label: 'Facebook Ads', color: '#10b981' },
        { label: 'Google Ads', color: '#334155' }
      ],
      chartData: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Facebook Ads',
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 2,
            pointBackgroundColor: '#5e72e4',
            borderColor: '#5e72e4',
            backgroundColor: 'rgba(94, 114, 228, 0.2)',
            fill: true,
            data: [50, 100, 200, 190, 400, 350, 500, 450, 700],
            maxBarThickness: 6
          },
          {
            label: 'Google Ads',
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 2,
            pointBackgroundColor: '#3A416F',
            borderColor: '#3A416F',
            backgroundColor: '',
            fill: false,
            data: [10, 30, 40, 120, 150, 220, 280, 250, 280],
            maxBarThickness: 6
          }
        ]
      }
    });
  }

  /**
   * Retrieves channels pie chart data for traffic source analysis.
   * 
   * Returns chart configuration including:
   * - Channel distribution (Facebook, Direct, Organic, Referral)
   * - Color-coded legend and data
   * - Footer text with marketing insights
   * - Call-to-action button
   * 
   * @returns Observable<ChannelPieChartData> - Channels pie chart configuration
   * 
   * @example
   * ```typescript
   * this.overviewDataService.getChannelsPieChartData().subscribe(chartData => {
   *   this.channelsChartTitle = chartData.title;
   *   this.channelsChartData = chartData.chartData;
   *   this.channelsLegend = chartData.legend;
   *   this.channelsFooter = chartData.footerText;
   * });
   * ```
   */
  getChannelsPieChartData(): Observable<ChannelPieChartData> {
    return of({
      title: 'Channels',
      chartId: 'channels-pie-chart',
      legend: [
        { label: 'Facebook', color: '#17c1e8' },
        { label: 'Direct', color: '#5e72e4' },
        { label: 'Organic', color: '#3A416F' },
        { label: 'Referral', color: '#a8b8d8' }
      ],
      chartData: {
        labels: ['Facebook', 'Direct', 'Organic', 'Referral'],
        datasets: [
          {
            data: [15, 20, 12, 60],
            backgroundColor: [
              '#17c1e8',
              '#5e72e4',
              '#3A416F',
              '#a8b8d8'
            ],
            borderWidth: 2,
            borderColor: '#fff',
            hoverOffset: 4
          }
        ]
      },
      footerText: 'More than 200 000 sales are made using referral marketing, and 700,000 are from social media',
      footerButtonText: 'Read More'
    });
  }

  /**
   * Retrieves top selling products data with performance metrics.
   * 
   * Returns product data including:
   * - Product names, images, and order counts
   * - Revenue values and advertising spend
   * - Refund rates with trend indicators
   * - Performance comparison metrics
   * 
   * @returns Observable<TopSellingProductsData> - Top selling products configuration
   * 
   * @example
   * ```typescript
   * this.overviewDataService.getTopSellingProductsData().subscribe(productsData => {
   *   this.productsTableHeaders = productsData.headers;
   *   this.topProducts = productsData.products;
   *   this.bestPerformer = productsData.products[0]; // Nike v22 Running
   * });
   * ```
   */
  getTopSellingProductsData(): Observable<TopSellingProductsData> {
    return of({
      title: 'Top Selling Products',
      headers: {
        column1: 'Product',
        column2: 'Value',
        column3: 'Ads Spent',
        column4: 'Refunds'
      },
      products: [
        {
          id: '1',
          name: 'Nike v22 Running',
          image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/blue-shoe.jpg',
          orders: '8.232',
          value: '$130.992',
          adsSpent: '$9.500',
          refunds: '13',
          refundsTrend: 'down',
          hasInfoButton: true
        },
        {
          id: '2',
          name: 'Business Kit (Mug + Notebook)',
          image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-mug.jpg',
          orders: '12.821',
          value: '$80.250',
          adsSpent: '$4.200',
          refunds: '40',
          refundsTrend: 'down'
        },
        {
          id: '3',
          name: 'Black Chair',
          image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg',
          orders: '2.421',
          value: '$40.600',
          adsSpent: '$9.430',
          refunds: '54',
          refundsTrend: 'up'
        },
        {
          id: '4',
          name: 'Wireless Charger',
          image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/bang-sound.jpg',
          orders: '5.921',
          value: '$91.300',
          adsSpent: '$7.364',
          refunds: '5',
          refundsTrend: 'down'
        },
        {
          id: '5',
          name: 'Mountain Trip Kit (Camera + Backpack)',
          image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/photo-tools.jpg',
          orders: '921',
          value: '$140.925',
          adsSpent: '$20.531',
          refunds: '121',
          refundsTrend: 'up',
          hasInfoButton: true
        }
      ]
    });
  }
} 