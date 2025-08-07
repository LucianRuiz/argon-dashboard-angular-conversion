import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent, SidebarData } from '../../../components/layout/sidebar/sidebar';
import { PerfectScrollbarDirective } from '../../../components/layout/sidebar/perfect-scrollbar.directive';
import { NavbarComponent, NavbarData } from '../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../components/layout/footer/footer';
import { WeatherCardComponent } from '../../../components/cards/weather-card/weather-card';
import { SmartStatsCardComponent } from '../../../components/cards/smart-stats-card/smart-stats-card';
import { CameraGalleryComponent } from '../../../components/widgets/camera-gallery/camera-gallery';
import { ConsumptionChartComponent } from '../../../components/charts/consumption-chart/consumption-chart';
import { ConsumptionDayChartComponent } from '../../../components/charts/consumption-day-chart/consumption-day-chart';
import { DeviceLimitComponent } from '../../../components/widgets/device-limit/device-limit';
import { DeviceCardComponent } from '../../../components/cards/device-card/device-card';
import { SmartHomeDataService } from '../../../services/smart-home-data.service';
import { WeatherCardData } from '../../../components/cards/weather-card/weather-card';
import { SmartStatsCardData } from '../../../components/cards/smart-stats-card/smart-stats-card';
import { CameraGalleryData } from '../../../components/widgets/camera-gallery/camera-gallery';
import { ConsumptionChartData } from '../../../components/charts/consumption-chart/consumption-chart';
import { ConsumptionDayChartData } from '../../../components/charts/consumption-day-chart/consumption-day-chart';
import { DeviceLimitData } from '../../../components/widgets/device-limit/device-limit';
import { DeviceCardData } from '../../../components/cards/device-card/device-card';
import { ArgonConfiguratorComponent } from '../../../components/layout/argon-configurator/argon-configurator';
import { Observable } from 'rxjs';

/**
 * Smart Home Dashboard Component
 * 
 * This component implements the smart home dashboard of the Argon Dashboard 2 PRO system.
 * It provides a comprehensive interface for managing and monitoring smart home devices,
 * including cameras, weather information, energy consumption tracking, device management,
 * and real-time statistics for a complete home automation experience.
 * 
 * Features:
 * - Real-time weather information and forecasts
 * - Smart home statistics and monitoring cards
 * - Camera gallery for security monitoring
 * - Energy consumption tracking with detailed charts
 * - Daily consumption visualization
 * - Device limit management and monitoring
 * - Individual device cards with status and controls
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * 
 * The component serves as a central hub for smart home management, providing users with
 * complete control and visibility over their connected devices, energy usage, security
 * cameras, and environmental conditions in a unified dashboard interface.
 * 
 * @example
 * ```html
 * <app-smart-home></app-smart-home>
 * ```
 */
@Component({
  selector: 'app-smart-home',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    PerfectScrollbarDirective,
    NavbarComponent,
    FooterComponent,
    WeatherCardComponent,
    SmartStatsCardComponent,
    CameraGalleryComponent,
    ConsumptionChartComponent,
    ConsumptionDayChartComponent,
    DeviceLimitComponent,
    DeviceCardComponent,
    ArgonConfiguratorComponent
  ],
  templateUrl: './smart-home.html'
})
export class SmartHomeComponent {
  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;
  
  /** Observable for weather card data */
  weatherData$: Observable<WeatherCardData>;
  
  /** Observable for smart statistics cards data */
  statsCards$: Observable<SmartStatsCardData[]>;
  
  /** Observable for camera gallery data */
  cameraGalleryData$: Observable<CameraGalleryData>;
  
  /** Observable for consumption chart data */
  consumptionChartData$: Observable<ConsumptionChartData>;
  
  /** Observable for daily consumption chart data */
  consumptionDayChartData$: Observable<ConsumptionDayChartData>;
  
  /** Observable for device limit data */
  deviceLimitData$: Observable<DeviceLimitData>;
  
  /** Observable for device cards data */
  deviceCards$: Observable<DeviceCardData[]>;

  /**
   * Creates an instance of SmartHomeComponent.
   * 
   * Initializes the component by subscribing to data streams from SmartHomeDataService
   * for all smart home dashboard elements including sidebar, navbar, weather, statistics,
   * camera gallery, consumption charts, device limits, and device cards.
   * 
   * @param dataService - Service for managing smart home dashboard data and configurations
   */
  constructor(private dataService: SmartHomeDataService) {
    this.sidebarData$ = this.dataService.getSidebarData();
    this.navbarData$ = this.dataService.getNavbarData();
    this.weatherData$ = this.dataService.getWeatherData();
    this.statsCards$ = this.dataService.getStatsCards();
    this.cameraGalleryData$ = this.dataService.getCameraGalleryData();
    this.consumptionChartData$ = this.dataService.getConsumptionChartData();
    this.consumptionDayChartData$ = this.dataService.getConsumptionDayChartData();
    this.deviceLimitData$ = this.dataService.getDeviceLimitData();
    this.deviceCards$ = this.dataService.getDeviceCards();
  }

  /**
   * TrackBy function for device cards to optimize rendering performance.
   * 
   * Provides a unique identifier for each device card to enable Angular's
   * change detection to efficiently update only changed items in the list.
   * 
   * @param index - The index of the item in the array
   * @param device - The device card data object
   * @returns A unique string identifier for the device (using the device ID)
   */
  trackByDeviceId(index: number, device: DeviceCardData): string {
    return device.id;
  }
} 
