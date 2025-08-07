import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PerfectScrollbarDirective } from '../../../components/layout/sidebar/perfect-scrollbar.directive';
import { SidebarComponent, SidebarData } from '../../../components/layout/sidebar/sidebar';
import { FooterComponent } from '../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../components/layout/argon-configurator/argon-configurator';
import { ProfileHeaderComponent, ProfileHeaderWidgetData } from '../../../components/headers/profile-header/profile-header';

// Chat components
import { ChatContactsListComponent, ChatContact } from '../../../components/chat/chat-contacts-list/chat-contacts-list';
import { ChatMessagesComponent, ChatMessage } from '../../../components/chat/chat-messages/chat-messages';
import { ChatInputComponent, CurrentChat } from '../../../components/chat/chat-input/chat-input';
import { ChatHeaderComponent, ChatHeader } from '../../../components/chat/chat-header/chat-header';

// Services
import { ChatDataService } from '../../../services/chat-data.service';

/**
 * Chat Component
 * 
 * This component implements a comprehensive chat interface for the application.
 * It provides a complete messaging system with contact lists, message history,
 * real-time messaging capabilities, and user profile management in a modern
 * chat application layout.
 * 
 * Features:
 * - Contact list with user avatars and online status
 * - Real-time message exchange and history
 * - Chat input with message composition and sending
 * - Chat header with contact information and actions
 * - Profile header with user details and settings
 * - Sidebar navigation for easy access to other sections
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Perfect scrollbar for smooth navigation
 * - Message status tracking and delivery confirmation
 * - Contact search and filtering capabilities
 * 
 * The component serves as a complete messaging interface, providing users
 * with a modern chat experience similar to popular messaging applications,
 * including contact management, message history, and real-time communication
 * features in an intuitive and user-friendly layout.
 * 
 * @example
 * ```html
 * <app-chat></app-chat>
 * ```
 */
@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    ProfileHeaderComponent,
    PerfectScrollbarDirective,
    ChatContactsListComponent,
    ChatMessagesComponent,
    ChatInputComponent,
    ChatHeaderComponent
  ],
  templateUrl: './chat.html'
})
export class ChatComponent {
  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for profile header widget data */
  profileHeaderData$: Observable<ProfileHeaderWidgetData>;
  
  /** Observable for chat contacts data */
  contactsData$: Observable<ChatContact[]>;
  
  /** Observable for chat messages data */
  messagesData$: Observable<ChatMessage[]>;
  
  /** Observable for current chat session data */
  currentChatData$: Observable<CurrentChat>;
  
  /** Observable for chat header data */
  chatHeaderData$: Observable<ChatHeader>;

  /**
   * Creates an instance of ChatComponent.
   * 
   * Initializes the component by subscribing to data streams from ChatDataService
   * for sidebar configuration, profile header, contacts, messages, current chat,
   * and chat header data.
   * 
   * @param chatDataService - Service for managing chat data and messaging functionality
   */
  constructor(private chatDataService: ChatDataService) {
    this.sidebarData$ = this.chatDataService.getSidebarData();
    this.profileHeaderData$ = this.chatDataService.getProfileHeaderData();
    this.contactsData$ = this.chatDataService.getContactsData();
    this.messagesData$ = this.chatDataService.getMessagesData();
    this.currentChatData$ = this.chatDataService.getCurrentChatData();
    this.chatHeaderData$ = this.chatDataService.getChatHeaderData();
  }

  /**
   * Handles sending a new message in the current chat.
   * 
   * Processes the message content and sends it through the chat service
   * to the currently selected contact or chat session.
   * 
   * @param message - The text content of the message to be sent
   */
  onSendMessage(message: string): void {
    this.chatDataService.sendMessage(message);
  }

  /**
   * Handles contact selection in the chat interface.
   * 
   * Switches the current chat session to the selected contact and
   * loads the corresponding message history and contact information.
   * 
   * @param contactId - The unique identifier of the selected contact
   */
  onContactSelect(contactId: string): void {
    this.chatDataService.selectContact(contactId);
  }
} 