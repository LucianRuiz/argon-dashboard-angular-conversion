import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';

// Importar interfaces desde los componentes
import { ProfileData } from '../components/sections/profile-section/profile-section';
import { BasicInfoData } from '../components/forms/basic-info-section/basic-info-section';
import { PasswordData } from '../components/sections/password-section/password-section';
import { TwoFactorData} from '../components/sections/two-factor-section/two-factor-section';
import { AccountsData} from '../components/sections/accounts-section/accounts-section';
import { NotificationsData } from '../components/sections/notifications-section/notifications-section';
import { SessionsData } from '../components/sections/sessions-section/sessions-section';
import { DeleteAccountData } from '../components/sections/delete-account-section/delete-account-section';
  import { SettingsNavigationData } from '../components/forms/settings-navigation/settings-navigation';
import { SettingsTabsData, SettingsTab } from '../components/forms/settings-tabs/settings-tabs';

/**
 * SettingsDataService
 * 
 * Provides mock data and configuration for the User Settings page. This service
 * supplies comprehensive user settings data including profile information, basic
 * info, password management, two-factor authentication, account integrations,
 * notifications, sessions, and account deletion. The service is designed for demo
 * and UI prototyping purposes, simulating backend responses for user settings
 * functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the settings page
 * - Navbar data with breadcrumbs and notifications
 * - Profile section with user information
 * - Basic info form with personal details
 * - Password change functionality with requirements
 * - Two-factor authentication setup and methods
 * - Account integrations (Slack, Spotify, etc.)
 * - Notification preferences and settings
 * - Active sessions management
 * - Account deletion functionality
 * - Settings navigation and tabs
 * 
 * @example
 * ```typescript
 * constructor(private settingsDataService: SettingsDataService) {}
 * 
 * ngOnInit() {
 *   this.settingsDataService.getProfileData().subscribe(profile => {
 *     this.userProfile = profile;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class SettingsDataService {

  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar configuration data for the settings page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the settings interface.
   * 
   * @returns Observable<SidebarData> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.settingsDataService.getSidebarData().subscribe(sidebarData => {
   *   this.sidebarConfig = sidebarData;
   * });
   * ```
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves navbar configuration data with breadcrumbs and notifications.
   * 
   * Returns navbar data including:
   * - Breadcrumb navigation with icon, title, and section
   * - Search functionality configuration
   * - User authentication elements (Sign In, config, bell)
   * - Sample notification list with avatars, titles, and timestamps
   * 
   * @returns Observable<NavbarData> - Navbar configuration with notifications
   * 
   * @example
   * ```typescript
   * this.settingsDataService.getNavbarData().subscribe(navbarData => {
   *   this.breadcrumb = navbarData.breadcrumbTitle;
   *   this.notifications = navbarData.notifications;
   * });
   * ```
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Settings',
      breadcrumbSection: 'Users',
      searchPlaceholder: 'Type here...',
      signInText: 'Sign In',
      signInIcon: 'fa fa-user',
      configIcon: 'fa fa-cog',
      bellIcon: 'fa fa-bell',
      notifications: [
        { 
          avatarUrl: './assets/img/team-2.jpg', 
          title: '<span class="font-semibold">New message</span> from Laur',
          description: '',
          time: '13 minutes ago' 
        },
        { 
          avatarUrl: './assets/img/small-logos/logo-spotify.svg', 
          title: '<span class="font-semibold">New album</span> by Travis Scott',
          description: '',
          time: '1 day' 
        },
        {
          title: 'Payment successfully completed',
          description: '',
          time: '2 days'
        }
      ]
    });
  }

  /**
   * Retrieves user profile data with basic information.
   * 
   * Returns profile data including:
   * - User name and position
   * - Profile avatar image
   * - Profile visibility setting
   * 
   * @returns Observable<ProfileData> - User profile configuration
   * 
   * @example
   * ```typescript
   * this.settingsDataService.getProfileData().subscribe(profile => {
   *   this.userName = profile.name;
   *   this.userPosition = profile.position;
   *   this.userAvatar = profile.avatar;
   *   this.isProfileVisible = profile.isVisible;
   * });
   * ```
   */
  getProfileData(): Observable<ProfileData> {
    return of({
      name: 'Mark Johnson',
      position: 'CEO / Co-Founder',
      avatar: 'assets/img/team-3.jpg',
      isVisible: true
    });
  }

  /**
   * Retrieves basic information form data with personal details.
   * 
   * Returns basic info data including:
   * - Personal information (name, gender, birth date)
   * - Contact information (email, phone, location)
   * - Language preferences and skills
   * - Form options for gender and language selection
   * 
   * @returns Observable<BasicInfoData> - Basic information form configuration
   * 
   * @example
   * ```typescript
   * this.settingsDataService.getBasicInfoData().subscribe(basicInfo => {
   *   this.personalInfo = basicInfo.personalInfo;
   *   this.genderOptions = basicInfo.genderOptions;
   *   this.languageOptions = basicInfo.languageOptions;
   *   this.userFirstName = basicInfo.personalInfo.firstName;
   *   this.userEmail = basicInfo.personalInfo.email;
   * });
   * ```
   */
  getBasicInfoData(): Observable<BasicInfoData> {
    return of({
      title: 'Basic Info',
      personalInfo: {
        firstName: 'Alec',
        lastName: 'Thompson',
        gender: 'Male',
        birthDate: {
          month: 'January',
          day: '15',
          year: '1990'
        },
        email: 'example@email.com',
        confirmEmail: 'example@email.com',
        location: 'Sydney, A',
        phone: '+40 735 631 620',
        language: 'English',
        skills: 'vuejs, angular, react'
      },
      genderOptions: ['Male', 'Female'],
      languageOptions: ['English', 'French', 'Spanish']
    });
  }

  /**
   * Retrieves password change form configuration with requirements.
   * 
   * Returns password data including:
   * - Form title and field labels
   * - Password requirements list
   * - Placeholder text for password fields
   * - Update button text
   * 
   * @returns Observable<PasswordData> - Password change form configuration
   * 
   * @example
   * ```typescript
   * this.settingsDataService.getPasswordData().subscribe(passwordData => {
   *   this.formTitle = passwordData.title;
   *   this.passwordRequirements = passwordData.requirements;
   *   this.currentPasswordPlaceholder = passwordData.currentPasswordPlaceholder;
   *   this.newPasswordPlaceholder = passwordData.newPasswordPlaceholder;
   *   this.confirmPasswordPlaceholder = passwordData.confirmPasswordPlaceholder;
   *   this.updateButtonText = passwordData.updateButtonText;
   * });
   * ```
   */
  getPasswordData(): Observable<PasswordData> {
    return of({
      title: 'Change Password',
      requirements: [
        'One special characters',
        'Min 6 characters',
        'One number (2 are recommended)',
        'Change it often'
      ],
      currentPasswordPlaceholder: 'Current password',
      newPasswordPlaceholder: 'New password',
      confirmPasswordPlaceholder: 'Confirm password',
      updateButtonText: 'Update password'
    });
  }

  /**
   * Retrieves two-factor authentication configuration with methods.
   * 
   * Returns 2FA data including:
   * - Current enabled/disabled status
   * - Available authentication methods
   * - Method status and configuration state
   * - Setup and edit button text
   * 
   * @returns Observable<TwoFactorData> - Two-factor authentication configuration
   * 
   * @example
   * ```typescript
   * this.settingsDataService.getTwoFactorData().subscribe(twoFactorData => {
   *   this.is2FAEnabled = twoFactorData.isEnabled;
   *   this.authMethods = twoFactorData.methods;
   *   this.securityKeys = twoFactorData.methods.find(m => m.name === 'Security keys');
   *   this.smsNumber = twoFactorData.methods.find(m => m.name === 'SMS number');
   *   this.authenticatorApp = twoFactorData.methods.find(m => m.name === 'Authenticator app');
   * });
   * ```
   */
  getTwoFactorData(): Observable<TwoFactorData> {
    return of({
      title: 'Two-factor authentication',
      isEnabled: true,
      methods: [
        {
          name: 'Security keys',
          status: 'No Security Keys',
          buttonText: 'Add',
          isConfigured: false
        },
        {
          name: 'SMS number',
          status: '+4012374423',
          buttonText: 'Edit',
          isConfigured: true
        },
        {
          name: 'Authenticator app',
          status: 'Not Configured',
          buttonText: 'Set up',
          isConfigured: false
        }
      ]
    });
  }

  /**
   * Retrieves account integrations configuration with third-party services.
   * 
   * Returns accounts data including:
   * - Integration list with service names and descriptions
   * - Service logos and status indicators
   * - Enabled/disabled states
   * - Configuration information for expanded integrations
   * 
   * @returns Observable<AccountsData> - Account integrations configuration
   * 
   * @example
   * ```typescript
   * this.settingsDataService.getAccountsData().subscribe(accountsData => {
   *   this.integrations = accountsData.integrations;
   *   this.enabledIntegrations = accountsData.integrations.filter(i => i.isEnabled);
   *   this.slackIntegration = accountsData.integrations.find(i => i.name === 'Slack');
   *   this.spotifyIntegration = accountsData.integrations.find(i => i.name === 'Spotify');
   * });
   * ```
   */
  getAccountsData(): Observable<AccountsData> {
    return of({
      title: 'Accounts',
      description: 'Here you can setup and manage your integration settings.',
      integrations: [
        {
          name: 'Slack',
          description: 'Communication',
          logo: 'assets/img/small-logos/logo-slack.svg',
          status: 'Enabled',
          isEnabled: true,
          showExpanded: true,
          configInfo: {
            verificationCode: '1172913',
            connectedAccount: 'hello@creative-tim.com'
          }
        },
        {
          name: 'Spotify',
          description: 'Music',
          logo: 'assets/img/small-logos/logo-spotify.svg',
          status: 'Enabled',
          isEnabled: true
        },
        {
          name: 'Atlassian',
          description: 'Payment vendor',
          logo: 'assets/img/small-logos/logo-atlassian.svg',
          status: 'Enabled',
          isEnabled: true
        },
        {
          name: 'Asana',
          description: 'Organize your team',
          logo: 'assets/img/small-logos/logo-asana.svg',
          status: 'Disabled',
          isEnabled: false
        }
      ]
    });
  }

  /**
   * Retrieves notification preferences configuration with activity settings.
   * 
   * Returns notifications data including:
   * - Notification settings for different activities
   * - Email, push, and SMS notification preferences
   * - Activity descriptions and context
   * - User guidance for notification management
   * 
   * @returns Observable<NotificationsData> - Notification preferences configuration
   * 
   * @example
   * ```typescript
   * this.settingsDataService.getNotificationsData().subscribe(notificationsData => {
   *   this.notificationSettings = notificationsData.settings;
   *   this.mentionsSettings = notificationsData.settings.find(s => s.activity === 'Mentions');
   *   this.commentsSettings = notificationsData.settings.find(s => s.activity === 'Comments');
   *   this.followsSettings = notificationsData.settings.find(s => s.activity === 'Follows');
   *   this.loginSettings = notificationsData.settings.find(s => s.activity === 'Log in from a new device');
   * });
   * ```
   */
  getNotificationsData(): Observable<NotificationsData> {
    return of({
      title: 'Notifications',
      description: 'Choose how you receive notifications. These notification settings apply to the things you\'re watching.',
      settings: [
        {
          activity: 'Mentions',
          description: 'Notify when another user mentions you in a comment',
          emailEnabled: true,
          pushEnabled: false,
          smsEnabled: false
        },
        {
          activity: 'Comments',
          description: 'Notify when another user comments your item.',
          emailEnabled: true,
          pushEnabled: true,
          smsEnabled: false
        },
        {
          activity: 'Follows',
          description: 'Notify when another user follows you.',
          emailEnabled: false,
          pushEnabled: true,
          smsEnabled: false
        },
        {
          activity: 'Log in from a new device',
          description: '',
          emailEnabled: true,
          pushEnabled: true,
          smsEnabled: true
        }
      ]
    });
  }

  /**
   * Retrieves active sessions configuration with device information.
   * 
   * Returns sessions data including:
   * - List of devices with active sessions
   * - Device information and location
   * - Current session identification
   * - Session management capabilities
   * 
   * @returns Observable<SessionsData> - Active sessions configuration
   * 
   * @example
   * ```typescript
   * this.settingsDataService.getSessionsData().subscribe(sessionsData => {
   *   this.activeSessions = sessionsData.sessions;
   *   this.currentSession = sessionsData.sessions.find(s => s.isCurrentSession);
   *   this.otherSessions = sessionsData.sessions.filter(s => !s.isCurrentSession);
   *   this.sessionCount = sessionsData.sessions.length;
   * });
   * ```
   */
  getSessionsData(): Observable<SessionsData> {
    return of({
      title: 'Sessions',
      description: 'This is a list of devices that have logged into your account. Remove those that you do not recognize.',
      sessions: [
        {
          icon: 'fas fa-desktop',
          deviceInfo: 'Bucharest 68.133.163.201',
          additionalInfo: 'Your current session',
          status: 'Active',
          region: 'EU',
          isCurrentSession: true
        },
        {
          icon: 'fas fa-desktop',
          deviceInfo: 'Chrome on macOS',
          region: 'US'
        },
        {
          icon: 'fas fa-mobile',
          deviceInfo: 'Safari on iPhone',
          region: 'US'
        }
      ]
    });
  }

  /**
   * Retrieves account deletion configuration with warning information.
   * 
   * Returns delete account data including:
   * - Warning title and description
   * - Confirmation text requirement
   * - Deactivate and delete button options
   * - Irreversible action warnings
   * 
   * @returns Observable<DeleteAccountData> - Account deletion configuration
   * 
   * @example
   * ```typescript
   * this.settingsDataService.getDeleteAccountData().subscribe(deleteData => {
   *   this.warningTitle = deleteData.title;
   *   this.warningDescription = deleteData.description;
   *   this.confirmationText = deleteData.confirmationText;
   *   this.deactivateButtonText = deleteData.deactivateButtonText;
   *   this.deleteButtonText = deleteData.deleteButtonText;
   * });
   * ```
   */
  getDeleteAccountData(): Observable<DeleteAccountData> {
    return of({
      title: 'Delete Account',
      description: 'Once you delete your account, there is no going back. Please be certain.',
      confirmationText: 'I want to delete my account.',
      deactivateButtonText: 'Deactivate',
      deleteButtonText: 'Delete account'
    });
  }

  /**
   * Retrieves settings navigation configuration with menu items.
   * 
   * Returns navigation data including:
   * - Menu items with icons and text
   * - Active state management
   * - Navigation IDs for routing
   * - Profile section as default active
   * 
   * @returns Observable<SettingsNavigationData> - Settings navigation configuration
   * 
   * @example
   * ```typescript
   * this.settingsDataService.getSettingsNavigationData().subscribe(navData => {
   *   this.navigationItems = navData.items;
   *   this.activeItem = navData.items.find(item => item.isActive);
   *   this.profileItem = navData.items.find(item => item.id === 'profile');
   *   this.passwordItem = navData.items.find(item => item.id === 'password');
   * });
   * ```
   */
  getSettingsNavigationData(): Observable<SettingsNavigationData> {
    return of({
      items: [
        {
          id: 'profile',
          icon: 'ni ni-spaceship',
          text: 'Profile',
          isActive: true
        },
        {
          id: 'basic-info',
          icon: 'ni ni-books',
          text: 'Basic Info'
        },
        {
          id: 'password',
          icon: 'ni ni-atom',
          text: 'Change Password'
        },
        {
          id: '2FA',
          icon: 'ni ni-ui-04',
          text: '2FA'
        },
        {
          id: 'accounts',
          icon: 'ni ni-badge',
          text: 'Accounts'
        },
        {
          id: 'notifications',
          icon: 'ni ni-bell-55',
          text: 'Notifications'
        },
        {
          id: 'sessions',
          icon: 'ni ni-watch-time',
          text: 'Sessions'
        },
        {
          id: 'delete',
          icon: 'ni ni-settings-gear-65',
          text: 'Delete Account'
        }
      ]
    });
  }

  /**
   * Retrieves settings tabs configuration for secondary navigation.
   * 
   * Returns tabs data including:
   * - Messages tab (active by default)
   * - Social tab
   * - Notifications tab
   * - Backup tab
   * - Tab IDs and active states
   * 
   * @returns Observable<SettingsTabsData> - Settings tabs configuration
   * 
   * @example
   * ```typescript
   * this.settingsDataService.getSettingsTabsData().subscribe(tabsData => {
   *   this.settingsTabs = tabsData.tabs;
   *   this.activeTab = tabsData.tabs.find(tab => tab.isActive);
   *   this.messagesTab = tabsData.tabs.find(tab => tab.id === 'messages');
   *   this.socialTab = tabsData.tabs.find(tab => tab.id === 'social');
   * });
   * ```
   */
  getSettingsTabsData(): Observable<SettingsTabsData> {
    return of({
      tabs: [
        {
          id: 'messages',
          text: 'Messages',
          isActive: true
        },
        {
          id: 'social',
          text: 'Social',
          isActive: false
        },
        {
          id: 'notifications',
          text: 'Notifications',
          isActive: false
        },
        {
          id: 'backup',
          text: 'Backup',
          isActive: false
        }
      ]
    });
  }
} 