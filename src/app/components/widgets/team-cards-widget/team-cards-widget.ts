import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * TEAM CARDS COMPONENT
 * ========================================
 *
 * A component for displaying a list of team cards with member avatars, ratings, and descriptions.
 *
 * FEATURES:
 * - Displays team name, description, industry, rating, and member avatars
 * - Star rating system (supports half stars)
 * - Responsive design with Tailwind CSS
 * - Optimized rendering with trackBy functions
 *
 * USAGE:
 * <app-team-cards [data]="teams"></app-team-cards>
 *
 * REUSABILITY: High - Generic team display for dashboards and social apps
 * COMPLEXITY: Low - Simple card and avatar rendering
 */

/**
 * Interface representing a team card structure.
 *
 * @property {number} id - Unique team identifier
 * @property {string} name - Team name
 * @property {string} description - Team description
 * @property {string} industry - Industry or sector
 * @property {number} rating - Team rating (0-5, supports half stars)
 * @property {Array<{name: string, avatar: string}>} members - Array of team members with avatars
 *
 * @example
 * const team: TeamCard = {
 *   id: 1,
 *   name: 'Frontend Team',
 *   description: 'UI/UX specialists',
 *   industry: 'Software',
 *   rating: 4.5,
 *   members: [
 *     { name: 'Alice', avatar: '/assets/img/alice.jpg' },
 *     { name: 'Bob', avatar: '/assets/img/bob.jpg' }
 *   ]
 * };
 */
export interface TeamCard {
  id: number;
  name: string;
  description: string;
  industry: string;
  rating: number;
  members: Array<{
    name: string;
    avatar: string;
  }>;
}

@Component({
  selector: 'app-team-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-cards-widget.html'
})
export class TeamCardsComponent {
  /**
   * Array of team cards to display.
   * @type {TeamCard[]}
   * @required
   */
  @Input() data!: TeamCard[];

  /**
   * TrackBy function for teams to optimize ngFor rendering.
   * @param index - Array index
   * @param team - TeamCard object
   * @returns {number} Team ID
   */
  trackByTeam(index: number, team: TeamCard): number {
    return team.id;
  }

  /**
   * TrackBy function for team members to optimize ngFor rendering.
   * @param index - Array index
   * @param member - Member object
   * @returns {number} Index as unique identifier
   */
  trackByMember(index: number, member: any): number {
    return index;
  }

  /**
   * Returns an array for star rating display (1-5).
   * @param rating - Team rating
   * @returns {number[]} Array of star indices
   */
  getStars(rating: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }

  /**
   * Determines if a star should be rendered as a half star.
   * @param rating - Team rating
   * @param starIndex - Current star index
   * @returns {boolean} True if half star, false otherwise
   */
  isHalfStar(rating: number, starIndex: number): boolean {
    return rating >= starIndex - 0.5 && rating < starIndex;
  }
} 