import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Security Setting Interface
 * 
 * Defines the structure for individual security setting items.
 * This interface ensures type safety for security setting display.
 * 
 * @description
 * The SecuritySetting interface defines the essential properties
 * needed to display and manage individual security settings with
 * unique identification and toggle functionality.
 * 
 * @interface
 * @since 1.0.0
 */
export interface SecuritySetting {
  /** 
   * Unique identifier for the security setting
   * @required - Setting ID is essential for identification and tracking
   * @example 1, 2, 3, 4
   */
  id: number;
  
  /** 
   * Title of the security setting
   * @required - Setting title provides primary identification
   * @example "Two-Factor Authentication", "Login Notifications", "Session Timeout"
   */
  title: string;
  
  /** 
   * Description of the security setting
   * @required - Setting description provides user guidance
   * @example "Add an extra layer of security to your account"
   */
  description: string;
  
  /** 
   * Whether the security setting is enabled
   * @required - Enabled state determines current security status
   * @example true, false
   */
  enabled: boolean;
}

/**
 * Security Settings Data Interface
 * 
 * Defines the complete structure for security settings configuration.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The SecuritySettingsData interface defines all properties needed
 * to display a complete security settings section with multiple
 * security options.
 * 
 * @interface
 * @since 1.0.0
 */
export interface SecuritySettingsData {
  /** 
   * Array of security settings to display
   * @required - Settings array provides security options
   * @example Array of SecuritySetting objects
   */
  settings: SecuritySetting[];
}

/**
 * Security Settings Component
 * 
 * A component designed to display and manage security settings
 * in a clean, organized format. Shows various security options
 * with toggle functionality for user account protection.
 * 
 * @description
 * This component creates a professional security settings interface
 * that allows users to view and manage their account security
 * preferences. It's ideal for account settings pages, security
 * configuration interfaces, and any application that requires
 * security management functionality.
 * 
 * @features
 * - Security setting display
 * - Toggle functionality for settings
 * - Organized list format
 * - Clear setting descriptions
 * - Responsive design
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - Visual setting indicators
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
 * - Privacy settings interfaces
 * - Authentication management
 * - Security education pages
 * - Account protection interfaces
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-security-settings 
 *   [data]="securityData">
 * </app-security-settings>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { SecuritySettingsComponent, SecuritySettingsData } from './security-settings.component';
 * 
 * export class AccountSettingsComponent {
 *   securityData: SecuritySettingsData = {
 *     settings: [
 *       {
 *         id: 1,
 *         title: 'Two-Factor Authentication',
 *         description: 'Add an extra layer of security',
 *         enabled: true
 *       },
 *       {
 *         id: 2,
 *         title: 'Login Notifications',
 *         description: 'Get notified of new logins',
 *         enabled: false
 *       }
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
  selector: 'app-security-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './security-settings.html'
})
export class SecuritySettingsComponent {
  /**
   * Security settings configuration data
   * 
   * @description
   * Required input property that defines the security settings
   * to be displayed. Contains array of security options with
   * their current states.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {SecuritySettingsData}
   * 
   * @example
   * ```typescript
   * data: SecuritySettingsData = {
   *   settings: [
   *     {
   *       id: 1,
   *       title: 'Two-Factor Authentication',
   *       description: 'Add extra security',
   *       enabled: true
   *     }
   *   ]
   * };
   * ```
   */
  @Input() data!: SecuritySettingsData;

  /**
   * TrackBy function for optimizing list rendering
   * 
   * @description
   * Returns the unique identifier for each security setting item.
   * This function optimizes Angular's change detection by providing
   * a stable reference for list items.
   * 
   * @method
   * @public
   * @param {number} index - The index of the item in the array
   * @param {SecuritySetting} setting - The security setting item
   * @returns {number} The unique ID of the setting
   * 
   * @example
   * ```typescript
   * // Used in template with *ngFor
   * // <div *ngFor="let setting of data.settings; trackBy: trackBySetting">
   * 
   * const settingId = this.trackBySetting(0, setting);
   * console.log('Setting ID:', settingId);
   * ```
   */
  trackBySetting(index: number, setting: SecuritySetting): number {
    return setting.id;
  }
} 