import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Data structure for footer links.
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
 * Data structure for footer social links.
 * Provides information for social media links in the footer.
 */
export interface FooterSocialLink {
  /** Display platform name for the social link */
  platform: string;
  /** CSS class for the social media icon */
  icon: string;
  /** URL for the social media platform */
  url: string;
  /** Target attribute for the link ('_blank' for new tab, '_self' for same tab) */
  target?: '_blank' | '_self';
}

/**
 * Complete data structure for the secondary footer component.
 * Provides comprehensive configuration for footer content and functionality.
 */
export interface SecondaryFooterData {
  /** Array of navigation links to display */
  links: FooterLink[];
  /** Array of social media links to display */
  socialLinks: FooterSocialLink[];
  /** Copyright information configuration */
  copyright: {
    /** Whether to display copyright information */
    enabled: boolean;
    /** Copyright text */
    text: string;
    /** Brand name to display */
    brandName: string;
  };
}

/**
 * Secondary Footer Component
 *
 * A comprehensive footer component designed for dashboard applications.
 * Provides navigation links, social media links, and copyright information
 * with responsive design and customization options.
 *
 * QUALITY FEATURES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Responsive design with mobile support
 * - Multiple themes support
 *
 * REUSABILITY FEATURES:
 * - Fully configurable through data input
 * - Dynamic link generation
 * - Social media integration
 * - Copyright management
 *
 * USE CASES:
 * - Dashboard applications
 * - Admin panels
 * - Enterprise applications
 * - Any application requiring a professional footer
 */
@Component({
  selector: 'app-secondary-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './secondary-footer.html'
})
export class SecondaryFooterComponent {
  /**
   * Data for the footer component.
   * Provides all the content and configuration for the footer.
   *
   * @type {SecondaryFooterData} - Complete footer configuration
   */
  @Input() data: SecondaryFooterData = {
    links: [
      { text: 'Company', url: 'javascript:;', target: '_blank' },
      { text: 'About Us', url: 'javascript:;', target: '_blank' },
      { text: 'Team', url: 'javascript:;', target: '_blank' },
      { text: 'Products', url: 'javascript:;', target: '_blank' },
      { text: 'Blog', url: 'javascript:;', target: '_blank' },
      { text: 'Pricing', url: 'javascript:;', target: '_blank' }
    ],
    socialLinks: [
      { platform: 'Dribbble', icon: 'fab fa-dribbble', url: 'javascript:;', target: '_blank' },
      { platform: 'Twitter', icon: 'fab fa-twitter', url: 'javascript:;', target: '_blank' },
      { platform: 'Instagram', icon: 'fab fa-instagram', url: 'javascript:;', target: '_blank' },
      { platform: 'Pinterest', icon: 'fab fa-pinterest', url: 'javascript:;', target: '_blank' },
      { platform: 'GitHub', icon: 'fab fa-github', url: 'javascript:;', target: '_blank' }
    ],
    copyright: {
      enabled: true,
      text: 'Copyright ©',
      brandName: 'Argon by Creative Tim.'
    }
  };

  /**
   * Computed CSS classes for the footer container.
   */
  footerClasses = computed(() => {
    return 'py-12';
  });

  /**
   * Computed CSS classes for the main container.
   */
  containerClasses = computed(() => {
    return 'container';
  });

  /**
   * Computed CSS classes for the links container.
   */
  linksContainerClasses = computed(() => {
    return 'w-full max-w-full px-3 mx-auto mb-6 text-center shrink-0 lg:flex-0 lg:w-8/12';
  });

  /**
   * Computed CSS classes for footer links.
   */
  linkClasses = computed(() => {
    return 'mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12';
  });

  /**
   * Computed CSS classes for the social links container.
   */
  socialContainerClasses = computed(() => {
    return 'w-full max-w-full px-3 mx-auto mt-2 mb-6 text-center shrink-0 lg:flex-0 lg:w-8/12';
  });

  /**
   * Computed CSS classes for social media links.
   */
  socialLinkClasses = computed(() => {
    return 'mr-6 text-slate-400';
  });

  /**
   * Computed CSS classes for social media icons.
   */
  socialIconClasses = computed(() => {
    return 'text-lg';
  });

  /**
   * Computed CSS classes for the copyright container.
   */
  copyrightContainerClasses = computed(() => {
    return 'w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0';
  });

  /**
   * Computed CSS classes for copyright text.
   */
  copyrightTextClasses = computed(() => {
    return 'mb-0 text-slate-400';
  });

  /**
   * TrackBy function for footer links to optimize ngFor performance.
   */
  trackByLink(index: number, link: FooterLink): string {
    return link.text;
  }

  /**
   * TrackBy function for social links to optimize ngFor performance.
   */
  trackBySocialLink(index: number, socialLink: FooterSocialLink): string {
    return socialLink.platform;
  }

  /**
   * Gets the current year for dynamic copyright display.
   */
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
} 