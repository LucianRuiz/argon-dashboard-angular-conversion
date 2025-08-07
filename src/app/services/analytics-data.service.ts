import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavbarData, NavbarNotification } from '../components/layout/navbar/navbar';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { SidebarDataService } from './sidebar-data.service';
import { ExportButtonData } from '../components/buttons/export-button/export-button';
import { DateFilterData, DateFilterOption } from '../components/widgets/date-filter/date-filter';
import { AnalyticsStatsCardsData, StatsCard } from '../components/cards/analytics-stats-cards/analytics-stats-cards';
import { TrafficChartData, TrafficChannel } from '../components/charts/traffic-chart/traffic-chart';
import { ReferralsChartData, Referral, DoughnutChartData } from '../components/charts/referrals-chart/referrals-chart';
import { SocialProgressData, SocialNetwork } from '../components/widgets/social-progress/social-progress';
import { PagesTableData, Page } from '../components/tables/pages-table/pages-table';

/**
 * AnalyticsDataService
 * 
 * Service that provides data for the Analytics page.
 * Includes data for navbar, sidebar and page-specific components.
 * 
 * This service manages all the mock data required for the analytics dashboard,
 * including statistics cards, charts, tables, and navigation elements.
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({ providedIn: 'root' })
export class AnalyticsDataService {

  /**
   * Creates an instance of AnalyticsDataService.
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
   * Retrieves navbar data specifically configured for the Analytics page.
   * 
   * @returns Observable<NavbarData> - Observable containing navbar configuration with breadcrumbs,
   *          search placeholder, and notifications
   */
  getNavbarData(): Observable<NavbarData> {
    const navbarData: NavbarData = {
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Analytics',
      breadcrumbSection: 'Pages',
      searchPlaceholder: 'Type here...',
      signInText: 'Sign In',
      signInIcon: 'fa fa-user',
      configIcon: 'fa fa-cog',
      bellIcon: 'fa fa-bell',
      notifications: [
        {
          avatarUrl: './assets/img/team-2.jpg',
          title: 'New message from Laur',
          description: 'New message',
          time: '13 minutes ago'
        },
        {
          iconSvg: './assets/img/small-logos/logo-spotify.svg',
          title: 'New album by Travis Scott',
          description: 'New album',
          time: '1 day'
        },
        {
          iconSvg: './assets/img/small-logos/logo-jira.svg',
          title: 'Payment successfully completed',
          description: 'Payment completed',
          time: '2 days'
        }
      ]
    };
    return of(navbarData);
  }

  /**
   * Retrieves export button configuration data.
   * 
   * @returns Observable<ExportButtonData> - Observable containing export button text and icon
   */
  getExportButtonData(): Observable<ExportButtonData> {
    const exportButtonData: ExportButtonData = {
      text: 'Export',
      icon: 'ni ni-folder-17'
    };
    return of(exportButtonData);
  }

  /**
   * Retrieves date filter configuration with predefined time range options.
   * 
   * @returns Observable<DateFilterData> - Observable containing selected date range and available options
   */
  getDateFilterData(): Observable<DateFilterData> {
    const dateFilterData: DateFilterData = {
      selectedValue: 'today',
      options: [
        { value: 'today', label: 'Today' },
        { value: 'yesterday', label: 'Yesterday' },
        { value: 'last7days', label: 'Last 7 days' },
        { value: 'last30days', label: 'Last 30 days' }
      ]
    };
    return of(dateFilterData);
  }

  /**
   * Retrieves analytics statistics cards data including user metrics, sessions, and page views.
   * 
   * @returns Observable<AnalyticsStatsCardsData> - Observable containing array of stats cards
   *          with titles, values, percentages, trends, and icons
   */
  getAnalyticsStatsCardsData(): Observable<AnalyticsStatsCardsData> {
    const statsCardsData: AnalyticsStatsCardsData = {
      cards: [
        {
          title: 'Users',
          value: '930',
          percentage: '+55%',
          trend: 'up',
          icon: 'ni ni-circle-08',
          iconColor: 'text-blue-500'
        },
        {
          title: 'New Users',
          value: '744',
          percentage: '+3%',
          trend: 'up',
          icon: 'ni ni-world',
          iconColor: 'text-emerald-500'
        },
        {
          title: 'Sessions',
          value: '1,414',
          percentage: '-2%',
          trend: 'down',
          icon: 'ni ni-watch-time',
          iconColor: 'text-red-500'
        },
        {
          title: 'Pages/Session',
          value: '1.76',
          percentage: '+5%',
          trend: 'up',
          icon: 'ni ni-image',
          iconColor: 'text-cyan-500'
        }
      ]
    };
    return of(statsCardsData);
  }

  /**
   * Retrieves traffic chart data for displaying channel performance over time.
   * 
   * @returns Observable<TrafficChartData> - Observable containing chart configuration
   *          with labels, channel data, colors, and chart height
   */
  getTrafficChartData(): Observable<TrafficChartData> {
    const trafficChartData: TrafficChartData = {
      title: 'Traffic channels',
      labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      channels: [
        {
          name: 'Organic search',
          color: '#5e72e4',
          data: [50, 40, 300, 220, 500, 250, 400, 230, 500]
        },
        {
          name: 'Referral',
          color: '#3A416F',
          data: [30, 90, 40, 140, 290, 290, 340, 230, 400]
        },
        {
          name: 'Social media',
          color: '#17c1e8',
          data: [40, 80, 70, 90, 30, 90, 140, 130, 200]
        }
      ],
      height: 300
    };
    return of(trafficChartData);
  }

  /**
   * Retrieves referrals chart data for displaying traffic sources and their performance.
   * 
   * @returns Observable<ReferralsChartData> - Observable containing doughnut chart data
   *          and referral source information with logos and percentages
   */
  getReferralsChartData(): Observable<ReferralsChartData> {
    const referralsChartData: ReferralsChartData = {
      title: 'Referrals',
      tooltipText: 'See wich websites are sending traffic to your website',
      chartData: {
        labels: ['Adobe', 'Atlassian', 'Slack', 'Spotify', 'Jira'],
        data: [25, 3, 12, 7, 10],
        colors: ['#FF26BE', '#0052CC', '#36C5F0', '#2EBD59', '#2684FF']
      },
      referrals: [
        {
          name: 'Adobe',
          logo: './assets/img/small-logos/logo-xd.svg',
          percentage: 25,
          altText: 'Adobe logo'
        },
        {
          name: 'Atlassian',
          logo: './assets/img/small-logos/logo-atlassian.svg',
          percentage: 3,
          altText: 'Atlassian logo'
        },
        {
          name: 'Slack',
          logo: './assets/img/small-logos/logo-slack.svg',
          percentage: 12,
          altText: 'Slack logo'
        },
        {
          name: 'Spotify',
          logo: './assets/img/small-logos/logo-spotify.svg',
          percentage: 7,
          altText: 'Spotify logo'
        },
        {
          name: 'Jira',
          logo: './assets/img/small-logos/logo-jira.svg',
          percentage: 10,
          altText: 'Jira logo'
        }
      ],
      buttonText: 'See all referrals',
      height: 200
    };
    return of(referralsChartData);
  }

  /**
   * Retrieves social progress data for displaying social media traffic performance.
   * 
   * @returns Observable<SocialProgressData> - Observable containing social network data
   *          with names, icons, colors, and percentages
   */
  getSocialProgressData(): Observable<SocialProgressData> {
    const socialProgressData: SocialProgressData = {
      title: 'Social',
      tooltipText: 'See how much traffic do you get from social media',
      networks: [
        {
          name: 'Facebook',
          icon: 'fab fa-facebook',
          color: '#1877F2',
          percentage: 80
        },
        {
          name: 'Twitter',
          icon: 'fab fa-twitter',
          color: '#1DA1F2',
          percentage: 40
        },
        {
          name: 'Reddit',
          icon: 'fab fa-reddit',
          color: '#FF4500',
          percentage: 30
        },
        {
          name: 'Youtube',
          icon: 'fab fa-youtube',
          color: '#FF0000',
          percentage: 25
        },
        {
          name: 'Slack',
          icon: 'fab fa-slack',
          color: '#4A154B',
          percentage: 15
        }
      ]
    };
    return of(socialProgressData);
  }

  /**
   * Retrieves pages table data for displaying page performance metrics.
   * 
   * @returns Observable<PagesTableData> - Observable containing page data with page views,
   *          average time, and bounce rate
   */
  getPagesTableData(): Observable<PagesTableData> {
    const pagesTableData: PagesTableData = {
      title: 'Pages',
      tooltipText: 'See how much traffic do you get from social media',
      pages: [
        {
          page: '1. /bits',
          pageViews: 345,
          avgTime: '00:17:07',
          bounceRate: '40.91%'
        },
        {
          page: '2. /pages/argon-dashboard',
          pageViews: 520,
          avgTime: '00:23:13',
          bounceRate: '30.14%'
        },
        {
          page: '3. /pages/soft-ui-dashboard',
          pageViews: 122,
          avgTime: '00:3:10',
          bounceRate: '54.10%'
        },
        {
          page: '4. /bootstrap-themes',
          pageViews: 1900,
          avgTime: '00:30:42',
          bounceRate: '20.93%'
        },
        {
          page: '5. /react-themes',
          pageViews: 1442,
          avgTime: '00:31:50',
          bounceRate: '34.98%'
        },
        {
          page: '6. /product/argon-dashboard-angular',
          pageViews: 201,
          avgTime: '00:12:42',
          bounceRate: '21.4%'
        },
        {
          page: '7. /product/material-dashboard-pro',
          pageViews: 2115,
          avgTime: '00:50:11',
          bounceRate: '34.98%'
        }
      ]
    };
    return of(pagesTableData);
  }
} 