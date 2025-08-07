import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SignInFormData } from '../components/auth/sign-in-form/sign-in-form';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';

/**
 * SignInCoverDataService
 * 
 * Provides mock data and configuration for the Sign In Cover page. This service
 * supplies data for the sign-in functionality with a cover-style layout,
 * including navbar configuration and form data. The service is designed for demo
 * and UI prototyping purposes, simulating backend responses for authentication
 * functionality.
 * 
 * The service manages:
 * - Secondary navbar configuration with white text styling
 * - Sign-in form data with labels and placeholders
 * - Remember me checkbox configuration
 * - Sign-up link for new user registration
 * - Form validation and user guidance
 * 
 * @example
 * ```typescript
 * constructor(private signInCoverDataService: SignInCoverDataService) {}
 * 
 * ngOnInit() {
 *   this.signInCoverDataService.getFormData().subscribe(formData => {
 *     this.formConfig = formData;
 *   });
 * }
 * ```
 */
@Injectable({ providedIn: 'root' })
export class SignInCoverDataService {
  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) {}

  /**
   * Retrieves secondary navbar configuration with white text styling for cover layout.
   * 
   * Returns navbar data with:
   * - White text color for better contrast on cover background
   * - Customized buy now button with blue to violet gradient
   * - Default navbar configuration from SecondaryNavbarDataService
   * 
   * @returns Observable<SecondaryNavbarData> - Secondary navbar configuration
   * 
   * @example
   * ```typescript
   * this.signInCoverDataService.getNavbarData().subscribe(navbarData => {
   *   this.navbarConfig = navbarData;
   *   this.textColor = navbarData.textColor; // 'text-white'
   *   this.buttonStyle = navbarData.buyNowButtonColor;
   * });
   * ```
   */
  getNavbarData(): Observable<SecondaryNavbarData> {
    const navbarData = this.secondaryNavbarDataService.getDefaultNavbar();
    navbarData.textColor = 'text-white';
    navbarData.buyNowButtonColor = 'text-white bg-gradient-to-tl from-blue-500 to-violet-500';
    return of(navbarData);
  }

  /**
   * Retrieves sign-in form configuration with user guidance.
   * 
   * Returns form data including:
   * - Page title and subtitle for user context
   * - Email and password field configurations with labels and placeholders
   * - Remember me checkbox with default unchecked state
   * - Sign-in button text
   * - Sign-up link for new user registration
   * 
   * @returns Observable<SignInFormData> - Sign-in form configuration
   * 
   * @example
   * ```typescript
   * this.signInCoverDataService.getFormData().subscribe(formData => {
   *   this.pageTitle = formData.title; // "Welcome back"
   *   this.pageSubtitle = formData.subtitle; // "Enter your email and password to sign in"
   *   this.emailLabel = formData.email.label;
   *   this.emailPlaceholder = formData.email.placeholder;
   *   this.passwordLabel = formData.password.label;
   *   this.passwordPlaceholder = formData.password.placeholder;
   *   this.rememberMeLabel = formData.rememberMe.label;
   *   this.rememberMeChecked = formData.rememberMe.checked;
   *   this.signInButtonText = formData.signInButton.text;
   *   this.signUpLink = formData.signUpLink;
   * });
   * ```
   */
  getFormData(): Observable<SignInFormData> {
    return of({
      title: 'Welcome back',
      subtitle: 'Enter your email and password to sign in',
      email: {
        label: 'Email',
        placeholder: 'Email'
      },
      password: {
        label: 'Password',
        placeholder: 'Password'
      },
      rememberMe: {
        label: 'Remember me',
        checked: false
      },
      signInButton: {
        text: 'Sign in'
      },
      signUpLink: {
        text: "Don't have an account?",
        linkText: 'Sign up',
        url: '/pages/authentication/signup/basic'
      }
    });
  }
} 