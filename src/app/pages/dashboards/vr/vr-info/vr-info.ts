import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

// Componentes de layout existentes
import { SidebarComponent, SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { NavbarComponent, NavbarData } from '../../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';

// Componentes específicos de VR Info
import { VrWeatherCardComponent, VrWeatherData } from '../../../../components/cards/vr-weather-card/vr-weather-card';
import { VrNavigationPanelComponent, VrNavigationData } from '../../../../components/widgets/vr-navigation-panel/vr-navigation-panel';
import { VrScheduleCardComponent, VrScheduleData } from '../../../../components/cards/vr-schedule-card/vr-schedule-card';
import { VrTodoCardComponent, VrTodoData } from '../../../../components/cards/vr-todo-card/vr-todo-card';
import { VrMusicPlayerComponent, VrMusicPlayerData } from '../../../../components/widgets/vr-music-player/vr-music-player';
import { VrMessagesCardComponent, VrMessagesData } from '../../../../components/cards/vr-messages-card/vr-messages-card';
import { VrEmailCardComponent, VrEmailData } from '../../../../components/cards/vr-email-card/vr-email-card';

// Servicio de datos
import { VrDataService } from '../../../../services/vr-info-data.service';

/**
 * VR Info Dashboard Component
 * 
 * This component implements the Virtual Reality (VR) information dashboard of the Argon Dashboard 2 PRO system.
 * It provides a comprehensive VR-optimized interface that integrates various information widgets and cards
 * specifically designed for virtual reality experiences, including weather, navigation, scheduling, tasks,
 * music, messaging, and email management.
 * 
 * Features:
 * - VR-optimized navbar and sidebar navigation
 * - Real-time weather information and forecasts
 * - Interactive navigation panel for VR environment
 * - Schedule management and calendar integration
 * - Task management with todo functionality
 * - Music player with VR controls
 * - Messaging and communication tools
 * - Email management and notifications
 * - Integration with Argon configurator for customization
 * - Responsive design optimized for VR environments
 * 
 * The component serves as an information hub within the VR environment, providing users with
 * comprehensive access to all essential information and communication tools in an immersive
 * virtual reality interface.
 * 
 * @example
 * ```html
 * <app-vr-info></app-vr-info>
 * ```
 */
@Component({
  selector: 'app-vr-info',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    VrWeatherCardComponent,
    VrNavigationPanelComponent,
    VrScheduleCardComponent,
    VrTodoCardComponent,
    VrMusicPlayerComponent,
    VrMessagesCardComponent,
    VrEmailCardComponent
  ],
  templateUrl: './vr-info.html'
})
export class VrInfoComponent {
  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;
  
  /** Observable for VR weather card data */
  weatherData$: Observable<VrWeatherData>;
  
  /** Observable for VR navigation panel data */
  navigationData$: Observable<VrNavigationData>;
  
  /** Observable for VR schedule card data */
  scheduleData$: Observable<VrScheduleData>;
  
  /** Observable for VR todo card data */
  todoData$: Observable<VrTodoData>;
  
  /** Observable for VR music player data */
  musicPlayerData$: Observable<VrMusicPlayerData>;
  
  /** Observable for VR messages card data */
  messagesData$: Observable<VrMessagesData>;
  
  /** Observable for VR email card data */
  emailData$: Observable<VrEmailData>;

  /**
   * Creates an instance of VrInfoComponent.
   * 
   * Initializes the component by subscribing to data streams from VrDataService
   * for all VR information dashboard elements including sidebar, navbar, weather,
   * navigation, schedule, todo items, music player, messages, and email data.
   * 
   * @param vrDataService - Service for managing VR info dashboard data and configurations
   */
  constructor(private vrDataService: VrDataService) {
    this.sidebarData$ = this.vrDataService.getSidebarData();
    this.navbarData$ = this.vrDataService.getNavbarData();
    this.weatherData$ = this.vrDataService.getVrWeatherData();
    this.navigationData$ = this.vrDataService.getVrNavigationData();
    this.scheduleData$ = this.vrDataService.getVrScheduleData();
    this.todoData$ = this.vrDataService.getVrTodoData();
    this.musicPlayerData$ = this.vrDataService.getVrMusicPlayerData();
    this.messagesData$ = this.vrDataService.getVrMessagesData();
    this.emailData$ = this.vrDataService.getVrEmailData();
  }
} 
