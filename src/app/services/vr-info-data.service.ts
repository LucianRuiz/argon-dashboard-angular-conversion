import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Interfaces importadas desde los componentes
import { VrWeatherData } from '../components/cards/vr-weather-card/vr-weather-card';
import { VrNavigationData } from '../components/widgets/vr-navigation-panel/vr-navigation-panel';
import { VrScheduleData } from '../components/cards/vr-schedule-card/vr-schedule-card';
import { VrTodoData } from '../components/cards/vr-todo-card/vr-todo-card';
import { VrMusicPlayerData } from '../components/widgets/vr-music-player/vr-music-player';
import { VrMessagesData } from '../components/cards/vr-messages-card/vr-messages-card';
import { VrEmailData } from '../components/cards/vr-email-card/vr-email-card';
import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';

/**
 * VrDataService
 * 
 * Provides mock data and configuration for the Virtual Reality (VR) Info dashboard module.
 * This service supplies comprehensive VR dashboard data including weather information,
 * navigation controls, schedule management, todo lists, music player, messaging,
 * email notifications, and layout configuration. The service is designed for demo
 * and UI prototyping purposes, simulating backend responses for VR info dashboard
 * functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the VR info page
 * - Navbar data with breadcrumbs and notifications
 * - Weather information with temperature and conditions
 * - Navigation panel with profile and control buttons
 * - Schedule data with events and times
 * - Todo list with item counts and tasks
 * - Music player with current track information
 * - Messages with user avatars and notification counts
 * - Email notifications with count and check functionality
 * 
 * @example
 * ```typescript
 * constructor(private vrDataService: VrDataService) {}
 * 
 * ngOnInit() {
 *   this.vrDataService.getVrWeatherData().subscribe(weather => {
 *     this.weatherInfo = weather;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class VrDataService {
  
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar configuration data for the VR info page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the VR info interface.
   * 
   * @returns Observable<SidebarData> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.vrDataService.getSidebarData().subscribe(sidebarData => {
   *   this.sidebarConfig = sidebarData;
   * });
   * ```
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves VR weather information with current conditions.
   * 
   * Returns weather data including:
   * - Current temperature with unit (°C)
   * - Weather condition description
   * - Weather icon for visual representation
   * 
   * @returns Observable<VrWeatherData> - VR weather information
   * 
   * @example
   * ```typescript
   * this.vrDataService.getVrWeatherData().subscribe(weather => {
   *   this.temperature = weather.temperature; // "12°C"
   *   this.condition = weather.condition; // "Cloudy"
   *   this.weatherIcon = weather.icon;
   * });
   * ```
   */
  getVrWeatherData(): Observable<VrWeatherData> {
    return of({
      temperature: '12°C',
      condition: 'Cloudy',
      icon: 'assets/img/small-logos/icon-sun-cloud.png'
    });
  }

  /**
   * Retrieves VR navigation panel data with profile and controls.
   * 
   * Returns navigation data including:
   * - User profile image
   * - Navigation buttons with icons and tooltips
   * - Home, Search, and Minimize functionality
   * 
   * @returns Observable<VrNavigationData> - VR navigation configuration
   * 
   * @example
   * ```typescript
   * this.vrDataService.getVrNavigationData().subscribe(navigation => {
   *   this.profileImage = navigation.profileImage;
   *   this.navigationButtons = navigation.buttons;
   *   this.homeButton = navigation.buttons.find(btn => btn.tooltip === 'Home');
   *   this.searchButton = navigation.buttons.find(btn => btn.tooltip === 'Search');
   *   this.minimizeButton = navigation.buttons.find(btn => btn.tooltip === 'Minimize');
   * });
   * ```
   */
  getVrNavigationData(): Observable<VrNavigationData> {
    return of({
      profileImage: 'assets/img/team-1.jpg',
      buttons: [
        { icon: 'fas fa-home', tooltip: 'Home' },
        { icon: 'fas fa-search', tooltip: 'Search' },
        { icon: 'fas fa-ellipsis-h', tooltip: 'Minimize' }
      ]
    });
  }

  /**
   * Retrieves VR schedule data with events and times.
   * 
   * Returns schedule data including:
   * - Event times and titles
   * - Event subtitles and platforms
   * - Meeting and activity scheduling
   * 
   * @returns Observable<VrScheduleData> - VR schedule configuration
   * 
   * @example
   * ```typescript
   * this.vrDataService.getVrScheduleData().subscribe(schedule => {
   *   this.scheduleEvents = schedule.events;
   *   this.synkMeeting = schedule.events.find(event => event.title === 'Synk up with Mark');
   *   this.gymSession = schedule.events.find(event => event.title === 'Gym');
   *   this.designReview = schedule.events.find(event => event.title === 'Design Review');
   *   this.hangoutsEvents = schedule.events.filter(event => event.subtitle === 'Hangouts');
   *   this.zoomMeetings = schedule.events.filter(event => event.subtitle === 'Zoom');
   * });
   * ```
   */
  getVrScheduleData(): Observable<VrScheduleData> {
    return of({
      events: [
        {
          time: '08:00',
          title: 'Synk up with Mark',
          subtitle: 'Hangouts'
        },
        {
          time: '09:30',
          title: 'Gym',
          subtitle: 'World Class'
        },
        {
          time: '11:00',
          title: 'Design Review',
          subtitle: 'Zoom'
        }
      ]
    });
  }

  /**
   * Retrieves VR todo data with item counts and tasks.
   * 
   * Returns todo data including:
   * - Total number of todo items
   * - List of specific todo tasks
   * - Task management information
   * 
   * @returns Observable<VrTodoData> - VR todo configuration
   * 
   * @example
   * ```typescript
   * this.vrDataService.getVrTodoData().subscribe(todo => {
   *   this.totalTodoItems = todo.totalItems; // 7
   *   this.todoItems = todo.items; // ["Shopping", "Meeting"]
   *   this.shoppingTask = todo.items.find(item => item === 'Shopping');
   *   this.meetingTask = todo.items.find(item => item === 'Meeting');
   * });
   * ```
   */
  getVrTodoData(): Observable<VrTodoData> {
    return of({
      totalItems: 7,
      items: ['Shopping', 'Meeting']
    });
  }

  /**
   * Retrieves VR music player data with current track information.
   * 
   * Returns music player data including:
   * - Current track title and artist
   * - Background image for visual appeal
   * - Music player interface data
   * 
   * @returns Observable<VrMusicPlayerData> - VR music player configuration
   * 
   * @example
   * ```typescript
   * this.vrDataService.getVrMusicPlayerData().subscribe(music => {
   *   this.currentTrack = music.title; // "Some Kind Of Blues"
   *   this.currentArtist = music.artist; // "Deftones"
   *   this.backgroundImage = music.backgroundImage;
   * });
   * ```
   */
  getVrMusicPlayerData(): Observable<VrMusicPlayerData> {
    return of({
      title: 'Some Kind Of Blues',
      artist: 'Deftones',
      backgroundImage: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80'
    });
  }

  /**
   * Retrieves VR messages data with user notifications.
   * 
   * Returns messages data including:
   * - User avatars and message counts
   * - Tooltip information for notifications
   * - Message management interface
   * 
   * @returns Observable<VrMessagesData> - VR messages configuration
   * 
   * @example
   * ```typescript
   * this.vrDataService.getVrMessagesData().subscribe(messages => {
   *   this.messageList = messages.messages;
   *   this.totalNewMessages = messages.messages.reduce((sum, msg) => sum + msg.count, 0);
   *   this.user1Messages = messages.messages.find(msg => msg.count === 2);
   *   this.user2Messages = messages.messages.find(msg => msg.count === 1);
   *   this.user3Messages = messages.messages.find(msg => msg.count === 13);
   *   this.user4Messages = messages.messages.find(msg => msg.count === 7);
   * });
   * ```
   */
  getVrMessagesData(): Observable<VrMessagesData> {
    return of({
      messages: [
        {
          image: 'assets/img/team-1.jpg',
          count: 2,
          tooltip: '2 New Messages'
        },
        {
          image: 'assets/img/team-2.jpg',
          count: 1,
          tooltip: '1 New Message'
        },
        {
          image: 'assets/img/team-3.jpg',
          count: 13,
          tooltip: '13 New Messages'
        },
        {
          image: 'assets/img/team-4.jpg',
          count: 7,
          tooltip: '7 New Messages'
        }
      ]
    });
  }

  /**
   * Retrieves VR email data with notification count.
   * 
   * Returns email data including:
   * - Email count for notifications
   * - Check functionality text
   * - Email management interface
   * 
   * @returns Observable<VrEmailData> - VR email configuration
   * 
   * @example
   * ```typescript
   * this.vrDataService.getVrEmailData().subscribe(email => {
   *   this.emailCount = email.count; // 21
   *   this.checkText = email.checkText; // "Check"
   *   this.hasUnreadEmails = email.count > 0;
   * });
   * ```
   */
  getVrEmailData(): Observable<VrEmailData> {
    return of({
      count: 21,
      checkText: 'Check'
    });
  }

  /**
   * Retrieves navbar configuration data with breadcrumbs and notifications.
   * 
   * Returns navbar data including:
   * - Breadcrumb navigation with icon, title, and section
   * - Search functionality configuration
   * - User authentication elements (Sign In, config, bell)
   * - Sample notification list with avatars, titles, and timestamps
   * 
   * @returns Observable<NavbarData> - Navbar configuration with notifications
   * 
   * @example
   * ```typescript
   * this.vrDataService.getNavbarData().subscribe(navbarData => {
   *   this.breadcrumb = navbarData.breadcrumbTitle; // "VR Info"
   *   this.notifications = navbarData.notifications;
   * });
   * ```
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'VR Info',
      breadcrumbSection: 'Pages',
      searchPlaceholder: 'Type here...',
      signInText: 'Sign In',
      signInIcon: 'fa fa-user',
      configIcon: 'fa fa-cog',
      bellIcon: 'fa fa-bell',
      notifications: [
        { 
          avatarUrl: './assets/img/team-2.jpg', 
          title: '<span class="font-semibold">New message</span> from Laur',
          description: '',
          time: '13 minutes ago' 
        },
        { 
          avatarUrl: './assets/img/small-logos/logo-spotify.svg', 
          title: '<span class="font-semibold">New album</span> by Travis Scott',
          description: '',
          time: '1 day' 
        },
        {
          title: 'Payment successfully completed',
          description: '',
          time: '2 days'
        }
      ]
    });
  }
} 
