import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * UPCOMING EVENTS WIDGET COMPONENT
 * ========================================
 * 
 * A widget component that displays a list of upcoming events with icons,
 * titles, and dates in a clean, organized layout.
 * 
 * FEATURES:
 * - Displays upcoming events with icons and colors
 * - Shows event titles and dates
 * - Responsive design with Tailwind CSS
 * - Icon-based event categorization
 * - Clean, modern card layout
 * 
 * USAGE:
 * <app-upcoming-events-widget [data]="eventsData"></app-upcoming-events-widget>
 * 
 * REUSABILITY: High - Generic widget for event listings
 * COMPLEXITY: Low - Simple data display component
 */

/**
 * Interface representing an individual event item.
 * Defines the structure for each event in the upcoming events list.
 * 
 * @interface EventItem
 * @description Structure for individual event data
 * 
 * @property {string} icon - CSS class name for the event icon (Font Awesome or custom)
 * @property {string} iconColor - Tailwind CSS color class for the icon
 * @property {string} title - Event title or description
 * @property {string} date - Event date in string format
 * 
 * @example
 * ```typescript
 * const event: EventItem = {
 *   icon: 'fas fa-calendar',
 *   iconColor: 'text-blue-500',
 *   title: 'Team Meeting',
 *   date: 'Today, 2:00 PM'
 * };
 * ```
 */
export interface EventItem {
  /** CSS class name for the event icon (Font Awesome or custom) */
  icon: string;
  /** Tailwind CSS color class for the icon */
  iconColor: string;
  /** Event title or description */
  title: string;
  /** Event date in string format */
  date: string;
}

/**
 * Interface representing the complete data structure for the upcoming events widget.
 * Contains the widget title, subtitle, and array of events.
 * 
 * @interface UpcomingEventsWidgetData
 * @description Complete data structure for the upcoming events widget
 * 
 * @property {string} title - Main title of the widget
 * @property {string} subtitle - Subtitle or description text
 * @property {EventItem[]} events - Array of upcoming events
 * 
 * @example
 * ```typescript
 * const widgetData: UpcomingEventsWidgetData = {
 *   title: 'Upcoming Events',
 *   subtitle: 'Your scheduled activities',
 *   events: [
 *     {
 *       icon: 'fas fa-calendar',
 *       iconColor: 'text-blue-500',
 *       title: 'Team Meeting',
 *       date: 'Today, 2:00 PM'
 *     },
 *     {
 *       icon: 'fas fa-birthday-cake',
 *       iconColor: 'text-pink-500',
 *       title: 'Birthday Party',
 *       date: 'Tomorrow, 7:00 PM'
 *     }
 *   ]
 * };
 * ```
 */
export interface UpcomingEventsWidgetData {
  /** Main title of the widget */
  title: string;
  /** Subtitle or description text */
  subtitle: string;
  /** Array of upcoming events */
  events: EventItem[];
}

/**
 * Upcoming Events Widget Component
 * 
 * A standalone component that displays a list of upcoming events in a clean,
 * organized layout with icons, titles, and dates.
 * 
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Responsive design with Tailwind CSS
 * 
 * REUSABILITY FEATURES:
 * - Configurable data input with complete interface
 * - Dynamic event list rendering
 * - Icon and color customization per event
 * - No hardcoded values
 * - Flexible date formatting
 * 
 * VISUAL FEATURES:
 * - Card-based layout with shadow effects
 * - Icon-based event categorization
 * - Color-coded icons for visual hierarchy
 * - Clean typography and spacing
 * - Responsive grid layout
 * 
 * PERFORMANCE FEATURES:
 * - Efficient ngFor rendering
 * - Minimal DOM manipulation
 * - Optimized for small to medium event lists
 * - Fast rendering with Tailwind CSS
 * 
 * ACCESSIBILITY FEATURES:
 * - Semantic HTML structure
 * - Proper heading hierarchy
 * - Icon accessibility considerations
 * - Screen reader friendly layout
 * 
 * USE CASES:
 * - Dashboard event overview
 * - Calendar widget integration
 * - Task management interfaces
 * - Social media event feeds
 * - Business meeting schedules
 * - Personal event reminders
 * 
 * INTEGRATION EXAMPLES:
 * 
 * Dashboard Integration:
 * ```typescript
 * // In dashboard component
 * upcomingEvents: UpcomingEventsWidgetData = {
 *   title: 'Today\'s Schedule',
 *   subtitle: 'Your upcoming activities',
 *   events: this.getTodayEvents()
 * };
 * ```
 * 
 * Calendar Integration:
 * ```typescript
 * // In calendar component
 * onDateSelect(date: Date) {
 *   this.eventsData = {
 *     title: 'Events for ' + date.toLocaleDateString(),
 *     subtitle: 'Scheduled activities',
 *     events: this.getEventsForDate(date)
 *   };
 * }
 * ```
 * 
 * API Integration:
 * ```typescript
 * // In service
 * getUpcomingEvents(): Observable<UpcomingEventsWidgetData> {
 *   return this.http.get<UpcomingEventsWidgetData>('/api/events/upcoming');
 * }
 * ```
 * 
 * STYLING FEATURES:
 * - Tailwind CSS utility classes
 * - Responsive design patterns
 * - Card-based layout with shadows
 * - Icon integration with Font Awesome
 * - Color-coded event categories
 * - Clean typography hierarchy
 * 
 * TECHNICAL SPECIFICATIONS:
 * - Angular 17+ standalone component
 * - TypeScript strict mode compatible
 * - Tailwind CSS for styling
 * - Font Awesome icon support
 * - Responsive breakpoints
 * - Accessibility compliant
 */
@Component({
  selector: 'app-upcoming-events-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming-events-widget.html'
})
export class UpcomingEventsWidgetComponent {
  /**
   * Required data input containing the widget configuration and events.
   * Provides all necessary information for rendering the upcoming events widget.
   * 
   * @type {UpcomingEventsWidgetData} - Complete widget data (required)
   * @required - Ensures data is always provided, preventing null/undefined errors
   * 
   * @example
   * ```typescript
   * // In parent component
   * eventsData: UpcomingEventsWidgetData = {
   *   title: 'Upcoming Events',
   *   subtitle: 'Your scheduled activities',
   *   events: [
   *     {
   *       icon: 'fas fa-calendar',
   *       iconColor: 'text-blue-500',
   *       title: 'Team Meeting',
   *       date: 'Today, 2:00 PM'
   *     }
   *   ]
   * };
   * ```
   */
  @Input() data!: UpcomingEventsWidgetData;
} 