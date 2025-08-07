import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent, SidebarData } from '../../../components/layout/sidebar/sidebar';
import { PerfectScrollbarDirective } from '../../../components/layout/sidebar/perfect-scrollbar.directive';
import { NavbarComponent, NavbarData } from '../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../components/layout/footer/footer';
import { AutomotiveHeroCardComponent, HeroCardData } from '../../../components/cards/automotive-hero-card/automotive-hero-card';
import { AutomotiveStatsCardComponent, StatsCardData } from '../../../components/cards/automotive-stats-card/automotive-stats-card';
import { NavigationPanelComponent, NavigationData, MusicPlayerData, ControlPanelData } from '../../../components/widgets/navigation-panel/navigation-panel';
import { AutomotiveDataService } from '../../../services/automotive-data.service';
import { ArgonConfiguratorComponent } from '../../../components/layout/argon-configurator/argon-configurator';
import { Observable } from 'rxjs';

/**
 * Automotive Dashboard Component
 * 
 * This component implements the automotive dashboard of the Argon Dashboard 2 PRO system.
 * It provides a specialized interface for automotive applications, integrating
 * vehicle-specific components such as statistics cards, navigation panels, music
 * players, and vehicle control systems in a comprehensive dashboard layout.
 * 
 * Features:
 * - Automotive hero card with vehicle status and information
 * - Vehicle statistics cards with real-time data
 * - Interactive navigation panel for route planning
 * - Music player with automotive controls
 * - Vehicle control panel for system management
 * - Integration with Argon configurator for customization
 * - Responsive design optimized for automotive interfaces
 * - Real-time vehicle data monitoring and display
 * 
 * The component serves as a specialized dashboard for automotive applications,
 * providing drivers and vehicle operators with comprehensive access to navigation,
 * entertainment, vehicle controls, and monitoring systems in a unified interface
 * designed specifically for automotive use cases.
 * 
 * @example
 * ```html
 * <app-automotive></app-automotive>
 * ```
 */
@Component({
  selector: 'app-automotive',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    PerfectScrollbarDirective,
    NavbarComponent,
    FooterComponent,
    AutomotiveHeroCardComponent,
    AutomotiveStatsCardComponent,
    NavigationPanelComponent,
    ArgonConfiguratorComponent
  ],
  templateUrl: './automotive.html'
})
export class AutomotiveComponent {
  /** Observable for automotive hero card data */
  heroData$: Observable<HeroCardData>;
  
  /** Observable for automotive statistics cards data */
  statsCards$: Observable<StatsCardData[]>;
  
  /** Observable for navigation panel data */
  navigationData$: Observable<NavigationData>;
  
  /** Observable for music player data */
  musicData$: Observable<MusicPlayerData>;
  
  /** Observable for control panel data */
  controlData$: Observable<ControlPanelData>;
  
  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;

  /**
   * Creates an instance of AutomotiveComponent.
   * 
   * Initializes the component by subscribing to data streams from AutomotiveDataService
   * for all automotive dashboard elements including hero card, statistics cards,
   * navigation panel, music player, control panel, sidebar, and navbar data.
   * 
   * @param automotiveDataService - Service for managing automotive dashboard data and configurations
   */
  constructor(private automotiveDataService: AutomotiveDataService) {
    this.heroData$ = this.automotiveDataService.getHeroCardData();
    this.statsCards$ = this.automotiveDataService.getStatsCards();
    this.navigationData$ = this.automotiveDataService.getNavigationData();
    this.musicData$ = this.automotiveDataService.getMusicPlayerData();
    this.controlData$ = this.automotiveDataService.getControlPanelData();
    this.sidebarData$ = this.automotiveDataService.getSidebarData();
    this.navbarData$ = this.automotiveDataService.getNavbarData();
  }
} 
