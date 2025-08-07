import { Component, Input, AfterViewInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing a calendar event
 * Defines the structure for individual calendar events
 */
export interface CalendarEvent {
  /** Event date in ISO string format (YYYY-MM-DD) */
  date: string;
  /** Event title/description */
  title: string;
  /** Optional CSS class for custom event styling */
  className?: string;
}

/**
 * Interface representing calendar widget data
 * Contains calendar configuration and events
 */
export interface CalendarWidgetData {
  /** Widget title displayed in the header */
  title: string;
  /** Current date for the calendar */
  currentDate: Date;
  /** Array of calendar events to display */
  events: CalendarEvent[];
  /** Calendar type: 'main' for full calendar, 'widget' for small widget */
  type?: 'main' | 'widget';
  /** Show header toolbar (only for main calendar) */
  showHeaderToolbar?: boolean;
  /** Initial date for the calendar */
  initialDate?: string;
  /** Calendar height */
  height?: string;
}

/**
 * Calendar Widget Component
 * 
 * A full-featured calendar widget that integrates with FullCalendar library.
 * Displays a monthly calendar view with customizable events and interactive functionality.
 * 
 * Features:
 * - FullCalendar integration with dynamic script loading
 * - Monthly calendar view with event display
 * - Customizable event styling with CSS classes
 * - Current date display in header
 * - Responsive design with dark mode support
 * - Interactive calendar with selectable dates
 * - Automatic script dependency management
 * 
 * Dependencies:
 * - FullCalendar library (loaded dynamically)
 * - Custom full-calendar.js configuration
 * 
 * Technical Implementation:
 * - Dynamically loads FullCalendar scripts if not already present
 * - Converts component data to FullCalendar event format
 * - Manages script loading to prevent conflicts
 * - Updates current date display automatically
 * 
 * Usage:
 * ```html
 * <app-calendar-widget [data]="calendarData"></app-calendar-widget>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const calendarData: CalendarWidgetData = {
 *   title: 'Event Calendar',
 *   currentDate: new Date(),
 *   events: [
 *     {
 *       date: '2024-01-15',
 *       title: 'Team Meeting',
 *       className: 'bg-gradient-to-tl from-blue-500 to-violet-500'
 *     }
 *   ]
 * };
 * ```
 */
@Component({
  selector: 'app-calendar-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-widget.html'
})
export class CalendarWidgetComponent implements AfterViewInit, OnChanges, OnDestroy {
  /** Calendar widget data including title, current date, and events */
  @Input() data!: CalendarWidgetData;

  /**
   * Handle changes to input data
   * Reinitializes calendar when data changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      // Always reinitialize when data changes, including first change
      setTimeout(() => {
        this.loadCalendarScripts();
      }, 300);
    }
  }

  /**
   * Initialize calendar after view is ready
   * Loads required scripts and initializes the calendar
   */
  ngAfterViewInit() {
    // Load necessary scripts for the calendar
    this.loadCalendarScripts();
  }

  /**
   * Clean up calendar instance when component is destroyed
   */
  ngOnDestroy() {
    // Clean up main calendar
    const mainCalendarEl = document.querySelector('[data-toggle="calendar"]') as HTMLElement;
    if (mainCalendarEl) {
      const existingCalendar = (mainCalendarEl as any)._fullCalendar;
      if (existingCalendar) {
        existingCalendar.destroy();
        (mainCalendarEl as any)._fullCalendar = null;
      }
    }

    // Clean up widget calendar
    const widgetCalendarEl = document.querySelector('[data-toggle="widget-calendar"]') as HTMLElement;
    if (widgetCalendarEl) {
      const existingCalendar = (widgetCalendarEl as any)._fullCalendar;
      if (existingCalendar) {
        existingCalendar.destroy();
        (widgetCalendarEl as any)._fullCalendar = null;
      }
    }
  }

  /**
   * Load FullCalendar scripts dynamically
   * Ensures proper script loading order and prevents conflicts
   */
  private loadCalendarScripts() {
    // Load FullCalendar if not already loaded
    if (typeof (window as any).FullCalendar === 'undefined') {
      this.loadScript('assets/js/plugins/fullcalendar.min.js', () => {
        this.loadScript('assets/js/full-calendar.js', () => {
          this.initializeCalendar();
        });
      });
    } else {
      // If FullCalendar is already loaded, just initialize
      this.initializeCalendar();
    }
  }

  /**
   * Load a script dynamically with callback support
   * Prevents duplicate script loading and handles loading errors
   * 
   * @param src - Script source URL
   * @param callback - Function to execute after script loads
   */
  private loadScript(src: string, callback: () => void) {
    // Check if script is already loaded
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      callback();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
  }

  /**
   * Initialize the calendar after scripts are loaded
   * Waits for DOM elements and FullCalendar to be available
   */
  private initializeCalendar() {
    // Try multiple times to ensure DOM is ready
    let attempts = 0;
    const maxAttempts = 10;
    
    const tryInitialize = () => {
      attempts++;
      const mainCalendarEl = document.querySelector('[data-toggle="calendar"]');
      const widgetCalendarEl = document.querySelector('[data-toggle="widget-calendar"]');
      
      if ((mainCalendarEl || widgetCalendarEl) && typeof (window as any).FullCalendar !== 'undefined') {
        // Execute calendar logic directly
        this.createCalendar();
      } else if (attempts < maxAttempts) {
        // Try again after a short delay
        setTimeout(tryInitialize, 100);
      }
    };
    
    setTimeout(tryInitialize, 100);
  }

  /**
   * Create and configure the FullCalendar instance
   * Sets up calendar options, events, and current date display
   */
  private createCalendar() {
    const isMainCalendar = this.data.type === 'main';
    const calendarEl = document.querySelector(isMainCalendar ? '[data-toggle="calendar"]' : '[data-toggle="widget-calendar"]') as HTMLElement;
    
    if (!calendarEl) {
      console.warn('Calendar element not found');
      return;
    }

    // Clear existing calendar if any
    const existingCalendar = (calendarEl as any)._fullCalendar;
    if (existingCalendar) {
      try {
        existingCalendar.destroy();
      } catch (error) {
        console.warn('Error destroying existing calendar:', error);
      }
    }

    // Update current date for widget calendar
    if (!isMainCalendar) {
      const today = new Date();
      const mYear = today.getFullYear();
      const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const mDay = weekday[today.getDay()];

      const dayElements = document.getElementsByClassName("widget-calendar-day");
      const yearElements = document.getElementsByClassName("widget-calendar-year");
      
      if (dayElements.length > 0) dayElements[0].innerHTML = mDay;
      if (yearElements.length > 0) yearElements[0].innerHTML = mYear.toString();
    }

    // Convert service events to FullCalendar format
    const events = this.data.events.map(event => ({
      title: event.title,
      start: event.date,
      end: event.date,
      className: event.className || "bg-gradient-to-tl from-blue-500 to-violet-500"
    }));

    try {
      // Create calendar configuration based on type
      const calendarConfig: any = {
        contentHeight: this.data.height || 'auto',
        initialView: "dayGridMonth",
        selectable: true,
        editable: true,
        events: events
      };

      // Add header toolbar for main calendar
      if (isMainCalendar && this.data.showHeaderToolbar !== false) {
        calendarConfig.headerToolbar = {
          start: 'title',
          center: '',
          end: 'today prev,next'
        };
        calendarConfig.initialDate = this.data.initialDate || '2021-12-01';
        calendarConfig.views = {
          month: {
            titleFormat: {
              month: "long",
              year: "numeric"
            }
          },
          agendaWeek: {
            titleFormat: {
              month: "long",
              year: "numeric",
              day: "numeric"
            }
          },
          agendaDay: {
            titleFormat: {
              month: "short",
              year: "numeric",
              day: "numeric"
            }
          }
        };
      } else {
        // Widget calendar configuration
        calendarConfig.headerToolbar = false;
        calendarConfig.initialDate = this.data.initialDate || "2020-12-01";
      }

      // Create the calendar
      const calendar = new (window as any).FullCalendar.Calendar(calendarEl, calendarConfig);
      
      // Store reference to calendar instance
      (calendarEl as any)._fullCalendar = calendar;
      calendar.render();
      
      console.log(`${isMainCalendar ? 'Main' : 'Widget'} calendar initialized successfully with`, events.length, 'events');
    } catch (error) {
      console.error('Error creating calendar:', error);
    }
  }
} 
