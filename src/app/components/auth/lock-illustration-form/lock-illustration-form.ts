import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Lock Illustration Form Data Interface
 * 
 * Defines the structure for lock form data in illustration pages.
 * This form is designed for unlocking a locked account with username
 * and password, optimized for illustration-based layouts.
 */
export interface LockIllustrationFormData {
  /** Username to display on the lock screen */
  username: string;
  /** Description text providing context or instructions */
  description: string;
  /** Password field configuration with placeholder */
  passwordField: {
    /** Placeholder text shown inside the password field when empty */
    placeholder: string;
  };
  /** Primary unlock button configuration */
  unlockButton: {
    /** Text to display on the unlock button */
    text: string;
  };
}

/**
 * Lock Illustration Form Component
 * 
 * This component implements a simplified lock screen form
 * specifically designed for illustration pages. It provides a clean,
 * transparent interface for users to unlock their accounts with
 * password authentication.
 * 
 * Features:
 * - Simplified lock screen interface for illustration pages
 * - Username display for user identification
 * - Password input field for authentication
 * - Primary unlock button for form submission
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
 * The component serves as a specialized lock screen form for
 * illustration pages, providing users with a clean and accessible
 * way to unlock their accounts while maintaining the visual appeal
 * of illustration-based layouts.
 * 
 * @example
 * ```html
 * <app-lock-illustration-form [data]="lockData"></app-lock-illustration-form>
 * ```
 */
@Component({
  selector: 'app-lock-illustration-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lock-illustration-form.html'
})
export class LockIllustrationFormComponent {
  /**
   * Data for the lock form component.
   * 
   * Provides all the content and configuration for the form including
   * username, description, field placeholder, and button text. This
   * input property allows complete customization of the form appearance
   * and behavior for illustration pages.
   * 
   * @type {LockIllustrationFormData} - Complete form configuration
   */
  @Input() data: LockIllustrationFormData = {
    username: "Mike Priesler",
    description: "Enter password to unlock your account.",
    passwordField: {
      placeholder: "Password"
    },
    unlockButton: {
      text: "Unlock"
    }
  };

  /** Password field value bound to the password input */
  password: string = '';

  /**
   * Handles the form submission for unlocking the account.
   * 
   * Currently logs the unlock request to the console for debugging
   * purposes. In a real application, this method would typically
   * validate the password and authenticate the user to unlock
   * their account.
   */
  onUnlock(): void {
    console.log('Unlock requested for user:', this.data.username);
    console.log('Password entered:', this.password);
    // TODO: Implement actual unlock logic
    // This could include API calls, validation, etc.
  }
} 