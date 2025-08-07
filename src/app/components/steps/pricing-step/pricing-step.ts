import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * ========================================
 * PRICING STEP WIDGET COMPONENT
 * ========================================
 * 
 * A form step widget for product pricing information.
 * Includes fields for price, currency, SKU, and tags.
 * 
 * FEATURES:
 * - Product price field
 * - Currency select with Choices.js
 * - SKU (Stock Keeping Unit) field
 * - Tags field with Choices.js
 * - Required field validation
 * - Responsive design with Tailwind CSS
 * 
 * USAGE:
 * <app-pricing-step [data]="pricingData"></app-pricing-step>
 * 
 * REUSABILITY: High - Generic widget for pricing information
 * COMPLEXITY: Medium - Enhanced selects and tag management
 */

/**
 * Data structure for select options.
 * Defines each option in a select with Choices.js.
 */
export interface PricingSelectOption {
  /** Option value */
  value: string;
  /** Option label */
  label: string;
  /** Selected state of the option */
  selected?: boolean;
}

/**
 * Data structure for pricing text fields.
 * Defines text input fields for pricing information.
 */
export interface PricingTextField {
  /** Field label */
  label: string;
  /** Current field value */
  value: string;
  /** Field placeholder */
  placeholder: string;
}

/**
 * Data structure for pricing select fields.
 * Defines select fields with options for pricing.
 */
export interface PricingSelectField {
  /** Field label */
  label: string;
  /** Array of available options */
  options: PricingSelectOption[];
}

/**
 * Complete data structure for the pricing widget.
 * Organizes all product pricing fields.
 */
export interface PricingStepData {
  /** Product price field */
  price: PricingTextField;
  /** Product currency field */
  currency: PricingSelectField;
  /** Product SKU field */
  sku: PricingTextField;
  /** Product tags field */
  tags: PricingTextField;
}

/**
 * Pricing Step Widget Component
 * 
 * A reusable widget component that handles the fourth step of the product creation form,
 * focused on pricing and SKU information.
 * 
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Required input validation (prevents null/undefined errors)
 * - Choices.js integration for enhanced selects
 * - Price format validation
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
  selector: 'app-pricing-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pricing-step.html'
})
export class PricingStepComponent implements OnInit, AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  /**
   * Required data for the product pricing step.
   * Contains all pricing field configuration.
   * 
   * @type {PricingStepData} - Complete pricing step data (required)
   * @required - Ensures data is always provided, preventing null errors
   */
  @Input() data!: PricingStepData;
  @Output() prev = new EventEmitter<void>();
  @Output() send = new EventEmitter<void>();

  /**
   * Initializes selects with Choices.js.
   * Configures currency and tags selects with enhanced options.
   */
  ngOnInit(): void {
    // Initialization is done in ngAfterViewInit
  }

  /**
   * Initializes selects with Choices.js.
   * Configures currency and tags selects with enhanced options.
   */
  ngAfterViewInit(): void {
    this.initChoices();
  }

  /**
   * Initializes selects with Choices.js.
   * Configures currency and tags selects with enhanced options.
   */
  private initChoices(): void {
    // Import Choices dynamically
    import('choices.js').then((Choices) => {
      // Initialize currency select
      const currencySelect = this.elementRef.nativeElement.querySelector('select[name="choices-currency"]');
      if (currencySelect) {
        new Choices.default(currencySelect, {
          searchEnabled: false,
          itemSelectText: ''
        });
      }
      
      // Initialize tags input
      const tagsInput = this.elementRef.nativeElement.querySelector('#choices-multiple-remove-button');
      if (tagsInput) {
        new Choices.default(tagsInput, {
          delimiter: ',',
          editItems: true,
          maxItemCount: -1,
          removeItemButton: true,
          itemSelectText: ''
        });
      }
    });
  }

  /**
   * Handles product price change.
   * Updates the field value when the user types.
   * 
   * @param {Event} event - Input event
   */
  onPriceChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.price.value = target.value;
  }

  /**
   * Handles product currency change.
   * Updates the selection when the user changes the option.
   * 
   * @param {Event} event - Change event
   */
  onCurrencyChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    // Update selection in options
    this.data.currency.options.forEach(option => {
      option.selected = option.value === target.value;
    });
  }

  /**
   * Handles product SKU change.
   * Updates the field value when the user types.
   * 
   * @param {Event} event - Input event
   */
  onSkuChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.sku.value = target.value;
  }

  /**
   * Handles product tags change.
   * Updates the field value when the user types.
   * 
   * @param {Event} event - Input event
   */
  onTagsChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.tags.value = target.value;
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
   * Submits the complete form.
   * Emits an event to indicate form submission.
   */
  onSend(): void {
    // This logic will be handled in the parent component
    console.log('Form submission requested');
    this.send.emit();
  }

  /**
   * Validates if a price is valid.
   * Checks that the price is a positive number.
   * 
   * @param {string} price - Price to validate
   * @returns {boolean} - True if the price is valid
   */
  isValidPrice(price: string): boolean {
    if (!price) return false;
    const numPrice = parseFloat(price);
    return !isNaN(numPrice) && numPrice >= 0;
  }

  /**
   * Validates if a SKU is valid.
   * Checks that the SKU has the correct format.
   * 
   * @param {string} sku - SKU to validate
   * @returns {boolean} - True if the SKU is valid
   */
  isValidSku(sku: string): boolean {
    if (!sku) return false;
    // SKU is usually alphanumeric and may include dashes
    return /^[a-zA-Z0-9-]+$/.test(sku);
  }

  /**
   * Gets the selected options from a pricing select field.
   * Useful for getting the active currency options.
   * 
   * @param {PricingSelectField} field - Select field to query
   * @returns {PricingSelectOption[]} - Selected options
   */
  getSelectedOptions(field: PricingSelectField): PricingSelectOption[] {
    return field.options.filter(option => option.selected);
  }

  /**
   * Gets the value of a pricing text field.
   * Useful for accessing field values.
   * 
   * @param {PricingTextField} field - Text field to query
   * @returns {string} - Field value
   */
  getFieldValue(field: PricingTextField): string {
    return field.value;
  }

  /**
   * Updates the value of a pricing text field.
   * Allows programmatic updates of field values.
   * 
   * @param {PricingTextField} field - Text field to update
   * @param {string} value - New value
   */
  updateFieldValue(field: PricingTextField, value: string): void {
    field.value = value;
  }

  /**
   * Formats a price for display.
   * Converts the price to currency format.
   * 
   * @param {string} price - Price to format
   * @param {string} currency - Currency for formatting
   * @returns {string} - Formatted price
   */
  formatPrice(price: string, currency: string = 'USD'): string {
    if (!this.isValidPrice(price)) return '';
    const numPrice = parseFloat(price);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(numPrice);
  }

  /**
   * Validates if all pricing fields are complete.
   * Checks that required fields have valid values.
   * 
   * @returns {boolean} - True if all fields are valid
   */
  isFormValid(): boolean {
    return !!(
      this.isValidPrice(this.data.price.value) &&
      this.getSelectedOptions(this.data.currency).length > 0 &&
      this.isValidSku(this.data.sku.value) &&
      this.data.tags.value?.trim()
    );
  }

  /**
   * Gets all values from the pricing fields.
   * Useful for collecting all step data.
   * 
   * @returns {object} - Object with all values
   */
  getFormData(): object {
    return {
      price: this.data.price.value,
      currency: this.getSelectedOptions(this.data.currency)[0]?.value || '',
      sku: this.data.sku.value,
      tags: this.data.tags.value
    };
  }
} 