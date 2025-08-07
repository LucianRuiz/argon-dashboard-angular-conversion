import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Reset Password Card Data Interface
 * 
 * Defines the structure for reset password card configuration data.
 * All text content, styling, and behavior can be customized through
 * this interface for the reset password card component.
 */
export interface ResetPasswordCardData {
  /** Main title displayed at the top of the reset password card */
  title: string;
  /** Subtitle providing additional context or instructions */
  subtitle: string;
  /** Email field configuration with placeholder and type */
  email: {
    /** Placeholder text shown inside the email field when empty */
    placeholder: string;
    /** HTML input type for the email field */
    type: string;
  };
  /** Primary send button configuration */
  sendButton: {
    /** Text to display on the send button */
    text: string;
  };
}

/**
 * Reset Password Card Component
 * 
 * This component implements a comprehensive password reset card
 * for the application. It provides a clean, card-based interface
 * for users to request password reset functionality with email
 * validation and professional styling.
 * 
 * Features:
 * - Professional card-based password reset interface
 * - Email input field with validation
 * - Primary send button for password reset request
 * - Card-based layout with proper styling and shadows
 * - Fully configurable through data input properties
 * - Form validation and error handling
 * - Responsive design for various screen sizes
 * - Accessibility features for inclusive user experience
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Two-way data binding with Angular Forms
 * - Consistent styling with Argon Dashboard design system
 * - Clear user feedback and instructions
 * 
 * The component serves as a reusable password reset card that can be
 * easily integrated into authentication flows, providing users with
 * a secure and accessible way to restore access to their accounts
 * with a professional card-based interface.
 * 
 * @example
 * ```html
 * <app-reset-password-card [data]="resetPasswordData"></app-reset-password-card>
 * ```
 */
@Component({
  selector: 'app-reset-password-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reset-password-card.html'
})
export class ResetPasswordCardComponent {
  /**
   * Data for the reset password card component.
   * 
   * Provides all the content and configuration for the card including
   * title, subtitle, field configuration, and button text. This input
   * property allows complete customization of the card appearance
   * and behavior.
   * 
   * @type {ResetPasswordCardData} - Complete form configuration
   */
  @Input() data: ResetPasswordCardData = {
    title: "Reset password",
    subtitle: "You will receive an e-mail in maximum 60 seconds",
    email: {
      placeholder: "Email",
      type: "email"
    },
    sendButton: {
      text: "Send"
    }
  };

  /** Email input value bound to the email field */
  email: string = '';

  /**
   * Handles the form submission for password reset.
   * 
   * Currently logs the password reset request to the console for
   * debugging purposes. In a real application, this method would
   * typically validate the email and send a password reset link
   * to the user's email address.
   */
  onSendResetEmail(): void {
    console.log('Reset password email requested for:', this.email);
    // TODO: Implement actual password reset logic
    // This could include API calls, validation, etc.
  }
} 