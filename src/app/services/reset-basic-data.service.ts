import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { ResetPasswordCardData } from '../components/auth/reset-password-card/reset-password-card';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';

/**
 * Reset Basic Data Service
 *
 * Provides data configuration for the reset password basic page.
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
 * - Reset password basic page
 * - Authentication flows
 * - User account management
 */
@Injectable({
  providedIn: 'root'
})
export class ResetBasicDataService {

  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) {}

  /**
   * Gets the navbar configuration data for reset password basic page.
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
   * Gets the reset password card configuration data.
   * Provides all form content and styling configuration.
   *
   * @returns {Observable<ResetPasswordCardData>} Form configuration
   */
  getResetPasswordCardData(): Observable<ResetPasswordCardData> {
    return of({
      title: "Reset password",
      subtitle: "You will receive an e-mail in maximum 60 seconds",
      email: {
        placeholder: "Email",
        type: "email"
      },
      sendButton: {
        text: "Send"
      }
    });
  }
} 