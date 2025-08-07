import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Product Action Interface
 * 
 * Interface for individual product action buttons
 */
export interface ProductAction {
  /** Action identifier */
  id: string;
  /** Action display text */
  text: string;
  /** Action icon class */
  icon?: string;
  /** CSS classes for styling */
  classes: string;
  /** Whether action is disabled */
  disabled?: boolean;
  /** Action type */
  type: 'primary' | 'secondary' | 'outline';
}

/**
 * Product Actions Data Interface
 * 
 * Interface for product action buttons configuration
 */
export interface ProductActionsData {
  /** Primary action (usually Add to Cart) */
  primaryAction: ProductAction;
  /** Whether product is available for purchase */
  isAvailable: boolean;
  /** Loading state */
  isLoading?: boolean;
}

/**
 * Product Actions Component
 * 
 * Component for product action buttons including Add to Cart
 * 
 * FEATURES:
 * - Primary action button (Add to Cart)
 * - Secondary action buttons
 * - Loading states
 * - Disabled states
 * - Event emission for actions
 * - Responsive design
 * - Dark mode support
 */
@Component({
  selector: 'app-product-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-actions.html'
})
export class ProductActionsComponent {
  @Input() data!: ProductActionsData;
  
  @Output() actionClick = new EventEmitter<{ actionId: string; action: ProductAction }>();

  /**
   * Handle action button click
   */
  onActionClick(action: ProductAction): void {
    if (!action.disabled && this.data.isAvailable) {
      this.actionClick.emit({ actionId: action.id, action });
    }
  }

  /**
   * Get primary action classes
   */
  getPrimaryActionClasses(): string {
    let base = 'inline-block w-full px-5 py-2.5 mb-0 text-sm font-bold text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer lg:mt-auto hover:-translate-y-px active:opacity-85 hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25';
    if (this.data.isLoading || !this.data.isAvailable) {
      base += ' opacity-50 cursor-not-allowed bg-gray-500';
    } else {
      base += ' bg-blue-500';
    }
    return base;
  }

  /**
   * Check if primary action is disabled
   */
  isPrimaryActionDisabled(): boolean {
    return !this.data.isAvailable || this.data.isLoading || false;
  }
} 