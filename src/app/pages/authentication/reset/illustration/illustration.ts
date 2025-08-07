import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { ResetIllustrationFormComponent, ResetIllustrationFormData } from '../../../../components/auth/reset-illustration-form/reset-illustration-form';
import { ResetIllustrationDataService } from '../../../../services/reset-illustration-data.service';

/**
 * Illustration Reset Component
 * 
 * This component implements a password reset page with an illustration design.
 * It provides a visually appealing reset interface with background imagery
 * and overlay elements for enhanced user experience during the password recovery process.
 * 
 * Features:
 * - Password reset form with illustration background
 * - Secondary navbar and footer for consistent branding
 * - Responsive design with overlay elements
 * - Integration with reset data service
 * - Clean and modern password recovery interface
 * 
 * The component serves as an alternative password reset page design that combines
 * functionality with visual appeal, providing users with an engaging recovery
 * experience while maintaining security standards.
 * 
 * @example
 * ```html
 * <app-illustration-reset></app-illustration-reset>
 * ```
 */
@Component({
  selector: 'app-illustration-reset',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, ResetIllustrationFormComponent],
  templateUrl: './illustration.html'
})
export class IllustrationResetComponent {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for reset form configuration and data */
  resetFormData$: Observable<ResetIllustrationFormData>;

  /**
   * Creates an instance of IllustrationResetComponent.
   * 
   * Initializes the component by subscribing to data streams from ResetIllustrationDataService
   * for navbar configuration and reset form data.
   * 
   * @param resetIllustrationDataService - Service for managing reset page data and form configuration
   */
  constructor(private resetIllustrationDataService: ResetIllustrationDataService) {
    this.navbarData$ = this.resetIllustrationDataService.getNavbarData();
    this.resetFormData$ = this.resetIllustrationDataService.getResetFormData();
  }
} 
