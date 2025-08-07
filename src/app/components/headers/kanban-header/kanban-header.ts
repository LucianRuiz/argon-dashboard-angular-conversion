import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Team Member Interface for Kanban Header
 * 
 * Defines the structure for individual team member data in the kanban header.
 * This interface ensures type safety for team member information display.
 * 
 * @description
 * The team member interface defines all properties needed to display
 * team member information in the kanban header component.
 * 
 * @interface
 * @since 1.0.0
 */
interface TeamMember {
  /** 
   * Unique identifier for the team member
   * @required - Member ID is essential for identification and event handling
   * @example "user-001", "member-123", "dev-456"
   */
  id: string;
  
  /** 
   * Team member's full name or display name
   * @required - Member name provides user identification
   * @example "John Doe", "Jane Smith", "Alex Johnson"
   */
  name: string;
  
  /** 
   * URL or path to the team member's avatar image
   * @required - Avatar image provides visual identification
   * @example "/assets/img/team/john.jpg", "https://example.com/avatar.png"
   */
  avatar: string;
  
  /** 
   * Team member's role or position
   * @required - Role provides professional context
   * @example "Developer", "Designer", "Project Manager", "QA"
   */
  role: string;
}

/**
 * Kanban Header Data Interface
 * 
 * Defines the complete structure for kanban header configuration.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The KanbanHeaderData interface defines all properties needed
 * to display a kanban board header with title, subtitle, and team members.
 * 
 * @interface
 * @since 1.0.0
 */
export interface KanbanHeaderData {
  /** 
   * Main title for the kanban board
   * @required - Board title provides primary context
   * @example "Project Dashboard", "Sprint Board", "Development Tasks"
   */
  title: string;
  
  /** 
   * Subtitle or description for the kanban board
   * @required - Subtitle provides additional context
   * @example "Q1 2024", "Sprint 15", "Feature Development"
   */
  subtitle: string;
  
  /** 
   * Array of team members for the kanban board
   * @required - Team members provide collaboration context
   * @example Array of TeamMember objects with id, name, avatar, and role
   */
  members: TeamMember[];
}

/**
 * Kanban Header Component
 * 
 * A comprehensive header component designed for kanban board interfaces.
 * Displays board information with title, subtitle, team members, and
 * includes functionality for adding new boards.
 * 
 * @description
 * This component creates a professional header for kanban boards that
 * combines board information with team collaboration features. It's ideal
 * for project management tools, agile development platforms, and any
 * kanban-based workflow system.
 * 
 * @features
 * - Board title and subtitle display
 * - Team member avatars and information
 * - Add board functionality
 * - Responsive design
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - Event-driven architecture
 * - Team collaboration support
 * - Interactive member display
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with required properties
 * - Performance optimized
 * - Event emission for parent communication
 * - Unit test friendly
 * - Memory efficient
 * - Scalable team member handling
 * 
 * @usecases
 * - Project management dashboards
 * - Agile development boards
 * - Task management systems
 * - Team collaboration platforms
 * - Workflow management tools
 * - Sprint planning interfaces
 * - Kanban board applications
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-kanban-header 
 *   [data]="{
 *     title: 'Project Dashboard',
 *     subtitle: 'Q1 2024',
 *     members: [
 *       { id: 'dev-1', name: 'John Doe', avatar: '/assets/img/team/john.jpg', role: 'Developer' },
 *       { id: 'dev-2', name: 'Jane Smith', avatar: '/assets/img/team/jane.jpg', role: 'Designer' }
 *     ]
 *   }"
 *   (addBoard)="handleAddBoard()">
 * </app-kanban-header>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { KanbanHeaderComponent, KanbanHeaderData } from './kanban-header.component';
 * 
 * export class KanbanBoardComponent {
 *   kanbanHeaderData: KanbanHeaderData = {
 *     title: 'Sprint Board',
 *     subtitle: 'Sprint 15',
 *     members: [
 *       { id: 'user-1', name: 'Alex Johnson', avatar: '/assets/img/team/alex.jpg', role: 'Scrum Master' },
 *       { id: 'user-2', name: 'Sarah Wilson', avatar: '/assets/img/team/sarah.jpg', role: 'Developer' }
 *     ]
 *   };
 * 
 *   handleAddBoard(): void {
 *     // Handle add board logic
 *     console.log('Adding new board');
 *   }
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-kanban-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kanban-header.html'
})
export class KanbanHeaderComponent {
  /**
   * Kanban header configuration data
   * 
   * @description
   * Required input property that defines the kanban board's information
   * including title, subtitle, and team members. All properties are
   * mandatory for proper kanban header display.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {KanbanHeaderData}
   * 
   * @example
   * ```typescript
   * data: KanbanHeaderData = {
   *   title: 'Project Dashboard',
   *   subtitle: 'Q1 2024',
   *   members: [
   *     { id: 'dev-1', name: 'John Doe', avatar: '/assets/img/team/john.jpg', role: 'Developer' }
   *   ]
   * };
   * ```
   */
  @Input() data!: KanbanHeaderData;

  /**
   * Event emitter for add board functionality
   * 
   * @description
   * Output event that is emitted when the user clicks the "Add Board" button.
   * Parent components can listen to this event to handle board creation logic.
   * 
   * @output
   * @type {EventEmitter<void>}
   * 
   * @example
   * ```html
   * <app-kanban-header (addBoard)="handleAddBoard()"></app-kanban-header>
   * ```
   */
  @Output() addBoard = new EventEmitter<void>();

  /**
   * Handles the add board button click event
   * 
   * @description
   * Processes user clicks on the "Add Board" button and emits an event
   * to notify parent components. This method enables board creation
   * functionality in kanban applications.
   * 
   * @method
   * @public
   * @returns {void} No return value
   * 
   * @example
   * ```typescript
   * // Handle add board click
   * onAddBoard(): void {
   *   // This will emit the addBoard event to parent components
   *   this.addBoard.emit();
   * }
   * ```
   * 
   * @todo
   * - Add loading state during board creation
   * - Implement board creation validation
   * - Add success/error feedback
   * - Include board template selection
   */
  onAddBoard(): void {
    this.addBoard.emit();
  }
} 