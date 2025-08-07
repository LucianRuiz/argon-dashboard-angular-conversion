import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NavbarComponent, NavbarData } from '../../../components/layout/navbar/navbar';
import { SidebarComponent, SidebarData } from '../../../components/layout/sidebar/sidebar';
import { FooterComponent } from '../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../components/layout/argon-configurator/argon-configurator';
import { PerfectScrollbarDirective } from '../../../components/layout/sidebar/perfect-scrollbar.directive';
import { SweetAlertDataService } from '../../../services/sweet-alert-data.service';
import { SweetAlertCardComponent, SweetAlertCardData } from '../../../components/cards/sweet-alert-card/sweet-alert-card';

/**
 * Sweet Alerts Component
 * 
 * This component implements a comprehensive Sweet Alert demonstration page for the application.
 * It provides a showcase of various Sweet Alert notification types and configurations,
 * including success, error, warning, and information alerts with interactive examples
 * and customization options in a complete dashboard layout.
 * 
 * Features:
 * - Complete layout with navbar, sidebar, footer, and configurator
 * - Sweet Alert example cards with interactive functionality
 * - Various alert types: success, error, warning, info, and confirmation
 * - Customizable alert configurations and styling
 * - Interactive buttons to trigger different alert examples
 * - Responsive design with Tailwind CSS
 * - Perfect scrollbar integration for smooth navigation
 * - Dark mode support for enhanced user experience
 * - Alert customization options and parameters
 * - Real-time alert demonstration capabilities
 * 
 * The component serves as a comprehensive Sweet Alert showcase, providing
 * developers and users with examples of various notification types, their
 * configurations, and interactive demonstrations to understand how to
 * implement and customize Sweet Alert notifications in their applications.
 * 
 * @example
 * ```html
 * <app-sweet-alerts></app-sweet-alerts>
 * ```
 */
@Component({
  selector: 'app-sweet-alerts',
  templateUrl: './sweet-alerts.html',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    PerfectScrollbarDirective,
    SweetAlertCardComponent
  ]
})
export class SweetAlertsComponent {
  
  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;
  
  /** Observable for Sweet Alert page data */
  sweetAlertPageData$: Observable<SweetAlertCardData[]>;

  /**
   * Creates an instance of SweetAlertsComponent.
   * 
   * Initializes the component by subscribing to data streams from SweetAlertDataService
   * for sidebar configuration, navbar configuration, and Sweet Alert page data.
   * 
   * @param sweetAlertDataService - Service for managing Sweet Alert data and configurations
   */
  constructor(private sweetAlertDataService: SweetAlertDataService) {
    this.sidebarData$ = this.sweetAlertDataService.getSidebarData();
    this.navbarData$ = this.sweetAlertDataService.getNavbarData();
    this.sweetAlertPageData$ = this.sweetAlertDataService.getSweetAlertPageData();
  }
} 