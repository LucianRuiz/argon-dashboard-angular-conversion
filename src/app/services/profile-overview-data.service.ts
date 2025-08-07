import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { ProfileHeaderWidgetData } from '../components/headers/profile-header/profile-header';
import { PlatformSettingsWidgetData } from '../components/forms/platform-settings/platform-settings';
import { ProfileInformationWidgetData } from '../components/sections/profile-information/profile-information';
import { ConversationsWidgetData } from '../components/widgets/conversations/conversations';
import { ProjectsListWidgetData } from '../components/lists/projects-list/projects-list';

/**
 * ProfileOverviewDataService
 * 
 * Provides mock data and configuration for the Profile Overview page. This service supplies
 * comprehensive user profile information including personal details, platform settings,
 * conversations, and project management. The service is designed for demo and UI prototyping
 * purposes, simulating backend responses for user profile management functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the profile overview page
 * - Profile header with user information and navigation tabs
 * - Platform settings with notification preferences
 * - Profile information with personal details and social links
 * - Conversations widget with recent messages
 * - Projects list with team collaboration data
 * 
 * @example
 * ```typescript
 * constructor(private profileOverviewDataService: ProfileOverviewDataService) {}
 * 
 * ngOnInit() {
 *   this.profileOverviewDataService.getProfileHeaderWidget().subscribe(headerData => {
 *     this.profileHeader = headerData;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class ProfileOverviewDataService {
  
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar configuration data for the profile overview page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the profile overview interface.
   * 
   * @returns Observable<SidebarData> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.profileOverviewDataService.getSidebarData().subscribe(sidebarData => {
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
   * this.profileOverviewDataService.getProfileHeaderWidget().subscribe(headerData => {
   *   this.userProfile = headerData;
   *   this.activeTab = headerData.tabs.find(tab => tab.active)?.id;
   *   this.userName = headerData.name;
   *   this.userPosition = headerData.position;
   * });
   * ```
   */
  getProfileHeaderWidget(): Observable<ProfileHeaderWidgetData> {
    return of({
      profileImage: 'assets/img/team-1.jpg',
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
   * Retrieves platform settings widget data with notification preferences.
   * 
   * Returns platform settings configuration including:
   * - Account settings with email notification preferences
   * - Application settings with feature toggles
   * - Checkbox states for various settings
   * - User preference management
   * 
   * @returns Observable<PlatformSettingsWidgetData> - Platform settings configuration
   * 
   * @example
   * ```typescript
   * this.profileOverviewDataService.getPlatformSettingsWidget().subscribe(settingsData => {
   *   this.accountSettings = settingsData.accountSettings;
   *   this.applicationSettings = settingsData.applicationSettings;
   *   this.enabledNotifications = settingsData.accountSettings.filter(setting => setting.checked);
   * });
   * ```
   */
  getPlatformSettingsWidget(): Observable<PlatformSettingsWidgetData> {
    return of({
      title: 'Platform Settings',
      accountSettings: [
        { id: 'follow-notifications', label: 'Email me when someone follows me', checked: true },
        { id: 'answer-notifications', label: 'Email me when someone answers on my post', checked: false },
        { id: 'mention-notifications', label: 'Email me when someone mentions me', checked: true }
      ],
      applicationSettings: [
        { id: 'new-launches', label: 'New launches and projects', checked: false },
        { id: 'monthly-updates', label: 'Monthly product updates', checked: true },
        { id: 'newsletter', label: 'Subscribe to newsletter', checked: false }
      ]
    });
  }

  /**
   * Retrieves profile information widget data with personal details and social links.
   * 
   * Returns profile information configuration including:
   * - Personal description and bio
   * - Contact information (name, mobile, email, location)
   * - Social media links with platform-specific styling
   * - User biography and personal statement
   * 
   * @returns Observable<ProfileInformationWidgetData> - Profile information configuration
   * 
   * @example
   * ```typescript
   * this.profileOverviewDataService.getProfileInformationWidget().subscribe(infoData => {
   *   this.personalInfo = infoData.personalInfo;
   *   this.socialLinks = infoData.socialLinks;
   *   this.userBio = infoData.description;
   *   this.contactInfo = infoData.personalInfo.find(info => info.label === 'Email');
   * });
   * ```
   */
  getProfileInformationWidget(): Observable<ProfileInformationWidgetData> {
    return of({
      title: 'Profile Information',
      description: 'Hi, I\'m Alec Thompson, Decisions: If you can\'t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
      personalInfo: [
        { label: 'Full Name', value: 'Alec M. Thompson' },
        { label: 'Mobile', value: '(44) 123 1234 123' },
        { label: 'Email', value: 'alecthompson@mail.com' },
        { label: 'Location', value: 'USA' }
      ],
      socialLinks: [
        { platform: 'facebook', icon: 'fab fa-facebook', url: '#', color: 'text-blue-800' },
        { platform: 'twitter', icon: 'fab fa-twitter', url: '#', color: 'text-sky-600' },
        { platform: 'instagram', icon: 'fab fa-instagram', url: '#', color: 'text-sky-900' }
      ]
    });
  }

  /**
   * Retrieves conversations widget data with recent messages and contacts.
   * 
   * Returns conversations configuration including:
   * - 5 recent conversations with contact information
   * - Message previews and timestamps
   * - Contact avatars and names
   * - Time-based message organization
   * 
   * @returns Observable<ConversationsWidgetData> - Conversations configuration
   * 
   * @example
   * ```typescript
   * this.profileOverviewDataService.getConversationsWidget().subscribe(conversationsData => {
   *   this.recentConversations = conversationsData.conversations;
   *   this.unreadCount = conversationsData.conversations.length;
   *   this.latestMessage = conversationsData.conversations[0];
   * });
   * ```
   */
  getConversationsWidget(): Observable<ConversationsWidgetData> {
    return of({
      title: 'Conversations',
      conversations: [
        {
          id: 1,
          name: 'Sophie B.',
          message: 'Hi! I need more information..',
          avatar: 'assets/img/kal-visuals-square.jpg',
          time: '2 min ago'
        },
        {
          id: 2,
          name: 'Anne Marie',
          message: 'Awesome work, can you..',
          avatar: 'assets/img/marie.jpg',
          time: '5 min ago'
        },
        {
          id: 3,
          name: 'Ivanna',
          message: 'About files I can..',
          avatar: 'assets/img/ivana-square.jpg',
          time: '10 min ago'
        },
        {
          id: 4,
          name: 'Peterson',
          message: 'Have a great afternoon..',
          avatar: 'assets/img/team-4.jpg',
          time: '1 hour ago'
        },
        {
          id: 5,
          name: 'Nick Daniel',
          message: 'Hi! I need more information..',
          avatar: 'assets/img/team-3.jpg',
          time: '2 hours ago'
        }
      ]
    });
  }

  /**
   * Retrieves projects list widget data with team collaboration information.
   * 
   * Returns projects configuration including:
   * - 3 project examples with descriptions
   * - Team member information with avatars
   * - Project categories and status
   * - Add project functionality flag
   * 
   * @returns Observable<ProjectsListWidgetData> - Projects list configuration
   * 
   * @example
   * ```typescript
   * this.profileOverviewDataService.getProjectsListWidget().subscribe(projectsData => {
   *   this.userProjects = projectsData.projects;
   *   this.canAddProject = projectsData.showAddProject;
   *   this.teamMembers = projectsData.projects.flatMap(project => project.teamMembers);
   *   this.activeProjects = projectsData.projects.length;
   * });
   * ```
   */
  getProjectsListWidget(): Observable<ProjectsListWidgetData> {
    return of({
      title: 'Projects',
      description: 'Architects design houses',
      projects: [
        {
          id: 1,
          name: 'Bubbles',
          category: 'Project #1',
          description: 'As Bubble works through a huge amount of internal management turmoil.',
          image: 'assets/img/home-decor-1.jpg',
          teamMembers: [
            { name: 'Elena Morison', avatar: 'assets/img/team-1.jpg' },
            { name: 'Ryan Milly', avatar: 'assets/img/team-2.jpg' },
            { name: 'Nick Daniel', avatar: 'assets/img/team-3.jpg' },
            { name: 'Peterson', avatar: 'assets/img/team-4.jpg' }
          ]
        },
        {
          id: 2,
          name: 'Scandinavian',
          category: 'Project #2',
          description: 'Music is something that every person has his or her own specific opinion about.',
          image: 'assets/img/home-decor-2.jpg',
          teamMembers: [
            { name: 'Nick Daniel', avatar: 'assets/img/team-3.jpg' },
            { name: 'Peterson', avatar: 'assets/img/team-4.jpg' },
            { name: 'Elena Morison', avatar: 'assets/img/team-1.jpg' },
            { name: 'Ryan Milly', avatar: 'assets/img/team-2.jpg' }
          ]
        },
        {
          id: 3,
          name: 'Minimalist',
          category: 'Project #3',
          description: 'Different people have different taste, and various types of music.',
          image: 'assets/img/home-decor-3.jpg',
          teamMembers: [
            { name: 'Peterson', avatar: 'assets/img/team-4.jpg' },
            { name: 'Nick Daniel', avatar: 'assets/img/team-3.jpg' },
            { name: 'Ryan Milly', avatar: 'assets/team-2.jpg' },
            { name: 'Elena Morison', avatar: 'assets/img/team-1.jpg' }
          ]
        }
      ],
      showAddProject: true
    });
  }
} 