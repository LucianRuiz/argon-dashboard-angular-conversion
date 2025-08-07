import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

// Importar interfaces desde componentes
import { WeatherCardData } from '../components/cards/weather-card/weather-card';
import { SmartStatsCardData } from '../components/cards/smart-stats-card/smart-stats-card';
import { CameraGalleryData } from '../components/widgets/camera-gallery/camera-gallery';
import { ConsumptionChartData, RoomConsumptionData } from '../components/charts/consumption-chart/consumption-chart';
import { DeviceCardData } from '../components/cards/device-card/device-card';
import { ConsumptionDayChartData } from '../components/charts/consumption-day-chart/consumption-day-chart';
import { DeviceLimitData } from '../components/widgets/device-limit/device-limit';
import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';

/**
 * SmartHomeDataService
 * 
 * Provides mock data and configuration for the Smart Home dashboard module. This service
 * supplies comprehensive smart home data including weather information, device statistics,
 * camera feeds, device management, consumption monitoring, and layout configuration.
 * The service is designed for demo and UI prototyping purposes, simulating backend
 * responses for smart home dashboard functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the smart home page
 * - Navbar data with breadcrumbs and notifications
 * - Weather information with city, temperature, and conditions
 * - Smart statistics cards with room data and gradients
 * - Camera gallery with live feeds and status
 * - Device cards with status and control options
 * - Device limit controls with temperature settings
 * - Consumption charts with room-by-room breakdown
 * - Daily consumption tracking with charts
 * 
 * @example
 * ```typescript
 * constructor(private smartHomeDataService: SmartHomeDataService) {}
 * 
 * ngOnInit() {
 *   this.smartHomeDataService.getWeatherData().subscribe(weather => {
 *     this.weatherInfo = weather;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class SmartHomeDataService {


  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar configuration data for the smart home page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the smart home interface.
   * 
   * @returns Observable<SidebarData> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.smartHomeDataService.getSidebarData().subscribe(sidebarData => {
   *   this.sidebarConfig = sidebarData;
   * });
   * ```
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves weather information for the smart home location.
   * 
   * Returns weather data including:
   * - City name and current temperature
   * - Weather condition description
   * - Weather icon for visual representation
   * 
   * @returns Observable<WeatherCardData> - Weather information configuration
   * 
   * @example
   * ```typescript
   * this.smartHomeDataService.getWeatherData().subscribe(weather => {
   *   this.city = weather.city; // "San Francisco"
   *   this.temperature = weather.temperature; // "29°C"
   *   this.condition = weather.condition; // "Cloudy"
   *   this.weatherIcon = weather.icon;
   * });
   * ```
   */
  getWeatherData(): Observable<WeatherCardData> {
    return of({
      city: 'San Francisco',
      temperature: '29°C',
      condition: 'Cloudy',
      icon: 'assets/img/small-logos/icon-sun-cloud.png'
    });
  }

  /**
   * Retrieves smart statistics cards with room and device data.
   * 
   * Returns statistics cards including:
   * - Living room temperature monitoring
   * - Outside humidity levels
   * - Water consumption tracking
   * - Internet usage across all devices
   * - Gradient styling for visual appeal
   * 
   * @returns Observable<SmartStatsCardData[]> - Array of smart statistics cards
   * 
   * @example
   * ```typescript
   * this.smartHomeDataService.getStatsCards().subscribe(cards => {
   *   this.statsCards = cards;
   *   this.livingRoomTemp = cards.find(card => card.title === 'Living Room');
   *   this.outsideHumidity = cards.find(card => card.title === 'Outside');
   *   this.waterConsumption = cards.find(card => card.title === 'Water');
   *   this.internetUsage = cards.find(card => card.title === 'Internet');
   * });
   * ```
   */
  getStatsCards(): Observable<SmartStatsCardData[]> {
    return of([
      {
        title: 'Living Room',
        value: '21',
        unit: ' °C',
        description: 'Temperature',
        gradient: 'from-blue-500 to-violet-500'
      },
      {
        title: 'Outside',
        value: '44',
        unit: '  %',
        description: 'Humidity',
        gradient: 'from-blue-500 to-violet-500'
      },
      {
        title: 'Water',
        value: '87',
        unit: ' m³',
        description: 'Consumption',
        gradient: 'from-blue-500 to-violet-500'
      },
      {
        title: 'Internet',
        value: '417',
        unit: ' GB',
        description: 'All devices',
        gradient: 'from-blue-500 to-violet-500'
      }
    ]);
  }

  /**
   * Retrieves camera gallery data with live feeds and status.
   * 
   * Returns camera data including:
   * - Multiple camera locations (Lounge, Office, Attic)
   * - Active/inactive status for each camera
   * - Background images for camera feeds
   * - Timestamps and recording status
   * 
   * @returns Observable<CameraGalleryData> - Camera gallery configuration
   * 
   * @example
   * ```typescript
   * this.smartHomeDataService.getCameraGalleryData().subscribe(cameraData => {
   *   this.cameras = cameraData.cameras;
   *   this.activeCameras = cameraData.cameras.filter(cam => cam.active);
   *   this.loungeCamera = cameraData.cameras.find(cam => cam.name === 'Lounge');
   *   this.officeCamera = cameraData.cameras.find(cam => cam.name === 'Office');
   *   this.atticCamera = cameraData.cameras.find(cam => cam.name === 'Attic');
   * });
   * ```
   */
  getCameraGalleryData(): Observable<CameraGalleryData> {
    return of({
      title: 'Cameras',
      cameras: [
        {
          id: 'cam1',
          name: 'Lounge',
          active: true,
          backgroundImage: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/smart-home-1.jpg',
          timestamp: '17.05.2021 4:34PM',
          status: 'Recording'
        },
        {
          id: 'cam2',
          name: 'Office',
          active: false,
          backgroundImage: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/smart-home-2.jpg',
          timestamp: '17.05.2021 4:35PM',
          status: 'Recording'
        },
        {
          id: 'cam3',
          name: 'Attic',
          active: false,
          backgroundImage: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/smart-home-3.jpg',
          timestamp: '17.05.2021 4:57PM',
          status: 'Recording'
        }
      ]
    });
  }

  /**
   * Retrieves device cards with status and control information.
   * 
   * Returns device data including:
   * - Various smart devices (humidity, temperature, air conditioner, lights, wifi)
   * - Device status (active/inactive)
   * - Inactive time tracking
   * - Device icons and theme settings
   * - Add new device button
   * 
   * @returns Observable<DeviceCardData[]> - Array of device cards
   * 
   * @example
   * ```typescript
   * this.smartHomeDataService.getDeviceCards().subscribe(devices => {
   *   this.deviceCards = devices;
   *   this.activeDevices = devices.filter(device => device.status === true);
   *   this.inactiveDevices = devices.filter(device => device.status === false);
   *   this.humidityDevice = devices.find(device => device.name === 'Humidity');
   *   this.temperatureDevice = devices.find(device => device.name === 'Temperature');
   *   this.airConditioner = devices.find(device => device.name === 'Air Conditioner');
   *   this.lightsDevice = devices.find(device => device.name === 'Lights');
   *   this.wifiDevice = devices.find(device => device.name === 'Wi-fi');
   *   this.addDeviceButton = devices.find(device => device.isAddButton);
   * });
   * ```
   */
  getDeviceCards(): Observable<DeviceCardData[]> {
    return of([
      {
        id: 'humidity',
        name: 'Humidity',
        status: false,
        inactiveTime: '2 days',
        icon: 'humidity-icon',
        darkTheme: false
      },
      {
        id: 'temperature',
        name: 'Temperature',
        status: true,
        inactiveTime: null,
        icon: 'temperature-icon',
        darkTheme: true
      },
      {
        id: 'air-conditioner',
        name: 'Air Conditioner',
        status: false,
        inactiveTime: '1 hour',
        icon: 'air-conditioner-icon',
        darkTheme: false
      },
      {
        id: 'lights',
        name: 'Lights',
        status: false,
        inactiveTime: '27 min',
        icon: 'lights-icon',
        darkTheme: false
      },
      {
        id: 'wifi',
        name: 'Wi-fi',
        status: true,
        inactiveTime: null,
        icon: 'wifi-icon',
        darkTheme: true
      },
      {
        id: 'new-device',
        name: 'New device',
        status: null,
        inactiveTime: null,
        icon: 'plus',
        darkTheme: false,
        isAddButton: true
      }
    ]);
  }

  /**
   * Retrieves device limit configuration for temperature control.
   * 
   * Returns device limit data including:
   * - Current temperature value
   * - Minimum and maximum temperature limits
   * - Temperature unit (°C)
   * - Control label for user interface
   * 
   * @returns Observable<DeviceLimitData> - Device limit configuration
   * 
   * @example
   * ```typescript
   * this.smartHomeDataService.getDeviceLimitData().subscribe(limitData => {
   *   this.currentTemp = limitData.currentValue; // 21
   *   this.minTemp = limitData.minValue; // 16
   *   this.maxTemp = limitData.maxValue; // 38
   *   this.tempUnit = limitData.unit; // "°C"
   *   this.tempLabel = limitData.label; // "Temperature"
   * });
   * ```
   */
  getDeviceLimitData(): Observable<DeviceLimitData> {
    return of({
      title: 'Device limit',
      currentValue: 21,
      unit: '°C',
      minValue: 16,
      maxValue: 38,
      label: 'Temperature'
    });
  }

  /**
   * Retrieves consumption chart data with room-by-room breakdown.
   * 
   * Returns consumption data including:
   * - Total watts consumption
   * - Room-specific consumption percentages
   * - Color coding for each room
   * - Living Room, Kitchen, Attic, Garage, Basement breakdown
   * 
   * @returns Observable<ConsumptionChartData> - Consumption chart configuration
   * 
   * @example
   * ```typescript
   * this.smartHomeDataService.getConsumptionChartData().subscribe(consumptionData => {
   *   this.totalWatts = consumptionData.totalWatts; // "310.0"
   *   this.roomConsumption = consumptionData.rooms;
   *   this.livingRoomConsumption = consumptionData.rooms.find(room => room.name === 'Living Room');
   *   this.kitchenConsumption = consumptionData.rooms.find(room => room.name === 'Kitchen');
   *   this.atticConsumption = consumptionData.rooms.find(room => room.name === 'Attic');
   *   this.garageConsumption = consumptionData.rooms.find(room => room.name === 'Garage');
   *   this.basementConsumption = consumptionData.rooms.find(room => room.name === 'Basement');
   * });
   * ```
   */
  getConsumptionChartData(): Observable<ConsumptionChartData> {
    return of({
      totalWatts: '310.0',
      rooms: [
        {
          name: 'Living Room',
          percentage: '15%',
          color: 'from-blue-500 to-violet-500'
        },
        {
          name: 'Kitchen',
          percentage: '20%',
          color: 'from-slate-600 to-slate-300'
        },
        {
          name: 'Attic',
          percentage: '13%',
          color: 'from-blue-700 to-cyan-500'
        },
        {
          name: 'Garage',
          percentage: '32%',
          color: 'from-emerald-500 to-teal-400'
        },
        {
          name: 'Basement',
          percentage: '20%',
          color: 'from-orange-500 to-yellow-500'
        }
      ]
    });
  }

  /**
   * Retrieves daily consumption chart data with weekly tracking.
   * 
   * Returns daily consumption data including:
   * - Chart title for context
   * - Day labels (Mon through Sun)
   * - Consumption data points for each day
   * - Background color for chart styling
   * 
   * @returns Observable<ConsumptionDayChartData> - Daily consumption chart configuration
   * 
   * @example
   * ```typescript
   * this.smartHomeDataService.getConsumptionDayChartData().subscribe(dayChartData => {
   *   this.chartTitle = dayChartData.title; // "Consumption per day"
   *   this.dayLabels = dayChartData.labels; // ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
   *   this.consumptionData = dayChartData.data; // [150, 230, 380, 220, 420, 200, 70]
   *   this.chartBackgroundColor = dayChartData.backgroundColor; // "#3A416F"
   * });
   * ```
   */
  getConsumptionDayChartData(): Observable<ConsumptionDayChartData> {
    return of({
      title: 'Consumption per day',
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [150, 230, 380, 220, 420, 200, 70],
      backgroundColor: "#3A416F"
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
   * this.smartHomeDataService.getNavbarData().subscribe(navbarData => {
   *   this.breadcrumb = navbarData.breadcrumbTitle; // "Smart Home"
   *   this.notifications = navbarData.notifications;
   * });
   * ```
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Smart Home',
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
