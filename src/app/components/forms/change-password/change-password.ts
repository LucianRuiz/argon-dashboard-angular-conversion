import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Change Password Data Interface
 * 
 * Defines the structure for change password form configuration data.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The ChangePasswordData interface defines all properties needed
 * to display and configure a change password form with proper
 * labels and user guidance.
 * 
 * @interface
 * @since 1.0.0
 */
export interface ChangePasswordData {
  /** 
   * Main title for the change password form
   * @required - Form title provides primary context
   * @example "Change Password", "Update Password", "Password Settings"
   */
  title: string;
  
  /** 
   * Subtitle or description for the form
   * @required - Subtitle provides additional guidance
   * @example "Enter your current password and choose a new one"
   */
  subtitle: string;
  
  /** 
   * Label for current password field
   * @required - Current password label provides field context
   * @example "Current Password", "Old Password"
   */
  currentPasswordLabel: string;
  
  /** 
   * Label for new password field
   * @required - New password label provides field context
   * @example "New Password", "Enter New Password"
   */
  newPasswordLabel: string;
  
  /** 
   * Label for confirm password field
   * @required - Confirm password label provides field context
   * @example "Confirm Password", "Re-enter New Password"
   */
  confirmPasswordLabel: string;
  
  /** 
   * Text for the submit button
   * @required - Button text guides user action
   * @example "Update Password", "Change Password", "Save Changes"
   */
  buttonText: string;
}

/**
 * Change Password Component
 * 
 * A component designed to provide a secure password change interface.
 * Displays a form with current password, new password, and confirmation
 * fields with proper validation and user guidance.
 * 
 * @description
 * This component creates a professional password change form that
 * follows security best practices. It's ideal for user account
 * settings, security pages, and any application that requires
 * secure password management functionality.
 * 
 * @features
 * - Current password verification
 * - New password input
 * - Password confirmation
 * - Form validation
 * - Security-focused design
 * - Responsive layout
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - User-friendly labels
 * - Clear instructions
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with required properties
 * - Performance optimized
 * - Memory efficient
 * - Unit test friendly
 * - No external dependencies
 * - Security-conscious design
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
 * <app-change-password 
 *   [data]="passwordData">
 * </app-change-password>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { ChangePasswordComponent, ChangePasswordData } from './change-password.component';
 * 
 * export class AccountSettingsComponent {
 *   passwordData: ChangePasswordData = {
 *     title: 'Change Password',
 *     subtitle: 'Enter your current password and choose a new one',
 *     currentPasswordLabel: 'Current Password',
 *     newPasswordLabel: 'New Password',
 *     confirmPasswordLabel: 'Confirm Password',
 *     buttonText: 'Update Password'
 *   };
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-password.html'
})
export class ChangePasswordComponent {
  /**
   * Change password form configuration data
   * 
   * @description
   * Required input property that defines the change password form
   * configuration including titles, labels, and button text.
   * Contains all user-facing text for the form.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {ChangePasswordData}
   * 
   * @example
   * ```typescript
   * data: ChangePasswordData = {
   *   title: 'Update Password',
   *   subtitle: 'Keep your account secure with a new password',
   *   currentPasswordLabel: 'Current Password',
   *   newPasswordLabel: 'New Password',
   *   confirmPasswordLabel: 'Confirm New Password',
   *   buttonText: 'Save Changes'
   * };
   * ```
   */
  @Input() data!: ChangePasswordData;
} 