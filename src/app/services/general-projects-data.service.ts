import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';
import { StatsCardData } from '../components/cards/stats-card/stats-card';
import { EarningsCardData } from '../components/cards/earnings-card/earnings-card';
import { RecommendationCardData } from '../components/cards/recommendation-card/recommendation-card';
import { TodoListCardData } from '../components/cards/todo-list-card/todo-list-card';
import { TasksStatsCardData } from '../components/cards/tasks-stats-card/tasks-stats-card';
import { ProjectsStatsCardData } from '../components/cards/projects-stats-card/projects-stats-card';

/**
 * GeneralProjectsDataService
 * 
 * Service that provides mock data for the General Projects page.
 * This service manages comprehensive project management data including statistics,
 * earnings, recommendations, task lists, and project metrics.
 * 
 * The service provides data for:
 * - Dashboard statistics and key performance indicators
 * - Earnings and financial metrics
 * - Project recommendations and job opportunities
 * - Todo lists and task management
 * - Task statistics and progress tracking
 * - Project statistics and completion rates
 * - Navigation components (sidebar, navbar)
 * 
 * This service is part of the project management module for general project oversight.
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({
  providedIn: 'root'
})
export class GeneralProjectsDataService {
  
  /**
   * Creates an instance of GeneralProjectsDataService.
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
   * Retrieves navbar data specifically configured for the General Projects page.
   * 
   * @returns Observable<NavbarData> - Observable containing navbar configuration with breadcrumbs,
   *          search placeholder, and notifications including custom SVG icons
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: "ni ni-box-2",
      breadcrumbTitle: "General",
      breadcrumbSection: "Pages",
      searchPlaceholder: "Type here...",
      signInText: "Sign In",
      signInIcon: "fa fa-user",
      configIcon: "fa fa-cog",
      bellIcon: "fa fa-bell",
      notifications: [
        {
          avatarUrl: "/assets/img/team-2.jpg",
          title: "New message from Laur",
          description: "New message",
          time: "13 minutes ago"
        },
        {
          iconSvg: `<svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>credit-card</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                <g transform="translate(1716.000000, 291.000000)">
                  <g transform="translate(453.000000, 454.000000)">
                    <path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                    <path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>`,
          title: "Payment successfully completed",
          description: "Payment completed",
          time: "2 days"
        }
      ]
    });
  }

  /**
   * Retrieves statistics data for displaying key performance indicators.
   * 
   * @returns Observable<StatsCardData[]> - Observable containing array of stats cards
   *          with financial metrics, user sessions, and trend indicators
   */
  getStatsData(): Observable<StatsCardData[]> {
    return of([
      {
        title: "Today's Money",
        value: "$87,000",
        percentage: "+12%",
        trend: "up",
        icon: "ni ni-money-coins",
        iconColor: "zinc",
        description: "since last month"
      },
      {
        title: "Sessions",
        value: "9,600",
        percentage: "+2%",
        trend: "up",
        icon: "ni ni-planet",
        iconColor: "zinc",
        description: "since yesterday"
      },
      {
        title: "Today's Users",
        value: "2,300",
        percentage: "-1%",
        trend: "down",
        icon: "ni ni-world",
        iconColor: "zinc",
        description: "since last week"
      },
      {
        title: "Sign-Ups",
        value: "348",
        percentage: "+2%",
        trend: "up",
        icon: "ni ni-shop",
        iconColor: "zinc",
        description: "since last quarter"
      }
    ]);
  }

  /**
   * Retrieves earnings card data for displaying financial performance metrics.
   * 
   * @returns Observable<EarningsCardData> - Observable containing earnings data
   *          with amount, variation, description, and background image
   */
  getEarningsCardData(): Observable<EarningsCardData> {
    return of({
      title: 'Earnings',
      amount: '$15,800',
      variation: '+15%',
      variationDescription: 'since last week',
      description: `They're slowed down by their perception of themselves.`,
      buttonText: 'View more',
      backgroundImage: '/assets/img/img-1-1200x1000.jpg'
    });
  }

  /**
   * Retrieves recommendation card data for displaying job opportunities and recommendations.
   * 
   * @returns Observable<RecommendationCardData> - Observable containing recommendation data
   *          with user information, job details, and application options
   */
  getRecommendationCardData(): Observable<RecommendationCardData> {
    return of({
      avatar: '/assets/img/team-3.jpg',
      name: 'Lucas Prila',
      time: '2h ago',
      badge: 'Recommendation',
      badgeColor: 'bg-gradient-to-tl from-blue-700 to-cyan-500',
      message: 'I need a Ruby developer for my new website.',
      description: 'The website was initially built in PHP, I need a professional ruby programmer to shift it.',
      amount: '$3,000',
      amountDescription: '/ month',
      buttonText: 'Apply'
    });
  }

  /**
   * Retrieves todo list card data for displaying task management information.
   * 
   * @returns Observable<TodoListCardData> - Observable containing todo list data
   *          with header information and task items with completion status
   */
  getTodoListCardData(): Observable<TodoListCardData> {
    return of({
      header: {
        title: 'To do list',
        dateRange: '23 - 30 March 2020'
      },
      tasks: [
        {
          id: 1,
          title: "Check status",
          completed: false,
          date: "24 March 2019",
          project: "2414_VR4sf3#",
          company: "Creative Tim"
        },
        {
          id: 2,
          title: "Management discussion",
          completed: true,
          date: "24 March 2019",
          project: "4411_8sIsdd23",
          company: "Apple"
        },
        {
          id: 3,
          title: "New channel distribution",
          completed: true,
          date: "25 March 2019",
          project: "827d_kdl33D1s",
          company: "Slack"
        },
        {
          id: 4,
          title: "IOS App development",
          completed: false,
          date: "26 March 2019",
          project: "88s1_349DA2sa",
          company: "Facebook"
        }
      ]
    });
  }

  /**
   * Retrieves tasks statistics card data for displaying task performance metrics.
   * 
   * @returns Observable<TasksStatsCardData> - Observable containing task statistics
   *          with completion percentage, progress tracking, and chart data
   */
  getTasksStatsCardData(): Observable<TasksStatsCardData> {
    return of({
      icon: 'ni-calendar-grid-58',
      title: 'Tasks',
      value: '480',
      percentage: '60%',
      progressValue: 'w-3/5',
      chartData: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [40, 45, 42, 41, 40, 43, 40, 42, 39]
      }
    });
  }

  /**
   * Retrieves projects statistics card data for displaying project performance metrics.
   * 
   * @returns Observable<ProjectsStatsCardData> - Observable containing project statistics
   *          with completion rates, progress tracking, and chart data
   */
  getProjectsStatsCardData(): Observable<ProjectsStatsCardData> {
    return of({
      icon: 'ni-delivery-fast',
      title: 'Projects',
      value: '115',
      doneLabel: 'Done',
      inProgressLabel: 'In progress',
      chartData: {
        labels: ["Done", "In progress"],
        data: [75, 25]
      }
    });
  }
} 