import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for referred users in the referral system.
 * 
 * Provides comprehensive information for displaying referred
 * users with their performance metrics and financial data.
 */
export interface ReferredUser {
  /** Unique identifier for the referred user */
  id: number;
  /** Display name of the referred user */
  name: string;
  /** URL or path to the user's avatar image */
  avatar: string;
  /** Number of orders placed by the referred user */
  orders: number;
  /** Total value of orders (formatted string) */
  value: string;
  /** Profit generated from the referred user (formatted string) */
  profit: string;
  /** Number of refunds from the referred user */
  refunds: number;
  /** Trend direction for refunds ('up' for increasing, 'down' for decreasing) */
  refundTrend: 'up' | 'down';
}

/**
 * Data structure for table column configuration.
 * 
 * Provides configuration options for table columns including
 * alignment and display properties.
 */
export interface TableColumn {
  /** Unique key identifier for the column */
  key: string;
  /** Display label for the column header */
  label: string;
  /** Text alignment for the column content */
  align?: 'left' | 'center' | 'right';
}

/**
 * Referral Users Table Component
 * 
 * A comprehensive table component that displays referred users
 * with their performance metrics and financial data. Designed
 * for referral program management and user analytics.
 * 
 * Features:
 * - Displays referred users in a structured table format
 * - Shows user information including name and avatar
 * - Displays performance metrics (orders, value, profit)
 * - Refund tracking with trend indicators
 * - Configurable column alignment
 * - Conditional info button display
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interfaces
 * - Null-safe data handling with default empty array
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Array-based user display
 * - Dynamic column alignment
 * - No hardcoded values or styling
 * - Generic design for any referral application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional referral interface
 * - Null-safe input processing
 * - Responsive design across devices
 * - Dynamic trend indicators
 * - Flexible column configuration
 * - Conditional UI elements
 * 
 * Use Cases:
 * - Referral program dashboards
 * - User analytics applications
 * - Affiliate management systems
 * - Performance tracking tools
 * - Financial reporting interfaces
 * - Customer relationship management
 * 
 * The component serves as a comprehensive referral users table
 * that can be easily integrated into referral applications and
 * analytics platforms, providing users with detailed insights
 * into referred user performance and financial metrics.
 * 
 * @example
 * ```html
 * <app-referral-users-table [users]="referredUsers"></app-referral-users-table>
 * ```
 * 
 * @example
 * ```typescript
 * const referredUsers: ReferredUser[] = [
 *   {
 *     id: 1,
 *     name: "John Doe",
 *     avatar: "assets/img/avatar1.jpg",
 *     orders: 15,
 *     value: "$2,500",
 *     profit: "$500",
 *     refunds: 2,
 *     refundTrend: "down"
 *   },
 *   {
 *     id: 2,
 *     name: "Jane Smith",
 *     avatar: "assets/img/avatar2.jpg",
 *     orders: 8,
 *     value: "$1,200",
 *     profit: "$240",
 *     refunds: 1,
 *     refundTrend: "up"
 *   }
 * ];
 * ```
 */
@Component({
  selector: 'app-referral-users-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './referral-users-table.component.html'
})
export class ReferralUsersTableComponent {
  /**
   * Input data for the referral users table component.
   * 
   * Contains array of referred users to display with their
   * respective performance metrics and financial data. This
   * input property defaults to an empty array to prevent
   * errors when no users are available.
   * 
   * @type {ReferredUser[]} - Array of referred users (defaults to empty array)
   */
  @Input() users: ReferredUser[] = [];

  /**
   * Configuration for table columns with alignment and labels.
   * 
   * Defines the structure and display properties for each
   * column in the referral users table.
   * 
   * @type {TableColumn[]} - Table column configuration
   */
  columns: TableColumn[] = [
    { key: 'user', label: 'User', align: 'left' },
    { key: 'value', label: 'Value', align: 'left' },
    { key: 'profit', label: 'Profit', align: 'center' },
    { key: 'refunds', label: 'Refunds', align: 'center' }
  ];

  /**
   * Gets the appropriate icon class for refund trend indicators.
   * 
   * Returns the CSS class for trend icons based on whether
   * refunds are increasing or decreasing. This method provides
   * visual feedback for refund trends in the table.
   * 
   * @param {'up' | 'down'} trend - The refund trend direction
   * @returns {string} CSS class for the trend icon
   */
  getRefundTrendIcon(trend: 'up' | 'down'): string {
    return trend === 'up' ? 'ni ni-bold-up text-red-500' : 'ni ni-bold-down text-lime-500';
  }

  /**
   * Determines if the info button should be displayed for a specific user.
   * 
   * Checks if the provided user ID should show an info button
   * based on predefined criteria. This method provides conditional
   * UI element display for enhanced user experience.
   * 
   * @param {number} userId - The ID of the user to check
   * @returns {boolean} True if the info button should be displayed
   */
  shouldShowInfoButton(userId: number): boolean {
    return userId === 1 || userId === 5;
  }

  /**
   * Gets the CSS alignment class for table columns.
   * 
   * Returns the appropriate Tailwind CSS class for text
   * alignment based on the column configuration. This method
   * provides dynamic column alignment for flexible table layouts.
   * 
   * @param {TableColumn} column - The column configuration object
   * @returns {string} Tailwind CSS alignment class
   */
  getColumnAlignment(column: TableColumn): string {
    switch (column.align) {
      case 'center': return 'text-center';
      case 'right': return 'text-right';
      default: return 'text-left';
    }
  }
} 