import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { SigninIllustrationFormComponent, SigninIllustrationFormData } from '../../../../components/auth/signin-illustration-form/signin-illustration-form';
import { SigninIllustrationDataService } from '../../../../services/signin-illustration-data.service';

/**
 * Illustration Signin Component
 * 
 * This component implements a user login page with an illustration design.
 * It provides a visually appealing signin interface with background imagery
 * and overlay elements for enhanced user experience during the authentication process.
 * 
 * Features:
 * - User login form with illustration background
 * - Secondary navbar and footer for consistent branding
 * - Responsive design with overlay elements
 * - Integration with signin data service
 * - Clean and modern authentication interface
 * 
 * The component serves as an alternative signin page design that combines
 * functionality with visual appeal, providing users with an engaging login
 * experience while maintaining security standards.
 * 
 * @example
 * ```html
 * <app-illustration-signin></app-illustration-signin>
 * ```
 */
@Component({
  selector: 'app-illustration-signin',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, SigninIllustrationFormComponent],
  templateUrl: './illustration.html'
})
export class IllustrationSigninComponent {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for signin form configuration and data */
  signinFormData$: Observable<SigninIllustrationFormData>;

  /**
   * Creates an instance of IllustrationSigninComponent.
   * 
   * Initializes the component by subscribing to data streams from SigninIllustrationDataService
   * for navbar configuration and signin form data.
   * 
   * @param signinIllustrationDataService - Service for managing signin page data and form configuration
   */
  constructor(private signinIllustrationDataService: SigninIllustrationDataService) {
    this.navbarData$ = this.signinIllustrationDataService.getNavbarData();
    this.signinFormData$ = this.signinIllustrationDataService.getSigninFormData();
  }
} 
