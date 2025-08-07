import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';
import { TimelinePageData, TimelineData, TimelineItem } from '../components/widgets/timeline-item/timeline-item';

/**
 * TimelineDataService
 * 
 * Provides mock data and configuration for the Timeline page module. This service
 * supplies comprehensive timeline data including timeline items with different
 * themes (light and dark), navbar configuration, and sidebar data. The service
 * is designed for demo and UI prototyping purposes, simulating backend responses
 * for timeline functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the timeline page
 * - Navbar data with breadcrumbs and notifications
 * - Timeline items with events, dates, and descriptions
 * - Light and dark theme timeline configurations
 * - Timeline item icons, gradients, and tags
 * - Event categorization and priority indicators
 * 
 * @example
 * ```typescript
 * constructor(private timelineDataService: TimelineDataService) {}
 * 
 * ngOnInit() {
 *   this.timelineDataService.getTimelineData().subscribe(timelineData => {
 *     this.lightTimeline = timelineData.lightTimeline;
 *     this.darkTimeline = timelineData.darkTimeline;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class TimelineDataService {
  
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar configuration data for the timeline page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the timeline interface.
   * 
   * @returns Observable<SidebarData> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.timelineDataService.getSidebarData().subscribe(sidebarData => {
   *   this.sidebarConfig = sidebarData;
   * });
   * ```
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
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
   * this.timelineDataService.getNavbarData().subscribe(navbarData => {
   *   this.breadcrumb = navbarData.breadcrumbTitle; // "Timeline"
   *   this.notifications = navbarData.notifications;
   * });
   * ```
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Timeline',
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

  /**
   * Retrieves timeline data with light and dark theme configurations.
   * 
   * Returns timeline data including:
   * - Light timeline with dotted line styling
   * - Dark timeline with dashed line styling
   * - Timeline items with events, dates, and descriptions
   * - Icons with gradient styling for visual appeal
   * - Tags for event categorization
   * - Priority indicators for important events
   * 
   * @returns Observable<TimelinePageData> - Timeline page configuration
   * 
   * @example
   * ```typescript
   * this.timelineDataService.getTimelineData().subscribe(timelineData => {
   *   this.lightTimeline = timelineData.lightTimeline;
   *   this.darkTimeline = timelineData.darkTimeline;
   *   this.lightTimelineItems = timelineData.lightTimeline.items;
   *   this.darkTimelineItems = timelineData.darkTimeline.items;
   *   this.designChanges = timelineData.lightTimeline.items.find(item => 
   *     item.title.includes('Design changes')
   *   );
   *   this.newOrder = timelineData.lightTimeline.items.find(item => 
   *     item.title.includes('New order')
   *   );
   *   this.serverPayments = timelineData.lightTimeline.items.find(item => 
   *     item.title.includes('Server payments')
   *   );
   *   this.priorityItems = timelineData.lightTimeline.items.filter(item => 
   *     item.tags.includes('priority')
   *   );
   * });
   * ```
   */
  getTimelineData(): Observable<TimelinePageData> {
    const timelineItemsLight: TimelineItem[] = [
      {
        id: 1,
        title: '$2400, Design changes',
        date: '22 DEC',
        time: '7:20 PM',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-bell-55',
        iconGradient: 'bg-gradient-to-tl from-emerald-500 to-teal-400',
        tags: ['design']
      },
      {
        id: 2,
        title: 'New order #1832412',
        date: '21 DEC',
        time: '11 PM',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-html5',
        iconGradient: 'bg-gradient-to-tl from-red-600 to-orange-600',
        tags: ['order', '#1832412']
      },
      {
        id: 3,
        title: 'Server payments for April',
        date: '21 DEC',
        time: '9:34 PM',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-cart',
        iconGradient: 'bg-gradient-to-tl from-blue-700 to-cyan-500',
        tags: ['server', 'payments']
      },
      {
        id: 4,
        title: 'New card added for order #4395133',
        date: '20 DEC',
        time: '2:20 AM',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-credit-card',
        iconGradient: 'bg-gradient-to-tl from-orange-500 to-yellow-500',
        tags: ['card', '#4395133', 'priority']
      },
      {
        id: 5,
        title: 'Unlock packages for development',
        date: '18 DEC',
        time: '4:54 AM',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-key-25',
        iconGradient: 'bg-gradient-to-tl from-blue-500 to-violet-500',
        tags: ['development']
      },
      {
        id: 6,
        title: 'New message unread',
        date: '16 DEC',
        time: '',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-archive-2',
        iconGradient: 'bg-gradient-to-tl from-emerald-500 to-teal-400',
        tags: ['message']
      },
      {
        id: 7,
        title: 'Notifications unread',
        date: '15 DEC',
        time: '',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-check-bold',
        iconGradient: 'bg-gradient-to-tl from-blue-700 to-cyan-500',
        tags: ['notification']
      },
      {
        id: 8,
        title: 'New request',
        date: '14 DEC',
        time: '',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-box-2',
        iconGradient: 'bg-gradient-to-tl from-orange-500 to-yellow-500',
        tags: ['request', 'priority']
      },
      {
        id: 9,
        title: 'Controller issues',
        date: '13 DEC',
        time: '',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-controller',
        iconGradient: 'bg-gradient-to-tl from-zinc-800 to-zinc-700',
        tags: ['controller'],
        isLast: true
      }
    ];

    const timelineItemsDark: TimelineItem[] = [
      {
        id: 1,
        title: '$2400, Design changes',
        date: '22 DEC',
        time: '7:20 PM',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-bell-55',
        iconGradient: 'bg-gradient-to-tl from-emerald-500 to-teal-400',
        tags: ['design']
      },
      {
        id: 2,
        title: 'New order #1832412',
        date: '21 DEC',
        time: '11 PM',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-html5',
        iconGradient: 'bg-gradient-to-tl from-red-600 to-orange-600',
        tags: ['order', '#1832412']
      },
      {
        id: 3,
        title: 'Server payments for April',
        date: '21 DEC',
        time: '9:34 PM',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-cart',
        iconGradient: 'bg-gradient-to-tl from-blue-700 to-cyan-500',
        tags: ['server', 'payments']
      },
      {
        id: 4,
        title: 'New card added for order #4395133',
        date: '20 DEC',
        time: '2:20 AM',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-credit-card',
        iconGradient: 'bg-gradient-to-tl from-orange-500 to-yellow-500',
        tags: ['card', '#4395133', 'priority']
      },
      {
        id: 5,
        title: 'Unlock packages for development',
        date: '18 DEC',
        time: '4:54 AM',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-key-25',
        iconGradient: 'bg-gradient-to-tl from-blue-500 to-violet-500',
        tags: ['development']
      },
      {
        id: 6,
        title: 'New message unread',
        date: '16 DEC',
        time: '',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-archive-2',
        iconGradient: 'bg-gradient-to-tl from-emerald-500 to-teal-400',
        tags: ['message']
      },
      {
        id: 7,
        title: 'Notifications unread',
        date: '15 DEC',
        time: '',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-check-bold',
        iconGradient: 'bg-gradient-to-tl from-blue-700 to-cyan-500',
        tags: ['notification']
      },
      {
        id: 8,
        title: 'New request',
        date: '14 DEC',
        time: '',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-box-2',
        iconGradient: 'bg-gradient-to-tl from-orange-500 to-yellow-500',
        tags: ['request', 'priority']
      },
      {
        id: 9,
        title: 'Controller issues',
        date: '13 DEC',
        time: '',
        description: 'People care about how you see the world, how you think, what motivates you, what you\'re struggling with or afraid of.',
        icon: 'ni ni-controller',
        iconGradient: 'bg-gradient-to-tl from-zinc-800 to-zinc-700',
        tags: ['controller'],
        isLast: true
      }
    ];

    return of({
      lightTimeline: {
        title: 'Timeline with dotted line',
        items: timelineItemsLight,
        isDark: false,
        percentage: '',
        percentageText: '',
        percentageIcon: ''
      },
      darkTimeline: {
        title: 'Timeline dark with dashed line',
        items: timelineItemsDark,
        isDark: true,
        percentage: '',
        percentageText: '',
        percentageIcon: ''
      }
    });
  }
} 