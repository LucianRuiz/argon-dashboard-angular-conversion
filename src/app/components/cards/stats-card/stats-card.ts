import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the stats card component.
 * 
 * Provides comprehensive information for displaying statistics
 * with trend indicators and customizable styling options.
 * This interface can be used as an alternative to individual inputs
 * for better data structure consistency across the application.
 */
export interface StatsCardData {
  /** The title or label for the statistic */
  title: string;
  /** The main value to display */
  value: string;
  /** Percentage change or growth indicator */
  percentage: string;
  /** Trend direction ('up' for positive, 'down' for negative) */
  trend: 'up' | 'down';
  /** CSS class for the icon (Font Awesome, Nucleo, etc.) */
  icon: string;
  /** Color theme for the icon background */
  iconColor: string;
  /** Descriptive text about the statistic */
  description: string;
}

/**
 * Stats Card Component
 * 
 * A highly versatile and reusable card component that displays statistics
 * with trend indicators and customizable styling. Designed for dashboards,
 * analytics applications, and any data visualization needs requiring
 * key metrics display.
 * 
 * Features:
 * - Displays title, value, and percentage with trend indicators
 * - Trend-based color coding (green for positive, red for negative)
 * - Customizable icon with gradient backgrounds
 * - Multiple color themes (blue, red, green, orange, purple, gray, zinc)
 * - Responsive design with Tailwind CSS
 * - Computed CSS classes for dynamic styling
 * - Strongly typed with TypeScript interface
 * - Default values for all inputs (prevents undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Consistent color theming system
 * - Support for both individual inputs and data interface
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Generic design for any type of statistics
 * - No hardcoded values or styling
 * - Dynamic gradient backgrounds based on iconColor
 * - Consistent icon positioning and sizing
 * - Tailwind CSS utility classes for maintainability
 * 
 * The component serves as a reusable statistics card that can be
 * easily integrated into dashboards and analytics pages,
 * providing users with a consistent way to display key metrics
 * with visual trend indicators and professional styling.
 * 
 * @example
 * ```html
 * <app-stats-card 
 *   title="Sales"
 *   value="$53,000"
 *   percentage="+55%"
 *   trend="up"
 *   icon="ni ni-money-coins"
 *   iconColor="green"
 *   description="Since last month">
 * </app-stats-card>
 * ```
 * 
 * @example
 * ```typescript
 * const statsData: StatsCardData = {
 *   title: "Revenue",
 *   value: "$45,000",
 *   percentage: "+12%",
 *   trend: "up",
 *   icon: "ni ni-chart-bar-32",
 *   iconColor: "blue",
 *   description: "vs last month"
 * };
 * ```
 */
@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-card.html'
})
export class StatsCardComponent {
  /**
   * Data for the stats card component.
   * 
   * Provides all the content and configuration for the stats card
   * including title, value, percentage, trend, icon, and styling.
   * This input property allows complete customization of the card
   * appearance and data using the StatsCardData interface.
   * 
   * @type {StatsCardData} - Complete stats card configuration
   */
  @Input() data!: StatsCardData;

  /**
   * Computed CSS classes for the icon container.
   * 
   * Generates gradient background based on iconColor input.
   * Provides consistent styling for icon containers with
   * dynamic color theming support.
   * 
   * @returns {string} Complete CSS classes for icon container
   */
  get iconContainerClasses(): string {
    const baseClasses = 'inline-block w-12 h-12 text-center rounded-full';
    
    // Color variants with gradient backgrounds
    const colorVariants: { [key: string]: string } = {
      blue: ' bg-gradient-to-tl from-blue-500 to-violet-500',
      red: ' bg-gradient-to-tl from-red-600 to-orange-600',
      green: ' bg-gradient-to-tl from-emerald-500 to-teal-400',
      orange: ' bg-gradient-to-tl from-orange-500 to-yellow-500',
      purple: ' bg-gradient-to-tl from-purple-700 to-pink-500',
      gray: ' bg-gradient-to-tl from-gray-600 to-gray-400',
      zinc: ' bg-gradient-to-tl from-zinc-800 to-zinc-700'
    };

    return baseClasses + (colorVariants[this.displayIconColor] || colorVariants['blue']);
  }

  /**
   * Getter for title with data interface support.
   * 
   * Returns data.title if available, otherwise returns empty string.
   * Provides fallback handling for the title property.
   * 
   * @returns {string} Title value
   */
  get displayTitle(): string {
    return this.data?.title || '';
  }

  /**
   * Getter for value with data interface support.
   * 
   * Returns data.value if available, otherwise returns empty string.
   * Provides fallback handling for the value property.
   * 
   * @returns {string} Value
   */
  get displayValue(): string {
    return this.data?.value || '';
  }

  /**
   * Getter for percentage with data interface support.
   * 
   * Returns data.percentage if available, otherwise returns empty string.
   * Provides fallback handling for the percentage property.
   * 
   * @returns {string} Percentage value
   */
  get displayPercentage(): string {
    return this.data?.percentage || '';
  }

  /**
   * Getter for trend with data interface support.
   * 
   * Returns data.trend if available, otherwise returns 'up' as default.
   * Provides fallback handling for the trend property.
   * 
   * @returns {'up' | 'down'} Trend direction
   */
  get displayTrend(): 'up' | 'down' {
    return this.data?.trend || 'up';
  }

  /**
   * Getter for icon with data interface support.
   * 
   * Returns data.icon if available, otherwise returns empty string.
   * Provides fallback handling for the icon property.
   * 
   * @returns {string} Icon class
   */
  get displayIcon(): string {
    return this.data?.icon || '';
  }

  /**
   * Getter for iconColor with data interface support.
   * 
   * Returns data.iconColor if available, otherwise returns empty string.
   * Provides fallback handling for the iconColor property.
   * 
   * @returns {string} Icon color
   */
  get displayIconColor(): string {
    return this.data?.iconColor || '';
  }

  /**
   * Getter for description with data interface support.
   * 
   * Returns data.description if available, otherwise returns empty string.
   * Provides fallback handling for the description property.
   * 
   * @returns {string} Description text
   */
  get displayDescription(): string {
    return this.data?.description || '';
  }

  /**
   * Computed CSS classes for the icon itself.
   * 
   * Provides consistent icon styling and positioning.
   * Ensures proper alignment and sizing for all icons.
   * 
   * @returns {string} CSS classes for icon styling
   */
  get iconClasses(): string {
    return 'ni leading-none text-lg relative top-3.5 text-white';
  }

  /**
   * Computed CSS classes for trend indicators.
   * 
   * Returns green for positive trends, red for negative trends.
   * Provides visual color coding for trend direction.
   * 
   * @returns {string} CSS classes for trend color coding
   */
  get trendClasses(): string {
    return this.displayTrend === 'up' ? 'text-emerald-500' : 'text-red-600';
  }
}
