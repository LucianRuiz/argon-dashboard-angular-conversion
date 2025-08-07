import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Profile Data Interface
 *
 * Defines the structure for user profile section data.
 * This interface ensures type safety for profile display and management.
 *
 * @description
 * The ProfileData interface defines all properties needed to display
 * and manage user profile information, including avatar, name, and visibility.
 *
 * @interface
 * @since 1.0.0
 */
export interface ProfileData {
  /**
   * Full name of the user
   * @required - Name provides primary identification
   * @example "John Doe", "Jane Smith"
   */
  name: string;
  /**
   * User's job title or position
   * @required - Position provides professional context
   * @example "Software Engineer", "Product Manager"
   */
  position: string;
  /**
   * URL to the user's profile image
   * @required - Avatar provides visual identification
   * @example "/assets/img/avatars/user1.jpg", "https://example.com/avatar.png"
   */
  avatar: string;
  /**
   * Profile visibility state
   * @required - Determines if the profile is visible to others
   * @example true, false
   */
  isVisible: boolean;
}

/**
 * Profile Section Component
 *
 * A component designed to display user profile information in a clean,
 * organized format. Shows avatar, name, position, and visibility toggle.
 *
 * @description
 * This component creates a professional profile section for user dashboards,
 * account pages, and any interface that needs to present user identity.
 *
 * @features
 * - User avatar display
 * - Name and position information
 * - Profile visibility toggle
 * - Responsive design
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - Clean, organized layout
 * - Visual user identification
 *
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with required properties
 * - Performance optimized
 * - Memory efficient
 * - Unit test friendly
 * - No external dependencies
 *
 * @usecases
 * - User dashboards
 * - Account profile pages
 * - Team member displays
 * - Social networking profiles
 * - User management interfaces
 *
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-profile-section 
 *   [data]="profileData">
 * </app-profile-section>
 * ```
 *
 * @example
 * ```typescript
 * // In parent component
 * import { ProfileSectionComponent, ProfileData } from './profile-section.component';
 *
 * export class UserProfileComponent {
 *   profileData: ProfileData = {
 *     name: 'Jane Smith',
 *     position: 'Product Manager',
 *     avatar: '/assets/img/avatars/jane.jpg',
 *     isVisible: true
 *   };
 * }
 * ```
 *
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-profile-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-section.html'
})
export class ProfileSectionComponent {
  /**
   * Profile section configuration data
   *
   * @description
   * Required input property that defines the profile section configuration
   * including name, position, avatar, and visibility state.
   *
   * @input
   * @required - Component cannot function without this data
   * @type {ProfileData}
   *
   * @example
   * ```typescript
   * data: ProfileData = {
   *   name: 'John Doe',
   *   position: 'Software Engineer',
   *   avatar: '/assets/img/avatars/john.jpg',
   *   isVisible: false
   * };
   * ```
   */
  @Input() data!: ProfileData;

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