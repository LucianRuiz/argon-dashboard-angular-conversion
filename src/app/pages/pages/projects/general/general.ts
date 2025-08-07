import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SidebarComponent, SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { NavbarComponent } from '../../../../components/layout/navbar/navbar';
import { NavbarData } from '../../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';
import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';
import { GeneralProjectsDataService } from '../../../../services/general-projects-data.service';
import { StatsCardComponent, StatsCardData } from '../../../../components/cards/stats-card/stats-card';
import { EarningsCardComponent, EarningsCardData } from '../../../../components/cards/earnings-card/earnings-card';
import { RecommendationCardComponent, RecommendationCardData } from '../../../../components/cards/recommendation-card/recommendation-card';
import { TodoListCardComponent, TodoListCardData } from '../../../../components/cards/todo-list-card/todo-list-card';
import { TasksStatsCardComponent, TasksStatsCardData } from '../../../../components/cards/tasks-stats-card/tasks-stats-card';
import { ProjectsStatsCardComponent, ProjectsStatsCardData } from '../../../../components/cards/projects-stats-card/projects-stats-card';

/**
 * General Projects Component
 * 
 * This component implements the main projects overview page for the application.
 * It provides a comprehensive dashboard interface displaying project statistics,
 * earnings data, task management, recommendations, and project performance
 * metrics in a complete layout with various analytical widgets.
 * 
 * Features:
 * - Statistics cards with key project metrics and KPIs
 * - Earnings card with financial performance data
 * - Recommendation card with actionable insights
 * - Todo list card for task management and tracking
 * - Tasks statistics card with progress indicators
 * - Projects statistics card with performance metrics
 * - Sidebar navigation for easy access to other sections
 * - Navbar with search and filtering capabilities
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Perfect scrollbar for smooth navigation
 * - Project data management through dedicated service
 * - Performance optimization with trackBy functions
 * 
 * The component serves as a comprehensive project overview interface, providing
 * project managers, team leaders, and stakeholders with a complete view of
 * project performance, task progress, financial metrics, and actionable
 * recommendations in an organized and analytical dashboard format.
 * 
 * @example
 * ```html
 * <app-general></app-general>
 * ```
 */
@Component({
  selector: 'app-general',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    PerfectScrollbarDirective,
    EarningsCardComponent,
    RecommendationCardComponent,
    TodoListCardComponent,
    TasksStatsCardComponent,
    ProjectsStatsCardComponent,
    StatsCardComponent
  ],
  templateUrl: './general.html'
})
export class GeneralComponent {
  /** Observable for sidebar configuration data */
  public sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  public navbarData$: Observable<NavbarData>;
  
  /** Observable for statistics cards data */
  public statsData$: Observable<StatsCardData[]>;
  
  /** Observable for earnings card data */
  public earningsCardData$: Observable<EarningsCardData>;
  
  /** Observable for recommendation card data */
  public recommendationCardData$: Observable<RecommendationCardData>;
  
  /** Observable for todo list card data */
  public todoListCardData$: Observable<TodoListCardData>;
  
  /** Observable for tasks statistics card data */
  public tasksStatsCardData$: Observable<TasksStatsCardData>;
  
  /** Observable for projects statistics card data */
  public projectsStatsCardData$: Observable<ProjectsStatsCardData>;
  
  /**
   * Creates an instance of GeneralComponent.
   * 
   * Initializes the component by subscribing to data streams from GeneralProjectsDataService
   * for sidebar, navbar, and all project overview widgets including statistics, earnings,
   * recommendations, todo lists, and project performance metrics.
   * 
   * @param dataService - Service for managing general projects data and analytics
   */
  constructor(private dataService: GeneralProjectsDataService) {
    this.sidebarData$ = this.dataService.getSidebarData();
    this.navbarData$ = this.dataService.getNavbarData();
    this.statsData$ = this.dataService.getStatsData();
    this.earningsCardData$ = this.dataService.getEarningsCardData();
    this.recommendationCardData$ = this.dataService.getRecommendationCardData();
    this.todoListCardData$ = this.dataService.getTodoListCardData();
    this.tasksStatsCardData$ = this.dataService.getTasksStatsCardData();
    this.projectsStatsCardData$ = this.dataService.getProjectsStatsCardData();
  }

  /**
   * TrackBy function for stats cards to optimize ngFor performance.
   * 
   * Provides a unique identifier for each stats card item to help Angular
   * optimize rendering performance when the data changes.
   * 
   * @param index - Current index in the array
   * @param item - Current stats card data
   * @returns Unique identifier for the item (title in this case)
   */
  trackByStatsCard(index: number, item: StatsCardData): string {
    return item.title;
  }
} 