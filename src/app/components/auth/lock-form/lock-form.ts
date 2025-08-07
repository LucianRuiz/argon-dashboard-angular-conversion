import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for lock form fields.
 * 
 * Defines the configuration for individual form input fields
 * including label, placeholder text, and input type.
 */
export interface LockFormField {
  /** Label text displayed above the form field */
  label: string;
  /** Placeholder text shown inside the input field when empty */
  placeholder: string;
  /** HTML input type (password, text, etc.) */
  type: string;
}

/**
 * Data structure for lock form button.
 * 
 * Defines the configuration for the primary action button
 * in the lock form, typically used for unlocking the account.
 */
export interface LockFormButton {
  /** Text to display on the button */
  text: string;
}

/**
 * Data structure for user information.
 * 
 * Defines the user details displayed on the lock screen
 * including name, avatar, and description.
 */
export interface LockFormUser {
  /** User's display name */
  name: string;
  /** URL for the user's avatar/profile image */
  avatarUrl: string;
  /** Description text providing context or instructions */
  description: string;
}

/**
 * Complete data structure for the lock form component.
 * 
 * Contains all configuration data needed to render the lock
 * form including user information, form fields, and buttons.
 */
export interface LockFormData {
  /** User information to display on the lock screen */
  user: LockFormUser;
  /** Password field configuration for authentication */
  password: LockFormField;
  /** Primary unlock button configuration */
  unlockButton: LockFormButton;
}

/**
 * Lock Form Component
 * 
 * This component implements a comprehensive lock screen form
 * for the application. It provides a user-friendly interface
 * for users to unlock their accounts with password authentication
 * and user identification display.
 * 
 * Features:
 * - Clean and intuitive lock screen interface
 * - User information display with avatar and name
 * - Password input field with validation
 * - Primary unlock button for form submission
 * - Fully configurable through data input properties
 * - Form validation and error handling
 * - Responsive design for various screen sizes
 * - Accessibility features for inclusive user experience
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - User-friendly design with clear instructions
 * - Professional styling and layout
 * 
 * The component serves as a reusable lock screen form that can be
 * easily integrated into authentication flows, providing users with
 * a secure and accessible way to unlock their accounts with clear
 * user identification and professional presentation.
 * 
 * @example
 * ```html
 * <app-lock-form [data]="lockFormData"></app-lock-form>
 * ```
 */
@Component({
  selector: 'app-lock-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lock-form.html'
})
export class LockFormComponent {
  /**
   * Data for the lock form component.
   * 
   * Provides all the content and configuration for the form including
   * user information, field configuration, and button text. This input
   * property allows complete customization of the form appearance
   * and behavior.
   * 
   * @type {LockFormData} - Complete form configuration
   */
  @Input() data: LockFormData = {
    user: {
      name: 'Mike Priesler',
      avatarUrl: 'https://demos.creative-tim.com/argon-dashboard-pro/assets/img/team-2.jpg',
      description: 'Enter password to unlock your account.'
    },
    password: {
      label: 'Password',
      placeholder: 'Password',
      type: 'password'
    },
    unlockButton: {
      text: 'Unlock'
    }
  };
} 