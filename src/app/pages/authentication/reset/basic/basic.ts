import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { ResetPasswordCardComponent, ResetPasswordCardData } from '../../../../components/auth/reset-password-card/reset-password-card';
import { ResetBasicDataService } from '../../../../services/reset-basic-data.service';

/**
 * Basic Reset Component
 * 
 * This component implements a password reset page with a basic design layout.
 * It provides a clean and simple authentication interface with a card-based reset
 * form for straightforward user interaction during the password recovery process.
 * 
 * Features:
 * - Password reset form with basic card design
 * - Secondary navbar and footer for consistent branding
 * - Clean and minimal interface design
 * - Integration with reset data service
 * - Simple and intuitive user experience
 * 
 * The component serves as the standard password reset page design that focuses on
 * functionality and clarity, providing users with a straightforward recovery
 * experience without visual distractions.
 * 
 * @example
 * ```html
 * <app-basic-reset></app-basic-reset>
 * ```
 */
@Component({
  selector: 'app-basic-reset',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, ResetPasswordCardComponent],
  templateUrl: './basic.html'
})
export class BasicResetComponent {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for reset password card configuration and data */
  resetPasswordCardData$: Observable<ResetPasswordCardData>;

  /**
   * Creates an instance of BasicResetComponent.
   * 
   * Initializes the component by subscribing to data streams from ResetBasicDataService
   * for navbar configuration and reset password card data.
   * 
   * @param resetBasicDataService - Service for managing reset basic page data and card configuration
   */
  constructor(private resetBasicDataService: ResetBasicDataService) {
    this.navbarData$ = this.resetBasicDataService.getNavbarData();
    this.resetPasswordCardData$ = this.resetBasicDataService.getResetPasswordCardData();
  }
} 
