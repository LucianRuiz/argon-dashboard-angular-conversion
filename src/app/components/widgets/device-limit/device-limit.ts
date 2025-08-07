import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing device limit data
 * Defines the structure for device limit/setting information
 */
export interface DeviceLimitData {
  /** Widget title displayed in the header */
  title: string;
  /** Current value of the device setting */
  currentValue: number;
  /** Unit of measurement (e.g., '°C', 'W', '%') */
  unit: string;
  /** Minimum allowed value for the setting */
  minValue: number;
  /** Maximum allowed value for the setting */
  maxValue: number;
  /** Label describing the current setting */
  label: string;
}

/**
 * Device Limit Component
 * 
 * A circular slider widget for setting device limits and values.
 * Uses a custom round-slider web component for interactive circular control.
 * 
 * Features:
 * - Interactive circular slider with round-slider web component
 * - Real-time value display in the center
 * - Min/max value range indicators
 * - Customizable units and labels
 * - Responsive design with dark mode support
 * - Smooth transitions and animations
 * - Value range validation and constraints
 * 
 * Technical Implementation:
 * - Uses CUSTOM_ELEMENTS_SCHEMA for web component support
 * - Integrates with round-slider custom element
 * - Dynamic value updates with proper initialization
 * - Math utility exposed for template calculations
 * 
 * Round Slider Configuration:
 * - Circular slider with value display
 * - Configurable min/max range
 * - Custom value labels
 * - Smooth transitions (500ms duration)
 * - Maximum width constraint for responsive design
 * 
 * Usage:
 * ```html
 * <app-device-limit [data]="limitData"></app-device-limit>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const limitData: DeviceLimitData = {
 *   title: 'Temperature Limit',
 *   currentValue: 22,
 *   unit: '°C',
 *   minValue: 16,
 *   maxValue: 30,
 *   label: 'Comfort'
 * };
 * ```
 * 
 * Dependencies:
 * - round-slider web component (must be loaded globally)
 * - CUSTOM_ELEMENTS_SCHEMA for web component support
 */
@Component({
  selector: 'app-device-limit',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './device-limit.html'
})
export class DeviceLimitComponent implements AfterViewInit {
  /** Device limit data including current value, range, and display settings */
  @Input() data!: DeviceLimitData;
  
  /** Math utility exposed for template calculations */
  Math = Math;

  /**
   * Initialize round slider after view is ready
   * Configures the round-slider web component with data values
   */
  ngAfterViewInit() {
    this.initRoundSlider();
  }

  /**
   * Initialize the round-slider web component
   * Sets up the slider with current value, range, and label
   */
  private initRoundSlider() {
    setTimeout(() => {
      const roundSlider = document.querySelector('round-slider') as any;
      if (roundSlider && this.data) {
        // Configure round slider with data values
        roundSlider.value = this.data.currentValue;
        roundSlider.min = this.data.minValue;
        roundSlider.max = this.data.maxValue;
        roundSlider.valueLabel = this.data.label;
      }
    }, 100);
  }
} 
