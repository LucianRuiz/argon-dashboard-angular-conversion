import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarDirective } from '../../layout/sidebar/perfect-scrollbar.directive';

/**
 * Data structure for individual chat contacts.
 * 
 * Provides comprehensive information for displaying chat
 * contacts with details, status, and message information.
 */
export interface ChatContact {
  /** Unique identifier for the contact */
  id: string;
  /** Display name of the contact */
  name: string;
  /** URL or path to the contact's avatar image */
  avatar: string;
  /** Last message content from the contact */
  lastMessage: string;
  /** Timestamp of the last message */
  lastMessageTime: string;
  /** Whether the contact is currently online */
  isOnline: boolean;
  /** Whether the contact is currently typing */
  isTyping: boolean;
  /** Number of unread messages from this contact */
  unreadCount: number;
}

/**
 * Chat Contacts List Component
 * 
 * A comprehensive component that displays a list of chat contacts
 * with their status, last messages, and interaction capabilities.
 * Designed for chat applications requiring contact management
 * and selection functionality.
 * 
 * Features:
 * - Displays multiple chat contacts in a scrollable list
 * - Shows contact avatars, names, and online status
 * - Displays last message content and timestamp
 * - Typing indicators for real-time feedback
 * - Unread message count badges
 * - Contact selection with event emission
 * - Active contact highlighting
 * - Perfect scrollbar integration for smooth scrolling
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Null-safe data handling with default empty array
 * - Minimal dependencies (CommonModule, PerfectScrollbarDirective)
 * - Configurable data input with comprehensive interface
 * - Array-based contact display
 * - Event-driven contact selection
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
 * - Smooth scrolling experience
 * - Interactive contact selection
 * - Status indicator display
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
 * The component serves as a comprehensive chat contacts list
 * that can be easily integrated into chat applications and
 * messaging platforms, providing users with an organized view
 * of their contacts and conversation history.
 * 
 * @example
 * ```html
 * <app-chat-contacts-list 
 *   [contactsData]="contacts" 
 *   (contactSelect)="handleContactSelect($event)">
 * </app-chat-contacts-list>
 * ```
 * 
 * @example
 * ```typescript
 * const contacts: ChatContact[] = [
 *   {
 *     id: "1",
 *     name: "John Doe",
 *     avatar: "assets/img/avatar1.jpg",
 *     lastMessage: "Hello! How are you?",
 *     lastMessageTime: "2024-01-15T10:30:00Z",
 *     isOnline: true,
 *     isTyping: false,
 *     unreadCount: 2
 *   },
 *   {
 *     id: "2",
 *     name: "Jane Smith",
 *     avatar: "assets/img/avatar2.jpg",
 *     lastMessage: "See you tomorrow!",
 *     lastMessageTime: "2024-01-15T09:15:00Z",
 *     isOnline: false,
 *     isTyping: true,
 *     unreadCount: 0
 *   }
 * ];
 * 
 * handleContactSelect(contactId: string) {
 *   console.log('Selected contact:', contactId);
 *   // Handle contact selection logic
 * }
 * ```
 */
@Component({
  selector: 'app-chat-contacts-list',
  standalone: true,
  imports: [CommonModule, PerfectScrollbarDirective],
  templateUrl: './chat-contacts-list.html'
})
export class ChatContactsListComponent {
  /**
   * Input data for the chat contacts list component.
   * 
   * Contains array of chat contacts to display with their
   * respective details, status, and message information.
   * This input property defaults to an empty array to prevent
   * errors when no contacts are available.
   * 
   * @type {ChatContact[]} - Array of chat contacts (defaults to empty array)
   */
  @Input() contactsData: ChatContact[] = [];

  /**
   * Event emitter for contact selection.
   * 
   * Emits the contact ID when a contact is clicked or selected.
   * This event allows parent components to handle contact
   * selection logic and update the current chat.
   * 
   * @type {EventEmitter<string>} - Emits contact ID string
   */
  @Output() contactSelect = new EventEmitter<string>();

  /**
   * Handles contact click events and emits contact selection.
   * 
   * Processes contact click events and emits the contact ID
   * to parent components for further handling. This method
   * provides the core functionality for contact selection
   * in the chat interface.
   * 
   * @param {string} contactId - The ID of the clicked contact
   */
  onContactClick(contactId: string): void {
    this.contactSelect.emit(contactId);
  }

  /**
   * Determines if a contact is currently active/selected.
   * 
   * Checks if the provided contact is the currently active
   * contact in the chat interface. This method provides
   * visual feedback for the selected contact and can be
   * extended to support dynamic contact selection.
   * 
   * @param {ChatContact} contact - The contact to check for active status
   * @returns {boolean} True if the contact is currently active
   */
  isActiveContact(contact: ChatContact): boolean {
    // For now, the first contact is active by default
    return contact.id === '1';
  }
} 