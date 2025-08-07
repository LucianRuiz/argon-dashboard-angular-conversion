import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { LockFormData } from '../components/auth/lock-form/lock-form';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';

/**
 * LockCoverDataService
 * 
 * Provides mock data and configuration for the lock screen/cover page. This service supplies
 * data for the lock screen interface, including navbar configuration and lock form data.
 * The service is designed for demo and UI prototyping purposes, simulating backend responses
 * for the account lock screen functionality.
 * 
 * The service manages:
 * - Secondary navbar configuration with custom styling for lock screen
 * - Lock form data including user information and form fields
 * - Account unlock functionality simulation
 * 
 * @example
 * ```typescript
 * constructor(private lockCoverDataService: LockCoverDataService) {}
 * 
 * ngOnInit() {
 *   this.lockCoverDataService.getNavbarData().subscribe(navbarData => {
 *     this.navbarData = navbarData;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class LockCoverDataService {

  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) {}

  /**
   * Retrieves secondary navbar configuration customized for the lock screen.
   * 
   * Returns navbar data with specific styling modifications for the lock screen context:
   * - White text color for better visibility on lock screen backgrounds
   * - Custom buy now button styling with gradient background
   * - Hover and active state transformations for interactive elements
   * 
   * @returns Observable<SecondaryNavbarData> - Customized navbar configuration for lock screen
   * 
   * @example
   * ```typescript
   * this.lockCoverDataService.getNavbarData().subscribe(navbarData => {
   *   // navbarData contains lock screen specific navbar configuration
   *   // with white text and custom button styling
   * });
   * ```
   */
  getNavbarData(): Observable<SecondaryNavbarData> {
    const navbarData = this.secondaryNavbarDataService.getDefaultNavbar();
    navbarData.textColor = 'text-white';
    navbarData.buyNowButtonColor = 'text-slate-800 bg-gradient-to-tl from-gray-400 to-gray-100 hover:-translate-y-px active:-translate-y-px';
    return of(navbarData);
  }

  /**
   * Retrieves lock form data including user information and form configuration.
   * 
   * Returns lock form data with:
   * - User profile information (name, avatar, description)
   * - Password field configuration
   * - Unlock button configuration
   * - Form validation and interaction settings
   * 
   * @returns Observable<LockFormData> - Lock form configuration with user data
   * 
   * @example
   * ```typescript
   * this.lockCoverDataService.getFormData().subscribe(formData => {
   *   // formData contains user info, password field, and unlock button config
   *   this.user = formData.user;
   *   this.passwordField = formData.password;
   * });
   * ```
   */
  getFormData(): Observable<LockFormData> {
    return of({
      user: {
        name: 'Mike Priesler',
        avatarUrl: 'https://demos.creative-tim.com/argon-dashboard-pro/assets/img/team-2.jpg',
        description: 'Enter password to unlock your account.'
      },
      password: {
        label: 'Password',
        placeholder: 'Password',
        type: 'password'
      },
      unlockButton: {
        text: 'Unlock'
      }
    });
  }
} 