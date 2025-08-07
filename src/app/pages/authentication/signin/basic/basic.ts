import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { SignInCardComponent, SignInCardData } from '../../../../components/auth/sign-in-card/sign-in-card';
import { SignInBasicDataService } from '../../../../services/sign-in-basic-data.service';

/**
 * Basic Sign In Component
 * 
 * This component implements a user login page with a basic design layout.
 * It provides a clean and simple authentication interface with a card-based login
 * form for straightforward user interaction during the signin process.
 * 
 * Features:
 * - User login form with basic card design
 * - Secondary navbar and footer for consistent branding
 * - Clean and minimal interface design
 * - Integration with signin data service
 * - Simple and intuitive user experience
 * 
 * The component serves as the standard signin page design that focuses on
 * functionality and clarity, providing users with a straightforward login
 * experience without visual distractions.
 * 
 * @example
 * ```html
 * <app-basic-signin></app-basic-signin>
 * ```
 */
@Component({
  selector: 'app-basic-signin',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, SignInCardComponent],
  templateUrl: './basic.html'
})
export class BasicSigninComponent {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for signin card configuration and data */
  signInCardData$: Observable<SignInCardData>;

  /**
   * Creates an instance of BasicSigninComponent.
   * 
   * Initializes the component by subscribing to data streams from SignInBasicDataService
   * for navbar configuration and signin card data.
   * 
   * @param signInBasicDataService - Service for managing signin basic page data and card configuration
   */
  constructor(private signInBasicDataService: SignInBasicDataService) {
    this.navbarData$ = this.signInBasicDataService.getNavbarData();
    this.signInCardData$ = this.signInBasicDataService.getSignInCardData();
  }
} 