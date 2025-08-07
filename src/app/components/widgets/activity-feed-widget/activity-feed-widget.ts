import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * ACTIVITY FEED WIDGET COMPONENT
 * ========================================
 *
 * A social activity feed widget that displays posts with comments,
 * likes, shares, and user interactions. Ideal for social media
 * dashboards or community platforms.
 *
 * FEATURES:
 * - Social media-style activity feed
 * - Post content with images
 * - User avatars and timestamps
 * - Like, comment, and share counters
 * - Nested comments display
 * - Optimized rendering with trackBy functions
 * - Responsive design with Tailwind CSS
 * - Dark mode support
 *
 * USAGE:
 * <app-activity-feed [data]="activityPosts"></app-activity-feed>
 *
 * REUSABILITY: High - Generic social activity feed
 * COMPLEXITY: Medium - Complex data structure with nested comments
 */

/**
 * Interface representing a comment in an activity post.
 *
 * @property {string} author - Comment author name
 * @property {string} avatar - Author avatar URL
 * @property {string} content - Comment text content
 * @property {number} likes - Number of likes on comment
 * @property {number} shares - Number of shares of comment
 *
 * @example
 * const comment = {
 *   author: 'Jane Smith',
 *   avatar: '/assets/img/jane.jpg',
 *   content: 'Great post!',
 *   likes: 5,
 *   shares: 2
 * };
 */
export interface ActivityComment {
  /** Comment author name */
  author: string;
  /** Author avatar URL */
  avatar: string;
  /** Comment text content */
  content: string;
  /** Number of likes on comment */
  likes: number;
  /** Number of shares of comment */
  shares: number;
}

/**
 * Interface representing an activity post.
 *
 * @property {number} id - Unique post identifier
 * @property {Object} author - Post author information
 * @property {string} content - Post text content
 * @property {string} [image] - Optional post image URL
 * @property {number} likes - Number of likes on post
 * @property {number} comments - Number of comments on post
 * @property {number} shares - Number of shares of post
 * @property {ActivityComment[]} commentsList - Array of comments
 *
 * @example
 * const activityPost: ActivityPost = {
 *   id: 1,
 *   author: {
 *     name: 'John Doe',
 *     avatar: '/assets/img/john.jpg',
 *     timeAgo: '2 hours ago'
 *   },
 *   content: 'Just finished a great workout!',
 *   image: '/assets/img/workout.jpg',
 *   likes: 24,
 *   comments: 8,
 *   shares: 3,
 *   commentsList: [
 *     {
 *       author: 'Jane Smith',
 *       avatar: '/assets/img/jane.jpg',
 *       content: 'Great job!',
 *       likes: 5,
 *       shares: 2
 *     }
 *   ]
 * };
 */
export interface ActivityPost {
  /** Unique post identifier */
  id: number;
  /** Post author information */
  author: {
    name: string;
    avatar: string;
    timeAgo: string;
  };
  /** Post text content */
  content: string;
  /** Optional post image URL */
  image?: string;
  /** Number of likes on post */
  likes: number;
  /** Number of comments on post */
  comments: number;
  /** Number of shares of post */
  shares: number;
  /** Array of comments */
  commentsList: ActivityComment[];
}

/**
 * Activity feed component for displaying social media-style posts.
 * 
 * A widget component that displays a feed of activity posts
 * with comments, likes, and user interactions.
 */
@Component({
  selector: 'app-activity-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity-feed-widget.html'
})
export class ActivityFeedComponent {
  /** Array of activity posts to display */
  @Input() data!: ActivityPost[];

  /**
   * TrackBy function for optimizing *ngFor rendering performance.
   * Uses post ID as unique identifier for change detection.
   * 
   * @param index - Current item index
   * @param post - Activity post object
   * @returns Unique identifier for the post
   */
  trackByPost(index: number, post: ActivityPost): number {
    return post.id;
  }

  /**
   * TrackBy function for comment rendering optimization.
   * Uses index as unique identifier for comment change detection.
   * 
   * @param index - Current comment index
   * @param comment - Comment object
   * @returns Unique identifier for the comment
   */
  trackByComment(index: number, comment: ActivityComment): number {
    return index;
  }
} 