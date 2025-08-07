import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Signin Illustration Form Data Interface
 * 
 * Defines the structure for signin form data in illustration pages.
 * This form is designed for user login with email, password and
 * remember me functionality, optimized for illustration-based layouts.
 */
export interface SigninIllustrationFormData {
  /** Main title displayed at the top of the form */
  title: string;
  /** Description text providing context or instructions */
  description: string;
  /** Email field configuration with placeholder */
  emailField: {
    /** Placeholder text shown inside the email field when empty */
    placeholder: string;
  };
  /** Password field configuration with placeholder */
  passwordField: {
    /** Placeholder text shown inside the password field when empty */
    placeholder: string;
  };
  /** Remember me checkbox configuration */
  rememberMe: {
    /** Text displayed next to the remember me checkbox */
    text: string;
  };
  /** Sign in button configuration */
  signinButton: {
    /** Text to display on the primary sign in button */
    text: string;
  };
  /** Sign up link configuration for new users */
  signupLink: {
    /** Text displayed before the sign up link */
    text: string;
    /** Text for the actual sign up link */
    linkText: string;
    /** URL for the sign up page */
    linkUrl: string;
  };
}

/**
 * Signin Illustration Form Component
 * 
 * This component implements a simplified user authentication form
 * specifically designed for illustration pages. It provides a clean,
 * transparent interface for existing users to sign in with minimal
 * styling that integrates seamlessly with illustration layouts.
 * 
 * Features:
 * - Simplified authentication interface for illustration pages
 * - Email and password input fields with validation
 * - Remember me checkbox for persistent login
 * - Primary sign in button for form submission
 * - Sign up link for new user registration
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
 * The component serves as a specialized authentication form for
 * illustration pages, providing users with a clean and accessible
 * way to sign in to their accounts while maintaining the visual
 * appeal of illustration-based layouts.
 * 
 * @example
 * ```html
 * <app-signin-illustration-form [data]="signinData"></app-signin-illustration-form>
 * ```
 */
@Component({
  selector: 'app-signin-illustration-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin-illustration-form.html'
})
export class SigninIllustrationFormComponent {
  /**
   * Data for the signin form component.
   * 
   * Provides all the content and configuration for the form including
   * title, description, field placeholders, button text, and navigation
   * links. This input property allows complete customization of the
   * form appearance and behavior for illustration pages.
   * 
   * @type {SigninIllustrationFormData} - Complete form configuration
   */
  @Input() data: SigninIllustrationFormData = {
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
  };

  /** Form field values bound to input fields */
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  /**
   * Handles the form submission for user login.
   * 
   * Currently logs the login data to the console for debugging
   * purposes. In a real application, this method would typically
   * validate the credentials and send them to a backend service
   * for authentication.
   */
  onSignin(): void {
    console.log('Signin requested for:', {
      email: this.email,
      rememberMe: this.rememberMe
    });
    // TODO: Implement actual login logic
    // This could include API calls, validation, etc.
  }

  /**
   * Handles the sign up link click.
   * 
   * Currently logs the navigation request to the console for debugging
   * purposes. In a real application, this method would typically
   * navigate the user to the sign up page or trigger a navigation event.
   */
  onSignupClick(): void {
    console.log('Sign up link clicked');
    // TODO: Implement navigation to sign up page
  }
} 