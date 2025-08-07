import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * MULTISTEP FORM WIDGET COMPONENT
 * ========================================
 *
 * A reusable widget component for multi-step forms, providing navigation,
 * step tracking, and flexible container configuration.
 *
 * FEATURES:
 * - Dynamic step navigation and tracking
 * - Visual indication of active and completed steps
 * - Customizable container and content classes
 * - Responsive design with Tailwind CSS
 * - Emits events on step change
 *
 * USAGE:
 * <app-multistep-form [data]="formData" (stepChange)="onStepChange($event)"></app-multistep-form>
 *
 * REUSABILITY: High - Generic multi-step form navigation
 * COMPLEXITY: Medium - Dynamic classes and navigation logic
 */

/**
 * Interface representing a single step in the multistep form.
 *
 * @property {string} id - Unique identifier for the step
 * @property {string} title - Step title or label
 * @property {boolean} isActive - Whether the step is currently active
 * @property {boolean} isCompleted - Whether the step is completed
 *
 * @example
 * const step: FormStep = {
 *   id: 'step1',
 *   title: 'Personal Info',
 *   isActive: true,
 *   isCompleted: false
 * };
 */
export interface FormStep {
  id: string;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}

/**
 * Interface representing the complete data structure for the multistep form.
 *
 * @property {FormStep[]} steps - Array of steps in the form
 * @property {string} currentStep - ID of the current active step
 * @property {object} [containerConfig] - Optional container configuration
 * @property {boolean} containerConfig.showContainer - Whether to show the container
 * @property {string} [containerConfig.containerClasses] - Custom classes for the container
 * @property {string} [containerConfig.contentClasses] - Custom classes for the content
 *
 * @example
 * const formData: MultistepFormData = {
 *   steps: [
 *     { id: 'step1', title: 'Info', isActive: true, isCompleted: false },
 *     { id: 'step2', title: 'Details', isActive: false, isCompleted: false }
 *   ],
 *   currentStep: 'step1',
 *   containerConfig: {
 *     showContainer: true,
 *     containerClasses: 'mb-6',
 *     contentClasses: 'p-4'
 *   }
 * };
 */
export interface MultistepFormData {
  steps: FormStep[];
  currentStep: string;
  containerConfig?: {
    showContainer: boolean;
    containerClasses?: string;
    contentClasses?: string;
  };
}

/**
 * Multistep Form Widget Component
 *
 * A standalone component for rendering and managing multi-step forms with
 * dynamic navigation, visual step indicators, and flexible container options.
 *
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Emits events for step changes
 * - Responsive and accessible design
 * - Minimal dependencies (only CommonModule)
 *
 * REUSABILITY FEATURES:
 * - Configurable data input with complete interface
 * - Dynamic step rendering and navigation
 * - Customizable container and content classes
 * - No hardcoded values
 * - Easily extendable for various form flows
 *
 * USE CASES:
 * - Multi-step registration or onboarding forms
 * - Product creation or checkout wizards
 * - Survey or questionnaire flows
 * - Any process requiring step-by-step navigation
 *
 * INTEGRATION EXAMPLE:
 *
 * ```typescript
 * // In parent component
 * formData: MultistepFormData = {
 *   steps: [
 *     { id: 'info', title: 'Info', isActive: true, isCompleted: false },
 *     { id: 'media', title: 'Media', isActive: false, isCompleted: false }
 *   ],
 *   currentStep: 'info',
 *   containerConfig: { showContainer: true }
 * };
 *
 * onStepChange(stepId: string) {
 *   // Handle step change logic
 * }
 * ```
 */
@Component({
  selector: 'app-multistep-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multistep-form.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class MultistepFormComponent {
  /**
   * Multistep form data containing steps, current step, and container configuration.
   * @type {MultistepFormData}
   * @required
   */
  @Input() data!: MultistepFormData;
  /**
   * Event emitted when the user changes the step.
   * @type {EventEmitter<string>}
   */
  @Output() stepChange = new EventEmitter<string>();

  /**
   * TrackBy function for ngFor to optimize step rendering.
   * @param index - Current index
   * @param step - Current step object
   * @returns Step ID as unique identifier
   */
  trackByStep(index: number, step: FormStep): string {
    return step.id;
  }

  /**
   * Returns the CSS classes for a step button based on its state.
   * @param step - Step object
   * @param index - Step index
   * @returns CSS class string
   */
  getStepButtonClasses(step: FormStep, index: number): string {
    const baseClasses = 'before:w-3.4 before:h-3.4 before:rounded-circle rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:transition-all before:ease-linear before:content-[\'\'] sm:indent-0';
    const currentIndex = this.data && this.data.steps ? this.data.steps.findIndex(s => s.isActive) : 0;

    let classes = '';
    if (step.isCompleted || step.isActive) {
      classes = `${baseClasses} before:scale-120 before:bg-current text-slate-700`;
    } else {
      classes = `${baseClasses} before:bg-white text-slate-100`;
    }
    
    if (index > 0) {
      if (index <= currentIndex) {
        classes += ' after:top-1.25 after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:block after:h-0.5 after:w-full after:bg-current after:transition-all after:ease-linear after:content-[\'\']';
      } else {
        classes += ' after:top-1.25 after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:block after:h-0.5 after:w-full after:bg-gray-300 after:transition-all after:ease-linear after:content-[\'\']';
      }
    }
    return classes;
  }

  /**
   * Returns the CSS classes for the step text based on its state.
   * @param step - Step object
   * @returns CSS class string
   */
  getStepTextClasses(step: FormStep): string {
    return step.isActive ? 'text-slate-400' : 'text-slate-100';
  }

  /**
   * Emits the stepChange event when a step is clicked.
   * @param stepId - ID of the clicked step
   */
  onStepClick(stepId: string): void {
    this.stepChange.emit(stepId);
  }

  /**
   * Returns the CSS classes for the main container based on configuration.
   * @returns CSS class string
   */
  getContainerClasses(): string {
    const config = this.data?.containerConfig;
    if (config?.showContainer === false) {
      return '';
    }
    return config?.containerClasses || 'mb-6';
  }

  /**
   * Returns the CSS classes for the navigation bar based on configuration.
   * @returns CSS class string
   */
  getNavigationClasses(): string {
    const config = this.data?.containerConfig;
    if (config?.showContainer === false) {
      return 'flex flex-wrap mt-12 -mx-3';
    }
    return 'flex flex-wrap px-4 -mx-3';
  }

  /**
   * Returns the CSS classes for the navigation container based on configuration.
   * @returns CSS class string
   */
  getNavigationContainerClasses(): string {
    const config = this.data?.containerConfig;
    if (config?.showContainer === false) {
      return 'w-full max-w-full px-3 mx-auto my-12 flex-0 lg:w-8/12';
    }
    return 'w-full max-w-full p-6 mx-auto mb-6 bg-white dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl flex-0 lg:w-8/12';
  }

  /**
   * Returns the CSS grid classes for the steps based on the number of steps.
   * @returns CSS class string
   */
  getGridClasses(): string {
    const stepCount = this.data?.steps?.length || 4;
    return `grid-cols-${stepCount}`;
  }

  /**
   * Returns the CSS classes for the content wrapper based on configuration.
   * @returns CSS class string
   */
  getContentWrapperClasses(): string {
    const config = this.data?.containerConfig;
    if (config?.showContainer === false) {
      return 'flex flex-wrap -mx-3';
    }
    return 'flex flex-wrap -mx-3';
  }

  /**
   * Returns the CSS classes for the content container based on configuration.
   * @returns CSS class string
   */
  getContentContainerClasses(): string {
    const config = this.data?.containerConfig;
    if (config?.showContainer === false) {
      return 'w-full max-w-full px-3 m-auto flex-0 lg:w-8/12';
    }
    return config?.contentClasses || 'w-full max-w-full px-3 m-auto flex-0 lg:w-8/12';
  }
} 