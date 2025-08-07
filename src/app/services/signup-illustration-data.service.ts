import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { SignupIllustrationFormData } from '../components/auth/signup-illustration-form/signup-illustration-form';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';

/**
 * Signup Illustration Data Service
 *
 * Provides data configuration for the signup illustration page.
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
 * - Signup illustration page
 * - User registration
 * - Account creation
 */
@Injectable({
  providedIn: 'root'
})
export class SignupIllustrationDataService {

  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) {}

  /**
   * Gets the navbar configuration data for signup illustration page.
   * Uses default navbar with standard styling.
   *
   * @returns {Observable<SecondaryNavbarData>} Navbar configuration
   */
  getNavbarData(): Observable<SecondaryNavbarData> {
    const navbarData = this.secondaryNavbarDataService.getDefaultNavbar();
    navbarData.textColor = 'text-slate-700';
    navbarData.buyNowButtonColor = 'text-white bg-blue-500 hover:-translate-y-px active:-translate-y-px active:text-black active:hover:text-white';
    return of(navbarData);
  }

  /**
   * Gets the signup form configuration data.
   * Provides all form content and styling configuration.
   *
   * @returns {Observable<SignupIllustrationFormData>} Form configuration
   */
  getSignupFormData(): Observable<SignupIllustrationFormData> {
    return of({
      title: "Sign Up",
      description: "Enter your email and password to register",
      nameField: {
        label: "Name",
        placeholder: "Name"
      },
      emailField: {
        label: "Email",
        placeholder: "Email"
      },
      passwordField: {
        label: "Password",
        placeholder: "Password"
      },
      terms: {
        text: "I agree the",
        linkText: "Terms and Conditions",
        linkUrl: "javascript:;"
      },
      signupButton: {
        text: "Sign up"
      },
      signinLink: {
        text: "Already have an account?",
        linkText: "Sign in",
        linkUrl: "javascript:;"
      }
    });
  }
} 