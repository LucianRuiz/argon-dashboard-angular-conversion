import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * New Board Modal Data Interface
 * 
 * Defines the structure for new board modal configuration data.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The NewBoardModalData interface defines all properties needed
 * to display and configure a new board creation modal.
 * 
 * @interface
 * @since 1.0.0
 */
export interface NewBoardModalData {
  /** 
   * Whether the modal is currently open
   * @required - Modal state determines visibility
   * @example true, false
   */
  isOpen: boolean;
  
  /** 
   * Name for the new board
   * @required - Board name provides identification
   * @example "Project Alpha", "Sprint 15", "Feature Development"
   */
  boardName: string;
}

/**
 * New Board Event Interface
 * 
 * Defines the structure for new board creation events.
 * This interface ensures type safety for event handling and data transfer.
 * 
 * @description
 * The NewBoardEvent interface defines the data structure that is
 * emitted when a new board is created through the modal.
 * 
 * @interface
 * @since 1.0.0
 */
export interface NewBoardEvent {
  /** 
   * Name of the board being created
   * @required - Board name is essential for board creation
   * @example "Project Alpha", "Sprint 15", "Feature Development"
   */
  boardName: string;
}

/**
 * New Board Modal Component
 * 
 * A modal component designed for creating new boards in Kanban
 * and project management interfaces. Provides form-based board
 * creation with validation and event-driven board creation.
 * 
 * @description
 * This component creates a professional modal dialog that allows
 * users to create new boards with proper validation. It's ideal
 * for Kanban applications, project management tools, and any
 * application that requires board creation functionality.
 * 
 * @features
 * - New board creation form
 * - Modal open/close functionality
 * - Form validation (non-empty board name)
 * - Event-driven board creation
 * - Responsive design
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - Clean, professional interface
 * - Input validation
 * - User-friendly feedback
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
 * - Kanban board creation
 * - Project management tools
 * - Task management systems
 * - Agile development boards
 * - Workflow management systems
 * - Team collaboration platforms
 * - Board-based applications
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-new-board-modal 
 *   [data]="boardModalData"
 *   (createBoard)="handleCreateBoard($event)"
 *   (closeModal)="handleCloseModal()">
 * </app-new-board-modal>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { NewBoardModalComponent, NewBoardModalData, NewBoardEvent } from './new-board-modal.component';
 * 
 * export class KanbanBoardComponent {
 *   boardModalData: NewBoardModalData = {
 *     isOpen: true,
 *     boardName: ''
 *   };
 * 
 *   handleCreateBoard(event: NewBoardEvent): void {
 *     console.log('Creating board:', event.boardName);
 *     // Create board in backend
 *   }
 * 
 *   handleCloseModal(): void {
 *     this.boardModalData.isOpen = false;
 *   }
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-new-board-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-board-modal.html'
})
export class NewBoardModalComponent {
  /**
   * New board modal configuration data
   * 
   * @description
   * Required input property that defines the modal state and board
   * name. Contains modal visibility and form data.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {NewBoardModalData}
   * 
   * @example
   * ```typescript
   * data: NewBoardModalData = {
   *   isOpen: true,
   *   boardName: 'New Project'
   * };
   * ```
   */
  @Input() data!: NewBoardModalData;

  /**
   * Event emitter for board creation
   * 
   * @description
   * Output event that is emitted when a new board is created.
   * Parent components can listen to this event to handle board
   * creation and persist the new board.
   * 
   * @output
   * @type {EventEmitter<NewBoardEvent>}
   * 
   * @example
   * ```html
   * <app-new-board-modal (createBoard)="handleCreateBoard($event)"></app-new-board-modal>
   * ```
   */
  @Output() createBoard = new EventEmitter<NewBoardEvent>();

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
   * <app-new-board-modal (closeModal)="handleCloseModal()"></app-new-board-modal>
   * ```
   */
  @Output() closeModal = new EventEmitter<void>();

  /**
   * Handles new board creation with validation
   * 
   * @description
   * Processes board creation form submission with validation to ensure
   * the board name is not empty. Emits a creation event with the
   * board name when validation passes.
   * 
   * @method
   * @public
   * @returns {void} No return value
   * 
   * @example
   * ```typescript
   * // Handle board creation
   * onCreateBoard(): void {
   *   // Validates board name and emits creation event
   *   if (this.data.boardName.trim()) {
   *     this.createBoard.emit({ boardName: this.data.boardName });
   *   }
   * }
   * ```
   * 
   * @todo
   * - Add more comprehensive form validation
   * - Implement loading state during creation
   * - Add success/error feedback
   * - Include board name uniqueness check
   * - Add board template selection
   */
  onCreateBoard(): void {
    if (this.data.boardName.trim()) {
      this.createBoard.emit({ boardName: this.data.boardName });
    }
  }

  /**
   * Handles modal close event
   * 
   * @description
   * Processes modal close requests and emits an event to notify
   * parent components. This method enables modal closing functionality
   * in board management applications.
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