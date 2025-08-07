import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing a category item
 * Defines the structure for individual category data
 */
export interface CategoryItem {
  /** Unique identifier for the category */
  id: string;
  /** CSS class name for the category icon (Nucleo Icons) */
  icon: string;
  /** Tailwind CSS class for icon color styling */
  iconColor: string;
  /** Category title/name */
  title: string;
  /** Category subtitle or description */
  subtitle: string;
  /** Number of companies or items in this category */
  companies: string;
}

/**
 * Categories Component
 * 
 * A list-based widget for displaying categories with icons, descriptions, and action buttons.
 * Ideal for organizing and navigating through different content categories or business sectors.
 * 
 * Features:
 * - Category list with icon and text display
 * - Customizable title for the widget
 * - Action buttons for each category
 * - Optimized rendering with trackBy function
 * - Responsive design with dark mode support
 * - Hover effects and smooth transitions
 * - Icon integration with Nucleo Icons
 * - Event-driven actions for category interactions
 * 
 * Category Actions:
 * - View: Navigate to category details or view category content
 * - Custom actions can be added through the event emitter
 * 
 * Usage:
 * ```html
 * <app-categories 
 *   [title]="'Business Categories'"
 *   [categories]="categoryList"
 *   (categoryAction)="handleCategoryAction($event)">
 * </app-categories>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const categoryList: CategoryItem[] = [
 *   {
 *     id: 'tech',
 *     icon: 'ni-laptop',
 *     iconColor: 'text-blue-500',
 *     title: 'Technology',
 *     subtitle: 'Software & IT Services',
 *     companies: '150'
 *   }
 * ];
 * ```
 */
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.html'
})
export class CategoriesComponent {
  /** Widget title displayed in the header (default: 'Categories') */
  @Input() title: string = 'Categories';
  
  /** Array of category items to display */
  @Input() categories: CategoryItem[] = [];
  
  /** Event emitter for category actions (view, edit, delete, etc.) */
  @Output() categoryAction = new EventEmitter<{action: string, category: CategoryItem}>();

  /**
   * TrackBy function for optimizing *ngFor rendering performance
   * Uses category ID as unique identifier for change detection
   * 
   * @param index - Current item index
   * @param category - Category item object
   * @returns Unique identifier for the category
   */
  trackByCategory(index: number, category: CategoryItem): string {
    return category.id;
  }

  /**
   * Handle category action events and emit them to parent component
   * Used for view, edit, delete, or other category operations
   * 
   * @param category - The category item that triggered the action
   * @param action - The action type (e.g., 'view', 'edit', 'delete')
   */
  onCategoryAction(category: CategoryItem, action: string): void {
    this.categoryAction.emit({ action, category });
  }
} 
