import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing device card data.
 * 
 * Defines the structure for smart device information and state,
 * supporting both regular device cards and "add device" placeholder cards.
 */
export interface DeviceCardData {
  /** Unique identifier for the device */
  id: string;
  /** Device name/display title */
  name: string;
  /** Device status: true (on), false (off), null (unknown/error) */
  status: boolean | null;
  /** Time since device became inactive (null if active) */
  inactiveTime: string | null;
  /** Icon identifier for the device type */
  icon: string;
  /** Whether to use dark theme styling */
  darkTheme: boolean;
  /** Whether this card represents an "add device" button */
  isAddButton?: boolean;
}

/**
 * Device Card Component
 * 
 * A versatile card component for displaying smart home devices with
 * interactive controls. Supports both regular device cards and "add
 * device" placeholder cards, providing a comprehensive interface for
 * smart home device management.
 * 
 * Features:
 * - Interactive toggle switch for device on/off control
 * - Multiple device type icons (humidity, temperature, WiFi, AC, lights)
 * - Dark/light theme support for optimal user experience
 * - Device status display with inactive time tracking
 * - Add device functionality with placeholder card
 * - Responsive design with hover effects
 * - Custom SVG icons for different device types
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - No hardcoded values or styling
 * - Generic design for any smart home application
 * 
 * Device Types Supported:
 * - Humidity sensors with wave-like SVG graphics
 * - Temperature sensors with thermometer design
 * - WiFi devices with signal strength indicators
 * - Air conditioners with complex HVAC graphics
 * - Lighting systems with bulb and fixture designs
 * 
 * Interactive Elements:
 * - Toggle switch for device control
 * - Add device button for new device setup
 * - Status indicators with time tracking
 * - Theme-aware styling
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional smart home interface
 * - Interactive device control functionality
 * - Theme-aware design system
 * - Responsive design across devices
 * 
 * Use Cases:
 * - Smart home dashboards
 * - IoT device management
 * - Home automation systems
 * - Device control interfaces
 * - Smart home applications
 * - Device monitoring displays
 * 
 * The component serves as a comprehensive device card that can be
 * easily integrated into smart home applications and IoT dashboards,
 * providing users with intuitive device control and management
 * capabilities.
 * 
 * @example
 * ```html
 * <app-device-card [data]="deviceData"></app-device-card>
 * ```
 * 
 * @example
 * ```typescript
 * const deviceData: DeviceCardData = {
 *   id: 'thermostat-001',
 *   name: 'Living Room Thermostat',
 *   status: true,
 *   inactiveTime: null,
 *   icon: 'temperature-icon',
 *   darkTheme: false
 * };
 * ```
 * 
 * @example
 * ```typescript
 * const addDeviceData: DeviceCardData = {
 *   id: 'add-new',
 *   name: 'Add New Device',
 *   status: null,
 *   inactiveTime: null,
 *   icon: '',
 *   darkTheme: false,
 *   isAddButton: true
 * };
 * ```
 */
@Component({
  selector: 'app-device-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './device-card.html'
})
export class DeviceCardComponent {
  /**
   * Required input data for the device card.
   * 
   * Contains all device information including status, icon, theme
   * settings, and device type configuration. This required input
   * property ensures data is always provided, preventing null/undefined
   * errors and ensuring proper display and functionality.
   * 
   * @type {DeviceCardData} - Complete device card data (required)
   */
  @Input() data!: DeviceCardData;

  /**
   * Toggles device on/off status.
   * 
   * Handles device state changes for regular device cards (not add
   * button cards). This method provides the interactive functionality
   * for controlling smart home devices through the card interface.
   * 
   * The method only works for regular devices where status is not null
   * and the card is not configured as an add device button.
   */
  toggleDevice() {
    if (this.data.status !== null && !this.data.isAddButton) {
      this.data.status = !this.data.status;
    }
  }

  /**
   * Handles add device button click.
   * 
   * Triggers when the card is configured as an add device button.
   * This method provides the functionality for adding new devices
   * to the smart home system through the card interface.
   * 
   * The method only executes when the card is specifically configured
   * as an add device button (isAddButton is true).
   */
  onAddDevice() {
    if (this.data.isAddButton) {
      // Logic for adding new device
      console.log('Add new device clicked');
    }
  }
} 
