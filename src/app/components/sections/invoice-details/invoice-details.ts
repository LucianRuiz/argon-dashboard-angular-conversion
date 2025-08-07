import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaces definidas localmente (siguiendo estándar del prompt)
export interface InvoiceItem {
  id: number;
  item: string;
  qty: number;
  rate: number;
  amount: number;
}

export interface InvoiceDetailsData {
  companyInfo: {
    logo: string;
    logoDark: string;
    address: string;
    phone: string;
  };
  billingInfo: {
    customerName: string;
    address: string[];
  };
  invoiceDetails: {
    number: string;
    invoiceDate: string;
    dueDate: string;
  };
  items: InvoiceItem[];
  total: number;
  contactInfo: {
    email: string;
  };
}

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-details.html'
})
export class InvoiceDetailsComponent {
  @Input() data!: InvoiceDetailsData;

  trackByItem(index: number, item: InvoiceItem): number {
    return item.id || index;
  }
} 