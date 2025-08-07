import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SidebarComponent } from '../../../../components/layout/sidebar/sidebar';
import { NavbarComponent } from '../../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';
import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';
import { MultistepFormComponent, FormStep, MultistepFormData } from '../../../../components/steps/multistep-form/multistep-form';
import { UserInfoStepComponent, UserInfo } from '../../../../components/steps/user-info-step/user-info-step';
import { AddressStepComponent, AddressInfo } from '../../../../components/steps/address-step/address-step';
import { SocialsStepComponent, SocialsStepData } from '../../../../components/steps/socials-step/socials-step';
import { ProfileStepComponent, ProfileInfo } from '../../../../components/steps/profile-step/profile-step';
import { NewUserService, NewUserFormData } from '../../../../services/new-user.service';

/**
 * New User Component
 * 
 * This component implements the new user creation page for the application.
 * It provides a comprehensive multi-step form interface for creating new user
 * accounts with detailed information collection, address management, social
 * media integration, and profile configuration in a structured workflow.
 * 
 * Features:
 * - Multi-step form with 4 comprehensive steps
 * - User information collection and validation
 * - Address management with location data
 * - Social media integration and link management
 * - Profile configuration and customization
 * - Sidebar navigation for easy access to other sections
 * - Navbar with search and filtering capabilities
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Form validation and error handling
 * - Step-by-step progress tracking
 * - Data persistence across form steps
 * 
 * The component serves as a complete user creation interface, providing
 * administrators and system managers with a structured workflow to add
 * new users to the system with all necessary information, contact details,
 * and profile configurations in an organized and user-friendly manner.
 * 
 * @example
 * ```html
 * <app-new-user></app-new-user>
 * ```
 */
@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    PerfectScrollbarDirective,
    MultistepFormComponent,
    UserInfoStepComponent,
    AddressStepComponent,
    SocialsStepComponent,
    ProfileStepComponent
  ],
  templateUrl: './new-user.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class NewUserComponent {
  /** Observable for sidebar configuration data */
  public sidebarData$: Observable<any>;
  
  /** Observable for navbar configuration data */
  public navbarData$: Observable<any>;
  
  /** Observable for multi-step form configuration data */
  public multistepFormData$: Observable<MultistepFormData>;
  
  /** Observable for form data across all steps */
  public formData$: Observable<NewUserFormData>;
  
  /** Current active step index (0-based) */
  private currentStepIndex = 0;
  
  /** Array of step identifiers in order of progression */
  private steps = ['user', 'address', 'socials', 'profile'];
  
  /**
   * Creates an instance of NewUserComponent.
   * 
   * Initializes the component by subscribing to data streams from NewUserService
   * for sidebar configuration, navbar configuration, multi-step form, and form data.
   * 
   * @param newUserService - Service for managing new user data and form configurations
   */
  constructor(private newUserService: NewUserService) {
    this.sidebarData$ = this.newUserService.getSidebarData();
    this.navbarData$ = this.newUserService.getNavbarData();
    this.multistepFormData$ = this.newUserService.getMultistepFormData();
    this.formData$ = this.newUserService.getFormData();
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
   * Advances to the next step in the user creation form.
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
   * Returns to the previous step in the user creation form.
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
   * this would typically send the user data to a backend service
   * for user account creation in the database.
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

    this.multistepFormData$ = this.newUserService.updateMultistepFormData({
      steps,
      currentStep: this.steps[this.currentStepIndex]
    });
  }

  /**
   * Retrieves the display title for a given step identifier.
   * 
   * Maps step IDs to their corresponding display titles for clear
   * progression indication in the multi-step form.
   * 
   * @param stepId - The step identifier to get the title for
   * @returns The display title for the step, or the stepId if no mapping exists
   */
  private getStepTitle(stepId: string): string {
    const titles: { [key: string]: string } = {
      'user': 'User Info',
      'address': 'Address',
      'socials': 'Socials',
      'profile': 'Profile'
    };
    return titles[stepId] || stepId;
  }
} 
