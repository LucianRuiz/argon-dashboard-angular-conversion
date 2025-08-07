import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';
import { NewProjectFormData } from '../components/forms/new-project-form/new-project-form';
import { SidebarDataService } from './sidebar-data.service';

/**
 * ========================================
 * NEW PROJECT DATA SERVICE
 * ========================================
 * 
 * This Angular service provides configuration and mock data for the New Project page.
 * It supplies the structure, form data, and navigation data for creating new projects.
 * The service is intended for demo and UI prototyping purposes, simulating backend
 * responses for the new project creation form.
 * 
 * FEATURES:
 * - Complete form data configuration
 * - Sidebar navigation data
 * - Navbar breadcrumb and search data
 * - Observable data streams
 * - TypeScript interfaces for type safety
 * 
 * USAGE:
 * Inject this service into components that need New Project page data.
 * Use the observable methods to get data streams.
 */

@Injectable({
  providedIn: 'root'
})
export class NewProjectDataService {

  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Get sidebar data for the New Project page.
   * Provides navigation structure with active state for Projects section.
   * 
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Get navbar data for the New Project page.
   * Provides breadcrumb navigation and search functionality.
   */
  getNavbarData(): Observable<NavbarData> {
    const navbarData: NavbarData = {
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'New Project',
      breadcrumbSection: 'Pages',
      searchPlaceholder: 'Type here...',
      signInText: 'Sign In',
      signInIcon: 'fa fa-user',
      configIcon: 'fa fa-cog',
      bellIcon: 'fa fa-bell',
      notifications: [
        {
          avatarUrl: './assets/img/team-2.jpg',
          title: 'New message from Laur',
          description: '13 minutes ago',
          time: '13 minutes ago'
        },
        {
          iconSvg: './assets/img/small-logos/logo-spotify.svg',
          title: 'New album by Travis Scott',
          description: '1 day',
          time: '1 day'
        },
        {
          iconSvg: 'credit-card',
          title: 'Payment successfully completed',
          description: '2 days',
          time: '2 days'
        }
      ]
    };

    return of(navbarData);
  }

  /**
   * Get form data for the New Project page.
   * Provides comprehensive configuration for all form fields.
   * 
   * @returns {Observable<NewProjectFormData>} - Observable of form configuration
   */
  getNewProjectFormData(): Observable<NewProjectFormData> {
    const formData: NewProjectFormData = {
      header: {
        title: 'New Project',
        description: 'Create new project'
      },
      projectName: {
        label: 'Project Name',
        placeholder: '',
        value: ''
      },
      privateProject: {
        label: 'Private Project',
        description: 'If you are available for hire outside of the current situation, you can encourage others to hire you.',
        checked: false,
        notification: {
          type: 'orange',
          content: 'Once a project is made private, you cannot revert it to a public project.',
          title: 'Warning',
          icon: 'ni leading-none ni-bell-55'
        }
      },
      projectDescription: {
        label: 'Project Description',
        description: 'This is how others will learn about the project, so make it good!',
        content: '<p>Hello World!</p><p>Some initial <strong>bold</strong> text</p><p><br /></p>'
      },
      projectTags: {
        label: 'Project Tags',
        placeholder: 'Enter something',
        value: 'Choice 1, Label Two'
      },
      dates: {
        startDate: {
          label: 'Start Date',
          placeholder: 'Please select start date',
          value: ''
        },
        endDate: {
          label: 'End Date',
          placeholder: 'Please select end date',
          value: ''
        }
      },
      startingFiles: {
        label: 'Starting Files',
        dropzoneConfig: {
          url: '/file-upload',
          acceptedFiles: '.jpg,.png,.pdf,.doc,.docx',
          maxFiles: 10,
          maxFilesize: 5
        }
      },
      actions: {
        cancel: {
          text: 'Cancel',
          classes: 'bg-gray-200 text-slate-800'
        },
        create: {
          text: 'Create Project',
          classes: 'bg-gradient-to-tl from-blue-500 to-violet-500 text-white'
        }
      }
    };

    return of(formData);
  }
} 