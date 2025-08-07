import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

// Layout components
import { SidebarComponent, SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';

// Widget components
import { ProfileHeaderComponent, ProfileHeaderWidgetData } from '../../../../components/headers/profile-header/profile-header';
import { MultistepFormComponent, FormStep, MultistepFormData } from '../../../../components/steps/multistep-form/multistep-form';

// Step components
import { ProductInfoStepComponent } from '../../../../components/steps/product-info-step/product-info-step';
import { MediaStepComponent } from '../../../../components/steps/media-step/media-step';
import { SocialsStepComponent } from '../../../../components/steps/socials-step/socials-step';
import { PricingStepComponent } from '../../../../components/steps/pricing-step/pricing-step';

// Services
import { NewProductDataService, FormData } from '../../../../services/new-product-data.service';

/**
 * New Product Component
 * 
 * This component implements the new product creation page for the ecommerce system.
 * It provides a comprehensive multi-step form interface for creating new products
 * with detailed information, media uploads, social media integration, and pricing
 * configuration in a structured and user-friendly workflow.
 * 
 * Features:
 * - Multi-step form with 4 comprehensive steps
 * - Product information collection and validation
 * - Media upload and management capabilities
 * - Social media integration and configuration
 * - Pricing and inventory management
 * - Profile header with navigation tabs
 * - Sidebar navigation for easy access
 * - Integration with Argon configurator for customization
 * - Responsive design for all screen sizes
 * - Form validation and error handling
 * 
 * The component serves as a complete product creation interface, providing
 * administrators and content managers with a structured workflow to add new
 * products to the ecommerce catalog with all necessary information and media.
 * 
 * @example
 * ```html
 * <app-new-product></app-new-product>
 * ```
 */
@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    FooterComponent,
    PerfectScrollbarDirective,
    ArgonConfiguratorComponent,
    ProfileHeaderComponent,
    MultistepFormComponent,
    ProductInfoStepComponent,
    MediaStepComponent,
    SocialsStepComponent,
    PricingStepComponent
  ],
  templateUrl: './new-product.html'
})
export class NewProductComponent {
  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for profile header widget data */
  profileHeaderData$: Observable<ProfileHeaderWidgetData>;
  
  /** Observable for multi-step form configuration data */
  multistepFormData$: Observable<MultistepFormData>;
  
  /** Observable for form data across all steps */
  formData$: Observable<FormData>;

  /** Current active step index (0-based) */
  private currentStepIndex = 0;
  
  /** Array of step identifiers in order of progression */
  private steps = ['info', 'media', 'socials', 'pricing'];

  /**
   * Creates an instance of NewProductComponent.
   * 
   * Initializes the component by subscribing to data streams from NewProductDataService
   * for sidebar configuration, profile header, multi-step form, and form data.
   * 
   * @param newProductDataService - Service for managing new product data and form configurations
   */
  constructor(private newProductDataService: NewProductDataService) {
    // Initialize data streams
    this.sidebarData$ = this.newProductDataService.getSidebarData();
    this.profileHeaderData$ = this.newProductDataService.getProfileHeaderData();
    this.multistepFormData$ = this.newProductDataService.getMultistepFormData();
    this.formData$ = this.newProductDataService.getFormData();
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
   * Advances to the next step in the product creation form.
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
   * Returns to the previous step in the product creation form.
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
   * this would typically send the product data to a backend service
   * for creation in the database.
   */
  onSendForm(): void {
    console.log('Formulario de producto enviado');
  }

  /**
   * Updates the multi-step form data with current step states.
   * 
   * Creates a new array of FormStep objects with updated active and
   * completed states based on the current step index. Then updates
   * the observable stream with the new data including container configuration.
   */
  private updateMultistepFormData(): void {
    const steps: FormStep[] = this.steps.map((stepId, index) => ({
      id: stepId,
      title: this.getStepTitle(stepId),
      isActive: index === this.currentStepIndex,
      isCompleted: index < this.currentStepIndex
    }));

    this.multistepFormData$ = this.newProductDataService.updateMultistepFormData({
      steps,
      currentStep: this.steps[this.currentStepIndex],
      containerConfig: {
        showContainer: false,
        containerClasses: 'mb-6',
        contentClasses: 'w-full max-w-full px-3 m-auto flex-0 lg:w-8/12'
      }
    });
  }

  /**
   * Retrieves the display title for a given step identifier.
   * 
   * Maps step IDs to their corresponding display titles with step numbers
   * for clear progression indication.
   * 
   * @param stepId - The step identifier to get the title for
   * @returns The display title for the step, or the stepId if no mapping exists
   */
  private getStepTitle(stepId: string): string {
    const titles: { [key: string]: string } = {
      'info': '1. Product Info',
      'media': '2. Media',
      'socials': '3. Socials',
      'pricing': '4. Pricing'
    };
    return titles[stepId] || stepId;
  }
} 