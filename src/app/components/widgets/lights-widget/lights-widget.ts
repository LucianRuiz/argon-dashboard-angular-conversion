import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * LIGHTS WIDGET COMPONENT
 * ========================================
 *
 * A component for displaying light control information with toggle functionality.
 *
 * FEATURES:
 * - Displays light control with title and image
 * - Toggle functionality for light state
 * - Configurable styling and layout
 * - Responsive design with Tailwind CSS
 *
 * USAGE:
 * <app-lights-widget [data]="lightsData"></app-lights-widget>
 *
 * REUSABILITY: High - Generic light control widget
 * COMPLEXITY: Low - Simple light state display
 */

/**
 * Interface for lights widget data.
 *
 * @property {string} title - Widget title
 * @property {string} imageUrl - Image URL for light representation
 * @property {boolean} isChecked - Light state (on/off)
 *
 * @example
 * const lightsData: LightsWidgetData = {
 *   title: 'Living Room Lights',
 *   imageUrl: '/assets/img/lights-on.jpg',
 *   isChecked: true
 * };
 */
export interface LightsWidgetData {
  title: string;
  imageUrl: string;
  isChecked: boolean;
}

/**
 * Lights widget component for displaying light control information.
 */
@Component({
  selector: 'app-lights-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lights-widget.html'
})
export class LightsWidgetComponent {
  /**
   * Lights widget data containing control configuration.
   * @type {LightsWidgetData}
   * @required
   */
  @Input() data!: LightsWidgetData;
} 