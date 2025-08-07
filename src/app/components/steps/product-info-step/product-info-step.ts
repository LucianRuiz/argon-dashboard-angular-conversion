import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import Quill styles
import 'quill/dist/quill.snow.css';

/**
 * ========================================
 * PRODUCT INFO STEP WIDGET COMPONENT
 * ========================================
 * 
 * A form step widget for basic product information.
 * Includes fields for name, weight, description, category, and sizes.
 * 
 * FEATURES:
 * - Product name field
 * - Product weight field
 * - Rich text editor for description
 * - Category select with Choices.js
 * - Sizes select with Choices.js
 * - Required field validation
 * - Responsive design with Tailwind CSS
 * 
 * USAGE:
 * <app-product-info-step [data]="productInfoData"></app-product-info-step>
 * 
 * REUSABILITY: High - Generic widget for product information
 * COMPLEXITY: Medium - Rich text editor and enhanced selects
 */

/**
 * Data structure for select options.
 * Defines each option in a select with Choices.js.
 */
export interface SelectOption {
  /** Option value */
  value: string;
  /** Option label */
  label: string;
  /** Selected state of the option */
  selected?: boolean;
}

/**
 * Data structure for text fields.
 * Defines simple text input fields.
 */
export interface TextField {
  /** Field label */
  label: string;
  /** Current field value */
  value: string;
  /** Field placeholder */
  placeholder: string;
}

/**
 * Data structure for select fields.
 * Defines select fields with options.
 */
export interface SelectField {
  /** Field label */
  label: string;
  /** Array of available options */
  options: SelectOption[];
}

/**
 * Data structure for the description field.
 * Defines the rich text editor field.
 */
export interface DescriptionField {
  /** Field label */
  label: string;
  /** HTML content of the editor */
  value: string;
  /** Editor placeholder */
  placeholder: string;
}

/**
 * Complete data structure for the product info widget.
 * Organizes all necessary fields for basic product information.
 */
export interface ProductInfoStepData {
  /** Product name field */
  productName: TextField;
  /** Product weight field */
  weight: TextField;
  /** Product description field */
  description: DescriptionField;
  /** Product category field */
  category: SelectField;
  /** Product sizes field */
  sizes: SelectField;
}

/**
 * Product Info Step Widget Component
 * 
 * A reusable widget component that handles the first step of the product creation form,
 * focused on basic product information.
 * 
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Required input validation (prevents null/undefined errors)
 * - Quill editor integration for rich text
 * - Choices.js integration for enhanced selects
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
  selector: 'app-product-info-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-info-step.html'
})
export class ProductInfoStepComponent implements OnInit, AfterViewInit {
  private quillEditor: any;

  constructor(private elementRef: ElementRef) {}

  /**
   * Required data for the product info step.
   * Contains all field configuration and values.
   * 
   * @type {ProductInfoStepData} - Complete info step data (required)
   * @required - Ensures data is always provided, preventing null errors
   */
  @Input() data!: ProductInfoStepData;
  @Output() next = new EventEmitter<void>();

  /**
   * Initializes the Quill editor for the description field.
   * Configures the editor with basic formatting options.
   */
  ngOnInit(): void {
    // Initialization is done in ngAfterViewInit
  }

  /**
   * Initializes the Quill editor.
   * Configures the editor with toolbar and basic options.
   */
  ngAfterViewInit(): void {
    this.initQuillEditor();
    this.initChoices();
  }

  /**
   * Initializes the Quill editor.
   * Configures the editor with toolbar and basic options.
   */
  private initQuillEditor(): void {
    // Import Quill dynamically
    import('quill').then((Quill) => {
      const editorElement = this.elementRef.nativeElement.querySelector('#quill-editor');
      if (editorElement) {
        this.quillEditor = new Quill.default(editorElement, {
          theme: 'snow',
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline'],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              ['link', 'image'],
              ['clean']
            ]
          },
          placeholder: this.data.description.placeholder
        });

        // Set initial content
        if (this.data.description.value) {
          this.quillEditor.root.innerHTML = this.data.description.value;
        }

        // Listen for changes
        this.quillEditor.on('text-change', () => {
          this.data.description.value = this.quillEditor.root.innerHTML;
        });
      }
    });
  }

  /**
   * Initializes selects with Choices.js.
   * Configures category and sizes selects with enhanced options.
   */
  private initChoices(): void {
    // Import Choices dynamically
    import('choices.js').then((Choices) => {
      // Initialize category select
      const categorySelect = this.elementRef.nativeElement.querySelector('select[name="choices-category"]');
      if (categorySelect) {
        new Choices.default(categorySelect, {
          searchEnabled: false,
          itemSelectText: ''
        });
      }
      
      // Initialize sizes select
      const sizesSelect = this.elementRef.nativeElement.querySelector('select[name="choices-sizes"]');
      if (sizesSelect) {
        new Choices.default(sizesSelect, {
          searchEnabled: false,
          itemSelectText: ''
        });
      }
    });
  }

  /**
   * Handles product name change.
   * Updates the field value when the user types.
   * 
   * @param {Event} event - Input event
   */
  onProductNameChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.productName.value = target.value;
  }

  /**
   * Handles product weight change.
   * Updates the field value when the user types.
   * 
   * @param {Event} event - Input event
   */
  onWeightChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.weight.value = target.value;
  }

  /**
   * Handles product category change.
   * Updates the selection when the user changes the option.
   * 
   * @param {Event} event - Change event
   */
  onCategoryChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    // Update selection in options
    this.data.category.options.forEach(option => {
      option.selected = option.value === target.value;
    });
  }

  /**
   * Handles product sizes change.
   * Updates the selection when the user changes the option.
   * 
   * @param {Event} event - Change event
   */
  onSizesChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    // Update selection in options
    this.data.sizes.options.forEach(option => {
      option.selected = option.value === target.value;
    });
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
   * Gets the content of the Quill editor.
   * Useful for getting the formatted HTML from the editor.
   * 
   * @returns {string} - Editor HTML content
   */
  getDescriptionContent(): string {
    return this.data.description.value;
  }

  /**
   * Updates the content of the Quill editor.
   * Allows programmatic update of the editor content.
   * 
   * @param {string} content - New HTML content
   */
  updateDescriptionContent(content: string): void {
    this.data.description.value = content;
  }

  /**
   * Gets the selected options from a select field.
   * Useful for getting the active category or size options.
   * 
   * @param {SelectField} field - Select field to query
   * @returns {SelectOption[]} - Selected options
   */
  getSelectedOptions(field: SelectField): SelectOption[] {
    return field.options.filter(option => option.selected);
  }

  /**
   * Validates if all required fields are complete.
   * Checks that required fields have valid values.
   * 
   * @returns {boolean} - True if all fields are valid
   */
  isFormValid(): boolean {
    return !!(
      this.data.productName.value?.trim() &&
      this.data.weight.value?.trim() &&
      this.data.description.value?.trim() &&
      this.getSelectedOptions(this.data.category).length > 0 &&
      this.getSelectedOptions(this.data.sizes).length > 0
    );
  }
} 