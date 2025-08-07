import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';
import { TeamsDataService } from '../../../../services/teams-data.service';
import { SidebarComponent, SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { ProfileHeaderComponent, ProfileHeaderWidgetData } from '../../../../components/headers/profile-header/profile-header';
import { StoriesComponent, Story } from '../../../../components/widgets/stories-widget/stories-widget';
import { ActivityFeedComponent, ActivityPost } from '../../../../components/widgets/activity-feed-widget/activity-feed-widget';
import { TeamCardsComponent, TeamCard } from '../../../../components/widgets/team-cards-widget/team-cards-widget';
import { MeetingsComponent, Meeting } from '../../../../components/widgets/meetings-widget/meetings-widget';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';

/**
 * Teams Component
 * 
 * This component implements the teams management page for the application.
 * It provides a comprehensive interface for team collaboration, member
 * management, activity tracking, and team communication in a complete
 * dashboard layout with various team-related widgets and features.
 * 
 * Features:
 * - Profile header with team member information and settings
 * - Stories widget for team updates and announcements
 * - Activity feed showing recent team activities and posts
 * - Team cards displaying member information and roles
 * - Meetings widget for scheduling and managing team meetings
 * - Sidebar navigation for easy access to other sections
 * - Footer with additional navigation options
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Perfect scrollbar for smooth navigation
 * - Team data management through dedicated service
 * - Real-time activity tracking and updates
 * 
 * The component serves as a comprehensive team collaboration interface,
 * providing team leaders and members with tools to manage team activities,
 * track member contributions, schedule meetings, and maintain effective
 * communication in an organized and user-friendly layout.
 * 
 * @example
 * ```html
 * <app-teams></app-teams>
 * ```
 */
@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    FooterComponent,
    PerfectScrollbarDirective,
    ProfileHeaderComponent,
    StoriesComponent,
    ActivityFeedComponent,
    TeamCardsComponent,
    MeetingsComponent,
    ArgonConfiguratorComponent
  ],
  templateUrl: './teams.html'
})
export class TeamsComponent {
  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for profile header widget data */
  profileHeaderData$: Observable<ProfileHeaderWidgetData>;
  
  /** Observable for stories data */
  storiesData$: Observable<Story[]>;
  
  /** Observable for activity feed data */
  activityFeedData$: Observable<ActivityPost[]>;
  
  /** Observable for team cards data */
  teamCardsData$: Observable<TeamCard[]>;
  
  /** Observable for meetings data */
  meetingsData$: Observable<Meeting[]>;

  /**
   * Creates an instance of TeamsComponent.
   * 
   * Initializes the component by subscribing to data streams from TeamsDataService
   * for sidebar configuration, profile header, stories, activity feed, team cards,
   * and meetings data.
   * 
   * @param teamsDataService - Service for managing teams data and collaboration features
   */
  constructor(private teamsDataService: TeamsDataService) {
    this.sidebarData$ = this.teamsDataService.getSidebarData();
    this.profileHeaderData$ = this.teamsDataService.getProfileData();
    this.storiesData$ = this.teamsDataService.getStories();
    this.activityFeedData$ = this.teamsDataService.getActivityFeed();
    this.teamCardsData$ = this.teamsDataService.getTeamCards();
    this.meetingsData$ = this.teamsDataService.getMeetings();
  }
} 