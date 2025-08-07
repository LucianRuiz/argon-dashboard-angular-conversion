import { Injectable } from '@angular/core';
import { HeroCardData } from '../components/cards/automotive-hero-card/automotive-hero-card';
import { StatsCardData } from '../components/cards/automotive-stats-card/automotive-stats-card';
import { NavigationData, MusicPlayerData, ControlPanelData } from '../components/widgets/navigation-panel/navigation-panel';
import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';
import { Observable, of } from 'rxjs';

/**
 * AutomotiveDataService
 *
 * This Angular service provides mock data and utility methods for the Automotive dashboard module.
 * It supplies data for hero cards, statistics cards, navigation, music player, control panel, navbar, and sidebar.
 * 
 * The service manages:
 * - Vehicle status and performance metrics
 * - Navigation and routing information
 * - Music player and entertainment controls
 * - Control panel and system status
 * - Navigation components (sidebar, navbar)
 * 
 * The service is intended for demo and UI prototyping purposes, simulating backend 
 * responses for the automotive dashboard.
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({
  providedIn: 'root'
})
export class AutomotiveDataService {

  /**
   * Creates an instance of AutomotiveDataService.
   * 
   * @param sidebarDataService - Service for managing sidebar data
   */
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves hero card data for displaying vehicle status and charging information.
   * 
   * @returns Observable<HeroCardData> - Observable containing vehicle data with distance,
   *          energy consumption, available range, and nearest charger information
   */
  getHeroCardData(): Observable<HeroCardData> {
    return of({
      sinceLastCharge: {
        distance: 145,
        distanceUnit: 'Km',
        averageEnergy: 300,
        energyUnit: 'Kw'
      },
      availableRange: 47,
      rangeUnit: '%',
      nearestCharger: {
        location: 'Miclan, DW',
        address: '891 Limarenda road'
      },
      carImage: 'assets/img/tesla.png'
    });
  }

  /**
   * Retrieves statistics cards data for displaying vehicle performance metrics.
   * 
   * @returns Observable<StatsCardData[]> - Observable containing array of stats cards
   *          with trip distance, battery health, average speed, and music volume
   */
  getStatsCards(): Observable<StatsCardData[]> {
    return of([
      {
        title: "Today's Trip",
        value: '145 Km',
        icon: 'ni-money-coins',
        bgColor: 'bg-blue-500'
      },
      {
        title: 'Battery Health',
        value: '99 %',
        icon: 'ni-controller',
        bgColor: 'bg-blue-500'
      },
      {
        title: 'Average Speed',
        value: '56 Km/h',
        icon: 'ni-delivery-fast',
        bgColor: 'bg-blue-500'
      },
      {
        title: 'Music Volume',
        value: '15/100',
        icon: 'ni-note-03',
        bgColor: 'bg-blue-500'
      }
    ]);
  }

  /**
   * Retrieves navigation data for displaying route information and directions.
   * 
   * @returns Observable<NavigationData> - Observable containing navigation data with
   *          current time, estimated arrival, next turn instructions, and destination
   */
  getNavigationData(): Observable<NavigationData> {
    return of({
      currentTime: '10:45',
      estimatedArrival: '11:13',
      nextTurn: {
        distance: 2.4,
        unit: 'Km',
        instruction: 'Turn right in 2.4 miles'
      },
      destination: {
        distance: 6.3,
        unit: 'Km',
        name: 'Distance to Creative Tim'
      }
    });
  }

  /**
   * Retrieves music player data for displaying current song and playback information.
   * 
   * @returns Observable<MusicPlayerData> - Observable containing music player data with
   *          current song details, volume level, and playback status
   */
  getMusicPlayerData(): Observable<MusicPlayerData> {
    return of({
      currentSong: {
        title: "You're Mines Still (feat Drake)",
        artist: 'Yung Bleu',
        genre: 'Hip-Hop',
        coverImage: 'assets/img/bruce-mars.jpg',
        spotifyLogo: 'assets/img/small-logos/logo-spotify.svg'
      },
      volume: 15,
      isPlaying: true
    });
  }

  /**
   * Retrieves control panel data for displaying system controls and status indicators.
   * 
   * @returns Observable<ControlPanelData> - Observable containing control panel data with
   *          search functionality and control icons with their active states
   */
  getControlPanelData(): Observable<ControlPanelData> {
    return of({
      searchPlaceholder: 'Search anything...',
      controlIcons: [
        { icon: 'ni-headphones', tooltip: 'Headphones connected', isActive: true },
        { icon: 'ni-button-play', tooltip: 'Music is playing', isActive: true },
        { icon: 'ni-button-power', tooltip: 'Start radio', isActive: false },
        { icon: 'ni-watch-time', tooltip: 'Time tracker', isActive: false }
      ]
    });
  }

  /**
   * Retrieves navbar data specifically configured for the Automotive page.
   * 
   * @returns Observable<NavbarData> - Observable containing navbar configuration with breadcrumbs,
   *          search placeholder, and notifications
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Automotive',
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
   * Retrieves sidebar data using the existing sidebar service.
   * 
   * @returns Observable<SidebarData> - Observable containing the sidebar configuration
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }
} 
