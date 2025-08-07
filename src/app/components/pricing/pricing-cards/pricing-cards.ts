import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Pricing Feature Interface
 * 
 * Defines the structure for individual pricing plan features.
 * This interface ensures type safety for feature display and comparison.
 * 
 * @description
 * The PricingFeature interface defines the essential properties
 * needed to display and compare features across different pricing plans.
 * 
 * @interface
 * @since 1.0.0
 */
export interface PricingFeature {
  /** 
   * Feature description text
   * @required - Feature text provides user-facing description
   * @example "Unlimited projects", "24/7 support", "Advanced analytics"
   */
  text: string;
  
  /** 
   * Whether the feature is included in the plan
   * @required - Inclusion status determines visual display
   * @example true, false
   */
  included: boolean;
}

/**
 * Pricing Plan Interface
 * 
 * Defines the complete structure for pricing plan configuration.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The PricingPlan interface defines all properties needed
 * to display a complete pricing plan with features, pricing,
 * and call-to-action elements.
 * 
 * @interface
 * @since 1.0.0
 */
export interface PricingPlan {
  /** 
   * Name of the pricing plan
   * @required - Plan name provides primary identification
   * @example "Starter", "Professional", "Enterprise"
   */
  name: string;
  
  /** 
   * Monthly price in currency units
   * @required - Monthly price for billing calculations
   * @example 9.99, 29.99, 99.99
   */
  monthlyPrice: number;
  
  /** 
   * Annual price in currency units
   * @required - Annual price for billing calculations
   * @example 99.99, 299.99, 999.99
   */
  annualPrice: number;
  
  /** 
   * Optional description of the plan
   * @optional - Plan description provides additional context
   * @example "Perfect for small teams", "Best for growing businesses"
   */
  description?: string;
  
  /** 
   * Array of features included in the plan
   * @required - Features provide value proposition
   * @example Array of PricingFeature objects
   */
  features: PricingFeature[];
  
  /** 
   * Text for the call-to-action button
   * @required - Button text guides user action
   * @example "Get Started", "Choose Plan", "Start Free Trial"
   */
  buttonText: string;
  
  /** 
   * CSS class for button styling
   * @required - Button class determines visual appearance
   * @example "btn-primary", "btn-secondary", "btn-success"
   */
  buttonClass: string;
  
  /** 
   * Whether this plan is highlighted as popular
   * @optional - Popular flag provides visual emphasis
   * @example true, false
   */
  isPopular?: boolean;
}

/**
 * Pricing Cards Component
 * 
 * A comprehensive component designed to display pricing plans in a card format.
 * Supports dynamic pricing based on billing period, feature comparison,
 * and plan selection with visual feedback and discount calculations.
 * 
 * @description
 * This component creates professional pricing cards that display multiple
 * pricing plans with features, pricing, and call-to-action buttons. It
 * supports both monthly and annual billing with automatic discount
 * calculations and plan selection functionality.
 * 
 * @features
 * - Multiple pricing plan display
 * - Dynamic billing period support
 * - Feature comparison across plans
 * - Automatic discount calculations
 * - Plan selection functionality
 * - Popular plan highlighting
 * - Responsive card layout
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - Interactive plan selection
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with default values
 * - Performance optimized
 * - Event emission for parent communication
 * - Unit test friendly
 * - Memory efficient
 * - Mathematical calculations for discounts
 * 
 * @usecases
 * - SaaS pricing pages
 * - Subscription service pricing
 * - E-commerce pricing displays
 * - Service comparison pages
 * - Plan selection interfaces
 * - Pricing strategy presentation
 * - Subscription management
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-pricing-cards 
 *   [pricingPlans]="plans"
 *   [isAnnual]="false"
 *   (planSelected)="handlePlanSelection($event)">
 * </app-pricing-cards>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { PricingCardsComponent, PricingPlan } from './pricing-cards.component';
 * 
 * export class PricingPageComponent {
 *   plans: PricingPlan[] = [
 *     {
 *       name: 'Starter',
 *       monthlyPrice: 9.99,
 *       annualPrice: 99.99,
 *       description: 'Perfect for individuals',
 *       features: [
 *         { text: '5 projects', included: true },
 *         { text: 'Basic support', included: true }
 *       ],
 *       buttonText: 'Get Started',
 *       buttonClass: 'btn-primary'
 *     }
 *   ];
 * 
 *   handlePlanSelection(plan: PricingPlan): void {
 *     console.log('Selected plan:', plan.name);
 *   }
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-pricing-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-cards.html'
})
export class PricingCardsComponent {
  /**
   * Array of pricing plans to display
   * 
   * @description
   * Input property that contains all pricing plans to be displayed
   * in the cards. Each plan includes pricing, features, and call-to-action
   * information.
   * 
   * @input
   * @type {PricingPlan[]}
   * @default [] - Empty array by default
   * 
   * @example
   * ```typescript
   * pricingPlans = [
   *   {
   *     name: 'Basic',
   *     monthlyPrice: 9.99,
   *     annualPrice: 99.99,
   *     features: [...],
   *     buttonText: 'Choose Plan',
   *     buttonClass: 'btn-primary'
   *   }
   * ];
   * ```
   */
  @Input() pricingPlans: PricingPlan[] = [];

  /**
   * Current billing period state
   * 
   * @description
   * Input property that determines the current billing period state.
   * When true, annual pricing is displayed; when false, monthly pricing
   * is displayed.
   * 
   * @input
   * @type {boolean}
   * @default false - Defaults to monthly billing
   * 
   * @example
   * ```typescript
   * isAnnual = true; // Show annual prices
   * isAnnual = false; // Show monthly prices
   * ```
   */
  @Input() isAnnual: boolean = false;

  /**
   * Event emitter for plan selection
   * 
   * @description
   * Output event that is emitted when a user selects a pricing plan.
   * Parent components can listen to this event to handle plan selection
   * and initiate the subscription process.
   * 
   * @output
   * @type {EventEmitter<PricingPlan>}
   * 
   * @example
   * ```html
   * <app-pricing-cards (planSelected)="handlePlanSelection($event)"></app-pricing-cards>
   * ```
   */
  @Output() planSelected = new EventEmitter<PricingPlan>();

  /**
   * Gets the current price for a plan based on billing period
   * 
   * @description
   * Returns the appropriate price for a plan based on the current
   * billing period setting. This method enables dynamic pricing
   * display without manual calculations.
   * 
   * @method
   * @public
   * @param {PricingPlan} plan - The pricing plan to get the price for
   * @returns {number} The current price for the plan
   * 
   * @example
   * ```typescript
   * const currentPrice = this.getCurrentPrice(plan);
   * console.log(`Current price: $${currentPrice}`);
   * ```
   */
  getCurrentPrice(plan: PricingPlan): number {
    return this.isAnnual ? plan.annualPrice : plan.monthlyPrice;
  }

  /**
   * Calculates the annual discount percentage for a plan
   * 
   * @description
   * Calculates the discount percentage when choosing annual billing
   * over monthly billing. Returns 0 if not in annual mode or if
   * there's no discount.
   * 
   * @method
   * @public
   * @param {PricingPlan} plan - The pricing plan to calculate discount for
   * @returns {number} The discount percentage (0-100)
   * 
   * @example
   * ```typescript
   * const discount = this.getAnnualDiscount(plan);
   * console.log(`Save ${discount}% with annual billing`);
   * ```
   */
  getAnnualDiscount(plan: PricingPlan): number {
    if (!this.isAnnual) return 0;
    const monthlyTotal = plan.monthlyPrice * 12;
    const annualPrice = plan.annualPrice;
    return Math.round(((monthlyTotal - annualPrice) / monthlyTotal) * 100);
  }

  /**
   * Handles plan selection and emits selection event
   * 
   * @description
   * Processes user clicks on plan selection buttons and emits an event
   * to notify parent components. This method enables plan selection
   * functionality in pricing applications.
   * 
   * @method
   * @public
   * @param {PricingPlan} plan - The selected pricing plan
   * @returns {void} No return value
   * 
   * @example
   * ```typescript
   * // Handle plan selection
   * onPlanSelect(plan: PricingPlan): void {
   *   // This will emit the planSelected event to parent components
   *   this.planSelected.emit(plan);
   * }
   * ```
   * 
   * @todo
   * - Add loading state during selection
   * - Implement selection validation
   * - Add success/error feedback
   * - Include selection animation
   */
  onPlanSelect(plan: PricingPlan): void {
    this.planSelected.emit(plan);
  }
} 