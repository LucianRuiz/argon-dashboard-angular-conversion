import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Data structure for social authentication buttons.
 * 
 * Defines the configuration for social login buttons such as
 * Google, Facebook, Twitter, etc., including their display
 * name, icon, URL, and optional color styling.
 */
export interface SocialButton {
  /** Display name for the social button */
  name: string;
  /** CSS class for the social platform icon */
  iconClass: string;
  /** URL for the social authentication endpoint */
  url: string;
  /** Optional color styling for the button */
  color?: string;
}

/**
 * Complete data structure for the sign up form component.
 * 
 * Contains all configuration data needed to render the sign up
 * form including labels, buttons, links, and social authentication
 * options.
 */
export interface SignUpFormData {
  /** Main title displayed at the top of the form */
  title: string;
  /** Subtitle providing additional context or instructions */
  subtitle: string;
  /** Label for the email input field */
  emailLabel: string;
  /** Label for the password input field */
  passwordLabel: string;
  /** Label for the confirm password input field */
  confirmPasswordLabel: string;
  /** Label for the name input field */
  nameLabel: string;
  /** Text for the primary sign up button */
  signUpButtonText: string;
  /** Text for the sign in link */
  signInLinkText: string;
  /** URL for the sign in page */
  signInLinkUrl: string;
  /** Text for the terms and conditions section */
  termsText: string;
  /** Text for the terms and conditions link */
  termsLinkText: string;
  /** URL for the terms and conditions page */
  termsLinkUrl: string;
  /** Array of social authentication buttons */
  socialButtons: SocialButton[];
}

/**
 * Sign Up Form Component
 * 
 * This component implements a comprehensive user registration form
 * for the application. It provides a user-friendly interface for
 * new users to create accounts with email/password authentication
 * and optional social login integration.
 * 
 * Features:
 * - Complete user registration form with validation
 * - Name, email, password, and confirm password fields
 * - Terms and conditions agreement checkbox
 * - Social authentication buttons (Google, Facebook, etc.)
 * - Sign in link for existing users
 * - Fully configurable through data input properties
 * - Form validation and error handling
 * - Responsive design for various screen sizes
 * - Accessibility features for inclusive user experience
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Two-way data binding with Angular Forms
 * 
 * The component serves as a reusable registration form that can be
 * easily integrated into authentication flows, providing users with
 * a secure and accessible way to create new accounts with multiple
 * authentication options.
 * 
 * @example
 * ```html
 * <app-sign-up-form [data]="signUpData"></app-sign-up-form>
 * ```
 */
@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up-form.html'
})
export class SignUpFormComponent {
  /**
   * Data for the sign up form component.
   * 
   * Provides all the content and configuration for the form including
   * labels, buttons, links, and social authentication options. This
   * input property allows complete customization of the form appearance
   * and behavior.
   * 
   * @type {SignUpFormData} - Complete form configuration
   */
  @Input() data!: SignUpFormData;

  /**
   * Form data object containing user input values.
   * 
   * Stores the current values of all form fields including name,
   * email, password, confirm password, and terms agreement status.
   * This object is bound to the form inputs using two-way data binding.
   */
  formData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  };

  /**
   * Handles form submission when the user clicks the sign up button.
   * 
   * Currently logs the form data to the console for debugging purposes.
   * In a real application, this method would typically validate the
   * form data and send it to a backend service for user registration.
   */
  onSubmit() {
    console.log('Sign up form submitted:', this.formData);
  }
} 