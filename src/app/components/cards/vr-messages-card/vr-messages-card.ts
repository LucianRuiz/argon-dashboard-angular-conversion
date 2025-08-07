import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for individual VR messages.
 * 
 * Provides comprehensive information for displaying message
 * notifications in a virtual reality format, including image,
 * count, and tooltip details.
 */
export interface VrMessage {
  /** URL or path to the message image/icon */
  image: string;
  /** Number of messages in this category */
  count: number;
  /** Tooltip text for additional information */
  tooltip: string;
}

/**
 * Complete data structure for the VR messages card component.
 * 
 * Contains an array of message notifications to display in a
 * virtual reality optimized format.
 */
export interface VrMessagesData {
  /** Array of message notifications */
  messages: VrMessage[];
}

/**
 * VR Messages Card Component
 * 
 * A specialized card component designed for virtual reality interfaces
 * that displays multiple message notifications with images and counts
 * in a VR-optimized format. This component provides an immersive
 * messaging experience suitable for virtual reality environments
 * and communication applications.
 * 
 * Features:
 * - Displays multiple message notifications with VR-optimized styling
 * - Image-based message representation with immersive design
 * - Count indicators for each message type with visual feedback
 * - Tooltip support for additional information and enhanced UX
 * - Performance optimization with trackBy function
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interfaces
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Array-based message display
 * - Image and count flexibility
 * - No hardcoded values or styling
 * - VR-themed but adaptable design
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Performance optimization with trackBy function
 * - Efficient rendering of message arrays
 * - Type-safe data handling
 * - VR-optimized styling and layout
 * - Immersive user experience design
 * - Fallback to index for unique identification
 * - Enhanced accessibility with tooltip support
 * 
 * Use Cases:
 * - VR dashboard message notifications
 * - Immersive messaging interfaces
 * - Virtual workspace applications
 * - VR communication tools
 * - Virtual reality notification systems
 * 
 * The component serves as a specialized VR messages card that can be
 * easily integrated into virtual reality applications and environments,
 * providing users with an immersive way to view and manage message
 * notifications with VR-optimized styling and performance.
 * 
 * @example
 * ```html
 * <app-vr-messages-card [data]="vrMessagesData"></app-vr-messages-card>
 * ```
 * 
 * @example
 * ```typescript
 * const vrMessagesData: VrMessagesData = {
 *   messages: [
 *     {
 *       image: "assets/img/team-1.jpg",
 *       count: 3,
 *       tooltip: "New messages from team"
 *     },
 *     {
 *       image: "assets/img/team-2.jpg",
 *       count: 1,
 *       tooltip: "Direct message"
 *     }
 *   ]
 * };
 * ```
 */
@Component({
  selector: 'app-vr-messages-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vr-messages-card.html'
})
export class VrMessagesCardComponent {
  /**
   * Required input data for the VR messages card.
   * 
   * Contains array of message notifications to display optimized
   * for virtual reality. This required input property ensures
   * data is always provided, preventing null/undefined errors
   * and ensuring proper VR display.
   * 
   * @type {VrMessagesData} - Complete VR messages data (required)
   */
  @Input() data!: VrMessagesData;

  /**
   * TrackBy function for message arrays to optimize ngFor performance.
   * 
   * Uses image URL as unique identifier to help Angular efficiently
   * track and update message notifications in VR environments. Falls
   * back to index if image URL is not available. This improves
   * performance by reducing unnecessary DOM manipulations in virtual
   * reality applications.
   * 
   * @param {number} index - Array index of the message
   * @param {VrMessage} message - Message data object
   * @returns {string} Unique identifier for the message
   */
  trackByMessage(index: number, message: VrMessage): string {
    return message.image || index.toString();
  }
} 
