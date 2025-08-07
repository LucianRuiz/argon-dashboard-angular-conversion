import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * FULL BODY WIDGET COMPONENT
 * ========================================
 *
 * A component for displaying full body information with description and badge.
 *
 * FEATURES:
 * - Displays full body information with title and description
 * - Badge support for status indicators
 * - Configurable styling and layout
 * - Responsive design with Tailwind CSS
 *
 * USAGE:
 * <app-full-body-widget [data]="bodyData"></app-full-body-widget>
 *
 * REUSABILITY: High - Generic body information widget
 * COMPLEXITY: Low - Simple information display
 */

/**
 * Interface for full body widget data.
 *
 * @property {string} title - Widget title
 * @property {string} description - Description text
 * @property {Object} badge - Badge configuration
 * @property {string} badge.text - Badge text content
 * @property {string} badge.color - Badge color class
 *
 * @example
 * const bodyData: FullBodyWidgetData = {
 *   title: 'Body Composition',
 *   description: 'Complete body analysis and metrics',
 *   badge: {
 *     text: 'Healthy',
 *     color: 'bg-green-500'
 *   }
 * };
 */
export interface FullBodyWidgetData {
  title: string;
  description: string;
  badge: {
    text: string;
    color: string;
  };
}

/**
 * Full body widget component for displaying body information.
 */
@Component({
  selector: 'app-full-body-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './full-body-widget.html'
})
export class FullBodyWidgetComponent {
  /**
   * Full body widget data containing display configuration.
   * @type {FullBodyWidgetData}
   * @required
   */
  @Input() data!: FullBodyWidgetData;
} 