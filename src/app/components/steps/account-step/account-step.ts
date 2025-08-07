import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Interface representing user account preferences and skills
 * 
 * @description This interface defines the structure for collecting user's account preferences
 * and professional skills. It includes boolean flags for different areas of expertise
 * such as design, code, and development. This data is typically used in user onboarding
 * or profile setup processes to understand user capabilities and interests.
 * 
 * @interface AccountInfo
 * @property {boolean} design - Indicates if user has design skills/preferences
 * @property {boolean} code - Indicates if user has coding skills/preferences
 * @property {boolean} develop - Indicates if user has development skills/preferences
 * 
 * @example
 * ```typescript
 * const accountInfo: AccountInfo = {
 *   design: true,
 *   code: false,
 *   develop: true
 * };
 * ```
 * 
 * @since 1.0.0
 * @author Argon Dashboard Team
 */
export interface AccountInfo {
  design: boolean;
  code: boolean;
  develop: boolean;
}

/**
 * Account Step Component for Multi-Step Forms
 * 
 * @description A standalone Angular component that handles the account preferences step
 * in multi-step forms or user onboarding processes. This component allows users to
 * select their areas of expertise and professional interests through checkbox inputs.
 * It provides bidirectional navigation with previous and next functionality.
 * 
 * @component AccountStepComponent
 * @selector app-account-step
 * 
 * @features
 * - Checkbox-based skill selection
 * - Bidirectional navigation (previous/next)
 * - Responsive design with Tailwind CSS
 * - Dark mode support
 * - Smooth visibility transitions
 * - Two-way data binding
 * - Event emission for step navigation
 * 
 * @inputs
 * - data: AccountInfo - The account preferences data model
 * - isActive: boolean - Controls the visibility and active state of the step
 * 
 * @outputs
 * - prev: EventEmitter<void> - Emitted when user clicks the previous button
 * - next: EventEmitter<void> - Emitted when user clicks the next button
 * 
 * @example
 * ```html
 * <app-account-step
 *   [data]="accountInfo"
 *   [isActive]="currentStep === 2"
 *   (prev)="goToPreviousStep()"
 *   (next)="goToNextStep()">
 * </app-account-step>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * accountInfo: AccountInfo = {
 *   design: false,
 *   code: false,
 *   develop: false
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
 * 
 * @useCases
 * - User onboarding processes
 * - Profile setup wizards
 * - Skill assessment forms
 * - Professional preference collection
 * - Multi-step registration flows
 * - Account customization
 * 
 * @since 1.0.0
 * @author Argon Dashboard Team
 */
@Component({
  selector: 'app-account-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account-step.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AccountStepComponent {
  /**
   * Account preferences data model
   * 
   * @description Input property that receives the AccountInfo object containing
   * the user's account preferences and skill selections. This data is bound
   * to checkbox inputs for two-way data binding.
   * 
   * @type {AccountInfo}
   * @required
   */
  @Input() data!: AccountInfo;

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