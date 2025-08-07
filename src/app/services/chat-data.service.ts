import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

// Import interfaces from components
import { ChatContact } from '../components/chat/chat-contacts-list/chat-contacts-list';
import { ChatMessage } from '../components/chat/chat-messages/chat-messages';
import { CurrentChat } from '../components/chat/chat-input/chat-input';
import { ChatHeader } from '../components/chat/chat-header/chat-header';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { ProfileHeaderWidgetData } from '../components/headers/profile-header/profile-header';
import { SidebarDataService } from './sidebar-data.service';

/**
 * ChatDataService
 * 
 * Service that provides mock data and real-time functionality for the chat application.
 * This service manages chat contacts, messages, and conversation state using BehaviorSubjects
 * to provide reactive data streams for the chat interface.
 * 
 * The service manages:
 * - Chat contacts list with online status and typing indicators
 * - Message history with different message types (text, image, typing)
 * - Current chat session and contact information
 * - Chat header data for active conversations
 * - Real-time message sending and contact selection
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({
  providedIn: 'root'
})
export class ChatDataService {
  
  /**
   * BehaviorSubject containing the list of chat contacts with their status and last messages.
   */
  private contactsSubject = new BehaviorSubject<ChatContact[]>([
    {
      id: '1',
      name: 'Charlie Watson',
      avatar: 'assets/img/team-2.jpg',
      lastMessage: 'Typing...',
      lastMessageTime: 'now',
      isOnline: true,
      isTyping: true,
      unreadCount: 0
    },
    {
      id: '2',
      name: 'Jane Doe',
      avatar: 'assets/img/team-1.jpg',
      lastMessage: 'Computer users and programmers',
      lastMessageTime: '1 hour ago',
      isOnline: false,
      isTyping: false,
      unreadCount: 2
    },
    {
      id: '3',
      name: 'Mila Skylar',
      avatar: 'assets/img/team-3.jpg',
      lastMessage: 'You can subscribe to receive weekly...',
      lastMessageTime: '24 min ago',
      isOnline: true,
      isTyping: false,
      unreadCount: 0
    },
    {
      id: '4',
      name: 'Sofia Scarlett',
      avatar: 'assets/img/team-5.jpg',
      lastMessage: 'It\'s an effective resource regardless..',
      lastMessageTime: '7 hours ago',
      isOnline: false,
      isTyping: false,
      unreadCount: 1
    },
    {
      id: '5',
      name: 'Tom Klein',
      avatar: 'assets/img/team-4.jpg',
      lastMessage: 'Be sure to check it out if your dev pro...',
      lastMessageTime: '1 day ago',
      isOnline: false,
      isTyping: false,
      unreadCount: 0
    }
  ]);

  /**
   * BehaviorSubject containing the message history for the current chat conversation.
   */
  private messagesSubject = new BehaviorSubject<ChatMessage[]>([
    // Index 0: First message from other person
    {
      id: '1',
      senderId: '1',
      content: 'It contains a lot of good lessons about effective practices',
      timestamp: '3:14am',
      isRead: true,
      type: 'text'
    },
    // Index 1: First message from current user
    {
      id: '2',
      senderId: 'current',
      content: 'Can it generate daily design links that include essays and data visualizations ?',
      timestamp: '4:42pm',
      isRead: true,
      type: 'text'
    },
    // Index 2: Date separator
    {
      id: '3',
      senderId: 'separator',
      content: 'Wed, 3:27pm',
      timestamp: '',
      isRead: false,
      type: 'text'
    },
    // Index 3: Second message from other person
    {
      id: '4',
      senderId: '1',
      content: 'Yeah! Responsive Design is geared towards those trying to build web apps',
      timestamp: '4:31pm',
      isRead: true,
      type: 'text'
    },
    // Index 4: Second message from current user
    {
      id: '5',
      senderId: 'current',
      content: 'Excellent, I want it now !',
      timestamp: '4:42pm',
      isRead: true,
      type: 'text'
    },
    // Index 5: Third message from other person
    {
      id: '6',
      senderId: '1',
      content: 'You can easily get it; The content here is all free',
      timestamp: '4:42pm',
      isRead: true,
      type: 'text'
    },
    // Index 6: Third message from current user (with line breaks)
    {
      id: '7',
      senderId: 'current',
      content: 'Awesome, blog is important source material for anyone who creates apps? <br> Beacuse these blogs offer a lot of information about website development.',
      timestamp: '4:42pm',
      isRead: true,
      type: 'text'
    },
    // Index 7: Image message from other person
    {
      id: '8',
      senderId: '1',
      content: '',
      timestamp: '4:47pm',
      isRead: true,
      type: 'image',
      imageUrl: 'https://images.unsplash.com/photo-1602142946018-34606aa83259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1762&q=80'
    },
    // Index 8: Fourth message from current user
    {
      id: '9',
      senderId: 'current',
      content: 'At the end of the day … the native dev apps is where users are',
      timestamp: '4:47pm',
      isRead: true,
      type: 'text'
    },
    // Index 9: Typing message from other person
    {
      id: '10',
      senderId: '1',
      content: 'Charlie is typing...',
      timestamp: 'now',
      isRead: false,
      type: 'text'
    }
  ]);

  /**
   * BehaviorSubject containing the current chat session information.
   */
  private currentChatSubject = new BehaviorSubject<CurrentChat>({
    contactId: '1',
    contactName: 'Charlie Watson',
    contactAvatar: 'assets/img/team-2.jpg',
    lastSeen: 'last seen today at 1:53am',
    isOnline: true
  });

  /**
   * BehaviorSubject containing the chat header information for the active conversation.
   */
  private chatHeaderSubject = new BehaviorSubject<ChatHeader>({
    contactName: 'Charlie Watson',
    contactAvatar: 'assets/img/team-2.jpg',
    lastSeen: 'last seen today at 1:53am',
    isOnline: true
  });

  /**
   * Creates an instance of ChatDataService.
   * 
   * @param sidebarDataService - Service for managing sidebar data
   */
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves the list of chat contacts with their status and last messages.
   * 
   * @returns Observable<ChatContact[]> - Observable containing the contacts list
   *          with online status, typing indicators, and unread message counts
   */
  getContactsData(): Observable<ChatContact[]> {
    return this.contactsSubject.asObservable();
  }

  /**
   * Retrieves the message history for the current chat conversation.
   * 
   * @returns Observable<ChatMessage[]> - Observable containing the message list
   *          with different message types (text, image, typing, separators)
   */
  getMessagesData(): Observable<ChatMessage[]> {
    return this.messagesSubject.asObservable();
  }

  /**
   * Retrieves the current chat session information including contact details.
   * 
   * @returns Observable<CurrentChat> - Observable containing current chat data
   *          with contact ID, name, avatar, and online status
   */
  getCurrentChatData(): Observable<CurrentChat> {
    return this.currentChatSubject.asObservable();
  }

  /**
   * Retrieves the chat header information for the active conversation.
   * 
   * @returns Observable<ChatHeader> - Observable containing chat header data
   *          with contact name, avatar, last seen time, and online status
   */
  getChatHeaderData(): Observable<ChatHeader> {
    return this.chatHeaderSubject.asObservable();
  }

  /**
   * Retrieves sidebar data using the existing sidebar service.
   * 
   * @returns Observable<SidebarData> - Observable containing the sidebar configuration
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves profile header widget data for displaying user profile information.
   * 
   * @returns Observable<ProfileHeaderWidgetData> - Observable containing profile data
   *          with user information and avatar
   */
  getProfileHeaderData(): Observable<ProfileHeaderWidgetData> {
    return of({
      profileImage: 'assets/img/team-1.jpg',
      name: 'Sayo Kravits',
      position: 'Public Relations',
      tabs: [
        { id: 'app', label: 'App', icon: 'ni ni-app', active: true },
        { id: 'messages', label: 'Messages', icon: 'ni ni-email-83', active: false },
        { id: 'settings', label: 'Settings', icon: 'ni ni-settings-gear-65', active: false }
      ]
    });
  }

  /**
   * Sends a new message to the current chat conversation.
   * 
   * @param content - The message content to send
   */
  sendMessage(content: string): void {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      senderId: 'current',
      content,
      timestamp: this.getCurrentTime(),
      isRead: false,
      type: 'text'
    };

    const currentMessages = this.messagesSubject.value;
    this.messagesSubject.next([...currentMessages, newMessage]);
  }

  /**
   * Selects a contact and updates the current chat session.
   * 
   * @param contactId - The ID of the contact to select
   */
  selectContact(contactId: string): void {
    const contacts = this.contactsSubject.value;
    const selectedContact = contacts.find(c => c.id === contactId);
    
    if (selectedContact) {
      const currentChat: CurrentChat = {
        contactId: selectedContact.id,
        contactName: selectedContact.name,
        contactAvatar: selectedContact.avatar,
        lastSeen: selectedContact.isOnline ? 'online' : 'last seen recently',
        isOnline: selectedContact.isOnline
      };
      
      const chatHeader: ChatHeader = {
        contactName: selectedContact.name,
        contactAvatar: selectedContact.avatar,
        lastSeen: selectedContact.isOnline ? 'online' : 'last seen recently',
        isOnline: selectedContact.isOnline
      };
      
      this.currentChatSubject.next(currentChat);
      this.chatHeaderSubject.next(chatHeader);
    }
  }

  /**
   * Gets the current time formatted for message timestamps.
   * 
   * @returns string - Formatted current time
   * @private
   */
  private getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}${ampm}`;
  }
} 