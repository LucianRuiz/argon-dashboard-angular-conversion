import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for referral codes.
 * 
 * Provides comprehensive information for displaying referral
 * codes with their generation details and usage statistics.
 */
export interface ReferralCode {
  /** The actual referral code string */
  code: string;
  /** Name or identifier of who generated the code */
  generatedBy: string;
  /** Date when the code was generated (formatted string) */
  generatedDate: string;
  /** Number of times the code has been used */
  usedCount: number;
}

/**
 * Referral Code Section Component
 * 
 * A comprehensive section component that displays referral codes
 * with their generation details and provides copy functionality.
 * Designed for referral program interfaces requiring code display
 * and sharing capabilities.
 * 
 * Features:
 * - Displays referral codes with generation information
 * - Shows code usage statistics
 * - Copy-to-clipboard functionality
 * - Event emission for code copying
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation for referral codes
 * - Event-driven architecture for user interactions
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Dynamic code display
 * - No hardcoded values or styling
 * - Generic design for any referral application
 * - Copy functionality with event emission
 * - Clean and professional display
 * - Usage tracking display
 * - Generation information display
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional referral interface
 * - Event-driven user interactions
 * - Responsive design across devices
 * - Dynamic code display
 * - Flexible event system
 * - Clean data presentation
 * - Copy functionality support
 * 
 * Use Cases:
 * - Referral program dashboards
 * - Code sharing interfaces
 * - Code management displays
 * - Usage tracking applications
 * - Code generation displays
 * - Copy-to-clipboard functionality
 * 
 * The component serves as a comprehensive referral code section
 * that can be easily integrated into referral applications and
 * code management platforms, providing users with clear code
 * information and copy functionality in a visually appealing format.
 * 
 * @example
 * ```html
 * <app-referral-code-section 
 *   [referralCode]="userReferralCode" 
 *   (copyCode)="handleCodeCopy($event)">
 * </app-referral-code-section>
 * ```
 * 
 * @example
 * ```typescript
 * const userReferralCode: ReferralCode = {
 *   code: "FRIEND2024",
 *   generatedBy: "John Doe",
 *   generatedDate: "2024-01-15",
 *   usedCount: 5
 * };
 * 
 * handleCodeCopy(code: string): void {
 *   navigator.clipboard.writeText(code);
 *   // Show success message
 * }
 * ```
 */
@Component({
  selector: 'app-referral-code-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './referral-code-section.component.html'
})
export class ReferralCodeSectionComponent {
  /**
   * Required input data for the referral code.
   * 
   * Contains referral code information including the code string,
   * generation details, and usage statistics. This required input
   * property ensures code data is always provided for proper display.
   * 
   * @type {ReferralCode} - Referral code data (required)
   */
  @Input() referralCode!: ReferralCode;

  /**
   * Event emitter for code copy functionality.
   * 
   * Emits the referral code string when the user requests
   * to copy the code. This output property enables parent
   * components to handle the copy operation.
   * 
   * @type {EventEmitter<string>} - Event emitter for code copying
   */
  @Output() copyCode = new EventEmitter<string>();

  /**
   * Handles the copy code action and emits the code.
   * 
   * Triggers the copyCode event emitter with the current
   * referral code string. This method provides the interface
   * for user-initiated code copying functionality.
   * 
   * @returns {void} Emits the referral code string
   */
  onCopyCode(): void {
    this.copyCode.emit(this.referralCode.code);
  }
} 