import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for individual chat messages.
 * 
 * Provides comprehensive information for displaying chat
 * messages with sender details, content, and metadata.
 */
export interface ChatMessage {
  /** Unique identifier for the message */
  id: string;
  /** Identifier of the message sender */
  senderId: string;
  /** Text content of the message */
  content: string;
  /** Timestamp when the message was sent */
  timestamp: string;
  /** Whether the message has been read by the recipient */
  isRead: boolean;
  /** Type of message content ('text', 'image', 'file') */
  type: 'text' | 'image' | 'file';
  /** Optional URL for image messages */
  imageUrl?: string;
}

/**
 * Chat Messages Component
 * 
 * A comprehensive component that displays a list of chat messages
 * in a conversational format. Designed for chat applications and
 * messaging interfaces requiring message display and management.
 * 
 * Features:
 * - Displays multiple chat messages in chronological order
 * - Supports different message types (text, image, file)
 * - Message read status indicators
 * - Timestamp display for message tracking
 * - Sender identification for multi-user chats
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Null-safe data handling with default empty array
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Array-based message display
 * - No hardcoded values or styling
 * - Generic design for any chat application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional chat interface
 * - Null-safe input processing
 * - Responsive design across devices
 * - Message type flexibility
 * - Read status tracking
 * 
 * Use Cases:
 * - Chat applications
 * - Messaging platforms
 * - Customer support systems
 * - Team collaboration tools
 * - Social media messaging
 * - Real-time communication interfaces
 * 
 * The component serves as a comprehensive chat messages display
 * that can be easily integrated into chat applications and
 * messaging platforms, providing users with a clear and organized
 * view of their conversation history.
 * 
 * @example
 * ```html
 * <app-chat-messages [messagesData]="chatMessages"></app-chat-messages>
 * ```
 * 
 * @example
 * ```typescript
 * const chatMessages: ChatMessage[] = [
 *   {
 *     id: "msg-1",
 *     senderId: "user-1",
 *     content: "Hello! How are you?",
 *     timestamp: "2024-01-15T10:30:00Z",
 *     isRead: true,
 *     type: "text"
 *   },
 *   {
 *     id: "msg-2",
 *     senderId: "user-2",
 *     content: "I'm doing great, thanks!",
 *     timestamp: "2024-01-15T10:32:00Z",
 *     isRead: false,
 *     type: "text"
 *   }
 * ];
 * ```
 */
@Component({
  selector: 'app-chat-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-messages.html'
})
export class ChatMessagesComponent {
  /**
   * Input data for the chat messages component.
   * 
   * Contains array of chat messages to display with their
   * respective content, sender information, and metadata.
   * This input property defaults to an empty array to prevent
   * errors when no messages are available.
   * 
   * @type {(ChatMessage | undefined)[]} - Array of chat messages (defaults to empty array)
   */
  @Input() messagesData: (ChatMessage | undefined)[] = [];
} 