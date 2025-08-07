import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SignInCardData } from '../components/auth/sign-in-card/sign-in-card';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';

/**
 * SignInBasicDataService
 * 
 * Service that provides mock data for the basic sign-in authentication page.
 * This service manages the sign-in form configuration including social providers,
 * form fields, and navigation elements.
 * 
 * The service provides data for:
 * - Sign-in card configuration with form fields and buttons
 * - Social authentication providers (GitHub, Google)
 * - Secondary navbar for authentication pages
 * - Form validation and user interaction elements
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({ providedIn: 'root' })
export class SignInBasicDataService {
  
  /**
   * Creates an instance of SignInBasicDataService.
   * 
   * @param secondaryNavbarDataService - Service for managing secondary navbar data
   */
  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) {}

  /**
   * Retrieves secondary navbar data for the sign-in page.
   * 
   * @returns Observable<SecondaryNavbarData> - Observable containing secondary navbar configuration
   */
  getNavbarData(): Observable<SecondaryNavbarData> {
    return of(this.secondaryNavbarDataService.getDefaultNavbar());
  }

  /**
   * Retrieves sign-in card data for displaying the authentication form.
   * 
   * @returns Observable<SignInCardData> - Observable containing sign-in form configuration
   *          with social providers, form fields, and action buttons
   */
  getSignInCardData(): Observable<SignInCardData> {
    return of({
      title: 'Sign in',
      socialProviders: [
        {
          name: 'Github',
          icon: 'assets/img/logos/github.svg',
          action: () => { window.open('https://github.com', '_blank'); }
        },
        {
          name: 'Google',
          icon: 'assets/img/logos/google.svg',
          action: () => { window.open('https://google.com', '_blank'); }
        }
      ],
      subtitle: 'Or sign in with credentials',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Password',
      rememberMeLabel: 'Remember me',
      signInButton: 'Sign in',
      dividerText: 'or',
      signUpButton: 'Sign up'
    });
  }
} 