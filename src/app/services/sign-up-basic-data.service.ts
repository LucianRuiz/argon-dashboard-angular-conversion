import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SignUpCardData } from '../components/auth/sign-up-card/sign-up-card';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';

/**
 * SignUpBasicDataService
 * 
 * Service that provides mock data for the basic sign-up registration page.
 * This service manages the registration form configuration including social providers,
 * form fields, and navigation elements.
 * 
 * The service provides data for:
 * - Sign-up card configuration with form fields and buttons
 * - Social authentication providers (Facebook, Apple, Google)
 * - Secondary navbar for authentication pages with custom styling
 * - Terms and conditions acceptance
 * - Form validation and user interaction elements
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({ providedIn: 'root' })
export class SignUpBasicDataService {
  
  /**
   * Creates an instance of SignUpBasicDataService.
   * 
   * @param secondaryNavbarDataService - Service for managing secondary navbar data
   */
  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) {}

  /**
   * Retrieves secondary navbar data for the sign-up page with custom styling.
   * 
   * @returns Observable<SecondaryNavbarData> - Observable containing secondary navbar configuration
   *          with custom text colors and button styling
   */
  getNavbarData(): Observable<SecondaryNavbarData> {
    const navbarData = this.secondaryNavbarDataService.getDefaultNavbar();
    navbarData.textColor = 'text-slate-700';
    navbarData.buyNowButtonColor = 'text-white bg-gradient-to-tl from-blue-500 to-violet-500 hover:-translate-y-px active:opacity-85';
    return of(navbarData);
  }

  /**
   * Retrieves sign-up card data for displaying the registration form.
   * 
   * @returns Observable<SignUpCardData> - Observable containing sign-up form configuration
   *          with social providers, form fields, terms acceptance, and action buttons
   */
  getSignUpCardData(): Observable<SignUpCardData> {
    return of({
      title: 'Register with',
      socialProviders: [
        {
          name: 'Facebook',
          icon: 'assets/img/logos/facebook.svg',
          type: 'facebook'
        },
        {
          name: 'Apple',
          icon: 'assets/img/logos/apple.svg',
          type: 'apple'
        },
        {
          name: 'Google',
          icon: 'assets/img/logos/google.svg',
          type: 'google'
        }
      ],
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Password',
      termsLabel: 'I agree the',
      termsLinkText: 'Terms and Conditions',
      signUpButton: 'Sign up',
      signInText: 'Already have an account?',
      signInLinkText: 'Sign in'
    });
  }
} 