import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * AUTHORS TABLE COMPONENT
 * ========================================
 *
 * A reusable table component for displaying a list of authors with avatars,
 * contact information, roles, status, and actions. Designed for dashboards
 * and admin panels with Tailwind CSS styling.
 *
 * FEATURES:
 * - Displays author avatar, name, email, function, department, status, and employment date
 * - Action buttons for edit and delete
 * - Status color coding
 * - Event emitters for row actions
 * - Performance optimization with trackBy
 * - Responsive design with Tailwind CSS
 *
 * USAGE:
 * <app-authors-table [authors]="authorsList" (authorAction)="onAuthorAction($event)"></app-authors-table>
 *
 * REUSABILITY: High - Generic table for user/author data
 * COMPLEXITY: Low - Simple data table with actions
 */

/**
 * Data structure for author row in the table.
 * Provides all information required to display an author.
 */
export interface AuthorData {
  /** URL for the author's avatar image */
  avatar: string;
  /** Author's full name */
  name: string;
  /** Author's email address */
  email: string;
  /** Author's function or job title */
  function: string;
  /** Department or team */
  department: string;
  /** Online/offline status */
  status: 'Online' | 'Offline';
  /** Tailwind color class for status */
  statusColor: string;
  /** Employment date or string */
  employed: string;
}

@Component({
  selector: 'app-authors-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authors-table.html'
})
export class AuthorsTableComponent {
  /**
   * List of authors to display in the table.
   *
   * @type {AuthorData[]} - Array of author data
   * @default [] - Empty array by default
   */
  @Input() authors: AuthorData[] = [];

  /**
   * Event emitted when an action (edit/delete) is triggered for an author.
   *
   * @type {EventEmitter<{action: string, author: AuthorData}>}
   */
  @Output() authorAction = new EventEmitter<{action: string, author: AuthorData}>();

  /**
   * trackBy function for ngFor to optimize rendering performance.
   * Uses author email as unique identifier.
   *
   * @param index - Array index
   * @param author - Author data object
   * @returns {string} - Unique identifier for the author
   */
  trackByAuthor(index: number, author: AuthorData): string {
    return author.email;
  }

  /**
   * Handles action button clicks for an author row.
   * Emits the action and author data to the parent component.
   *
   * @param author - The author for which the action is triggered
   * @param action - The action type ('edit' or 'delete')
   */
  onAuthorAction(author: AuthorData, action: 'edit' | 'delete'): void {
    this.authorAction.emit({ action, author });
  }

  /**
   * Maps the status to Tailwind CSS classes for consistent styling.
   *
   * @param status - The status string ('Online' or 'Offline')
   * @returns {string} - Tailwind CSS classes for status badge
   */
  getStatusClass(status: string): string {
    switch (status) {
      case 'Online':
        return 'bg-emerald-200 text-emerald-600';
      case 'Offline':
        return 'bg-slate-100 text-slate-600';
      default:
        return 'bg-slate-100 text-slate-600';
    }
  }
} 
