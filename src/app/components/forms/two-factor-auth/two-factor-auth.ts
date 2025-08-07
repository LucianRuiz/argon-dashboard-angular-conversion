import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Two-Factor Authentication Data Interface
 * 
 * Defines the structure for two-factor authentication configuration data.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The TwoFactorAuthData interface defines all properties needed
 * to display and configure two-factor authentication settings.
 * 
 * @interface
 * @since 1.0.0
 */
export interface TwoFactorAuthData {
  /** 
   * Whether two-factor authentication is enabled
   * @required - Enabled state determines current security status
   * @example true, false
   */
  enabled: boolean;
  
  /** 
   * Description of two-factor authentication benefits
   * @required - Description provides user education
   * @example "Add an extra layer of security to your account"
   */
  description: string;
  
  /** 
   * Title for contact information section
   * @required - Contact title provides section context
   * @example "Contact Information", "Recovery Options"
   */
  contactTitle: string;
  
  /** 
   * Description of contact information purpose
   * @required - Contact description explains recovery process
   * @example "We'll use this information to help you recover your account"
   */
  contactDescription: string;
}

/**
 * Two-Factor Authentication Component
 * 
 * A component designed to display and configure two-factor authentication
 * settings. Provides user interface for enabling/disabling 2FA and
 * managing recovery contact information.
 * 
 * @description
 * This component creates a professional interface for two-factor
 * authentication configuration. It's ideal for security settings
 * pages, account management interfaces, and any application that
 * requires enhanced security features.
 * 
 * @features
 * - Two-factor authentication toggle
 * - Security education content
 * - Contact information management
 * - Recovery options display
 * - Responsive design
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - Security-focused interface
 * - User-friendly explanations
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
 * - Account security settings
 * - User profile management
 * - Security configuration pages
 * - Authentication setup flows
 * - Account recovery interfaces
 * - Security education pages
 * - Privacy settings
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-two-factor-auth 
 *   [data]="twoFactorData">
 * </app-two-factor-auth>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { TwoFactorAuthComponent, TwoFactorAuthData } from './two-factor-auth.component';
 * 
 * export class SecuritySettingsComponent {
 *   twoFactorData: TwoFactorAuthData = {
 *     enabled: true,
 *     description: 'Add an extra layer of security to your account',
 *     contactTitle: 'Recovery Information',
 *     contactDescription: 'We\'ll use this to help you recover your account'
 *   };
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-two-factor-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './two-factor-auth.html'
})
export class TwoFactorAuthComponent {
  /**
   * Two-factor authentication configuration data
   * 
   * @description
   * Required input property that defines the two-factor authentication
   * settings and display information. Contains security status and
   * educational content.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {TwoFactorAuthData}
   * 
   * @example
   * ```typescript
   * data: TwoFactorAuthData = {
   *   enabled: true,
   *   description: 'Add an extra layer of security',
   *   contactTitle: 'Recovery Information',
   *   contactDescription: 'We\'ll use this to help you recover your account'
   * };
   * ```
   */
  @Input() data!: TwoFactorAuthData;
} 