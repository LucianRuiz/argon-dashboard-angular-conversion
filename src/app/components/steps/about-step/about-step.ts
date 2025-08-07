import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Interface representing the basic user information for the about step
 * 
 * @description This interface defines the structure for collecting user's basic personal information
 * including name, email, and profile image. It serves as the data model for the about step
 * in multi-step forms and user onboarding processes.
 * 
 * @interface AboutInfo
 * @property {string} firstName - User's first name (required)
 * @property {string} lastName - User's last name (required) 
 * @property {string} email - User's email address (required)
 * @property {string} profileImage - URL or path to user's profile image (required)
 * 
 * @example
 * ```typescript
 * const userInfo: AboutInfo = {
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   email: 'john.doe@example.com',
 *   profileImage: '/assets/images/profile.jpg'
 * };
 * ```
 * 
 * @since 1.0.0
 * @author Argon Dashboard Team
 */
export interface AboutInfo {
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
}

/**
 * About Step Component for Multi-Step Forms
 * 
 * @description A standalone Angular component that handles the first step of user onboarding
 * or multi-step forms. This component collects basic user information including name, email,
 * and profile image. It provides a clean, responsive interface with proper form validation
 * and smooth transitions between steps.
 * 
 * @component AboutStepComponent
 * @selector app-about-step
 * 
 * @features
 * - Two-way data binding for form inputs
 * - Responsive design with Tailwind CSS
 * - Dark mode support
 * - Smooth visibility transitions
 * - Form validation integration
 * - Event emission for step navigation
 * 
 * @inputs
 * - data: AboutInfo - The user information data model
 * - isActive: boolean - Controls the visibility and active state of the step
 * 
 * @outputs
 * - next: EventEmitter<void> - Emitted when user clicks the next button
 * 
 * @example
 * ```html
 * <app-about-step
 *   [data]="userInfo"
 *   [isActive]="currentStep === 1"
 *   (next)="goToNextStep()">
 * </app-about-step>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * userInfo: AboutInfo = {
 *   firstName: '',
 *   lastName: '',
 *   email: '',
 *   profileImage: ''
 * };
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
 * 
 * @useCases
 * - User registration forms
 * - Profile creation wizards
 * - Onboarding processes
 * - Multi-step data collection
 * - Account setup flows
 * 
 * @since 1.0.0
 * @author Argon Dashboard Team
 */
@Component({
  selector: 'app-about-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about-step.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AboutStepComponent {
  /**
   * User information data model
   * 
   * @description Input property that receives the AboutInfo object containing
   * the user's basic information. This data is bound to the form inputs
   * for two-way data binding.
   * 
   * @type {AboutInfo}
   * @required
   */
  @Input() data!: AboutInfo;

  /**
   * Controls the active state and visibility of the step
   * 
   * @description When true, the step is visible and active. When false,
   * the step is hidden with opacity 0 and height 0. This allows for
   * smooth transitions between steps in multi-step forms.
   * 
   * @type {boolean}
   * @default false
   */
  @Input() isActive: boolean = false;

  /**
   * Event emitter for step navigation
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
   * visible and opacity-100 classes. When inactive, it applies invisible,
   * h-0, and opacity-0 classes for smooth transitions.
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
    const baseClasses = 'absolute top-0 left-0 flex flex-col w-full h-auto min-w-0 p-4 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border';
    
    if (this.isActive) {
      return `${baseClasses} visible opacity-100`;
    } else {
      return `${baseClasses} invisible h-0 opacity-0`;
    }
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