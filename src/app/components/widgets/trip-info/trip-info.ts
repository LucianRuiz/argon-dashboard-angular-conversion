import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationData } from '../navigation-panel/navigation-panel';

/**
 * Trip Info Component
 * 
 * A component that displays trip information in a compact, responsive layout.
 * Shows estimated arrival time, next turn details, and destination information.
 * Designed for navigation applications and travel dashboards.
 * 
 * Features:
 * - Compact display of trip navigation data
 * - Responsive grid layout for different screen sizes
 * - Visual separators between information sections
 * - Dark mode support throughout
 * - Reuses NavigationData interface for consistency
 * 
 * Information Sections:
 * - Estimated arrival time with descriptive label
 * - Next turn distance and instruction
 * - Destination distance and name
 * - Visual separators for clean layout
 * 
 * Layout Structure:
 * - Three-column responsive grid
 * - Mobile: Full width stacked layout
 * - Tablet: Two-column layout
 * - Desktop: Three-column layout with proper spacing
 * 
 * Visual Elements:
 * - Clean typography with proper hierarchy
 * - Visual separators between sections
 * - Responsive spacing and alignment
 * - Dark mode compatible styling
 * - Gradient separators for visual appeal
 * 
 * Responsive Design:
 * - Mobile: Single column layout
 * - Tablet: Two-column layout (md:w-6/12)
 * - Desktop: Three-column layout (lg:w-4/12)
 * - Proper spacing and margins for all breakpoints
 * 
 * Data Display:
 * - Estimated arrival time prominently displayed
 * - Distance values with units in smaller text
 * - Turn instructions clearly labeled
 * - Destination information with proper formatting
 * 
 * Usage:
 * ```html
 * <app-trip-info 
 *   [data]="navigationData">
 * </app-trip-info>
 * ```
 * 
 * Data structure example (using NavigationData interface):
 * ```typescript
 * const navigationData: NavigationData = {
 *   currentTime: '14:30',
 *   estimatedArrival: '15:45',
 *   nextTurn: {
 *     distance: 200,
 *     unit: 'm',
 *     instruction: 'Turn left'
 *   },
 *   destination: {
 *     distance: 2.5,
 *     unit: 'km',
 *     name: 'Creative Tim Office'
 *   }
 * };
 * ```
 * 
 * Styling Features:
 * - Responsive grid system
 * - Visual separators with gradients
 * - Proper typography hierarchy
 * - Dark mode compatibility
 * - Consistent spacing and alignment
 * - Clean, modern design
 * 
 * Dependencies:
 * - NavigationData interface from navigation-panel component
 * - Tailwind CSS for responsive styling
 * - Angular Common for structural directives
 * - Responsive design utilities
 */
@Component({
  selector: 'app-trip-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-info.html'
})
export class TripInfoComponent {
  /** Navigation data containing trip information (arrival time, next turn, destination) */
  @Input() data: NavigationData | null = null;
} 
