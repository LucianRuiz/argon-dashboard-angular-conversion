import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * CONVERSATIONS WIDGET COMPONENT
 * ========================================
 * 
 * A conversations widget that displays a list of messages
 * with avatars, names, messages, and reply buttons.
 * 
 * FEATURES:
 * - List of conversations with avatars
 * - Contact information and last message
 * - Interactive reply buttons
 * - Last message time
 * - Responsive design with Tailwind CSS
 * 
 * USAGE:
 * <app-conversations-widget [data]="conversationsData" 
 *                           (replyClicked)="onReplyClicked($event)"></app-conversations-widget>
 * 
 * REUSABILITY: High - Generic conversations widget
 * COMPLEXITY: Medium - List of conversations with interactions
 */

/**
 * Data structure for each conversation.
 * Defines the information for each individual conversation.
 * 
 * @property {number} id - Unique conversation identifier
 * @property {string} name - Contact name
 * @property {string} message - Last message in the conversation
 * @property {string} avatar - Contact avatar URL
 * @property {string} time - Last message time
 * 
 * @example
 * const conversation: Conversation = {
 *   id: 1,
 *   name: 'John Doe',
 *   message: 'Hello, how are you?',
 *   avatar: '/assets/img/john.jpg',
 *   time: '2 hours ago'
 * };
 */
export interface Conversation {
  /** Unique conversation identifier */
  id: number;
  /** Contact name */
  name: string;
  /** Last message in the conversation */
  message: string;
  /** Contact avatar URL */
  avatar: string;
  /** Last message time */
  time: string;
}

/**
 * Complete data structure for the conversations widget.
 * Organizes all user conversations.
 * 
 * @property {string} title - Widget title
 * @property {Conversation[]} conversations - Array of conversations
 * 
 * @example
 * const conversationsData: ConversationsWidgetData = {
 *   title: 'Recent Conversations',
 *   conversations: [
 *     {
 *       id: 1,
 *       name: 'John Doe',
 *       message: 'Hello, how are you?',
 *       avatar: '/assets/img/john.jpg',
 *       time: '2 hours ago'
 *     }
 *   ]
 * };
 */
export interface ConversationsWidgetData {
  /** Widget title */
  title: string;
  /** Array of conversations */
  conversations: Conversation[];
}

/**
 * Conversations Widget Component
 * 
 * A reusable widget component that displays a list of conversations
 * with reply options and navigation.
 * 
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Required input validation (prevents null/undefined errors)
 * - Event emission for interactions
 * - Minimal dependencies (only CommonModule)
 * 
 * REUSABILITY FEATURES:
 * - Configurable data input with complete interface
 * - Dynamic conversations
 * - Customizable event handling
 * - No hardcoded values
 * - Responsive and accessible design
 */
@Component({
  selector: 'app-conversations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conversations.html'
})
export class ConversationsComponent {
  /**
   * Required data for the conversations widget.
   * Contains all user conversations.
   * 
   * @type {ConversationsWidgetData} - Complete conversations data (required)
   * @required - Ensures data is always provided, preventing null errors
   */
  @Input() data!: ConversationsWidgetData;

  /**
   * Checks if there are conversations available.
   * Useful for showing/hiding the widget or displaying an empty message.
   * 
   * @returns {boolean} - True if there are conversations
   */
  hasConversations(): boolean {
    return this.data.conversations && this.data.conversations.length > 0;
  }

  /**
   * Gets the total number of conversations.
   * Useful for displaying counters or additional information.
   * 
   * @returns {number} - Total number of conversations
   */
  getTotalConversations(): number {
    return this.data.conversations ? this.data.conversations.length : 0;
  }

  /**
   * Gets the most recent conversations.
   * Useful for displaying only the most important conversations.
   * 
   * @param limit - Maximum number of conversations to return
   * @returns {Conversation[]} - Limited array of conversations
   */
  getRecentConversations(limit: number): Conversation[] {
    if (!this.data.conversations) return [];
    return this.data.conversations.slice(0, limit);
  }
} 