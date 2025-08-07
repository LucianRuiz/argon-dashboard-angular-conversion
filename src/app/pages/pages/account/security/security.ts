import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { SidebarComponent, SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { NavbarComponent, NavbarData } from '../../../../components/layout/navbar/navbar';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';
import { SecuritySettingsComponent } from '../../../../components/sections/security-settings/security-settings';
import { TwoFactorAuthComponent } from '../../../../components/forms/two-factor-auth/two-factor-auth';
import { ChangePasswordComponent } from '../../../../components/forms/change-password/change-password';
import { PasswordRequirementsComponent } from '../../../../components/forms/password-requirements/password-requirements';
import { SecurityQuestionComponent } from '../../../../components/forms/security-question/security-question';
import { SettingsTabsComponent } from '../../../../components/forms/settings-tabs/settings-tabs';
import { SecurityDataService } from '../../../../services/security-data.service';
import { SecuritySettingsData } from '../../../../components/sections/security-settings/security-settings';
import { TwoFactorAuthData } from '../../../../components/forms/two-factor-auth/two-factor-auth';
import { ChangePasswordData } from '../../../../components/forms/change-password/change-password';
import { PasswordRequirementsData } from '../../../../components/forms/password-requirements/password-requirements';
import { SecurityQuestionData } from '../../../../components/forms/security-question/security-question';
import { SettingsTabsData } from '../../../../components/forms/settings-tabs/settings-tabs';

/**
 * Account Security Component
 * 
 * This component implements the account security management page for the application.
 * It provides a comprehensive interface for managing user security settings, including
 * password management, two-factor authentication, security questions, and security
 * preferences in a complete dashboard layout with specialized security widgets.
 * 
 * Features:
 * - Security settings widget for general security configurations
 * - Two-factor authentication setup and management
 * - Password change functionality with validation
 * - Password requirements display and guidance
 * - Security question configuration for account recovery
 * - Settings tabs for organized security options
 * - Sidebar navigation for easy access to other sections
 * - Navbar with search and filtering capabilities
 * - Footer with additional navigation options
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Perfect scrollbar for smooth navigation
 * - Security data management through dedicated service
 * - Real-time security status monitoring
 * 
 * The component serves as a comprehensive security management interface, providing
 * users with complete control over their account security settings, authentication
 * methods, password policies, and security preferences in an organized and
 * user-friendly layout focused on account protection.
 * 
 * @example
 * ```html
 * <app-account-security></app-account-security>
 * ```
 */
@Component({
  selector: 'app-account-security',
  standalone: true,
  imports: [
    CommonModule,
    PerfectScrollbarDirective,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    ArgonConfiguratorComponent,
    SecuritySettingsComponent,
    TwoFactorAuthComponent,
    ChangePasswordComponent,
    PasswordRequirementsComponent,
    SecurityQuestionComponent,
    SettingsTabsComponent
  ],
  templateUrl: './security.html'
})
export class AccountSecurityComponent {
  /** Observable for sidebar configuration data */
  public sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  public navbarData$: Observable<NavbarData>;
  
  /** Observable for security settings data */
  public securitySettingsData$: Observable<SecuritySettingsData>;
  
  /** Observable for two-factor authentication data */
  public twoFactorAuthData$: Observable<TwoFactorAuthData>;
  
  /** Observable for change password data */
  public changePasswordData$: Observable<ChangePasswordData>;
  
  /** Observable for password requirements data */
  public passwordRequirementsData$: Observable<PasswordRequirementsData>;
  
  /** Observable for security question data */
  public securityQuestionData$: Observable<SecurityQuestionData>;
  
  /** Observable for settings tabs data */
  public settingsTabsData$: Observable<SettingsTabsData>;
  
  /**
   * Creates an instance of AccountSecurityComponent.
   * 
   * Initializes the component by subscribing to data streams from SecurityDataService
   * for sidebar, navbar, and all security-related sections including security settings,
   * two-factor auth, password management, requirements, security questions, and tabs data.
   * 
   * @param securityDataService - Service for managing account security data and configurations
   */
  constructor(private securityDataService: SecurityDataService) {
    this.sidebarData$ = this.securityDataService.getSidebarData();
    this.navbarData$ = this.securityDataService.getNavbarData(); 
    this.securitySettingsData$ = this.securityDataService.getSecuritySettingsData();
    this.twoFactorAuthData$ = this.securityDataService.getTwoFactorAuthData();
    this.changePasswordData$ = this.securityDataService.getChangePasswordData();
    this.passwordRequirementsData$ = this.securityDataService.getPasswordRequirementsData();
    this.securityQuestionData$ = this.securityDataService.getSecurityQuestionData();
    this.settingsTabsData$ = this.securityDataService.getSettingsTabsData();
  }
} 
