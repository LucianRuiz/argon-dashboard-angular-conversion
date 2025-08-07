import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { VerificationIllustrationFormComponent, VerificationIllustrationFormData } from '../../../../components/auth/verification-illustration-form/verification-illustration-form';
import { VerificationIllustrationDataService } from '../../../../services/verification-illustration-data.service';

/**
 * Illustration Verification Component
 * 
 * This component implements a two-step verification page with an illustration design.
 * It provides a visually appealing authentication interface with background imagery
 * and overlay elements for enhanced user experience during the verification process.
 * 
 * Features:
 * - Two-step verification form with illustration background
 * - Secondary navbar and footer for consistent branding
 * - Responsive design with overlay elements
 * - Integration with verification data service
 * - Clean and modern authentication interface
 * 
 * The component serves as an alternative verification page design that combines
 * functionality with visual appeal, providing users with an engaging verification
 * experience while maintaining security standards.
 * 
 * @example
 * ```html
 * <app-illustration-verification></app-illustration-verification>
 * ```
 */
@Component({
  selector: 'app-illustration-verification',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, VerificationIllustrationFormComponent],
  templateUrl: './illustration.html'
})
export class IllustrationVerificationComponent {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for verification form configuration and data */
  verificationFormData$: Observable<VerificationIllustrationFormData>;

  /**
   * Creates an instance of IllustrationVerificationComponent.
   * 
   * Initializes the component by subscribing to data streams from VerificationIllustrationDataService
   * for navbar configuration and verification form data.
   * 
   * @param verificationIllustrationDataService - Service for managing verification page data and form configuration
   */
  constructor(private verificationIllustrationDataService: VerificationIllustrationDataService) {
    this.navbarData$ = this.verificationIllustrationDataService.getNavbarData();
    this.verificationFormData$ = this.verificationIllustrationDataService.getVerificationFormData();
  }
} 
