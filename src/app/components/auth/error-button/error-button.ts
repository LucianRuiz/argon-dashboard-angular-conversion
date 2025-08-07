import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Error Button Data Interface
 * 
 * Defines the structure for error button configuration data.
 * Contains all text content, styling, and navigation options
 * for the error button component.
 */
export interface ErrorButtonData {
  /** Text to display on the error button */
  buttonText: string;
  /** URL for the button navigation */
  buttonLink: string;
  /** Optional CSS classes for custom styling */
  buttonClass?: string;
}

/**
 * Error Button Component
 * 
 * This component implements a generic action button specifically
 * designed for error pages. It provides a customizable button
 * with navigation capabilities and consistent styling across
 * different error scenarios.
 * 
 * Features:
 * - Customizable button text and navigation link
 * - Optional custom CSS classes for styling
 * - Router integration for navigation
 * - Responsive design for various screen sizes
 * - Dark theme compatibility
 * - Consistent styling with original design
 * - Reusable across different error page types
 * - TypeScript interfaces for type safety
 * - Standalone component for easy integration
 * - Inline template for simplicity
 * - Professional gradient styling
 * - Hover and active state animations
 * 
 * The component serves as a reusable error action button that can be
 * easily integrated into error pages, providing users with a clear
 * way to navigate away from error states with consistent styling
 * and behavior across the application.
 * 
 * @example
 * ```html
 * <app-error-button 
 *   [buttonText]="'Go to Homepage'" 
 *   [buttonLink]="'/dashboards/default'">
 * </app-error-button>
 * ```
 */
@Component({
  selector: 'app-error-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a [routerLink]="buttonLink" 
       [class]="buttonClass">
      {{ buttonText }}
    </a>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ErrorButtonComponent {
  /**
   * Text to display on the error button.
   * 
   * Provides the button label that users will see and click on.
   * This input property allows customization of the button text
   * for different error scenarios.
   * 
   * @type {string} - Button display text
   */
  @Input() buttonText: string = 'Go to Homepage';

  /**
   * URL for the button navigation.
   * 
   * Specifies the route that users will be navigated to when
   * clicking the error button. This input property allows
   * customization of the navigation destination.
   * 
   * @type {string} - Navigation URL
   */
  @Input() buttonLink: string = '/dashboards/default';

  /**
   * Optional CSS classes for custom styling.
   * 
   * Provides additional CSS classes for customizing the button
   * appearance. If not provided, the component uses a default
   * professional gradient styling.
   * 
   * @type {string} - CSS classes for styling
   */
  @Input() buttonClass: string = 'inline-block px-5 py-2.5 mt-6 mb-2 text-sm font-bold text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer active:-translate-y-px active:hover:text-white hover:-translate-y-px hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25 bg-gradient-to-tl from-zinc-800 to-zinc-700 hover:text-white';
} 