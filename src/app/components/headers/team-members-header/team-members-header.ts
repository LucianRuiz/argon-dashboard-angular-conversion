import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Team Member Header Interface
 * 
 * Defines the structure for individual team member data in the header.
 * This interface ensures type safety for member information display.
 * 
 * @description
 * The TeamMemberHeader interface defines the essential properties
 * needed to display a team member's avatar in the header.
 * 
 * @interface
 * @since 1.0.0
 */
export interface TeamMemberHeader {
  /** 
   * URL or path to the team member's avatar image
   * @required - Avatar image is essential for member identification
   * @example "/assets/img/team/john.jpg", "https://example.com/avatar.png"
   */
  image: string;
}

/**
 * Team Members Header Data Interface
 * 
 * Defines the complete structure for team members header configuration.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The TeamMembersHeaderData interface defines all properties needed
 * to display a header with title and team member avatars.
 * 
 * @interface
 * @since 1.0.0
 */
export interface TeamMembersHeaderData {
  /** 
   * Title text for the team members header
   * @required - Header title provides context for the team section
   * @example "Our Team", "Project Members", "Development Team"
   */
  title: string;
  
  /** 
   * Array of team member data for avatar display
   * @required - Team members array provides the visual representation
   * @example [{ image: "/assets/img/team/john.jpg" }, { image: "/assets/img/team/jane.jpg" }]
   */
  members: TeamMemberHeader[];
}

/**
 * Team Members Header Component
 * 
 * A header component designed to display team information with member avatars.
 * Shows a title alongside visual representations of team members for quick
 * identification and team overview.
 * 
 * @description
 * This component creates a header that combines contextual information
 * with visual team member representation. It's ideal for project pages,
 * team dashboards, and collaborative workspaces where team visibility
 * is important.
 * 
 * @features
 * - Team member avatar display
 * - Configurable header title
 * - Responsive avatar layout
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - Hover effects on avatars
 * - Flexible member count support
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with required properties
 * - Performance optimized
 * - Memory efficient avatar handling
 * - Unit test friendly
 * 
 * @usecases
 * - Project team pages
 * - Team management dashboards
 * - Collaborative workspaces
 * - Department overview pages
 * - Team collaboration tools
 * - Project management interfaces
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-team-members-header 
 *   [data]="{ 
 *     title: 'Development Team', 
 *     members: [
 *       { image: '/assets/img/team/john.jpg' },
 *       { image: '/assets/img/team/jane.jpg' }
 *     ] 
 *   }">
 * </app-team-members-header>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { TeamMembersHeaderComponent, TeamMembersHeaderData } from './team-members-header.component';
 * 
 * export class ProjectComponent {
 *   teamHeaderData: TeamMembersHeaderData = {
 *     title: 'Project Team',
 *     members: [
 *       { image: '/assets/img/team/developer1.jpg' },
 *       { image: '/assets/img/team/developer2.jpg' },
 *       { image: '/assets/img/team/designer.jpg' }
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
  selector: 'app-team-members-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-members-header.html'
})
export class TeamMembersHeaderComponent {
  /**
   * Team members header configuration data
   * 
   * @description
   * Required input property that defines the header's title and team members.
   * Both properties are mandatory for proper team header display.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {TeamMembersHeaderData}
   * 
   * @example
   * ```typescript
   * data: TeamMembersHeaderData = {
   *   title: 'Our Team',
   *   members: [
   *     { image: '/assets/img/team/member1.jpg' },
   *     { image: '/assets/img/team/member2.jpg' }
   *   ]
   * };
   * ```
   */
  @Input() data!: TeamMembersHeaderData;
} 