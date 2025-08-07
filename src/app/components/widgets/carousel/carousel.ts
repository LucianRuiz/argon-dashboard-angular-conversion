import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing a carousel slide
 * Defines the structure for individual carousel slide content
 */
export interface CarouselSlide {
  /** URL or path to the slide background image */
  image: string;
  /** CSS class name for the slide icon (Nucleo Icons) */
  icon: string;
  /** Slide title text */
  title: string;
  /** Slide description text */
  description: string;
}

/**
 * Carousel Component
 * 
 * A responsive image carousel widget with navigation controls and smooth transitions.
 * Displays slides with background images, icons, titles, and descriptions.
 * 
 * Features:
 * - Smooth slide transitions with opacity animations
 * - Previous/Next navigation buttons
 * - Circular navigation (loops back to first/last slide)
 * - Customizable height through CSS classes
 * - Responsive design with proper image scaling
 * - Hover effects on navigation buttons
 * - Icon integration with Nucleo Icons
 * - Dark mode support for text content
 * 
 * Navigation:
 * - Next button: Advances to next slide
 * - Previous button: Goes to previous slide
 * - Automatic wrapping at slide boundaries
 * 
 * Usage:
 * ```html
 * <app-carousel 
 *   [slides]="carouselSlides" 
 *   height="h-64">
 * </app-carousel>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const carouselSlides: CarouselSlide[] = [
 *   {
 *     image: '/assets/img/slide-1.jpg',
 *     icon: 'ni-world-2',
 *     title: 'Welcome to Dashboard',
 *     description: 'Explore our amazing features and analytics.'
 *   }
 * ];
 * ```
 */
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html'
})
export class CarouselComponent {
  /** Array of carousel slides to display */
  @Input() slides: CarouselSlide[] = [];
  
  /** CSS height class for the carousel container (default: 'h-full') */
  @Input() height: string = 'h-full';
  
  /** Index of the currently active slide */
  currentSlide = 0;
  
  /**
   * Navigate to the next slide
   * Wraps around to the first slide if at the end
   */
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
  
  /**
   * Navigate to the previous slide
   * Wraps around to the last slide if at the beginning
   */
  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }
  
  /**
   * Navigate directly to a specific slide by index
   * 
   * @param index - The slide index to navigate to
   */
  goToSlide(index: number) {
    this.currentSlide = index;
  }
} 
