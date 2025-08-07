import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { SignupIllustrationFormComponent, SignupIllustrationFormData } from '../../../../components/auth/signup-illustration-form/signup-illustration-form';
import { SignupIllustrationDataService } from '../../../../services/signup-illustration-data.service';

/**
 * Illustration Signup Component
 * 
 * This component implements a user registration page with an illustration design.
 * It provides a visually appealing signup interface with background imagery
 * and overlay elements for enhanced user experience during the registration process.
 * 
 * Features:
 * - User registration form with illustration background
 * - Secondary navbar and footer for consistent branding
 * - Responsive design with overlay elements
 * - Integration with signup data service
 * - Clean and modern registration interface
 * 
 * The component serves as an alternative signup page design that combines
 * functionality with visual appeal, providing users with an engaging registration
 * experience while maintaining security standards.
 * 
 * @example
 * ```html
 * <app-illustration-signup></app-illustration-signup>
 * ```
 */
@Component({
  selector: 'app-illustration-signup',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, SignupIllustrationFormComponent],
  templateUrl: './illustration.html'
})
export class IllustrationSignupComponent {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for signup form configuration and data */
  signupFormData$: Observable<SignupIllustrationFormData>;

  /**
   * Creates an instance of IllustrationSignupComponent.
   * 
   * Initializes the component by subscribing to data streams from SignupIllustrationDataService
   * for navbar configuration and signup form data.
   * 
   * @param signupIllustrationDataService - Service for managing signup page data and form configuration
   */
  constructor(private signupIllustrationDataService: SignupIllustrationDataService) {
    this.navbarData$ = this.signupIllustrationDataService.getNavbarData();
    this.signupFormData$ = this.signupIllustrationDataService.getSignupFormData();
  }
} 
