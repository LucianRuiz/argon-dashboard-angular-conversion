import { Component, OnInit, OnDestroy, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';

/**
 * Interface representing the configuration state of the Argon dashboard
 * Manages all configurable aspects of the dashboard appearance and behavior
 */
interface ConfiguratorState {
  /** Whether the configurator panel is open or closed */
  isOpen: boolean;
  /** Current sidebar color theme */
  sidebarColor: 'blue' | 'gray' | 'cyan' | 'emerald' | 'orange' | 'red';
  /** Sidebar appearance type (white or dark background) */
  sidenavType: 'white' | 'dark';
  /** Whether the navbar is fixed/sticky */
  navbarFixed: boolean;
  /** Whether the sidebar is in mini/collapsed mode */
  sidenavMini: boolean;
  /** Whether dark mode is enabled */
  darkMode: boolean;
}

/**
 * Interface representing a sidebar color option
 * Defines the visual properties for each available color theme
 */
interface SidebarColorOption {
  /** Color name identifier */
  name: 'blue' | 'gray' | 'cyan' | 'emerald' | 'orange' | 'red';
  /** Tailwind CSS gradient classes for the color */
  gradient: string;
  /** Data attribute value for the color */
  dataColor: string;
}

/**
 * Argon Configurator Component
 * 
 * A comprehensive dashboard configuration panel that allows users to customize:
 * - Sidebar color themes with 6 different options
 * - Sidebar appearance (white/dark background)
 * - Navbar positioning (fixed/normal)
 * - Sidebar mode (full/mini with hover expansion)
 * - Global dark/light mode toggle
 * 
 * Features:
 * - Floating action button for easy access
 * - Sliding panel with smooth animations
 * - Real-time DOM manipulation for instant visual feedback
 * - Event-driven communication with other components
 * - Hover effects for mini sidebar expansion
 * - Perfect scrollbar integration for smooth scrolling
 * - Responsive design with backdrop blur effects
 * - Memory leak prevention with proper cleanup
 * 
 * Technical Implementation:
 * - Uses direct DOM manipulation for performance-critical operations
 * - Implements custom event system for component communication
 * - Manages complex state transitions with CSS class toggling
 * - Handles hover listeners with proper cleanup
 * - Supports both desktop and mobile interactions
 * 
 * Usage:
 * ```html
 * <app-argon-configurator></app-argon-configurator>
 * ```
 * 
 * The component automatically initializes and can be controlled via:
 * - Direct user interaction with the floating button
 * - Custom DOM events: 'toggleConfigurator', 'closeConfigurator'
 * - Programmatic method calls
 */
@Component({
  selector: 'app-argon-configurator',
  standalone: true,
  imports: [CommonModule, FormsModule, PerfectScrollbarDirective],
  templateUrl: './argon-configurator.html'
})
export class ArgonConfiguratorComponent implements OnInit, OnDestroy {

  /** Current configuration state of the dashboard */
  configuratorState: ConfiguratorState = {
    isOpen: false,
    sidebarColor: 'blue',
    sidenavType: 'white',
    navbarFixed: false,
    sidenavMini: false,
    darkMode: false
  };

  /** Flag to control when the component is ready to render */
  isInitialized: boolean = false;

  /** Event listener references for proper cleanup */
  private toggleConfiguratorListener: (event: Event) => void;
  private closeConfiguratorListener: (event: Event) => void;
  private sidenavMiniChangeListener: (event: Event) => void;

  /** Available sidebar color options with their visual properties */
  sidebarColors: SidebarColorOption[] = [
    {
      name: 'blue',
      gradient: 'bg-gradient-to-tl from-blue-500 to-violet-500',
      dataColor: 'blue'
    },
    {
      name: 'gray',
      gradient: 'bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850',
      dataColor: 'gray'
    },
    {
      name: 'cyan',
      gradient: 'bg-gradient-to-tl from-blue-700 to-cyan-500',
      dataColor: 'cyan'
    },
    {
      name: 'emerald',
      gradient: 'bg-gradient-to-tl from-emerald-500 to-teal-400',
      dataColor: 'emerald'
    },
    {
      name: 'orange',
      gradient: 'bg-gradient-to-tl from-orange-500 to-yellow-500',
      dataColor: 'orange'
    },
    {
      name: 'red',
      gradient: 'bg-gradient-to-tl from-red-600 to-orange-600',
      dataColor: 'red'
    }
  ];

  /** Tracks the currently active sidebar color for state management */
  private currentActiveColor: string = 'blue';

  /** Reference to the configuration panel element for click-outside detection */
  @ViewChild('configPanel', { static: false }) configPanelRef!: ElementRef;

  constructor() {
    // Create event listener references for proper cleanup
    this.toggleConfiguratorListener = () => {
      this.toggleConfigurator();
    };

    this.closeConfiguratorListener = () => {
      this.closeConfigurator();
    };

    this.sidenavMiniChangeListener = (event: Event) => {
      const customEvent = event as CustomEvent;
      this.configuratorState.sidenavMini = customEvent.detail.isMini;
    };
  }

  /**
   * Initialize the configurator component
   * Sets up event listeners and applies initial configuration
   */
  ngOnInit(): void {
    // Apply initial configuration
    this.applyInitialConfiguration();

    // Listen for custom DOM events to open/close the configurator
    document.addEventListener('toggleConfigurator' as any, this.toggleConfiguratorListener);
    document.addEventListener('closeConfigurator' as any, this.closeConfiguratorListener);
    
    // Listen for sidenav mini changes from the navbar
    document.addEventListener('sidenavMiniChange' as any, this.sidenavMiniChangeListener);

    // Initialize GitHub button after a short delay to ensure DOM is ready
    setTimeout(() => {
      this.initializeGitHubButton();
    }, 1000);
  }

  /**
   * Apply initial configuration settings
   * Waits for Angular to finish rendering before applying styles
   */
  private applyInitialConfiguration(): void {
    // Wait for Angular to finish rendering
    setTimeout(() => {
      // Apply initial sidebar configuration
      this.applySidebarColor(this.configuratorState.sidebarColor);
      this.applySidenavType(this.configuratorState.sidenavType);
      
      // Mark component as initialized
      this.isInitialized = true;
    }, 500);
  }

  /**
   * Initialize GitHub button by calling the GitHub buttons script
   * This ensures the button renders correctly when the component is loaded dynamically
   */
  private initializeGitHubButton(): void {
    // Check if GitHub buttons script is loaded
    if (typeof (window as any).GitHubButtons !== 'undefined') {
      // Reinitialize GitHub buttons
      (window as any).GitHubButtons();
    } else {
      // If script is not loaded, try to load it dynamically
      const script = document.createElement('script');
      script.src = 'https://buttons.github.io/buttons.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        // Reinitialize after script loads
        if (typeof (window as any).GitHubButtons !== 'undefined') {
          (window as any).GitHubButtons();
        }
      };
      document.head.appendChild(script);
    }
  }

  /**
   * Toggle the configurator panel open/closed state
   * 
   * @param event - Optional mouse event to prevent propagation
   */
  toggleConfigurator(event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }
    
    this.configuratorState.isOpen = !this.configuratorState.isOpen;
    
    // Initialize GitHub button when configurator opens
    if (this.configuratorState.isOpen) {
      setTimeout(() => {
        this.initializeGitHubButton();
      }, 100);
    }
  }

  /**
   * Close the configurator panel
   */
  closeConfigurator(): void {
    this.configuratorState.isOpen = false;
  }

  /**
   * Get dynamic CSS classes for the configurator panel
   * Controls the sliding animation and positioning
   * 
   * @returns CSS classes string for panel positioning
   */
  getPanelClasses(): string {
    return this.configuratorState.isOpen ? 'right-0' : '-right-90';
  }

  /**
   * Get CSS classes for color selection spans
   * 
   * @param colorName - Name of the color option
   * @returns CSS classes string for color span styling
   */
  getColorSpanClasses(colorName: string): string {
    const baseClasses = 'py-2.2-em text-xs px-3.6-em rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out relative inline-block cursor-pointer whitespace-nowrap border border-solid text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700';
    
    return baseClasses;
  }

  /**
   * Get CSS classes for the white sidenav type button
   * 
   * @returns CSS classes string for white button state
   */
  getWhiteButtonClasses(): string {
    const isActive = this.configuratorState.sidenavType === 'white';
    
    if (isActive) {
      return 'text-white bg-blue-500 border-transparent bg-gradient-to-tl from-blue-500 to-violet-500 hover:border-blue-500';
    } else {
      return 'text-blue-500 bg-transparent border-blue-500 hover:border-blue-500';
    }
  }

  /**
   * Get CSS classes for the dark sidenav type button
   * 
   * @returns CSS classes string for dark button state
   */
  getDarkButtonClasses(): string {
    const isActive = this.configuratorState.sidenavType === 'dark';
    
    if (isActive) {
      return 'text-white bg-blue-500 border-transparent bg-gradient-to-tl from-blue-500 to-violet-500 hover:border-blue-500';
    } else {
      return 'text-blue-500 bg-transparent border-blue-500 hover:border-blue-500';
    }
  }

  /**
   * Select and apply a new sidebar color theme
   * Updates the active color and applies visual changes to the sidebar
   * 
   * @param color - The color theme to apply
   */
  selectSidebarColor(color: 'blue' | 'gray' | 'cyan' | 'emerald' | 'orange' | 'red'): void {
    this.configuratorState.sidebarColor = color;
    this.applySidebarColor(color);
  }

  /**
   * Set the sidenav type (white or dark background)
   * 
   * @param type - The sidenav type to apply
   */
  setSidenavType(type: 'white' | 'dark'): void {
    this.configuratorState.sidenavType = type;
    this.applySidenavType(type);
  }

  /**
   * Handle navbar fixed toggle change
   * Applies fixed navbar styles and emits custom event
   */
  onNavbarFixedChange(): void {
    this.applyNavbarFixed(this.configuratorState.navbarFixed);
    
    // Emit custom DOM event to notify other components
    const event = new CustomEvent('navbarFixedChange', {
      detail: { isFixed: this.configuratorState.navbarFixed }
    });
    document.dispatchEvent(event);
  }

  /**
   * Handle sidenav mini toggle change
   * Applies mini sidebar styles and hover functionality
   */
  onSidenavMiniChange(): void {
    this.applySidenavMini(this.configuratorState.sidenavMini);
  }

  /**
   * Handle dark mode toggle change
   * Applies global dark mode to the document
   */
  onDarkModeChange(): void {
    this.applyDarkMode(this.configuratorState.darkMode);
  }

  /**
   * Apply sidebar color theme by manipulating DOM elements
   * Finds active sidebar elements and applies color classes
   * 
   * @param color - The color theme to apply
   */
  private applySidebarColor(color: 'blue' | 'gray' | 'cyan' | 'emerald' | 'orange' | 'red'): void {
    const sidebar = document.getElementById('sidenav-main');
    if (sidebar) {
      // Find element with active_primary attribute (as in original template)
      let activeElement = sidebar.querySelector('[active_primary]') ||
                         sidebar.querySelector('[active-primary]') ||
                         sidebar.querySelector('.bg-blue-500\\/30');
      
      // If no active element with active_primary, find one with existing color
      if (!activeElement) {
        activeElement = sidebar.querySelector('.bg-gray-500\\/30, .bg-cyan-500\\/30, .bg-emerald-500\\/30, .bg-orange-500\\/30, .bg-red-500\\/30');
      }
      
      // As last resort, mark the first expandable link as active_primary
      if (!activeElement) {
        const firstExpandableLink = sidebar.querySelector('a[href="javascript:;"]');
        if (firstExpandableLink) {
          activeElement = firstExpandableLink;
          activeElement.setAttribute('active_primary', '');
          activeElement.classList.add('bg-blue-500/30'); // Default color
        }
      }
      
      if (activeElement) {
        // Remove all previous color classes
        const colorClasses = ['bg-blue-500/30', 'bg-gray-500/30', 'bg-cyan-500/30', 'bg-emerald-500/30', 'bg-orange-500/30', 'bg-red-500/30'];
        colorClasses.forEach(className => activeElement.classList.remove(className));
        
        // Add new color class
        const newColorClass = `bg-${color}-500/30`;
        activeElement.classList.add(newColorClass);
        
        // Update current active color
        this.currentActiveColor = color;
      } else {
        console.warn('No active_primary element found in sidebar');
      }
    } else {
      console.warn('Sidebar element with ID "sidenav-main" not found');
    }
  }

  /**
   * Apply sidenav type (white or dark background)
   * 
   * @param type - The sidenav type to apply
   */
  private applySidenavType(type: 'white' | 'dark'): void {
    const sidebar = document.getElementById('sidenav-main');
    if (sidebar) {
      if (type === 'white') {
        // Apply white mode (as in original template)
        sidebar.classList.remove('bg-slate-850', 'dark');
        sidebar.classList.add('bg-white');
      } else {
        // Apply dark mode (as in original template)
        sidebar.classList.remove('bg-white');
        sidebar.classList.add('bg-slate-850', 'dark');
      }
    } else {
      console.warn('Sidebar element with ID "sidenav-main" not found');
    }
  }

  /**
   * Apply sidenav mini mode with hover expansion functionality
   * Manages complex DOM manipulations for mini sidebar behavior
   * 
   * @param isMini - Whether to enable mini mode
   */
  private applySidenavMini(isMini: boolean): void {
    const sidebar = document.getElementById('sidenav-main');
    const main = document.querySelector('main');
    
    if (sidebar) {
      if (isMini) {
        // Activate mini sidebar
        sidebar.classList.add('max-w-24', 'overflow-hidden');
        sidebar.classList.remove('max-w-64', 'overflow-y-auto');
        sidebar.setAttribute('mini', 'true');
        
        // Adjust main content
        if (main) {
          main.classList.add('xl:ml-30');
          main.classList.remove('xl:ml-68');
        }
        
        // Hide sidebar footer content but maintain space (sidenav-card)
        const sidenavCard = sidebar.querySelector('[sidenav-card]');
        if (sidenavCard) {
          (sidenavCard as HTMLElement).classList.add('opacity-0', 'pointer-events-none');
        }
        
        // Get elements using specific selectors from our real HTML
        const allAnchors = sidebar.querySelectorAll('a[collapse_trigger="primary"]');
        const ulWithMl6 = sidebar.querySelectorAll('ul.ml-6');
        const allNormalSpans = sidebar.querySelectorAll('span:not(.w-0)');
        const allMiniSpans = sidebar.querySelectorAll('span.w-0');
        
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
        
        // Add hover event listeners
        this.addSidebarHoverListeners(sidebar);
        
      } else {
        // Restore normal sidebar
        sidebar.classList.remove('max-w-24', 'overflow-hidden');
        sidebar.classList.add('max-w-64', 'overflow-y-auto');
        sidebar.removeAttribute('mini');
        
        // Adjust main content
        if (main) {
          main.classList.remove('xl:ml-30');
          main.classList.add('xl:ml-68');
        }
        
        // Show sidebar footer content (sidenav-card)
        const sidenavCard = sidebar.querySelector('[sidenav-card]');
        if (sidenavCard) {
          (sidenavCard as HTMLElement).classList.remove('opacity-0', 'pointer-events-none');
        }
        
        // Restore elements using markers
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
        
        // Restore modified parent elements
        modifiedParents.forEach((parent) => {
          parent.classList.remove('before:content-[none]', 'ml-2');
          parent.classList.add("before:content-['']", 'ml-5.4');
          parent.removeAttribute('data-mini-modified');
        });
        
        // Remove hover event listeners
        this.removeSidebarHoverListeners(sidebar);
      }
    }
  }

  /**
   * Add hover event listeners for mini sidebar expansion
   * 
   * @param sidebar - The sidebar element to add listeners to
   */
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
    
    // Save references to handlers for later removal
    (sidebar as any)._mouseEnterHandler = mouseEnterHandler;
    (sidebar as any)._mouseLeaveHandler = mouseLeaveHandler;
    
    // Add event listeners
    sidebar.addEventListener('mouseenter', mouseEnterHandler);
    sidebar.addEventListener('mouseleave', mouseLeaveHandler);
  }

  /**
   * Remove hover event listeners from sidebar
   * 
   * @param sidebar - The sidebar element to remove listeners from
   */
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

  /**
   * Temporarily expand sidebar on hover (mini mode)
   * 
   * @param sidebar - The sidebar element to expand
   */
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
    
    // Show sidebar footer content temporarily
    const sidenavCard = sidebar.querySelector('[sidenav-card]');
    if (sidenavCard) {
      (sidenavCard as HTMLElement).classList.remove('opacity-0', 'pointer-events-none');
    }
  }

  /**
   * Temporarily contract sidebar on mouse leave (mini mode)
   * 
   * @param sidebar - The sidebar element to contract
   */
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
    
    // Hide sidebar footer content again (maintain space)
    const sidenavCard = sidebar.querySelector('[sidenav-card]');
    if (sidenavCard) {
      (sidenavCard as HTMLElement).classList.add('opacity-0', 'pointer-events-none');
    }
  }

  /**
   * Apply navbar fixed positioning with backdrop blur effects
   * 
   * @param isFixed - Whether to enable fixed navbar
   */
  private applyNavbarFixed(isFixed: boolean): void {
    const navbar = document.querySelector('[navbar-main]') as HTMLElement;
    if (!navbar) return;

    // Get all elements that change color
    const whiteElements = navbar.querySelectorAll('.text-white');
    const whiteBgElements = navbar.querySelectorAll("a[aria-expanded='false'] i.bg-white");
    const whiteBeforeElements = navbar.querySelectorAll('.before\\:text-white');

    if (isFixed) {
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

      // Disable scroll listener since it's in fixed mode
      navbar.setAttribute('navbar-scroll', 'false');
    } else {
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
  }

  /**
   * Apply global dark mode to the document
   * 
   * @param isDark - Whether to enable dark mode
   */
  private applyDarkMode(isDark: boolean): void {
    // As in original template, apply dark mode to HTML element, not body
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  /**
   * Clean up event listeners to prevent memory leaks
   */
  ngOnDestroy(): void {
    // Clean up event listeners
    document.removeEventListener('toggleConfigurator' as any, this.toggleConfiguratorListener);
    document.removeEventListener('closeConfigurator' as any, this.closeConfiguratorListener);
    document.removeEventListener('sidenavMiniChange' as any, this.sidenavMiniChangeListener);
  }

  /**
   * Handle document clicks for closing the configurator panel
   * Implements click-outside functionality with proper button detection
   * 
   * @param event - Mouse event from document click
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.configuratorState.isOpen) return;
    
    const panel = this.configPanelRef?.nativeElement;
    const target = event.target as HTMLElement;
    
    // Don't close if click is on config button or its child elements
    const configButton = document.getElementById('fixed-plugin-button');
    const navbarConfigButton = document.getElementById('navbar-config-button');
    
    if (configButton && (configButton.contains(target) || configButton === target)) {
      return; // Don't close if click is on floating button
    }
    
    if (navbarConfigButton && (navbarConfigButton.contains(target) || navbarConfigButton === target)) {
      return; // Don't close if click is on navbar button
    }
    
    // Close only if click is really outside the panel and not on buttons
    if (panel && !panel.contains(target)) {
      this.closeConfigurator();
    }
  }
} 
