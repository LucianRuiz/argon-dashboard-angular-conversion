import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PerfectScrollbarDirective } from '../../../components/layout/sidebar/perfect-scrollbar.directive';
import { SidebarComponent, SidebarData } from '../../../components/layout/sidebar/sidebar';
import { NavbarComponent, NavbarData } from '../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../components/layout/argon-configurator/argon-configurator';

// Widgets
import { BatteryHealthWidgetComponent, BatteryHealthWidgetData } from '../../../components/widgets/battery-health-widget/battery-health-widget';
import { MusicVolumeWidgetComponent, MusicVolumeWidgetData } from '../../../components/widgets/music-volume-widget/music-volume-widget';
import { IncomeChartWidgetComponent, IncomeChartWidgetData } from '../../../components/charts/income-chart-widget/income-chart-widget';
import { TasksStatsCardComponent, TasksStatsCardData } from '../../../components/cards/tasks-stats-card/tasks-stats-card';
import { UpcomingEventsWidgetComponent, UpcomingEventsWidgetData } from '../../../components/widgets/upcoming-events-widget/upcoming-events-widget';
import { FullBodyWidgetComponent, FullBodyWidgetData } from '../../../components/widgets/full-body-widget/full-body-widget';
import { LightsWidgetComponent, LightsWidgetData } from '../../../components/widgets/lights-widget/lights-widget';
import { CaloriesWidgetComponent, CaloriesWidgetData } from '../../../components/widgets/calories-widget/calories-widget';
import { LocationDistanceWidgetComponent, LocationDistanceWidgetData } from '../../../components/widgets/location-distance-widget/location-distance-widget';
import { StepsWidgetComponent, StepsWidgetData } from '../../../components/steps/steps-widget/steps-widget';

// Reusable components
import { SummaryCardsComponent, SummaryCardsData } from '../../../components/cards/summary-cards/summary-cards';
import { CreditCardVisualComponent, CreditCardVisualData } from '../../../components/cards/credit-card-visual/credit-card-visual';
import { CalendarWidgetComponent, CalendarWidgetData } from '../../../components/widgets/calendar-widget/calendar-widget';
import { CategoriesComponent, CategoryItem } from '../../../components/widgets/categories/categories';
import { TimelineComponent } from '../../../components/widgets/timeline/timeline';
import { VrMusicPlayerComponent, VrMusicPlayerData } from '../../../components/widgets/vr-music-player/vr-music-player';
import { TimelineData } from '../../../components/widgets/timeline-item/timeline-item';
// Services
import { WidgetsDataService } from '../../../services/widgets-data.service';

/**
 * Widgets Component
 * 
 * This component implements a comprehensive widgets showcase page for the application.
 * It provides a demonstration of various UI widgets and components including health
 * monitoring, entertainment controls, financial charts, task management, and lifestyle
 * tracking widgets in a complete dashboard layout.
 * 
 * Features:
 * - Battery health monitoring widget with status indicators
 * - Music volume control with audio visualization
 * - Income chart widget with financial data visualization
 * - Task statistics card with progress tracking
 * - Upcoming events widget with calendar integration
 * - Full body widget for health and fitness tracking
 * - Smart home lights control widget
 * - Calories tracking widget with daily goals
 * - Location and distance tracking widget
 * - Steps counter widget for fitness monitoring
 * - Payment summary cards with transaction data
 * - Credit card visual widget with card details
 * - Calendar widget with event management
 * - Categories widget for content organization
 * - Timeline widget for activity tracking
 * - VR music player widget for immersive experience
 * - Sidebar navigation for easy access to other sections
 * - Navbar with search and filtering capabilities
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * 
 * The component serves as a comprehensive widget showcase, providing developers
 * and users with examples of various UI components and their capabilities,
 * demonstrating the full range of interactive elements available in the
 * application's design system.
 * 
 * @example
 * ```html
 * <app-widgets></app-widgets>
 * ```
 */
@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    PerfectScrollbarDirective,
    ArgonConfiguratorComponent,
    BatteryHealthWidgetComponent,
    MusicVolumeWidgetComponent,
    IncomeChartWidgetComponent,
    TasksStatsCardComponent,
    UpcomingEventsWidgetComponent,
    FullBodyWidgetComponent,
    LightsWidgetComponent,
    CaloriesWidgetComponent,
    LocationDistanceWidgetComponent,
    StepsWidgetComponent,
    SummaryCardsComponent,
    CreditCardVisualComponent,
    CalendarWidgetComponent,
    CategoriesComponent,
    TimelineComponent,
    VrMusicPlayerComponent
  ],
  templateUrl: './widgets.html'
})
export class WidgetsComponent {
  /** Observable for sidebar configuration data */
  public sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  public navbarData$: Observable<NavbarData>;
  
  /** Observable for battery health widget data */
  public batteryHealthData$: Observable<BatteryHealthWidgetData>;
  
  /** Observable for music volume widget data */
  public musicVolumeData$: Observable<MusicVolumeWidgetData>;
  
  /** Observable for income chart widget data */
  public incomeChartData$: Observable<IncomeChartWidgetData>;
  
  /** Observable for tasks statistics card data */
  public tasksChartData$: Observable<TasksStatsCardData>;
  
  /** Observable for upcoming events widget data */
  public upcomingEventsData$: Observable<UpcomingEventsWidgetData>;
  
  /** Observable for full body widget data */
  public fullBodyData$: Observable<FullBodyWidgetData>;
  
  /** Observable for lights widget data */
  public lightsData$: Observable<LightsWidgetData>;
  
  /** Observable for calories widget data */
  public caloriesData$: Observable<CaloriesWidgetData>;
  
  /** Observable for location distance widget data */
  public locationDistanceData$: Observable<LocationDistanceWidgetData>;
  
  /** Observable for steps widget data */
  public stepsData$: Observable<StepsWidgetData>;
  
  /** Observable for payment cards summary data */
  public paymentCardsData$: Observable<SummaryCardsData>;
  
  /** Observable for credit card visual widget data */
  public creditCardData$: Observable<CreditCardVisualData>;
  
  /** Observable for calendar widget data */
  public calendarData$: Observable<CalendarWidgetData>;
  
  /** Observable for categories widget data */
  public categoriesData$: Observable<CategoryItem[]>;
  
  /** Observable for timeline widget data */
  public timelineData$: Observable<TimelineData>;
  
  /** Observable for VR music player widget data */
  public musicPlayerData$: Observable<VrMusicPlayerData>;

  /**
   * Creates an instance of WidgetsComponent.
   * 
   * Initializes the component by subscribing to data streams from WidgetsDataService
   * for sidebar, navbar, and all widget data including health monitoring, entertainment,
   * financial charts, task management, and lifestyle tracking widgets.
   * 
   * @param widgetsDataService - Service for managing widgets data and configurations
   */
  constructor(private widgetsDataService: WidgetsDataService) {
    this.sidebarData$ = this.widgetsDataService.getSidebarData();
    this.navbarData$ = this.widgetsDataService.getNavbarData();
    this.batteryHealthData$ = this.widgetsDataService.getBatteryHealthData();
    this.musicVolumeData$ = this.widgetsDataService.getMusicVolumeData();
    this.incomeChartData$ = this.widgetsDataService.getIncomeChartData();
    this.tasksChartData$ = this.widgetsDataService.getTasksChartData();
    this.upcomingEventsData$ = this.widgetsDataService.getUpcomingEventsData();
    this.fullBodyData$ = this.widgetsDataService.getFullBodyData();
    this.lightsData$ = this.widgetsDataService.getLightsData();
    this.caloriesData$ = this.widgetsDataService.getCaloriesData();
    this.locationDistanceData$ = this.widgetsDataService.getLocationDistanceData();
    this.stepsData$ = this.widgetsDataService.getStepsData();
    this.paymentCardsData$ = this.widgetsDataService.getPaymentCardsData();
    this.creditCardData$ = this.widgetsDataService.getCreditCardData();
    this.calendarData$ = this.widgetsDataService.getCalendarData();
    this.categoriesData$ = this.widgetsDataService.getCategoriesData();
    this.timelineData$ = this.widgetsDataService.getTimelineData();
    this.musicPlayerData$ = this.widgetsDataService.getVrMusicPlayerData();
  }
} 