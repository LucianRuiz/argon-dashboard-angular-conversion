import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Data structure for sign in form configuration.
 * 
 * Provides comprehensive configuration for all form elements including
 * fields, buttons, links, and user preferences for the sign in form.
 */
export interface SignInFormData {
  /** Main title displayed at the top of the form */
  title: string;
  /** Subtitle providing additional context or instructions */
  subtitle: string;
  /** Email field configuration with label and placeholder */
  email: {
    /** Label text displayed above the email field */
    label: string;
    /** Placeholder text shown inside the email field when empty */
    placeholder: string;
  };
  /** Password field configuration with label and placeholder */
  password: {
    /** Label text displayed above the password field */
    label: string;
    /** Placeholder text shown inside the password field when empty */
    placeholder: string;
  };
  /** Remember me checkbox configuration */
  rememberMe: {
    /** Label text displayed next to the checkbox */
    label: string;
    /** Initial checked state of the checkbox */
    checked: boolean;
  };
  /** Sign in button configuration */
  signInButton: {
    /** Text to display on the primary sign in button */
    text: string;
  };
  /** Sign up link configuration for new users */
  signUpLink: {
    /** Text displayed before the sign up link */
    text: string;
    /** Text for the actual sign up link */
    linkText: string;
    /** URL for the sign up page */
    url: string;
  };
}

/**
 * Sign In Form Component
 * 
 * This component implements a comprehensive user authentication form
 * for the application. It provides a user-friendly interface for
 * existing users to sign in with email and password credentials,
 * including remember me functionality and navigation to registration.
 * 
 * Features:
 * - Clean and intuitive sign in interface
 * - Email and password input fields with validation
 * - Remember me checkbox for persistent login
 * - Primary sign in button for form submission
 * - Sign up link for new user registration
 * - Fully configurable through data input properties
 * - Form validation and error handling
 * - Responsive design for various screen sizes
 * - Accessibility features for inclusive user experience
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Two-way data binding with Angular Forms
 * - Consistent styling across authentication pages
 * 
 * The component serves as a reusable authentication form that can be
 * easily integrated into authentication flows, providing users with
 * a secure and accessible way to sign in to their accounts with
 * consistent user experience across different authentication pages.
 * 
 * @example
 * ```html
 * <app-sign-in-form [data]="signInData"></app-sign-in-form>
 * ```
 */
@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in-form.html'
})
export class SignInFormComponent {
  /**
   * Data for the sign in form component.
   * 
   * Provides all the content and configuration for the form including
   * title, subtitle, field labels, placeholders, button text, and
   * navigation links. This input property allows complete customization
   * of the form appearance and behavior.
   * 
   * @type {SignInFormData} - Sign in form configuration
   */
  @Input() data: SignInFormData = {
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
      checked: true
    },
    signInButton: {
      text: 'Sign in'
    },
    signUpLink: {
      text: "Don't have an account?",
      linkText: 'Sign up',
      url: '/auth/signup/basic'
    }
  };
} 