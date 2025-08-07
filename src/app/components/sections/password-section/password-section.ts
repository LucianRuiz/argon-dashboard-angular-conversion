import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Password Section Data Interface
 *
 * Defines the structure for password section configuration data.
 * This interface ensures type safety for password change forms and display.
 *
 * @description
 * The PasswordData interface defines all properties needed to display
 * and manage a password change section, including requirements and placeholders.
 *
 * @interface
 * @since 1.0.0
 */
export interface PasswordData {
  /**
   * Title for the password section
   * @required - Section title provides context
   * @example "Change Password", "Password Settings"
   */
  title: string;
  /**
   * Array of password requirements
   * @required - Requirements array provides validation criteria
   * @example ["At least 8 characters", "Include a number"]
   */
  requirements: string[];
  /**
   * Placeholder for current password input
   * @required - Guides user input
   * @example "Current Password"
   */
  currentPasswordPlaceholder: string;
  /**
   * Placeholder for new password input
   * @required - Guides user input
   * @example "New Password"
   */
  newPasswordPlaceholder: string;
  /**
   * Placeholder for confirm password input
   * @required - Guides user input
   * @example "Confirm New Password"
   */
  confirmPasswordPlaceholder: string;
  /**
   * Text for the update button
   * @required - Button text guides user action
   * @example "Update Password", "Change Password"
   */
  updateButtonText: string;
}

/**
 * Password Section Component
 *
 * A component designed to display a password change form with requirements
 * and user guidance. Provides input fields and validation criteria for secure
 * password updates.
 *
 * @description
 * This component creates a professional password section for user account
 * settings, security pages, and any interface that requires password management.
 *
 * @features
 * - Password change form
 * - Password requirements display
 * - Input placeholders for guidance
 * - Responsive design
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - User-friendly layout
 * - Secure password management
 *
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with required properties
 * - Performance optimized
 * - Memory efficient
 * - Unit test friendly
 * - No external dependencies
 *
 * @usecases
 * - User account settings
 * - Security configuration pages
 * - Password management interfaces
 * - Account recovery flows
 * - Security settings
 * - User profile management
 * - Authentication interfaces
 *
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-password-section 
 *   [data]="passwordSectionData">
 * </app-password-section>
 * ```
 *
 * @example
 * ```typescript
 * // In parent component
 * import { PasswordSectionComponent, PasswordData } from './password-section.component';
 *
 * export class AccountSettingsComponent {
 *   passwordSectionData: PasswordData = {
 *     title: 'Change Password',
 *     requirements: ['At least 8 characters', 'Include a number'],
 *     currentPasswordPlaceholder: 'Current Password',
 *     newPasswordPlaceholder: 'New Password',
 *     confirmPasswordPlaceholder: 'Confirm New Password',
 *     updateButtonText: 'Update Password'
 *   };
 * }
 * ```
 *
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-password-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-section.html'
})
export class PasswordSectionComponent {
  /**
   * Password section configuration data
   *
   * @description
   * Required input property that defines the password section configuration
   * including title, requirements, placeholders, and button text.
   *
   * @input
   * @required - Component cannot function without this data
   * @type {PasswordData}
   *
   * @example
   * ```typescript
   * data: PasswordData = {
   *   title: 'Password Settings',
   *   requirements: ['At least 8 characters'],
   *   currentPasswordPlaceholder: 'Current Password',
   *   newPasswordPlaceholder: 'New Password',
   *   confirmPasswordPlaceholder: 'Confirm Password',
   *   updateButtonText: 'Change Password'
   * };
   * ```
   */
  @Input() data!: PasswordData;

  /**
   * TrackBy function for optimizing list rendering
   *
   * @description
   * Returns the index as the unique identifier for list items.
   * This function optimizes Angular's change detection by providing
   * a stable reference for list items when no unique ID is available.
   *
   * @method
   * @public
   * @param {number} index - The index of the item in the array
   * @returns {number} The index as the unique identifier
   *
   * @example
   * ```typescript
   * // Used in template with *ngFor
   * // <div *ngFor="let req of data.requirements; trackBy: trackByIndex">
   *
   * const itemIndex = this.trackByIndex(0);
   * console.log('Item index:', itemIndex);
   * ```
   */
  trackByIndex(index: number): number {
    return index;
  }
} 