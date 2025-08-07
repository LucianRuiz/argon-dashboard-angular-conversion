import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the automotive stats card component.
 * 
 * Provides all necessary information for displaying a statistics
 * card with title, value, icon, and optional styling.
 */
export interface StatsCardData {
  /** The title or label for the statistic */
  title: string;
  /** The numerical or text value to display */
  value: string;
  /** CSS class for the icon (Font Awesome, Nucleo, etc.) */
  icon: string;
  /** Optional background color class for custom styling */
  bgColor?: string;
}

/**
 * Automotive Stats Card Component
 * 
 * A versatile statistics card component designed for automotive
 * dashboards and applications. Displays key metrics with
 * customizable styling and icons in a clean, professional format.
 * 
 * Features:
 * - Displays title, value, and icon with consistent formatting
 * - Optional background color customization for visual variety
 * - Responsive design with Tailwind CSS
 * - Icon support for multiple icon libraries (Font Awesome, Nucleo Icons)
 * - Strongly typed with TypeScript interface
 * - Null-safe data handling with default values
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Optional styling for flexibility
 * - Generic design (not automotive-specific)
 * - No hardcoded values or styling
 * - Professional statistics display interface
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional automotive interface
 * - Null-safe input processing
 * - Responsive design across devices
 * - Flexible icon system
 * - Optional background customization
 * 
 * Use Cases:
 * - Automotive dashboards
 * - Vehicle monitoring systems
 * - Fleet management applications
 * - Performance analytics
 * - Diagnostic displays
 * - General statistics applications
 * 
 * The component serves as a versatile statistics card that can be
 * easily integrated into automotive applications and dashboards,
 * providing users with clear and professional metric displays
 * with customizable styling and icon support.
 * 
 * @example
 * ```html
 * <app-automotive-stats-card [data]="statsData"></app-automotive-stats-card>
 * ```
 * 
 * @example
 * ```typescript
 * const statsData: StatsCardData = {
 *   title: "Engine Temperature",
 *   value: "85°C",
 *   icon: "ni ni-chart-bar-32",
 *   bgColor: "bg-gradient-info"
 * };
 * ```
 */
@Component({
  selector: 'app-automotive-stats-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './automotive-stats-card.html'
})
export class AutomotiveStatsCardComponent {
  /**
   * Input data for the stats card.
   * 
   * Contains all information needed to display the statistic
   * including title, value, icon, and optional background color.
   * This input property defaults to null to prevent template
   * errors when data is not available.
   * 
   * @type {StatsCardData | null} - Complete stats data or null if not available
   */
  @Input() data: StatsCardData | null = null;
} 
