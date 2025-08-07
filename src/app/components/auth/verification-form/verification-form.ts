import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for verification form button.
 * 
 * Defines the configuration for the primary action button
 * in the verification form, typically used for submitting
 * the verification code.
 */
export interface VerificationFormButton {
  /** Text to display on the button */
  text: string;
}

/**
 * Data structure for verification form link.
 * 
 * Defines the configuration for secondary action links
 * such as "resend code" or "change phone number".
 */
export interface VerificationFormLink {
  /** Text to display for the link */
  text: string;
  /** URL for the link navigation or action */
  url: string;
}

/**
 * Complete data structure for the verification form component.
 * 
 * Contains all configuration data needed to render the verification
 * form including title, code length, buttons, and links.
 */
export interface VerificationFormData {
  /** Main title displayed at the top of the form */
  title: string;
  /** Number of verification code input fields to display */
  codeLength: number;
  /** Primary send/submit button configuration */
  sendButton: VerificationFormButton;
  /** Resend code link configuration */
  resendLink: VerificationFormLink;
}

/**
 * Verification Form Component
 * 
 * This component implements a comprehensive two-step verification form
 * for the application. It provides a user-friendly interface for users
 * to enter verification codes sent via email, SMS, or other methods
 * for enhanced account security.
 * 
 * Features:
 * - Clean and intuitive verification code interface
 * - Configurable number of verification code input fields
 * - Primary send/submit button for code verification
 * - Resend code link for users who haven't received the code
 * - Fully configurable through data input properties
 * - Responsive design for various screen sizes
 * - Accessibility features for inclusive user experience
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Dynamic field generation based on code length
 * 
 * The component serves as a reusable verification form that can be
 * easily integrated into authentication flows, providing users with
 * a secure and accessible way to complete two-step verification
 * processes for enhanced account security.
 * 
 * @example
 * ```html
 * <app-verification-form [data]="verificationData"></app-verification-form>
 * ```
 */
@Component({
  selector: 'app-verification-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verification-form.html'
})
export class VerificationFormComponent {
  /**
   * Data for the verification form component.
   * 
   * Provides all the content and configuration for the form including
   * title, code length, buttons, and navigation links. This input
   * property allows complete customization of the form appearance
   * and behavior.
   * 
   * @type {VerificationFormData} - Complete form configuration
   */
  @Input() data: VerificationFormData = {
    title: '2-Step Verification',
    codeLength: 4,
    sendButton: {
      text: 'Send code'
    },
    resendLink: {
      text: "Haven't received it?",
      url: 'javascript:;'
    }
  };

  /**
   * Generates an array of numbers for the verification code fields.
   * 
   * Creates an array of sequential numbers from 0 to codeLength-1,
   * which is used in the template to generate the correct number
   * of verification code input fields dynamically.
   * 
   * @returns {number[]} Array of numbers from 0 to codeLength-1
   */
  getCodeFields(): number[] {
    return Array.from({ length: this.data.codeLength }, (_, i) => i);
  }
} 