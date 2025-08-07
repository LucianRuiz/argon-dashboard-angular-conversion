import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * FOOTER COMPONENT
 * ========================================
 * 
 * A comprehensive footer component for the Argon Dashboard.
 * Provides copyright information, brand links, and navigation links
 * with full customization capabilities.
 * 
 * FEATURES:
 * - Dynamic copyright with current year
 * - Configurable brand information
 * - Customizable navigation links
 * - Responsive design with Tailwind CSS
 * - Dark mode support
 * - Multiple CSS class methods for styling flexibility
 * 
 * USAGE:
 * <app-footer [data]="footerData"></app-footer>
 * 
 * REUSABILITY: Very High - Generic footer with full customization
 * COMPLEXITY: Medium - Multiple interfaces and styling methods
 */

/**
 * Data structure for individual footer links.
 * Provides information for navigation links in the footer.
 */
export interface FooterLink {
  /** Display text for the link */
  text: string;
  /** URL destination for the link */
  url: string;
  /** Target attribute for the link ('_blank' for new tab, '_self' for same tab) */
  target?: '_blank' | '_self';
}

/**
 * Complete data structure for the footer component.
 * Provides comprehensive configuration for footer content and styling.
 */
export interface FooterData {
  /** Copyright information configuration */
  copyright: {
    /** Whether to display copyright information */
    enabled: boolean;
    /** Custom year (optional, defaults to current year) */
    year?: number;
    /** Copyright text (e.g., 'made with') */
    text: string;
    /** Brand name to display */
    brandName: string;
    /** Brand URL for linking */
    brandUrl: string;
  };
  /** Array of navigation links to display */
  links: FooterLink[];
}

/**
 * Footer Component
 * 
 * A highly customizable footer component designed for dashboard applications.
 * Provides comprehensive footer functionality with copyright information,
 * brand links, and navigation links. Supports responsive design and dark mode.
 * 
 * QUALITY FEATURES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Comprehensive default configuration
 * - Multiple CSS class methods for styling flexibility
 * - Responsive design with Tailwind CSS
 * - Dark mode support built-in
 * 
 * REUSABILITY FEATURES:
 * - Fully configurable through data input
 * - Dynamic copyright year calculation
 * - Customizable brand information
 * - Flexible link configuration
 * - Multiple styling options
 * - No hardcoded content (except defaults)
 * 
 * STYLING SYSTEM:
 * - Method-based CSS class generation
 * - Responsive breakpoints (lg:)
 * - Dark mode support (dark:)
 * - Consistent spacing and typography
 * - Flexible layout options
 * 
 * USE CASES:
 * - Dashboard applications
 * - Admin panels
 * - Corporate websites
 * - Any application requiring a footer
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  standalone: true,
  imports: [CommonModule],
})
export class FooterComponent {
  
  /**
   * Input data for footer configuration.
   * Provides comprehensive footer content and styling options.
   * 
   * @type {FooterData} - Complete footer configuration
   * @default - Comprehensive default configuration with Creative Tim branding
   */
  @Input() data: FooterData = {
    copyright: {
      enabled: true,
      text: 'made with',
      brandName: 'Creative Tim',
      brandUrl: 'https://www.creative-tim.com'
    },
    links: [
      { text: 'Creative Tim', url: 'https://www.creative-tim.com', target: '_blank' },
      { text: 'About Us', url: 'https://www.creative-tim.com/presentation', target: '_blank' },
      { text: 'Blog', url: 'https://creative-tim.com/blog', target: '_blank' },
      { text: 'License', url: 'https://www.creative-tim.com/license', target: '_blank' }
    ]
  };

  /**
   * Gets the current year for dynamic copyright display.
   * Used when no custom year is provided in the data configuration.
   * 
   * @returns {number} - Current year
   */
  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  /**
   * CSS classes for the main footer container.
   * Provides top padding for footer spacing.
   * 
   * @returns {string} - CSS classes for footer container
   */
  footerClasses(): string {
    return 'pt-4';
  }

  /**
   * CSS classes for the footer content container.
   * Provides full width, horizontal padding, and center alignment.
   * 
   * @returns {string} - CSS classes for content container
   */
  containerClasses(): string {
    return 'w-full px-6 mx-auto';
  }

  /**
   * CSS classes for the footer wrapper.
   * Provides flex layout with responsive justification.
   * 
   * @returns {string} - CSS classes for footer wrapper
   */
  wrapperClasses(): string {
    return 'flex flex-wrap items-center -mx-3 lg:justify-between';
  }

  /**
   * CSS classes for the copyright container.
   * Provides responsive layout and spacing for copyright section.
   * 
   * @returns {string} - CSS classes for copyright container
   */
  copyrightContainerClasses(): string {
    return 'w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none';
  }

  /**
   * CSS classes for the copyright text.
   * Provides typography and responsive text alignment.
   * 
   * @returns {string} - CSS classes for copyright text
   */
  copyrightTextClasses(): string {
    return 'text-sm leading-normal text-center text-slate-500 lg:text-left';
  }

  /**
   * CSS classes for the brand link.
   * Provides typography and dark mode support.
   * 
   * @returns {string} - CSS classes for brand link
   */
  brandLinkClasses(): string {
    return 'font-semibold text-slate-700 dark:text-white';
  }

  /**
   * CSS classes for the links container.
   * Provides responsive layout for navigation links section.
   * 
   * @returns {string} - CSS classes for links container
   */
  linksContainerClasses(): string {
    return 'w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none';
  }

  /**
   * CSS classes for the links list.
   * Provides flex layout with responsive justification.
   * 
   * @returns {string} - CSS classes for links list
   */
  linksListClasses(): string {
    return 'flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end';
  }

  /**
   * CSS classes for individual link items.
   * Currently empty but available for future styling needs.
   * 
   * @returns {string} - CSS classes for link items
   */
  linkItemClasses(): string {
    return '';
  }

  /**
   * CSS classes for individual links.
   * Provides typography, spacing, and hover effects.
   * 
   * @param isLast - Whether this is the last link in the list
   * @returns {string} - CSS classes for individual links
   */
  linkClasses(isLast: boolean = false): string {
    const baseClasses = 'block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500';
    return isLast ? `${baseClasses} pr-0` : baseClasses;
  }
} 
