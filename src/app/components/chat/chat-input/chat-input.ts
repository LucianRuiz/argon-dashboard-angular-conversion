import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Data structure for the current chat contact information.
 * 
 * Provides comprehensive information about the current chat
 * contact including identification, display details, and status.
 */
export interface CurrentChat {
  /** Unique identifier for the contact */
  contactId: string;
  /** Display name of the contact */
  contactName: string;
  /** URL or path to the contact's avatar image */
  contactAvatar: string;
  /** Timestamp of when the contact was last seen */
  lastSeen: string;
  /** Whether the contact is currently online */
  isOnline: boolean;
}

/**
 * Chat Input Component
 * 
 * A comprehensive input component for chat applications that
 * provides message composition and sending functionality. Designed
 * for chat interfaces requiring user input and message transmission.
 * 
 * Features:
 * - Text input field for message composition
 * - Send button for message transmission
 * - Enter key support for quick message sending
 * - Current chat contact information display
 * - Message validation (prevents empty messages)
 * - Event emission for message sending
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Null-safe data handling with default values
 * - Minimal dependencies (CommonModule, FormsModule)
 * - Configurable data input with comprehensive interface
 * - Keyboard event handling
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
 * - Keyboard accessibility
 * - Message validation
 * - Event-driven architecture
 * 
 * Use Cases:
 * - Chat applications
 * - Messaging platforms
 * - Customer support systems
 * - Team collaboration tools
 * - Social media messaging
 * - Real-time communication interfaces
 * 
 * The component serves as a comprehensive chat input interface
 * that can be easily integrated into chat applications and
 * messaging platforms, providing users with an intuitive way
 * to compose and send messages.
 * 
 * @example
 * ```html
 * <app-chat-input 
 *   [currentChatData]="currentChat" 
 *   (sendMessage)="handleSendMessage($event)">
 * </app-chat-input>
 * ```
 * 
 * @example
 * ```typescript
 * const currentChat: CurrentChat = {
 *   contactId: "user-123",
 *   contactName: "John Doe",
 *   contactAvatar: "assets/img/avatar.jpg",
 *   lastSeen: "2024-01-15T10:30:00Z",
 *   isOnline: true
 * };
 * 
 * handleSendMessage(message: string) {
 *   console.log('Sending message:', message);
 *   // Handle message sending logic
 * }
 * ```
 */
@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-input.html'
})
export class ChatInputComponent {
  /**
   * Input data for the current chat contact.
   * 
   * Contains information about the current chat contact including
   * identification, display details, and online status. This input
   * property defaults to null to handle cases where no contact
   * is selected.
   * 
   * @type {CurrentChat | null} - Current chat contact data (defaults to null)
   */
  @Input() currentChatData: CurrentChat | null = null;

  /**
   * Event emitter for message sending.
   * 
   * Emits the message text when the user sends a message.
   * This event allows parent components to handle message
   * transmission logic.
   * 
   * @type {EventEmitter<string>} - Emits message text string
   */
  @Output() sendMessage = new EventEmitter<string>();

  /**
   * Current message text in the input field.
   * 
   * Stores the current value of the message input field
   * for two-way data binding and message composition.
   * 
   * @type {string} - Current message text
   */
  messageText: string = '';

  /**
   * Handles message sending when the send button is clicked.
   * 
   * Validates that the message is not empty, emits the message
   * text to parent components, and clears the input field.
   * This method provides the core functionality for message
   * transmission.
   */
  onSendMessage(): void {
    if (this.messageText.trim()) {
      this.sendMessage.emit(this.messageText.trim());
      this.messageText = '';
    }
  }

  /**
   * Handles keyboard events for enhanced user experience.
   * 
   * Listens for Enter key presses to send messages quickly
   * without clicking the send button. Prevents default behavior
   * and handles Shift+Enter for new lines if needed.
   * 
   * @param {KeyboardEvent} event - The keyboard event that was triggered
   */
  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.onSendMessage();
    }
  }
} 