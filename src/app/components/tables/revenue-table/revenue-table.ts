import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing a revenue transaction item
 * Defines the structure for individual income or expense transactions
 */
export interface RevenueTransaction {
  /** Transaction type: 'income' for incoming money, 'expense' for outgoing money */
  type: 'income' | 'expense';
  /** Company or source name for the transaction */
  company: string;
  /** Transaction date (formatted string) */
  date: string;
  /** Transaction amount (formatted string with currency) */
  amount: string;
  /** Tailwind CSS gradient class for amount text color */
  amountColor: string;
}

/**
 * Interface representing the complete revenue table data structure
 * Contains table header information and transaction list
 */
export interface RevenueTableData {
  /** Table title/header text */
  title: string;
  /** Time period for the revenue data (e.g., 'This Month', 'Last Quarter') */
  period: string;
  /** Array of revenue transactions to display */
  transactions: RevenueTransaction[];
}

/**
 * Revenue Table Component
 * 
 * A specialized table component for displaying revenue transactions with:
 * - Income and expense categorization
 * - Visual indicators (arrows up/down) for transaction types
 * - Color-coded amounts with gradient text effects
 * - Company information and transaction dates
 * 
 * Features:
 * - Responsive design with dark mode support
 * - Visual distinction between income (green) and expense (red) transactions
 * - Gradient text effects for amount display
 * - Clean list layout with separators
 * - Accessible button interactions
 * 
 * Usage:
 * ```html
 * <app-revenue-table [data]="revenueData"></app-revenue-table>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const revenueData: RevenueTableData = {
 *   title: 'Revenue Overview',
 *   period: 'This Month',
 *   transactions: [
 *     {
 *       type: 'income',
 *       company: 'Netflix',
 *       date: 'Dec 23, 2023',
 *       amount: '+$2,500',
 *       amountColor: 'from-lime-500 to-green-500'
 *     }
 *   ]
 * };
 * ```
 */
@Component({
  selector: 'app-revenue-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './revenue-table.html'
})
export class RevenueTableComponent {
  /** Complete revenue table data including title, period, and transactions */
  @Input() data!: RevenueTableData;
} 
