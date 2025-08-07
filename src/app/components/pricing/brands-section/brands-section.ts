import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Brand Logo Interface
 * 
 * Defines the structure for individual brand logo data.
 * This interface ensures type safety for brand logo display.
 * 
 * @description
 * The BrandLogo interface defines the essential properties
 * needed to display brand logos with proper accessibility.
 * 
 * @interface
 * @since 1.0.0
 */
export interface BrandLogo {
  /** 
   * Optional brand name for additional context
   * @optional - Brand name provides additional identification
   * @example "Microsoft", "Google", "Apple"
   */
  name?: string;
  
  /** 
   * URL or path to the brand logo image
   * @required - Logo URL is essential for visual display
   * @example "/assets/img/brands/microsoft.png", "https://example.com/logo.svg"
   */
  logoUrl: string;
  
  /** 
   * Alt text for accessibility
   * @required - Alt text provides accessibility for screen readers
   * @example "Microsoft logo", "Google logo", "Apple logo"
   */
  alt: string;
}

/**
 * Brands Section Component
 * 
 * A component designed to display brand logos in a professional layout.
 * Provides a clean way to showcase partner brands, clients, or technology
 * stack with proper accessibility and responsive design.
 * 
 * @description
 * This component creates a professional brands section that displays
 * partner or client logos in an organized, visually appealing manner.
 * It's ideal for pricing pages, landing pages, and any application
 * that needs to showcase brand partnerships or technology integrations.
 * 
 * @features
 * - Brand logo display
 * - Responsive grid layout
 * - Accessibility compliant
 * - Consistent Argon Dashboard styling
 * - Clean, professional appearance
 * - Flexible logo sizing
 * - Hover effects
 * - Screen reader friendly
 * - Optimized image loading
 * 
 * @quality
 * - TypeScript strict mode compliant
 * - Standalone component architecture
 * - Input validation with default values
 * - Performance optimized
 * - Memory efficient
 * - Unit test friendly
 * - No external dependencies
 * - Accessibility focused
 * 
 * @usecases
 * - Pricing page trust indicators
 * - Landing page partnerships
 * - Client showcase sections
 * - Technology stack display
 * - Partner logos section
 * - Brand recognition pages
 * - Trust building interfaces
 * 
 * @example
 * ```html
 * <!-- Basic usage -->
 * <app-brands-section 
 *   [brandLogos]="brandData">
 * </app-brands-section>
 * ```
 * 
 * @example
 * ```typescript
 * // In parent component
 * import { BrandsSectionComponent, BrandLogo } from './brands-section.component';
 * 
 * export class PricingPageComponent {
 *   brandData: BrandLogo[] = [
 *     {
 *       name: 'Microsoft',
 *       logoUrl: '/assets/img/brands/microsoft.png',
 *       alt: 'Microsoft logo'
 *     },
 *     {
 *       name: 'Google',
 *       logoUrl: '/assets/img/brands/google.png',
 *       alt: 'Google logo'
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
  selector: 'app-brands-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands-section.html'
})
export class BrandsSectionComponent {
  /**
   * Array of brand logos to display
   * 
   * @description
   * Input property that contains all brand logos to be displayed
   * in the section. Each logo includes an image URL and alt text
   * for accessibility.
   * 
   * @input
   * @type {BrandLogo[]}
   * @default [] - Empty array by default
   * 
   * @example
   * ```typescript
   * brandLogos = [
   *   {
   *     name: 'Microsoft',
   *     logoUrl: '/assets/img/brands/microsoft.png',
   *     alt: 'Microsoft logo'
   *   },
   *   {
   *     logoUrl: '/assets/img/brands/google.png',
   *     alt: 'Google logo'
   *   }
   * ];
   * ```
   */
  @Input() brandLogos: BrandLogo[] = [];
} 