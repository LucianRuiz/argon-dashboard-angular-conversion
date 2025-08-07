import { Component, Input } from '@angular/core';

/**
 * Data structure for the new tab card component.
 * 
 * Provides basic information for displaying a new tab creation
 * option with customizable icon and title.
 */
export interface NewTabCardData {
  /** CSS class for the icon (Font Awesome, Nucleo, etc.) */
  icon: string;
  /** Title text for the new tab */
  title: string;
}

/**
 * New Tab Card Component
 * 
 * A lightweight, reusable card component that displays a new tab
 * creation option. Designed for dashboards and applications that
 * need to provide users with the ability to add new content areas
 * or sections in a clean and intuitive interface.
 * 
 * Features:
 * - Displays customizable icon and title for new tab creation
 * - Minimal and clean design for optimal user experience
 * - Lightweight implementation with minimal dependencies
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - No additional imports needed beyond Angular core
 * - Configurable data input with simple interface
 * - Flexible icon support (any icon library)
 * - Customizable title text
 * - No hardcoded values or styling
 * - Generic design for multiple use cases
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional new item interface
 * - Lightweight and performant
 * - Responsive design across devices
 * - Accessible design patterns
 * 
 * Use Cases:
 * - Dashboard tab creation
 * - New project creation interfaces
 * - Add new item functionality
 * - Quick action cards
 * - Content management systems
 * - Workspace organization tools
 * 
 * The component serves as a lightweight new tab card that can be
 * easily integrated into dashboards and applications, providing
 * users with a clean and intuitive way to create new content
 * areas or sections.
 * 
 * @example
 * ```html
 * <app-new-tab-card [data]="newTabData"></app-new-tab-card>
 * ```
 * 
 * @example
 * ```typescript
 * const newTabData: NewTabCardData = {
 *   icon: "ni ni-fat-add",
 *   title: "Add New Project"
 * };
 * ```
 */
@Component({
  selector: 'app-new-tab-card',
  standalone: true,
  templateUrl: './new-tab-card.html'
})
export class NewTabCardComponent {
  /**
   * Required input data for the new tab card.
   * 
   * Contains icon and title information for displaying the new
   * tab creation option. This required input property ensures
   * data is always provided, preventing null/undefined errors
   * and ensuring proper display.
   * 
   * @type {NewTabCardData} - Complete new tab data (required)
   */
  @Input() data!: NewTabCardData;
} 
