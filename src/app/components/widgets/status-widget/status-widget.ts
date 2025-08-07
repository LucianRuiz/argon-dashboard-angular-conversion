import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * STATUS WIDGET COMPONENT
 * ========================================
 *
 * A component for displaying different types of status widgets with various configurations.
 *
 * FEATURES:
 * - Multiple widget types: text, toggle, value
 * - Configurable icons, colors, and gradients
 * - Badge support for status indicators
 * - Toggle functionality for interactive widgets
 * - Responsive design with Tailwind CSS
 *
 * USAGE:
 * <app-status-widget [data]="statusData"></app-status-widget>
 *
 * REUSABILITY: High - Generic status display for dashboards
 * COMPLEXITY: Medium - Multiple widget types and configurations
 */

/**
 * Interface for badge/label data.
 *
 * @property {string} text - Badge text content
 * @property {string} color - Badge color class
 *
 * @example
 * const badge: BadgeData = {
 *   text: 'Active',
 *   color: 'bg-green-500'
 * };
 */
export interface BadgeData {
  text: string;
  color: string;
}

/**
 * Interface for status widget data.
 *
 * @property {string} title - Widget title
 * @property {string} [value] - Optional value to display
 * @property {string} [description] - Optional description text
 * @property {BadgeData} [badge] - Optional badge configuration
 * @property {string} [icon] - Optional icon class
 * @property {string} [iconColor] - Optional icon color class
 * @property {string} [backgroundGradient] - Optional background gradient
 * @property {boolean} [isToggle] - Optional toggle functionality flag
 * @property {boolean} [isChecked] - Optional toggle state
 * @property {string} [imageUrl] - Optional image URL
 * @property {'text' | 'toggle' | 'value'} widgetType - Widget display type
 *
 * @example
 * const statusData: StatusWidgetData = {
 *   title: 'System Status',
 *   value: 'Online',
 *   description: 'All systems operational',
 *   icon: 'fas fa-check-circle',
 *   iconColor: 'text-green-500',
 *   widgetType: 'text'
 * };
 */
export interface StatusWidgetData {
  title: string;
  value?: string;
  description?: string;
  badge?: BadgeData;
  icon?: string;
  iconColor?: string;
  backgroundGradient?: string;
  isToggle?: boolean;
  isChecked?: boolean;
  imageUrl?: string;
  widgetType: 'text' | 'toggle' | 'value';
}

/**
 * Status widget component for displaying different types of status information.
 */
@Component({
  selector: 'app-status-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-widget.html'
})
export class StatusWidgetComponent {
  /**
   * Status widget data containing configuration and content.
   * @type {StatusWidgetData}
   * @required
   */
  @Input() data!: StatusWidgetData;
} 