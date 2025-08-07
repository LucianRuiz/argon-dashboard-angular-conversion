import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * MEETINGS WIDGET COMPONENT
 * ========================================
 *
 * A component for displaying meeting information with platform details and participants.
 *
 * FEATURES:
 * - Displays meeting information with platform details
 * - Shows meeting participants with avatars
 * - Platform-specific logos and branding
 * - Meeting ID and time information
 * - Responsive design with Tailwind CSS
 * - Optimized rendering with trackBy functions
 *
 * USAGE:
 * <app-meetings [data]="meetingsData"></app-meetings>
 *
 * REUSABILITY: High - Generic meeting display widget
 * COMPLEXITY: Low - Simple meeting information display
 */

/**
 * Interface representing a meeting with platform and participant information.
 *
 * @property {number} id - Unique meeting identifier
 * @property {string} platform - Meeting platform name (e.g., 'Zoom', 'Teams')
 * @property {string} platformLogo - Platform logo URL
 * @property {string} title - Meeting title
 * @property {string} time - Meeting time
 * @property {string} description - Meeting description
 * @property {string} meetingId - Meeting ID or link
 * @property {Array<{name: string, avatar: string}>} participants - Array of meeting participants
 *
 * @example
 * const meeting: Meeting = {
 *   id: 1,
 *   platform: 'Zoom',
 *   platformLogo: '/assets/img/zoom-logo.png',
 *   title: 'Team Standup',
 *   time: '9:00 AM',
 *   description: 'Daily team synchronization',
 *   meetingId: '123-456-789',
 *   participants: [
 *     { name: 'Alice', avatar: '/assets/img/alice.jpg' },
 *     { name: 'Bob', avatar: '/assets/img/bob.jpg' }
 *   ]
 * };
 */
export interface Meeting {
  id: number;
  platform: string;
  platformLogo: string;
  title: string;
  time: string;
  description: string;
  meetingId: string;
  participants: Array<{
    name: string;
    avatar: string;
  }>;
}

@Component({
  selector: 'app-meetings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meetings-widget.html'
})
export class MeetingsComponent {
  /**
   * Array of meetings to display.
   * @type {Meeting[]}
   * @required
   */
  @Input() data!: Meeting[];

  /**
   * TrackBy function for meetings to optimize ngFor rendering.
   * @param index - Array index
   * @param meeting - Meeting object
   * @returns {number} Meeting ID
   */
  trackByMeeting(index: number, meeting: Meeting): number {
    return meeting.id;
  }

  /**
   * TrackBy function for meeting participants to optimize ngFor rendering.
   * @param index - Array index
   * @param participant - Participant object
   * @returns {number} Index as unique identifier
   */
  trackByParticipant(index: number, participant: any): number {
    return index;
  }
} 