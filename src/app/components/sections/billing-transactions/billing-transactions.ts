import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BillingTransaction {
  id: number;
  type: 'income' | 'expense' | 'pending';
  company: string;
  date: string;
  amount: string;
  amountColor: string;
}

export interface BillingTransactionsData {
  title: string;
  period: string;
  sections: {
    newest: {
      title: string;
      transactions: BillingTransaction[];
    };
    yesterday: {
      title: string;
      transactions: BillingTransaction[];
    };
  };
}

@Component({
  selector: 'app-billing-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './billing-transactions.html'
})
export class BillingTransactionsComponent {
  @Input() data!: BillingTransactionsData;

  trackByTransaction(index: number, item: BillingTransaction): number {
    return item.id;
  }
} 