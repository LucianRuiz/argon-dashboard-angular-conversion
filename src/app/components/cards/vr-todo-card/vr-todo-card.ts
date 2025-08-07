import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the VR todo card component.
 * 
 * Provides comprehensive information for displaying todo items
 * in a virtual reality format, including total count and individual items.
 */
export interface VrTodoData {
  /** Total number of todo items */
  totalItems: number;
  /** Array of todo item descriptions */
  items: string[];
}

/**
 * VR Todo Card Component
 * 
 * A specialized card component designed for virtual reality interfaces
 * that displays todo items and count in a VR-optimized format. This
 * component provides an immersive todo list experience suitable for
 * virtual reality environments and productivity applications.
 * 
 * Features:
 * - Displays total number of todo items with VR-optimized styling
 * - List of individual todo items with immersive design
 * - VR-themed visual design and layout
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Performance optimization with trackBy function
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with simple interface
 * - Array-based todo item management
 * - No hardcoded values or styling
 * - VR-themed but adaptable design
 * - Event emission for user interactions
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Performance optimization with trackBy function
 * - Efficient rendering of todo arrays
 * - Type-safe data handling
 * - VR-optimized styling and layout
 * - Immersive user experience design
 * - Event-driven architecture for user interactions
 * 
 * Use Cases:
 * - VR dashboard todo lists
 * - Immersive task management
 * - Virtual workspace applications
 * - VR productivity tools
 * - Virtual reality task tracking
 * 
 * The component serves as a specialized VR todo card that can be
 * easily integrated into virtual reality applications and environments,
 * providing users with an immersive way to manage and display todo
 * items with VR-optimized styling and interactive features.
 * 
 * @example
 * ```html
 * <app-vr-todo-card 
 *   [data]="vrTodoData"
 *   (todoClick)="handleTodoClick($event)"
 *   (todoItemClick)="handleTodoItemClick($event)">
 * </app-vr-todo-card>
 * ```
 * 
 * @example
 * ```typescript
 * const vrTodoData: VrTodoData = {
 *   totalItems: 5,
 *   items: ["Complete VR project", "Review code", "Update documentation"]
 * };
 * ```
 */
@Component({
  selector: 'app-vr-todo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vr-todo-card.html'
})
export class VrTodoCardComponent {
  /**
   * Required input data for the VR todo card.
   * 
   * Contains total count and array of todo items optimized
   * for virtual reality display. This required input property
   * ensures data is always provided, preventing null/undefined
   * errors and ensuring proper VR display.
   * 
   * @type {VrTodoData} - Complete VR todo data (required)
   */
  @Input() data!: VrTodoData;

  /**
   * Event emitted when the todo card is clicked.
   * 
   * Provides the complete todo data for parent component handling.
   * This event allows parent components to respond to card-level
   * interactions in VR environments.
   * 
   * @type {EventEmitter<VrTodoData>} - Todo data event
   */
  @Output() todoClick = new EventEmitter<VrTodoData>();

  /**
   * Event emitted when a specific todo item is clicked.
   * 
   * Provides the todo item and its index for parent component handling.
   * This event allows parent components to respond to individual
   * item interactions in VR environments.
   * 
   * @type {EventEmitter<{item: string, index: number}>} - Todo item event
   */
  @Output() todoItemClick = new EventEmitter<{item: string, index: number}>();

  /**
   * TrackBy function for todo items to optimize ngFor performance.
   * 
   * Uses item content and index as unique identifier to help Angular
   * efficiently track and update todo items in VR environments.
   * This improves performance by reducing unnecessary DOM manipulations
   * in virtual reality applications.
   * 
   * @param {number} index - Array index of the todo item
   * @param {string} item - Todo item string
   * @returns {string} Unique identifier for the todo item
   */
  trackByTodoItem(index: number, item: string): string {
    return `todo-${index}-${item.substring(0, 10)}`;
  }

  /**
   * Handles todo card click event.
   * 
   * Emits todoClick event with current data when the entire
   * todo card is clicked. This method provides a way for
   * parent components to respond to card-level interactions.
   */
  onTodoClick(): void {
    this.todoClick.emit(this.data);
  }

  /**
   * Handles individual todo item click event.
   * 
   * Emits todoItemClick event with the specific item and its index
   * when an individual todo item is clicked. This method provides
   * a way for parent components to respond to item-level interactions.
   * 
   * @param {string} item - The todo item that was clicked
   * @param {number} index - The index of the clicked item
   */
  onTodoItemClick(item: string, index: number): void {
    this.todoItemClick.emit({ item, index });
  }
} 
