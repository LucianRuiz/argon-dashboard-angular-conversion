import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing a team member
 * Defines the structure for team member information with status indicators
 */
export interface TeamMember {
  /** Unique identifier for the team member */
  id: number;
  /** Full name of the team member */
  name: string;
  /** URL to the member's avatar/profile image */
  avatar: string;
  /** Status text (e.g., 'Online', 'Offline', 'Away') */
  status: string;
  /** Tailwind CSS color class for the status badge */
  statusColor: string;
}

/**
 * Team Members Component
 * 
 * A component that displays a list of team members with their avatars, names,
 * status indicators, and action buttons. Designed for team management and
 * collaboration dashboards.
 * 
 * Features:
 * - List of team members with profile images
 * - Status indicators with color-coded badges
 * - Action buttons for each member
 * - Responsive design with proper spacing
 * - Dark mode support throughout
 * - Optimized rendering with trackBy function
 * - Event emission for member actions
 * 
 * Visual Elements:
 * - Circular avatar images for each member
 * - Member names as clickable links
 * - Status badges with customizable colors
 * - Action buttons with hover effects
 * - Clean list layout with proper borders
 * - Shadow effects and rounded corners
 * 
 * Status Badges:
 * - Supports any Tailwind CSS color classes
 * - Common examples: bg-green-500, bg-red-500, bg-yellow-500
 * - Small, rounded badges with uppercase text
 * - Color-coded for quick status recognition
 * 
 * Action Buttons:
 * - Customizable button text via input
 * - Hover effects with opacity and translation
 * - Active states for better user feedback
 * - Event emission for parent component handling
 * 
 * List Layout:
 * - Proper borders between list items
 * - Rounded corners for first and last items
 * - Responsive grid layout for different screen sizes
 * - Consistent spacing and typography
 * 
 * Usage:
 * ```html
 * <app-team-members 
 *   [title]="'Development Team'"
 *   [members]="teamMembers"
 *   [actionButtonText]="'Invite'"
 *   (memberAction)="onMemberAction($event)">
 * </app-team-members>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const teamMembers: TeamMember[] = [
 *   {
 *     id: 1,
 *     name: 'John Michael',
 *     avatar: '/assets/img/team-1.jpg',
 *     status: 'Online',
 *     statusColor: 'bg-green-500'
 *   },
 *   {
 *     id: 2,
 *     name: 'Alex Smith',
 *     avatar: '/assets/img/team-2.jpg',
 *     status: 'Away',
 *     statusColor: 'bg-yellow-500'
 *   }
 * ];
 * ```
 * 
 * Event Handling:
 * - Emits member action events with action type and member data
 * - Supports custom action handling in parent components
 * - Event structure: { action: string, member: TeamMember }
 * 
 * Styling Features:
 * - Shadow effects for depth
 * - Rounded corners for modern look
 * - Dark mode compatibility
 * - Responsive breakpoints
 * - Consistent typography and spacing
 * - Hover and active states for interactions
 * 
 * Dependencies:
 * - Tailwind CSS for styling
 * - Angular Common for structural directives
 * - Event handling for user interactions
 * - Avatar images for team members
 */
@Component({
  selector: 'app-team-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-members.html'
})
export class TeamMembersComponent {
  /** Title displayed at the top of the team members list */
  @Input() title: string = 'Team members';
  
  /** Array of team members to display */
  @Input() members: TeamMember[] = [];
  
  /** Text displayed on the action button for each member */
  @Input() actionButtonText: string = 'Add';
  
  /** Event emitted when a member action button is clicked */
  @Output() memberAction = new EventEmitter<{action: string, member: TeamMember}>();

  /**
   * TrackBy function for optimizing ngFor rendering
   * Uses member ID for efficient DOM updates
   * @param index - Current index in the array
   * @param member - Current team member
   * @returns Unique identifier for the member
   */
  trackByMember(index: number, member: TeamMember): number {
    return member.id;
  }

  /**
   * Handles member action button clicks
   * Emits the action and member data to parent components
   * @param member - The team member associated with the action
   * @param action - The action type (e.g., 'add', 'invite', 'remove')
   */
  onMemberAction(member: TeamMember, action: string): void {
    this.memberAction.emit({ action, member });
  }
} 
