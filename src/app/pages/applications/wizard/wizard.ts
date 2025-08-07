import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SidebarComponent } from '../../../components/layout/sidebar/sidebar';
import { NavbarComponent } from '../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../components/layout/argon-configurator/argon-configurator';
import { PerfectScrollbarDirective } from '../../../components/layout/sidebar/perfect-scrollbar.directive';
import { MultistepFormComponent, FormStep, MultistepFormData } from '../../../components/steps/multistep-form/multistep-form';
import { AboutStepComponent } from '../../../components/steps/about-step/about-step';
import { AccountStepComponent } from '../../../components/steps/account-step/account-step';
import { WizardAddressStepComponent } from '../../../components/steps/wizard-address-step/wizard-address-step';
import { WizardService, WizardFormData } from '../../../services/wizard.service';

/**
 * Wizard Application Component
 * 
 * This component implements a multi-step wizard application that guides users through
 * a form completion process with three main steps: About, Account, and Address.
 * The component manages form navigation, step progression, and data flow between
 * different form steps.
 * 
 * Features:
 * - Multi-step form navigation with progress tracking
 * - Dynamic step activation and completion states
 * - Integration with layout components (sidebar, navbar, footer)
 * - Form data management through WizardService
 * - Responsive design with Argon configurator support
 * 
 * @example
 * ```html
 * <app-wizard></app-wizard>
 * ```
 */
@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    PerfectScrollbarDirective,
    MultistepFormComponent,
    AboutStepComponent,
    AccountStepComponent,
    WizardAddressStepComponent
  ],
  templateUrl: './wizard.html'
})
export class WizardComponent {
  /** Observable for sidebar configuration data */
  public sidebarData$: Observable<any>;
  
  /** Observable for navbar configuration data */
  public navbarData$: Observable<any>;
  
  /** Observable for multi-step form configuration and state */
  public multistepFormData$: Observable<MultistepFormData>;
  
  /** Observable for form data across all wizard steps */
  public formData$: Observable<WizardFormData>;
  
  /** Current active step index (0-based) */
  private currentStepIndex = 0;
  
  /** Array of step identifiers in order of progression */
  private steps = ['about', 'account', 'address'];
  
  /**
   * Creates an instance of WizardComponent.
   * 
   * Initializes the component by subscribing to data streams from WizardService
   * for sidebar, navbar, multi-step form, and form data.
   * 
   * @param wizardService - Service for managing wizard data and form state
   */
  constructor(private wizardService: WizardService) {
    this.sidebarData$ = this.wizardService.getSidebarData();
    this.navbarData$ = this.wizardService.getNavbarData();
    this.multistepFormData$ = this.wizardService.getMultistepFormData();
    this.formData$ = this.wizardService.getFormData();
  }

  /**
   * Handles step change events from the multi-step form component.
   * 
   * Updates the current step index based on the provided step ID and
   * refreshes the multi-step form data to reflect the new state.
   * 
   * @param stepId - The identifier of the step to navigate to
   */
  onStepChange(stepId: string): void {
    this.currentStepIndex = this.steps.indexOf(stepId);
    this.updateMultistepFormData();
  }

  /**
   * Advances to the next step in the wizard.
   * 
   * Increments the current step index if not at the last step and
   * updates the multi-step form data accordingly.
   */
  onNextStep(): void {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.updateMultistepFormData();
    }
  }

  /**
   * Returns to the previous step in the wizard.
   * 
   * Decrements the current step index if not at the first step and
   * updates the multi-step form data accordingly.
   */
  onPrevStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.updateMultistepFormData();
    }
  }

  /**
   * Handles form submission when all steps are completed.
   * 
   * Currently logs a message to the console. In a real application,
   * this would typically send the form data to a backend service.
   */
  onSendForm(): void {
    console.log('Formulario enviado');
  }

  /**
   * Updates the multi-step form data with current step states.
   * 
   * Creates a new array of FormStep objects with updated active and
   * completed states based on the current step index. Then updates
   * the observable stream with the new data.
   */
  private updateMultistepFormData(): void {
    const steps: FormStep[] = this.steps.map((stepId, index) => ({
      id: stepId,
      title: this.getStepTitle(stepId),
      isActive: index === this.currentStepIndex,
      isCompleted: index < this.currentStepIndex
    }));

    this.multistepFormData$ = this.wizardService.updateMultistepFormData({
      steps,
      currentStep: this.steps[this.currentStepIndex]
    });
  }

  /**
   * Retrieves the display title for a given step identifier.
   * 
   * Maps step IDs to their corresponding display titles.
   * 
   * @param stepId - The step identifier to get the title for
   * @returns The display title for the step, or the stepId if no mapping exists
   */
  private getStepTitle(stepId: string): string {
    const titles: { [key: string]: string } = {
      'about': 'About',
      'account': 'Account',
      'address': 'Address'
    };
    return titles[stepId] || stepId;
  }
} 