import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { SignUpFormComponent, SignUpFormData } from '../../../../components/auth/sign-up-form/sign-up-form';
import { SignUpCoverDataService } from '../../../../services/sign-up-cover-data.service';

/**
 * Signup Cover Component
 * 
 * This component implements a user registration page with a cover design layout.
 * It provides a full-screen authentication interface with background cover imagery
 * and centered registration form for a modern, immersive user experience.
 * 
 * Features:
 * - User registration form with cover background design
 * - Secondary navbar and footer for consistent branding
 * - Full-screen layout with centered form elements
 * - Integration with signup data service
 * - Modern and immersive registration interface
 * 
 * The component serves as an alternative signup page design that provides
 * a full-screen experience with cover imagery, creating an engaging and modern
 * registration interface while maintaining security functionality.
 * 
 * @example
 * ```html
 * <app-signup-cover></app-signup-cover>
 * ```
 */
@Component({
  selector: 'app-signup-cover',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, SignUpFormComponent],
  templateUrl: './cover.html'
})
export class SignupCoverComponent {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for signup form configuration and data */
  formData$: Observable<SignUpFormData>;

  /**
   * Creates an instance of SignupCoverComponent.
   * 
   * Initializes the component by subscribing to data streams from SignUpCoverDataService
   * for navbar configuration and signup form data.
   * 
   * @param signUpCoverDataService - Service for managing signup cover page data and form configuration
   */
  constructor(private signUpCoverDataService: SignUpCoverDataService) {
    this.navbarData$ = this.signUpCoverDataService.getNavbarData();
    this.formData$ = this.signUpCoverDataService.getFormData();
  }
} 
