import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { VerificationCardData } from '../components/auth/verification-card/verification-card';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';

/**
 * Verification Basic Data Service
 *
 * Provides data configuration for the 2-step verification basic page.
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
 * - 2-step verification basic page
 * - Email verification
 * - SMS verification
 * - Security authentication
 */
@Injectable({
  providedIn: 'root'
})
export class VerificationBasicDataService {

  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) {}

  /**
   * Gets the navbar configuration data for 2-step verification basic page.
   * Uses default navbar with standard styling.
   *
   * @returns {Observable<SecondaryNavbarData>} Navbar configuration
   */
  getNavbarData(): Observable<SecondaryNavbarData> {
    const navbarData = this.secondaryNavbarDataService.getDefaultNavbar();
    navbarData.textColor = 'text-white';
    navbarData.buyNowButtonColor = 'text-slate-500 bg-white hover:-translate-y-px active:opacity-85';
    return of(navbarData);
  }

  /**
   * Gets the verification card configuration data.
   * Provides all form content and styling configuration.
   *
   * @returns {Observable<VerificationCardData>} Form configuration
   */
  getVerificationCardData(): Observable<VerificationCardData> {
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