import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing step widget data structure
 * 
 * @description This interface defines the structure for displaying step information
 * in a widget format. It includes a title, value, and a badge with customizable
 * text and color. This data is typically used in dashboards, progress indicators,
 * or step-by-step guides to show current status or progress information.
 * 
 * @interface StepsWidgetData
 * @property {string} title - The main title or label for the step
 * @property {string} value - The current value or status of the step
 * @property {object} badge - Badge configuration object
 * @property {string} badge.text - The text to display in the badge
 * @property {string} badge.color - The color class for the badge styling
 * 
 * @example
 * ```typescript
 * const stepData: StepsWidgetData = {
 *   title: 'Current Step',
 *   value: 'Step 2 of 5',
 *   badge: {
 *     text: 'Active',
 *     color: 'bg-green-500'
 *   }
 * };
 * ```
 * 
 * @since 1.0.0
 * @author Argon Dashboard Team
 */
export interface StepsWidgetData {
  title: string;
  value: string;
  badge: {
    text: string;
    color: string;
  };
}

/**
 * Steps Widget Component for Displaying Step Information
 * 
 * @description A standalone Angular component that displays step information
 * in a widget format. This component is designed to show current progress,
 * step status, or any step-related information with a clean, card-based layout
 * that includes a title, value, and a colored badge for status indication.
 * 
 * @component StepsWidgetComponent
 * @selector app-steps-widget
 * 
 * @features
 * - Clean widget layout with card design
 * - Customizable badge with text and color
 * - Responsive design
 * - Title and value display
 * - Status indication through badges
 * - Standalone component architecture
 * 
 * @inputs
 * - data: StepsWidgetData - The step information data model
 * 
 * @example
 * ```html
 * <app-steps-widget [data]="currentStepData"></app-steps-widget>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * currentStepData: StepsWidgetData = {
 *   title: 'Onboarding Progress',
 *   value: 'Step 3 of 6',
 *   badge: {
 *     text: 'In Progress',
 *     color: 'bg-blue-500'
 *   }
 * };
 * ```
 * 
 * @quality
 * - Standalone component for better tree-shaking
 * - Type-safe with TypeScript interfaces
 * - Clean and reusable design
 * - Consistent with dashboard widget patterns
 * - Minimal dependencies
 * 
 * @useCases
 * - Dashboard progress indicators
 * - Multi-step form progress
 * - Onboarding status displays
 * - Workflow progress tracking
 * - Task completion status
 * - Process step indicators
 * - User journey progress
 * 
 * @since 1.0.0
 * @author Argon Dashboard Team
 */
@Component({
  selector: 'app-steps-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './steps-widget.html'
})
export class StepsWidgetComponent {
  /**
   * Step information data model
   * 
   * @description Input property that receives the StepsWidgetData object containing
   * the step information to be displayed. This includes the title, value, and
   * badge configuration for the widget.
   * 
   * @type {StepsWidgetData}
   * @required
   */
  @Input() data!: StepsWidgetData;
} 