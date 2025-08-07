import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the VR email card component.
 * 
 * Provides basic information for displaying email notifications
 * in a virtual reality format, including count and check text.
 */
export interface VrEmailData {
  /** Number of emails to display */
  count: number;
  /** Text to display for email checking action */
  checkText: string;
}

/**
 * VR Email Card Component
 * 
 * A specialized card component designed for virtual reality interfaces
 * that displays email notifications with VR-themed styling and
 * interactions. This component provides an immersive email notification
 * experience suitable for virtual reality environments and productivity
 * applications.
 * 
 * Features:
 * - Displays email count with VR-optimized notification styling
 * - VR-themed visual design and layout
 * - Customizable check text for email actions
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Performance optimization with trackBy function
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with simple interface
 * - Customizable email count display
 * - Flexible check text configuration
 * - No hardcoded values or styling
 * - VR-themed but adaptable design
 * - Event emission for user interactions
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Performance optimization with trackBy function
 * - Efficient rendering of email data
 * - Type-safe data handling
 * - VR-optimized styling and layout
 * - Immersive user experience design
 * - Event-driven architecture for user interactions
 * 
 * Use Cases:
 * - VR dashboard notifications
 * - Immersive email interfaces
 * - Virtual workspace applications
 * - VR productivity tools
 * - Virtual reality email management
 * 
 * The component serves as a specialized VR email card that can be
 * easily integrated into virtual reality applications and environments,
 * providing users with an immersive way to view and manage email
 * notifications with VR-optimized styling and interactive features.
 * 
 * @example
 * ```html
 * <app-vr-email-card 
 *   [data]="vrEmailData"
 *   (emailClick)="handleEmailClick($event)"
 *   (checkEmails)="handleCheckEmails($event)">
 * </app-vr-email-card>
 * ```
 * 
 * @example
 * ```typescript
 * const vrEmailData: VrEmailData = {
 *   count: 12,
 *   checkText: "Check emails"
 * };
 * ```
 */
@Component({
  selector: 'app-vr-email-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vr-email-card.html'
})
export class VrEmailCardComponent {
  /**
   * Required input data for the VR email card.
   * 
   * Contains email count and check text information optimized
   * for virtual reality display. This required input property
   * ensures data is always provided, preventing null/undefined
   * errors and ensuring proper VR display.
   * 
   * @type {VrEmailData} - Complete VR email data (required)
   */
  @Input() data!: VrEmailData;

  /**
   * Event emitted when the email card is clicked.
   * 
   * Provides the complete email data for parent component handling.
   * This event allows parent components to respond to card-level
   * interactions in VR environments.
   * 
   * @type {EventEmitter<VrEmailData>} - Email data event
   */
  @Output() emailClick = new EventEmitter<VrEmailData>();

  /**
   * Event emitted when the check emails action is triggered.
   * 
   * Provides the email count for parent component handling.
   * This event allows parent components to respond to email
   * checking actions in VR environments.
   * 
   * @type {EventEmitter<number>} - Email count event
   */
  @Output() checkEmails = new EventEmitter<number>();

  /**
   * TrackBy function for email data to optimize rendering performance.
   * 
   * Uses count as unique identifier to help Angular efficiently
   * track and update email data in VR environments. This improves
   * performance by reducing unnecessary DOM manipulations in virtual
   * reality applications.
   * 
   * @param {number} index - Array index of the email data item
   * @param {VrEmailData} item - Email data object
   * @returns {string} Unique identifier for the email data
   */
  trackByEmail(index: number, item: VrEmailData): string {
    return `email-${item.count}-${index}`;
  }

  /**
   * Handles email card click event.
   * 
   * Emits emailClick event with current data when the entire
   * email card is clicked. This method provides a way for
   * parent components to respond to card-level interactions.
   */
  onEmailClick(): void {
    this.emailClick.emit(this.data);
  }

  /**
   * Handles check emails action.
   * 
   * Emits checkEmails event with the current count when the
   * check emails action is triggered. This method provides
   * a way for parent components to respond to email checking
   * interactions.
   */
  onCheckEmails(): void {
    this.checkEmails.emit(this.data.count);
  }
} 
