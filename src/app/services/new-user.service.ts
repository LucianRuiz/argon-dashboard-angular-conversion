import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from './sidebar-data.service';
import { FormStep, MultistepFormData } from '../components/steps/multistep-form/multistep-form';
import { UserInfo } from '../components/steps/user-info-step/user-info-step';
import { AddressInfo } from '../components/steps/address-step/address-step';
import { SocialsStepData } from '../components/steps/socials-step/socials-step';
import { ProfileInfo } from '../components/steps/profile-step/profile-step';

/**
 * NewUserFormData interface containing all form step data for user creation
 */
export interface NewUserFormData {
  userInfo: UserInfo;
  addressInfo: AddressInfo;
  socialsInfo: SocialsStepData;
  profileInfo: ProfileInfo;
}

/**
 * NewUserService
 * 
 * Provides mock data and configuration for the New User page. This service supplies
 * data for creating new users through a multistep form interface, including user
 * information, address details, social media links, and profile settings.
 * The service is designed for demo and UI prototyping purposes, simulating backend
 * responses for user creation functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the new user page
 * - Navbar data with breadcrumbs and notifications
 * - Multistep form configuration with 4 steps (User Info, Address, Socials, Profile)
 * - Complete form data structure for all user creation fields
 * - Form state management and updates
 * 
 * @example
 * ```typescript
 * constructor(private newUserService: NewUserService) {}
 * 
 * ngOnInit() {
 *   this.newUserService.getMultistepFormData().subscribe(formData => {
 *     this.steps = formData.steps;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class NewUserService {
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar configuration data for the new user page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the new user creation interface.
   * 
   * @returns Observable<any> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.newUserService.getSidebarData().subscribe(sidebarData => {
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
   * - Notification list with avatars, titles, and timestamps
   * 
   * @returns Observable<any> - Navbar configuration with notifications
   * 
   * @example
   * ```typescript
   * this.newUserService.getNavbarData().subscribe(navbarData => {
   *   this.breadcrumb = navbarData.breadcrumbTitle;
   *   this.notifications = navbarData.notifications;
   * });
   * ```
   */
  getNavbarData(): Observable<any> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'New User',
      breadcrumbSection: 'Pages',
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
   * Retrieves multistep form configuration with step definitions and container settings.
   * 
   * Returns form structure with:
   * - 4 form steps: User Info, Address, Socials, Profile
   * - Current step tracking and completion status
   * - Container configuration for layout management
   * - Step navigation and state management
   * 
   * @returns Observable<MultistepFormData> - Multistep form configuration
   * 
   * @example
   * ```typescript
   * this.newUserService.getMultistepFormData().subscribe(formConfig => {
   *   this.steps = formConfig.steps;
   *   this.currentStep = formConfig.currentStep;
   *   this.containerConfig = formConfig.containerConfig;
   * });
   * ```
   */
  getMultistepFormData(): Observable<MultistepFormData> {
    const steps: FormStep[] = [
      { id: 'user', title: 'User Info', isActive: true, isCompleted: false },
      { id: 'address', title: 'Address', isActive: false, isCompleted: false },
      { id: 'socials', title: 'Socials', isActive: false, isCompleted: false },
      { id: 'profile', title: 'Profile', isActive: false, isCompleted: false }
    ];

    return of({
      steps,
      currentStep: 'user',
      containerConfig: {
        showContainer: true, // Con contenedor para new-user (comportamiento por defecto)
        containerClasses: 'mb-6',
        contentClasses: 'w-full max-w-full px-3 m-auto flex-0 lg:w-8/12'
      }
    });
  }

  /**
   * Retrieves complete form data structure for all user creation fields.
   * 
   * Returns comprehensive form data including:
   * - User information (first name, last name, company, email, password)
   * - Address details (address lines, city, state, zip code)
   * - Social media account links (Shopify, Facebook, Instagram)
   * - Profile information (public email, bio)
   * 
   * @returns Observable<NewUserFormData> - Complete form data structure
   * 
   * @example
   * ```typescript
   * this.newUserService.getFormData().subscribe(formData => {
   *   this.userInfo = formData.userInfo;
   *   this.addressInfo = formData.addressInfo;
   *   this.socialsInfo = formData.socialsInfo;
   *   this.profileInfo = formData.profileInfo;
   * });
   * ```
   */
  getFormData(): Observable<NewUserFormData> {
    const formData: NewUserFormData = {
      userInfo: {
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        password: '',
        repeatPassword: ''
      },
      addressInfo: {
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
      },
      socialsInfo: {
        shopifyHandle: {
          label: 'Shopify Handle',
          value: '',
          placeholder: 'Enter your Shopify handle'
        },
        facebookAccount: {
          label: 'Facebook Account',
          value: '',
          placeholder: 'Enter your Facebook URL'
        },
        instagramAccount: {
          label: 'Instagram Account',
          value: '',
          placeholder: 'Enter your Instagram URL'
        }
      },
      profileInfo: {
        publicEmail: '',
        bio: ''
      }
    };

    return of(formData);
  }

  /**
   * Updates multistep form data and returns the updated configuration.
   * 
   * Simulates form state persistence by returning the updated form data.
   * In a real application, this would typically save to a backend service.
   * 
   * @param data - Updated multistep form data to persist
   * @returns Observable<MultistepFormData> - Updated form configuration
   * 
   * @example
   * ```typescript
   * const updatedFormData = { ...currentFormData, currentStep: 'address' };
   * this.newUserService.updateMultistepFormData(updatedFormData).subscribe(result => {
   *   console.log('Form data updated:', result);
   * });
   * ```
   */
  updateMultistepFormData(data: MultistepFormData): Observable<MultistepFormData> {
    return of(data);
  }
} 