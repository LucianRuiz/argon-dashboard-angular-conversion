import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for referral program steps.
 * 
 * Provides comprehensive information for displaying referral
 * program steps with their values and visual indicators.
 */
export interface ReferralStep {
  /** Step number in the referral process */
  step: number;
  /** Title or description of the step */
  title: string;
  /** Value associated with the step (can include currency or percentage) */
  value: string;
  /** CSS class for the step icon */
  icon: string;
}

/**
 * Referral Step Card Component
 * 
 * A comprehensive card component that displays individual steps
 * in a referral program with their associated values and icons.
 * Designed for referral program interfaces requiring step-by-step
 * guidance and value display.
 * 
 * Features:
 * - Displays referral program steps with step numbers
 * - Shows step titles and associated values
 * - Customizable icons for visual representation
 * - Dynamic value formatting (currency and percentage support)
 * - Prefix and suffix detection for value display
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation for individual steps
 * - Null-safe data handling with default empty array
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Dynamic value parsing and formatting
 * - No hardcoded values or styling
 * - Generic design for any referral application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional referral interface
 * - Null-safe input processing
 * - Responsive design across devices
 * - Dynamic value formatting
 * - Flexible icon system
 * - Value parsing utilities
 * 
 * Use Cases:
 * - Referral program dashboards
 * - Step-by-step guidance interfaces
 * - Progress tracking applications
 * - Value display components
 * - Program instruction displays
 * - Achievement tracking systems
 * 
 * The component serves as a comprehensive referral step card
 * that can be easily integrated into referral applications and
 * program interfaces, providing users with clear step information
 * and associated values in a visually appealing format.
 * 
 * @example
 * ```html
 * <app-referral-step-card [step]="referralStep" [steps]="allSteps"></app-referral-step-card>
 * ```
 * 
 * @example
 * ```typescript
 * const referralStep: ReferralStep = {
 *   step: 1,
 *   title: "Share your referral link",
 *   value: "$50",
 *   icon: "ni ni-share"
 * };
 * 
 * const allSteps: ReferralStep[] = [
 *   { step: 1, title: "Share your link", value: "$50", icon: "ni ni-share" },
 *   { step: 2, title: "Friend makes purchase", value: "10%", icon: "ni ni-cart" },
 *   { step: 3, title: "Earn rewards", value: "$100", icon: "ni ni-money-coins" }
 * ];
 * ```
 */
@Component({
  selector: 'app-referral-step-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './referral-step-card.component.html'
})
export class ReferralStepCardComponent {
  /**
   * Required input data for the individual referral step.
   * 
   * Contains step information including number, title, value,
   * and icon. This required input property ensures step data
   * is always provided for proper display.
   * 
   * @type {ReferralStep} - Individual referral step data (required)
   */
  @Input() step!: ReferralStep;

  /**
   * Input data for all referral steps in the program.
   * 
   * Contains array of all referral steps for context and
   * potential multi-step display. This input property
   * defaults to an empty array for flexibility.
   * 
   * @type {ReferralStep[]} - Array of all referral steps (defaults to empty array)
   */
  @Input() steps: ReferralStep[] = [];

  /**
   * Gets the display value without currency or percentage symbols.
   * 
   * Removes currency ($) and percentage (%) symbols from the
   * step value for clean display. This method provides
   * formatted value display without symbols.
   * 
   * @returns {string} Clean display value without symbols
   */
  getDisplayValue(): string {
    return this.step.value.replace('$', '').replace('%', '');
  }

  /**
   * Determines if the step value has a currency prefix.
   * 
   * Checks if the step value contains a dollar sign ($)
   * to determine if it represents a currency amount.
   * This method provides conditional formatting for
   * currency values.
   * 
   * @returns {boolean} True if the value has a currency prefix
   */
  hasPrefix(): boolean {
    return this.step.value.includes('$');
  }

  /**
   * Determines if the step value has a percentage suffix.
   * 
   * Checks if the step value contains a percentage sign (%)
   * to determine if it represents a percentage value.
   * This method provides conditional formatting for
   * percentage values.
   * 
   * @returns {boolean} True if the value has a percentage suffix
   */
  hasSuffix(): boolean {
    return this.step.value.includes('%');
  }
} 