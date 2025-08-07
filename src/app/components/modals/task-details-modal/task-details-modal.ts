import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Task Details Modal Data Interface
 * 
 * Defines the structure for task details modal configuration data.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The TaskDetailsModalData interface defines all properties needed
 * to display and edit task information in a modal dialog.
 * 
 * @interface
 * @since 1.0.0
 */
export interface TaskDetailsModalData {
  /** 
   * Whether the modal is currently open
   * @required - Modal state determines visibility
   * @example true, false
   */
  isOpen: boolean;
  
  /** 
   * Unique identifier for the task
   * @required - Task ID is essential for identification and updates
   * @example "task-001", "TASK-2024-001", "12345"
   */
  taskId: string;
  
  /** 
   * Title or name of the task
   * @required - Task title provides primary identification
   * @example "Implement user authentication", "Fix navigation bug", "Update documentation"
   */
  taskTitle: string;
  
  /** 
   * Person assigned to the task
   * @required - Task assignee provides responsibility context
   * @example "John Doe", "Jane Smith", "Development Team"
   */
  taskAssignee: string;
  
  /** 
   * Detailed description of the task
   * @required - Task description provides context and requirements
   * @example "Implement OAuth 2.0 authentication flow with Google and GitHub providers"
   */
  taskDescription: string;
}

/**
 * Task Update Event Interface
 * 
 * Defines the structure for task update events emitted by the modal.
 * This interface ensures type safety for event handling and data transfer.
 * 
 * @description
 * The TaskUpdateEvent interface defines the data structure that is
 * emitted when a task is updated through the modal.
 * 
 * @interface
 * @since 1.0.0
 */
export interface TaskUpdateEvent {
  /** 
   * Unique identifier for the task being updated
   * @required - Task ID is essential for identifying which task to update
   * @example "task-001", "TASK-2024-001", "12345"
   */
  taskId: string;
  
  /** 
   * Updated title or name of the task
   * @required - Updated task title
   * @example "Implement user authentication", "Fix navigation bug"
   */
  taskTitle: string;
  
  /** 
   * Updated person assigned to the task
   * @required - Updated task assignee
   * @example "John Doe", "Jane Smith", "Development Team"
   */
  taskAssignee: string;
  
  /** 
   * Updated detailed description of the task
   * @required - Updated task description
   * @example "Implement OAuth 2.0 authentication flow with Google and GitHub providers"
   */
  taskDescription: string;
}

/**
 * Task Details Modal Component
 * 
 * A comprehensive modal component designed for viewing and editing task details
 * in Kanban boards and project management interfaces. Provides form-based editing
 * with validation and event-driven updates.
 * 
 * @description
 * This component creates a professional modal dialog that allows users to
 * view and edit task information including title, assignee, and description.
 * It's ideal for Kanban boards, project management tools, and any application
 * that requires detailed task editing capabilities.
 * 
 * @features
 * - Task details viewing and editing
 * - Form-based input with validation
 * - Modal open/close functionality
 * - Event-driven task updates
 * - Input validation (non-empty title)
 * - Responsive design
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - Keyboard navigation support
 * - Clean, professional interface
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with required properties
 * - Performance optimized
 * - Event emission for parent communication
 * - Unit test friendly
 * - Memory efficient
 * - Form validation included
 * - No external dependencies beyond Angular core
 * 
 * @usecases
 * - Kanban board task editing
 * - Project management tools
 * - Task tracking applications
 * - Agile development boards
 * - Workflow management systems
 * - Team collaboration platforms
 * - Task assignment interfaces
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-task-details-modal 
 *   [data]="taskModalData"
 *   (updateTask)="handleTaskUpdate($event)"
 *   (closeModal)="handleCloseModal()">
 * </app-task-details-modal>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { TaskDetailsModalComponent, TaskDetailsModalData, TaskUpdateEvent } from './task-details-modal.component';
 * 
 * export class KanbanBoardComponent {
 *   taskModalData: TaskDetailsModalData = {
 *     isOpen: true,
 *     taskId: 'task-001',
 *     taskTitle: 'Implement authentication',
 *     taskAssignee: 'John Doe',
 *     taskDescription: 'Add OAuth 2.0 authentication flow'
 *   };
 * 
 *   handleTaskUpdate(event: TaskUpdateEvent): void {
 *     console.log('Updating task:', event.taskId);
 *     // Update task in backend
 *   }
 * 
 *   handleCloseModal(): void {
 *     this.taskModalData.isOpen = false;
 *   }
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-task-details-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-details-modal.html'
})
export class TaskDetailsModalComponent {
  /**
   * Task details modal configuration data
   * 
   * @description
   * Required input property that defines the task information and modal state.
   * Contains all task details and controls modal visibility.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {TaskDetailsModalData}
   * 
   * @example
   * ```typescript
   * data: TaskDetailsModalData = {
   *   isOpen: true,
   *   taskId: 'task-001',
   *   taskTitle: 'Implement authentication',
   *   taskAssignee: 'John Doe',
   *   taskDescription: 'Add OAuth 2.0 authentication flow'
   * };
   * ```
   */
  @Input() data!: TaskDetailsModalData;

  /**
   * Event emitter for task updates
   * 
   * @description
   * Output event that is emitted when a task is updated through the modal.
   * Parent components can listen to this event to handle task updates
   * and persist changes to the backend.
   * 
   * @output
   * @type {EventEmitter<TaskUpdateEvent>}
   * 
   * @example
   * ```html
   * <app-task-details-modal (updateTask)="handleTaskUpdate($event)"></app-task-details-modal>
   * ```
   */
  @Output() updateTask = new EventEmitter<TaskUpdateEvent>();

  /**
   * Event emitter for modal close functionality
   * 
   * @description
   * Output event that is emitted when the modal should be closed.
   * Parent components can listen to this event to handle modal closing
   * and update the modal state accordingly.
   * 
   * @output
   * @type {EventEmitter<void>}
   * 
   * @example
   * ```html
   * <app-task-details-modal (closeModal)="handleCloseModal()"></app-task-details-modal>
   * ```
   */
  @Output() closeModal = new EventEmitter<void>();

  /**
   * Handles task update submission with validation
   * 
   * @description
   * Processes task update form submission with validation to ensure
   * the task title is not empty. Emits an update event with the
   * modified task data when validation passes.
   * 
   * @method
   * @public
   * @returns {void} No return value
   * 
   * @example
   * ```typescript
   * // Handle task update
   * onUpdateTask(): void {
   *   // Validates task title and emits update event
   *   if (this.data.taskTitle.trim()) {
   *     this.updateTask.emit({
   *       taskId: this.data.taskId,
   *       taskTitle: this.data.taskTitle,
   *       taskAssignee: this.data.taskAssignee,
   *       taskDescription: this.data.taskDescription
   *     });
   *   }
   * }
   * ```
   * 
   * @todo
   * - Add more comprehensive form validation
   * - Implement loading state during update
   * - Add success/error feedback
   * - Include field-specific validation
   * - Add confirmation dialog for changes
   */
  onUpdateTask(): void {
    if (this.data.taskTitle.trim()) {
      this.updateTask.emit({
        taskId: this.data.taskId,
        taskTitle: this.data.taskTitle,
        taskAssignee: this.data.taskAssignee,
        taskDescription: this.data.taskDescription
      });
    }
  }

  /**
   * Handles modal close event
   * 
   * @description
   * Processes modal close requests and emits an event to notify
   * parent components. This method enables modal closing functionality
   * in task management applications.
   * 
   * @method
   * @public
   * @returns {void} No return value
   * 
   * @example
   * ```typescript
   * // Handle modal close
   * onCloseModal(): void {
   *   // This will emit the closeModal event to parent components
   *   this.closeModal.emit();
   * }
   * ```
   * 
   * @todo
   * - Add unsaved changes warning
   * - Implement close confirmation
   * - Add close animation
   * - Include keyboard escape handling
   */
  onCloseModal(): void {
    this.closeModal.emit();
  }
} 