import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Verification Illustration Form Data Interface
 * 
 * Defines the structure for verification form data in illustration pages.
 * This form is designed to be simpler than the basic version with a
 * transparent background and minimal styling for illustration layouts.
 */
export interface VerificationIllustrationFormData {
  /** Main title displayed at the top of the form */
  title: string;
  /** Number of verification code input fields to display */
  codeLength: number;
  /** Primary send/submit button configuration */
  sendButton: {
    /** Text to display on the send button */
    text: string;
  };
  /** Resend code link configuration */
  resendLink: {
    /** Text to display for the resend link */
    text: string;
    /** URL or action for the resend functionality */
    url: string;
  };
}

/**
 * Verification Illustration Form Component
 * 
 * This component implements a simplified two-step verification form
 * specifically designed for illustration pages. It provides a clean,
 * transparent interface for users to enter verification codes with
 * minimal styling that integrates seamlessly with illustration layouts.
 * 
 * Features:
 * - Simplified verification code interface for illustration pages
 * - Configurable number of verification code input fields
 * - Primary send button for code verification
 * - Resend code link for users who haven't received the code
 * - Transparent background for illustration integration
 * - Fully configurable through data input properties
 * - Form validation and error handling
 * - Responsive design for various screen sizes
 * - Accessibility features for inclusive user experience
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Dynamic field generation based on code length
 * - Two-way data binding with Angular Forms
 * 
 * The component serves as a specialized verification form for
 * illustration pages, providing users with a clean and accessible
 * way to complete two-step verification processes while maintaining
 * the visual appeal of illustration-based layouts.
 * 
 * @example
 * ```html
 * <app-verification-illustration-form [data]="verificationData"></app-verification-illustration-form>
 * ```
 */
@Component({
  selector: 'app-verification-illustration-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './verification-illustration-form.html'
})
export class VerificationIllustrationFormComponent {
  /**
   * Data for the verification form component.
   * 
   * Provides all the content and configuration for the form including
   * title, code length, buttons, and navigation links. This input
   * property allows complete customization of the form appearance
   * and behavior for illustration pages.
   * 
   * @type {VerificationIllustrationFormData} - Complete form configuration
   */
  @Input() data: VerificationIllustrationFormData = {
    title: "2-Step Verification",
    codeLength: 4,
    sendButton: {
      text: "Send code"
    },
    resendLink: {
      text: "Haven't received it?",
      url: "javascript:;"
    }
  };

  /** Array of verification code field values */
  codeFields: string[] = [];

  /**
   * Creates an instance of VerificationIllustrationFormComponent.
   * 
   * Initializes the component by setting up the verification code
   * fields array with the correct number of empty strings.
   */
  constructor() {
    this.initializeCodeFields();
  }

  /**
   * Initializes the verification code fields array.
   * 
   * Creates an array of empty strings with the length specified
   * in the data configuration, which will be bound to the input
   * fields for collecting verification codes.
   */
  private initializeCodeFields(): void {
    this.codeFields = Array(this.data.codeLength).fill('');
  }

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

  /**
   * Handles the form submission for verification code.
   * 
   * Currently logs the verification code to the console for debugging
   * purposes. In a real application, this method would typically
   * validate the code and send it to a backend service for verification.
   */
  onSendCode(): void {
    console.log('Verification code submitted:', this.codeFields.join(''));
    // TODO: Implement actual verification logic
    // This could include API calls, validation, etc.
  }

  /**
   * Handles the resend code action.
   * 
   * Currently logs the resend request to the console for debugging
   * purposes. In a real application, this method would typically
   * trigger a new verification code to be sent to the user.
   */
  onResendCode(): void {
    console.log('Resend code requested');
    // TODO: Implement actual resend logic
    // This could include API calls, etc.
  }
} 