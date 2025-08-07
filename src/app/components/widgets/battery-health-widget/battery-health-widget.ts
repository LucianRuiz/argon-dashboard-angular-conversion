import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * BATTERY HEALTH WIDGET COMPONENT
 * ========================================
 *
 * A battery health monitoring widget that displays battery status
 * with customizable icons, colors, and gradient backgrounds.
 *
 * FEATURES:
 * - Battery status display with icon
 * - Customizable color schemes
 * - Gradient background support
 * - Responsive design with Tailwind CSS
 * - Dark mode compatibility
 * - Simple and clean interface
 *
 * USAGE:
 * <app-battery-health-widget [data]="batteryData"></app-battery-health-widget>
 *
 * REUSABILITY: High - Generic battery status widget
 * COMPLEXITY: Low - Simple display component
 */

/**
 * Interface for battery health widget data.
 *
 * @property {string} title - Widget title
 * @property {string} value - Battery status value
 * @property {string} icon - Icon class name (Nucleo Icons)
 * @property {string} iconColor - Tailwind CSS color class for icon
 * @property {string} backgroundGradient - Tailwind CSS gradient classes
 *
 * @example
 * const batteryData: BatteryHealthWidgetData = {
 *   title: 'Battery Health',
 *   value: '85%',
 *   icon: 'ni-battery-full',
 *   iconColor: 'text-success',
 *   backgroundGradient: 'from-green-500 to-emerald-500'
 * };
 */
export interface BatteryHealthWidgetData {
  /** Widget title */
  title: string;
  /** Battery status value */
  value: string;
  /** Icon class name (Nucleo Icons) */
  icon: string;
  /** Tailwind CSS color class for icon */
  iconColor: string;
  /** Tailwind CSS gradient classes */
  backgroundGradient: string;
}

/**
 * Battery health widget component for displaying battery status.
 * 
 * A widget component for showing battery health information
 * with customizable styling and icons.
 */
@Component({
  selector: 'app-battery-health-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './battery-health-widget.html'
})
export class BatteryHealthWidgetComponent {
  /** Battery health widget data including title, value, and styling */
  @Input() data!: BatteryHealthWidgetData;
} 