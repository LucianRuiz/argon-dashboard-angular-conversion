import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Interfaces importadas desde componentes existentes
import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';
import { StatsCardData } from '../components/cards/stats-card/stats-card';
import { TeamMember } from '../components/lists/team-members/team-members';
import { TodoItem } from '../components/lists/todo-list/todo-list';
import { ProgressItem } from '../components/widgets/progress-track/progress-track';

/**
 * VrDefaultDataService
 * 
 * Provides mock data and configuration for the Virtual Reality (VR) Default dashboard module.
 * This service supplies comprehensive VR dashboard data including statistics cards, team
 * members, todo items, progress tracking, and layout configuration. The service is designed
 * for demo and UI prototyping purposes, simulating backend responses for VR dashboard
 * functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the VR default page
 * - Navbar data with breadcrumbs and notifications
 * - Statistics cards with financial and user metrics
 * - Team member information with status indicators
 * - Todo list items with completion tracking
 * - Progress tracking for various projects
 * - General statistics for user overview
 * 
 * @example
 * ```typescript
 * constructor(private vrDefaultDataService: VrDefaultDataService) {}
 * 
 * ngOnInit() {
 *   this.vrDefaultDataService.getStatsCards().subscribe(cards => {
 *     this.statsCards = cards;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class VrDefaultDataService {

    constructor(private sidebarDataService: SidebarDataService) {}

    /**
     * Retrieves sidebar configuration data for the VR default page.
     * 
     * Returns the default sidebar configuration to provide consistent navigation
     * throughout the VR default interface.
     * 
     * @returns Observable<SidebarData> - Default sidebar configuration
     * 
     * @example
     * ```typescript
     * this.vrDefaultDataService.getSidebarData().subscribe(sidebarData => {
     *   this.sidebarConfig = sidebarData;
     * });
     * ```
     */
    getSidebarData(): Observable<SidebarData> {
      return of(this.sidebarDataService.getDefaultSidebar());
    }

  /**
   * Retrieves statistics cards with financial and user metrics.
   * 
   * Returns statistics cards including:
   * - Today's money with percentage growth
   * - Today's users with weekly comparison
   * - New clients with quarterly tracking
   * - Sales with monthly comparison
   * - Trend indicators and icon colors
   * 
   * @returns Observable<StatsCardData[]> - Array of statistics cards
   * 
   * @example
   * ```typescript
   * this.vrDefaultDataService.getStatsCards().subscribe(cards => {
   *   this.statsCards = cards;
   *   this.todaysMoney = cards.find(card => card.title === "Today's Money");
   *   this.todaysUsers = cards.find(card => card.title === "Today's Users");
   *   this.newClients = cards.find(card => card.title === 'New Clients');
   *   this.sales = cards.find(card => card.title === 'Sales');
   *   this.upwardTrends = cards.filter(card => card.trend === 'up');
   *   this.downwardTrends = cards.filter(card => card.trend === 'down');
   * });
   * ```
   */
  getStatsCards(): Observable<StatsCardData[]> {
    return of([
      {
        title: "Today's Money",
        value: '$53,000',
        percentage: '+55%',
        description: 'since yesterday',
        icon: 'ni-money-coins',
        trend: 'up',
        iconColor: 'blue'
      },
      {
        title: "Today's Users",
        value: '2,300',
        percentage: '+3%',
        description: 'since last week',
        icon: 'ni-world',
        trend: 'up',
        iconColor: 'red'
      },
      {
        title: 'New Clients',
        value: '+3,462',
        percentage: '-2%',
        description: 'since last quarter',
        icon: 'ni-paper-diploma',
        trend: 'down',
        iconColor: 'green'
      },
      {
        title: 'Sales',
        value: '$103,430',
        percentage: '+5%',
        description: 'than last month',
        icon: 'ni-cart',
        trend: 'up',
        iconColor: 'orange'
      }
    ]);
  }

  /**
   * Retrieves team member information with status indicators.
   * 
   * Returns team member data including:
   * - Member names and profile avatars
   * - Status information (Online, In Meeting, Offline)
   * - Status color coding for visual indicators
   * - Member identification and management
   * 
   * @returns Observable<TeamMember[]> - Array of team members
   * 
   * @example
   * ```typescript
   * this.vrDefaultDataService.getTeamMembers().subscribe(members => {
   *   this.teamMembers = members;
   *   this.onlineMembers = members.filter(member => member.status === 'Online');
   *   this.inMeetingMembers = members.filter(member => member.status === 'In Meeting');
   *   this.offlineMembers = members.filter(member => member.status === 'Offline');
   *   this.johnMichael = members.find(member => member.name === 'John Michael');
   *   this.alexSmith = members.find(member => member.name === 'Alex Smith');
   *   this.samanthaIvy = members.find(member => member.name === 'Samantha Ivy');
   * });
   * ```
   */
  getTeamMembers(): Observable<TeamMember[]> {
    return of([
      {
        id: 1,
        name: 'John Michael',
        avatar: 'assets/img/team-1.jpg',
        status: 'Online',
        statusColor: 'text-emerald-600 bg-emerald-200'
      },
      {
        id: 2,
        name: 'Alex Smith',
        avatar: 'assets/img/team-2.jpg',
        status: 'In Meeting',
        statusColor: 'text-orange-600 bg-orange-200'
      },
      {
        id: 3,
        name: 'Samantha Ivy',
        avatar: 'assets/img/team-5.jpg',
        status: 'Offline',
        statusColor: 'text-red-600 bg-red-200'
      },
      {
        id: 4,
        name: 'John Michael',
        avatar: 'assets/img/team-4.jpg',
        status: 'Online',
        statusColor: 'text-emerald-600 bg-emerald-200'
      }
    ]);
  }

  /**
   * Retrieves todo list items with completion tracking.
   * 
   * Returns todo items including:
   * - Task titles and scheduled times
   * - Completion status tracking
   * - Task identification and management
   * - Meeting and event scheduling
   * 
   * @returns Observable<TodoItem[]> - Array of todo items
   * 
   * @example
   * ```typescript
   * this.vrDefaultDataService.getTodoItems().subscribe(items => {
   *   this.todoItems = items;
   *   this.completedTasks = items.filter(item => item.completed);
   *   this.pendingTasks = items.filter(item => !item.completed);
   *   this.callWithDave = items.find(item => item.title === 'Call with Dave');
   *   this.brunchMeeting = items.find(item => item.title === 'Brunch Meeting');
   *   this.argonLaunch = items.find(item => item.title === 'Argon Dashboard Launch');
   *   this.winterHackathon = items.find(item => item.title === 'Winter Hackaton');
   * });
   * ```
   */
  getTodoItems(): Observable<TodoItem[]> {
    return of([
      {
        id: 1,
        title: 'Call with Dave',
        time: '09:30 AM',
        completed: true
      },
      {
        id: 2,
        title: 'Brunch Meeting',
        time: '11:00 AM',
        completed: false
      },
      {
        id: 3,
        title: 'Argon Dashboard Launch',
        time: '02:00 PM',
        completed: false
      },
      {
        id: 4,
        title: 'Winter Hackaton',
        time: '10:30 AM',
        completed: true
      }
    ]);
  }

  /**
   * Retrieves progress tracking data for various projects.
   * 
   * Returns progress items including:
   * - Project names and associated logos
   * - Progress percentages with color coding
   * - Project identification and management
   * - Development and design project tracking
   * 
   * @returns Observable<ProgressItem[]> - Array of progress items
   * 
   * @example
   * ```typescript
   * this.vrDefaultDataService.getProgressItems().subscribe(items => {
   *   this.progressItems = items;
   *   this.reactDashboard = items.find(item => item.name === 'React Material Dashboard');
   *   this.argonDesign = items.find(item => item.name === 'Argon Design System');
   *   this.vueJsKit = items.find(item => item.name === 'VueJs Now UI Kit PRO');
   *   this.softUIDashboard = items.find(item => item.name === 'Soft UI Dashboard');
   *   this.completedProjects = items.filter(item => item.progress === 100);
   *   this.inProgressProjects = items.filter(item => item.progress < 100);
   *   this.highProgressProjects = items.filter(item => item.progress >= 80);
   * });
   * ```
   */
  getProgressItems(): Observable<ProgressItem[]> {
    return of([
      {
        id: 1,
        name: 'React Material Dashboard',
        logo: 'assets/img/small-logos/logo-jira.svg',
        progress: 90,
        progressColor: 'bg-blue-500'
      },
      {
        id: 2,
        name: 'Argon Design System',
        logo: 'assets/img/small-logos/logo-asana.svg',
        progress: 60,
        progressColor: 'bg-orange-500'
      },
      {
        id: 3,
        name: 'VueJs Now UI Kit PRO',
        logo: 'assets/img/small-logos/logo-spotify.svg',
        progress: 100,
        progressColor: 'bg-emerald-500'
      },
      {
        id: 4,
        name: 'Soft UI Dashboard',
        logo: 'assets/img/small-logos/bootstrap.svg',
        progress: 72,
        progressColor: 'bg-blue-500'
      }
    ]);
  }

  /**
   * Retrieves general statistics for user overview.
   * 
   * Returns general stats including:
   * - Total user count with formatting
   * - Description for context
   * - User overview information
   * 
   * @returns Observable<{ totalUsers: string; description: string }> - General statistics
   * 
   * @example
   * ```typescript
   * this.vrDefaultDataService.getGeneralStats().subscribe(stats => {
   *   this.totalUsers = stats.totalUsers; // "1,600,000"
   *   this.description = stats.description; // "All users"
   *   this.userCount = parseInt(stats.totalUsers.replace(/,/g, ''));
   * });
   * ```
   */
  getGeneralStats(): Observable<{ totalUsers: string; description: string }> {
    return of({
      totalUsers: '1,600,000',
      description: 'All users'
    });
  }

  /**
   * Retrieves navbar configuration data with breadcrumbs and notifications.
   * 
   * Returns navbar data including:
   * - Breadcrumb navigation with icon, title, and section
   * - Search functionality configuration
   * - User authentication elements (Sign In, config, bell)
   * - Sample notification list with avatars, titles, and timestamps
   * 
   * @returns Observable<NavbarData> - Navbar configuration with notifications
   * 
   * @example
   * ```typescript
   * this.vrDefaultDataService.getNavbarData().subscribe(navbarData => {
   *   this.breadcrumb = navbarData.breadcrumbTitle; // "VR Default"
   *   this.notifications = navbarData.notifications;
   * });
   * ```
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'VR Default',
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
} 
