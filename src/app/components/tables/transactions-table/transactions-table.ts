import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing a financial transaction item
 * Defines the structure for individual income or expense transactions
 */
export interface Transaction {
  /** Transaction type: 'income' for incoming money, 'expense' for outgoing money */
  type: 'income' | 'expense';
  /** Company, merchant, or source name for the transaction */
  company: string;
  /** Transaction date (formatted string) */
  date: string;
  /** Transaction amount (formatted string with currency) */
  amount: string;
  /** Tailwind CSS gradient class for amount text color */
  amountColor: string;
}

/**
 * Interface representing the complete transactions table data structure
 * Contains table header information and transaction list
 */
export interface TransactionsTableData {
  /** Table title/header text */
  title: string;
  /** Time period for the transaction data (e.g., 'This Month', 'Last Week') */
  period: string;
  /** Array of transactions to display */
  transactions: Transaction[];
}

/**
 * Transactions Table Component
 * 
 * A comprehensive table component for displaying financial transactions with:
 * - Income and expense categorization with visual indicators
 * - Color-coded amounts with gradient text effects
 * - Company/merchant information and transaction dates
 * - Interactive elements with hover and active states
 * 
 * Features:
 * - Responsive design with dark mode support
 * - Visual distinction between income (green) and expense (red) transactions
 * - Gradient text effects for amount display
 * - Clean list layout with separators
 * - Accessible button interactions with proper ARIA support
 * - Smooth transitions and hover effects
 * 
 * Usage:
 * ```html
 * <app-transactions-table [data]="transactionData"></app-transactions-table>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const transactionData: TransactionsTableData = {
 *   title: 'Recent Transactions',
 *   period: 'This Week',
 *   transactions: [
 *     {
 *       type: 'expense',
 *       company: 'Amazon',
 *       date: 'Dec 23, 2023',
 *       amount: '-$89.99',
 *       amountColor: 'from-red-500 to-pink-500'
 *     }
 *   ]
 * };
 * ```
 */
@Component({
  selector: 'app-transactions-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions-table.html'
})
export class TransactionsTableComponent {
  /** Complete transactions table data including title, period, and transaction list */
  @Input() data!: TransactionsTableData;
} 
