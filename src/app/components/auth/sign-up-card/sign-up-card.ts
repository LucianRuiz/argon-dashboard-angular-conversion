import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Social Provider Interface
 * 
 * Defines the structure for social authentication providers
 * such as Google, Facebook, Apple, GitHub, etc.
 */
export interface SocialProvider {
  /** Display name for the social provider */
  name: string;
  /** Icon identifier or class for the social provider */
  icon: string;
  /** Type of social provider for styling and behavior */
  type: 'facebook' | 'apple' | 'google' | 'github' | 'custom';
}

/**
 * Sign Up Card Data Interface
 * 
 * Defines the structure for sign up card configuration data.
 * Contains all text content, placeholders, and social provider
 * options for the registration card component.
 */
export interface SignUpCardData {
  /** Main title displayed at the top of the card */
  title: string;
  /** Array of social authentication providers */
  socialProviders: SocialProvider[];
  /** Placeholder text for the name input field */
  namePlaceholder: string;
  /** Placeholder text for the email input field */
  emailPlaceholder: string;
  /** Placeholder text for the password input field */
  passwordPlaceholder: string;
  /** Label text for the terms and conditions section */
  termsLabel: string;
  /** Text for the terms and conditions link */
  termsLinkText: string;
  /** Text for the primary sign up button */
  signUpButton: string;
  /** Text displayed before the sign in link */
  signInText: string;
  /** Text for the actual sign in link */
  signInLinkText: string;
}

/**
 * Sign Up Card Component
 * 
 * This component implements a comprehensive user registration card
 * for the application. It provides a professional card-based interface
 * for new users to create accounts with email/password authentication
 * and optional social login integration.
 * 
 * Features:
 * - Professional card-based registration interface
 * - Name, email, and password input fields with validation
 * - Terms and conditions agreement checkbox
 * - Multiple social authentication providers (Google, Facebook, etc.)
 * - Primary sign up button for form submission
 * - Sign in link for existing users
 * - Card-based layout with proper styling and shadows
 * - Fully configurable through data input properties
 * - Form validation and error handling
 * - Responsive design for various screen sizes
 * - Accessibility features for inclusive user experience
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Two-way data binding with Angular Forms
 * - Social provider integration with customizable styling
 * 
 * The component serves as a reusable registration card that can be
 * easily integrated into authentication flows, providing users with
 * a secure and accessible way to create new accounts with multiple
 * authentication options in a professional card-based layout.
 * 
 * @example
 * ```html
 * <app-sign-up-card [data]="signUpCardData"></app-sign-up-card>
 * ```
 */
@Component({
  selector: 'app-sign-up-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up-card.html'
})
export class SignUpCardComponent {
  /**
   * Data for the sign up card component.
   * 
   * Provides all the content and configuration for the card including
   * title, social providers, field placeholders, button text, and
   * navigation links. This input property allows complete customization
   * of the card appearance and behavior.
   * 
   * @type {SignUpCardData} - Complete card configuration
   */
  @Input() data!: SignUpCardData;

  /** Form field values bound to input fields */
  name = '';
  email = '';
  password = '';
  acceptTerms = false;

  /**
   * Handles social authentication provider button clicks.
   * 
   * Currently logs the social provider selection to the console for
   * debugging purposes. In a real application, this method would
   * typically initiate the OAuth flow for the selected social provider.
   * 
   * @param {SocialProvider} provider - The selected social provider
   */
  onSocialClick(provider: SocialProvider) {
    console.log('Social button clicked:', provider.name);
  }

  /**
   * Handles the form submission for user registration.
   * 
   * Currently logs the registration data to the console for debugging
   * purposes. In a real application, this method would typically
   * validate the form data and send it to a backend service for
   * user account creation.
   */
  onSignUp() {
    console.log('Sign up form submitted:', {
      name: this.name,
      email: this.email,
      password: this.password,
      acceptTerms: this.acceptTerms
    });
  }

  /**
   * Handles the sign in link click.
   * 
   * Currently logs the navigation request to the console for debugging
   * purposes. In a real application, this method would typically
   * navigate the user to the sign in page or trigger a navigation event.
   */
  onSignIn() {
    console.log('Navigate to sign in');
  }
} 