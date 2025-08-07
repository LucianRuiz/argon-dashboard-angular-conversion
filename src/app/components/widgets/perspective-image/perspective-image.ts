import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * PERSPECTIVE IMAGE COMPONENT
 * ========================================
 *
 * A component for displaying images with perspective effects and 3D transformations.
 *
 * FEATURES:
 * - 3D perspective image display
 * - Configurable transform classes for positioning
 * - Hover effects with smooth transitions
 * - Mobile-responsive design
 * - Clickable images with link support
 * - Z-index layering for depth effects
 *
 * USAGE:
 * <app-perspective-image [imageData]="imageData" [isMobile]="false"></app-perspective-image>
 *
 * REUSABILITY: High - Generic 3D image display
 * COMPLEXITY: Medium - 3D transformations and responsive design
 */

/**
 * Local interface for perspective image data.
 *
 * @property {string} src - Image source URL
 * @property {string} alt - Image alt text
 * @property {string} [link] - Optional link URL for clickable images
 * @property {boolean} [isClickable] - Optional flag for clickable images
 * @property {number} zIndex - Z-index for layering
 * @property {string} transformClass - CSS transform classes for positioning
 * @property {string} [hoverTransformClass] - Optional hover transform classes
 *
 * @example
 * const imageData: PerspectiveImageData = {
 *   src: '/assets/img/example.jpg',
 *   alt: 'Example Image',
 *   link: '/detail',
 *   isClickable: true,
 *   zIndex: 30,
 *   transformClass: 'rotate-12 scale-110',
 *   hoverTransformClass: 'hover:rotate-0 hover:scale-125'
 * };
 */
export interface PerspectiveImageData {
  src: string;
  alt: string;
  link?: string;
  isClickable?: boolean;
  zIndex: number;
  transformClass: string;
  hoverTransformClass?: string;
}

@Component({
  selector: 'app-perspective-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perspective-image.html'
})
export class PerspectiveImageComponent {
  /**
   * Image data containing source, positioning, and interaction properties.
   * @type {PerspectiveImageData}
   * @required
   */
  @Input() imageData!: PerspectiveImageData;
  
  /**
   * Additional CSS classes for the container.
   * @type {string}
   * @default ''
   */
  @Input() containerClass: string = '';
  
  /**
   * Flag to enable mobile-specific styling.
   * @type {boolean}
   * @default false
   */
  @Input() isMobile: boolean = false;

  /**
   * Builds CSS classes for the image element.
   * @returns {string} CSS classes for the image
   */
  getImageClasses(): string {
    const baseClasses = 'w-full rounded-xl';
    return baseClasses;
  }

  /**
   * Builds CSS classes for the container element with positioning and effects.
   * @returns {string} CSS classes for the container
   */
  getContainerClasses(): string {
    let classes = 'absolute p-4 rounded-2xl backdrop-saturate-200 backdrop-blur-2xl bg-white/80 shadow-xl';
    
    if (this.imageData.isClickable) {
      classes += ' cursor-pointer';
    }

    if (this.imageData.transformClass) {
      classes += ` ${this.imageData.transformClass}`;
    }

    if (this.imageData.hoverTransformClass) {
      classes += ` ${this.imageData.hoverTransformClass}`;
    }

    // Add transition for smooth effects
    classes += ' transition-all duration-350 ease-in-out';

    // Add specific positioning based on z-index
    if (this.imageData.zIndex === 30) {
      classes += ' mt-24 right-75';
    } else if (this.imageData.zIndex === 20) {
      classes += ' mt-4 right-7.5';
    } else if (this.imageData.zIndex === 10) {
      classes += ' -right-60 -top-7.5';
    }

    // Add z-index
    classes += ` z-${this.imageData.zIndex}`;

    return classes;
  }

  /**
   * Builds CSS classes for mobile container with responsive positioning.
   * @returns {string} CSS classes for mobile container
   */
  getMobileContainerClasses(): string {
    let classes = 'p-4 shadow-xl cursor-pointer rounded-2xl backdrop-saturate-200 backdrop-blur-2xl bg-white/80';
    
    // Add z-index for mobile
    classes += ` z-${this.imageData.zIndex}`;

    // Add specific margin for mobile
    if (this.imageData.zIndex === 3) {
      classes += ' mt-12';
    } else {
      classes += ' mt-6';
    }

    return classes;
  }

  /**
   * Handles image click events for navigation.
   * Opens the link in the same window if image is clickable.
   */
  onImageClick(): void {
    if (this.imageData.isClickable && this.imageData.link) {
      // In a real environment, you would use Angular Router
      // To maintain the original template functionality
      window.open(this.imageData.link, '_self');
    }
  }
} 
