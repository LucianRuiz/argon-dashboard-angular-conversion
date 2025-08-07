import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavbarData } from '../components/layout/navbar/navbar';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { SidebarDataService } from './sidebar-data.service';
import { AlertCardData } from '../components/cards/alert-card/alert-card';

/**
 * NotificationData interface for notification configuration
 */
export interface NotificationData {
  id: string;
  buttonText: string;
  buttonGradientFrom: string;
  buttonGradientTo: string;
  toastId: string;
  toastTitle: string;
  toastMessage: string;
  toastTime: string;
  toastIcon: string;
  toastIconColor: string;
  toastBgGradientFrom?: string;
  toastBgGradientTo?: string;
  toastTextColor?: string;
}

/**
 * NotificationsDataService
 * 
 * Provides mock data and configuration for the Notifications page. This service supplies
 * data for displaying various types of notifications, alerts, and toast messages with
 * different styles and configurations. The service is designed for demo and UI prototyping
 * purposes, simulating backend responses for notification management functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the notifications page
 * - Navbar data with breadcrumbs and notification examples
 * - Alert card data with different color schemes and gradients
 * - Toast notification configurations with various styles
 * - Notification button and message configurations
 * 
 * @example
 * ```typescript
 * constructor(private notificationsDataService: NotificationsDataService) {}
 * 
 * ngOnInit() {
 *   this.notificationsDataService.getAlertsData().subscribe(alerts => {
 *     this.alertCards = alerts;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationsDataService {

  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar configuration data for the notifications page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the notifications interface.
   * 
   * @returns Observable<SidebarData> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.notificationsDataService.getSidebarData().subscribe(sidebarData => {
   *   this.sidebarConfig = sidebarData;
   * });
   * ```
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves navbar configuration data with breadcrumbs and notification examples.
   * 
   * Returns navbar data including:
   * - Breadcrumb navigation with icon, title, and section
   * - Search functionality configuration
   * - User authentication elements (Sign In, config, bell)
   * - Sample notification list with avatars, titles, and timestamps
   * 
   * @returns Observable<NavbarData> - Navbar configuration with sample notifications
   * 
   * @example
   * ```typescript
   * this.notificationsDataService.getNavbarData().subscribe(navbarData => {
   *   this.breadcrumb = navbarData.breadcrumbTitle;
   *   this.sampleNotifications = navbarData.notifications;
   * });
   * ```
   */
  getNavbarData(): Observable<NavbarData> {
    const navbarData: NavbarData = {
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Notifications',
      breadcrumbSection: 'Pages',
      searchPlaceholder: 'Type here...',
      signInText: 'Sign In',
      signInIcon: 'fa fa-user',
      configIcon: 'fa fa-cog',
      bellIcon: 'fa fa-bell',
      notifications: [
        {
          avatarUrl: '../../assets/img/team-2.jpg',
          title: 'New message from Laur',
          description: '13 minutes ago',
          time: '13 minutes ago'
        },
        {
          iconSvg: '../../assets/img/small-logos/logo-spotify.svg',
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
   * Retrieves alert card data with different color schemes and gradient configurations.
   * 
   * Returns an array of alert configurations including:
   * - 8 different alert types with unique color schemes
   * - Gradient backgrounds and border colors
   * - Content text and link configurations
   * - Unique identifiers for each alert type
   * 
   * @returns Observable<AlertCardData[]> - Array of alert card configurations
   * 
   * @example
   * ```typescript
   * this.notificationsDataService.getAlertsData().subscribe(alerts => {
   *   this.blueAlert = alerts.find(alert => alert.id === 'blue-alert');
   *   this.successAlert = alerts.find(alert => alert.id === 'emerald-alert');
   * });
   * ```
   */
  getAlertsData(): Observable<AlertCardData[]> {
    const alerts: AlertCardData[] = [
      {
        id: 'blue-alert',
        content: 'A simple blue alert with',
        linkText: 'an example link',
        linkUrl: 'javascript:;',
        gradientFrom: 'from-blue-500',
        gradientTo: 'to-violet-500',
        borderColor: 'border-blue-300'
      },
      {
        id: 'slate-alert',
        content: 'A simple slate alert with',
        linkText: 'an example link',
        linkUrl: 'javascript:;',
        gradientFrom: 'from-slate-600',
        gradientTo: 'to-slate-300',
        borderColor: 'border-slate-100'
      },
      {
        id: 'emerald-alert',
        content: 'A simple emerald alert with',
        linkText: 'an example link',
        linkUrl: 'javascript:;',
        gradientFrom: 'from-emerald-500',
        gradientTo: 'to-teal-400',
        borderColor: 'border-emerald-300'
      },
      {
        id: 'red-alert',
        content: 'A simple red alert with',
        linkText: 'an example link',
        linkUrl: 'javascript:;',
        gradientFrom: 'from-red-600',
        gradientTo: 'to-orange-600',
        borderColor: 'border-red-300'
      },
      {
        id: 'orange-alert',
        content: 'A simple orange alert with',
        linkText: 'an example link',
        linkUrl: 'javascript:;',
        gradientFrom: 'from-orange-500',
        gradientTo: 'to-yellow-500',
        borderColor: 'border-orange-100'
      },
      {
        id: 'cyan-alert',
        content: 'A simple cyan alert with',
        linkText: 'an example link',
        linkUrl: 'javascript:;',
        gradientFrom: 'from-blue-700',
        gradientTo: 'to-cyan-500',
        borderColor: 'border-cyan-200'
      },
      {
        id: 'gray-alert',
        content: 'A simple gray alert with',
        linkText: 'an example link',
        linkUrl: 'javascript:;',
        gradientFrom: 'from-gray-400',
        gradientTo: 'to-gray-100',
        borderColor: 'border-slate-100'
      },
      {
        id: 'dark-gray-alert',
        content: 'A simple dark gray alert with',
        linkText: 'an example link',
        linkUrl: 'javascript:;',
        gradientFrom: 'from-zinc-800',
        gradientTo: 'to-zinc-700',
        borderColor: 'border-slate-100'
      }
    ];
    return of(alerts);
  }

  /**
   * Retrieves toast notification configurations with various styles and themes.
   * 
   * Returns an array of notification configurations including:
   * - 4 notification types: Success, Info, Warning, Danger
   * - Button configurations with gradient backgrounds
   * - Toast message configurations with icons and colors
   * - Custom styling for different notification themes
   * 
   * @returns Observable<NotificationData[]> - Array of notification configurations
   * 
   * @example
   * ```typescript
   * this.notificationsDataService.getNotificationsData().subscribe(notifications => {
   *   this.successNotification = notifications.find(n => n.id === 'success-notification');
   *   this.dangerNotification = notifications.find(n => n.id === 'danger-notification');
   * });
   * ```
   */
  getNotificationsData(): Observable<NotificationData[]> {
    const notifications: NotificationData[] = [
      {
        id: 'success-notification',
        buttonText: 'success notification',
        buttonGradientFrom: 'from-emerald-500',
        buttonGradientTo: 'to-teal-400',
        toastId: 'limeToast',
        toastTitle: 'Soft UI Dashboard',
        toastMessage: 'Hello, world! This is a notification message.',
        toastTime: '11 mins ago',
        toastIcon: 'ni ni-check-bold',
        toastIconColor: 'text-lime-500'
      },
      {
        id: 'info-notification',
        buttonText: 'info notification',
        buttonGradientFrom: 'from-blue-700',
        buttonGradientTo: 'to-cyan-500',
        toastId: 'cyanToast',
        toastTitle: 'Soft UI Dashboard',
        toastMessage: 'Hello, world! This is a notification message.',
        toastTime: '11 mins ago',
        toastIcon: 'ni ni-bell-55',
        toastIconColor: 'text-white',
        toastBgGradientFrom: 'from-blue-700',
        toastBgGradientTo: 'to-cyan-500',
        toastTextColor: 'text-white'
      },
      {
        id: 'warning-notification',
        buttonText: 'warning notification',
        buttonGradientFrom: 'from-orange-500',
        buttonGradientTo: 'to-yellow-500',
        toastId: 'orangeToast',
        toastTitle: 'Soft UI Dashboard',
        toastMessage: 'Hello, world! This is a notification message.',
        toastTime: '11 mins ago',
        toastIcon: 'ni ni-spaceship',
        toastIconColor: 'text-yellow-400'
      },
      {
        id: 'danger-notification',
        buttonText: 'danger notification',
        buttonGradientFrom: 'from-red-600',
        buttonGradientTo: 'to-orange-600',
        toastId: 'redToast',
        toastTitle: 'Soft UI Dashboard',
        toastMessage: 'Hello, world! This is a notification message.',
        toastTime: '11 mins ago',
        toastIcon: 'ni ni-notification-70',
        toastIconColor: 'text-transparent bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text'
      }
    ];
    return of(notifications);
  }
} 