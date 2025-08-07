import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, OnDestroy, ChangeDetectorRef, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

/**
 * ========================================
 * NAVBAR COMPONENT
 * ========================================
 * 
 * A comprehensive navigation bar component for the Argon Dashboard.
 * Provides breadcrumb navigation, search functionality, notifications,
 * and sidebar controls with advanced interaction features.
 * 
 * FEATURES:
 * - Breadcrumb navigation with dynamic titles
 * - Search functionality with placeholder
 * - Notification system with avatars and icons
 * - Sidebar toggle controls (mobile and desktop)
 * - Sticky/fixed navbar with backdrop blur
 * - VR mode support with special styling
 * - Responsive design with mobile optimizations
 * - Advanced sidebar mini mode with hover expansion
 * - Configurator toggle functionality
 * - Automatic route change handling
 * 
 * USAGE:
 * <app-navbar [data]="navbarData" mode="default"></app-navbar>
 * 
 * REUSABILITY: Very High - Comprehensive navbar with full customization
 * COMPLEXITY: High - Advanced interactions and multiple modes
 */

// Declare JS script functions for TypeScript compatibility
declare function navbarFixed(element: HTMLElement): void;
declare function sidenavBurger(element: HTMLElement): void;

/**
 * Data structure for navbar notifications.
 * Provides information for displaying notification items in the navbar.
 */
export interface NavbarNotification {
  /** URL for notification avatar image */
  avatarUrl?: string;
  /** SVG icon for notification (alternative to avatar) */
  iconSvg?: string;
  /** Notification title */
  title: string;
  /** Notification description */
  description: string;
  /** Time information for the notification */
  time: string;
}

/**
 * Complete data structure for the navbar component.
 * Provides comprehensive configuration for navbar content and functionality.
 */
export interface NavbarData {
  /** Icon for breadcrumb navigation */
  breadcrumbIcon: string;
  /** Main title for breadcrumb */
  breadcrumbTitle: string;
  /** Section name for breadcrumb */
  breadcrumbSection: string;
  /** Placeholder text for search input */
  searchPlaceholder: string;
  /** Text for sign in button */
  signInText: string;
  /** Icon for sign in button */
  signInIcon: string;
  /** Icon for configurator button */
  configIcon: string;
  /** Icon for notifications bell */
  bellIcon: string;
  /** Array of notification items */
  notifications: NavbarNotification[];
}

/**
 * Navbar Component
 * 
 * A sophisticated navigation bar component designed for dashboard applications.
 * Provides comprehensive navigation functionality including breadcrumbs, search,
 * notifications, and sidebar controls. Supports multiple modes and advanced
 * interactions with automatic cleanup and optimization.
 * 
 * QUALITY FEATURES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Required input validation for data integrity
 * - Multiple lifecycle hooks for proper initialization and cleanup
 * - Advanced DOM manipulation with Renderer2
 * - Router integration for automatic navigation handling
 * - Change detection optimization
 * - Memory leak prevention with proper cleanup
 * 
 * REUSABILITY FEATURES:
 * - Fully configurable through data input
 * - Multiple modes (default, VR)
 * - Custom CSS classes support
 * - Responsive design with mobile optimizations
 * - Advanced sidebar interactions
 * - Notification system integration
 * 
 * INTERACTION FEATURES:
 * - Sticky/fixed navbar with backdrop blur
 * - Sidebar mini mode with hover expansion
 * - Mobile sidebar with touch gestures
 * - Notification dropdown
 * - Configurator toggle
 * - Search functionality
 * 
 * PERFORMANCE FEATURES:
 * - Proper event listener cleanup
 * - Change detection optimization
 * - Memory leak prevention
 * - Efficient DOM manipulation
 * 
 * USE CASES:
 * - Dashboard applications
 * - Admin panels
 * - Enterprise applications
 * - VR applications (with VR mode)
 * - Any application requiring advanced navigation
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  standalone: true,
  imports: [CommonModule],
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  
  /**
   * Required input data for navbar configuration.
   * Provides comprehensive navbar content and functionality options.
   * 
   * @type {NavbarData} - Complete navbar configuration (required)
   * @required - Ensures data is always provided, preventing null errors
   */
  @Input({ required: true }) data!: NavbarData;

  /**
   * Mode for the navbar component.
   * Determines styling and behavior (default or VR mode).
   * 
   * @type {'default' | 'vr'} - Navbar mode
   * @default 'default' - Standard navbar mode
   */
  @Input() mode: 'default' | 'vr' = 'default';

  /**
   * Additional CSS classes for the navbar.
   * Allows custom styling on top of default navbar styles.
   * 
   * @type {string} - Additional CSS classes
   * @default '' - No additional classes
   */
  @Input() navClasses: string = '';

  /** Subscription for router events to handle navigation changes */
  private routerSubscription!: Subscription;
  
  /** Event listener for navbar fixed state changes */
  private navbarFixedListener: (event: Event) => void;
  
  /** Event listener for document clicks to handle sidebar closing */
  private documentClickListener: (event: Event) => void;

  /** Property to track dropdown state */
  public isDropdownOpen: boolean = false;

  /**
   * Constructor for the navbar component.
   * Initializes dependencies and sets up event listeners.
   * 
   * @param elementRef - Reference to the component's DOM element
   * @param renderer - Angular renderer for DOM manipulation
   * @param router - Angular router for navigation handling
   * @param cdr - Change detector for optimization
   */
  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    // Create reference to the navbar fixed listener for proper cleanup
    this.navbarFixedListener = (event: Event) => {
      const customEvent = event as CustomEvent;
      this.handleNavbarFixedChange(customEvent.detail.isFixed);
    };

    // Listener for closing sidebar on mobile when clicking outside
    this.documentClickListener = (event: Event) => {
      this.handleDocumentClick(event as MouseEvent);
    };
  }

  /**
   * Lifecycle hook for component initialization.
   * Sets up router subscription and initializes navbar data.
   */
  ngOnInit(): void {
    // Subscribe to router events to handle navigation changes
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Close dropdown when navigating to a new route
        this.closeDropdown();
        // Close mobile sidenav when navigating
        this.closeSidenavOnMobile();
      }
    });

    // Listen for navbar fixed state changes
    document.addEventListener('navbarFixedChange', this.navbarFixedListener);
    
    // Add document click listener for closing dropdown
    document.addEventListener('click', this.documentClickListener);
  }

  /**
   * Lifecycle hook for after view initialization.
   * Initializes JavaScript functionality after DOM is ready.
   */
  ngAfterViewInit(): void {
    this.initializeScripts();
    this.cdr.detectChanges();
  }

  /**
   * Lifecycle hook for component destruction.
   * Cleans up subscriptions and event listeners to prevent memory leaks.
   */
  ngOnDestroy(): void {
    // Clean up router subscription
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }

    // Remove event listeners
    document.removeEventListener('navbarFixedChange', this.navbarFixedListener);
    document.removeEventListener('click', this.documentClickListener);

    // Clean up sidebar hover listeners
    this.cleanupSidebar();
  }

  /**
   * Host listener for document clicks to close dropdown when clicking outside
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const dropdownTrigger = this.elementRef.nativeElement.querySelector('a[aria-expanded]');
    const dropdownMenu = this.elementRef.nativeElement.querySelector('ul');
    
    if (dropdownTrigger && dropdownMenu && this.isDropdownOpen) {
      const target = event.target as HTMLElement;
      if (!dropdownMenu.contains(target) && !dropdownTrigger.contains(target)) {
        this.closeDropdown();
      }
    }
  }

  /**
   * Toggles the dropdown menu state
   */
  toggleDropdown(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  /**
   * Closes the dropdown menu
   */
  private closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  /**
   * Cleans up sidebar modifications and restores default state.
   * Called during component destruction to prevent side effects.
   */
  private cleanupSidebar(): void {
    const sidenav = document.getElementById('sidenav-main') as HTMLElement;
    const main = document.querySelector('main') as HTMLElement;
    
    if (!sidenav) return;

    // If sidebar is in mini mode, restore to normal
    if (sidenav.getAttribute('mini') === 'true') {
      this.applySidenavNormal(sidenav, main);
    }
    
    // Remove any hover event listeners we added
    this.removeSidebarHoverListeners(sidenav);
    
    // Clean up any temporary state
    sidenav.removeAttribute('mini');
    sidenav.removeAttribute('data-mini-modified');
    
    // Restore base sidebar classes if necessary
    sidenav.classList.remove('max-w-24', 'overflow-hidden');
    sidenav.classList.add('max-w-64', 'overflow-y-auto');
    
    // Restore main content to normal position
    if (main) {
      main.classList.remove('xl:ml-30');
      main.classList.add('xl:ml-68');
    }
  }

  /**
   * Initializes JavaScript scripts for navbar functionality.
   * Sets up navbar fixed behavior and sidenav triggers.
   * Note: Dropdown functionality is now handled directly in Angular.
   */
  private initializeScripts(): void {
    const navbarElement = this.elementRef.nativeElement.querySelector('[navbar-main]');
    const sidenavTrigger = this.elementRef.nativeElement.querySelector('[sidenav-trigger]');

    if (navbarElement) {
      // For VR mode, apply fixed styles immediately
      if (this.mode === 'vr') {
        navbarElement.classList.add('bg-blue-500');
        // No need for sticky logic if it's always styled this way in VR
        return;
      }
      // Initialize sticky navbar logic
      if (typeof navbarFixed === 'function') {
        navbarFixed(navbarElement);
      }
    }

    if (sidenavTrigger) {
      // Initialize hamburger menu
       if (typeof sidenavBurger === 'function') {
        sidenavBurger(sidenavTrigger);
      }
    }

    // Note: Dropdown functionality is now handled directly in Angular methods
    // No need to initialize external dropdown JavaScript
  }

  /**
   * Closes the sidenav on mobile devices.
   * Called when route changes to improve mobile UX.
   */
  private closeSidenavOnMobile(): void {
    const sidenav = document.getElementById('sidenav-main');
    const sidenavBurgerElement = document.querySelector('[sidenav-trigger]');

    if (window.innerWidth < 1200 && sidenav && sidenavBurgerElement) {
      sidenav.style.transform = 'translateX(-100%)';
      sidenav.classList.remove('translate-x-0');
    }
  }

  /**
   * Handles navbar fixed state changes.
   * Applies or removes fixed navbar styles based on scroll position.
   * 
   * @param isFixed - Whether the navbar should be fixed
   */
  private handleNavbarFixedChange(isFixed: boolean): void {
    const navbarElement = this.elementRef.nativeElement.querySelector('[navbar-main]');
    if (!navbarElement || this.mode === 'vr') return;

    // Handle navbar fixed state
    if (isFixed) {
      this.applyFixedNavbarStyles(navbarElement);
    } else {
      this.removeFixedNavbarStyles(navbarElement);
    }
  }

  private applyFixedNavbarStyles(navbar: HTMLElement): void {
    // Get all elements that change color
    const whiteElements = navbar.querySelectorAll('.text-white');
    const whiteBgElements = navbar.querySelectorAll("a[aria-expanded='false'] i.bg-white");
    const whiteBeforeElements = navbar.querySelectorAll('.before\\:text-white');

    // Apply fixed navbar styles (similar to sticky)
    navbar.classList.add(
      'sticky', 
      'top-[1%]', 
      'backdrop-saturate-200', 
      'dark:bg-slate-850/80', 
      'dark:shadow-dark-blur', 
      'backdrop-blur-2xl', 
      'bg-white/80', 
      'shadow-blur', 
      'z-110'
    );

    // Change text colors for light background
    whiteElements.forEach(element => {
      element.classList.remove('text-white');
      element.classList.add('dark:text-white', 'text-slate-700');
    });

    whiteBgElements.forEach(element => {
      element.classList.remove('bg-white');
      element.classList.add('dark:bg-white', 'bg-slate-500');
    });

    whiteBeforeElements.forEach(element => {
      element.classList.add('dark:before:text-white', 'before:text-slate-700');
      element.classList.remove('before:text-white');
    });

    // Disable scroll listener when in fixed mode
    navbar.setAttribute('navbar-scroll', 'false');
  }

  private removeFixedNavbarStyles(navbar: HTMLElement): void {
    // Get all elements that change color
    const whiteElements = navbar.querySelectorAll('.text-slate-700, .dark\\:text-white');
    const whiteBgElements = navbar.querySelectorAll("a[aria-expanded='false'] i.bg-slate-500, a[aria-expanded='false'] i.dark\\:bg-white");
    const whiteBeforeElements = navbar.querySelectorAll('.before\\:text-slate-700, .dark\\:before\\:text-white');

    // Remove fixed navbar styles
    navbar.classList.remove(
      'sticky', 
      'top-[1%]', 
      'backdrop-saturate-200', 
      'dark:bg-slate-850/80', 
      'dark:shadow-dark-blur', 
      'backdrop-blur-2xl', 
      'bg-white/80', 
      'shadow-blur', 
      'z-110'
    );

    // Restore original colors
    whiteElements.forEach(element => {
      element.classList.add('text-white');
      element.classList.remove('dark:text-white', 'text-slate-700');
    });

    whiteBgElements.forEach(element => {
      element.classList.add('bg-white');
      element.classList.remove('dark:bg-white', 'bg-slate-500');
    });

    whiteBeforeElements.forEach(element => {
      element.classList.remove('dark:before:text-white', 'before:text-slate-700');
      element.classList.add('before:text-white');
    });

    // Reactivate scroll listener if not in fixed mode
    navbar.setAttribute('navbar-scroll', 'true');
  }

  /**
   * Handles the configurator button click event.
   * Dispatches a custom DOM event to open/close the configurator.
   */
  toggleConfigurator(event: MouseEvent): void {
    event.preventDefault();
    
    // Emit custom DOM event to open/close the configurator
    const customEvent = new CustomEvent('toggleConfigurator');
    document.dispatchEvent(customEvent);
  }

  /**
   * Handles the desktop hamburger (mini sidenav) button click event.
   * Toggles between mini and normal sidebar modes and dispatches a custom event.
   */
  toggleSidenavMini(event: MouseEvent): void {
    event.preventDefault();
    
    const sidenav = document.getElementById('sidenav-main') as HTMLElement;
    const main = document.querySelector('main') as HTMLElement;
    
    if (!sidenav || !main) return;

    const isCurrentlyMini = sidenav.getAttribute('mini') === 'true';
    
    if (isCurrentlyMini) {
      // Switch to normal mode
      this.applySidenavNormal(sidenav, main);
    } else {
      // Switch to mini mode
      this.applySidenavMini(sidenav, main);
    }

    // Dispatch custom event to inform configurator
    const customEvent = new CustomEvent('sidenavMiniChange', {
      detail: { isMini: !isCurrentlyMini }
    });
    document.dispatchEvent(customEvent);
  }

  /**
   * Handles the mobile hamburger button click event.
   * Toggles the sidebar visibility and animates the burger icon.
   */
  toggleSidenavMobile(event: MouseEvent): void {
    event.preventDefault();
    
    const sidenav = document.querySelector('aside') as HTMLElement;
    const trigger = event.currentTarget as HTMLElement;
    
    if (!sidenav) return;

    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
      // Hide sidebar
      trigger.setAttribute('aria-expanded', 'false');
      sidenav.classList.remove('translate-x-0', 'shadow-xl');
      sidenav.classList.add('-translate-x-full');
      this.animateBurgerIcon(trigger, false);
    } else {
      // Show sidebar
      trigger.setAttribute('aria-expanded', 'true');
      sidenav.classList.add('translate-x-0', 'shadow-xl');
      sidenav.classList.remove('-translate-x-full');
      this.animateBurgerIcon(trigger, true);
    }
  }

  private applySidenavMini(sidenav: HTMLElement, main: HTMLElement): void {
    // Activate mini sidebar (using the same logic as the configurator)
    sidenav.classList.add('max-w-24', 'overflow-hidden');
    sidenav.classList.remove('max-w-64', 'overflow-y-auto');
    sidenav.setAttribute('mini', 'true');
    
    // Adjust main content
    if (main) {
      main.classList.add('xl:ml-30');
      main.classList.remove('xl:ml-68');
    }
    
    // Hide sidebar footer (sidenav-card)
    const sidenavCard = sidenav.querySelector('[sidenav-card]');
    if (sidenavCard) {
      (sidenavCard as HTMLElement).classList.add('hidden');
    }
    
    // Get elements using specific selectors like the configurator
    const allAnchors = sidenav.querySelectorAll('a[collapse_trigger="primary"]');
    const ulWithMl6 = sidenav.querySelectorAll('ul.ml-6');
    const allNormalSpans = sidenav.querySelectorAll('span:not(.w-0)');
    const allMiniSpans = sidenav.querySelectorAll('span.w-0');
    
    // Apply changes for mini mode
    allAnchors.forEach((anchor) => {
      (anchor as HTMLElement).classList.remove("after:content-['\\f107']");
    });
    
    ulWithMl6.forEach((ul) => {
      (ul as HTMLElement).classList.remove('ml-6');
      (ul as HTMLElement).classList.add('ml-0');
    });
    
    allNormalSpans.forEach((span) => {
      (span as HTMLElement).classList.add('opacity-0', 'max-w-0');
      (span as HTMLElement).classList.remove('opacity-100');
      
      if (span.previousElementSibling && span.previousElementSibling.tagName.toLowerCase() === 'span') {
        const parent = span.parentElement;
        if (parent) {
          // Mark element as modified for precise restoration
          parent.setAttribute('data-mini-modified', 'true');
          parent.classList.add('before:content-[none]', 'ml-2');
          parent.classList.remove("before:content-['']", 'ml-5.4');
        }
      }
    });
    
    allMiniSpans.forEach((span) => {
      (span as HTMLElement).classList.remove('opacity-0');
      (span as HTMLElement).classList.add('ml-0.75', 'min-w-7', 'opacity-100');
    });
    
    // Add event listeners for hover
    this.addSidebarHoverListeners(sidenav);
    
    // Animate mini burger button
    this.animateMiniBurger(false);
  }

  private applySidenavNormal(sidenav: HTMLElement, main: HTMLElement): void {
    // Restore normal sidebar (using the same logic as the configurator)
    sidenav.classList.remove('max-w-24', 'overflow-hidden');
    sidenav.classList.add('max-w-64', 'overflow-y-auto');
    sidenav.removeAttribute('mini');
    
    // Adjust main content
    if (main) {
      main.classList.remove('xl:ml-30');
      main.classList.add('xl:ml-68');
    }
    
    // Show sidebar footer (sidenav-card)
    const sidenavCard = sidenav.querySelector('[sidenav-card]');
    if (sidenavCard) {
      (sidenavCard as HTMLElement).classList.remove('hidden');
    }
    
    // Restore elements using markers
    const allAnchors = sidenav.querySelectorAll('a[collapse_trigger="primary"]');
    const ulWithMl0 = sidenav.querySelectorAll('ul.ml-0');
    const allNormalSpans = sidenav.querySelectorAll('span.opacity-0:not(.w-0)');
    const allMiniSpans = sidenav.querySelectorAll('span.opacity-100.w-0');
    const modifiedParents = sidenav.querySelectorAll('[data-mini-modified="true"]');
    
    allAnchors.forEach((anchor) => {
      (anchor as HTMLElement).classList.add("after:content-['\\f107']");
    });
    
    ulWithMl0.forEach((ul) => {
      (ul as HTMLElement).classList.remove('ml-0');
      (ul as HTMLElement).classList.add('ml-6');
    });
    
    allNormalSpans.forEach((span) => {
      (span as HTMLElement).classList.remove('opacity-0', 'max-w-0');
      (span as HTMLElement).classList.add('opacity-100');
    });
    
    allMiniSpans.forEach((span) => {
      (span as HTMLElement).classList.add('opacity-0');
      (span as HTMLElement).classList.remove('ml-0.75', 'min-w-7', 'opacity-100');
    });
    
    // Restore modified parent elements
    modifiedParents.forEach((parent) => {
      parent.classList.remove('before:content-[none]', 'ml-2');
      parent.classList.add("before:content-['']", 'ml-5.4');
      parent.removeAttribute('data-mini-modified');
    });
    
    // Remove event listeners for hover
    this.removeSidebarHoverListeners(sidenav);
    
    // Animate mini burger button
    this.animateMiniBurger(true);
  }

  private animateBurgerIcon(trigger: HTMLElement, isOpen: boolean): void {
    const burgerDiv = trigger.querySelector('.w-4\\.5') as HTMLElement;
    if (!burgerDiv) return;

    const topBread = burgerDiv.firstElementChild as HTMLElement;
    const bottomBread = burgerDiv.lastElementChild as HTMLElement;

    if (isOpen) {
      topBread?.classList.add('translate-x-[5px]');
      bottomBread?.classList.add('translate-x-[5px]');
    } else {
      topBread?.classList.remove('translate-x-[5px]');
      bottomBread?.classList.remove('translate-x-[5px]');
    }
  }

  private animateMiniBurger(isExpanded: boolean): void {
    const miniBurgerContainer = this.elementRef.nativeElement.querySelector('[mini-sidenav-burger]');
    if (!miniBurgerContainer) return;

    const miniBurger = miniBurgerContainer.querySelector('.w-4\\.5') as HTMLElement;
    if (!miniBurger) return;

    const topBread = miniBurger.firstElementChild as HTMLElement;
    const bottomBread = miniBurger.lastElementChild as HTMLElement;

    if (isExpanded) {
      topBread?.classList.add('translate-x-[5px]');
      bottomBread?.classList.add('translate-x-[5px]');
    } else {
      topBread?.classList.remove('translate-x-[5px]');
      bottomBread?.classList.remove('translate-x-[5px]');
    }
  }

  private addSidebarHoverListeners(sidebar: HTMLElement): void {
    // Remove existing listeners first (to avoid duplicates)
    this.removeSidebarHoverListeners(sidebar);
    
    // Create functions that will be the event listeners
    const mouseEnterHandler = () => {
      if (sidebar.getAttribute('mini') === 'true') {
        this.expandSidebarTemporarily(sidebar);
      }
    };
    
    const mouseLeaveHandler = () => {
      if (sidebar.getAttribute('mini') === 'true') {
        this.contractSidebarTemporarily(sidebar);
      }
    };
    
    // Save references to the handlers for later removal
    (sidebar as any)._mouseEnterHandler = mouseEnterHandler;
    (sidebar as any)._mouseLeaveHandler = mouseLeaveHandler;
    
    // Add event listeners
    sidebar.addEventListener('mouseenter', mouseEnterHandler);
    sidebar.addEventListener('mouseleave', mouseLeaveHandler);
  }

  private removeSidebarHoverListeners(sidebar: HTMLElement): void {
    if ((sidebar as any)._mouseEnterHandler) {
      sidebar.removeEventListener('mouseenter', (sidebar as any)._mouseEnterHandler);
      delete (sidebar as any)._mouseEnterHandler;
    }
    
    if ((sidebar as any)._mouseLeaveHandler) {
      sidebar.removeEventListener('mouseleave', (sidebar as any)._mouseLeaveHandler);
      delete (sidebar as any)._mouseLeaveHandler;
    }
  }

  private expandSidebarTemporarily(sidebar: HTMLElement): void {
    const main = document.querySelector('main');
    
    // Expand sidebar
    sidebar.classList.add('max-w-64', 'overflow-y-auto');
    sidebar.classList.remove('max-w-24', 'overflow-hidden');
    
    // Adjust main (temporarily)
    if (main) {
      main.classList.add('xl:ml-68');
      main.classList.remove('xl:ml-30');
    }
    
    // Show elements as normal sidebar
    const allAnchors = sidebar.querySelectorAll('a[collapse_trigger="primary"]');
    const ulWithMl0 = sidebar.querySelectorAll('ul.ml-0');
    const allNormalSpans = sidebar.querySelectorAll('span.opacity-0:not(.w-0)');
    const allMiniSpans = sidebar.querySelectorAll('span.opacity-100.w-0');
    const modifiedParents = sidebar.querySelectorAll('[data-mini-modified="true"]');
    
    allAnchors.forEach((anchor) => {
      (anchor as HTMLElement).classList.add("after:content-['\\f107']");
    });
    
    ulWithMl0.forEach((ul) => {
      (ul as HTMLElement).classList.remove('ml-0');
      (ul as HTMLElement).classList.add('ml-6');
    });
    
    allNormalSpans.forEach((span) => {
      (span as HTMLElement).classList.remove('opacity-0', 'max-w-0');
      (span as HTMLElement).classList.add('opacity-100');
    });
    
    allMiniSpans.forEach((span) => {
      (span as HTMLElement).classList.add('opacity-0');
      (span as HTMLElement).classList.remove('ml-0.75', 'min-w-7', 'opacity-100');
    });
    
    modifiedParents.forEach((parent) => {
      parent.classList.remove('before:content-[none]', 'ml-2');
      parent.classList.add("before:content-['']", 'ml-5.4');
    });
  }

  private contractSidebarTemporarily(sidebar: HTMLElement): void {
    const main = document.querySelector('main');
    
    // Contract sidebar
    sidebar.classList.add('max-w-24', 'overflow-hidden');
    sidebar.classList.remove('max-w-64', 'overflow-y-auto');
    
    // Adjust main (back to mini)
    if (main) {
      main.classList.add('xl:ml-30');
      main.classList.remove('xl:ml-68');
    }
    
    // Return to mini mode
    const allAnchors = sidebar.querySelectorAll('a[collapse_trigger="primary"]');
    const ulWithMl6 = sidebar.querySelectorAll('ul.ml-6');
    const allNormalSpans = sidebar.querySelectorAll('span:not(.w-0)');
    const allMiniSpans = sidebar.querySelectorAll('span.w-0');
    const modifiedParents = sidebar.querySelectorAll('[data-mini-modified="true"]');
    
    allAnchors.forEach((anchor) => {
      (anchor as HTMLElement).classList.remove("after:content-['\\f107']");
    });
    
    ulWithMl6.forEach((ul) => {
      (ul as HTMLElement).classList.remove('ml-6');
      (ul as HTMLElement).classList.add('ml-0');
    });
    
    allNormalSpans.forEach((span) => {
      (span as HTMLElement).classList.add('opacity-0', 'max-w-0');
      (span as HTMLElement).classList.remove('opacity-100');
    });
    
    allMiniSpans.forEach((span) => {
      (span as HTMLElement).classList.remove('opacity-0');
      (span as HTMLElement).classList.add('ml-0.75', 'min-w-7', 'opacity-100');
    });
    
    modifiedParents.forEach((parent) => {
      parent.classList.remove("before:content-['']", 'ml-5.4');
      parent.classList.add('before:content-[none]', 'ml-2');
    });
  }

  private handleDocumentClick(event: MouseEvent): void {
    const sidenav = document.querySelector('aside');
    const mobileTrigger = document.querySelector('[sidenav-trigger]') as HTMLElement;
    
    if (!sidenav || !mobileTrigger) return;

    // Process only if mobile sidebar is open
    if (mobileTrigger.getAttribute('aria-expanded') !== 'true') return;

    const target = event.target as HTMLElement;
    
    // If click was not on the sidebar or trigger, close the sidebar
    if (!sidenav.contains(target) && !mobileTrigger.contains(target)) {
      this.toggleSidenavMobile({ 
        preventDefault: () => {}, 
        currentTarget: mobileTrigger 
      } as any);
    }
  }
} 
