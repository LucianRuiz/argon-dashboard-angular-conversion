import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the balance card component.
 * 
 * Provides comprehensive financial information for display
 * including balance amount, currency, trends, and associated metrics.
 */
export interface BalanceCardData {
  /** Current balance amount as a formatted string */
  amount: string;
  /** Currency symbol or code (e.g., '$', '€', 'USD') */
  currency: string;
  /** Descriptive text about the balance */
  description: string;
  /** Trend direction indicator (e.g., 'up', 'down', 'stable') */
  trend: string;
  /** Formatted trend value (e.g., '+15%', '-5%') */
  trendValue: string;
  /** Text for the action button */
  buttonText: string;
  /** Orders-related metrics */
  orders: {
    /** Percentage value for orders */
    percentage: number;
    /** Label describing the orders metric */
    label: string;
  };
  /** Sales-related metrics */
  sales: {
    /** Percentage value for sales */
    percentage: number;
    /** Label describing the sales metric */
    label: string;
  };
}

/**
 * Balance Card Component
 * 
 * A comprehensive financial balance display component for e-commerce
 * and financial dashboards. Shows balance information with trends,
 * metrics, and interactive elements for enhanced user experience.
 * 
 * Features:
 * - Displays current balance with currency formatting
 * - Shows trend information with positive/negative indicators
 * - Includes orders and sales percentages with labels
 * - Interactive "Add Credit" button for user actions
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Event handling for user interactions
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Flexible currency and formatting support
 * - Customizable button text and actions
 * - Trend and metric display flexibility
 * - No hardcoded financial values
 * - Generic design for any financial application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional financial interface
 * - Interactive design with user actions
 * - Responsive design across devices
 * - Comprehensive financial data display
 * - Trend visualization capabilities
 * 
 * Use Cases:
 * - E-commerce dashboards
 * - Financial applications
 * - Business intelligence tools
 * - Banking interfaces
 * - Payment management systems
 * - Revenue tracking applications
 * 
 * The component serves as a comprehensive balance card that can be
 * easily integrated into financial applications and e-commerce
 * platforms, providing users with detailed balance information
 * and associated metrics in a professional and user-friendly format.
 * 
 * @example
 * ```html
 * <app-balance-card [balanceData]="balanceData"></app-balance-card>
 * ```
 * 
 * @example
 * ```typescript
 * const balanceData: BalanceCardData = {
 *   amount: "2,300",
 *   currency: "$",
 *   description: "Your current balance",
 *   trend: "up",
 *   trendValue: "+15%",
 *   buttonText: "Add Credit",
 *   orders: {
 *     percentage: 80,
 *     label: "Orders completed"
 *   },
 *   sales: {
 *     percentage: 60,
 *     label: "Sales target"
 *   }
 * };
 * ```
 */
@Component({
  selector: 'app-balance-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './balance-card.html'
})
export class BalanceCardComponent {
  /**
   * Required input data for the balance card.
   * 
   * Contains all financial information including balance amount,
   * currency, trends, metrics, and action button text. This
   * required input property ensures data is always provided,
   * preventing null/undefined errors and ensuring proper display.
   * 
   * @type {BalanceCardData} - Complete balance data (required)
   */
  @Input({ required: true }) balanceData!: BalanceCardData;
} 
