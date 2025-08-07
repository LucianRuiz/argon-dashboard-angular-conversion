import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Reset Illustration Form Data Interface
 * 
 * Defines the structure for reset password form data in illustration pages.
 * This form is designed for resetting password with email and verification
 * code, optimized for illustration-based layouts.
 */
export interface ResetIllustrationFormData {
  /** Main title displayed at the top of the form */
  title: string;
  /** Description text providing context or instructions */
  description: string;
  /** Email field configuration with placeholder */
  emailField: {
    /** Placeholder text shown inside the email field when empty */
    placeholder: string;
  };
  /** Verification code field configuration with placeholder */
  verificationField: {
    /** Placeholder text shown inside the verification code field when empty */
    placeholder: string;
  };
  /** Primary send button configuration */
  sendButton: {
    /** Text to display on the send button */
    text: string;
  };
}

/**
 * Reset Illustration Form Component
 * 
 * This component implements a simplified password reset form
 * specifically designed for illustration pages. It provides a clean,
 * transparent interface for users to reset their passwords with
 * email and verification code inputs.
 * 
 * Features:
 * - Simplified password reset interface for illustration pages
 * - Email input field for user identification
 * - Verification code input field for security
 * - Primary send button for form submission
 * - Transparent background for illustration integration
 * - Fully configurable through data input properties
 * - Form validation and error handling
 * - Responsive design for various screen sizes
 * - Accessibility features for inclusive user experience
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Two-way data binding with Angular Forms
 * - Minimal styling for illustration page compatibility
 * - Clear user feedback and instructions
 * 
 * The component serves as a specialized password reset form for
 * illustration pages, providing users with a clean and accessible
 * way to reset their passwords while maintaining the visual appeal
 * of illustration-based layouts.
 * 
 * @example
 * ```html
 * <app-reset-illustration-form [data]="resetData"></app-reset-illustration-form>
 * ```
 */
@Component({
  selector: 'app-reset-illustration-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reset-illustration-form.html'
})
export class ResetIllustrationFormComponent {
  /**
   * Data for the reset form component.
   * 
   * Provides all the content and configuration for the form including
   * title, description, field placeholders, and button text. This input
   * property allows complete customization of the form appearance
   * and behavior for illustration pages.
   * 
   * @type {ResetIllustrationFormData} - Complete form configuration
   */
  @Input() data: ResetIllustrationFormData = {
    title: "Reset Password",
    description: "You will receive an e-mail in maximum 60 seconds",
    emailField: {
      placeholder: "Email"
    },
    verificationField: {
      placeholder: "Verification Code"
    },
    sendButton: {
      text: "Send"
    }
  };

  /** Email field value bound to the email input */
  email: string = '';
  /** Verification code field value bound to the verification code input */
  verificationCode: string = '';

  /**
   * Handles the form submission for resetting password.
   * 
   * Currently logs the password reset request to the console for
   * debugging purposes. In a real application, this method would
   * typically validate the email and verification code, then send
   * a password reset link to the user's email address.
   */
  onSend(): void {
    console.log('Reset password requested for email:', this.email);
    console.log('Verification code:', this.verificationCode);
    // TODO: Implement actual reset logic
    // This could include API calls, validation, etc.
  }
} 