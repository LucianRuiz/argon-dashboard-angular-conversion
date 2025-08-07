import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Data structure for reset password form fields.
 * 
 * Defines the configuration for individual form input fields
 * including label, placeholder text, and input type.
 */
export interface ResetPasswordFormField {
  /** Label text displayed above the form field */
  label: string;
  /** Placeholder text shown inside the input field when empty */
  placeholder: string;
  /** HTML input type (email, password, text, etc.) */
  type: string;
}

/**
 * Data structure for reset password form button.
 * 
 * Defines the configuration for the primary action button
 * in the reset password form.
 */
export interface ResetPasswordFormButton {
  /** Text to display on the button */
  text: string;
}

/**
 * Data structure for reset password form link.
 * 
 * Defines the configuration for alternative navigation links
 * such as "back to sign in" or "contact support".
 */
export interface ResetPasswordFormLink {
  /** Text to display for the link */
  text: string;
  /** URL for the link navigation */
  url: string;
}

/**
 * Complete data structure for the reset password form component.
 * 
 * Contains all configuration data needed to render the reset password
 * form including title, subtitle, form fields, buttons, and links.
 */
export interface ResetPasswordFormData {
  /** Main title displayed at the top of the form */
  title: string;
  /** Subtitle providing additional context or instructions */
  subtitle: string;
  /** Email field configuration for user input */
  email: ResetPasswordFormField;
  /** Primary reset button configuration */
  resetButton: ResetPasswordFormButton;
  /** Alternative link configuration for additional options */
  alternativeLink: ResetPasswordFormLink;
}

/**
 * Reset Password Form Component
 * 
 * This component implements a comprehensive password reset form for the application.
 * It provides a user-friendly interface for users to request password reset
 * functionality with email validation and alternative recovery options.
 * 
 * Features:
 * - Clean and intuitive password reset interface
 * - Email input field with validation
 * - Primary reset button for form submission
 * - Alternative link for users without email access
 * - Fully configurable through data input properties
 * - Responsive design for various screen sizes
 * - Accessibility features for inclusive user experience
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Router integration for navigation
 * 
 * The component serves as a reusable password reset form that can be
 * easily integrated into authentication flows, providing users with
 * a secure and accessible way to restore access to their accounts.
 * 
 * @example
 * ```html
 * <app-reset-password-form [data]="resetPasswordData"></app-reset-password-form>
 * ```
 */
@Component({
  selector: 'app-reset-password-form',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reset-password-form.html'
})
export class ResetPasswordFormComponent {
  /**
   * Data for the reset password form component.
   * 
   * Provides all the content and configuration for the form including
   * title, subtitle, form fields, buttons, and navigation links.
   * This input property allows complete customization of the form
   * appearance and behavior.
   * 
   * @type {ResetPasswordFormData} - Complete form configuration
   */
  @Input() data: ResetPasswordFormData = {
    title: "Can't log in?",
    subtitle: 'Restore access to your account',
    email: {
      label: 'We will send a recovery link to',
      placeholder: 'Your e-mail',
      type: 'email'
    },
    resetButton: {
      text: 'Reset password'
    },
    alternativeLink: {
      text: "I don't have access to my Email",
      url: '/pages/authentication/signin/cover'
    }
  };
} 