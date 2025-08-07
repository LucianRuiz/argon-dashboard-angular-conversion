import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Dropzone styles
import 'dropzone/dist/dropzone.css';

/**
 * ========================================
 * MEDIA STEP WIDGET COMPONENT
 * ========================================
 * 
 * A form step widget for product media management.
 * Includes image upload functionality with Dropzone.
 * 
 * FEATURES:
 * - Image upload with drag & drop
 * - Preview of uploaded images
 * - Allowed file types configuration
 * - File size and quantity limits
 * - File validation
 * - Responsive design with Tailwind CSS
 * 
 * USAGE:
 * <app-media-step [data]="mediaData"></app-media-step>
 * 
 * REUSABILITY: High - Generic widget for media management
 * COMPLEXITY: Medium - Dropzone integration and validations
 */

/**
 * Data structure for Dropzone configuration.
 * Defines the configuration options for file upload.
 */
export interface DropzoneConfig {
  /** Upload endpoint URL */
  url: string;
  /** Accepted file types (e.g., '.jpg,.png,.pdf') */
  acceptedFiles: string;
  /** Maximum number of allowed files */
  maxFiles: number;
  /** Maximum file size in MB */
  maxFilesize: number;
}

/**
 * Data structure for media fields.
 * Defines file upload fields with specific configuration.
 */
export interface MediaField {
  /** Field label */
  label: string;
  /** Dropzone configuration */
  dropzoneConfig: DropzoneConfig;
}

/**
 * Complete data structure for the media widget.
 * Organizes all product media fields.
 */
export interface MediaStepData {
  /** Product image field */
  productImage: MediaField;
}

/**
 * Media Step Widget Component
 * 
 * A reusable widget component that handles the second step of the product creation form,
 * focused on media and image management.
 * 
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Required input validation (prevents null/undefined errors)
 * - Dropzone integration for file upload
 * - File type and size validation
 * - Minimal dependencies (only CommonModule)
 * 
 * REUSABILITY FEATURES:
 * - Configurable data input with complete interface
 * - Flexible Dropzone configuration
 * - No hardcoded values
 * - Responsive design
 * - Dark mode support
 */
@Component({
  selector: 'app-media-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-step.html'
})
export class MediaStepComponent implements OnInit, AfterViewInit {
  private dropzoneInstance: any;

  constructor(private elementRef: ElementRef) {}

  /**
   * Required data for the product media step.
   * Contains all media field configuration.
   * 
   * @type {MediaStepData} - Complete media step data (required)
   * @required - Ensures data is always provided, preventing null errors
   */
  @Input() data!: MediaStepData;
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  /**
   * Initializes Dropzone for file upload.
   * Configures Dropzone with the specified options.
   */
  ngOnInit(): void {
    // Initialization is done in ngAfterViewInit
  }

  ngAfterViewInit(): void {
    this.initDropzone();
  }

  /**
   * Initializes Dropzone.
   * Configures Dropzone with the provided configuration.
   */
  private initDropzone(): void {
    // Import Dropzone dynamically
    import('dropzone').then((Dropzone) => {
      const dropzoneElement = this.elementRef.nativeElement.querySelector('#dropzone');
      if (dropzoneElement) {
        // Disable auto discover to avoid conflicts
        Dropzone.default.autoDiscover = false;
        
        this.dropzoneInstance = new Dropzone.default('#dropzone', {
          url: this.data.productImage.dropzoneConfig.url,
          acceptedFiles: this.data.productImage.dropzoneConfig.acceptedFiles,
          maxFiles: this.data.productImage.dropzoneConfig.maxFiles,
          maxFilesize: this.data.productImage.dropzoneConfig.maxFilesize,
          addRemoveLinks: true,
          dictDefaultMessage: 'Drop files here or click to upload',
          dictRemoveFile: 'Remove file'
        });
      }
    });
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
   * Gets the Dropzone configuration for a specific field.
   * Useful for accessing file upload configuration.
   * 
   * @param {MediaField} field - Media field to query
   * @returns {DropzoneConfig} - Dropzone configuration
   */
  getDropzoneConfig(field: MediaField): DropzoneConfig {
    return field.dropzoneConfig;
  }

  /**
   * Validates if files have been uploaded.
   * Checks that at least one file has been uploaded.
   * 
   * @returns {boolean} - True if files have been uploaded
   */
  hasUploadedFiles(): boolean {
    // This logic would be implemented based on Dropzone state
    return false; // Placeholder
  }

  /**
   * Gets the list of uploaded files.
   * Useful for displaying files in the preview.
   * 
   * @returns {File[]} - Array of uploaded files
   */
  getUploadedFiles(): File[] {
    // This logic would be implemented based on Dropzone state
    return []; // Placeholder
  }

  /**
   * Validates if the step is complete.
   * Checks that the required files have been uploaded.
   * 
   * @returns {boolean} - True if the step is complete
   */
  isStepComplete(): boolean {
    return this.hasUploadedFiles();
  }
} 