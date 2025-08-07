import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from './sidebar-data.service';
import { AboutInfo } from '../components/steps/about-step/about-step';
import { AccountInfo } from '../components/steps/account-step/account-step';
import { WizardAddressInfo } from '../components/steps/wizard-address-step/wizard-address-step';

export interface WizardFormData {
  aboutInfo: AboutInfo;
  accountInfo: AccountInfo;
  addressInfo: WizardAddressInfo;
}

export interface WizardStep {
  id: string;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface WizardData {
  steps: WizardStep[];
  currentStep: string;
  pageTitle: string;
  pageSubtitle: string;
}

/**
 * WizardService
 * 
 * Provides mock data and configuration for the Wizard application module. This service
 * supplies comprehensive wizard functionality including multi-step form management,
 * step navigation, form data handling, and layout configuration. The service is designed
 * for demo and UI prototyping purposes, simulating backend responses for wizard
 * functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the wizard page
 * - Navbar data with breadcrumbs and notifications
 * - Wizard steps with active and completion states
 * - Form data for about, account, and address information
 * - Multi-step form configuration and navigation
 * - Step progression and form submission logic
 * 
 * @example
 * ```typescript
 * constructor(private wizardService: WizardService) {}
 * 
 * ngOnInit() {
 *   this.wizardService.getWizardData().subscribe(wizardData => {
 *     this.wizardSteps = wizardData.steps;
 *     this.currentStep = wizardData.currentStep;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class WizardService {
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar configuration data for the wizard page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the wizard interface.
   * 
   * @returns Observable<any> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.wizardService.getSidebarData().subscribe(sidebarData => {
   *   this.sidebarConfig = sidebarData;
   * });
   * ```
   */
  getSidebarData(): Observable<any> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves navbar configuration data with breadcrumbs and notifications.
   * 
   * Returns navbar data including:
   * - Breadcrumb navigation with icon, title, and section
   * - Search functionality configuration
   * - User authentication elements (Sign In, config, bell)
   * - Sample notification list with avatars, titles, and timestamps
   * - Custom SVG icons for notifications
   * 
   * @returns Observable<any> - Navbar configuration with notifications
   * 
   * @example
   * ```typescript
   * this.wizardService.getNavbarData().subscribe(navbarData => {
   *   this.breadcrumb = navbarData.breadcrumbTitle; // "Wizard"
   *   this.notifications = navbarData.notifications;
   *   this.newMessageNotification = navbarData.notifications[0];
   *   this.paymentNotification = navbarData.notifications[1];
   * });
   * ```
   */
  getNavbarData(): Observable<any> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Wizard',
      breadcrumbSection: 'Applications',
      searchPlaceholder: 'Type here...',
      signInText: 'Sign In',
      signInIcon: 'fa fa-user',
      configIcon: 'fa fa-cog',
      bellIcon: 'fa fa-bell',
      notifications: [
        {
          avatarUrl: './assets/img/team-2.jpg',
          title: 'New message from Laur',
          description: 'from Laur',
          time: '13 minutes ago'
        },
        {
          iconSvg: `<svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>credit-card</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                <g transform="translate(1716.000000, 291.000000)">
                  <g transform="translate(453.000000, 454.000000)">
                    <path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                    <path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>`,
          title: 'Payment successfully completed',
          description: 'Payment successfully completed',
          time: '2 days'
        }
      ]
    });
  }

  /**
   * Retrieves wizard data with steps and navigation configuration.
   * 
   * Returns wizard data including:
   * - Wizard steps (About, Account, Address) with states
   * - Current step identification
   * - Page title and subtitle for context
   * - Step completion tracking
   * 
   * @returns Observable<WizardData> - Wizard configuration
   * 
   * @example
   * ```typescript
   * this.wizardService.getWizardData().subscribe(wizardData => {
   *   this.wizardSteps = wizardData.steps;
   *   this.currentStep = wizardData.currentStep; // "about"
   *   this.pageTitle = wizardData.pageTitle; // "Build Your Profile"
   *   this.pageSubtitle = wizardData.pageSubtitle;
   *   this.activeStep = wizardData.steps.find(step => step.isActive);
   *   this.completedSteps = wizardData.steps.filter(step => step.isCompleted);
   *   this.aboutStep = wizardData.steps.find(step => step.id === 'about');
   *   this.accountStep = wizardData.steps.find(step => step.id === 'account');
   *   this.addressStep = wizardData.steps.find(step => step.id === 'address');
   * });
   * ```
   */
  getWizardData(): Observable<WizardData> {
    const steps: WizardStep[] = [
      { id: 'about', title: 'About', isActive: true, isCompleted: false },
      { id: 'account', title: 'Account', isActive: false, isCompleted: false },
      { id: 'address', title: 'Address', isActive: false, isCompleted: false }
    ];

    return of({
      steps,
      currentStep: 'about',
      pageTitle: 'Build Your Profile',
      pageSubtitle: 'This information will let us know more about you.'
    });
  }

  /**
   * Retrieves form data for all wizard steps.
   * 
   * Returns form data including:
   * - About information (name, email, profile image)
   * - Account information (design, code, develop preferences)
   * - Address information (street, city, country)
   * - Default values and form structure
   * 
   * @returns Observable<WizardFormData> - Wizard form configuration
   * 
   * @example
   * ```typescript
   * this.wizardService.getFormData().subscribe(formData => {
   *   this.aboutInfo = formData.aboutInfo;
   *   this.accountInfo = formData.accountInfo;
   *   this.addressInfo = formData.addressInfo;
   *   this.userFirstName = formData.aboutInfo.firstName;
   *   this.userEmail = formData.aboutInfo.email;
   *   this.profileImage = formData.aboutInfo.profileImage;
   *   this.designPreference = formData.accountInfo.design;
   *   this.codePreference = formData.accountInfo.code;
   *   this.developPreference = formData.accountInfo.develop;
   *   this.streetName = formData.addressInfo.streetName;
   *   this.city = formData.addressInfo.city;
   *   this.country = formData.addressInfo.country;
   * });
   * ```
   */
  getFormData(): Observable<WizardFormData> {
    const formData: WizardFormData = {
      aboutInfo: {
        firstName: '',
        lastName: '',
        email: '',
        profileImage: './assets/img/bruce-mars.jpg'
      },
      accountInfo: {
        design: false,
        code: false,
        develop: false
      },
      addressInfo: {
        streetName: '',
        streetNo: '',
        city: '',
        country: ''
      }
    };

    return of(formData);
  }

  /**
   * Retrieves multi-step form data with container configuration.
   * 
   * Returns multi-step form data including:
   * - Wizard steps with active and completion states
   * - Current step identification
   * - Container configuration for layout
   * - Content classes for styling
   * 
   * @returns Observable<any> - Multi-step form configuration
   * 
   * @example
   * ```typescript
   * this.wizardService.getMultistepFormData().subscribe(multistepData => {
   *   this.steps = multistepData.steps;
   *   this.currentStep = multistepData.currentStep;
   *   this.containerConfig = multistepData.containerConfig;
   *   this.showContainer = multistepData.containerConfig.showContainer;
   *   this.containerClasses = multistepData.containerConfig.containerClasses;
   *   this.contentClasses = multistepData.containerConfig.contentClasses;
   * });
   * ```
   */
  getMultistepFormData(): Observable<any> {
    const steps = [
      { id: 'about', title: 'About', isActive: true, isCompleted: false },
      { id: 'account', title: 'Account', isActive: false, isCompleted: false },
      { id: 'address', title: 'Address', isActive: false, isCompleted: false }
    ];

    return of({
      steps,
      currentStep: 'about',
      containerConfig: {
        showContainer: false, // Sin contenedor para wizard
        containerClasses: '',
        contentClasses: 'w-full max-w-full px-3 m-auto flex-0 lg:w-8/12'
      }
    });
  }

  /**
   * Updates wizard data and returns the updated configuration.
   * 
   * @param data - The wizard data to update
   * @returns Observable<WizardData> - Updated wizard configuration
   * 
   * @example
   * ```typescript
   * const updatedData = { ...this.wizardData, currentStep: 'account' };
   * this.wizardService.updateWizardData(updatedData).subscribe(updatedWizard => {
   *   this.wizardData = updatedWizard;
   *   this.currentStep = updatedWizard.currentStep;
   * });
   * ```
   */
  updateWizardData(data: WizardData): Observable<WizardData> {
    return of(data);
  }

  /**
   * Updates multi-step form data and returns the updated configuration.
   * 
   * @param data - The multi-step form data to update
   * @returns Observable<any> - Updated multi-step form configuration
   * 
   * @example
   * ```typescript
   * const updatedMultistepData = { ...this.multistepData, currentStep: 'address' };
   * this.wizardService.updateMultistepFormData(updatedMultistepData).subscribe(updatedData => {
   *   this.multistepData = updatedData;
   *   this.currentStep = updatedData.currentStep;
   * });
   * ```
   */
  updateMultistepFormData(data: any): Observable<any> {
    return of(data);
  }

  /**
   * Advances to the next step in the wizard.
   * 
   * Handles step progression logic and navigation.
   * 
   * @example
   * ```typescript
   * this.wizardService.nextStep();
   * // This will trigger step progression logic
   * ```
   */
  nextStep(): void {
    // Lógica para avanzar al siguiente paso
    console.log('Avanzando al siguiente paso');
  }

  /**
   * Returns to the previous step in the wizard.
   * 
   * Handles step regression logic and navigation.
   * 
   * @example
   * ```typescript
   * this.wizardService.prevStep();
   * // This will trigger step regression logic
   * ```
   */
  prevStep(): void {
    // Lógica para retroceder al paso anterior
    console.log('Retrocediendo al paso anterior');
  }

  /**
   * Submits the wizard form data.
   * 
   * Handles form submission logic and data processing.
   * 
   * @example
   * ```typescript
   * this.wizardService.sendForm();
   * // This will trigger form submission logic
   * ```
   */
  sendForm(): void {
    // Lógica para enviar el formulario
    console.log('Enviando formulario');
  }
} 