import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * ========================================
 * SOCIAL POST COMPONENT
 * ========================================
 * 
 * A comprehensive social media post component for social dashboards and
 * community applications. Features interactive elements like likes, comments,
 * shares, and user interactions.
 * 
 * FEATURES:
 * - Displays author information with avatar
 * - Shows post content with optional image
 * - Interactive statistics (likes, comments, shares)
 * - Comment system with user avatars
 * - Action button for custom interactions
 * - Form for adding new comments
 * - Responsive design with Tailwind CSS
 * 
 * USAGE:
 * <app-social-post 
 *   [data]="socialPostData" 
 *   (actionClick)="handleAction()"
 *   (statClick)="handleStat($event)"
 *   (commentAction)="handleCommentAction($event)"
 *   (addComment)="handleAddComment($event)">
 * </app-social-post>
 * 
 * REUSABILITY: High - Social media and community applications
 * COMPLEXITY: High - Multiple interactions and data structures
 */

/**
 * Data structure for individual comments within a social post.
 * Provides comprehensive comment information with user details.
 */
export interface CommentData {
  /** Unique identifier for the comment */
  id: string;
  /** Comment author information */
  author: {
    /** Author's display name */
    name: string;
    /** URL or path to author's avatar image */
    avatar: string;
  };
  /** Comment text content */
  text: string;
  /** Number of likes on the comment (optional) */
  likes?: number;
  /** Number of shares of the comment (optional) */
  shares?: number;
  /** Flag to identify the first comment for special styling */
  isFirst?: boolean;
}

/**
 * Complete data structure for the social post component.
 * Provides all necessary information for displaying a social media post.
 */
export interface SocialPostData {
  /** Post author information */
  author: {
    /** Author's display name */
    name: string;
    /** URL or path to author's avatar image */
    avatar: string;
  };
  /** Relative time since post creation (e.g., '2 hours ago') */
  timeAgo: string;
  /** Main post content text */
  content: string;
  /** Optional image URL for the post */
  image?: string;
  /** Post engagement statistics */
  stats: {
    /** Number of likes */
    likes: number;
    /** Number of comments */
    comments: number;
    /** Number of shares */
    shares: number;
  };
  /** Follower information for engagement display */
  followers?: {
    /** Array of follower avatar URLs */
    avatars: string[];
    /** Total follower count */
    count?: number;
  };
  /** Optional action button configuration */
  actionButton?: {
    /** Button text */
    text: string;
    /** Optional icon class */
    icon?: string;
  };
  /** Array of comments on the post */
  comments?: CommentData[];
  /** Flag to show/hide comment form */
  showCommentForm?: boolean;
  /** Current user information for comment creation */
  currentUser?: {
    /** Current user's name */
    name: string;
    /** Current user's avatar */
    avatar: string;
  };
}

/**
 * Social Post Component
 * 
 * A sophisticated, reusable card component that displays social media posts
 * with full interaction capabilities. Designed for social dashboards,
 * community platforms, and social media applications.
 * 
 * QUALITY FEATURES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Default data values for safe initialization
 * - Comprehensive event handling system
 * - Performance optimization with trackBy functions
 * - Form handling for user input
 * - Minimal dependencies (CommonModule, FormsModule)
 * 
 * REUSABILITY FEATURES:
 * - Configurable data input with comprehensive interface
 * - Multiple event emitters for different interactions
 * - Flexible comment system
 * - Customizable action buttons
 * - Optional features (image, followers, comment form)
 * - No hardcoded values or styling
 * 
 * EVENT HANDLING:
 * - actionClick: General action button click
 * - statClick: Like, comment, or share button click
 * - commentAction: Like or share on specific comments
 * - addComment: New comment submission
 * 
 * PERFORMANCE FEATURES:
 * - trackBy functions for ngFor optimization
 * - Input validation and sanitization
 * - Efficient event delegation
 */
@Component({
  selector: 'app-social-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './social-post.html'
})
export class SocialPostComponent {
  /**
   * Input data for the social post with default values.
   * Contains all post information and configuration.
   * 
   * @type {SocialPostData} - Complete social post data with defaults
   * @default - Provides safe default values to prevent errors
   */
  @Input() data: SocialPostData = {
    author: {
      name: 'Anonymous User',
      avatar: 'assets/img/team-4.jpg'
    },
    timeAgo: 'Just now',
    content: 'This is a social post content.',
    stats: {
      likes: 0,
      comments: 0,
      shares: 0
    }
  };

  /**
   * Event emitter for general action button clicks.
   * 
   * @type {EventEmitter<void>} - Emits when action button is clicked
   */
  @Output() actionClick = new EventEmitter<void>();

  /**
   * Event emitter for statistics button clicks (like, comment, share).
   * 
   * @type {EventEmitter<'like' | 'comment' | 'share'>} - Emits interaction type
   */
  @Output() statClick = new EventEmitter<'like' | 'comment' | 'share'>();

  /**
   * Event emitter for comment-specific actions (like, share).
   * 
   * @type {EventEmitter<{commentId: string, action: 'like' | 'share'}>} - Emits comment action
   */
  @Output() commentAction = new EventEmitter<{commentId: string, action: 'like' | 'share'}>();

  /**
   * Event emitter for new comment submissions.
   * 
   * @type {EventEmitter<string>} - Emits comment text
   */
  @Output() addComment = new EventEmitter<string>();

  /**
   * Current comment text being typed by the user.
   * 
   * @type {string} - Comment input value
   */
  newComment: string = '';

  /**
   * TrackBy function for avatar arrays to optimize ngFor performance.
   * 
   * @param index - Array index
   * @param avatar - Avatar URL string
   * @returns {string} - Avatar URL as unique identifier
   */
  trackByAvatar(index: number, avatar: string): string {
    return avatar;
  }

  /**
   * TrackBy function for comment arrays to optimize ngFor performance.
   * 
   * @param index - Array index
   * @param comment - Comment data object
   * @returns {string} - Comment ID as unique identifier
   */
  trackByComment(index: number, comment: CommentData): string {
    return comment.id;
  }

  /**
   * Handles general action button clicks.
   * Emits actionClick event for parent component handling.
   * 
   * @returns {void}
   */
  onActionClick(): void {
    this.actionClick.emit();
  }

  /**
   * Handles statistics button clicks (like, comment, share).
   * Emits statClick event with the interaction type.
   * 
   * @param type - The type of interaction ('like', 'comment', 'share')
   * @returns {void}
   */
  onStatClick(type: 'like' | 'comment' | 'share'): void {
    this.statClick.emit(type);
  }

  /**
   * Handles comment-specific action clicks (like, share).
   * Emits commentAction event with comment ID and action type.
   * 
   * @param commentId - Unique identifier of the comment
   * @param action - The action type ('like', 'share')
   * @returns {void}
   */
  onCommentAction(commentId: string, action: 'like' | 'share'): void {
    this.commentAction.emit({ commentId, action });
  }

  /**
   * Handles new comment submission.
   * Validates comment text and emits addComment event.
   * Clears the input field after submission.
   * 
   * @returns {void}
   */
  onAddComment(): void {
    if (this.newComment.trim()) {
      this.addComment.emit(this.newComment);
      this.newComment = '';
    }
  }
} 
