import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Pricing Header Component
 * 
 * A header component designed for pricing pages that includes billing period
 * toggle functionality. Allows users to switch between monthly and annual
 * billing cycles with visual feedback.
 * 
 * @description
 * This component creates a professional header for pricing pages that
 * provides users with the ability to toggle between different billing
 * periods. It's ideal for SaaS pricing pages, subscription services,
 * and any application that offers multiple billing options.
 * 
 * @features
 * - Billing period toggle (monthly/annual)
 * - Visual state indication
 * - Event-driven architecture
 * - Responsive design
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - Interactive toggle functionality
 * - Clean, professional appearance
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with default values
 * - Performance optimized
 * - Event emission for parent communication
 * - Unit test friendly
 * - Memory efficient
 * - No external dependencies
 * 
 * @usecases
 * - SaaS pricing pages
 * - Subscription service pricing
 * - E-commerce pricing displays
 * - Service comparison pages
 * - Billing cycle selection
 * - Pricing strategy presentation
 * - Subscription management interfaces
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-pricing-header 
 *   [isAnnual]="false"
 *   (billingToggle)="handleBillingToggle()">
 * </app-pricing-header>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { PricingHeaderComponent } from './pricing-header.component';
 * 
 * export class PricingPageComponent {
 *   isAnnualBilling = false;
 * 
 *   handleBillingToggle(): void {
 *     this.isAnnualBilling = !this.isAnnualBilling;
 *     // Update pricing calculations
 *     this.updatePricing();
 *   }
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-pricing-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-header.html'
})
export class PricingHeaderComponent {
  /**
   * Current billing period state
   * 
   * @description
   * Input property that determines the current billing period state.
   * When true, annual billing is active; when false, monthly billing is active.
   * 
   * @input
   * @type {boolean}
   * @default false - Defaults to monthly billing
   * 
   * @example
   * ```typescript
   * isAnnual = true; // Annual billing active
   * isAnnual = false; // Monthly billing active
   * ```
   */
  @Input() isAnnual: boolean = false;

  /**
   * Event emitter for billing toggle functionality
   * 
   * @description
   * Output event that is emitted when the user toggles between billing periods.
   * Parent components can listen to this event to handle billing period changes
   * and update pricing calculations accordingly.
   * 
   * @output
   * @type {EventEmitter<void>}
   * 
   * @example
   * ```html
   * <app-pricing-header (billingToggle)="handleBillingToggle()"></app-pricing-header>
   * ```
   */
  @Output() billingToggle = new EventEmitter<void>();

  /**
   * Handles the billing period toggle event
   * 
   * @description
   * Processes user clicks on the billing toggle and emits an event
   * to notify parent components. This method enables dynamic billing
   * period switching in pricing applications.
   * 
   * @method
   * @public
   * @returns {void} No return value
   * 
   * @example
   * ```typescript
   * // Handle billing toggle
   * toggleBilling(): void {
   *   // This will emit the billingToggle event to parent components
   *   this.billingToggle.emit();
   * }
   * ```
   * 
   * @todo
   * - Add loading state during toggle
   * - Implement toggle validation
   * - Add success/error feedback
   * - Include toggle animation
   */
  toggleBilling() {
    this.billingToggle.emit();
  }
} 