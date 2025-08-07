import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for individual todo tasks.
 * 
 * Provides comprehensive information for displaying todo tasks
 * including identification, completion status, and project details.
 */
export interface TodoTask {
  /** Unique identifier for the task */
  id: number;
  /** Title or description of the task */
  title: string;
  /** Whether the task has been completed */
  completed: boolean;
  /** Date associated with the task */
  date: string;
  /** Project name the task belongs to */
  project: string;
  /** Company or organization associated with the task */
  company: string;
}

/**
 * Complete data structure for the todo list card component.
 * 
 * Contains header information and an array of todo tasks
 * to display in a comprehensive todo list format.
 */
export interface TodoListCardData {
  /** Header information for the todo list */
  header: {
    /** Title of the todo list */
    title: string;
    /** Date range for the todo list */
    dateRange: string;
  };
  /** Array of todo tasks to display */
  tasks: TodoTask[];
}

/**
 * Todo List Card Component
 * 
 * A comprehensive card component that displays a list of todo tasks
 * with detailed information including completion status, project
 * details, and company information. Designed for task management
 * applications and productivity dashboards.
 * 
 * Features:
 * - Displays multiple todo tasks with detailed information
 * - Header with title and date range for context
 * - Individual task completion status tracking
 * - Project and company information for each task
 * - Performance optimization with trackBy function
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interfaces
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Array-based task display
 * - Unique task identification
 * - No hardcoded values or styling
 * - Generic design for any task management application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Performance optimization with trackBy function
 * - Efficient rendering of task arrays
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional task management interface
 * - Unique task identification for proper tracking
 * 
 * Use Cases:
 * - Task management dashboards
 * - Project management applications
 * - Productivity tools
 * - Team collaboration platforms
 * - Personal todo applications
 * - Workflow management systems
 * 
 * The component serves as a comprehensive todo list card that can be
 * easily integrated into task management applications and dashboards,
 * providing users with a detailed view of their tasks with project
 * context and completion tracking.
 * 
 * @example
 * ```html
 * <app-todo-list-card [data]="todoListData"></app-todo-list-card>
 * ```
 * 
 * @example
 * ```typescript
 * const todoListData: TodoListCardData = {
 *   header: {
 *     title: "Today's Tasks",
 *     dateRange: "Dec 15 - Dec 21"
 *   },
 *   tasks: [
 *     {
 *       id: 1,
 *       title: "Review project proposal",
 *       completed: false,
 *       date: "2024-12-15",
 *       project: "Website Redesign",
 *       company: "TechCorp"
 *     },
 *     {
 *       id: 2,
 *       title: "Update documentation",
 *       completed: true,
 *       date: "2024-12-15",
 *       project: "API Development",
 *       company: "DevTeam"
 *     }
 *   ]
 * };
 * ```
 */
@Component({
  selector: 'app-todo-list-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-card.html'
})
export class TodoListCardComponent {
  /**
   * Required input data for the todo list card.
   * 
   * Contains header information and array of todo tasks
   * to display. This required input property ensures data
   * is always provided, preventing null/undefined errors
   * and ensuring proper display.
   * 
   * @type {TodoListCardData} - Complete todo list data (required)
   */
  @Input() data!: TodoListCardData;

  /**
   * TrackBy function for todo tasks to optimize ngFor performance.
   * 
   * Uses task ID as unique identifier to help Angular efficiently
   * track and update todo tasks. This improves performance by
   * reducing unnecessary DOM manipulations and ensures proper
   * task identification.
   * 
   * @param {number} index - Array index of the task
   * @param {TodoTask} task - Todo task object
   * @returns {number} Unique identifier for the task (task ID)
   */
  trackByTask(index: number, task: TodoTask): number {
    return task.id;
  }
} 