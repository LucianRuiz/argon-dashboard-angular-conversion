import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SidebarComponent, SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { NavbarComponent, NavbarData } from '../../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';
import { NewProjectFormComponent, NewProjectFormData } from '../../../../components/forms/new-project-form/new-project-form';
import { NewProjectDataService } from '../../../../services/new-project-data.service';

/**
 * New Project Component
 * 
 * This component implements the new project creation page for the application.
 * It provides a comprehensive form interface for creating new projects with
 * various configuration options, team assignments, and project details in a
 * complete dashboard layout with proper navigation and form validation.
 * 
 * Features:
 * - Complete project creation form with multiple sections
 * - Project information collection and validation
 * - Team assignment and member management
 * - Project timeline and milestone planning
 * - Budget and resource allocation
 * - Project category and priority settings
 * - Sidebar navigation for easy access to other sections
 * - Navbar with breadcrumb navigation
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Perfect scrollbar for smooth navigation
 * - Form validation and error handling
 * - Project data management through dedicated service
 * 
 * The component serves as a comprehensive project creation interface, providing
 * project managers and administrators with a structured workflow to create
 * new projects with all necessary information, team assignments, timelines,
 * and configurations in an organized and user-friendly manner.
 * 
 * @example
 * ```html
 * <app-new-project></app-new-project>
 * ```
 */
@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    PerfectScrollbarDirective,
    ArgonConfiguratorComponent,
    NewProjectFormComponent
  ],
  templateUrl: './new-project.html'
})
export class NewProjectComponent {

  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;
  
  /** Observable for new project form data */
  newProjectFormData$: Observable<NewProjectFormData>;

  /**
   * Creates an instance of NewProjectComponent.
   * 
   * Initializes the component by subscribing to data streams from NewProjectDataService
   * for sidebar configuration, navbar configuration, and new project form data.
   * 
   * @param newProjectDataService - Service for managing new project data and form configurations
   */
  constructor(private newProjectDataService: NewProjectDataService) {
    this.sidebarData$ = this.newProjectDataService.getSidebarData();
    this.navbarData$ = this.newProjectDataService.getNavbarData();
    this.newProjectFormData$ = this.newProjectDataService.getNewProjectFormData();
  }
} 