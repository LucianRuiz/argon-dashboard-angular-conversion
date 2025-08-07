import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { SignInFormComponent, SignInFormData } from '../../../../components/auth/sign-in-form/sign-in-form';
import { SignInCoverDataService } from '../../../../services/sign-in-cover-data.service';

/**
 * Cover Sign In Component
 * 
 * This component implements a user login page with a cover design layout.
 * It provides a full-screen authentication interface with background cover imagery
 * and centered login form for a modern, immersive user experience.
 * 
 * Features:
 * - User login form with cover background design
 * - Secondary navbar and footer for consistent branding
 * - Full-screen layout with centered form elements
 * - Integration with signin data service
 * - Modern and immersive authentication interface
 * 
 * The component serves as an alternative signin page design that provides
 * a full-screen experience with cover imagery, creating an engaging and modern
 * login interface while maintaining security functionality.
 * 
 * @example
 * ```html
 * <app-sign-in-cover></app-sign-in-cover>
 * ```
 */
@Component({
  selector: 'app-sign-in-cover',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, SignInFormComponent],
  templateUrl: './cover.html'
})
export class CoverSignInComponent {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for signin form configuration and data */
  formData$: Observable<SignInFormData>;

  /**
   * Creates an instance of CoverSignInComponent.
   * 
   * Initializes the component by subscribing to data streams from SignInCoverDataService
   * for navbar configuration and signin form data.
   * 
   * @param signInCoverDataService - Service for managing signin cover page data and form configuration
   */
  constructor(private signInCoverDataService: SignInCoverDataService) {
    this.navbarData$ = this.signInCoverDataService.getNavbarData();
    this.formData$ = this.signInCoverDataService.getFormData();
  }
} 