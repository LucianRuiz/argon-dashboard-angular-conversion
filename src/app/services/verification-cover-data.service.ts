import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { VerificationFormData } from '../components/auth/verification-form/verification-form';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';

/**
 * VerificationCoverDataService
 * 
 * Provides mock data and configuration for the 2-Step Verification Cover page. This service
 * supplies data for the two-factor authentication functionality with a cover-style layout,
 * including navbar configuration and verification form data. The service is designed for
 * demo and UI prototyping purposes, simulating backend responses for verification
 * functionality.
 * 
 * The service manages:
 * - Secondary navbar configuration with slate text styling
 * - 2-Step verification form data with code length configuration
 * - Send code button and resend link functionality
 * - Form validation and user guidance
 * 
 * @example
 * ```typescript
 * constructor(private verificationCoverDataService: VerificationCoverDataService) {}
 * 
 * ngOnInit() {
 *   this.verificationCoverDataService.getFormData().subscribe(formData => {
 *     this.formConfig = formData;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class VerificationCoverDataService {

  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) {}

  /**
   * Retrieves secondary navbar configuration with slate text styling for cover layout.
   * 
   * Returns navbar data with:
   * - Slate text color for better contrast on cover background
   * - Customized buy now button with orange to yellow gradient
   * - Default navbar configuration from SecondaryNavbarDataService
   * 
   * @returns Observable<SecondaryNavbarData> - Secondary navbar configuration
   * 
   * @example
   * ```typescript
   * this.verificationCoverDataService.getNavbarData().subscribe(navbarData => {
   *   this.navbarConfig = navbarData;
   *   this.textColor = navbarData.textColor; // 'text-slate'
   *   this.buttonStyle = navbarData.buyNowButtonColor;
   * });
   * ```
   */
  getNavbarData(): Observable<SecondaryNavbarData> {
    const navbarData = this.secondaryNavbarDataService.getDefaultNavbar();
    navbarData.textColor = 'text-slate';
    navbarData.buyNowButtonColor = 'text-white bg-gradient-to-tl from-orange-500 to-yellow-500 hover:-translate-y-px active:opacity-85';
    return of(navbarData);
  }

  /**
   * Retrieves 2-Step verification form configuration with code settings.
   * 
   * Returns form data including:
   * - Page title for 2-Step verification context
   * - Code length configuration (4 digits)
   * - Send code button text and functionality
   * - Resend link for users who haven't received the code
   * 
   * @returns Observable<VerificationFormData> - 2-Step verification form configuration
   * 
   * @example
   * ```typescript
   * this.verificationCoverDataService.getFormData().subscribe(formData => {
   *   this.pageTitle = formData.title; // "2-Step Verification"
   *   this.codeLength = formData.codeLength; // 4
   *   this.sendButtonText = formData.sendButton.text; // "Send code"
   *   this.resendLink = formData.resendLink;
   *   this.resendText = formData.resendLink.text; // "Haven't received it?"
   *   this.resendUrl = formData.resendLink.url; // "javascript:;"
   * });
   * ```
   */
  getFormData(): Observable<VerificationFormData> {
    return of({
      title: '2-Step Verification',
      codeLength: 4,
      sendButton: {
        text: 'Send code'
      },
      resendLink: {
        text: "Haven't received it?",
        url: 'javascript:;'
      }
    });
  }
} 