import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavbarData } from '../components/layout/navbar/navbar';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { SidebarDataService } from './sidebar-data.service';
import { SweetAlertCardData } from '../components/cards/sweet-alert-card/sweet-alert-card';

/**
 * SweetAlertDataService
 * 
 * Provides mock data and configuration for the Sweet Alert page. This service
 * supplies comprehensive Sweet Alert demonstration data including navbar configuration,
 * sidebar data, and various Sweet Alert example cards with different types and
 * functionalities. The service is designed for demo and UI prototyping purposes,
 * simulating backend responses for Sweet Alert functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the Sweet Alert page
 * - Navbar data with breadcrumbs and notifications
 * - Sweet Alert example cards with different alert types
 * - Basic, success, custom HTML, input field, and warning alerts
 * - Auto-close and confirmation functionality
 * - RTL language support examples
 * 
 * @example
 * ```typescript
 * constructor(private sweetAlertDataService: SweetAlertDataService) {}
 * 
 * ngOnInit() {
 *   this.sweetAlertDataService.getSweetAlertPageData().subscribe(cards => {
 *     this.alertCards = cards;
 *   });
 * }
 * ```
 */
@Injectable({ providedIn: 'root' })
export class SweetAlertDataService {
  
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar configuration data for the Sweet Alert page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the Sweet Alert interface.
   * 
   * @returns Observable<SidebarData> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.sweetAlertDataService.getSidebarData().subscribe(sidebarData => {
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
   * - Notification icons and descriptions
   * 
   * @returns Observable<NavbarData> - Navbar configuration with notifications
   * 
   * @example
   * ```typescript
   * this.sweetAlertDataService.getNavbarData().subscribe(navbarData => {
   *   this.breadcrumb = navbarData.breadcrumbTitle; // "Sweet Alerts"
   *   this.notifications = navbarData.notifications;
   *   this.newMessageNotification = navbarData.notifications[0];
   *   this.albumNotification = navbarData.notifications[1];
   *   this.paymentNotification = navbarData.notifications[2];
   * });
   * ```
   */
  getNavbarData(): Observable<NavbarData> {
    const navbarData: NavbarData = {
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Sweet Alerts',
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
          description: 'New message',
          time: '13 minutes ago'
        },
        {
          iconSvg: './assets/img/small-logos/logo-spotify.svg',
          title: 'New album by Travis Scott',
          description: 'New album',
          time: '1 day'
        },
        {
          iconSvg: 'credit-card',
          title: 'Payment successfully completed',
          description: 'Payment completed',
          time: '2 days'
        }
      ]
    };
    return of(navbarData);
  }

  /**
   * Retrieves Sweet Alert page data with all example cards.
   * 
   * Returns Sweet Alert cards including:
   * - Basic example with simple alert functionality
   * - Success message with positive feedback
   * - Custom HTML description with rich content
   * - Input field for user data collection
   * - Title and text combination alerts
   * - Auto-close functionality for temporary messages
   * - Warning messages with confirmation buttons
   * - Warning messages with cancel functionality
   * - RTL language support for international users
   * 
   * @returns Observable<SweetAlertCardData[]> - Array of Sweet Alert card configurations
   * 
   * @example
   * ```typescript
   * this.sweetAlertDataService.getSweetAlertPageData().subscribe(cards => {
   *   this.allAlertCards = cards;
   *   this.basicExample = cards.find(card => card.alertType === 'basic');
   *   this.successMessage = cards.find(card => card.alertType === 'success-message');
   *   this.customHtml = cards.find(card => card.alertType === 'custom-html');
   *   this.inputField = cards.find(card => card.alertType === 'input-field');
   *   this.titleAndText = cards.find(card => card.alertType === 'title-and-text');
   *   this.autoClose = cards.find(card => card.alertType === 'auto-close');
   *   this.warningConfirmation = cards.find(card => card.alertType === 'warning-message-and-confirmation');
   *   this.warningCancel = cards.find(card => card.alertType === 'warning-message-and-cancel');
   *   this.rtlLanguage = cards.find(card => card.alertType === 'rtl-language');
   * });
   * ```
   */
  getSweetAlertPageData(): Observable<SweetAlertCardData[]> {
    const sweetAlertCards: SweetAlertCardData[] = [
      {
        title: 'Basic example',
        description: 'Basic example',
        buttonText: 'Try me!',
        alertType: 'basic'
      },
      {
        title: 'A success message',
        description: 'A success message',
        buttonText: 'Try me!',
        alertType: 'success-message'
      },
      {
        title: 'Custom HTML description',
        description: 'Custom HTML description',
        buttonText: 'Try me!',
        alertType: 'custom-html'
      },
      {
        title: 'Gitgub avatar request',
        description: 'Gitgub avatar request',
        buttonText: 'Try me!',
        alertType: 'input-field'
      },
      {
        title: 'A title with a text under',
        description: 'A title with a text under',
        buttonText: 'Try me!',
        alertType: 'title-and-text'
      },
      {
        title: 'A message with auto close',
        description: 'A message with auto close',
        buttonText: 'Try me!',
        alertType: 'auto-close'
      },
      {
        title: 'A warning message, with a function attached to the "Confirm" Button...',
        description: 'A warning message, with a function attached to the "Confirm" Button...',
        buttonText: 'Try me!',
        alertType: 'warning-message-and-confirmation'
      },
      {
        title: '...and by passing a parameter, you can execute something else for "Cancel"',
        description: '...and by passing a parameter, you can execute something else for "Cancel"',
        buttonText: 'Try me!',
        alertType: 'warning-message-and-cancel'
      },
      {
        title: 'Right-to-left support for Arabic, Persian, Hebrew, and other RTL languages',
        description: 'Right-to-left support for Arabic, Persian, Hebrew, and other RTL languages',
        buttonText: 'Try me!',
        alertType: 'rtl-language'
      }
    ];

    return of(sweetAlertCards);
  }
} 