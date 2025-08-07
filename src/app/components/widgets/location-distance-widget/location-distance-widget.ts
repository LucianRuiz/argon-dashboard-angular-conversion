import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * LOCATION DISTANCE WIDGET COMPONENT
 * ========================================
 *
 * A component for displaying location distance information with customizable styling.
 *
 * FEATURES:
 * - Displays distance information with title and value
 * - Configurable icon and color styling
 * - Background gradient support
 * - Unit display for distance measurements
 * - Responsive design with Tailwind CSS
 *
 * USAGE:
 * <app-location-distance-widget [data]="distanceData"></app-location-distance-widget>
 *
 * REUSABILITY: High - Generic distance display widget
 * COMPLEXITY: Low - Simple distance information display
 */

/**
 * Interface for location distance widget data.
 *
 * @property {string} title - Widget title
 * @property {string} distance - Distance value to display
 * @property {string} unit - Unit of measurement (e.g., 'km', 'miles')
 * @property {string} icon - Icon class name
 * @property {string} iconColor - Icon color class
 * @property {string} backgroundGradient - Background gradient classes
 *
 * @example
 * const distanceData: LocationDistanceWidgetData = {
 *   title: 'Distance to Destination',
 *   distance: '2.5',
 *   unit: 'km',
 *   icon: 'fas fa-map-marker-alt',
 *   iconColor: 'text-green-500',
 *   backgroundGradient: 'bg-gradient-to-r from-green-500 to-blue-600'
 * };
 */
export interface LocationDistanceWidgetData {
  title: string;
  distance: string;
  unit: string;
  icon: string;
  iconColor: string;
  backgroundGradient: string;
}

/**
 * Location distance widget component for displaying distance information.
 */
@Component({
  selector: 'app-location-distance-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-distance-widget.html'
})
export class LocationDistanceWidgetComponent {
  /**
   * Location distance widget data containing display configuration.
   * @type {LocationDistanceWidgetData}
   * @required
   */
  @Input() data!: LocationDistanceWidgetData;
} 