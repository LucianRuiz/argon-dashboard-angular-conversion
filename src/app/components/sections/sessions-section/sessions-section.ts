import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Session Interface
 *
 * Defines the structure for individual user session items.
 * This interface ensures type safety for session display and management.
 *
 * @description
 * The Session interface defines all properties needed to display
 * and manage individual user sessions, including device and region info.
 *
 * @interface
 * @since 1.0.0
 */
export interface Session {
  /**
   * Device icon for the session
   * @required - Icon provides visual identification
   * @example "laptop", "mobile", "tablet"
   */
  icon: string;
  /**
   * Device information string
   * @required - Device info provides context
   * @example "Chrome on Windows", "Safari on iPhone"
   */
  deviceInfo: string;
  /**
   * Additional information about the session
   * @optional - Provides extra context
   * @example "Last active 2 hours ago"
   */
  additionalInfo?: string;
  /**
   * Status of the session
   * @optional - Indicates session state
   * @example "Active", "Expired", "Pending"
   */
  status?: string;
  /**
   * Region or location of the session
   * @required - Region provides geographic context
   * @example "New York, USA", "London, UK"
   */
  region: string;
  /**
   * Whether this is the current session
   * @optional - Indicates if this is the user's current session
   * @example true, false
   */
  isCurrentSession?: boolean;
}

/**
 * Sessions Section Data Interface
 *
 * Defines the complete structure for sessions section configuration.
 * This interface ensures type safety and provides clear contract for component inputs.
 *
 * @description
 * The SessionsData interface defines all properties needed to display
 * a complete sessions section with active user sessions.
 *
 * @interface
 * @since 1.0.0
 */
export interface SessionsData {
  /**
   * Title for the sessions section
   * @required - Section title provides context
   * @example "Active Sessions", "Device Sessions"
   */
  title: string;
  /**
   * Description of the sessions section
   * @required - Description provides user guidance
   * @example "Manage your active sessions across devices."
   */
  description: string;
  /**
   * Array of active user sessions
   * @required - Sessions array provides session management
   * @example Array of Session objects
   */
  sessions: Session[];
}

/**
 * Sessions Section Component
 *
 * A component designed to display and manage active user sessions
 * across devices. Provides session information and management options.
 *
 * @description
 * This component creates a professional sessions section that allows
 * users to view and manage their active sessions. It's ideal for
 * security settings pages, account management, and any application
 * that requires session tracking.
 *
 * @features
 * - Active session display
 * - Device and region information
 * - Session status indicators
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
 * - Session management pages
 * - Device tracking interfaces
 * - Security education pages
 *
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-sessions-section 
 *   [data]="sessionsSectionData">
 * </app-sessions-section>
 * ```
 *
 * @example
 * ```typescript
 * // In parent component
 * import { SessionsSectionComponent, SessionsData } from './sessions-section.component';
 *
 * export class SecuritySettingsComponent {
 *   sessionsSectionData: SessionsData = {
 *     title: 'Active Sessions',
 *     description: 'Manage your active sessions across devices.',
 *     sessions: [
 *       { icon: 'laptop', deviceInfo: 'Chrome on Windows', region: 'New York, USA', isCurrentSession: true },
 *       { icon: 'mobile', deviceInfo: 'Safari on iPhone', region: 'London, UK' }
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
  selector: 'app-sessions-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sessions-section.html'
})
export class SessionsSectionComponent {
  /**
   * Sessions section configuration data
   *
   * @description
   * Required input property that defines the sessions section configuration
   * including title, description, and active sessions.
   *
   * @input
   * @required - Component cannot function without this data
   * @type {SessionsData}
   *
   * @example
   * ```typescript
   * data: SessionsData = {
   *   title: 'Device Sessions',
   *   description: 'View and manage your sessions.',
   *   sessions: [
   *     { icon: 'tablet', deviceInfo: 'Edge on Surface', region: 'Berlin, Germany' }
   *   ]
   * };
   * ```
   */
  @Input() data!: SessionsData;

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
   * // <div *ngFor="let session of data.sessions; trackBy: trackByIndex">
   *
   * const itemIndex = this.trackByIndex(0);
   * console.log('Item index:', itemIndex);
   * ```
   */
  trackByIndex(index: number): number {
    return index;
  }
} 