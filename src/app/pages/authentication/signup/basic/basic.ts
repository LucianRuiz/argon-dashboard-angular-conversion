import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { SignUpCardComponent, SignUpCardData } from '../../../../components/auth/sign-up-card/sign-up-card';
import { SignUpBasicDataService } from '../../../../services/sign-up-basic-data.service';

/**
 * Basic Signup Component
 * 
 * This component implements a user registration page with a basic design layout.
 * It provides a clean and simple authentication interface with a card-based registration
 * form for straightforward user interaction during the signup process.
 * 
 * Features:
 * - User registration form with basic card design
 * - Secondary navbar and footer for consistent branding
 * - Clean and minimal interface design
 * - Integration with signup data service
 * - Simple and intuitive user experience
 * 
 * The component serves as the standard signup page design that focuses on
 * functionality and clarity, providing users with a straightforward registration
 * experience without visual distractions.
 * 
 * @example
 * ```html
 * <app-basic-signup></app-basic-signup>
 * ```
 */
@Component({
  selector: 'app-basic-signup',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, SignUpCardComponent],
  templateUrl: './basic.html'
})
export class BasicSignupComponent {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for signup card configuration and data */
  signUpCardData$: Observable<SignUpCardData>;

  /**
   * Creates an instance of BasicSignupComponent.
   * 
   * Initializes the component by subscribing to data streams from SignUpBasicDataService
   * for navbar configuration and signup card data.
   * 
   * @param signUpBasicDataService - Service for managing signup basic page data and card configuration
   */
  constructor(private signUpBasicDataService: SignUpBasicDataService) {
    this.navbarData$ = this.signUpBasicDataService.getNavbarData();
    this.signUpCardData$ = this.signUpBasicDataService.getSignUpCardData();
  }
} 
