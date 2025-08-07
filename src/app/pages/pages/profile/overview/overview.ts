import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';
import { SidebarComponent, SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';
import { ProfileHeaderComponent } from '../../../../components/headers/profile-header/profile-header';
import { PlatformSettingsComponent } from '../../../../components/forms/platform-settings/platform-settings';
import { ProfileInformationComponent } from '../../../../components/sections/profile-information/profile-information';
import { ConversationsComponent } from '../../../../components/widgets/conversations/conversations';
import { ProjectsListComponent } from '../../../../components/lists/projects-list/projects-list';
import { ProfileOverviewDataService } from '../../../../services/profile-overview-data.service';
import { Observable } from 'rxjs';

/**
 * Profile Overview Component
 * 
 * This component implements the main user profile overview page for the application.
 * It provides a comprehensive interface for user profile management, platform
 * settings, personal information, conversations, and project listings in a
 * complete dashboard layout with integrated profile widgets and features.
 * 
 * Features:
 * - Profile header with background image and tab navigation
 * - Platform settings widget with interactive switches and configurations
 * - Profile information widget with user data and personal details
 * - Conversations widget with message list and chat functionality
 * - Projects list widget with project cards and grid layout
 * - Sidebar navigation for easy access to other sections
 * - Footer with additional navigation options
 * - Integration with Argon configurator for customization
 * - Responsive design with Tailwind CSS
 * - Perfect scrollbar for smooth navigation
 * - Profile data management through dedicated service
 * - User settings and preferences management
 * 
 * The component serves as a comprehensive user profile interface, providing
 * users with complete control over their profile information, platform
 * settings, communication tools, and project management in an organized
 * and user-friendly layout with integrated functionality.
 * 
 * @example
 * ```html
 * <app-profile-overview></app-profile-overview>
 * ```
 */
@Component({
  selector: 'app-profile-overview',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    FooterComponent,
    PerfectScrollbarDirective,
    ArgonConfiguratorComponent,
    ProfileHeaderComponent,
    PlatformSettingsComponent,
    ProfileInformationComponent,
    ConversationsComponent,
    ProjectsListComponent
  ],
  templateUrl: './overview.html'
})
export class ProfileOverviewComponent {
  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for profile header widget data */
  profileHeader$: Observable<any>;
  
  /** Observable for platform settings widget data */
  platformSettingsWidget$: Observable<any>;
  
  /** Observable for profile information widget data */
  profileInformationWidget$: Observable<any>;
  
  /** Observable for conversations widget data */
  conversationsWidget$: Observable<any>;
  
  /** Observable for projects list widget data */
  projectsListWidget$: Observable<any>;

  /**
   * Creates an instance of ProfileOverviewComponent.
   * 
   * Initializes the component by subscribing to data streams from ProfileOverviewDataService
   * for sidebar configuration, profile header, platform settings, profile information,
   * conversations, and projects list data.
   * 
   * @param profileOverviewDataService - Service for managing profile overview data and user information
   */
  constructor(private profileOverviewDataService: ProfileOverviewDataService) {
    this.sidebarData$ = this.profileOverviewDataService.getSidebarData();
    this.profileHeader$ = this.profileOverviewDataService.getProfileHeaderWidget();
    this.platformSettingsWidget$ = this.profileOverviewDataService.getPlatformSettingsWidget();
    this.profileInformationWidget$ = this.profileOverviewDataService.getProfileInformationWidget();
    this.conversationsWidget$ = this.profileOverviewDataService.getConversationsWidget();
    this.projectsListWidget$ = this.profileOverviewDataService.getProjectsListWidget();
  }
} 