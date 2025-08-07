import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { VerificationFormComponent, VerificationFormData } from '../../../../components/auth/verification-form/verification-form';
import { VerificationCoverDataService } from '../../../../services/verification-cover-data.service';

/**
 * Verification Cover Component
 * 
 * This component implements a two-step verification page with a cover design layout.
 * It provides a full-screen authentication interface with background cover imagery
 * and centered verification form for a modern, immersive user experience.
 * 
 * Features:
 * - Two-step verification form with cover background design
 * - Secondary navbar and footer for consistent branding
 * - Full-screen layout with centered form elements
 * - Integration with verification data service
 * - Modern and immersive authentication interface
 * 
 * The component serves as an alternative verification page design that provides
 * a full-screen experience with cover imagery, creating an engaging and modern
 * verification interface while maintaining security functionality.
 * 
 * @example
 * ```html
 * <app-verification-cover></app-verification-cover>
 * ```
 */
@Component({
  selector: 'app-verification-cover',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, VerificationFormComponent],
  templateUrl: './cover.html'
})
export class VerificationCoverComponent {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for verification form configuration and data */
  formData$: Observable<VerificationFormData>;

  /**
   * Creates an instance of VerificationCoverComponent.
   * 
   * Initializes the component by subscribing to data streams from VerificationCoverDataService
   * for navbar configuration and verification form data.
   * 
   * @param verificationCoverDataService - Service for managing verification cover page data and form configuration
   */
  constructor(private verificationCoverDataService: VerificationCoverDataService) {
    this.navbarData$ = this.verificationCoverDataService.getNavbarData();
    this.formData$ = this.verificationCoverDataService.getFormData();
  }
} 
