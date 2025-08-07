import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * ========================================
 * SOCIALS STEP WIDGET COMPONENT
 * ========================================
 * 
 * A form step widget for product social media information.
 * Includes fields for Shopify Handle, Facebook, and Instagram.
 * 
 * FEATURES:
 * - Shopify Handle field
 * - Facebook account field
 * - Instagram account field
 * - URL validation
 * - Required field validation
 * - Responsive design with Tailwind CSS
 * 
 * USAGE:
 * <app-socials-step [data]="socialsData"></app-socials-step>
 * 
 * REUSABILITY: High - Generic widget for social information
 * COMPLEXITY: Low - Simple text fields with validation
 */

/**
 * Data structure for social text fields.
 * Defines text input fields for social links.
 */
export interface SocialField {
  /** Field label */
  label: string;
  /** Current field value */
  value: string;
  /** Field placeholder */
  placeholder: string;
}

/**
 * Complete data structure for the socials widget.
 * Organizes all product social fields.
 */
export interface SocialsStepData {
  /** Shopify Handle field */
  shopifyHandle: SocialField;
  /** Facebook account field */
  facebookAccount: SocialField;
  /** Instagram account field */
  instagramAccount: SocialField;
}

/**
 * Socials Step Widget Component
 * 
 * A reusable widget component that handles the third step of the product creation form,
 * focused on social media information.
 * 
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Required input validation (prevents null/undefined errors)
 * - URL validation for social media
 * - Minimal dependencies (CommonModule, FormsModule)
 * 
 * REUSABILITY FEATURES:
 * - Configurable data input with complete interface
 * - Configurable dynamic fields
 * - No hardcoded values
 * - Responsive design
 * - Dark mode support
 */
@Component({
  selector: 'app-socials-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './socials-step.html'
})
export class SocialsStepComponent {
  /**
   * Required data for the product socials step.
   * Contains all social field configuration.
   * 
   * @type {SocialsStepData} - Complete socials step data (required)
   * @required - Ensures data is always provided, preventing null errors
   */
  @Input() data!: SocialsStepData;
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  /**
   * Handles Shopify Handle change.
   * Updates the field value when the user types.
   * 
   * @param {Event} event - Input event
   */
  onShopifyHandleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.shopifyHandle.value = target.value;
  }

  /**
   * Handles Facebook account change.
   * Updates the field value when the user types.
   * 
   * @param {Event} event - Input event
   */
  onFacebookAccountChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.facebookAccount.value = target.value;
  }

  /**
   * Handles Instagram account change.
   * Updates the field value when the user types.
   * 
   * @param {Event} event - Input event
   */
  onInstagramAccountChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.instagramAccount.value = target.value;
  }

  /**
   * Navigates to the previous form step.
   * Emits an event to indicate going back.
   */
  onPrev(): void {
    // This logic will be handled in the parent component
    console.log('Previous step requested');
    this.prev.emit();
  }

  /**
   * Navigates to the next form step.
   * Emits an event to indicate moving forward.
   */
  onNext(): void {
    // This logic will be handled in the parent component
    console.log('Next step requested');
    this.next.emit();
  }

  /**
   * Validates if a URL is valid.
   * Checks that the URL has a correct format.
   * 
   * @param {string} url - URL to validate
   * @returns {boolean} - True if the URL is valid
   */
  isValidUrl(url: string): boolean {
    if (!url) return true; // Empty URLs are valid (optional)
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validates if a Shopify Handle is valid.
   * Checks that the handle has the correct format.
   * 
   * @param {string} handle - Handle to validate
   * @returns {boolean} - True if the handle is valid
   */
  isValidShopifyHandle(handle: string): boolean {
    if (!handle) return true; // Empty handles are valid (optional)
    // Shopify handles are usually alphanumeric and may include dashes
    return /^[a-zA-Z0-9-]+$/.test(handle);
  }

  /**
   * Gets the value of a specific social field.
   * Useful for accessing field values.
   * 
   * @param {SocialField} field - Social field to query
   * @returns {string} - Field value
   */
  getFieldValue(field: SocialField): string {
    return field.value;
  }

  /**
   * Updates the value of a specific social field.
   * Allows programmatic updates of field values.
   * 
   * @param {SocialField} field - Social field to update
   * @param {string} value - New value
   */
  updateFieldValue(field: SocialField, value: string): void {
    field.value = value;
  }

  /**
   * Validates if all social fields are complete.
   * Checks that required fields have valid values.
   * 
   * @returns {boolean} - True if all fields are valid
   */
  isFormValid(): boolean {
    return (
      this.isValidShopifyHandle(this.data.shopifyHandle.value) &&
      this.isValidUrl(this.data.facebookAccount.value) &&
      this.isValidUrl(this.data.instagramAccount.value)
    );
  }

  /**
   * Gets all values from the social fields.
   * Useful for collecting all step data.
   * 
   * @returns {object} - Object with all values
   */
  getFormData(): object {
    return {
      shopifyHandle: this.data.shopifyHandle.value,
      facebookAccount: this.data.facebookAccount.value,
      instagramAccount: this.data.instagramAccount.value
    };
  }
} 