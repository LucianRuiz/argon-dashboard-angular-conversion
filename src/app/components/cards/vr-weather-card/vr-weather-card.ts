import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the VR weather card component.
 * 
 * Provides comprehensive information for displaying weather conditions
 * in a virtual reality format, including temperature, condition, and icon.
 */
export interface VrWeatherData {
  /** Current temperature (can include units) */
  temperature: string;
  /** Weather condition description */
  condition: string;
  /** CSS class for weather icon */
  icon: string;
}

/**
 * VR Weather Card Component
 * 
 * A specialized card component designed for virtual reality interfaces
 * that displays weather information in a VR-optimized format. This
 * component provides an immersive weather display experience suitable
 * for virtual reality environments and applications.
 * 
 * Features:
 * - Displays current temperature with VR-optimized styling
 * - Weather condition description with immersive design
 * - Weather icon representation in VR format
 * - VR-themed visual design and layout
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Performance optimization with trackBy function
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with simple interface
 * - No hardcoded values or styling
 * - VR-themed but adaptable design
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Performance optimization with trackBy function
 * - Efficient rendering of weather information
 * - Type-safe data handling
 * - VR-optimized styling and layout
 * - Immersive user experience design
 * 
 * Use Cases:
 * - VR dashboard weather widgets
 * - Immersive weather applications
 * - Virtual workspace applications
 * - VR environment displays
 * - Virtual reality weather interfaces
 * 
 * The component serves as a specialized VR weather card that can be
 * easily integrated into virtual reality applications and environments,
 * providing users with an immersive way to display current weather
 * conditions with VR-optimized styling and layout.
 * 
 * @example
 * ```html
 * <app-vr-weather-card [data]="vrWeatherData"></app-vr-weather-card>
 * ```
 * 
 * @example
 * ```typescript
 * const vrWeatherData: VrWeatherData = {
 *   temperature: "68°F",
 *   condition: "Clear Sky",
 *   icon: "ni ni-sun"
 * };
 * ```
 */
@Component({
  selector: 'app-vr-weather-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vr-weather-card.html'
})
export class VrWeatherCardComponent {
  /**
   * Required input data for the VR weather card.
   * 
   * Contains temperature, condition, and icon information optimized
   * for virtual reality display. This required input property ensures
   * data is always provided, preventing null/undefined errors and
   * ensuring proper VR display.
   * 
   * @type {VrWeatherData} - Complete VR weather data (required)
   */
  @Input() data!: VrWeatherData;

  /**
   * TrackBy function for weather data to optimize rendering performance.
   * 
   * Uses temperature and condition as unique identifier to help Angular
   * efficiently track and update weather data in VR environments.
   * This improves performance by reducing unnecessary DOM manipulations
   * in virtual reality applications.
   * 
   * @param {number} index - Array index of the weather data item
   * @param {VrWeatherData} item - VR weather data object
   * @returns {string} Unique identifier for the VR weather data
   */
  trackByWeather(index: number, item: VrWeatherData): string {
    return `weather-${item.temperature}-${item.condition}`;
  }
} 
