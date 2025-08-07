import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Lock Card Data Interface
 * 
 * Defines the structure for lock card configuration data.
 * All text content, styling, and behavior can be customized through
 * this interface for the lock card component.
 */
export interface LockCardData {
  /** User information to display on the lock screen */
  user: {
    /** User's display name */
    name: string;
    /** Description text providing context or instructions */
    description: string;
  };
  /** Password field configuration with placeholder and type */
  password: {
    /** Placeholder text shown inside the password field when empty */
    placeholder: string;
    /** HTML input type for the password field */
    type: string;
  };
  /** Primary unlock button configuration */
  unlockButton: {
    /** Text to display on the unlock button */
    text: string;
  };
}

/**
 * Lock Card Component
 * 
 * This component implements a comprehensive lock screen card
 * for the application. It provides a clean, card-based interface
 * for users to unlock their accounts with password authentication
 * and user identification display.
 * 
 * Features:
 * - Professional card-based lock screen interface
 * - User information display with name and description
 * - Password input field with validation
 * - Primary unlock button for form submission
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
 * The component serves as a reusable lock screen card that can be
 * easily integrated into authentication flows, providing users with
 * a secure and accessible way to unlock their accounts with clear
 * user identification and professional card-based presentation.
 * 
 * @example
 * ```html
 * <app-lock-card [data]="lockCardData"></app-lock-card>
 * ```
 */
@Component({
  selector: 'app-lock-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lock-card.html'
})
export class LockCardComponent {
  /**
   * Data for the lock card component.
   * 
   * Provides all the content and configuration for the card including
   * user information, field configuration, and button text. This input
   * property allows complete customization of the card appearance
   * and behavior.
   * 
   * @type {LockCardData} - Complete form configuration
   */
  @Input() data: LockCardData = {
    user: {
      name: "Mike Priesler",
      description: "Enter password to unlock your account."
    },
    password: {
      placeholder: "Password",
      type: "password"
    },
    unlockButton: {
      text: "Unlock"
    }
  };

  /** Password input value bound to the password field */
  password: string = '';

  /**
   * Handles the form submission for unlocking the account.
   * 
   * Currently logs the unlock attempt to the console for debugging
   * purposes. In a real application, this method would typically
   * validate the password and authenticate the user to unlock
   * their account.
   */
  onUnlock(): void {
    console.log('Unlock attempt for user:', this.data.user.name);
    // TODO: Implement actual unlock logic
    // This could include API calls, validation, etc.
  }
} 