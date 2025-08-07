import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';
import { ProjectsDataService } from '../../../../services/projects-data.service';
import { Project } from '../../../../components/lists/all-projects/all-projects';
import { SidebarComponent, SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { ProfileHeaderComponent, ProfileHeaderWidgetData } from '../../../../components/headers/profile-header/profile-header';
import { AllProjectsComponent } from '../../../../components/lists/all-projects/all-projects';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';

/**
 * Projects Component
 * 
 * This component implements the user projects page for the application.
 * It provides a comprehensive interface for viewing and managing user-specific
 * projects, displaying project information, status, and progress in a complete
 * dashboard layout with profile integration and project management features.
 * 
 * Features:
 * - Profile header with user information and project statistics
 * - All projects widget displaying comprehensive project listings
 * - Project status tracking and progress indicators
 * - Project filtering and search capabilities
 * - Sidebar navigation for easy access to other sections
 * - Footer with additional navigation options
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Perfect scrollbar for smooth navigation
 * - Project data management through dedicated service
 * - User-specific project filtering and organization
 * 
 * The component serves as a comprehensive project management interface for
 * individual users, providing them with a complete view of their projects,
 * progress tracking, and project management capabilities in an organized
 * and user-friendly layout.
 * 
 * @example
 * ```html
 * <app-projects></app-projects>
 * ```
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    FooterComponent,
    PerfectScrollbarDirective,
    ProfileHeaderComponent,
    AllProjectsComponent,
    ArgonConfiguratorComponent
  ],
  templateUrl: './projects.html'
})
export class ProjectsComponent {
  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for profile header widget data */
  profileHeaderData$: Observable<ProfileHeaderWidgetData>;
  
  /** Observable for projects data */
  projectsData$: Observable<Project[]>;

  /**
   * Creates an instance of ProjectsComponent.
   * 
   * Initializes the component by subscribing to data streams from ProjectsDataService
   * for sidebar configuration, profile header, and projects data.
   * 
   * @param projectsDataService - Service for managing projects data and user-specific project information
   */
  constructor(private projectsDataService: ProjectsDataService) {
    this.sidebarData$ = this.projectsDataService.getSidebarData();
    this.profileHeaderData$ = this.projectsDataService.getProfileData();
    this.projectsData$ = this.projectsDataService.getProjects();
  }
} 