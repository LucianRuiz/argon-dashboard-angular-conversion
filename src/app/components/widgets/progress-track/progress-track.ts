import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing a progress track item
 * Defines the structure for individual progress items with logos and progress bars
 */
export interface ProgressItem {
  /** Unique identifier for the item */
  id: number;
  /** Display name of the item */
  name: string;
  /** Logo image URL for the item */
  logo: string;
  /** Progress percentage (0-100) */
  progress: number;
  /** Tailwind CSS color class for the progress bar */
  progressColor: string;
}

/**
 * Progress Track Component
 * 
 * A component that displays a list of items with progress bars, commonly used
 * for tracking project progress, task completion, or any measurable metrics.
 * Each item includes a logo, name, and visual progress indicator.
 * 
 * Features:
 * - List of progress items with logos and names
 * - Visual progress bars with customizable colors
 * - Clickable items with event emission
 * - Responsive design with proper spacing
 * - Dark mode support
 * - Smooth progress bar animations
 * - Optimized rendering with trackBy function
 * 
 * Visual Elements:
 * - Circular logo images for each item
 * - Progress bars with customizable colors
 * - Clean list layout with proper borders
 * - Smooth transitions for progress updates
 * - Responsive grid layout for different screen sizes
 * 
 * Progress Bar Colors:
 * - Supports any Tailwind CSS color classes
 * - Common examples: bg-blue-500, bg-green-500, bg-red-500
 * - Progress bars animate smoothly when values change
 * - Height and styling are consistent across all items
 * 
 * Interaction:
 * - Each item is clickable and emits events
 * - Hover effects for better user experience
 * - Proper accessibility with semantic HTML
 * - Event emission for parent component handling
 * 
 * Usage:
 * ```html
 * <app-progress-track 
 *   [title]="'Project Progress'"
 *   [items]="progressItems"
 *   (itemClick)="onProgressItemClick($event)">
 * </app-progress-track>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const progressItems: ProgressItem[] = [
 *   {
 *     id: 1,
 *     name: 'Website Design',
 *     logo: '/assets/img/logos/design.png',
 *     progress: 75,
 *     progressColor: 'bg-blue-500'
 *   },
 *   {
 *     id: 2,
 *     name: 'Mobile App',
 *     logo: '/assets/img/logos/mobile.png',
 *     progress: 45,
 *     progressColor: 'bg-green-500'
 *   }
 * ];
 * ```
 * 
 * Styling Features:
 * - Shadow effects for depth
 * - Rounded corners for modern look
 * - Proper spacing and typography
 * - Dark mode compatibility
 * - Responsive breakpoints
 * 
 * Dependencies:
 * - Tailwind CSS for styling
 * - Angular Common for structural directives
 * - Event handling for user interactions
 */
@Component({
  selector: 'app-progress-track',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-track.html'
})
export class ProgressTrackComponent {
  /** Title displayed at the top of the progress track */
  @Input() title: string = 'Progress track';
  
  /** Array of progress items to display */
  @Input() items: ProgressItem[] = [];
  
  /** Event emitted when a progress item is clicked */
  @Output() itemClick = new EventEmitter<ProgressItem>();

  /**
   * TrackBy function for optimizing ngFor rendering
   * Uses item ID for efficient DOM updates
   * @param index - Current index in the array
   * @param item - Current progress item
   * @returns Unique identifier for the item
   */
  trackByProgress(index: number, item: ProgressItem): number {
    return item.id;
  }

  /**
   * Handles click events on progress items
   * Emits the clicked item to parent components
   * @param item - The progress item that was clicked
   */
  onItemClick(item: ProgressItem): void {
    this.itemClick.emit(item);
  }
} 
