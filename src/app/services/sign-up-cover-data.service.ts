import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { SignUpFormData } from '../components/auth/sign-up-form/sign-up-form';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';

/**
 * SignUpCoverDataService
 * 
 * Provides mock data and configuration for the Sign Up Cover page. This service
 * supplies data for the sign-up functionality with a cover-style layout,
 * including navbar configuration and form data. The service is designed for demo
 * and UI prototyping purposes, simulating backend responses for user registration
 * functionality.
 * 
 * The service manages:
 * - Secondary navbar configuration with white text styling
 * - Sign-up form data with labels and placeholders
 * - Social media authentication buttons (Facebook, Apple, Google)
 * - Sign-in link for existing users
 * - Form validation and user guidance
 * 
 * @example
 * ```typescript
 * constructor(private signUpCoverDataService: SignUpCoverDataService) {}
 * 
 * ngOnInit() {
 *   this.signUpCoverDataService.getFormData().subscribe(formData => {
 *     this.formConfig = formData;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class SignUpCoverDataService {

  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) {}

  /**
   * Retrieves secondary navbar configuration with white text styling for cover layout.
   * 
   * Returns navbar data with:
   * - White text color for better contrast on cover background
   * - Customized buy now button with white background and hover effects
   * - Default navbar configuration from SecondaryNavbarDataService
   * 
   * @returns Observable<SecondaryNavbarData> - Secondary navbar configuration
   * 
   * @example
   * ```typescript
   * this.signUpCoverDataService.getNavbarData().subscribe(navbarData => {
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
   * Retrieves sign-up form configuration with social authentication options.
   * 
   * Returns form data including:
   * - Page title for registration context
   * - Form field labels for name, email, and password
   * - Sign-up button text
   * - Sign-in link for existing users
   * - Social media authentication buttons (Facebook, Apple, Google)
   * - Terms and conditions links (empty for demo)
   * 
   * @returns Observable<SignUpFormData> - Sign-up form configuration
   * 
   * @example
   * ```typescript
   * this.signUpCoverDataService.getFormData().subscribe(formData => {
   *   this.pageTitle = formData.title; // "Register with"
   *   this.nameLabel = formData.nameLabel;
   *   this.emailLabel = formData.emailLabel;
   *   this.passwordLabel = formData.passwordLabel;
   *   this.confirmPasswordLabel = formData.confirmPasswordLabel;
   *   this.signUpButtonText = formData.signUpButtonText;
   *   this.signInLink = {
   *     text: formData.signInLinkText,
   *     url: formData.signInLinkUrl
   *   };
   *   this.socialButtons = formData.socialButtons;
   *   this.facebookButton = formData.socialButtons.find(b => b.name === 'Facebook');
   *   this.appleButton = formData.socialButtons.find(b => b.name === 'Apple');
   *   this.googleButton = formData.socialButtons.find(b => b.name === 'Google');
   * });
   * ```
   */
  getFormData(): Observable<SignUpFormData> {
    return of({
      title: 'Register with',
      subtitle: '',
      nameLabel: 'Name',
      emailLabel: 'Email',
      passwordLabel: 'Password',
      confirmPasswordLabel: '',
      signUpButtonText: 'Sign up',
      signInLinkText: 'Sign in',
      signInLinkUrl: '/pages/authentication/signin/cover',
      termsText: '',
      termsLinkText: '',
      termsLinkUrl: '',
      socialButtons: [
        {
          name: 'Facebook',
          url: 'javascript:;',
          iconClass: 'fab fa-facebook-f'
        },
        {
          name: 'Apple',
          url: 'javascript:;',
          iconClass: 'fab fa-apple'
        },
        {
          name: 'Google',
          url: 'javascript:;',
          iconClass: 'fab fa-google'
        }
      ]
    });
  }
} 