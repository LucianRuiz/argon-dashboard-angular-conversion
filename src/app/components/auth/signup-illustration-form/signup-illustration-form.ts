import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Signup Illustration Form Data Interface
 * 
 * Defines the structure for signup form data in illustration pages.
 * This form is designed for user registration with name, email, password
 * and terms agreement, optimized for illustration-based layouts.
 */
export interface SignupIllustrationFormData {
  /** Main title displayed at the top of the form */
  title: string;
  /** Description text providing context or instructions */
  description: string;
  /** Name field configuration with label and placeholder */
  nameField: {
    /** Label text displayed above the name field */
    label: string;
    /** Placeholder text shown inside the name field when empty */
    placeholder: string;
  };
  /** Email field configuration with label and placeholder */
  emailField: {
    /** Label text displayed above the email field */
    label: string;
    /** Placeholder text shown inside the email field when empty */
    placeholder: string;
  };
  /** Password field configuration with label and placeholder */
  passwordField: {
    /** Label text displayed above the password field */
    label: string;
    /** Placeholder text shown inside the password field when empty */
    placeholder: string;
  };
  /** Terms and conditions configuration */
  terms: {
    /** Text displayed before the terms link */
    text: string;
    /** Text for the actual terms and conditions link */
    linkText: string;
    /** URL for the terms and conditions page */
    linkUrl: string;
  };
  /** Sign up button configuration */
  signupButton: {
    /** Text to display on the primary sign up button */
    text: string;
  };
  /** Sign in link configuration for existing users */
  signinLink: {
    /** Text displayed before the sign in link */
    text: string;
    /** Text for the actual sign in link */
    linkText: string;
    /** URL for the sign in page */
    linkUrl: string;
  };
}

/**
 * Signup Illustration Form Component
 * 
 * This component implements a simplified user registration form
 * specifically designed for illustration pages. It provides a clean,
 * transparent interface for new users to create accounts with minimal
 * styling that integrates seamlessly with illustration layouts.
 * 
 * Features:
 * - Simplified registration interface for illustration pages
 * - Name, email, and password input fields with validation
 * - Terms and conditions agreement checkbox
 * - Primary sign up button for form submission
 * - Sign in link for existing users
 * - Transparent background for illustration integration
 * - Fully configurable through data input properties
 * - Form validation and error handling
 * - Responsive design for various screen sizes
 * - Accessibility features for inclusive user experience
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Two-way data binding with Angular Forms
 * - Minimal styling for illustration page compatibility
 * 
 * The component serves as a specialized registration form for
 * illustration pages, providing users with a clean and accessible
 * way to create new accounts while maintaining the visual appeal
 * of illustration-based layouts.
 * 
 * @example
 * ```html
 * <app-signup-illustration-form [data]="signupData"></app-signup-illustration-form>
 * ```
 */
@Component({
  selector: 'app-signup-illustration-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup-illustration-form.html'
})
export class SignupIllustrationFormComponent {
  /**
   * Data for the signup form component.
   * 
   * Provides all the content and configuration for the form including
   * title, description, field labels, placeholders, button text, and
   * navigation links. This input property allows complete customization
   * of the form appearance and behavior for illustration pages.
   * 
   * @type {SignupIllustrationFormData} - Complete form configuration
   */
  @Input() data: SignupIllustrationFormData = {
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
  };

  /** Form field values bound to input fields */
  name: string = '';
  email: string = '';
  password: string = '';
  agreeTerms: boolean = false;

  /**
   * Handles the form submission for user registration.
   * 
   * Currently logs the registration data to the console for debugging
   * purposes. In a real application, this method would typically
   * validate the form data and send it to a backend service for
   * user account creation.
   */
  onSignup(): void {
    console.log('Signup requested for:', {
      name: this.name,
      email: this.email,
      agreeTerms: this.agreeTerms
    });
    // TODO: Implement actual registration logic
    // This could include API calls, validation, etc.
  }

  /**
   * Handles the sign in link click.
   * 
   * Currently logs the navigation request to the console for debugging
   * purposes. In a real application, this method would typically
   * navigate the user to the sign in page or trigger a navigation event.
   */
  onSigninClick(): void {
    console.log('Sign in link clicked');
    // TODO: Implement navigation to sign in page
  }
} 