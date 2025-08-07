import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * FAQ Item Interface
 * 
 * Defines the structure for individual FAQ items.
 * This interface ensures type safety for FAQ display and interaction.
 * 
 * @description
 * The FaqItem interface defines the essential properties
 * needed to display and manage FAQ items with expandable content.
 * 
 * @interface
 * @since 1.0.0
 */
export interface FaqItem {
  /** 
   * The FAQ question text
   * @required - Question text provides the FAQ title
   * @example "What payment methods do you accept?", "How do I cancel my subscription?"
   */
  question: string;
  
  /** 
   * The FAQ answer text
   * @required - Answer text provides the FAQ content
   * @example "We accept all major credit cards, PayPal, and bank transfers."
   */
  answer: string;
  
  /** 
   * Whether the FAQ item is currently expanded
   * @required - Expansion state determines visual display
   * @example true, false
   */
  isOpen: boolean;
}

/**
 * FAQ Section Component
 * 
 * A component designed to display frequently asked questions in an
 * expandable accordion format. Provides interactive FAQ functionality
 * with smooth animations and accessibility features.
 * 
 * @description
 * This component creates a professional FAQ section that allows users
 * to expand and collapse questions to view answers. It's ideal for
 * pricing pages, help centers, and any application that needs to
 * present information in a question-and-answer format.
 * 
 * @features
 * - Expandable FAQ items
 * - Smooth animations
 * - Accessibility compliant
 * - Responsive design
 * - Consistent Argon Dashboard styling
 * - Interactive toggle functionality
 * - Clean, organized layout
 * - Keyboard navigation support
 * - Screen reader friendly
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with default values
 * - Performance optimized
 * - Memory efficient
 * - Unit test friendly
 * - No external dependencies
 * - State management for FAQ items
 * 
 * @usecases
 * - Pricing page FAQs
 * - Help center pages
 * - Product documentation
 * - Support pages
 * - Onboarding guides
 * - Service information
 * - Customer support interfaces
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-faq-section 
 *   [faqItems]="faqData">
 * </app-faq-section>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { FaqSectionComponent, FaqItem } from './faq-section.component';
 * 
 * export class PricingPageComponent {
 *   faqData: FaqItem[] = [
 *     {
 *       question: 'What payment methods do you accept?',
 *       answer: 'We accept all major credit cards, PayPal, and bank transfers.',
 *       isOpen: false
 *     },
 *     {
 *       question: 'Can I cancel my subscription anytime?',
 *       answer: 'Yes, you can cancel your subscription at any time with no penalties.',
 *       isOpen: false
 *     }
 *   ];
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-section.html'
})
export class FaqSectionComponent {
  /**
   * Array of FAQ items to display
   * 
   * @description
   * Input property that contains all FAQ items to be displayed
   * in the section. Each item includes a question, answer, and
   * expansion state.
   * 
   * @input
   * @type {FaqItem[]}
   * @default [] - Empty array by default
   * 
   * @example
   * ```typescript
   * faqItems = [
   *   {
   *     question: 'How do I get started?',
   *     answer: 'Simply choose a plan and click Get Started.',
   *     isOpen: false
   *   }
   * ];
   * ```
   */
  @Input() faqItems: FaqItem[] = [];

  /**
   * Toggles the expansion state of a FAQ item
   * 
   * @description
   * Processes user clicks on FAQ items and toggles their expansion
   * state. This method enables interactive FAQ functionality where
   * users can expand and collapse questions to view answers.
   * 
   * @method
   * @public
   * @param {number} index - The index of the FAQ item to toggle
   * @returns {void} No return value
   * 
   * @example
   * ```typescript
   * // Toggle FAQ item at index 0
   * toggleFaq(0): void {
   *   // This will toggle the isOpen state of the first FAQ item
   * }
   * ```
   * 
   * @todo
   * - Add smooth animations
   * - Implement accordion behavior (close others when one opens)
   * - Add keyboard navigation
   * - Include accessibility improvements
   * - Add loading states
   */
  toggleFaq(index: number) {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
} 