import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * SOCIAL PROGRESS COMPONENT
 * ========================================
 *
 * A component for displaying progress bars for different social networks with engagement metrics.
 *
 * FEATURES:
 * - Progress bars for social network engagement
 * - Customizable colors and icons for each network
 * - Tooltip support for additional information
 * - Responsive design with Tailwind CSS
 * - Percentage-based progress visualization
 *
 * USAGE:
 * <app-social-progress [data]="socialData"></app-social-progress>
 *
 * REUSABILITY: High - Generic social media progress display
 * COMPLEXITY: Low - Simple progress bar rendering
 */

/**
 * Interface for individual social network data.
 *
 * @property {string} name - Social network name
 * @property {string} icon - Social network icon class
 * @property {string} color - Progress bar color class
 * @property {number} percentage - Progress percentage (0-100)
 *
 * @example
 * const network: SocialNetwork = {
 *   name: 'Facebook',
 *   icon: 'fab fa-facebook',
 *   color: 'bg-blue-500',
 *   percentage: 75
 * };
 */
export interface SocialNetwork {
  /** Social network name */
  name: string;
  /** Social network icon */
  icon: string;
  /** Progress bar color */
  color: string;
  /** Progress percentage */
  percentage: number;
}

/**
 * Interface for social progress component data.
 *
 * @property {string} title - Component title
 * @property {string} tooltipText - Tooltip information text
 * @property {SocialNetwork[]} networks - Array of social networks
 *
 * @example
 * const socialData: SocialProgressData = {
 *   title: 'Social Media Progress',
 *   tooltipText: 'Click for detailed analytics',
 *   networks: [
 *     {
 *       name: 'Facebook',
 *       icon: 'fab fa-facebook',
 *       color: 'bg-blue-500',
 *       percentage: 75
 *     }
 *   ]
 * };
 */
export interface SocialProgressData {
  /** Component title */
  title: string;
  /** Tooltip text */
  tooltipText: string;
  /** Array of social networks */
  networks: SocialNetwork[];
}

/**
 * Social progress component for displaying social network engagement metrics.
 * 
 * Shows progress bars for different social networks with engagement and goal metrics.
 */
@Component({
  selector: 'app-social-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-progress.html'
})
export class SocialProgressComponent {
  
  /**
   * Social progress data containing title, tooltip, and network information.
   * @type {SocialProgressData}
   * @required - Ensures data is always provided
   */
  @Input({ required: true }) data!: SocialProgressData;

  /**
   * Calculates the width of the progress bar.
   * @param percentage - Progress percentage
   * @returns Width as percentage string
   */
  getProgressWidth(percentage: number): string {
    return `${Math.min(percentage, 100)}%`;
  }
} 