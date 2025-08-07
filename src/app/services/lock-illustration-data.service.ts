import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { LockIllustrationFormData } from '../components/auth/lock-illustration-form/lock-illustration-form';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';

/**
 * Lock Illustration Data Service
 *
 * Provides data configuration for the lock screen illustration page.
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
 * - Lock screen illustration page
 * - Account unlocking
 * - Security authentication
 */
@Injectable({
  providedIn: 'root'
})
export class LockIllustrationDataService {

  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) {}

  /**
   * Gets the navbar configuration data for lock screen illustration page.
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
   * Gets the lock form configuration data.
   * Provides all form content and styling configuration.
   *
   * @returns {Observable<LockIllustrationFormData>} Form configuration
   */
  getLockFormData(): Observable<LockIllustrationFormData> {
    return of({
      username: "Mike Priesler",
      description: "Enter password to unlock your account.",
      passwordField: {
        placeholder: "Password"
      },
      unlockButton: {
        text: "Unlock"
      }
    });
  }
} 