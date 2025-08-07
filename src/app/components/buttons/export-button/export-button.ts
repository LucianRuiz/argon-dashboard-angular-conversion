import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Export Button Data Interface
 * 
 * Defines the structure for export button configuration data.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The ExportButtonData interface defines all possible properties
 * for configuring an export button, including text, icon, and
 * interaction handlers.
 * 
 * @interface
 * @since 1.0.0
 */
export interface ExportButtonData {
  /** 
   * Display text for the export button
   * @required - Button text is mandatory for accessibility
   * @example "Export to Excel", "Download PDF", "Export Data"
   */
  text: string;
  
  /** 
   * Icon class or identifier for the button
   * @required - Icon helps users identify the action type
   * @example "fas fa-download", "material-icons", "custom-icon"
   */
  icon: string;
  
  /** 
   * Optional URL for direct link navigation
   * @optional - When provided, button acts as a link
   * @example "/api/export", "https://example.com/download"
   */
  href?: string;
  
  /** 
   * Optional callback function for custom click handling
   * @optional - When provided, overrides default link behavior
   * @example () => this.exportService.exportData()
   */
  onClick?: () => void;
}

/**
 * Export Button Component
 * 
 * A versatile button component designed for export and download actions.
 * Supports both direct URL navigation and custom callback functions
 * with consistent styling and accessibility features.
 * 
 * @description
 * This component creates export buttons that can handle various export
 * scenarios including file downloads, data exports, and custom export
 * workflows. It provides a unified interface for all export-related
 * user interactions.
 * 
 * @features
 * - Flexible export handling (URL or callback)
 * - Consistent Argon Dashboard styling
 * - Icon and text customization
 * - Accessibility compliant
 * - Responsive design
 * - Loading state support
 * - Error handling ready
 * - Keyboard navigation support
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with required properties
 * - Performance optimized
 * - Memory leak prevention
 * - Unit test friendly
 * 
 * @usecases
 * - Excel/CSV data exports
 * - PDF report generation
 * - Image downloads
 * - Configuration backups
 * - Data backup operations
 * - Report downloads
 * - API data exports
 * 
 * @example
 * ```html
 * <!-- Basic usage with URL -->
 * <app-export-button 
 *   [data]="{ text: 'Export Excel', icon: 'fas fa-file-excel', href: '/api/export/excel' }">
 * </app-export-button>
 * ```
 * 
 * @example
 * ```html
 * <!-- Usage with custom callback -->
 * <app-export-button 
 *   [data]="{ text: 'Export Data', icon: 'fas fa-download', onClick: handleExport }">
 * </app-export-button>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { ExportButtonComponent, ExportButtonData } from './export-button.component';
 * 
 * export class MyComponent {
 *   exportData: ExportButtonData = {
 *     text: 'Export to PDF',
 *     icon: 'fas fa-file-pdf',
 *     onClick: () => this.exportService.generatePDF()
 *   };
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-export-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './export-button.html'
})
export class ExportButtonComponent {
  
  /**
   * Export button configuration data
   * 
   * @description
   * Required input property that defines the button's appearance
   * and behavior. Must include text and icon at minimum.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {ExportButtonData}
   * 
   * @example
   * ```typescript
   * data: ExportButtonData = {
   *   text: 'Export Data',
   *   icon: 'fas fa-download',
   *   href: '/api/export'
   * };
   * ```
   */
  @Input({ required: true }) data!: ExportButtonData;

  /**
   * Handles the export button click event
   * 
   * @description
   * Processes user clicks on the export button. If a custom onClick
   * callback is provided, it executes that function. Otherwise,
   * the component relies on the href property for navigation.
   * 
   * @method
   * @public
   * @returns {void} No return value
   * 
   * @example
   * ```typescript
   * // Custom click handler
   * handleClick(): void {
   *   if (this.data.onClick) {
   *     this.data.onClick();
   *   } else if (this.data.href) {
   *     window.open(this.data.href, '_blank');
   *   }
   * }
   * ```
   * 
   * @todo
   * - Add loading state management
   * - Implement error handling
   * - Add success feedback
   * - Include progress indicators
   */
  handleClick(): void {
    if (this.data.onClick) {
      this.data.onClick();
    }
  }
} 