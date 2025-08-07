import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Interface representing user address information
 * 
 * @description This interface defines the structure for collecting user's address
 * information in a multi-step form. It includes all standard address fields
 * such as street addresses, city, state, and zip code. This data is typically
 * used in user registration, profile setup, or shipping information forms.
 * 
 * @interface AddressInfo
 * @property {string} address1 - Primary street address (required)
 * @property {string} address2 - Secondary street address (optional, apartment, suite, etc.)
 * @property {string} city - City name (required)
 * @property {string} state - State or province (required)
 * @property {string} zip - ZIP or postal code (required)
 * 
 * @example
 * ```typescript
 * const addressInfo: AddressInfo = {
 *   address1: '123 Main Street',
 *   address2: 'Apt 4B',
 *   city: 'New York',
 *   state: 'NY',
 *   zip: '10001'
 * };
 * ```
 * 
 * @since 1.0.0
 * @author Argon Dashboard Team
 */
export interface AddressInfo {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}

/**
 * Address Step Component for Multi-Step Forms
 * 
 * @description A standalone Angular component that handles the address collection step
 * in multi-step forms or user onboarding processes. This component provides a clean
 * interface for users to enter their complete address information with proper form
 * validation and bidirectional navigation capabilities.
 * 
 * @component AddressStepComponent
 * @selector app-address-step
 * 
 * @features
 * - Complete address form with all standard fields
 * - Two-way data binding for form inputs
 * - Bidirectional navigation (previous/next)
 * - Responsive design with Tailwind CSS
 * - Dark mode support
 * - Smooth visibility transitions
 * - Form validation integration
 * - Event emission for step navigation
 * 
 * @inputs
 * - addressInfo: AddressInfo - The address information data model with default values
 * - isActive: boolean - Controls the visibility and active state of the step
 * 
 * @outputs
 * - prev: EventEmitter<void> - Emitted when user clicks the previous button
 * - next: EventEmitter<void> - Emitted when user clicks the next button
 * 
 * @example
 * ```html
 * <app-address-step
 *   [addressInfo]="userAddress"
 *   [isActive]="currentStep === 3"
 *   (prev)="goToPreviousStep()"
 *   (next)="goToNextStep()">
 * </app-address-step>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * userAddress: AddressInfo = {
 *   address1: '',
 *   address2: '',
 *   city: '',
 *   state: '',
 *   zip: ''
 * };
 * 
 * goToPreviousStep(): void {
 *   this.currentStep--;
 * }
 * 
 * goToNextStep(): void {
 *   this.currentStep++;
 * }
 * ```
 * 
 * @quality
 * - Standalone component for better tree-shaking
 * - Type-safe with TypeScript interfaces
 * - Responsive and accessible design
 * - Clean separation of concerns
 * - Consistent with other step components
 * - Default values for better UX
 * 
 * @useCases
 * - User registration forms
 * - Profile setup wizards
 * - Shipping address collection
 * - Billing address forms
 * - Multi-step onboarding processes
 * - Account information updates
 * - E-commerce checkout flows
 * 
 * @since 1.0.0
 * @author Argon Dashboard Team
 */
@Component({
  selector: 'app-address-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './address-step.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AddressStepComponent {
  /**
   * Address information data model with default values
   * 
   * @description Input property that receives the AddressInfo object containing
   * the user's address information. This data is bound to form inputs for
   * two-way data binding. The property has default values to ensure proper
   * initialization of the form.
   * 
   * @type {AddressInfo}
   * @default { address1: '', address2: '', city: '', state: '', zip: '' }
   */
  @Input() addressInfo: AddressInfo = {
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  };

  /**
   * Controls the active state and visibility of the step
   * 
   * @description When true, the step is visible and active. When false,
   * the step is hidden with opacity 0. This allows for smooth transitions
   * between steps in multi-step forms.
   * 
   * @type {boolean}
   * @default false
   */
  @Input() isActive: boolean = false;

  /**
   * Event emitter for previous step navigation
   * 
   * @description Emitted when the user clicks the previous button, signaling
   * that the user wants to go back to the previous step. The parent component
   * should listen to this event to handle backward navigation.
   * 
   * @type {EventEmitter<void>}
   */
  @Output() prev = new EventEmitter<void>();

  /**
   * Event emitter for next step navigation
   * 
   * @description Emitted when the user clicks the next button, signaling
   * that the current step is complete and ready to proceed to the next step.
   * The parent component should listen to this event to handle step transitions.
   * 
   * @type {EventEmitter<void>}
   */
  @Output() next = new EventEmitter<void>();

  /**
   * Generates CSS classes for the form container based on active state
   * 
   * @description Returns a string of CSS classes that control the visibility
   * and styling of the form container. When the step is active, it applies
   * block and opacity-100 classes. When inactive, it applies hidden and
   * opacity-0 classes for smooth transitions.
   * 
   * @returns {string} CSS classes for the form container
   * 
   * @example
   * ```html
   * <div [class]="getFormClasses()">
   *   <!-- Form content -->
   * </div>
   * ```
   * 
   * @since 1.0.0
   */
  getFormClasses(): string {
    const baseClasses = 'w-full flex flex-col min-w-0 p-6 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border';
    
    if (this.isActive) {
      return `${baseClasses} block opacity-100`;
    } else {
      return `${baseClasses} hidden opacity-0`;
    }
  }

  /**
   * Handles the previous button click event
   * 
   * @description Emits the prev event to notify the parent component that
   * the user wants to go back to the previous step. This method is typically
   * called from the template when the previous button is clicked.
   * 
   * @example
   * ```html
   * <button (click)="onPrev()">Previous</button>
   * ```
   * 
   * @since 1.0.0
   */
  onPrev(): void {
    this.prev.emit();
  }

  /**
   * Handles the next button click event
   * 
   * @description Emits the next event to notify the parent component that
   * the user wants to proceed to the next step. This method is typically
   * called from the template when the next button is clicked.
   * 
   * @example
   * ```html
   * <button (click)="onNext()">Next</button>
   * ```
   * 
   * @since 1.0.0
   */
  onNext(): void {
    this.next.emit();
  }
} 