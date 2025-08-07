import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Password Requirement Interface
 * 
 * Defines the structure for individual password requirement items.
 * This interface ensures type safety for requirement display.
 * 
 * @description
 * The PasswordRequirement interface defines the essential properties
 * needed to display individual password requirements with unique
 * identification.
 * 
 * @interface
 * @since 1.0.0
 */
export interface PasswordRequirement {
  /** 
   * Unique identifier for the requirement
   * @required - Requirement ID is essential for tracking and validation
   * @example 1, 2, 3, 4
   */
  id: number;
  
  /** 
   * Description text for the password requirement
   * @required - Requirement text provides user guidance
   * @example "At least 8 characters", "Include uppercase letter", "Include number"
   */
  text: string;
}

/**
 * Password Requirements Data Interface
 * 
 * Defines the complete structure for password requirements configuration.
 * This interface ensures type safety and provides clear contract
 * for component inputs.
 * 
 * @description
 * The PasswordRequirementsData interface defines all properties needed
 * to display a complete password requirements section with title,
 * subtitle, and list of requirements.
 * 
 * @interface
 * @since 1.0.0
 */
export interface PasswordRequirementsData {
  /** 
   * Main title for the password requirements section
   * @required - Section title provides primary context
   * @example "Password Requirements", "Security Requirements", "Password Rules"
   */
  title: string;
  
  /** 
   * Subtitle or description for the requirements section
   * @required - Subtitle provides additional guidance
   * @example "Your password must meet the following criteria"
   */
  subtitle: string;
  
  /** 
   * Array of password requirements to display
   * @required - Requirements array provides validation criteria
   * @example Array of PasswordRequirement objects
   */
  requirements: PasswordRequirement[];
}

/**
 * Password Requirements Component
 * 
 * A component designed to display password security requirements
 * in a clear, organized format. Shows validation criteria that
 * users must meet when creating or updating passwords.
 * 
 * @description
 * This component creates a professional password requirements display
 * that helps users understand what criteria their passwords must meet.
 * It's ideal for registration forms, password change interfaces, and
 * any application that requires secure password creation.
 * 
 * @features
 * - Password requirement display
 * - Organized list format
 * - Clear requirement descriptions
 * - Responsive design
 * - Consistent Argon Dashboard styling
 * - Accessibility compliant
 * - Visual requirement indicators
 * - User-friendly explanations
 * - Track-by optimization
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with required properties
 * - Performance optimized with trackBy
 * - Memory efficient
 * - Unit test friendly
 * - No external dependencies
 * - Security-focused content
 * 
 * @usecases
 * - User registration forms
 * - Password change interfaces
 * - Security settings pages
 * - Account creation flows
 * - Password policy display
 * - Security education pages
 * - Authentication interfaces
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-password-requirements 
 *   [data]="requirementsData">
 * </app-password-requirements>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { PasswordRequirementsComponent, PasswordRequirementsData } from './password-requirements.component';
 * 
 * export class RegistrationComponent {
 *   requirementsData: PasswordRequirementsData = {
 *     title: 'Password Requirements',
 *     subtitle: 'Your password must meet the following criteria',
 *     requirements: [
 *       { id: 1, text: 'At least 8 characters long' },
 *       { id: 2, text: 'Include at least one uppercase letter' },
 *       { id: 3, text: 'Include at least one number' },
 *       { id: 4, text: 'Include at least one special character' }
 *     ]
 *   };
 * }
 * ```
 * 
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Component({
  selector: 'app-password-requirements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-requirements.html'
})
export class PasswordRequirementsComponent {
  /**
   * Password requirements configuration data
   * 
   * @description
   * Required input property that defines the password requirements
   * section including title, subtitle, and list of requirements.
   * Contains all validation criteria for password creation.
   * 
   * @input
   * @required - Component cannot function without this data
   * @type {PasswordRequirementsData}
   * 
   * @example
   * ```typescript
   * data: PasswordRequirementsData = {
   *   title: 'Security Requirements',
   *   subtitle: 'Ensure your password meets these criteria',
   *   requirements: [
   *     { id: 1, text: 'Minimum 8 characters' },
   *     { id: 2, text: 'Include uppercase letter' }
   *   ]
   * };
   * ```
   */
  @Input() data!: PasswordRequirementsData;

  /**
   * TrackBy function for optimizing list rendering
   * 
   * @description
   * Returns the unique identifier for each password requirement item.
   * This function optimizes Angular's change detection by providing
   * a stable reference for list items.
   * 
   * @method
   * @public
   * @param {number} index - The index of the item in the array
   * @param {PasswordRequirement} requirement - The password requirement item
   * @returns {number} The unique ID of the requirement
   * 
   * @example
   * ```typescript
   * // Used in template with *ngFor
   * // <div *ngFor="let req of data.requirements; trackBy: trackByRequirement">
   * 
   * const requirementId = this.trackByRequirement(0, requirement);
   * console.log('Requirement ID:', requirementId);
   * ```
   */
  trackByRequirement(index: number, requirement: PasswordRequirement): number {
    return requirement.id;
  }
} 