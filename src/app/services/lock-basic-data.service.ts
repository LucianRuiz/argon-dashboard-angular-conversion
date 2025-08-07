import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { LockCardData } from '../components/auth/lock-card/lock-card';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';

/**
 * Lock Basic Data Service
 *
 * Provides data configuration for the lock screen basic page.
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
 * - Lock screen basic page
 * - Account security
 * - Session management
 */
@Injectable({
  providedIn: 'root'
})
export class LockBasicDataService {

  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) {}

  /**
   * Gets the navbar configuration data for lock screen basic page.
   * Uses default navbar with standard styling.
   *
   * @returns {Observable<SecondaryNavbarData>} Navbar configuration
   */
  getNavbarData(): Observable<SecondaryNavbarData> {
    const navbarData = this.secondaryNavbarDataService.getDefaultNavbar();
    navbarData.textColor = 'text-slate-700';
    navbarData.buyNowButtonColor = 'text-white bg-gradient-to-tl from-blue-500 to-violet-500';
    return of(navbarData);
  }

  /**
   * Gets the lock card configuration data.
   * Provides all form content and styling configuration.
   *
   * @returns {Observable<LockCardData>} Form configuration
   */
  getLockCardData(): Observable<LockCardData> {
    return of({
      user: {
        name: "Mike Priesler",
        description: "Enter password to unlock your account."
      },
      password: {
        placeholder: "Password",
        type: "password"
      },
      unlockButton: {
        text: "Unlock"
      }
    });
  }
} 