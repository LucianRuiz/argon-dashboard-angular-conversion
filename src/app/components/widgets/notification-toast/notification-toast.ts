import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ToastData {
  id: string;
  title: string;
  message: string;
  time: string;
  icon: string;
  iconClass: string;
  bgClass?: string;
  textClass?: string;
}

/**
 * Notification Toast Component
 * 
 * Unified component that handles both notification button and its associated toast.
 * 
 * FEATURES:
 * - Single notification button with customizable text and styles
 * - Associated toast with customizable content
 * - Integrated toast functionality
 * - Auto-hide toast after 3.8 seconds
 * - Smooth animations
 * 
 * USAGE:
 * <app-notification-toast 
 *   [buttonText]="'Success Notification'" 
 *   [buttonClass]="'bg-gradient-to-tl from-emerald-500 to-teal-400'"
 *   [toastData]="toastData">
 * </app-notification-toast>
 */
@Component({
  selector: 'app-notification-toast',
  templateUrl: './notification-toast.html',
  standalone: true,
  imports: [CommonModule]
})
export class NotificationToastComponent implements OnInit {

  /** Text to display on the button */
  @Input() buttonText: string = 'Notification';
  
  /** CSS classes for button styling */
  @Input() buttonClass: string = 'bg-gradient-to-tl from-blue-700 to-cyan-500';
  
  /** Toast data for the associated toast */
  @Input() toastData!: ToastData;

  ngOnInit(): void {
    // Initialize toast functionality after view is ready
    setTimeout(() => {
      this.initializeToasts();
    }, 100);
  }

  /**
   * Show a toast notification
   * @param toastId - The ID of the toast to show
   */
  showToast(toastId: string): void {
    const toast = document.getElementById(toastId);
    if (toast) {
      // Show toast
      toast.classList.remove("hidden");
      
      // Animate in
      setTimeout(() => {
        toast.classList.remove("opacity-0");
      }, 100);
      
      // Auto-hide after 3.8 seconds
      setTimeout(() => {
        this.hideToast(toastId);
      }, 3800);
    }
  }

  /**
   * Hide a toast notification
   * @param toastId - The ID of the toast to hide
   */
  hideToast(toastId: string): void {
    const toast = document.getElementById(toastId);
    if (toast) {
      // Animate out
      toast.classList.add("opacity-0");
      
      setTimeout(() => {
        toast.classList.add("hidden");
      }, 200);
    }
  }

  /**
   * Initialize toast buttons with event listeners
   */
  private initializeToasts(): void {
    const triggers = document.querySelectorAll("[toast]");
    triggers.forEach((trigger) => {
      // Remove existing listeners
      trigger.removeEventListener("click", this.handleToastClick.bind(this));
      
      // Add new listener
      trigger.addEventListener("click", this.handleToastClick.bind(this));
    });
  }

  /**
   * Handle toast button click
   * @param event - Click event
   */
  private handleToastClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    
    const trigger = event.currentTarget as HTMLElement;
    const toastId = trigger.getAttribute("data-target");
    
    if (toastId) {
      this.showToast(toastId);
    }
  }
} 