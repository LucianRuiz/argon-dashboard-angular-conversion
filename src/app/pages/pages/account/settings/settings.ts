import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';
import { SidebarComponent, SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { NavbarComponent, NavbarData } from '../../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';

// Import settings widgets
import { ProfileSectionComponent, ProfileData } from '../../../../components/sections/profile-section/profile-section';
import { BasicInfoSectionComponent, BasicInfoData } from '../../../../components/forms/basic-info-section/basic-info-section';
import { PasswordSectionComponent, PasswordData } from '../../../../components/sections/password-section/password-section';
import { TwoFactorSectionComponent, TwoFactorData } from '../../../../components/sections/two-factor-section/two-factor-section';
import { AccountsSectionComponent, AccountsData } from '../../../../components/sections/accounts-section/accounts-section';
import { NotificationsSectionComponent, NotificationsData } from '../../../../components/sections/notifications-section/notifications-section';
import { SessionsSectionComponent, SessionsData } from '../../../../components/sections/sessions-section/sessions-section';
import { DeleteAccountSectionComponent, DeleteAccountData } from '../../../../components/sections/delete-account-section/delete-account-section';
import { SettingsNavigationComponent, SettingsNavigationData } from '../../../../components/forms/settings-navigation/settings-navigation';
import { SettingsTabsComponent, SettingsTabsData } from '../../../../components/forms/settings-tabs/settings-tabs';

// Import data service
import { SettingsDataService } from '../../../../services/settings-data.service';

/**
 * Account Settings Component
 * 
 * This component implements the comprehensive account settings page for the application.
 * It provides a complete interface for managing user account configurations, including
 * profile information, security settings, notification preferences, and account
 * management options in a tabbed layout with navigation and form sections.
 * 
 * Features:
 * - Profile section for avatar and personal information management
 * - Basic information section for contact and personal details
 * - Password section for password change and security
 * - Two-factor authentication section for enhanced security
 * - Connected accounts section for third-party integrations
 * - Notifications section for preference management
 * - Sessions section for active session management
 * - Delete account section for account termination
 * - Settings navigation with tab-based organization
 * - Settings tabs for categorized configuration options
 * - Sidebar navigation for easy access to other sections
 * - Navbar with search and filtering capabilities
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Perfect scrollbar for smooth navigation
 * 
 * The component serves as a comprehensive account management interface, providing
 * users with complete control over their account settings, security preferences,
 * notification configurations, and account lifecycle management in an organized
 * and user-friendly tabbed layout.
 * 
 * @example
 * ```html
 * <app-account-settings></app-account-settings>
 * ```
 */
@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    PerfectScrollbarDirective,
    ArgonConfiguratorComponent,
    ProfileSectionComponent,
    BasicInfoSectionComponent,
    PasswordSectionComponent,
    TwoFactorSectionComponent,
    AccountsSectionComponent,
    NotificationsSectionComponent,
    SessionsSectionComponent,
    DeleteAccountSectionComponent,
    SettingsNavigationComponent,
    SettingsTabsComponent
  ],
  templateUrl: './settings.html'
})
export class AccountSettingsComponent {
  /** Observable for sidebar configuration data */
  public sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  public navbarData$: Observable<NavbarData>;
  
  /** Observable for profile section data */
  public profileData$: Observable<ProfileData>;
  
  /** Observable for basic information section data */
  public basicInfoData$: Observable<BasicInfoData>;
  
  /** Observable for password section data */
  public passwordData$: Observable<PasswordData>;
  
  /** Observable for two-factor authentication section data */
  public twoFactorData$: Observable<TwoFactorData>;
  
  /** Observable for connected accounts section data */
  public accountsData$: Observable<AccountsData>;
  
  /** Observable for notifications section data */
  public notificationsData$: Observable<NotificationsData>;
  
  /** Observable for sessions section data */
  public sessionsData$: Observable<SessionsData>;
  
  /** Observable for delete account section data */
  public deleteAccountData$: Observable<DeleteAccountData>;
  
  /** Observable for settings navigation data */
  public settingsNavigationData$: Observable<SettingsNavigationData>;
  
  /** Observable for settings tabs data */
  public settingsTabsData$: Observable<SettingsTabsData>;

  /**
   * Creates an instance of AccountSettingsComponent.
   * 
   * Initializes the component by subscribing to data streams from SettingsDataService
   * for sidebar, navbar, and all settings sections including profile, basic info,
   * password, two-factor auth, accounts, notifications, sessions, delete account,
   * navigation, and tabs data.
   * 
   * @param settingsDataService - Service for managing account settings data and configurations
   */
  constructor(private settingsDataService: SettingsDataService) {
    this.sidebarData$ = this.settingsDataService.getSidebarData();
    this.navbarData$ = this.settingsDataService.getNavbarData();
    this.profileData$ = this.settingsDataService.getProfileData();
    this.basicInfoData$ = this.settingsDataService.getBasicInfoData();
    this.passwordData$ = this.settingsDataService.getPasswordData();
    this.twoFactorData$ = this.settingsDataService.getTwoFactorData();
    this.accountsData$ = this.settingsDataService.getAccountsData();
    this.notificationsData$ = this.settingsDataService.getNotificationsData();
    this.sessionsData$ = this.settingsDataService.getSessionsData();
    this.deleteAccountData$ = this.settingsDataService.getDeleteAccountData();
    this.settingsNavigationData$ = this.settingsDataService.getSettingsNavigationData();
    this.settingsTabsData$ = this.settingsDataService.getSettingsTabsData();
  }
} 
