import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing a todo list item
 * Defines the structure for individual todo items with completion status
 */
export interface TodoItem {
  /** Unique identifier for the todo item */
  id: number;
  /** Title or description of the todo task */
  title: string;
  /** Time or deadline for the task (formatted string) */
  time: string;
  /** Whether the task is completed or not */
  completed: boolean;
}

/**
 * Todo List Component
 * 
 * A component that displays a list of todo items with checkboxes for task completion.
 * Each item includes a title, time/deadline, and completion status. Designed for
 * task management and productivity dashboards.
 * 
 * Features:
 * - List of todo items with titles and times
 * - Interactive checkboxes for task completion
 * - Visual feedback for completed tasks
 * - Responsive design with proper spacing
 * - Dark mode support throughout
 * - Optimized rendering with trackBy function
 * - Event emission for completion status changes
 * 
 * Visual Elements:
 * - Clean list layout with proper borders
 * - Custom styled checkboxes with gradient effects
 * - Task titles with proper typography
 * - Time information in smaller text
 * - Shadow effects and rounded corners
 * - Responsive design for different screen sizes
 * 
 * Checkbox Styling:
 * - Custom gradient background when checked
 * - Smooth transitions and animations
 * - Font Awesome checkmark icon
 * - Hover and focus states
 * - Consistent sizing and positioning
 * 
 * Task Management:
 * - Toggle completion status with checkbox clicks
 * - Event emission for parent component handling
 * - Visual indication of completed tasks
 * - Maintains task order and structure
 * 
 * List Layout:
 * - Proper borders between list items
 * - Rounded corners for first and last items
 * - Consistent spacing and typography
 * - Responsive grid layout for different screen sizes
 * 
 * Usage:
 * ```html
 * <app-todo-list 
 *   [title]="'Today\'s Tasks'"
 *   [items]="todoItems"
 *   (todoToggle)="onTodoToggle($event)">
 * </app-todo-list>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const todoItems: TodoItem[] = [
 *   {
 *     id: 1,
 *     title: 'Check the latest reports',
 *     time: '10:30 AM',
 *     completed: false
 *   },
 *   {
 *     id: 2,
 *     title: 'Meeting with the team',
 *     time: '2:00 PM',
 *     completed: true
 *   }
 * ];
 * ```
 * 
 * Event Handling:
 * - Emits todo toggle events when checkbox state changes
 * - Includes the updated todo item in the event
 * - Supports custom handling in parent components
 * - Event structure: TodoItem with updated completed status
 * 
 * Styling Features:
 * - Shadow effects for depth
 * - Rounded corners for modern look
 * - Dark mode compatibility
 * - Responsive breakpoints
 * - Consistent typography and spacing
 * - Custom checkbox styling with gradients
 * 
 * Dependencies:
 * - Tailwind CSS for styling
 * - Angular Common for structural directives
 * - Font Awesome for checkbox icons
 * - Event handling for user interactions
 */
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.html'
})
export class TodoListComponent {
  /** Title displayed at the top of the todo list */
  @Input() title: string = 'To do list';
  
  /** Array of todo items to display */
  @Input() items: TodoItem[] = [];
  
  /** Event emitted when a todo item's completion status is toggled */
  @Output() todoToggle = new EventEmitter<TodoItem>();

  /**
   * TrackBy function for optimizing ngFor rendering
   * Uses todo item ID for efficient DOM updates
   * @param index - Current index in the array
   * @param item - Current todo item
   * @returns Unique identifier for the item
   */
  trackByTodo(index: number, item: TodoItem): number {
    return item.id;
  }

  /**
   * Handles checkbox toggle events for todo items
   * Updates the completion status and emits the change
   * @param item - The todo item being toggled
   */
  onToggle(item: TodoItem): void {
    item.completed = !item.completed;
    this.todoToggle.emit(item);
  }
} 
