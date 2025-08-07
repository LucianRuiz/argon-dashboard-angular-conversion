import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing a category item
 * Defines the structure for individual category data with visual properties
 */
export interface Category {
  /** Icon identifier for the category (used in SVG title) */
  icon: string;
  /** Category title/name */
  title: string;
  /** Category description or subtitle */
  description: string;
  /** Tailwind CSS gradient classes for category color */
  color: string;
}

/**
 * Interface representing categories widget data
 * Contains widget configuration and category list
 */
export interface CategoriesWidgetData {
  /** Widget title displayed in the header */
  title: string;
  /** Array of categories to display */
  categories: Category[];
}

/**
 * Categories Widget Component
 * 
 * A specialized widget for displaying categories with custom SVG icons and gradient colors.
 * Features a modern design with embedded SVG graphics and hover effects.
 * 
 * Features:
 * - Custom SVG icon integration with embedded graphics
 * - Gradient color backgrounds for each category
 * - Responsive design with dark mode support
 * - Hover effects on action buttons
 * - Clean list layout with proper spacing
 * - Smooth transitions and animations
 * - Accessible design with proper contrast
 * 
 * Visual Elements:
 * - Embedded SVG icons with complex graphics
 * - Gradient backgrounds using Tailwind CSS classes
 * - Hover animations on navigation arrows
 * - Dark mode adaptation for all elements
 * 
 * Usage:
 * ```html
 * <app-categories-widget [data]="categoriesData"></app-categories-widget>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const categoriesData: CategoriesWidgetData = {
 *   title: 'Product Categories',
 *   categories: [
 *     {
 *       icon: 'Electronics',
 *       title: 'Electronics',
 *       description: 'Smart devices and gadgets',
 *       color: 'from-blue-500 to-violet-500'
 *     }
 *   ]
 * };
 * ```
 */
@Component({
  selector: 'app-categories-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-widget.html'
})
export class CategoriesWidgetComponent {
  /** Categories widget data including title and category list */
  @Input() data!: CategoriesWidgetData;
} 
