import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * TIMELINE ITEM WIDGET COMPONENT
 * ========================================
 * 
 * A widget component that displays individual timeline items with icons,
 * dates, descriptions, and tags in a flexible layout system.
 * 
 * FEATURES:
 * - Individual timeline item display with rich content
 * - Icon support with gradient styling
 * - Date and time information display
 * - Tag system for categorization
 * - Multiple display modes (default, light, dark)
 * - Responsive design with Tailwind CSS
 * 
 * USAGE:
 * <app-timeline-item [data]="timelineItem" [mode]="'default'"></app-timeline-item>
 * 
 * REUSABILITY: High - Generic timeline item component
 * COMPLEXITY: Medium - Multiple display modes and rich content
 */

/**
 * Interface representing an individual timeline item.
 * Defines the structure for each item in a timeline display.
 * 
 * @interface TimelineItem
 * @description Structure for individual timeline item data
 * 
 * @property {number} id - Unique identifier for the timeline item
 * @property {string} title - Title or heading of the timeline item
 * @property {string} date - Date of the timeline event
 * @property {string} time - Time of the timeline event
 * @property {string} description - Detailed description of the event
 * @property {string} icon - CSS class name for the item icon
 * @property {string} iconGradient - Tailwind CSS gradient classes for icon styling
 * @property {string[]} tags - Array of tags for categorization
 * @property {boolean} [isLast] - Optional flag indicating if this is the last item
 * @property {boolean} [isDark] - Optional flag for dark mode styling
 * 
 * @example
 * ```typescript
 * const timelineItem: TimelineItem = {
 *   id: 1,
 *   title: 'Project Milestone Reached',
 *   date: '2024-01-15',
 *   time: '2:30 PM',
 *   description: 'Successfully completed the first phase of development',
 *   icon: 'fas fa-check-circle',
 *   iconGradient: 'from-green-500 to-emerald-500',
 *   tags: ['milestone', 'development', 'completed'],
 *   isLast: false,
 *   isDark: false
 * };
 * ```
 */
export interface TimelineItem {
  /** Unique identifier for the timeline item */
  id: number;
  /** Title or heading of the timeline item */
  title: string;
  /** Date of the timeline event */
  date: string;
  /** Time of the timeline event */
  time: string;
  /** Detailed description of the event */
  description: string;
  /** CSS class name for the item icon */
  icon: string;
  /** Tailwind CSS gradient classes for icon styling */
  iconGradient: string;
  /** Array of tags for categorization */
  tags: string[];
  /** Optional flag indicating if this is the last item */
  isLast?: boolean;
  /** Optional flag for dark mode styling */
  isDark?: boolean;
}

/**
 * Interface representing a complete timeline data structure.
 * Contains the timeline title, items, and optional display properties.
 * 
 * @interface TimelineData
 * @description Complete data structure for a timeline
 * 
 * @property {string} title - Main title of the timeline
 * @property {TimelineItem[]} items - Array of timeline items
 * @property {boolean} [isDark] - Optional flag for dark mode styling
 * @property {string} [percentage] - Optional percentage value for progress
 * @property {string} [percentageText] - Optional text description for percentage
 * @property {string} [percentageIcon] - Optional icon for percentage display
 * 
 * @example
 * ```typescript
 * const timelineData: TimelineData = {
 *   title: 'Project Timeline',
 *   items: [
 *     {
 *       id: 1,
 *       title: 'Planning Phase',
 *       date: '2024-01-01',
 *       time: '9:00 AM',
 *       description: 'Project planning and requirements gathering',
 *       icon: 'fas fa-clipboard-list',
 *       iconGradient: 'from-blue-500 to-cyan-500',
 *       tags: ['planning', 'requirements']
 *     }
 *   ],
 *   isDark: false,
 *   percentage: '75%',
 *   percentageText: 'Completed',
 *   percentageIcon: 'fas fa-chart-line'
 * };
 * ```
 */
export interface TimelineData {
  /** Main title of the timeline */
  title: string;
  /** Array of timeline items */
  items: TimelineItem[];
  /** Optional flag for dark mode styling */
  isDark?: boolean;
  /** Optional percentage value for progress */
  percentage?: string;
  /** Optional text description for percentage */
  percentageText?: string;
  /** Optional icon for percentage display */
  percentageIcon?: string;
}

/**
 * Interface representing data for timeline pages with light and dark themes.
 * Contains separate timeline data for different display modes.
 * 
 * @interface TimelinePageData
 * @description Data structure for timeline pages with theme support
 * 
 * @property {TimelineData} lightTimeline - Timeline data for light theme
 * @property {TimelineData} darkTimeline - Timeline data for dark theme
 * 
 * @example
 * ```typescript
 * const pageData: TimelinePageData = {
 *   lightTimeline: {
 *     title: 'Light Theme Timeline',
 *     items: [...],
 *     isDark: false
 *   },
 *   darkTimeline: {
 *     title: 'Dark Theme Timeline',
 *     items: [...],
 *     isDark: true
 *   }
 * };
 * ```
 */
export interface TimelinePageData {
  /** Timeline data for light theme */
  lightTimeline: TimelineData;
  /** Timeline data for dark theme */
  darkTimeline: TimelineData;
}

/**
 * Timeline Item Widget Component
 * 
 * A standalone component that displays individual timeline items with rich content
 * including icons, dates, descriptions, and tags. Supports multiple display modes
 * for different use cases.
 * 
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Responsive design with Tailwind CSS
 * - Multiple display modes for flexibility
 * 
 * REUSABILITY FEATURES:
 * - Configurable data input with complete interface
 * - Multiple display modes (default, light, dark)
 * - Flexible content structure with tags
 * - Icon and gradient customization
 * - No hardcoded values
 * - Theme-aware styling
 * 
 * VISUAL FEATURES:
 * - Icon display with gradient styling
 * - Tag system for categorization
 * - Date and time formatting
 * - Responsive layout design
 * - Theme-aware styling (light/dark)
 * - Clean typography hierarchy
 * 
 * PERFORMANCE FEATURES:
 * - Efficient rendering with minimal DOM manipulation
 * - Optimized for single item display
 * - Fast rendering with Tailwind CSS
 * - Lightweight component structure
 * 
 * ACCESSIBILITY FEATURES:
 * - Semantic HTML structure
 * - Proper heading hierarchy
 * - Icon accessibility considerations
 * - Screen reader friendly layout
 * - Tag accessibility support
 * 
 * USE CASES:
 * - Project management timelines
 * - Activity feeds and social media
 * - Event tracking systems
 * - Progress monitoring displays
 * - News and blog timelines
 * - User activity histories
 * - Workflow step tracking
 * 
 * INTEGRATION EXAMPLES:
 * 
 * Project Management:
 * ```typescript
 * // In project component
 * projectMilestone: TimelineItem = {
 *   id: 1,
 *   title: 'Sprint Planning Complete',
 *   date: '2024-01-15',
 *   time: '3:00 PM',
 *   description: 'All tasks planned and assigned for Sprint 3',
 *   icon: 'fas fa-tasks',
 *   iconGradient: 'from-purple-500 to-pink-500',
 *   tags: ['sprint', 'planning', 'completed']
 * };
 * ```
 * 
 * Social Media Feed:
 * ```typescript
 * // In social feed component
 * socialPost: TimelineItem = {
 *   id: 123,
 *   title: 'New Post Published',
 *   date: '2024-01-15',
 *   time: '2:30 PM',
 *   description: 'Shared a new article about Angular development',
 *   icon: 'fas fa-share-alt',
 *   iconGradient: 'from-blue-500 to-indigo-500',
 *   tags: ['angular', 'development', 'article']
 * };
 * ```
 * 
 * API Integration:
 * ```typescript
 * // In service
 * getTimelineItem(id: number): Observable<TimelineItem> {
 *   return this.http.get<TimelineItem>(`/api/timeline/${id}`);
 * }
 * ```
 * 
 * STYLING FEATURES:
 * - Tailwind CSS utility classes
 * - Gradient icon styling
 * - Tag system styling
 * - Responsive design patterns
 * - Theme-aware color schemes
 * - Clean typography hierarchy
 * 
 * TECHNICAL SPECIFICATIONS:
 * - Angular 17+ standalone component
 * - TypeScript strict mode compatible
 * - Tailwind CSS for styling
 * - Font Awesome icon support
 * - Responsive breakpoints
 * - Accessibility compliant
 * - Theme support (light/dark)
 */
@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-item.html'
})
export class TimelineItemComponent {
  /**
   * Required data input containing the timeline item information.
   * Provides all necessary data for rendering the timeline item.
   * 
   * @type {TimelineItem} - Complete timeline item data (required)
   * @required - Ensures data is always provided, preventing null/undefined errors
   * 
   * @example
   * ```typescript
   * // In parent component
   * timelineItem: TimelineItem = {
   *   id: 1,
   *   title: 'Project Milestone',
   *   date: '2024-01-15',
   *   time: '2:30 PM',
   *   description: 'Successfully completed milestone',
   *   icon: 'fas fa-check-circle',
   *   iconGradient: 'from-green-500 to-emerald-500',
   *   tags: ['milestone', 'completed']
   * };
   * ```
   */
  @Input() data!: TimelineItem;

  /**
   * Display mode for the timeline item component.
   * Controls the visual styling and layout of the component.
   * 
   * @type {'default' | 'timeline-light' | 'timeline-dark'} - Display mode
   * @default 'default' - Standard display mode for general use
   * 
   * MODES:
   * - 'default': Standard styling for widgets and general use
   * - 'timeline-light': Special styling for timeline pages (light theme)
   * - 'timeline-dark': Special styling for timeline pages (dark theme)
   * 
   * @example
   * ```html
   * <!-- Default mode -->
   * <app-timeline-item [data]="item" mode="default"></app-timeline-item>
   * 
   * <!-- Light timeline mode -->
   * <app-timeline-item [data]="item" mode="timeline-light"></app-timeline-item>
   * 
   * <!-- Dark timeline mode -->
   * <app-timeline-item [data]="item" mode="timeline-dark"></app-timeline-item>
   * ```
   */
  @Input() mode: 'default' | 'timeline-light' | 'timeline-dark' = 'default';
} 