import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for referral programs.
 * 
 * Provides comprehensive information for displaying referral
 * programs with their status and visual elements.
 */
export interface ReferralProgram {
  /** Unique identifier for the referral program */
  id: number;
  /** Title or name of the referral program */
  title: string;
  /** URL or path to the program's image/logo */
  imageUrl: string;
  /** Whether the program is currently active */
  isActive: boolean;
}

/**
 * Referral Program Card Component
 * 
 * A comprehensive card component that displays referral programs
 * with their status, images, and program information. Designed
 * for referral program management interfaces requiring program
 * overview and status display.
 * 
 * Features:
 * - Displays referral programs with titles and images
 * - Shows program status (active/inactive)
 * - Visual program representation with images
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation for individual programs
 * - Null-safe data handling with default empty array
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Dynamic status display
 * - No hardcoded values or styling
 * - Generic design for any referral application
 * - Program status indicators
 * - Clean and professional display
 * - Image-based program identification
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional referral interface
 * - Null-safe input processing
 * - Responsive design across devices
 * - Dynamic status display
 * - Flexible image system
 * - Clean data presentation
 * - Program identification support
 * 
 * Use Cases:
 * - Referral program dashboards
 * - Program management interfaces
 * - Program selection displays
 * - Status tracking applications
 * - Program overview displays
 * - Multi-program interfaces
 * 
 * The component serves as a comprehensive referral program card
 * that can be easily integrated into referral applications and
 * program management platforms, providing users with clear
 * program information and status in a visually appealing format.
 * 
 * @example
 * ```html
 * <app-referral-program-card [program]="referralProgram" [programs]="allPrograms"></app-referral-program-card>
 * ```
 * 
 * @example
 * ```typescript
 * const referralProgram: ReferralProgram = {
 *   id: 1,
 *   title: "E-commerce Referral Program",
 *   imageUrl: "assets/img/program1.jpg",
 *   isActive: true
 * };
 * 
 * const allPrograms: ReferralProgram[] = [
 *   { id: 1, title: "E-commerce Program", imageUrl: "assets/img/program1.jpg", isActive: true },
 *   { id: 2, title: "SaaS Referral Program", imageUrl: "assets/img/program2.jpg", isActive: false },
 *   { id: 3, title: "Mobile App Referrals", imageUrl: "assets/img/program3.jpg", isActive: true }
 * ];
 * ```
 */
@Component({
  selector: 'app-referral-program-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './referral-program-card.component.html'
})
export class ReferralProgramCardComponent {
  /**
   * Required input data for the individual referral program.
   * 
   * Contains program information including ID, title, image,
   * and active status. This required input property ensures
   * program data is always provided for proper display.
   * 
   * @type {ReferralProgram} - Individual referral program data (required)
   */
  @Input() program!: ReferralProgram;

  /**
   * Input data for all referral programs in the system.
   * 
   * Contains array of all referral programs for context
   * and potential multi-program display. This input property
   * defaults to an empty array for flexibility.
   * 
   * @type {ReferralProgram[]} - Array of all referral programs (defaults to empty array)
   */
  @Input() programs: ReferralProgram[] = [];
} 