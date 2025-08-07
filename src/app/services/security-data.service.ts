import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from './sidebar-data.service';
import { NavbarData } from '../components/layout/navbar/navbar';
import { SecuritySettingsData, SecuritySetting } from '../components/sections/security-settings/security-settings';
import { TwoFactorAuthData } from '../components/forms/two-factor-auth/two-factor-auth';
import { ChangePasswordData } from '../components/forms/change-password/change-password';
import { PasswordRequirementsData, PasswordRequirement } from '../components/forms/password-requirements/password-requirements';
import { SecurityQuestionData, SecurityQuestionOption } from '../components/forms/security-question/security-question';
import { SettingsTabsData, SettingsTab } from '../components/forms/settings-tabs/settings-tabs';

/**
 * SecurityDataService
 * 
 * Provides mock data and configuration for the Security Settings page. This service
 * supplies comprehensive security-related data including settings, two-factor
 * authentication, password management, and security questions. The service is designed
 * for demo and UI prototyping purposes, simulating backend responses for security
 * functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the security page
 * - Navbar data with breadcrumbs and notifications
 * - Security settings with toggle configurations
 * - Two-factor authentication setup and status
 * - Password change functionality with requirements
 * - Security question configuration
 * - Settings tabs for navigation
 * 
 * @example
 * ```typescript
 * constructor(private securityDataService: SecurityDataService) {}
 * 
 * ngOnInit() {
 *   this.securityDataService.getSecuritySettingsData().subscribe(settings => {
 *     this.securitySettings = settings;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class SecurityDataService {
  constructor(
    private sidebarDataService: SidebarDataService
  ) {}

  /**
   * Retrieves sidebar configuration data for the security page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the security settings interface.
   * 
   * @returns Observable<any> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.securityDataService.getSidebarData().subscribe(sidebarData => {
   *   this.sidebarConfig = sidebarData;
   * });
   * ```
   */
  getSidebarData(): Observable<any> {
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
   * this.securityDataService.getNavbarData().subscribe(navbarData => {
   *   this.breadcrumb = navbarData.breadcrumbTitle;
   *   this.notifications = navbarData.notifications;
   * });
   * ```
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Security',
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
   * Retrieves security settings configuration with toggle states.
   * 
   * Returns security settings including:
   * - Email notifications for login events
   * - SMS confirmations for online payments
   * - Device access tracking and management
   * - Find My Device functionality
   * - Device lock with PIN/pattern/password
   * - App usage data permissions
   * 
   * @returns Observable<SecuritySettingsData> - Security settings configuration
   * 
   * @example
   * ```typescript
   * this.securityDataService.getSecuritySettingsData().subscribe(settingsData => {
   *   this.securitySettings = settingsData.settings;
   *   this.emailNotifications = settingsData.settings.find(s => s.title === 'Email Notifications');
   *   this.smsConfirmations = settingsData.settings.find(s => s.title === 'SMS Confirmations');
   * });
   * ```
   */
  getSecuritySettingsData(): Observable<SecuritySettingsData> {
    const settings: SecuritySetting[] = [
      {
        id: 1,
        title: 'Email Notifications',
        description: 'Notify me via email when logging in',
        enabled: true
      },
      {
        id: 2,
        title: 'SMS Confirmations',
        description: 'Send SMS confirmation for all online payments',
        enabled: false
      },
      {
        id: 3,
        title: 'Device Access',
        description: 'Check which devices accessed your account',
        enabled: true
      },
      {
        id: 4,
        title: 'Find My Device',
        description: 'Find My Device, make sure your device can be found if it gets lost',
        enabled: false
      },
      {
        id: 5,
        title: 'Device Lock',
        description: 'Lock your device with a PIN, pattern, or password',
        enabled: false
      },
      {
        id: 6,
        title: 'App Usage Data',
        description: 'Manage what apps have access to app-usage data on your device',
        enabled: true
      }
    ];

    return of({ settings });
  }

  /**
   * Retrieves two-factor authentication configuration and status.
   * 
   * Returns 2FA data including:
   * - Current enabled/disabled status
   * - Description of 2FA benefits
   * - Contact information for security questions
   * - Setup guidance for users
   * 
   * @returns Observable<TwoFactorAuthData> - Two-factor authentication configuration
   * 
   * @example
   * ```typescript
   * this.securityDataService.getTwoFactorAuthData().subscribe(twoFactorData => {
   *   this.is2FAEnabled = twoFactorData.enabled;
   *   this.twoFactorDescription = twoFactorData.description;
   *   this.contactTitle = twoFactorData.contactTitle;
   *   this.contactDescription = twoFactorData.contactDescription;
   * });
   * ```
   */
  getTwoFactorAuthData(): Observable<TwoFactorAuthData> {
    const data: TwoFactorAuthData = {
      enabled: false,
      description: 'Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.',
      contactTitle: 'Questions about security?',
      contactDescription: 'Have a question, concern, or comment about security? Please contact us.'
    };

    return of(data);
  }

  /**
   * Retrieves password change form configuration with labels and guidance.
   * 
   * Returns password change data including:
   * - Form title and subtitle
   * - Field labels for current, new, and confirm passwords
   * - Update button text
   * - Email verification guidance
   * 
   * @returns Observable<ChangePasswordData> - Password change form configuration
   * 
   * @example
   * ```typescript
   * this.securityDataService.getChangePasswordData().subscribe(passwordData => {
   *   this.formTitle = passwordData.title;
   *   this.formSubtitle = passwordData.subtitle;
   *   this.currentPasswordLabel = passwordData.currentPasswordLabel;
   *   this.newPasswordLabel = passwordData.newPasswordLabel;
   *   this.confirmPasswordLabel = passwordData.confirmPasswordLabel;
   *   this.updateButtonText = passwordData.buttonText;
   * });
   * ```
   */
  getChangePasswordData(): Observable<ChangePasswordData> {
    const data: ChangePasswordData = {
      title: 'Change password',
      subtitle: 'We will send you an email with the verification code.',
      currentPasswordLabel: 'Current password',
      newPasswordLabel: 'New password',
      confirmPasswordLabel: 'Confirm new password',
      buttonText: 'Update password'
    };

    return of(data);
  }

  /**
   * Retrieves password requirements configuration with validation rules.
   * 
   * Returns password requirements including:
   * - Title and subtitle for requirements section
   * - List of password validation rules
   * - Special character requirements
   * - Minimum length requirements
   * - Number requirements
   * - Change frequency recommendations
   * 
   * @returns Observable<PasswordRequirementsData> - Password requirements configuration
   * 
   * @example
   * ```typescript
   * this.securityDataService.getPasswordRequirementsData().subscribe(requirementsData => {
   *   this.requirementsTitle = requirementsData.title;
   *   this.requirementsSubtitle = requirementsData.subtitle;
   *   this.passwordRequirements = requirementsData.requirements;
   *   this.specialCharRequired = requirementsData.requirements.find(r => 
   *     r.text.includes('special characters')
   *   );
   * });
   * ```
   */
  getPasswordRequirementsData(): Observable<PasswordRequirementsData> {
    const requirements: PasswordRequirement[] = [
      {
        id: 1,
        text: 'One special characters'
      },
      {
        id: 2,
        text: 'Min 6 characters'
      },
      {
        id: 3,
        text: 'One number (2 are recommended)'
      },
      {
        id: 4,
        text: 'Change it often'
      }
    ];

    const data: PasswordRequirementsData = {
      title: 'Password requirements',
      subtitle: 'Please follow this guide for a strong password:',
      requirements
    };

    return of(data);
  }

  /**
   * Retrieves settings tabs configuration for navigation.
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
   * this.securityDataService.getSettingsTabsData().subscribe(tabsData => {
   *   this.settingsTabs = tabsData.tabs;
   *   this.activeTab = tabsData.tabs.find(tab => tab.isActive);
   *   this.messagesTab = tabsData.tabs.find(tab => tab.id === 'messages');
   * });
   * ```
   */
  getSettingsTabsData(): Observable<SettingsTabsData> {
    const tabs: SettingsTab[] = [
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
    ];

    return of({ tabs });
  }

  /**
   * Retrieves security question configuration with options.
   * 
   * Returns security question data including:
   * - Question and answer field labels
   * - Answer placeholder text
   * - Predefined question options
   * - Custom question option (disabled)
   * 
   * @returns Observable<SecurityQuestionData> - Security question configuration
   * 
   * @example
   * ```typescript
   * this.securityDataService.getSecurityQuestionData().subscribe(questionData => {
   *   this.questionLabel = questionData.questionLabel;
   *   this.answerLabel = questionData.answerLabel;
   *   this.answerPlaceholder = questionData.answerPlaceholder;
   *   this.questionOptions = questionData.options;
   *   this.customQuestionOption = questionData.options.find(opt => opt.disabled);
   * });
   * ```
   */
  getSecurityQuestionData(): Observable<SecurityQuestionData> {
    const options: SecurityQuestionOption[] = [
      {
        id: 1,
        value: 'Question 1',
        text: 'Question 1'
      },
      {
        id: 2,
        value: 'Question 2',
        text: 'Question 2'
      },
      {
        id: 3,
        value: 'Question 3',
        text: 'Question 3'
      },
      {
        id: 4,
        value: 'Your Question',
        text: 'Your Question',
        disabled: true
      }
    ];

    const data: SecurityQuestionData = {
      questionLabel: 'Security Question',
      answerLabel: 'Your Answer',
      answerPlaceholder: 'Enter your answer',
      options
    };

    return of(data);
  }
} 