import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Delete Account Data Interface
 * 
 * Defines the structure for delete account section configuration data.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The DeleteAccountData interface defines all properties needed
 * to display and configure a delete account section with proper
 * warnings and confirmation elements.
 * 
 * @interface
 * @since 1.0.0
 */
export interface DeleteAccountData {
  /** 
   * Title for the delete account section
   * @required - Section title provides primary context
   * @example "Delete Account", "Account Deletion", "Remove Account"
   */
  title: string;
  
  /** 
   * Description of the deletion process and consequences
   * @required - Description provides user education about risks
   * @example "This action cannot be undone. All your data will be permanently deleted."
   */
  description: string;
  
  /** 
   * Text for confirmation input field
   * @required - Confirmation text provides verification mechanism
   * @example "DELETE", "I understand", "Permanently delete"
   */
  confirmationText: string;
  
  /** 
   * Text for the deactivate account button
   * @required - Deactivate button text guides user action
   * @example "Deactivate Account", "Temporarily Disable", "Suspend Account"
   */
  deactivateButtonText: string;
  
  /** 
   * Text for the delete account button
   * @required - Delete button text guides user action
   * @example "Delete Account", "Permanently Delete", "Remove Account"
   */
  deleteButtonText: string;
}

/**
 * Delete Account Section Component
 * 
 * A component designed to provide a secure account deletion interface
 * with proper warnings and confirmation mechanisms. Displays deletion
 * options with clear consequences and safety measures.
 * 
 * @description
 * This component creates a professional account deletion interface
 * that follows security best practices. It's ideal for account
 * settings pages, user profile management, and any application
 * that requires secure account termination functionality.
 * 
 * @features
 * - Account deletion interface
 * - Deactivation option
 * - Confirmation mechanisms
 * - Clear warning messages
 * - Security-focused design
 * - Responsive layout
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - User-friendly warnings
 * - Safety confirmation
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
 * - Account settings pages
 * - User profile management
 * - Account termination flows
 * - Security settings interfaces
 * - User account management
 * - Privacy settings
 * - Account cleanup processes
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-delete-account-section 
 *   [data]="deleteAccountData">
 * </app-delete-account-section>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { DeleteAccountSectionComponent, DeleteAccountData } from './delete-account-section.component';
 * 
 * export class AccountSettingsComponent {
 *   deleteAccountData: DeleteAccountData = {
 *     title: 'Delete Account',
 *     description: 'This action cannot be undone. All your data will be permanently deleted.',
 *     confirmationText: 'DELETE',
 *     deactivateButtonText: 'Deactivate Account',
 *     deleteButtonText: 'Permanently Delete'
 *   };
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-delete-account-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-account-section.html'
})
export class DeleteAccountSectionComponent {
  /**
   * Delete account section configuration data
   * 
   * @description
   * Required input property that defines the delete account section
   * configuration including titles, descriptions, and button text.
   * Contains all user-facing text for the deletion interface.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {DeleteAccountData}
   * 
   * @example
   * ```typescript
   * data: DeleteAccountData = {
   *   title: 'Remove Account',
   *   description: 'This action is irreversible and will delete all your data.',
   *   confirmationText: 'I understand',
   *   deactivateButtonText: 'Temporarily Disable',
   *   deleteButtonText: 'Permanently Delete'
   * };
   * ```
   */
  @Input() data!: DeleteAccountData;

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
   * // <div *ngFor="let item of items; trackBy: trackByIndex">
   * 
   * const itemIndex = this.trackByIndex(0);
   * console.log('Item index:', itemIndex);
   * ```
   */
  trackByIndex(index: number): number {
    return index;
  }
} 