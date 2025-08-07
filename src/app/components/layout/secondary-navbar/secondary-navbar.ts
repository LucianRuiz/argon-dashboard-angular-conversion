import { Component, Input, computed, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';

/**
 * ========================================
 * SECONDARY NAVBAR COMPONENT
 * ========================================
 *
 * A comprehensive navigation bar component for the Argon Dashboard.
 * Provides hierarchical navigation with dropdowns, responsive design,
 * and advanced theming capabilities based on the original HTML navbar.
 *
 * FEATURES:
 * - Hierarchical navigation structure with dropdowns
 * - Multiple themes and responsive design
 * - Two modes: auth and internal pages
 * - Computed CSS classes for dynamic styling
 * - Mobile hamburger menu
 * - Dropdown menus with nested items
 * - Active state management
 * - Performance optimization with trackBy
 *
 * USAGE:
 * 
 * // For authentication/presentation pages (default)
 * <app-secondary-navbar [data]="navbarData" mode="auth" theme="default"></app-secondary-navbar>
 * 
 * // For internal dashboard pages
 * <app-secondary-navbar [data]="navbarData" mode="internal" theme="default"></app-secondary-navbar>
 *
 * EXAMPLE IMPLEMENTATION:
 * 
 * // In your component.ts
 * export class MyPageComponent {
 *   navbarData: SecondaryNavbarData = {
 *     logoText: 'My Dashboard',
 *     logoRoute: '/dashboard',
 *     menuItems: [...],
 *     buyNowText: 'Buy Now',
 *     buyNowUrl: 'https://example.com'
 *   };
 * }
 * 
 * // In your template for auth pages
 * <app-secondary-navbar [data]="navbarData" mode="auth"></app-secondary-navbar>
 * 
 * // In your template for internal pages
 * <app-secondary-navbar [data]="navbarData" mode="internal"></app-secondary-navbar>
 *
 * MODES:
 * - 'auth': Floating navbar for authentication/presentation pages
 * - 'internal': Fixed navbar for internal dashboard pages
 *
 * REUSABILITY: Very High - Comprehensive navbar with full customization
 * COMPLEXITY: High - Advanced dropdowns and computed classes
 */

/**
 * Data structure for navbar dropdown items.
 * Provides information for navigation links in dropdown menus.
 */
export interface NavbarDropdownItem {
  /** Display title for the dropdown item */
  title: string;
  /** Route path for navigation (optional) */
  route?: string;
  /** Whether the dropdown item is currently active */
  isActive?: boolean;
  /** Child dropdown items for nested navigation */
  children?: NavbarDropdownItem[];
  /** Whether the dropdown item is expanded (for items with children) */
  isExpanded?: boolean;
}

/**
 * Data structure for navbar dropdown sections.
 * Groups related dropdown items together with headers and icons.
 */
export interface NavbarDropdownSection {
  /** Section title */
  title: string;
  /** CSS class for the section icon */
  icon: string;
  /** Custom color class for the icon */
  iconColor?: string;
  /** Optional description for the section */
  description?: string;
  /** Whether the section is expanded */
  isExpanded?: boolean;
  /** Whether the section is currently active */
  isActive?: boolean;
  /** Dropdown items within this section */
  items: NavbarDropdownItem[];
  /** Route path for the section itself (optional) */
  route?: string;
}

/**
 * Data structure for navbar menu items.
 * Provides information for main navigation items in the navbar.
 */
export interface NavbarMenuItem {
  /** Display title for the menu item */
  title: string;
  /** Whether the menu item has a dropdown */
  hasDropdown?: boolean;
  /** Whether the dropdown is currently expanded */
  isExpanded?: boolean;
  /** Whether the menu item is currently active */
  isActive?: boolean;
  /** Dropdown sections for this menu item */
  dropdownSections?: NavbarDropdownSection[];
  /** Route path for direct navigation (optional) */
  route?: string;
}

/**
 * Complete data structure for the secondary navbar component.
 * Provides comprehensive configuration for navbar content and functionality.
 */
export interface SecondaryNavbarData {
  /** Text to display as the main logo/title */
  logoText: string;
  /** Route for the logo link */
  logoRoute: string;
  /** Array of main navigation menu items */
  menuItems: NavbarMenuItem[];
  /** Text for the buy now button */
  buyNowText: string;
  /** URL for the buy now button */
  buyNowUrl: string;
  /** Color for the text elements in the navbar */
  textColor?: string;
  /** Color for the buy now button */
  buyNowButtonColor?: string;
}

/**
 * Secondary Navbar Component
 *
 * A sophisticated navigation bar component designed for dashboard applications.
 * Provides hierarchical navigation with advanced dropdowns, responsive design,
 * and comprehensive customization options. Uses computed properties for
 * dynamic styling and performance optimization.
 *
 * QUALITY FEATURES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Computed properties for dynamic styling
 * - Performance optimization with trackBy
 * - Responsive design with mobile support
 * - Multiple themes support
 *
 * REUSABILITY FEATURES:
 * - Fully configurable through data input
 * - Multiple themes support
 * - Hierarchical navigation structure
 * - Dynamic CSS class computation
 *
 * THEMING SYSTEM:
 * - Computed CSS classes based on theme
 * - Dynamic color schemes
 * - Responsive breakpoints
 * - Mobile-first design
 *
 * PERFORMANCE FEATURES:
 * - Computed properties for efficient styling
 * - trackBy functions for ngFor optimization
 * - Efficient change detection
 *
 * USE CASES:
 * - Dashboard applications
 * - Admin panels
 * - Enterprise applications
 * - Any application requiring advanced navigation
 */
@Component({
  selector: 'app-secondary-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './secondary-navbar.html'
})
export class SecondaryNavbarComponent implements OnInit, OnDestroy {
  /**
   * Theme for the navbar component.
   * Determines the visual styling and color scheme.
   *
   * @type {'default' | 'transparent'} - Navbar theme
   * @default 'default' - Standard theme with background
   */
  @Input() theme: 'default' | 'transparent' = 'default';

  /**
   * Mode for the navbar component.
   * Determines the positioning and styling based on page type.
   *
   * @type {'auth' | 'internal'} - Navbar mode
   * @default 'auth' - Authentication/presentation pages mode
   * 
   * MODES EXPLANATION:
   * - 'auth': Floating navbar with translucent background, absolute positioning,
   *           shadow, and backdrop blur. Used for authentication pages like 
   *           signin, signup, etc.
   * - 'internal': Fixed navbar with solid background, relative positioning,
   *               and minimal shadow. Used for internal dashboard pages.
   */
  @Input() mode: 'auth' | 'internal' = 'auth';

  /**
   * Data for the navbar component.
   * Provides all the content and configuration for the navbar.
   *
   * @type {SecondaryNavbarData} - Complete navbar configuration
   */
  @Input() data: SecondaryNavbarData = {
    logoText: 'Argon Dashboard 2 PRO',
    logoRoute: '/',
    menuItems: [],
    buyNowText: 'Buy Now',
    buyNowUrl: 'https://www.creative-tim.com/product/argon-dashboard-pro-angular',
    textColor: undefined,
    buyNowButtonColor: undefined
  };

  /**
   * Whether the mobile menu is currently open.
   * Controls the visibility of the mobile navigation menu.
   *
   * @type {boolean} - Mobile menu state
   * @default false - Mobile menu is closed by default
   */
  isMobileMenuOpen = false;

  /**
   * Toggles the mobile menu state.
   * Switches between open and closed states for mobile navigation.
   */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  /**
   * Subscription for router events.
   * Used to track navigation changes and update active states.
   *
   * @type {Subscription | undefined} - Router subscription
   */
  private routerSubscription?: Subscription;

  /**
   * Constructor for the SecondaryNavbarComponent.
   * Initializes the router for navigation tracking.
   *
   * @param {Router} router - Angular router service
   */
  constructor(private router: Router) {}

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * Sets up router event subscription for active state management.
   */
  ngOnInit(): void {
    // Subscribe to router events to update active states
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateActiveStates();
      });
  }

  /**
   * Lifecycle hook that is called when the component is destroyed.
   * Cleans up router subscription to prevent memory leaks.
   */
  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  /**
   * Updates the active states of all menu items based on current route.
   * Traverses the menu structure and marks items as active if they match the current URL.
   */
  private updateActiveStates(): void {
    const currentUrl = this.router.url;
    
    // Clear all active states first
    this.clearAllActiveStates();
    
    // Find and mark active items
    this.findAndMarkActiveItem(currentUrl);
  }

  /**
   * Clears all active states from menu items and dropdown sections.
   * Resets the active state of all navigation elements.
   */
  private clearAllActiveStates(): void {
    // Clear active states from menu items
    this.data.menuItems.forEach(menuItem => {
      menuItem.isActive = false;
      
      // Clear active states from dropdown sections
      if (menuItem.dropdownSections) {
        menuItem.dropdownSections.forEach(section => {
          section.isActive = false;
          
          // Clear active states from dropdown items
          section.items.forEach(item => {
            item.isActive = false;
          });
        });
      }
    });
  }

  /**
   * Finds and marks the active menu item based on current URL.
   * Recursively searches through the menu structure to find matching routes.
   *
   * @param {string} currentUrl - Current router URL
   */
  private findAndMarkActiveItem(currentUrl: string): void {
    // Search through menu items
    this.data.menuItems.forEach(menuItem => {
      // Check if menu item route matches
      if (menuItem.route && this.isRouteMatch(menuItem.route, currentUrl)) {
        menuItem.isActive = true;
        return;
      }
      
      // Check dropdown sections
      if (menuItem.dropdownSections) {
        menuItem.dropdownSections.forEach(section => {
          // Check if section route matches
          if (section.route && this.isRouteMatch(section.route, currentUrl)) {
            section.isActive = true;
            menuItem.isActive = true;
            return;
          }
          
          // Check dropdown items
          section.items.forEach(item => {
            if (item.route && this.isRouteMatch(item.route, currentUrl)) {
              item.isActive = true;
              section.isActive = true;
              menuItem.isActive = true;
              return;
            }
          });
        });
      }
    });
  }

  /**
   * Checks if a route matches the current URL.
   * Supports exact matches and partial matches for nested routes.
   *
   * @param {string} route - Route to check
   * @param {string} currentUrl - Current router URL
   * @returns {boolean} - True if routes match
   */
  private isRouteMatch(route: string, currentUrl: string): boolean {
    // Exact match
    if (route === currentUrl) {
      return true;
    }
    
    // Handle root route
    if (route === '/' && currentUrl === '/') {
      return true;
    }
    
    // Handle nested routes (e.g., '/dashboard' matches '/dashboard/analytics')
    if (route !== '/' && currentUrl.startsWith(route)) {
      return true;
    }
    
    return false;
  }

  /**
   * Toggles the dropdown state for a menu item.
   */
  toggleDropdown(menuItem: NavbarMenuItem): void {
    if (menuItem.hasDropdown) {
      menuItem.isExpanded = !menuItem.isExpanded;
    }
  }

  /**
   * Toggles the nested dropdown state for a dropdown section.
   */
  toggleNestedDropdown(section: NavbarDropdownSection): void {
    if (section.items && section.items.length > 0) {
      section.isExpanded = !section.isExpanded;
    }
  }

  /**
   * TrackBy function for menu items to optimize ngFor performance.
   */
  trackByMenuItem(index: number, item: NavbarMenuItem): string {
    return item.title;
  }

  /**
   * TrackBy function for dropdown sections to optimize ngFor performance.
   */
  trackByDropdownSection(index: number, section: NavbarDropdownSection): string {
    return section.title;
  }

  /**
   * TrackBy function for dropdown items to optimize ngFor performance.
   */
  trackByDropdownItem(index: number, item: NavbarDropdownItem): string {
    return item.title;
  }

  /**
   * Computed CSS classes for the main navbar container.
   */
  navbarClasses = computed(() => {
    const baseClasses = 'flex flex-wrap items-center justify-between lg:flex-nowrap lg:justify-start';
    
    if (this.mode === 'internal') {
      // Internal pages navbar (like dashboard pages)
      return `${baseClasses} relative px-0 py-2 mx-6 transition-all ease-in-out shadow-none duration-300 rounded-2xl`;
    } else {
      // Auth pages navbar (like signin, signup)
      const theme = this.theme === 'transparent' 
        ? 'bg-transparent shadow-none' 
        : 'bg-white/80 backdrop-blur-2xl backdrop-saturate-200 shadow-2xl';
      
      return `${baseClasses} ${theme} fixed top-0 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-screen-2xl px-4 py-1 mt-4 rounded-xl`;
    }
  });

  /**
   * Computed CSS classes for the container div.
   */
  containerClasses = computed(() => {
    if (this.mode === 'internal') {
      // Internal pages container
      return 'flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap';
    } else {
      // Auth pages container
      return 'container flex flex-wrap items-center justify-between px-0 lg-max:overflow-hidden lg:flex-nowrap mx-auto';
    }
  });

  /**
   * Computed CSS classes for the logo link.
   */
  logoClasses = computed(() => {
    return 'py-2 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-slate-700 lg:ml-0';
  });

  /**
   * Computed CSS classes for the hamburger button.
   */
  hamburgerClasses = computed(() => {
    return 'px-3 py-1 ml-2 text-lg leading-none bg-transparent rounded-lg shadow-none cursor-pointer lg:hidden text-slate-700';
  });

  /**
   * Computed CSS classes for the navigation container.
   */
  navContainerClasses = computed(() => {
    return 'items-center w-full pt-4 pb-2 transition-all ease-in-out duration-350 lg-max:max-h-0 lg-max:overflow-hidden lg-max:hidden lg-max:bg-transparent lg-max:shadow-none md-max:relative grow basis-full rounded-2xl lg:flex lg:basis-auto lg:py-0';
  });

  /**
   * Computed CSS classes for the main navigation list.
   */
  navListClasses = computed(() => {
    return 'flex flex-col pl-0 mx-auto mb-0 list-none max-md:w-full lg:flex-row';
  });

  /**
   * Computed CSS classes for menu items.
   */
  menuItemClasses = computed(() => (isActive = false) => {
    const baseClasses = 'relative mx-2 group max-md:static lg:after:content-[\'\'] lg:after:top-0 lg:hover:after:top-full lg:after:absolute lg:after:left-0 lg:after:-bottom-6 lg:after:w-full lg:after:h-full';
    
    if (isActive) {
      return `${baseClasses} active`;
    }
    
    return baseClasses;
  });

  /**
   * Computed CSS classes for menu item links.
   */
  menuLinkClasses = computed(() => (isActive = false) => {
    const baseClasses = 'flex items-center justify-between px-4 py-2 pl-2 text-sm font-normal transition-all ease-in-out cursor-pointer select-none text-slate-700 max-lg:text-slate-700 lg:px-2';
    
    if (isActive) {
      return `${baseClasses} active`;
    }
    
    return baseClasses;
  });

  /**
   * Computed CSS classes for dropdown containers.
   */
  dropdownClasses = computed(() => (isExpanded = false) => {
    const baseClasses = 'sm-max:right-auto md-max:left-0 md-max:right-0 lg-max:bg-transparent lg-max:overflow-scroll lg-max:relative lg-max:shadow-none lg-max:transform-none lg-max:block lg-max:h-0 lg-max:transition-all lg-max:duration-350 lg-max:ease lg-max:pt-0 lg-max:pb-0 lg-max:opacity-0 lg-max:top-0 lg-max:origin-top lg-max:pointer-events-none static p-4 m-0 text-left list-none bg-white rounded-2xl lg:mt-4 lg:w-max lg:min-w-fit lg:absolute z-50 text-sm text-slate-500 bg-clip-padding lg:shadow-xl lg:cursor-pointer lg:transition-all lg:duration-300 lg:block lg:opacity-0 lg:top-full lg:origin-top lg:pointer-events-none';
    
    if (isExpanded) {
      return `${baseClasses} lg:group-focus:pointer-events-auto lg:group-focus:opacity-100 lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto`;
    }
    
    return baseClasses;
  });

  /**
   * Computed CSS classes for the buy now button.
   */
  buyNowClasses = computed(() => {
    return 'inline-block px-8 py-2 mb-0 mr-1 text-xs font-bold text-center text-white align-middle transition-all ease-in-out bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer leading-tight tracking-tight hover:-translate-y-px active:opacity-85';
  });

  /**
   * Gets the appropriate dropdown classes based on menu item type.
   */
  getDropdownClasses(menuItem: NavbarMenuItem): string {
    const baseClasses = 'static p-4 m-0 text-left list-none bg-white lg:mt-4 lg:absolute z-50 text-sm text-slate-500 bg-clip-padding lg:shadow-xl lg:cursor-pointer lg:transition-all lg:duration-300 lg:block lg:opacity-0 lg:top-full lg:origin-top lg:pointer-events-none';
    
    // Mobile classes - hide by default, show when expanded (like template original)
    const mobileClasses = menuItem.isExpanded 
      ? 'lg-max:block lg-max:max-h-screen lg-max:opacity-100 lg-max:pointer-events-auto lg-max:transform-none' 
      : 'lg-max:h-0 lg-max:opacity-0 lg-max:pointer-events-none lg-max:transform-none';
    
    const hoverClasses = 'lg:group-hover:pointer-events-auto lg:group-hover:opacity-100';
    
    if (menuItem.title === 'Authentication') {
      return baseClasses + ' lg:w-max lg:min-w-fit rounded-2xl ' + hoverClasses + ' ' + mobileClasses + ' lg-max:transition-all lg-max:duration-350 lg-max:ease lg-max:pt-0 lg-max:pb-0 lg-max:top-0 lg-max:origin-top lg-max:overflow-scroll lg-max:relative lg-max:shadow-none lg-max:transform-none sm-max:right-auto md-max:left-0 md-max:right-0';
    } else if (menuItem.title === 'Applications') {
      return baseClasses + ' lg:w-max lg:min-w-fit rounded-xl ' + hoverClasses + ' ' + mobileClasses + ' lg-max:transition-all lg-max:duration-350 lg-max:ease lg-max:pt-0 lg-max:pb-0 lg-max:top-0 lg-max:origin-top lg-max:overflow-scroll lg-max:relative lg-max:shadow-none lg-max:transform-none sm-max:right-auto md-max:left-0 md-max:right-0';
    } else if (menuItem.title === 'Docs') {
      return baseClasses + ' lg:w-max lg:min-w-fit rounded-2xl ' + hoverClasses + ' ' + mobileClasses + ' lg-max:transition-all lg-max:duration-350 lg-max:ease lg-max:pt-0 lg-max:pb-0 lg-max:top-0 lg-max:origin-top lg-max:overflow-scroll lg-max:relative lg-max:shadow-none lg-max:transform-none sm-max:right-auto md-max:left-0 md-max:right-0';
    } else {
      return baseClasses + ' lg:w-max lg:min-w-fit rounded-2xl ' + hoverClasses + ' ' + mobileClasses + ' lg-max:transition-all lg-max:duration-350 lg-max:ease lg-max:pt-0 lg-max:pb-0 lg-max:top-0 lg-max:origin-top lg-max:overflow-scroll lg-max:relative lg-max:shadow-none lg-max:transform-none sm-max:right-auto md-max:left-0 md-max:right-0';
    }
  }

  /**
   * Gets the appropriate authentication section classes based on position.
   */
  getAuthSectionClasses(index: number, total: number): string {
    const baseClasses = 'after:absolute after:content-[\'\'] after:h-full after:left-full after:w-1/2 after:bottom-0 relative block p-0 bg-white border-0';
    
    if (index === 0) {
      return `${baseClasses} rounded-t-lg`;
    } else if (index === total - 1) {
      return `${baseClasses} rounded-b-lg`;
    }
    
    return baseClasses;
  }

  /**
   * Gets the appropriate column classes for dropdown sections.
   */
  getSectionColumnClasses(menuItem: NavbarMenuItem): string {
    const baseClasses = 'relative max-w-full px-1 flex-none';
    
    if (menuItem.title === 'Pages') {
      return `${baseClasses} w-4/12`;
    } else if (menuItem.title === 'Authentication') {
      return `${baseClasses} w-6/12`;
    } else if (menuItem.title === 'Applications') {
      return `${baseClasses} w-full`;
    } else if (menuItem.title === 'Ecommerce') {
      return `${baseClasses} w-6/12`;
    } else if (menuItem.title === 'Docs') {
      return `${baseClasses} w-full`;
    }
    
    return `${baseClasses} w-4/12`;
  }
} 