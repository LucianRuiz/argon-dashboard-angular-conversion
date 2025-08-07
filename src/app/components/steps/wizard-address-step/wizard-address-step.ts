import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * ========================================
 * WIZARD ADDRESS STEP WIDGET COMPONENT
 * ========================================
 *
 * A form step widget for collecting address information in wizard-style forms,
 * with support for street details, city, and country.
 *
 * FEATURES:
 * - Street name and number fields
 * - City and country fields
 * - Form validation and state management
 * - Responsive design with Tailwind CSS
 * - Active/inactive state handling
 * - Navigation controls (previous/send)
 *
 * USAGE:
 * <app-wizard-address-step [data]="addressData" [isActive]="true" (prev)="onPrev()" (send)="onSend()"></app-wizard-address-step>
 *
 * REUSABILITY: High - Generic address information collection
 * COMPLEXITY: Low - Simple form fields with validation
 */

/**
 * Interface representing address information data structure.
 *
 * @property {string} streetName - Street name
 * @property {string} streetNo - Street number
 * @property {string} city - City name
 * @property {string} country - Country name
 *
 * @example
 * const addressInfo: WizardAddressInfo = {
 *   streetName: 'Main Street',
 *   streetNo: '123',
 *   city: 'New York',
 *   country: 'United States'
 * };
 */
export interface WizardAddressInfo {
  streetName: string;
  streetNo: string;
  city: string;
  country: string;
}

/**
 * Wizard Address Step Widget Component
 *
 * A standalone component for collecting address information in wizard-style forms,
 * with support for active/inactive states and navigation controls.
 *
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Form validation and state management
 * - Responsive design with Tailwind CSS
 * - Minimal dependencies (CommonModule, FormsModule)
 *
 * REUSABILITY FEATURES:
 * - Configurable address data input
 * - Active/inactive state management
 * - Event emission for navigation
 * - No hardcoded values
 * - Flexible styling options
 *
 * USE CASES:
 * - Address collection in checkout forms
 * - User profile address updates
 * - Shipping address forms
 * - Multi-step registration wizards
 *
 * INTEGRATION EXAMPLE:
 *
 * ```typescript
 * // In parent component
 * addressData: WizardAddressInfo = {
 *   streetName: '',
 *   streetNo: '',
 *   city: '',
 *   country: ''
 * };
 *
 * onPrev() {
 *   // Handle previous step navigation
 * }
 *
 * onSend() {
 *   // Handle form submission
 * }
 * ```
 */
@Component({
  selector: 'app-wizard-address-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wizard-address-step.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class WizardAddressStepComponent {
  /**
   * Address information data containing all form field values.
   * @type {WizardAddressInfo}
   * @required
   */
  @Input() data!: WizardAddressInfo;
  /**
   * Whether this step is currently active and visible.
   * @type {boolean}
   * @default false
   */
  @Input() isActive: boolean = false;
  /**
   * Event emitted when the user goes to the previous step.
   * @type {EventEmitter<void>}
   */
  @Output() prev = new EventEmitter<void>();
  /**
   * Event emitted when the user submits the form.
   * @type {EventEmitter<void>}
   */
  @Output() send = new EventEmitter<void>();

  /**
   * Returns CSS classes for the form container based on active state.
   * Provides visual feedback for active/inactive states with proper positioning.
   * @returns CSS class string
   */
  getFormClasses(): string {
    const baseClasses = 'absolute top-0 left-0 flex flex-col w-full h-auto min-w-0 p-4 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border';
    
    if (this.isActive) {
      return `${baseClasses} visible opacity-100`;
    } else {
      return `${baseClasses} invisible h-0 opacity-0`;
    }
  }

  /**
   * Emits the prev event when the user goes to the previous step.
   * Called when the previous button is clicked.
   */
  onPrev(): void {
    this.prev.emit();
  }

  /**
   * Emits the send event when the user submits the form.
   * Called when the send/submit button is clicked.
   */
  onSend(): void {
    this.send.emit();
  }
} 