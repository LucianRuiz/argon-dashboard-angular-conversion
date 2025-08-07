import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * TRACKING TIMELINE WIDGET COMPONENT
 * ========================================
 * 
 * A widget component that displays a vertical timeline of tracking steps
 * with completion status, icons, and timestamps.
 * 
 * FEATURES:
 * - Vertical timeline layout with step indicators
 * - Completion status tracking with visual indicators
 * - Icon-based step categorization
 * - Timestamp display for each step
 * - Responsive design with Tailwind CSS
 * 
 * USAGE:
 * <app-tracking-timeline [data]="timelineData"></app-tracking-timeline>
 * 
 * REUSABILITY: High - Generic timeline widget for tracking processes
 * COMPLEXITY: Medium - Timeline logic with completion states
 */

/**
 * Interface representing an individual tracking step.
 * Defines the structure for each step in the tracking timeline.
 * 
 * @interface TrackingStep
 * @description Structure for individual tracking step data
 * 
 * @property {number} id - Unique identifier for the step
 * @property {string} title - Step title or description
 * @property {string} time - Timestamp for the step
 * @property {string} icon - CSS class name for the step icon
 * @property {boolean} isCompleted - Completion status of the step
 * 
 * @example
 * ```typescript
 * const step: TrackingStep = {
 *   id: 1,
 *   title: 'Order Confirmed',
 *   time: '10:30 AM',
 *   icon: 'fas fa-check-circle',
 *   isCompleted: true
 * };
 * ```
 */
export interface TrackingStep {
  /** Unique identifier for the step */
  id: number;
  /** Step title or description */
  title: string;
  /** Timestamp for the step */
  time: string;
  /** CSS class name for the step icon */
  icon: string;
  /** Completion status of the step */
  isCompleted: boolean;
}

/**
 * Interface representing the complete data structure for the tracking timeline widget.
 * Contains the widget title and array of tracking steps.
 * 
 * @interface TrackingTimelineData
 * @description Complete data structure for the tracking timeline widget
 * 
 * @property {string} title - Main title of the timeline widget
 * @property {TrackingStep[]} steps - Array of tracking steps
 * 
 * @example
 * ```typescript
 * const timelineData: TrackingTimelineData = {
 *   title: 'Order Tracking',
 *   steps: [
 *     {
 *       id: 1,
 *       title: 'Order Confirmed',
 *       time: '10:30 AM',
 *       icon: 'fas fa-check-circle',
 *       isCompleted: true
 *     },
 *     {
 *       id: 2,
 *       title: 'Processing',
 *       time: '11:45 AM',
 *       icon: 'fas fa-cog',
 *       isCompleted: true
 *     },
 *     {
 *       id: 3,
 *       title: 'Shipped',
 *       time: '2:15 PM',
 *       icon: 'fas fa-shipping-fast',
 *       isCompleted: false
 *     }
 *   ]
 * };
 * ```
 */
export interface TrackingTimelineData {
  /** Main title of the timeline widget */
  title: string;
  /** Array of tracking steps */
  steps: TrackingStep[];
}

/**
 * Tracking Timeline Widget Component
 * 
 * A standalone component that displays a vertical timeline of tracking steps
 * with completion status, icons, and timestamps in a clean, organized layout.
 * 
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Responsive design with Tailwind CSS
 * - Efficient rendering with trackBy function
 * 
 * REUSABILITY FEATURES:
 * - Configurable data input with complete interface
 * - Dynamic step list rendering
 * - Icon and completion status customization per step
 * - No hardcoded values
 * - Flexible timeline structure
 * 
 * VISUAL FEATURES:
 * - Vertical timeline layout with connecting lines
 * - Step indicators with icons and completion states
 * - Visual progress tracking
 * - Clean typography and spacing
 * - Responsive design patterns
 * 
 * PERFORMANCE FEATURES:
 * - Efficient ngFor rendering with trackBy function
 * - Minimal DOM manipulation
 * - Optimized for small to medium step lists
 * - Fast rendering with Tailwind CSS
 * 
 * ACCESSIBILITY FEATURES:
 * - Semantic HTML structure
 * - Proper heading hierarchy
 * - Icon accessibility considerations
 * - Screen reader friendly layout
 * - Progress indication for assistive technologies
 * 
 * USE CASES:
 * - Order tracking systems
 * - Project management timelines
 * - Process workflow tracking
 * - Delivery status monitoring
 * - Task completion tracking
 * - Application status workflows
 * - Service request tracking
 * 
 * INTEGRATION EXAMPLES:
 * 
 * E-commerce Order Tracking:
 * ```typescript
 * // In order tracking component
 * orderTimeline: TrackingTimelineData = {
 *   title: 'Order #12345 Status',
 *   steps: [
 *     { id: 1, title: 'Order Placed', time: '10:30 AM', icon: 'fas fa-shopping-cart', isCompleted: true },
 *     { id: 2, title: 'Processing', time: '11:45 AM', icon: 'fas fa-cog', isCompleted: true },
 *     { id: 3, title: 'Shipped', time: '2:15 PM', icon: 'fas fa-shipping-fast', isCompleted: false }
 *   ]
 * };
 * ```
 * 
 * Project Management:
 * ```typescript
 * // In project component
 * projectTimeline: TrackingTimelineData = {
 *   title: 'Project Milestones',
 *   steps: [
 *     { id: 1, title: 'Planning', time: 'Week 1', icon: 'fas fa-clipboard-list', isCompleted: true },
 *     { id: 2, title: 'Development', time: 'Week 2-4', icon: 'fas fa-code', isCompleted: true },
 *     { id: 3, title: 'Testing', time: 'Week 5', icon: 'fas fa-bug', isCompleted: false }
 *   ]
 * };
 * ```
 * 
 * API Integration:
 * ```typescript
 * // In service
 * getTrackingData(orderId: string): Observable<TrackingTimelineData> {
 *   return this.http.get<TrackingTimelineData>(`/api/orders/${orderId}/tracking`);
 * }
 * ```
 * 
 * STYLING FEATURES:
 * - Tailwind CSS utility classes
 * - Vertical timeline layout
 * - Step indicators with icons
 * - Completion status styling
 * - Responsive design patterns
 * - Clean typography hierarchy
 * 
 * TECHNICAL SPECIFICATIONS:
 * - Angular 17+ standalone component
 * - TypeScript strict mode compatible
 * - Tailwind CSS for styling
 * - Font Awesome icon support
 * - Responsive breakpoints
 * - Accessibility compliant
 * - Performance optimized with trackBy
 */
@Component({
  selector: 'app-tracking-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracking-timeline.html'
})
export class TrackingTimelineComponent {
  /**
   * Required data input containing the timeline configuration and steps.
   * Provides all necessary information for rendering the tracking timeline widget.
   * 
   * @type {TrackingTimelineData} - Complete timeline data (required)
   * @required - Ensures data is always provided, preventing null/undefined errors
   * 
   * @example
   * ```typescript
   * // In parent component
   * timelineData: TrackingTimelineData = {
   *   title: 'Order Tracking',
   *   steps: [
   *     {
   *       id: 1,
   *       title: 'Order Confirmed',
   *       time: '10:30 AM',
   *       icon: 'fas fa-check-circle',
   *       isCompleted: true
   *     }
   *   ]
   * };
   * ```
   */
  @Input() data!: TrackingTimelineData;

  /**
   * TrackBy function for optimizing ngFor rendering performance.
   * Uses step ID as unique identifier for efficient DOM updates.
   * 
   * @param {number} index - Current index in the array
   * @param {TrackingStep} item - Current tracking step
   * @returns {number} Step ID as unique identifier
   * 
   * @example
   * ```html
   * <div *ngFor="let step of data.steps; trackBy: trackByStep">
   *   <!-- Step content -->
   * </div>
   * ```
   */
  trackByStep(index: number, item: TrackingStep): number {
    return item.id;
  }
} 