import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NavbarComponent, NavbarData } from '../../../components/layout/navbar/navbar';
import { SidebarComponent, SidebarData } from '../../../components/layout/sidebar/sidebar';
import { FooterComponent } from '../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../components/layout/argon-configurator/argon-configurator';
import { PerfectScrollbarDirective } from '../../../components/layout/sidebar/perfect-scrollbar.directive';
import { NotificationsDataService } from '../../../services/notifications-data.service';
import { AlertCardData } from '../../../components/cards/alert-card/alert-card';
import { AlertExampleComponent } from '../../../components/widgets/alerts-examples/alerts-examples';
import { NotificationToastComponent, ToastData } from '../../../components/widgets/notification-toast/notification-toast';

/**
 * Notifications Component
 * 
 * This component implements a comprehensive notifications and alerts demonstration page
 * for the application. It provides a showcase of various alert types, notification
 * toasts, and interactive notification functionality in a complete dashboard layout
 * with examples of different notification styles and behaviors.
 * 
 * Features:
 * - Complete layout with navbar, sidebar, footer, and configurator
 * - Alert examples with different colors and gradient styles
 * - Interactive notification buttons with toast functionality
 * - Multiple alert types: blue, slate, emerald, red, orange, cyan, gray, dark gray
 * - Toast notifications with success, info, warning, and danger variants
 * - Responsive design with mobile optimizations
 * - Perfect scrollbar for smooth navigation
 * - Notification data management through dedicated service
 * - Real-time notification demonstration capabilities
 * - Customizable alert and toast configurations
 * 
 * The component serves as a comprehensive notifications showcase, providing
 * developers and users with examples of various alert types, notification
 * styles, and interactive notification behaviors to understand how to
 * implement and customize notifications in their applications.
 * 
 * @example
 * ```html
 * <app-notifications></app-notifications>
 * ```
 */
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.html',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    PerfectScrollbarDirective,
    AlertExampleComponent,
    NotificationToastComponent
  ]
})
export class NotificationsComponent {

  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;
  
  /** Observable for alerts data */
  alertsData$: Observable<AlertCardData[]>;
  
  /** Blue alert card data */
  blueAlert!: AlertCardData;
  
  /** Slate alert card data */
  slateAlert!: AlertCardData;
  
  /** Emerald alert card data */
  emeraldAlert!: AlertCardData;
  
  /** Red alert card data */
  redAlert!: AlertCardData;
  
  /** Orange alert card data */
  orangeAlert!: AlertCardData;
  
  /** Cyan alert card data */
  cyanAlert!: AlertCardData;
  
  /** Gray alert card data */
  grayAlert!: AlertCardData;
  
  /** Dark gray alert card data */
  darkGrayAlert!: AlertCardData;
  
  /** Success toast notification data */
  successToast!: ToastData;
  
  /** Info toast notification data */
  infoToast!: ToastData;
  
  /** Warning toast notification data */
  warningToast!: ToastData;
  
  /** Danger toast notification data */
  dangerToast!: ToastData;

  /**
   * Creates an instance of NotificationsComponent.
   * 
   * Initializes the component by subscribing to data streams from NotificationsDataService
   * for sidebar configuration, navbar configuration, and alerts data, then initializes
   * all alert and toast data for demonstration purposes.
   * 
   * @param notificationsDataService - Service for managing notifications data and configurations
   */
  constructor(private notificationsDataService: NotificationsDataService) {
    this.sidebarData$ = this.notificationsDataService.getSidebarData();
    this.navbarData$ = this.notificationsDataService.getNavbarData();
    this.alertsData$ = this.notificationsDataService.getAlertsData();
    
    // Initialize data
    this.initializeData();
  }

  /**
   * Initializes all alert and toast data for demonstration purposes.
   * 
   * Sets up individual alert card data from the alerts observable and
   * configures various toast notification examples with different
   * styles, colors, and configurations for comprehensive demonstration.
   */
  private initializeData(): void {
    // Initialize alerts
    this.alertsData$.subscribe(alerts => {
      this.blueAlert = alerts[0];
      this.slateAlert = alerts[1];
      this.emeraldAlert = alerts[2];
      this.redAlert = alerts[3];
      this.orangeAlert = alerts[4];
      this.cyanAlert = alerts[5];
      this.grayAlert = alerts[6];
      this.darkGrayAlert = alerts[7];
    });

    // Initialize toasts
    this.successToast = {
      id: 'limeToast',
      title: 'Soft UI Dashboard',
      message: 'Hello, world! This is a notification message.',
      time: '11 mins ago',
      icon: 'ni ni-check-bold',
      iconClass: 'text-lime-500'
    };

    this.infoToast = {
      id: 'cyanToast',
      title: 'Soft UI Dashboard',
      message: 'Hello, world! This is a notification message.',
      time: '11 mins ago',
      icon: 'ni ni-bell-55',
      iconClass: 'text-white',
      bgClass: 'bg-gradient-to-tl from-blue-700 to-cyan-500',
      textClass: 'text-white'
    };

    this.warningToast = {
      id: 'orangeToast',
      title: 'Soft UI Dashboard',
      message: 'Hello, world! This is a notification message.',
      time: '11 mins ago',
      icon: 'ni ni-spaceship',
      iconClass: 'text-yellow-400'
    };

    this.dangerToast = {
      id: 'redToast',
      title: 'Soft UI Dashboard',
      message: 'Hello, world! This is a notification message.',
      time: '11 mins ago',
      icon: 'ni ni-notification-70',
      iconClass: 'text-transparent bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text'
    };
  }
} 