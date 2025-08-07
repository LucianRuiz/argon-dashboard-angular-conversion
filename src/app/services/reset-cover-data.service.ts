import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { ResetPasswordFormData } from '../components/auth/reset-password-form/reset-password-form';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';

/**
 * ResetCoverDataService
 * 
 * Provides mock data and configuration for the Reset Password Cover page. This service
 * supplies data for the password reset functionality with a cover-style layout,
 * including navbar configuration and form data. The service is designed for demo and
 * UI prototyping purposes, simulating backend responses for password reset functionality.
 * 
 * The service manages:
 * - Secondary navbar configuration with white text styling
 * - Reset password form data with labels and placeholders
 * - Alternative access link configuration
 * - Form validation and user guidance
 * 
 * @example
 * ```typescript
 * constructor(private resetCoverDataService: ResetCoverDataService) {}
 * 
 * ngOnInit() {
 *   this.resetCoverDataService.getFormData().subscribe(formData => {
 *     this.formConfig = formData;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class ResetCoverDataService {

  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) {}

  /**
   * Retrieves secondary navbar configuration with white text styling for cover layout.
   * 
   * Returns navbar data with:
   * - White text color for better contrast on cover background
   * - Customized buy now button styling
   * - Default navbar configuration from SecondaryNavbarDataService
   * 
   * @returns Observable<SecondaryNavbarData> - Secondary navbar configuration
   * 
   * @example
   * ```typescript
   * this.resetCoverDataService.getNavbarData().subscribe(navbarData => {
   *   this.navbarConfig = navbarData;
   *   this.textColor = navbarData.textColor; // 'text-white'
   *   this.buttonStyle = navbarData.buyNowButtonColor;
   * });
   * ```
   */
  getNavbarData(): Observable<SecondaryNavbarData> {
    const navbarData = this.secondaryNavbarDataService.getDefaultNavbar();
    navbarData.textColor = 'text-white';
    navbarData.buyNowButtonColor = 'text-black bg-white hover:-translate-y-px active:-translate-y-px';
    return of(navbarData);
  }

  /**
   * Retrieves reset password form configuration with user guidance.
   * 
   * Returns form data including:
   * - Page title and subtitle for user context
   * - Email field configuration with label and placeholder
   * - Reset button text and styling
   * - Alternative access link for users without email access
   * 
   * @returns Observable<ResetPasswordFormData> - Reset password form configuration
   * 
   * @example
   * ```typescript
   * this.resetCoverDataService.getFormData().subscribe(formData => {
   *   this.pageTitle = formData.title; // "Can't log in?"
   *   this.pageSubtitle = formData.subtitle; // "Restore access to your account"
   *   this.emailLabel = formData.email.label;
   *   this.emailPlaceholder = formData.email.placeholder;
   *   this.resetButtonText = formData.resetButton.text;
   *   this.alternativeLink = formData.alternativeLink;
   * });
   * ```
   */
  getFormData(): Observable<ResetPasswordFormData> {
    return of({
      title: "Can't log in?",
      subtitle: 'Restore access to your account',
      email: {
        label: 'We will send a recovery link to',
        placeholder: 'Your e-mail',
        type: 'email'
      },
      resetButton: {
        text: 'Reset password'
      },
      alternativeLink: {
        text: "I don't have access to my Email",
        url: '/pages/authentication/signin/cover'
      }
    });
  }
} 