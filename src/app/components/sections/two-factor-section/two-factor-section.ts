import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Two-Factor Authentication Method Interface
 *
 * Defines the structure for individual two-factor authentication methods.
 * This interface ensures type safety for method display and configuration.
 *
 * @description
 * The TwoFactorMethod interface defines all properties needed to display
 * and manage individual 2FA methods, including their configuration state.
 *
 * @interface
 * @since 1.0.0
 */
export interface TwoFactorMethod {
  /**
   * Name of the two-factor authentication method
   * @required - Method name provides identification
   * @example "Authenticator App", "SMS", "Email"
   */
  name: string;
  /**
   * Current status of the method
   * @required - Status provides user feedback
   * @example "Enabled", "Disabled", "Pending"
   */
  status: string;
  /**
   * Action button text for the method
   * @required - Button text guides user action
   * @example "Enable", "Disable", "Configure"
   */
  buttonText: string;
  /**
   * Whether the method is configured
   * @required - Configuration state determines available actions
   * @example true, false
   */
  isConfigured: boolean;
}

/**
 * Two-Factor Section Data Interface
 *
 * Defines the complete structure for two-factor authentication section configuration.
 * This interface ensures type safety and provides clear contract for component inputs.
 *
 * @description
 * The TwoFactorData interface defines all properties needed to display
 * a complete two-factor authentication section with available methods.
 *
 * @interface
 * @since 1.0.0
 */
export interface TwoFactorData {
  /**
   * Title for the two-factor authentication section
   * @required - Section title provides context
   * @example "Two-Factor Authentication", "2FA Settings"
   */
  title: string;
  /**
   * General enabled state for 2FA
   * @required - Indicates if 2FA is enabled for the account
   * @example true, false
   */
  isEnabled: boolean;
  /**
   * Array of available authentication methods
   * @required - Methods array provides configuration options
   * @example Array of TwoFactorMethod objects
   */
  methods: TwoFactorMethod[];
}

/**
 * Two-Factor Section Component
 *
 * A component designed to display and manage two-factor authentication
 * settings and available methods. Provides configuration options and
 * status feedback for each method.
 *
 * @description
 * This component creates a professional two-factor authentication section
 * that allows users to view and configure available 2FA methods. It's ideal
 * for security settings pages, account management, and any application that
 * requires enhanced authentication.
 *
 * @features
 * - Two-factor authentication method display
 * - Configuration and status feedback
 * - Action buttons for each method
 * - Responsive design
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - User-friendly explanations
 * - Track-by optimization
 *
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with required properties
 * - Performance optimized with trackBy
 * - Memory efficient
 * - Unit test friendly
 * - No external dependencies
 * - Security-focused content
 *
 * @usecases
 * - Account security settings
 * - User profile management
 * - Security configuration pages
 * - Authentication setup flows
 * - Account recovery interfaces
 * - Security education pages
 *
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-two-factor-section 
 *   [data]="twoFactorSectionData">
 * </app-two-factor-section>
 * ```
 *
 * @example
 * ```typescript
 * // In parent component
 * import { TwoFactorSectionComponent, TwoFactorData } from './two-factor-section.component';
 *
 * export class SecuritySettingsComponent {
 *   twoFactorSectionData: TwoFactorData = {
 *     title: 'Two-Factor Authentication',
 *     isEnabled: true,
 *     methods: [
 *       { name: 'Authenticator App', status: 'Enabled', buttonText: 'Disable', isConfigured: true },
 *       { name: 'SMS', status: 'Disabled', buttonText: 'Enable', isConfigured: false }
 *     ]
 *   };
 * }
 * ```
 *
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-two-factor-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './two-factor-section.html'
})
export class TwoFactorSectionComponent {
  /**
   * Two-factor authentication section configuration data
   *
   * @description
   * Required input property that defines the 2FA section configuration
   * including title, enabled state, and available methods.
   *
   * @input
   * @required - Component cannot function without this data
   * @type {TwoFactorData}
   *
   * @example
   * ```typescript
   * data: TwoFactorData = {
   *   title: '2FA Settings',
   *   isEnabled: false,
   *   methods: [
   *     { name: 'Email', status: 'Disabled', buttonText: 'Enable', isConfigured: false }
   *   ]
   * };
   * ```
   */
  @Input() data!: TwoFactorData;

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
   * // <div *ngFor="let method of data.methods; trackBy: trackByIndex">
   *
   * const itemIndex = this.trackByIndex(0);
   * console.log('Item index:', itemIndex);
   * ```
   */
  trackByIndex(index: number): number {
    return index;
  }
} 