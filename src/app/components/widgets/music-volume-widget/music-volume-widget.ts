import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * MUSIC VOLUME WIDGET COMPONENT
 * ========================================
 *
 * A component for displaying music volume information with customizable styling.
 *
 * FEATURES:
 * - Displays music volume with title and value
 * - Configurable icon and color styling
 * - Background gradient support
 * - Responsive design with Tailwind CSS
 *
 * USAGE:
 * <app-music-volume-widget [data]="volumeData"></app-music-volume-widget>
 *
 * REUSABILITY: High - Generic volume display widget
 * COMPLEXITY: Low - Simple volume information display
 */

/**
 * Interface for music volume widget data.
 *
 * @property {string} title - Widget title
 * @property {string} value - Volume value to display
 * @property {string} icon - Icon class name
 * @property {string} iconColor - Icon color class
 * @property {string} backgroundGradient - Background gradient classes
 *
 * @example
 * const volumeData: MusicVolumeWidgetData = {
 *   title: 'Volume',
 *   value: '75%',
 *   icon: 'fas fa-volume-up',
 *   iconColor: 'text-blue-500',
 *   backgroundGradient: 'bg-gradient-to-r from-blue-500 to-purple-600'
 * };
 */
export interface MusicVolumeWidgetData {
  title: string;
  value: string;
  icon: string;
  iconColor: string;
  backgroundGradient: string;
}

/**
 * Music volume widget component for displaying volume information.
 */
@Component({
  selector: 'app-music-volume-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-volume-widget.html'
})
export class MusicVolumeWidgetComponent {
  /**
   * Music volume widget data containing display configuration.
   * @type {MusicVolumeWidgetData}
   * @required
   */
  @Input() data!: MusicVolumeWidgetData;
} 