import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { ResetIllustrationFormData } from '../components/auth/reset-illustration-form/reset-illustration-form';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';

/**
 * Reset Illustration Data Service
 *
 * Provides data configuration for the reset password illustration page.
 * Includes navbar configuration and form data with customizable content.
 *
 * QUALITY FEATURES:
 * - Injectable service for dependency injection
 * - Observable-based data streams
 * - Type-safe data interfaces
 * - Centralized configuration management
 *
 * REUSABILITY FEATURES:
 * - Configurable navbar styling
 * - Customizable form content
 * - Theme-aware color schemes
 *
 * USE CASES:
 * - Reset password illustration page
 * - Password recovery
 * - Security authentication
 */
@Injectable({
  providedIn: 'root'
})
export class ResetIllustrationDataService {

  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) {}

  /**
   * Gets the navbar configuration data for reset password illustration page.
   * Uses default navbar with standard styling.
   *
   * @returns {Observable<SecondaryNavbarData>} Navbar configuration
   */
  getNavbarData(): Observable<SecondaryNavbarData> {
    const navbarData = this.secondaryNavbarDataService.getDefaultNavbar();
    navbarData.textColor = 'text-slate-700';
    navbarData.buyNowButtonColor = 'text-white bg-blue-500 hover:-translate-y-px active:-translate-y-px active:text-black active:hover:text-white';
    return of(navbarData);
  }

  /**
   * Gets the reset form configuration data.
   * Provides all form content and styling configuration.
   *
   * @returns {Observable<ResetIllustrationFormData>} Form configuration
   */
  getResetFormData(): Observable<ResetIllustrationFormData> {
    return of({
      title: "Reset Password",
      description: "You will receive an e-mail in maximum 60 seconds",
      emailField: {
        placeholder: "Email"
      },
      verificationField: {
        placeholder: "Verification Code"
      },
      sendButton: {
        text: "Send"
      }
    });
  }
} 