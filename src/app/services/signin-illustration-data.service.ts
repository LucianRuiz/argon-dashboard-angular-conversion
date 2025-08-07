import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { SigninIllustrationFormData } from '../components/auth/signin-illustration-form/signin-illustration-form';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';

/**
 * Signin Illustration Data Service
 *
 * Provides data configuration for the signin illustration page.
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
 * - Signin illustration page
 * - User login
 * - Authentication
 */
@Injectable({
  providedIn: 'root'
})
export class SigninIllustrationDataService {

  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) {}

  /**
   * Gets the navbar configuration data for signin illustration page.
   * Uses default navbar with standard styling.
   *
   * @returns {Observable<SecondaryNavbarData>} Navbar configuration
   */
  getNavbarData(): Observable<SecondaryNavbarData> {
    const navbarData = this.secondaryNavbarDataService.getDefaultNavbar();
    navbarData.textColor = 'text-slate-700';
    navbarData.buyNowButtonColor = 'text-white bg-blue-500 hover:-translate-y-px active:opacity-85';
    return of(navbarData);
  }

  /**
   * Gets the signin form configuration data.
   * Provides all form content and styling configuration.
   *
   * @returns {Observable<SigninIllustrationFormData>} Form configuration
   */
  getSigninFormData(): Observable<SigninIllustrationFormData> {
    return of({
      title: "Sign In",
      description: "Enter your email and password to sign in",
      emailField: {
        placeholder: "Email"
      },
      passwordField: {
        placeholder: "Password"
      },
      rememberMe: {
        text: "Remember me"
      },
      signinButton: {
        text: "Sign In"
      },
      signupLink: {
        text: "Don't have an account?",
        linkText: "Sign up",
        linkUrl: "javascript:;"
      }
    });
  }
} 