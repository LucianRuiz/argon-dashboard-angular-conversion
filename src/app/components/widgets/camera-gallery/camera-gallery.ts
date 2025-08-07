import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing a camera device
 * Defines the structure for individual camera data
 */
export interface CameraData {
  /** Unique identifier for the camera */
  id: string;
  /** Display name of the camera */
  name: string;
  /** Whether this camera is currently active/selected */
  active: boolean;
  /** URL or path to the camera's background image/feed */
  backgroundImage: string;
  /** Timestamp of the current camera feed */
  timestamp: string;
  /** Current status of the camera (e.g., 'Live', 'Offline', 'Recording') */
  status: string;
}

/**
 * Interface representing camera gallery data
 * Contains gallery configuration and camera list
 */
export interface CameraGalleryData {
  /** Gallery title displayed in the header */
  title: string;
  /** Array of camera devices to display */
  cameras: CameraData[];
}

/**
 * Camera Gallery Component
 * 
 * A comprehensive camera management widget that displays multiple camera feeds
 * with switching capabilities and control actions. Ideal for surveillance or
 * monitoring dashboards.
 * 
 * Features:
 * - Multi-camera display with tabbed switching
 * - Active camera highlighting and selection
 * - Dropdown menu with camera control actions
 * - Real-time timestamp and status display
 * - Background image display for each camera
 * - Click-outside functionality for dropdown
 * - Responsive design with dark mode support
 * - Smooth transitions and hover effects
 * 
 * Camera Actions:
 * - Pause: Temporarily pause camera feed
 * - Stop: Stop camera recording/streaming
 * - Schedule: Set up recording schedules
 * - Remove: Remove camera from gallery
 * 
 * Usage:
 * ```html
 * <app-camera-gallery [data]="cameraData"></app-camera-gallery>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const cameraData: CameraGalleryData = {
 *   title: 'Security Cameras',
 *   cameras: [
 *     {
 *       id: 'cam-001',
 *       name: 'Front Door',
 *       active: true,
 *       backgroundImage: '/assets/img/camera-feed-1.jpg',
 *       timestamp: '2024-01-15 14:30:25',
 *       status: 'Live'
 *     }
 *   ]
 * };
 * ```
 */
@Component({
  selector: 'app-camera-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './camera-gallery.html'
})
export class CameraGalleryComponent {
  /** Camera gallery data including title and camera list */
  @Input() data!: CameraGalleryData;
  
  /** Whether the dropdown menu is currently open */
  dropdownOpen: boolean = false;

  /**
   * Select a camera and make it active
   * Deactivates all other cameras and closes the dropdown
   * 
   * @param selectedCamera - The camera to activate
   */
  selectCamera(selectedCamera: CameraData) {
    this.data.cameras.forEach(camera => camera.active = false);
    selectedCamera.active = true;
    this.dropdownOpen = false; // Close dropdown when changing camera
  }

  /**
   * Get the currently active camera
   * 
   * @returns The active camera or undefined if none is active
   */
  get activeCamera(): CameraData | undefined {
    return this.data.cameras.find(camera => camera.active);
  }

  /**
   * Toggle the dropdown menu open/closed state
   */
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  /**
   * Handle dropdown action clicks
   * Executes specific logic based on the selected action
   * 
   * @param action - The action to perform ('pause', 'stop', 'schedule', 'remove')
   */
  dropdownAction(action: string) {
    console.log(`Action: ${action} on camera ${this.activeCamera?.name}`);
    this.dropdownOpen = false;
    
    // Here you can implement specific logic for each action
    switch (action) {
      case 'pause':
        // Logic for pausing
        break;
      case 'stop':
        // Logic for stopping
        break;
      case 'schedule':
        // Logic for scheduling
        break;
      case 'remove':
        // Logic for removing
        break;
    }
  }

  /**
   * Handle document clicks to close dropdown when clicking outside
   * Implements click-outside functionality for better UX
   * 
   * @param event - Document click event
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.dropdownOpen = false;
    }
  }
} 
