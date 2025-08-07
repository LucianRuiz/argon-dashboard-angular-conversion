import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

// Layout Components
import { SidebarComponent, type SidebarData } from '../../../components/layout/sidebar/sidebar';
import { PerfectScrollbarDirective } from '../../../components/layout/sidebar/perfect-scrollbar.directive';
import { NavbarComponent, NavbarData } from '../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../components/layout/argon-configurator/argon-configurator';

// Widget Components
import { CalendarWidgetComponent, CalendarWidgetData } from '../../../components/widgets/calendar-widget/calendar-widget';
import { UpcomingEventsWidgetComponent, UpcomingEventsWidgetData } from '../../../components/widgets/upcoming-events-widget/upcoming-events-widget';
import { IncomeChartWidgetComponent, IncomeChartWidgetData } from '../../../components/charts/income-chart-widget/income-chart-widget';
import { TeamMembersHeaderComponent, TeamMembersHeaderData } from '../../../components/headers/team-members-header/team-members-header';

// Services
import { CalendarDataService } from '../../../services/calendar-data.service';

/**
 * Calendar Application Component
 * 
 * This component implements a comprehensive calendar application that provides
 * event management, scheduling, and team collaboration features. It integrates
 * multiple widgets to create a complete calendar experience with productivity
 * tracking and team member management.
 * 
 * Features:
 * - Interactive calendar widget for event scheduling and viewing
 * - Upcoming events display with event details and notifications
 * - Productivity tracking with income chart visualization
 * - Team member management and collaboration tools
 * - Integration with layout components (sidebar, navbar, footer)
 * - Responsive design with Argon configurator support
 * 
 * The component serves as a central hub for calendar-related activities,
 * providing users with a comprehensive view of their schedule, team activities,
 * and productivity metrics in a single, cohesive interface.
 * 
 * @example
 * ```html
 * <app-calendar></app-calendar>
 * ```
 */
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    PerfectScrollbarDirective,
    NavbarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    CalendarWidgetComponent,
    UpcomingEventsWidgetComponent,
    IncomeChartWidgetComponent,
    TeamMembersHeaderComponent
  ],
  templateUrl: './calendar.html'
})
export class CalendarComponent {

  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;
  
  /** Observable for calendar widget configuration and event data */
  calendarData$: Observable<CalendarWidgetData>;
  
  /** Observable for upcoming events widget data */
  upcomingEventsData$: Observable<UpcomingEventsWidgetData>;
  
  /** Observable for productivity chart data (income visualization) */
  productivityData$: Observable<IncomeChartWidgetData>;
  
  /** Observable for team members header widget data */
  teamMembersData$: Observable<TeamMembersHeaderData>;

  /**
   * Creates an instance of CalendarComponent.
   * 
   * Initializes the component by subscribing to data streams from CalendarDataService
   * for all calendar-related widgets including sidebar, navbar, calendar events,
   * upcoming events, productivity metrics, and team member information.
   * 
   * @param calendarDataService - Service for managing calendar data and widget configurations
   */
  constructor(private calendarDataService: CalendarDataService) {
    this.sidebarData$ = this.calendarDataService.getSidebarData();
    this.navbarData$ = this.calendarDataService.getNavbarData();
    this.calendarData$ = this.calendarDataService.getCalendarData();
    this.upcomingEventsData$ = this.calendarDataService.getUpcomingEventsData();
    this.productivityData$ = this.calendarDataService.getProductivityData();
    this.teamMembersData$ = this.calendarDataService.getTeamMembersData();
  }
} 
