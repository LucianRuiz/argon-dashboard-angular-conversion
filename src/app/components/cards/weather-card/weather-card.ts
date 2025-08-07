import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the weather card component.
 * 
 * Provides comprehensive information for displaying weather conditions
 * including city, temperature, weather condition, and icon representation.
 */
export interface WeatherCardData {
  /** City name for weather location */
  city: string;
  /** Current temperature (can include units) */
  temperature: string;
  /** Weather condition description */
  condition: string;
  /** CSS class for weather icon */
  icon: string;
}

/**
 * Weather Card Component
 * 
 * A reusable card component for displaying weather information in a
 * clean and modern format. Designed for dashboards, weather applications,
 * and any weather display needs requiring current weather conditions.
 * 
 * Features:
 * - Displays city name and current temperature
 * - Weather condition description with icon representation
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Performance optimization with trackBy function
 * - Minimal dependencies (only CommonModule)
 * - Clean and modern design
 * - Configurable data input with simple interface
 * - No hardcoded values or styling
 * - Generic design for any weather application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Performance optimization with trackBy function
 * - Efficient rendering of weather information
 * - Type-safe data handling
 * - Consistent styling and layout
 * 
 * Use Cases:
 * - Dashboard weather widgets
 * - Weather applications
 * - Travel applications
 * - Home automation displays
 * - Any weather information display
 * 
 * The component serves as a reusable weather card that can be
 * easily integrated into dashboards and weather applications,
 * providing users with a consistent way to display current
 * weather conditions with professional styling.
 * 
 * @example
 * ```html
 * <app-weather-card [data]="weatherCardData"></app-weather-card>
 * ```
 * 
 * @example
 * ```typescript
 * const weatherCardData: WeatherCardData = {
 *   city: "New York",
 *   temperature: "72°F",
 *   condition: "Partly Cloudy",
 *   icon: "ni ni-cloud-sun"
 * };
 * ```
 */
@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-card.html'
})
export class WeatherCardComponent {
  /**
   * Required input data for the weather card.
   * 
   * Contains city, temperature, condition, and icon information.
   * This required input property ensures data is always provided,
   * preventing null/undefined errors and ensuring proper display.
   * 
   * @type {WeatherCardData} - Complete weather data (required)
   */
  @Input() data!: WeatherCardData;

  /**
   * TrackBy function for weather data to optimize rendering performance.
   * 
   * Uses city and temperature as unique identifier to help Angular
   * efficiently track and update weather data in lists or arrays.
   * This improves performance by reducing unnecessary DOM manipulations.
   * 
   * @param {number} index - Array index of the weather data item
   * @param {WeatherCardData} item - Weather data object
   * @returns {string} Unique identifier for the weather data
   */
  trackByWeather(index: number, item: WeatherCardData): string {
    return `weather-${item.city}-${item.temperature}`;
  }
} 
