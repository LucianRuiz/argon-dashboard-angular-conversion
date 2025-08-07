import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Interface representing user profile information
 * 
 * @description This interface defines the structure for collecting user's profile
 * information in a multi-step form. It includes public email and bio fields that
 * are typically used for user profiles, social media integration, or public-facing
 * user information. This data is commonly used in user registration, profile setup,
 * or social networking applications.
 * 
 * @interface ProfileInfo
 * @property {string} publicEmail - User's public email address for display
 * @property {string} bio - User's biography or personal description
 * 
 * @example
 * ```typescript
 * const profileInfo: ProfileInfo = {
 *   publicEmail: 'john.doe@example.com',
 *   bio: 'Full-stack developer passionate about creating innovative web applications.'
 * };
 * ```
 * 
 * @since 1.0.0
 * @author Argon Dashboard Team
 */
export interface ProfileInfo {
  publicEmail: string;
  bio: string;
}

/**
 * Profile Step Component for Multi-Step Forms
 * 
 * @description A standalone Angular component that handles the profile information
 * collection step in multi-step forms or user onboarding processes. This component
 * allows users to enter their public email and bio information with a clean interface
 * and proper form validation. It provides bidirectional navigation and a final send
 * action for form completion.
 * 
 * @component ProfileStepComponent
 * @selector app-profile-step
 * 
 * @features
 * - Profile information form with email and bio fields
 * - Two-way data binding for form inputs
 * - Bidirectional navigation (previous/send)
 * - Responsive design with Tailwind CSS
 * - Dark mode support
 * - Smooth visibility transitions
 * - Form validation integration
 * - Event emission for step navigation and form submission
 * 
 * @inputs
 * - profileInfo: ProfileInfo - The profile information data model with default values
 * - isActive: boolean - Controls the visibility and active state of the step
 * 
 * @outputs
 * - prev: EventEmitter<void> - Emitted when user clicks the previous button
 * - send: EventEmitter<void> - Emitted when user clicks the send/submit button
 * 
 * @example
 * ```html
 * <app-profile-step
 *   [profileInfo]="userProfile"
 *   [isActive]="currentStep === 4"
 *   (prev)="goToPreviousStep()"
 *   (send)="submitForm()">
 * </app-profile-step>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * userProfile: ProfileInfo = {
 *   publicEmail: '',
 *   bio: ''
 * };
 * 
 * goToPreviousStep(): void {
 *   this.currentStep--;
 * }
 * 
 * submitForm(): void {
 *   // Handle form submission
 *   console.log('Form submitted:', this.userProfile);
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
 * - Social media profile creation
 * - User onboarding processes
 * - Account information updates
 * - Multi-step data collection
 * - Public profile configuration
 * 
 * @since 1.0.0
 * @author Argon Dashboard Team
 */
@Component({
  selector: 'app-profile-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-step.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ProfileStepComponent {
  /**
   * Profile information data model with default values
   * 
   * @description Input property that receives the ProfileInfo object containing
   * the user's profile information. This data is bound to form inputs for
   * two-way data binding. The property has default values to ensure proper
   * initialization of the form.
   * 
   * @type {ProfileInfo}
   * @default { publicEmail: '', bio: '' }
   */
  @Input() profileInfo: ProfileInfo = {
    publicEmail: '',
    bio: ''
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
   * Event emitter for form submission
   * 
   * @description Emitted when the user clicks the send button, signaling
   * that the form is complete and ready for submission. The parent component
   * should listen to this event to handle form submission and data processing.
   * 
   * @type {EventEmitter<void>}
   */
  @Output() send = new EventEmitter<void>();

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
   * Handles the send button click event
   * 
   * @description Emits the send event to notify the parent component that
   * the user wants to submit the form. This method is typically called
   * from the template when the send button is clicked.
   * 
   * @example
   * ```html
   * <button (click)="onSend()">Send</button>
   * ```
   * 
   * @since 1.0.0
   */
  onSend(): void {
    this.send.emit();
  }
} 