import { Component, Input, computed, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';
import { filter, Subscription } from 'rxjs';

/**
 * ========================================
 * SIDEBAR COMPONENT
 * ========================================
 *
 * A comprehensive sidebar navigation component for the Argon Dashboard.
 * Provides hierarchical navigation with sections, menu items, and footer
 * with advanced theming and responsive design capabilities.
 *
 * FEATURES:
 * - Hierarchical navigation structure
 * - Multiple themes (default, transparent)
 * - Multiple modes (default, VR)
 * - Computed CSS classes for dynamic styling
 * - Perfect scrollbar integration
 * - Responsive design with mobile support
 * - Dark mode support
 * - Footer with customizable content
 * - Active state management
 * - Performance optimization with trackBy
 *
 * USAGE:
 * <app-sidebar [data]="sidebarData" theme="default" mode="default"></app-sidebar>
 *
 * REUSABILITY: Very High - Comprehensive sidebar with full customization
 * COMPLEXITY: High - Advanced theming and computed classes
 */

/**
 * Data structure for individual sidebar menu items.
 * Provides information for navigation links in the sidebar.
 */
export interface SidebarMenuItem {
  /** Display title for the menu item */
  title: string;
  /** CSS class for the menu item icon */
  icon: string;
  /** Route path for navigation (optional) */
  route?: string;
  /** Whether the menu item is currently active */
  isActive?: boolean;
  /** Text to display in mini mode */
  miniText: string;
  /** Child menu items for hierarchical navigation */
  children?: SidebarMenuItem[];
  /** Whether the menu item is expanded (for items with children) */
  isExpanded?: boolean;
}

/**
 * Data structure for sidebar sections.
 * Groups related menu items together with optional headers.
 */
export interface SidebarSection {
  /** Section title */
  title: string;
  /** CSS class for the section icon */
  icon: string;
  /** Custom color class for the icon */
  iconColor?: string;
  /** Whether the section is expanded */
  isExpanded?: boolean;
  /** Whether the section is currently active */
  isActive?: boolean;
  /** Menu items within this section */
  items: SidebarMenuItem[];
  /** Whether to show a header for this section */
  showHeader?: boolean;
  /** Custom header title (if different from section title) */
  headerTitle?: string;
  /** Route path for the section itself (optional) */
  route?: string;
}

/**
 * Data structure for sidebar footer content.
 * Provides configuration for footer display and interactions.
 */
export interface SidebarFooter {
  /** Whether to show the footer */
  enabled?: boolean;
  /** URL for footer image */
  image?: string;
  /** Alt text for footer image */
  imageAlt?: string;
  /** Footer title text */
  title?: string;
  /** Footer description text */
  description?: string;
  /** Text for footer button */
  buttonText?: string;
  /** URL for footer button */
  buttonUrl?: string;
  /** Target attribute for footer button */
  buttonTarget?: '_blank' | '_self';
  /** Custom CSS classes for footer button */
  buttonClasses?: string;
}

/**
 * Complete data structure for the sidebar component.
 * Provides comprehensive configuration for sidebar content and functionality.
 */
export interface SidebarData {
  /** URL for the main logo */
  logoUrl: string;
  /** URL for the alternative logo (light/dark mode) */
  logoAltUrl: string;
  /** Text to display next to the logo */
  logoText: string;
  /** Array of navigation sections */
  sections: SidebarSection[];
  /** Whether to show the footer */
  showFooter?: boolean;
  /** Footer configuration */
  footer?: SidebarFooter;
}

/**
 * Sidebar Component
 *
 * A sophisticated sidebar navigation component designed for dashboard applications.
 * Provides hierarchical navigation with advanced theming, responsive design,
 * and comprehensive customization options. Uses computed properties for
 * dynamic styling and performance optimization.
 *
 * QUALITY FEATURES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Computed properties for dynamic styling
 * - Perfect scrollbar integration
 * - Performance optimization with trackBy
 * - Responsive design with mobile support
 * - Dark mode support
 * - Multiple themes and modes
 *
 * REUSABILITY FEATURES:
 * - Fully configurable through data input
 * - Multiple themes (default, transparent)
 * - Multiple modes (default, VR)
 * - Hierarchical navigation structure
 * - Customizable footer
 * - Dynamic CSS class computation
 *
 * THEMING SYSTEM:
 * - Computed CSS classes based on theme and mode
 * - Dynamic color schemes
 * - Responsive breakpoints
 * - Dark mode support
 * - Transparent theme support
 *
 * PERFORMANCE FEATURES:
 * - Computed properties for efficient styling
 * - trackBy functions for ngFor optimization
 * - Perfect scrollbar for smooth scrolling
 * - Efficient change detection
 *
 * USE CASES:
 * - Dashboard applications
 * - Admin panels
 * - Enterprise applications
 * - VR applications (with VR mode)
 * - Any application requiring hierarchical navigation
 */
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, PerfectScrollbarDirective],
  templateUrl: './sidebar.html'
})
export class SidebarComponent implements OnInit, OnDestroy {
  /**
   * Theme for the sidebar component.
   * Determines the visual styling and color scheme.
   *
   * @type {'default' | 'transparent'} - Sidebar theme
   * @default 'default' - Standard theme with background
   */
  @Input() theme: 'default' | 'transparent' = 'default';

  /**
   * Mode for the sidebar component.
   * Determines behavior and layout (default or VR mode).
   *
   * @type {'default' | 'vr'} - Sidebar mode
   * @default 'default' - Standard sidebar mode
   */
  @Input() mode: 'default' | 'vr' = 'default';

  /**
   * Input data for sidebar configuration.
   * Provides comprehensive sidebar content and functionality options.
   *
   * @type {SidebarData} - Complete sidebar configuration
   * @default - Default configuration with Argon Dashboard branding
   */
  @Input() data: SidebarData = {
    logoUrl: './assets/img/logo-ct-dark.png',
    logoAltUrl: './assets/img/logo-ct.png',
    logoText: 'Argon Dashboard 2 PRO',
    sections: []
  };

  /**
   * Title for the sidebar component.
   * Displayed in the sidebar header.
   *
   * @type {string} - Sidebar title
   * @default 'Argon Dashboard 2 PRO' - Default title
   */
  @Input() title: string = 'Argon Dashboard 2 PRO';

  private routerSubscription?: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to navigation changes to detect current route
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateActiveState();
      });

    // Update initial active state
    this.updateActiveState();
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  /**
   * Updates the active state of the sidebar items based on the current route
   */
  private updateActiveState(): void {
    const currentUrl = this.router.url;

    // Clear all active states
    this.clearAllActiveStates();

    // Find and mark the active element corresponding to the current route
    this.findAndMarkActiveItem(currentUrl);
  }

  /**
   * Clears all active states from the sidebar
   */
  private clearAllActiveStates(): void {
    this.data.sections.forEach(section => {
      section.isExpanded = false;
      section.isActive = false;
      if (section.items) {
        section.items.forEach(item => {
          item.isActive = false;
          if (item.children) {
            item.children.forEach(child => {
              child.isActive = false;
            });
          }
        });
      }
    });
  }

  /**
   * Finds and marks as active the item that matches the current route
   */
  private findAndMarkActiveItem(currentUrl: string): void {
    this.data.sections.forEach((section, sectionIndex) => {
      // Check if the section has a matching route (enlace directo sin items)
      if (section.route && (!section.items || section.items.length === 0) && this.isRouteMatch(section.route, currentUrl)) {
        section.isActive = true;
        return;
      }

      // Check if the section has a matching route
      if (section.route && this.isRouteMatch(section.route, currentUrl)) {
        section.isExpanded = true;
        return;
      }

      // Check section items
      if (section.items) {
        let hasActiveItem = false;

        section.items.forEach((item, itemIndex) => {
          // Check if the item has a matching route
          if (item.route && this.isRouteMatch(item.route, currentUrl)) {
            section.isExpanded = true;
            item.isActive = true;
            hasActiveItem = true;
            return;
          }

          // Check item children
          if (item.children) {
            item.children.forEach(child => {
              if (child.route && this.isRouteMatch(child.route, currentUrl)) {
                section.isExpanded = true;
                item.isExpanded = true;
                item.isActive = true; // Marcar el elemento padre como activo cuando un hijo está activo
                child.isActive = true;
                hasActiveItem = true;
                return;
              }
            });
          }
        });

        // Only mark the section as active if it has an active item
        if (hasActiveItem) {
          section.isActive = true;
        }
      }
    });
  }

  /**
   * Checks if a route matches the current URL
   */
  private isRouteMatch(route: string, currentUrl: string): boolean {
    // Normalize routes for comparison
    const normalizedRoute = route.startsWith('/') ? route : `/${route}`;
    const normalizedCurrentUrl = currentUrl.startsWith('/') ? currentUrl : `/${currentUrl}`;

    // Exact comparison (highest priority)
    if (normalizedRoute === normalizedCurrentUrl) {
      return true;
    }

    // For VR routes, we need a more specific comparison
    if (normalizedRoute.includes('/virtual-reality/') && normalizedCurrentUrl.includes('/virtual-reality/')) {
      const routeParts = normalizedRoute.split('/');
      const currentParts = normalizedCurrentUrl.split('/');

      // Compare all relevant segments
      if (routeParts.length >= 4 && currentParts.length >= 4) {
        // Verify that dashboard, virtual-reality and the specific subsegment match
        return routeParts[1] === currentParts[1] &&
               routeParts[2] === currentParts[2] &&
               routeParts[3] === currentParts[3];
      }
    }

    // For other dashboard routes, more specific comparison
    if (normalizedRoute.includes('/dashboard/') && normalizedCurrentUrl.includes('/dashboard/')) {
      const routeParts = normalizedRoute.split('/');
      const currentParts = normalizedCurrentUrl.split('/');

      // If both have 'dashboard' and the next segment matches exactly
      if (routeParts.length >= 3 && currentParts.length >= 3) {
        // For simple routes like /dashboard/default
        if (routeParts.length === 3 && currentParts.length === 3) {
          return routeParts[2] === currentParts[2];
        }
        // For routes with subsegments, verify they match exactly
        if (routeParts.length === currentParts.length) {
          return routeParts.every((part, index) => part === currentParts[index]);
        }
      }
    }

    // Comparison for routes that end with the pattern (only for non-dashboard routes)
    if (!normalizedRoute.includes('/dashboard/') && normalizedCurrentUrl.startsWith(normalizedRoute)) {
      return true;
    }

    return false;
  }

  /**
   * Computed CSS classes for the main sidebar container.
   * Provides dynamic styling based on theme and mode.
   *
   * @returns {string} - CSS classes for sidebar container
   */
  sidebarClasses = computed(() => {
    if (this.mode === 'vr') {
      return 'dark:bg-slate-850 xl:animate-fade-up xl:scale-60 ease-in-out z-990 max-w-64 xl:shadow-xl fixed inset-y-0 left-0 xl:ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 shadow-none transition-all duration-200 xl:left-[18%] xl:mt-6 xl:translate-x-0';
    }

    const baseClasses = 'fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto -translate-x-full border-0 shadow-none xl:ml-6 z-990 max-w-64 rounded-2xl xl:translate-x-0';

    return this.theme === 'transparent'
      ? `${baseClasses} bg-transparent`
      : `${baseClasses} bg-white dark:bg-slate-850`;
  });

  /**
   * Computed CSS classes for the close button.
   * Provides dynamic styling based on theme.
   *
   * @returns {string} - CSS classes for close button
   */
  closeButtonClasses = computed(() => {
    const baseClasses = 'absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times xl:hidden';

    return this.theme === 'transparent'
      ? `${baseClasses} text-white`
      : `${baseClasses} text-slate-400 dark:text-white`;
  });

  /**
   * Computed CSS classes for the logo link.
   * Provides dynamic styling based on theme.
   *
   * @returns {string} - CSS classes for logo link
   */
  logoLinkClasses = computed(() => {
    const baseClasses = 'block px-8 py-6 m-0 text-sm whitespace-nowrap';

    return this.theme === 'transparent'
      ? `${baseClasses} text-white`
      : `${baseClasses} text-slate-700 dark:text-white`;
  });

  /**
   * Computed CSS classes for the dark logo.
   * Controls visibility based on theme and dark mode.
   *
   * @returns {string} - CSS classes for dark logo
   */
  logoDarkClasses = computed(() => {
    return this.theme === 'transparent'
      ? 'hidden'
      : 'inline-block h-full max-w-full max-h-8 dark:hidden';
  });

  /**
   * Computed CSS classes for the light logo.
   * Controls visibility based on theme and dark mode.
   *
   * @returns {string} - CSS classes for light logo
   */
  logoLightClasses = computed(() => {
    return this.theme === 'transparent'
      ? 'inline-block h-full max-w-full max-h-8'
      : 'hidden h-full max-w-full max-h-8 dark:inline-block';
  });

  /**
   * Computed CSS classes for the divider.
   * Provides dynamic styling based on theme.
   *
   * @returns {string} - CSS classes for divider
   */
  dividerClasses = computed(() => {
    return this.theme === 'transparent'
      ? 'h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent'
      : 'h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent';
  });

  primaryLinkClasses = computed(() => (isActive = false) => {
    const baseClasses = 'after:ease-in-out after:font-awesome-5-free ease-in-out text-sm leading-default py-2.7 my-0 mx-2 flex items-center whitespace-nowrap px-4 shadow-none transition-all after:ml-auto after:inline-block after:font-bold after:antialiased after:transition-all after:duration-200 after:content-[\'\\f107\']';

    if (this.theme === 'transparent') {
      return isActive
        ? `${baseClasses} rounded-lg bg-blue-500/30 font-semibold text-white after:rotate-180 after:text-white`
        : `${baseClasses} font-medium text-white after:text-white/80`;
    } else {
      return isActive
        ? `${baseClasses} rounded-lg bg-blue-500/30 font-semibold text-slate-700 after:rotate-180 after:text-slate-800 dark:after:text-white dark:text-white dark:opacity-80`
        : `${baseClasses} font-medium text-slate-500 after:text-slate-800/50 dark:text-white dark:opacity-80 dark:after:text-white/50`;
    }
  });

  primaryIconClasses = computed(() => (icon: string, colorClass = '') => {
    const baseClasses = `text-sm leading-normal ${icon}`;

    if (this.theme === 'transparent') {
      return `${baseClasses} text-white`;
    } else {
      return colorClass ? `${baseClasses} ${colorClass}` : `${baseClasses} text-blue-500`;
    }
  });

  primaryTextClasses = computed(() => {
    const baseClasses = 'ml-1 duration-300 opacity-100 pointer-events-none ease';

    return this.theme === 'transparent'
      ? `${baseClasses} text-white`
      : `${baseClasses} text-slate-700 dark:text-white`;
  });

  secondaryLinkClasses = computed(() => (isActive = false) => {
    const baseClasses = 'ease-in-out py-2.7 ml-5.4 pl-4 leading-default text-sm relative my-0 mr-2 flex items-center whitespace-nowrap bg-transparent pr-4 shadow-none transition-colors';

    if (this.theme === 'transparent') {
      return isActive
        ? `${baseClasses} font-semibold text-white rounded-lg`
        : `${baseClasses} font-medium text-white/80`;
    } else {
      return isActive
        ? `${baseClasses} font-semibold text-slate-800 rounded-lg dark:text-white dark:opacity-100`
        : `${baseClasses} font-medium text-slate-800/50 dark:text-white dark:opacity-60`;
    }
  });

  thirdLevelLinkClasses = computed(() => (isActive = false) => {
    const baseClasses = 'ease-in-out py-2.7 ml-5.4 pl-4 text-3.2 relative my-0 mr-2 flex items-center whitespace-nowrap bg-transparent pr-4 shadow-none transition-colors';

    if (this.theme === 'transparent') {
      return isActive
        ? `${baseClasses} font-semibold text-white rounded-lg`
        : `${baseClasses} font-medium text-white/80`;
    } else {
      return isActive
        ? `${baseClasses} font-semibold text-slate-800 rounded-lg dark:text-white dark:opacity-100`
        : `${baseClasses} font-medium text-slate-800/50 dark:text-white dark:opacity-60`;
    }
  });

  secondaryLinkWithChildrenClasses = computed(() => (isExpanded = false, isActive = false) => {
    const baseClasses = 'after:ease-in-out after:font-awesome-5-free ease-in-out py-2.7 ml-5.4 pl-4 leading-default text-sm relative my-0 mr-2 flex items-center whitespace-nowrap bg-transparent pr-4 shadow-none transition-colors after:ml-auto after:inline-block after:font-bold after:antialiased after:transition-all after:duration-200 after:content-[\'\\f107\']';

    if (this.theme === 'transparent') {
      if (isActive) {
        return `${baseClasses} font-semibold text-white after:rotate-180 after:text-white`;
      }
      return isExpanded
        ? `${baseClasses} font-medium text-white after:rotate-180 after:text-white`
        : `${baseClasses} font-medium text-white/80 after:text-white/50`;
    } else {
      if (isActive) {
        return `${baseClasses} font-semibold text-slate-800 dark:text-white dark:opacity-100 after:rotate-180 after:text-slate-800 dark:after:text-white`;
      }
      return isExpanded
        ? `${baseClasses} font-medium text-slate-800/50 after:rotate-180 after:text-slate-800/50 dark:text-white dark:opacity-60 dark:after:text-white/50`
        : `${baseClasses} font-medium text-slate-800/50 after:text-slate-800/50 dark:text-white dark:opacity-60 dark:after:text-white/50`;
    }
  });

  sectionHeaderClasses = computed(() => {
    const baseClasses = 'pl-6 ml-2 text-xs font-bold leading-tight uppercase opacity-60';

    return this.theme === 'transparent'
      ? `${baseClasses} text-white`
      : `${baseClasses} text-slate-700 dark:text-white`;
  });

  /**
   * Computed CSS classes for the footer container.
   * Provides consistent spacing for footer elements.
   *
   * @returns {string} - CSS classes for footer container
   */
  footerContainerClasses = computed(() => {
    return 'mx-4 my-4';
  });

  /**
   * Computed CSS classes for the footer card.
   * Provides styling for the footer content card.
   *
   * @returns {string} - CSS classes for footer card
   */
  footerCardClasses = computed(() => {
    return 'relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border';
  });

  footerImageClasses = computed(() => {
    return 'w-3/5 mx-auto';
  });

  footerContentClasses = computed(() => {
    return 'flex-auto w-full p-4 pt-0 text-center';
  });

  footerContentInnerClasses = computed(() => {
    return '';
  });

  footerTitleClasses = computed(() => {
    const baseClasses = 'mb-0';

    return this.theme === 'transparent'
      ? `${baseClasses} text-white`
      : `${baseClasses} text-slate-700 dark:text-white`;
  });

  footerDescriptionClasses = computed(() => {
    const baseClasses = 'mb-0 text-xs font-semibold leading-tight';

    return this.theme === 'transparent'
      ? `${baseClasses} text-white`
      : `${baseClasses} text-slate-700 dark:text-white dark:opacity-60`;
  });

  footerButtonClasses = computed(() => (customClasses?: string) => {
    if (customClasses) {
      return customClasses;
    }

    // Default classes according to theme
    const baseClasses = 'inline-block w-full px-8 py-2 mb-4 text-xs font-bold leading-normal text-center capitalize transition-all ease-in rounded-lg shadow-md bg-150 hover:shadow-xs hover:-translate-y-px';

    return this.theme === 'transparent'
      ? `${baseClasses} text-white bg-white/20 hover:bg-white/30`
      : `${baseClasses} text-white bg-slate-700 hover:bg-slate-800`;
  });

  /**
   * Computed CSS classes for main links WITHOUT caret (no expansion icon)
   */
  primaryLinkNoCaretClasses = computed(() => {
    const baseClasses = 'ease-in-out text-sm leading-default py-2.7 my-0 mx-2 flex items-center whitespace-nowrap px-4 shadow-none transition-all';
    if (this.theme === 'transparent') {
      return `${baseClasses} font-medium text-white`;
    } else {
      return `${baseClasses} font-medium text-slate-500 dark:text-white dark:opacity-80`;
    }
  });

  // Component methods
  toggleSection(sectionIndex: number): void {
    // Only change the expanded state, not the active state
    this.data.sections[sectionIndex].isExpanded = !this.data.sections[sectionIndex].isExpanded;
  }

  toggleSubItem(sectionIndex: number, item: SidebarMenuItem): void {
    item.isExpanded = !item.isExpanded;
  }

  trackByItem(index: number, item: SidebarMenuItem): string {
    return item.title + item.route;
  }

  trackBySection(index: number, section: SidebarSection): string {
    return section.title;
  }

  /**
   * Marks a specific menu item as active and resets all others.
   * Useful for programmatically setting the active navigation state (e.g., from a configurator).
   *
   * @param sectionIndex - Index of the section containing the active item
   * @param itemIndex - Index of the active item within the section
   */
  markActiveElement(sectionIndex?: number, itemIndex?: number): void {
    // Remove all previous active classes
    const sidebar = document.getElementById('sidenav-main');
    if (sidebar) {
      const previousActive = sidebar.querySelectorAll('.bg-blue-500\\/30, .bg-gray-500\\/30, .bg-cyan-500\\/30, .bg-emerald-500\\/30, .bg-orange-500\\/30, .bg-red-500\\/30');
      previousActive.forEach(element => {
        element.classList.remove('bg-blue-500/30', 'bg-gray-500/30', 'bg-cyan-500/30', 'bg-emerald-500/30', 'bg-orange-500/30', 'bg-red-500/30');
      });
    }

    // Mark section as active if specified
    if (sectionIndex !== undefined) {
      this.data.sections.forEach((section, index) => {
        section.isExpanded = index === sectionIndex;
        if (section.items) {
          section.items.forEach(item => {
            item.isActive = false;
            if (item.children) {
              item.children.forEach(child => child.isActive = false);
            }
          });
        }
      });

      // Mark specific item as active if specified
      if (itemIndex !== undefined && this.data.sections[sectionIndex].items) {
        this.data.sections[sectionIndex].items[itemIndex].isActive = true;
      }
    }
  }
}
