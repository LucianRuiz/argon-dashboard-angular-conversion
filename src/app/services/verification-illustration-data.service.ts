import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { VerificationIllustrationFormData } from '../components/auth/verification-illustration-form/verification-illustration-form';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';

/**
 * Verification Illustration Data Service
 *
 * Provides data configuration for the 2-step verification illustration page.
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
 * - 2-step verification illustration page
 * - Email verification
 * - SMS verification
 * - Security authentication
 */
@Injectable({
  providedIn: 'root'
})
export class VerificationIllustrationDataService {

  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) {}

  /**
   * Gets the navbar configuration data for 2-step verification illustration page.
   * Uses default navbar with standard styling.
   *
   * @returns {Observable<SecondaryNavbarData>} Navbar configuration
   */
  getNavbarData(): Observable<SecondaryNavbarData> {
    const navbarData = this.secondaryNavbarDataService.getDefaultNavbar();
    navbarData.textColor = 'text-slate-700';
    navbarData.buyNowButtonColor = 'text-white bg-gradient-to-tl from-zinc-800 to-zinc-700 hover:-translate-y-px active:-translate-y-px';
    return of(navbarData);
  }

  /**
   * Gets the verification form configuration data.
   * Provides all form content and styling configuration.
   *
   * @returns {Observable<VerificationIllustrationFormData>} Form configuration
   */
  getVerificationFormData(): Observable<VerificationIllustrationFormData> {
    return of({
      title: "2-Step Verification",
      codeLength: 4,
      sendButton: {
        text: "Send code"
      },
      resendLink: {
        text: "Haven't received it?",
        url: "javascript:;"
      }
    });
  }
} 