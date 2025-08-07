import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { ResetPasswordFormComponent, ResetPasswordFormData } from '../../../../components/auth/reset-password-form/reset-password-form';
import { ResetCoverDataService } from '../../../../services/reset-cover-data.service';

/**
 * Reset Cover Component
 * 
 * This component implements a password reset page with a cover design layout.
 * It provides a full-screen authentication interface with background cover imagery
 * and centered reset form for a modern, immersive user experience.
 * 
 * Features:
 * - Password reset form with cover background design
 * - Secondary navbar and footer for consistent branding
 * - Full-screen layout with centered form elements
 * - Integration with reset data service
 * - Modern and immersive password recovery interface
 * 
 * The component serves as an alternative password reset page design that provides
 * a full-screen experience with cover imagery, creating an engaging and modern
 * recovery interface while maintaining security functionality.
 * 
 * @example
 * ```html
 * <app-reset-cover></app-reset-cover>
 * ```
 */
@Component({
  selector: 'app-reset-cover',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, ResetPasswordFormComponent],
  templateUrl: './cover.html'
})
export class ResetCoverComponent {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for reset form configuration and data */
  formData$: Observable<ResetPasswordFormData>;

  /**
   * Creates an instance of ResetCoverComponent.
   * 
   * Initializes the component by subscribing to data streams from ResetCoverDataService
   * for navbar configuration and reset form data.
   * 
   * @param resetCoverDataService - Service for managing reset cover page data and form configuration
   */
  constructor(private resetCoverDataService: ResetCoverDataService) {
    this.navbarData$ = this.resetCoverDataService.getNavbarData();
    this.formData$ = this.resetCoverDataService.getFormData();
  }
} 
