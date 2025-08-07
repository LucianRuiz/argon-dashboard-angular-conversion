import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerspectiveImageComponent } from '../perspective-image/perspective-image';

/**
 * Interface representing perspective image data
 * Defines the structure for individual image with 3D perspective effects
 */
export interface PerspectiveImageData {
  /** Image source URL or path */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Optional link URL for clickable images */
  link?: string;
  /** Whether the image is clickable/interactive */
  isClickable?: boolean;
  /** CSS z-index for layering images */
  zIndex: number;
  /** CSS transform class for 3D positioning */
  transformClass: string;
  /** Optional CSS transform class for hover effects */
  hoverTransformClass?: string;
}

/**
 * Image Gallery Component
 * 
 * A responsive image gallery widget that displays images with 3D perspective effects.
 * Supports both desktop and mobile layouts with different image sets for each.
 * 
 * Features:
 * - Responsive design with separate desktop and mobile layouts
 * - 3D perspective effects using CSS transforms
 * - Layered image display with z-index management
 * - Hover animations and interactive effects
 * - Clickable images with optional links
 * - Accessibility support with alt text
 * - Component composition with PerspectiveImageComponent
 * 
 * Layout Behavior:
 * - Desktop: Hidden on small screens, visible on medium and up
 * - Mobile: Visible only on small screens, hidden on medium and up
 * - Uses Tailwind CSS responsive classes for breakpoint management
 * 
 * Technical Implementation:
 * - Composes with PerspectiveImageComponent for individual image rendering
 * - Separate image arrays for desktop and mobile optimization
 * - CSS transform classes for 3D perspective effects
 * - Z-index management for proper layering
 * 
 * Usage:
 * ```html
 * <app-image-gallery 
 *   [desktopImages]="desktopImageSet"
 *   [mobileImages]="mobileImageSet">
 * </app-image-gallery>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const desktopImageSet: PerspectiveImageData[] = [
 *   {
 *     src: '/assets/img/gallery-1.jpg',
 *     alt: 'Gallery Image 1',
 *     link: '/detail/1',
 *     isClickable: true,
 *     zIndex: 1,
 *     transformClass: 'rotate-y-12 translate-x-4',
 *     hoverTransformClass: 'rotate-y-0 translate-x-0'
 *   }
 * ];
 * ```
 * 
 * Dependencies:
 * - PerspectiveImageComponent for individual image rendering
 * - Tailwind CSS for responsive design
 * - CSS transforms for 3D perspective effects
 */
@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule, PerspectiveImageComponent],
  templateUrl: './image-gallery.component.html'
})
export class ImageGalleryComponent {
  /** Array of images optimized for desktop display with 3D effects */
  @Input() desktopImages: PerspectiveImageData[] = [];
  
  /** Array of images optimized for mobile display with 3D effects */
  @Input() mobileImages: PerspectiveImageData[] = [];
} 
