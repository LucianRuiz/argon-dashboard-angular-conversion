import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * ========================================
 * USER INFO STEP WIDGET COMPONENT
 * ========================================
 *
 * A form step widget for collecting user information including personal details,
 * company information, and account credentials.
 *
 * FEATURES:
 * - Personal information fields (first name, last name)
 * - Company information field
 * - Email and password fields with confirmation
 * - Form validation and state management
 * - Responsive design with Tailwind CSS
 * - Active/inactive state handling
 *
 * USAGE:
 * <app-user-info-step [userInfo]="userData" [isActive]="true" (next)="onNext()"></app-user-info-step>
 *
 * REUSABILITY: High - Generic user information collection
 * COMPLEXITY: Low - Simple form fields with validation
 */

/**
 * Interface representing user information data structure.
 *
 * @property {string} firstName - User's first name
 * @property {string} lastName - User's last name
 * @property {string} company - User's company name
 * @property {string} email - User's email address
 * @property {string} password - User's password
 * @property {string} repeatPassword - Password confirmation
 *
 * @example
 * const userInfo: UserInfo = {
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   company: 'Acme Corp',
 *   email: 'john.doe@acme.com',
 *   password: 'securePassword123',
 *   repeatPassword: 'securePassword123'
 * };
 */
export interface UserInfo {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  password: string;
  repeatPassword: string;
}

/**
 * User Info Step Widget Component
 *
 * A standalone component for collecting user information in multi-step forms,
 * with support for active/inactive states and form validation.
 *
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Form validation and state management
 * - Responsive design with Tailwind CSS
 * - Minimal dependencies (CommonModule, FormsModule)
 *
 * REUSABILITY FEATURES:
 * - Configurable user data input
 * - Active/inactive state management
 * - Event emission for form progression
 * - No hardcoded values
 * - Flexible styling options
 *
 * USE CASES:
 * - User registration forms
 * - Account creation wizards
 * - Profile update forms
 * - Multi-step onboarding processes
 *
 * INTEGRATION EXAMPLE:
 *
 * ```typescript
 * // In parent component
 * userData: UserInfo = {
 *   firstName: '',
 *   lastName: '',
 *   company: '',
 *   email: '',
 *   password: '',
 *   repeatPassword: ''
 * };
 *
 * onNext() {
 *   // Handle form progression
 * }
 * ```
 */
@Component({
  selector: 'app-user-info-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-info-step.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class UserInfoStepComponent {
  /**
   * User information data containing all form field values.
   * @type {UserInfo}
   * @default Default empty values for all fields
   */
  @Input() userInfo: UserInfo = {
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    password: '',
    repeatPassword: ''
  };
  /**
   * Whether this step is currently active and visible.
   * @type {boolean}
   * @default false
   */
  @Input() isActive: boolean = false;
  /**
   * Event emitted when the user proceeds to the next step.
   * @type {EventEmitter<void>}
   */
  @Output() next = new EventEmitter<void>();

  /**
   * Returns CSS classes for the form container based on active state.
   * Provides visual feedback for active/inactive states.
   * @returns CSS class string
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
   * Emits the next event when the user proceeds to the next step.
   * Called when the next button is clicked.
   */
  onNext(): void {
    this.next.emit();
  }
} 