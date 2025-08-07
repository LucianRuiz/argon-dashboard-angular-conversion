import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';
import { CalendarWidgetData} from '../components/widgets/calendar-widget/calendar-widget';
import { UpcomingEventsWidgetData } from '../components/widgets/upcoming-events-widget/upcoming-events-widget';
import { IncomeChartWidgetData } from '../components/charts/income-chart-widget/income-chart-widget';
import { TeamMembersHeaderData } from '../components/headers/team-members-header/team-members-header';

/**
 * CalendarDataService
 *
 * This Angular service provides mock data and utility methods for the Calendar application module.
 * It supplies data for the sidebar, navbar, calendar widget, upcoming events, productivity section,
 * and team members.
 * 
 * The service manages:
 * - Calendar events and scheduling information
 * - Upcoming events with icons and styling
 * - Productivity metrics and charts
 * - Team member information and avatars
 * - Navigation components (sidebar, navbar)
 * 
 * The service is intended for demo and UI prototyping purposes, simulating backend 
 * responses for the calendar application.
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({
  providedIn: 'root'
})
export class CalendarDataService {
  
  /**
   * Creates an instance of CalendarDataService.
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
   * Retrieves navbar data specifically configured for the Calendar page.
   * 
   * @returns Observable<NavbarData> - Observable containing navbar configuration with breadcrumbs,
   *          search placeholder, and notifications
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Calendar',
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
   * Retrieves calendar widget data for displaying events and appointments.
   * 
   * @returns Observable<CalendarWidgetData> - Observable containing calendar configuration
   *          with current date, events list, and styling classes
   */
  getCalendarData(): Observable<CalendarWidgetData> {
    return of({
      title: 'Calendar',
      currentDate: new Date(),
      type: 'main',
      showHeaderToolbar: true,
      initialDate: '2021-12-01',
      events: [
        {
          date: '2021-11-18',
          title: 'Call with Dave',
          className: 'bg-gradient-to-tl from-red-600 to-orange-600'
        },
        {
          date: '2021-11-21',
          title: 'Lunch meeting',
          className: 'bg-gradient-to-tl from-orange-500 to-yellow-500'
        },
        {
          date: '2021-11-29',
          title: 'All day conference',
          className: 'bg-gradient-to-tl from-emerald-500 to-teal-400'
        },
        {
          date: '2021-12-01',
          title: 'Meeting with Mary',
          className: 'bg-gradient-to-tl from-blue-700 to-cyan-500'
        },
        {
          date: '2021-12-02',
          title: 'Cyber Week',
          className: 'bg-gradient-to-tl from-orange-500 to-yellow-500'
        },
        {
          date: '2021-12-03',
          title: 'Winter Hackaton',
          className: 'bg-gradient-to-tl from-red-600 to-orange-600'
        },
        {
          date: '2021-12-07',
          title: 'Digital event',
          className: 'bg-gradient-to-tl from-orange-500 to-yellow-500'
        },
        {
          date: '2021-12-10',
          title: 'Marketing event',
          className: 'bg-gradient-to-tl from-blue-500 to-violet-500'
        },
        {
          date: '2021-12-19',
          title: 'Dinner with Family',
          className: 'bg-gradient-to-tl from-red-600 to-orange-600'
        },
        {
          date: '2021-12-23',
          title: 'Black Friday',
          className: 'bg-gradient-to-tl from-blue-700 to-cyan-500'
        }
      ]
    });
  }

  /**
   * Retrieves upcoming events data for displaying scheduled activities.
   * 
   * @returns Observable<UpcomingEventsWidgetData> - Observable containing upcoming events list
   *          with icons, titles, dates, and gradient styling
   */
  getUpcomingEventsData(): Observable<UpcomingEventsWidgetData> {
    return of({
      title: 'Next events',
      subtitle: '',
      events: [
        {
          icon: 'ni ni-money-coins',
          iconColor: 'text-transparent bg-clip-text bg-gradient-to-tl from-red-600 to-orange-600',
          title: 'Cyber Week',
          date: '21 March 2021, at 12:30 PM'
        },
        {
          icon: 'ni ni-bell-55',
          iconColor: 'text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500',
          title: 'Meeting with Marry',
          date: '24 March 2021, at 10:00 PM'
        },
        {
          icon: 'ni ni-books',
          iconColor: 'text-transparent bg-clip-text bg-gradient-to-tl from-emerald-500 to-teal-400',
          title: 'Book Deposit Hall',
          date: '25 March 2021, at 9:30 AM'
        },
        {
          icon: 'ni ni-delivery-fast',
          iconColor: 'text-transparent bg-clip-text bg-gradient-to-tl from-orange-500 to-yellow-500',
          title: 'Shipment Deal UK',
          date: '25 March 2021, at 2:00 PM'
        },
        {
          icon: 'ni ni-palette',
          iconColor: 'text-transparent bg-clip-text bg-gradient-to-tl from-blue-700 to-cyan-500',
          title: 'Verify Dashboard Color Palette',
          date: '26 March 2021, at 9:00 AM'
        }
      ]
    });
  }

  /**
   * Retrieves productivity data for displaying performance metrics and charts.
   * 
   * @returns Observable<IncomeChartWidgetData> - Observable containing productivity metrics
   *          with percentage values, chart configuration, and dropdown options
   */
  getProductivityData(): Observable<IncomeChartWidgetData> {
    return of({
      title: 'Productivity',
      value: '4% more',
      percentage: 'in 2021',
      percentageColor: 'text-emerald-500',
      chartId: 'chart-line-3',
      backgroundGradient: 'bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 dark:shadow-dark-xl',
      titleColor: 'text-white',
      textColor: 'text-white',
      dropdownIconColor: 'text-white',
      dropdownItems: [
        { text: 'Action', href: 'javascript:;' },
        { text: 'Another action', href: 'javascript:;' },
        { text: 'Something else here', href: 'javascript:;' }
      ],
      chartData: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Visitors',
          data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
          backgroundColor: 'rgba(255,255,255,0.3)',
          borderColor: '#fff',
          tension: 0.5,
          borderWidth: 2,
          pointRadius: 0,
          maxBarThickness: 6,
          fill: true
        }]
      }
    });
  }

  /**
   * Retrieves team members data for displaying team information and avatars.
   * 
   * @returns Observable<TeamMembersHeaderData> - Observable containing team members list
   *          with profile images and member information
   */
  getTeamMembersData(): Observable<TeamMembersHeaderData> {
    return of({
      title: 'Team members:',
      members: [
        { image: './assets/img/team-1.jpg' },
        { image: './assets/img/team-2.jpg' },
        { image: './assets/img/team-3.jpg' },
        { image: './assets/img/team-4.jpg' },
        { image: './assets/img/team-5.jpg' }
      ]
    });
  }
} 
