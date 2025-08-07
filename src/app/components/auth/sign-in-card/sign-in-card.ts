import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Social Provider Interface
 * 
 * Defines the structure for social authentication providers
 * with custom action handlers for the sign in card component.
 */
export interface SocialProvider {
  /** Display name for the social provider */
  name: string;
  /** Icon identifier or class for the social provider */
  icon: string;
  /** Custom action function to execute when the social provider is clicked */
  action: () => void;
}

/**
 * Sign In Card Data Interface
 * 
 * Defines the structure for sign in card configuration data.
 * Contains all text content, placeholders, and social provider
 * options for the authentication card component.
 */
export interface SignInCardData {
  /** Main title displayed at the top of the card */
  title: string;
  /** Array of social authentication providers with custom actions */
  socialProviders: SocialProvider[];
  /** Subtitle providing additional context or instructions */
  subtitle: string;
  /** Placeholder text for the email input field */
  emailPlaceholder: string;
  /** Placeholder text for the password input field */
  passwordPlaceholder: string;
  /** Label text for the remember me checkbox */
  rememberMeLabel: string;
  /** Text for the primary sign in button */
  signInButton: string;
  /** Text displayed as a divider between sections */
  dividerText: string;
  /** Text for the sign up button */
  signUpButton: string;
}

/**
 * Sign In Card Component
 * 
 * This component implements a comprehensive user authentication card
 * for the application. It provides a professional card-based interface
 * for existing users to sign in with email/password credentials and
 * optional social login integration.
 * 
 * Features:
 * - Professional card-based authentication interface
 * - Email and password input fields with validation
 * - Remember me checkbox for persistent login
 * - Multiple social authentication providers with custom actions
 * - Primary sign in button for form submission
 * - Sign up button for new user registration
 * - Card-based layout with proper styling and shadows
 * - Fully configurable through data input properties
 * - Form validation and error handling
 * - Responsive design for various screen sizes
 * - Accessibility features for inclusive user experience
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Two-way data binding with Angular Forms
 * - Social provider integration with customizable actions
 * 
 * The component serves as a reusable authentication card that can be
 * easily integrated into authentication flows, providing users with
 * a secure and accessible way to sign in to their accounts with
 * multiple authentication options in a professional card-based layout.
 * 
 * @example
 * ```html
 * <app-sign-in-card [data]="signInCardData"></app-sign-in-card>
 * ```
 */
@Component({
  selector: 'app-sign-in-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in-card.html'
})
export class SignInCardComponent {
  /**
   * Data for the sign in card component.
   * 
   * Provides all the content and configuration for the card including
   * title, subtitle, social providers, field placeholders, button text,
   * and navigation options. This input property allows complete
   * customization of the card appearance and behavior.
   * 
   * @type {SignInCardData} - Complete card configuration
   */
  @Input() data!: SignInCardData;

  /** Form field values bound to input fields */
  email = '';
  password = '';
  rememberMe = false;

  /**
   * Handles social authentication provider button clicks.
   * 
   * Executes the custom action function associated with the selected
   * social provider. This allows for flexible integration with
   * different OAuth flows and authentication services.
   * 
   * @param {() => void} action - The custom action function to execute
   */
  onSocialClick(action: () => void) {
    action();
  }

  /**
   * Handles the form submission for user authentication.
   * 
   * Currently an empty method that can be extended with actual
   * authentication logic. In a real application, this method would
   * typically validate the credentials and send them to a backend
   * service for authentication.
   */
  onSignIn() {}

  /**
   * Handles the sign up button click.
   * 
   * Currently an empty method that can be extended with navigation
   * logic. In a real application, this method would typically
   * navigate the user to the sign up page or trigger a registration
   * flow.
   */
  onSignUp() {}
} 