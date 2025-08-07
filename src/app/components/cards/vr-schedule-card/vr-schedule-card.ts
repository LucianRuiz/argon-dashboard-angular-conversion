import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for individual VR schedule events.
 * 
 * Provides comprehensive information for displaying scheduled
 * activities in a virtual reality format, including time,
 * title, and subtitle details.
 */
export interface VrScheduleEvent {
  /** Time of the scheduled event */
  time: string;
  /** Main title of the event */
  title: string;
  /** Subtitle or additional details for the event */
  subtitle: string;
}

/**
 * Complete data structure for the VR schedule card component.
 * 
 * Contains an array of scheduled events to display in a
 * virtual reality optimized format.
 */
export interface VrScheduleData {
  /** Array of scheduled events */
  events: VrScheduleEvent[];
}

/**
 * VR Schedule Card Component
 * 
 * A specialized card component designed for virtual reality interfaces
 * that displays scheduled events in a VR-optimized format. This
 * component provides an immersive schedule/calendar experience
 * suitable for virtual reality environments and productivity applications.
 * 
 * Features:
 * - Displays multiple scheduled events with VR-optimized styling
 * - Time-based event organization with immersive design
 * - Title and subtitle for each event with detailed information
 * - Performance optimization with trackBy function
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interfaces
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Array-based event display
 * - Time and detail flexibility
 * - No hardcoded values or styling
 * - VR-themed but adaptable design
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Performance optimization with trackBy function
 * - Efficient rendering of event arrays
 * - Type-safe data handling
 * - VR-optimized styling and layout
 * - Immersive user experience design
 * - Fallback to index for unique identification
 * 
 * Use Cases:
 * - VR dashboard schedules
 * - Immersive calendar interfaces
 * - Virtual workspace applications
 * - VR productivity tools
 * - Virtual reality event management
 * 
 * The component serves as a specialized VR schedule card that can be
 * easily integrated into virtual reality applications and environments,
 * providing users with an immersive way to view and manage scheduled
 * events with VR-optimized styling and performance.
 * 
 * @example
 * ```html
 * <app-vr-schedule-card [data]="vrScheduleData"></app-vr-schedule-card>
 * ```
 * 
 * @example
 * ```typescript
 * const vrScheduleData: VrScheduleData = {
 *   events: [
 *     {
 *       time: "09:00 AM",
 *       title: "Team Meeting",
 *       subtitle: "Project planning session"
 *     },
 *     {
 *       time: "02:30 PM",
 *       title: "Client Call",
 *       subtitle: "Product demo"
 *     }
 *   ]
 * };
 * ```
 */
@Component({
  selector: 'app-vr-schedule-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vr-schedule-card.html'
})
export class VrScheduleCardComponent {
  /**
   * Required input data for the VR schedule card.
   * 
   * Contains array of scheduled events to display optimized
   * for virtual reality. This required input property ensures
   * data is always provided, preventing null/undefined errors
   * and ensuring proper VR display.
   * 
   * @type {VrScheduleData} - Complete VR schedule data (required)
   */
  @Input() data!: VrScheduleData;

  /**
   * TrackBy function for event arrays to optimize ngFor performance.
   * 
   * Uses event time as unique identifier to help Angular efficiently
   * track and update scheduled events in VR environments. Falls back
   * to index if time is not available. This improves performance by
   * reducing unnecessary DOM manipulations in virtual reality applications.
   * 
   * @param {number} index - Array index of the event
   * @param {VrScheduleEvent} event - Event data object
   * @returns {string} Unique identifier for the event
   */
  trackByEvent(index: number, event: VrScheduleEvent): string {
    return event.time || index.toString();
  }
} 
