import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing a project item in the projects table
 * Defines the structure for project data including name, logo, budget, status, and completion metrics
 */
export interface ProjectItem {
  /** Project name/title */
  name: string;
  /** URL or path to project logo image */
  logo: string;
  /** Project budget amount (formatted string) */
  budget: string;
  /** Current project status (e.g., 'In Progress', 'Completed') */
  status: string;
  /** Tailwind CSS class for status indicator color */
  statusColor: string;
  /** Completion percentage (0-100) */
  completion: number;
  /** Tailwind CSS class for progress bar color */
  completionColor: string;
  /** Tailwind CSS class for progress bar width */
  completionWidth: string;
}

/**
 * Projects Table Component
 * 
 * A reusable table component for displaying project information with:
 * - Project details (name, logo, budget)
 * - Status indicators with color coding
 * - Progress bars showing completion percentage
 * - Action menu for each project
 * 
 * Features:
 * - Responsive design with dark mode support
 * - Optimized rendering with trackBy function
 * - Event-driven actions for project management
 * - Accessible progress bars with ARIA attributes
 * 
 * Usage:
 * ```html
 * <app-projects-table 
 *   [projects]="projectList"
 *   (projectAction)="handleProjectAction($event)">
 * </app-projects-table>
 * ```
 */
@Component({
  selector: 'app-projects-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-table.html'
})
export class ProjectsTableComponent {
  /** Array of project items to display in the table */
  @Input() projects: ProjectItem[] = [];
  
  /** Event emitter for project actions (menu, edit, delete, etc.) */
  @Output() projectAction = new EventEmitter<{action: string, project: ProjectItem}>();

  /**
   * TrackBy function for optimizing *ngFor rendering performance
   * Uses project name as unique identifier for change detection
   * 
   * @param index - Current item index
   * @param project - Project item object
   * @returns Unique identifier for the project
   */
  trackByProject(index: number, project: ProjectItem): string {
    return project.name;
  }

  /**
   * Handles project action events and emits them to parent component
   * Used for menu actions, editing, deletion, or other project operations
   * 
   * @param project - The project item that triggered the action
   * @param action - The action type (e.g., 'menu', 'edit', 'delete')
   */
  onProjectAction(project: ProjectItem, action: string): void {
    this.projectAction.emit({ action, project });
  }
} 
