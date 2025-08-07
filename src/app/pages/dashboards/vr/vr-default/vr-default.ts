import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SidebarComponent, SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { NavbarComponent, NavbarData } from '../../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { StatsCardComponent, StatsCardData } from '../../../../components/cards/stats-card/stats-card';
import { TeamMembersComponent, TeamMember } from '../../../../components/lists/team-members/team-members';
import { TodoListComponent, TodoItem } from '../../../../components/lists/todo-list/todo-list';
import { ProgressTrackComponent, ProgressItem } from '../../../../components/widgets/progress-track/progress-track';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';
import { VrDefaultDataService } from '../../../../services/vr-default-data.service';

/**
 * VR Default Dashboard Component
 * 
 * This component implements the default Virtual Reality (VR) dashboard of the Argon Dashboard 2 PRO system.
 * It provides a comprehensive VR-optimized interface that integrates various widgets and cards specifically
 * adapted for virtual reality experiences, including statistics, team management, task tracking, and progress monitoring.
 * 
 * Features:
 * - VR-optimized navbar and sidebar navigation
 * - Interactive statistics cards with real-time data
 * - Team member management and collaboration tools
 * - Task management with todo list functionality
 * - Progress tracking and visualization
 * - Integration with Argon configurator for customization
 * - Responsive design optimized for VR environments
 * 
 * The component serves as the primary VR dashboard interface, providing users with
 * a complete overview of their virtual workspace with all essential tools and
 * information accessible through an immersive VR experience.
 * 
 * @example
 * ```html
 * <app-vr-default></app-vr-default>
 * ```
 */
@Component({
  selector: 'app-vr-default',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    StatsCardComponent,
    TeamMembersComponent,
    TodoListComponent,
    ProgressTrackComponent,
    ArgonConfiguratorComponent
  ],
  templateUrl: './vr-default.html'
})
export class VrDefaultComponent {
  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;
  
  /** Observable for statistics cards data */
  statsCards$: Observable<StatsCardData[]>;
  
  /** Observable for team members data */
  teamMembers$: Observable<TeamMember[]>;
  
  /** Observable for todo items data */
  todoItems$: Observable<TodoItem[]>;
  
  /** Observable for progress tracking items data */
  progressItems$: Observable<ProgressItem[]>;
  
  /** Observable for general statistics data */
  generalStats$: Observable<{ totalUsers: string; description: string }>;

  /**
   * Creates an instance of VrDefaultComponent.
   * 
   * Initializes the component by subscribing to data streams from VrDefaultDataService
   * for all dashboard elements including sidebar, navbar, statistics, team members,
   * todo items, progress tracking, and general statistics.
   * 
   * @param dataService - Service for managing VR default dashboard data and configurations
   */
  constructor(private dataService: VrDefaultDataService) {
    this.sidebarData$ = this.dataService.getSidebarData();
    this.navbarData$ = this.dataService.getNavbarData();
    this.statsCards$ = this.dataService.getStatsCards();
    this.teamMembers$ = this.dataService.getTeamMembers();
    this.todoItems$ = this.dataService.getTodoItems();
    this.progressItems$ = this.dataService.getProgressItems();
    this.generalStats$ = this.dataService.getGeneralStats();
  }

  /**
   * TrackBy function for statistics cards to optimize rendering performance.
   * 
   * Provides a unique identifier for each statistics card to enable Angular's
   * change detection to efficiently update only changed items in the list.
   * 
   * @param index - The index of the item in the array
   * @param card - The statistics card data object
   * @returns A unique string identifier for the card (using the card title)
   */
  trackByStatsCard(index: number, card: StatsCardData): string {
    return card.title;
  }
} 
