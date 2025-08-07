import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { VerificationCardComponent, VerificationCardData } from '../../../../components/auth/verification-card/verification-card';
import { VerificationBasicDataService } from '../../../../services/verification-basic-data.service';

/**
 * Basic Verification Component
 * 
 * This component implements a two-step verification page with a basic design layout.
 * It provides a clean and simple authentication interface with a card-based verification
 * form for straightforward user interaction during the verification process.
 * 
 * Features:
 * - Two-step verification form with basic card design
 * - Secondary navbar and footer for consistent branding
 * - Clean and minimal interface design
 * - Integration with verification data service
 * - Simple and intuitive user experience
 * 
 * The component serves as the standard verification page design that focuses on
 * functionality and clarity, providing users with a straightforward verification
 * experience without visual distractions.
 * 
 * @example
 * ```html
 * <app-basic-verification></app-basic-verification>
 * ```
 */
@Component({
  selector: 'app-basic-verification',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, VerificationCardComponent],
  templateUrl: './basic.html'
})
export class BasicVerificationComponent {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for verification card configuration and data */
  verificationCardData$: Observable<VerificationCardData>;

  /**
   * Creates an instance of BasicVerificationComponent.
   * 
   * Initializes the component by subscribing to data streams from VerificationBasicDataService
   * for navbar configuration and verification card data.
   * 
   * @param verificationBasicDataService - Service for managing verification basic page data and card configuration
   */
  constructor(private verificationBasicDataService: VerificationBasicDataService) {
    this.navbarData$ = this.verificationBasicDataService.getNavbarData();
    this.verificationCardData$ = this.verificationBasicDataService.getVerificationCardData();
  }
} 
