import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the automotive hero card component.
 * 
 * Provides all necessary information for displaying vehicle
 * status including charging information, range, and charging
 * station details.
 */
export interface HeroCardData {
  /** Information about the last charging session */
  sinceLastCharge: {
    /** Distance traveled since last charge */
    distance: number;
    /** Unit of measurement for distance (e.g., 'km', 'miles') */
    distanceUnit: string;
    /** Average energy consumption since last charge */
    averageEnergy: number;
    /** Unit of measurement for energy (e.g., 'kWh', 'Wh/km') */
    energyUnit: string;
  };
  /** Current available range of the vehicle */
  availableRange: number;
  /** Unit of measurement for range (e.g., 'km', 'miles') */
  rangeUnit: string;
  /** Information about the nearest charging station */
  nearestCharger: {
    /** Name or identifier of the charging station */
    location: string;
    /** Physical address of the charging station */
    address: string;
  };
  /** URL or path to the vehicle image */
  carImage: string;
}

/**
 * Automotive Hero Card Component
 * 
 * A specialized card component designed for automotive dashboard
 * displays. Shows key vehicle information including charging status,
 * range, and nearest charger location in a comprehensive format.
 * 
 * Features:
 * - Displays distance since last charge with energy consumption metrics
 * - Shows available range with customizable units (km, miles)
 * - Locates nearest charging station with detailed address information
 * - Displays vehicle image for visual identification
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Null-safe data handling with default values
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Flexible unit system for international compatibility
 * - Customizable vehicle image support
 * - No hardcoded values or styling
 * - Professional automotive interface
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional automotive interface
 * - Null-safe input processing
 * - Responsive design across devices
 * - Comprehensive vehicle information display
 * - Charging station integration
 * 
 * Use Cases:
 * - Automotive dashboards
 * - Electric vehicle management
 * - Fleet monitoring systems
 * - Vehicle tracking applications
 * - Charging station locators
 * - Energy consumption monitoring
 * 
 * The component serves as a comprehensive automotive hero card that can be
 * easily integrated into automotive applications and dashboards, providing
 * users with detailed vehicle status information including charging data,
 * range information, and charging station locations.
 * 
 * @example
 * ```html
 * <app-automotive-hero-card [data]="heroCardData"></app-automotive-hero-card>
 * ```
 * 
 * @example
 * ```typescript
 * const heroCardData: HeroCardData = {
 *   sinceLastCharge: {
 *     distance: 150,
 *     distanceUnit: "km",
 *     averageEnergy: 18.5,
 *     energyUnit: "kWh"
 *   },
 *   availableRange: 320,
 *   rangeUnit: "km",
 *   nearestCharger: {
 *     location: "Central Station",
 *     address: "123 Main St, Downtown"
 *   },
 *   carImage: "assets/img/vehicle.jpg"
 * };
 * ```
 */
@Component({
  selector: 'app-automotive-hero-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './automotive-hero-card.html'
})
export class AutomotiveHeroCardComponent {
  /**
   * Input data for the hero card.
   * 
   * Contains all vehicle information including charging status,
   * range data, charging station details, and vehicle image.
   * This input property defaults to null to prevent template
   * errors when data is not available.
   * 
   * @type {HeroCardData | null} - Complete vehicle data or null if not available
   */
  @Input() data: HeroCardData | null = null;
} 
