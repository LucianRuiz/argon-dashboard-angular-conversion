import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * STORIES WIDGET COMPONENT
 * ========================================
 *
 * A component for displaying a list of stories with avatars, similar to social media stories.
 *
 * FEATURES:
 * - Displays story avatars with names
 * - Supports "Add Story" functionality
 * - Responsive design with Tailwind CSS
 * - Optimized rendering with trackBy function
 *
 * USAGE:
 * <app-stories [data]="stories"></app-stories>
 *
 * REUSABILITY: High - Generic stories display for social media apps
 * COMPLEXITY: Low - Simple avatar and name rendering
 */

/**
 * Interface representing a story structure.
 *
 * @property {number} id - Unique story identifier
 * @property {string} name - Story author name
 * @property {string} avatar - Story avatar image URL
 * @property {boolean} [isAddStory] - Optional flag to indicate "Add Story" button
 *
 * @example
 * const story: Story = {
 *   id: 1,
 *   name: 'John Doe',
 *   avatar: '/assets/img/john.jpg',
 *   isAddStory: false
 * };
 */
export interface Story {
  id: number;
  name: string;
  avatar: string;
  isAddStory?: boolean;
}

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stories-widget.html'
})
export class StoriesComponent {
  /**
   * Array of stories to display.
   * @type {Story[]}
   * @required
   */
  @Input() data!: Story[];

  /**
   * TrackBy function for stories to optimize ngFor rendering.
   * @param index - Array index
   * @param story - Story object
   * @returns {number} Story ID
   */
  trackByStory(index: number, story: Story): number {
    return story.id;
  }
} 