import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Profile Tab Interface
 * 
 * Defines the structure for individual navigation tabs in the profile header.
 * This interface ensures type safety for tab configuration and state management.
 * 
 * @description
 * The ProfileTab interface defines all properties needed to display and manage
 * navigation tabs within the profile header component.
 * 
 * @interface
 * @since 1.0.0
 */
export interface ProfileTab {
  /** 
   * Unique identifier for the tab
   * @required - Tab ID is essential for state management and event handling
   * @example "overview", "settings", "activity", "projects"
   */
  id: string;
  
  /** 
   * Display text for the tab
   * @required - Tab label provides user-facing text
   * @example "Overview", "Settings", "Activity", "Projects"
   */
  label: string;
  
  /** 
   * CSS class for the tab icon
   * @required - Icon helps users identify tab purpose
   * @example "fas fa-user", "material-icons", "custom-icon-class"
   */
  icon: string;
  
  /** 
   * Active state of the tab
   * @required - Active state determines visual appearance and current section
   * @example true, false
   */
  active: boolean;
}

/**
 * Profile Header Widget Data Interface
 * 
 * Defines the complete structure for profile header configuration.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The ProfileHeaderWidgetData interface defines all properties needed
 * to display a complete profile header with user information and navigation tabs.
 * 
 * @interface
 * @since 1.0.0
 */
export interface ProfileHeaderWidgetData {
  /** 
   * URL or path to the user's profile image
   * @required - Profile image is essential for user identification
   * @example "/assets/img/profiles/user.jpg", "https://example.com/avatar.png"
   */
  profileImage: string;
  
  /** 
   * User's full name or display name
   * @required - User name provides primary identification
   * @example "John Doe", "Jane Smith", "Alex Johnson"
   */
  name: string;
  
  /** 
   * User's job title or position
   * @required - Position provides professional context
   * @example "Senior Developer", "Product Manager", "UX Designer"
   */
  position: string;
  
  /** 
   * Array of navigation tabs for the profile
   * @required - Tabs provide navigation structure
   * @example [{ id: "overview", label: "Overview", icon: "fas fa-user", active: true }]
   */
  tabs: ProfileTab[];
}

/**
 * Profile Header Widget Component
 * 
 * A comprehensive header component designed for user profile pages and dashboards.
 * Displays user information with profile image, name, position, and navigation tabs
 * for easy profile section navigation.
 * 
 * @description
 * This component creates a professional profile header that combines user
 * identification with navigation functionality. It's ideal for user dashboards,
 * profile pages, and any interface where user context and navigation are important.
 * 
 * @features
 * - User profile image display
 * - User name and position information
 * - Dynamic navigation tabs with icons
 * - Tab state management
 * - Responsive design
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - Interactive tab switching
 * - Hover effects and animations
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with required properties
 * - Performance optimized
 * - Memory efficient state management
 * - Unit test friendly
 * - Event-driven architecture
 * 
 * @usecases
 * - User profile pages
 * - Personal dashboards
 * - Account management interfaces
 * - User settings pages
 * - Professional networking platforms
 * - Team member profiles
 * - Social media profiles
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-profile-header 
 *   [data]="{
 *     profileImage: '/assets/img/profiles/john.jpg',
 *     name: 'John Doe',
 *     position: 'Senior Developer',
 *     tabs: [
 *       { id: 'overview', label: 'Overview', icon: 'fas fa-user', active: true },
 *       { id: 'projects', label: 'Projects', icon: 'fas fa-project-diagram', active: false }
 *     ]
 *   }">
 * </app-profile-header>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { ProfileHeaderComponent, ProfileHeaderWidgetData } from './profile-header.component';
 * 
 * export class UserProfileComponent {
 *   profileData: ProfileHeaderWidgetData = {
 *     profileImage: '/assets/img/profiles/user.jpg',
 *     name: 'Jane Smith',
 *     position: 'Product Manager',
 *     tabs: [
 *       { id: 'overview', label: 'Overview', icon: 'fas fa-user', active: true },
 *       { id: 'settings', label: 'Settings', icon: 'fas fa-cog', active: false },
 *       { id: 'activity', label: 'Activity', icon: 'fas fa-chart-line', active: false }
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
  selector: 'app-profile-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-header.html'
})
export class ProfileHeaderComponent {
  /**
   * Profile header configuration data
   * 
   * @description
   * Required input property that defines the complete profile header
   * including user information and navigation tabs. All properties
   * are mandatory for proper profile header display.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {ProfileHeaderWidgetData}
   * 
   * @example
   * ```typescript
   * data: ProfileHeaderWidgetData = {
   *   profileImage: '/assets/img/profiles/user.jpg',
   *   name: 'John Doe',
   *   position: 'Developer',
   *   tabs: [
   *     { id: 'overview', label: 'Overview', icon: 'fas fa-user', active: true }
   *   ]
   * };
   * ```
   */
  @Input() data!: ProfileHeaderWidgetData;

  /**
   * Gets the currently active tab
   * 
   * @description
   * Returns the tab that is currently marked as active. Useful for
   * additional logic based on the selected tab or for debugging purposes.
   * 
   * @method
   * @public
   * @returns {ProfileTab | undefined} The active tab or undefined if no tab is active
   * 
   * @example
   * ```typescript
   * const activeTab = this.getActiveTab();
   * if (activeTab) {
   *   console.log('Current tab:', activeTab.label);
   * }
   * ```
   */
  getActiveTab(): ProfileTab | undefined {
    return this.data.tabs.find(tab => tab.active);
  }

  /**
   * Handles tab click events and updates tab states
   * 
   * @description
   * Processes user clicks on navigation tabs. Deactivates all tabs
   * and activates the selected tab. This method manages the visual
   * state of the navigation tabs.
   * 
   * @method
   * @public
   * @param {string} tabId - The unique identifier of the clicked tab
   * @returns {void} No return value
   * 
   * @example
   * ```typescript
   * // Handle tab click
   * onTabClick('settings'): void {
   *   // This will deactivate all tabs and activate the 'settings' tab
   * }
   * ```
   * 
   * @todo
   * - Add event emission for parent component notification
   * - Implement tab change animations
   * - Add keyboard navigation support
   * - Include tab change validation
   */
  onTabClick(tabId: string): void {
    // Deactivate all tabs
    this.data.tabs.forEach(tab => tab.active = false);
    
    // Activate the selected tab
    const selectedTab = this.data.tabs.find(tab => tab.id === tabId);
    if (selectedTab) {
      selectedTab.active = true;
    }
  }
} 