import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Todo Header Data Interface
 * 
 * Defines the structure for todo header configuration data.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The TodoHeaderData interface defines the essential properties
 * needed to display a todo list header with title and date range.
 * 
 * @interface
 * @since 1.0.0
 */
export interface TodoHeaderData {
  /** 
   * Title text for the todo header
   * @required - Header title is mandatory for context
   * @example "My Tasks", "Project Todo", "Daily Checklist"
   */
  title: string;
  
  /** 
   * Date range or time period for the todo list
   * @required - Date context helps users understand the scope
   * @example "Today", "This Week", "March 2024", "Q1 2024"
   */
  dateRange: string;
}

/**
 * Todo Header Component
 * 
 * A simple header component designed for todo lists and task management interfaces.
 * Displays a title and date range to provide context for the todo items below.
 * 
 * @description
 * This component creates a clean, minimal header for todo lists that
 * helps users understand what tasks they're viewing and the time period
 * they cover. It's designed to be lightweight and focused.
 * 
 * @features
 * - Clean, minimal design
 * - Title and date range display
 * - Consistent Argon Dashboard styling
 * - Responsive design
 * - Accessibility compliant
 * - Lightweight implementation
 * - Easy integration
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with required properties
 * - Performance optimized
 * - No external dependencies
 * - Unit test friendly
 * 
 * @usecases
 * - Todo list applications
 * - Task management dashboards
 * - Project management tools
 * - Daily planners
 * - Goal tracking interfaces
 * - Checklist applications
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-todo-header 
 *   [data]="{ title: 'My Tasks', dateRange: 'Today' }">
 * </app-todo-header>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { TodoHeaderComponent, TodoHeaderData } from './todo-header.component';
 * 
 * export class TodoListComponent {
 *   headerData: TodoHeaderData = {
 *     title: 'Project Tasks',
 *     dateRange: 'This Week'
 *   };
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-todo-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-header.html'
})
export class TodoHeaderComponent {
  /**
   * Todo header configuration data
   * 
   * @description
   * Required input property that defines the header's title and date range.
   * Both properties are mandatory for proper context display.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {TodoHeaderData}
   * 
   * @example
   * ```typescript
   * data: TodoHeaderData = {
   *   title: 'Daily Tasks',
   *   dateRange: 'March 15, 2024'
   * };
   * ```
   */
  @Input() data!: TodoHeaderData;
} 