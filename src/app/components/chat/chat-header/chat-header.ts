import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the chat header information.
 * 
 * Provides comprehensive information for displaying chat
 * header details including contact information and status.
 */
export interface ChatHeader {
  /** Display name of the chat contact */
  contactName: string;
  /** URL or path to the contact's avatar image */
  contactAvatar: string;
  /** Timestamp of when the contact was last seen */
  lastSeen: string;
  /** Whether the contact is currently online */
  isOnline: boolean;
}

/**
 * Chat Header Component
 * 
 * A comprehensive header component for chat applications that
 * displays contact information and provides action buttons.
 * Designed for chat interfaces requiring contact details and
 * quick access to chat-related actions.
 * 
 * Features:
 * - Displays contact name and avatar
 * - Shows online/offline status indicators
 * - Last seen timestamp display
 * - Camera button for video calls or photo sharing
 * - Settings button for chat configuration
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Null-safe data handling with default values
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Action button event handling
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
 * - Interactive action buttons
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
 * The component serves as a comprehensive chat header that can be
 * easily integrated into chat applications and messaging platforms,
 * providing users with contact information and quick access to
 * chat-related actions.
 * 
 * @example
 * ```html
 * <app-chat-header [chatHeaderData]="headerData"></app-chat-header>
 * ```
 * 
 * @example
 * ```typescript
 * const headerData: ChatHeader = {
 *   contactName: "John Doe",
 *   contactAvatar: "assets/img/avatar.jpg",
 *   lastSeen: "2024-01-15T10:30:00Z",
 *   isOnline: true
 * };
 * ```
 */
@Component({
  selector: 'app-chat-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-header.html'
})
export class ChatHeaderComponent {
  /**
   * Input data for the chat header component.
   * 
   * Contains contact information including name, avatar,
   * online status, and last seen timestamp. This input
   * property defaults to null to handle cases where no
   * contact is selected.
   * 
   * @type {ChatHeader | null} - Chat header data (defaults to null)
   */
  @Input() chatHeaderData: ChatHeader | null = null;

  /**
   * Handles camera button click for video calls or photo sharing.
   * 
   * Provides functionality for initiating video calls or
   * opening camera for photo sharing. This method serves
   * as a placeholder for camera-related actions in chat
   * applications.
   */
  onCameraClick(): void {
    // Logic for opening camera
    console.log('Camera clicked');
  }

  /**
   * Handles settings button click for chat configuration.
   * 
   * Provides functionality for opening chat settings or
   * configuration options. This method serves as a
   * placeholder for settings-related actions in chat
   * applications.
   */
  onSettingsClick(): void {
    // Logic for opening settings
    console.log('Settings clicked');
  }
} 