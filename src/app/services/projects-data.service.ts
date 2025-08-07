import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { ProfileHeaderWidgetData } from '../components/headers/profile-header/profile-header';
import { Project, TeamMember, DropdownItem } from '../components/lists/all-projects/all-projects';

/**
 * ProjectsDataService
 * 
 * Provides mock data and configuration for the Projects page. This service supplies
 * comprehensive project management data including project listings, team member
 * information, project descriptions, and collaboration details. The service is designed
 * for demo and UI prototyping purposes, simulating backend responses for project
 * management functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the projects page
 * - Profile header with user information and navigation tabs
 * - Complete project catalog with 6 diverse projects
 * - Team member information with avatars and roles
 * - Project descriptions and due dates
 * - Collaboration and participant tracking
 * 
 * @example
 * ```typescript
 * constructor(private projectsDataService: ProjectsDataService) {}
 * 
 * ngOnInit() {
 *   this.projectsDataService.getProjects().subscribe(projects => {
 *     this.projectList = projects;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar configuration data for the projects page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the projects interface.
   * 
   * @returns Observable<SidebarData> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.projectsDataService.getSidebarData().subscribe(sidebarData => {
   *   this.sidebarConfig = sidebarData;
   * });
   * ```
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves profile header widget data with user information and navigation tabs.
   * 
   * Returns profile header configuration including:
   * - User profile image and basic information
   * - Navigation tabs for different sections (App, Messages, Settings)
   * - Active tab state management
   * - User position and role information
   * 
   * @returns Observable<ProfileHeaderWidgetData> - Profile header configuration
   * 
   * @example
   * ```typescript
   * this.projectsDataService.getProfileData().subscribe(profileData => {
   *   this.userProfile = profileData;
   *   this.activeTab = profileData.tabs.find(tab => tab.active)?.id;
   *   this.userName = profileData.name;
   *   this.userPosition = profileData.position;
   * });
   * ```
   */
  getProfileData(): Observable<ProfileHeaderWidgetData> {
    return of({
      profileImage: '/assets/img/team-1.jpg',
      name: 'Sayo Kravits',
      position: 'Public Relations',
      tabs: [
        { id: 'app', label: 'App', icon: 'ni ni-app', active: true },
        { id: 'messages', label: 'Messages', icon: 'ni ni-email-83', active: false },
        { id: 'settings', label: 'Settings', icon: 'ni ni-settings-gear-65', active: false }
      ]
    });
  }

  /**
   * Retrieves the complete project catalog with detailed project information.
   * 
   * Returns an array of 6 projects including:
   * - Project names, descriptions, and logos
   * - Team member information with avatars
   * - Participant counts and due dates
   * - Project categories and status information
   * - Collaboration and team management data
   * 
   * @returns Observable<Project[]> - Complete project catalog
   * 
   * @example
   * ```typescript
   * this.projectsDataService.getProjects().subscribe(projects => {
   *   this.allProjects = projects;
   *   this.activeProjects = projects.filter(p => new Date(p.dueDate) > new Date());
   *   this.teamMembers = projects.flatMap(project => project.teamMembers);
   *   this.totalParticipants = projects.reduce((sum, project) => sum + project.participants, 0);
   * });
   * ```
   */
  getProjects(): Observable<Project[]> {
    return of([
      {
        id: 1,
        name: 'Slack Bot',
        logo: '/assets/img/small-logos/logo-slack.svg',
        description: 'If everything I did failed - which it doesn\'t, I think that it actually succeeds.',
        participants: 5,
        dueDate: '02.03.22',
        teamMembers: [
          { id: 1, name: 'Elena Morison', avatar: '/assets/img/team-3.jpg' },
          { id: 2, name: 'Ryan Milly', avatar: '/assets/img/team-4.jpg' },
          { id: 3, name: 'Nick Daniel', avatar: '/assets/img/team-2.jpg' },
          { id: 4, name: 'Peterson', avatar: '/assets/img/team-3.jpg' },
          { id: 5, name: 'Peterson', avatar: '/assets/img/team-4.jpg' }
        ],
        dropdownItems: [
          { text: 'Action', href: 'javascript:;', action: 'edit' },
          { text: 'Another action', href: 'javascript:;', action: 'duplicate' },
          { text: 'Something else here', href: 'javascript:;', action: 'archive' }
        ]
      },
      {
        id: 2,
        name: 'Premium support',
        logo: '/assets/img/small-logos/logo-spotify.svg',
        description: 'Pink is obviously a better color. Everyone\'s born confident, and everything\'s taken away from you.',
        participants: 3,
        dueDate: '22.11.21',
        teamMembers: [
          { id: 1, name: 'Ryan Milly', avatar: '/assets/img/team-4.jpg' },
          { id: 2, name: 'Elena Morison', avatar: '/assets/img/team-3.jpg' },
          { id: 3, name: 'Nick Daniel', avatar: '/assets/img/team-2.jpg' }
        ],
        dropdownItems: [
          { text: 'Action', href: 'javascript:;', action: 'edit' },
          { text: 'Another action', href: 'javascript:;', action: 'duplicate' },
          { text: 'Something else here', href: 'javascript:;', action: 'archive' }
        ]
      },
      {
        id: 3,
        name: 'Design tools',
        logo: '/assets/img/small-logos/logo-xd.svg',
        description: 'Constantly growing. We\'re constantly making mistakes from which we learn and improve.',
        participants: 4,
        dueDate: '06.03.22',
        teamMembers: [
          { id: 1, name: 'Ryan Milly', avatar: '/assets/img/team-4.jpg' },
          { id: 2, name: 'Nick Daniel', avatar: '/assets/img/team-2.jpg' },
          { id: 3, name: 'Peterson', avatar: '/assets/img/team-3.jpg' },
          { id: 4, name: 'Peterson', avatar: '/assets/img/team-4.jpg' }
        ],
        dropdownItems: [
          { text: 'Action', href: 'javascript:;', action: 'edit' },
          { text: 'Another action', href: 'javascript:;', action: 'duplicate' },
          { text: 'Something else here', href: 'javascript:;', action: 'archive' }
        ]
      },
      {
        id: 4,
        name: 'Looking great',
        logo: '/assets/img/small-logos/logo-asana.svg',
        description: 'You have the opportunity to play this game of life you need to appreciate every moment.',
        participants: 6,
        dueDate: '14.03.24',
        teamMembers: [
          { id: 1, name: 'Elena Morison', avatar: '/assets/img/team-3.jpg' },
          { id: 2, name: 'Ryan Milly', avatar: '/assets/img/team-4.jpg' },
          { id: 3, name: 'Nick Daniel', avatar: '/assets/img/team-2.jpg' },
          { id: 4, name: 'Peterson', avatar: '/assets/img/team-3.jpg' },
          { id: 5, name: 'Peterson', avatar: '/assets/img/team-4.jpg' },
          { id: 6, name: 'Nick Daniel', avatar: '/assets/img/team-2.jpg' }
        ],
        dropdownItems: [
          { text: 'Action', href: 'javascript:;', action: 'edit' },
          { text: 'Another action', href: 'javascript:;', action: 'duplicate' },
          { text: 'Something else here', href: 'javascript:;', action: 'archive' }
        ]
      },
      {
        id: 5,
        name: 'Developer First',
        logo: '/assets/img/small-logos/logo-invision.svg',
        description: 'For standing out. But the time is now to be okay to be the greatest you.',
        participants: 4,
        dueDate: '16.01.22',
        teamMembers: [
          { id: 1, name: 'Ryan Milly', avatar: '/assets/img/team-4.jpg' },
          { id: 2, name: 'Elena Morison', avatar: '/assets/img/team-3.jpg' },
          { id: 3, name: 'Nick Daniel', avatar: '/assets/img/team-2.jpg' },
          { id: 4, name: 'Peterson', avatar: '/assets/img/team-3.jpg' }
        ],
        dropdownItems: [
          { text: 'Action', href: 'javascript:;', action: 'edit' },
          { text: 'Another action', href: 'javascript:;', action: 'duplicate' },
          { text: 'Something else here', href: 'javascript:;', action: 'archive' }
        ]
      },
      {
        id: 6,
        name: 'Product Development',
        logo: '/assets/img/small-logos/logo-atlassian.svg',
        description: 'I\'m going to hire a professional to help me with my social media.',
        participants: 2,
        dueDate: '24.01.22',
        teamMembers: [
          { id: 1, name: 'Ryan Milly', avatar: '/assets/img/team-4.jpg' },
          { id: 2, name: 'Elena Morison', avatar: '/assets/img/team-3.jpg' }
        ],
        dropdownItems: [
          { text: 'Action', href: 'javascript:;', action: 'edit' },
          { text: 'Another action', href: 'javascript:;', action: 'duplicate' },
          { text: 'Something else here', href: 'javascript:;', action: 'archive' }
        ]
      }
    ]);
  }
} 