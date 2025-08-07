import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing VR navigation panel data
 * Defines the structure for navigation elements in virtual reality environments
 */
export interface VrNavigationData {
  /** Profile image URL for the user avatar */
  profileImage: string;
  /** Array of navigation buttons with icons and tooltips */
  buttons: Array<{
    /** Icon class name (Font Awesome or custom icons) */
    icon: string;
    /** Tooltip text for the button */
    tooltip: string;
  }>;
}

/**
 * VR Navigation Panel Component
 * 
 * A component that displays a vertical navigation panel designed for virtual reality
 * environments. Features a user profile image and a series of navigation buttons
 * with tooltips and hover effects.
 * 
 * Features:
 * - User profile image display
 * - Vertical navigation button layout
 * - Interactive buttons with hover effects
 * - Tooltip system for button labels
 * - VR-optimized design with depth effects
 * - Responsive layout for different screen sizes
 * - Smooth transitions and animations
 * 
 * Visual Elements:
 * - Circular profile image at the top
 * - Vertical stack of navigation buttons
 * - White buttons with shadow effects
 * - Hover animations with translation
 * - Tooltip system with arrow indicators
 * - Clean, modern design aesthetic
 * 
 * Navigation Buttons:
 * - White background with shadow effects
 * - Icon-based navigation with Font Awesome
 * - Hover effects with translation and shadow changes
 * - Active states for user feedback
 * - Tooltip system for button labels
 * - Consistent sizing and spacing
 * 
 * Tooltip System:
 * - Hidden tooltips for button labels
 * - Popper.js integration for positioning
 * - Arrow indicators for better UX
 * - Black background with white text
 * - Proper z-index layering
 * - Right-side placement for vertical layout
 * 
 * Profile Section:
 * - User profile image display
 * - Circular avatar with rounded corners
 * - Tooltip for profile information
 * - Clickable profile link
 * - Proper sizing and spacing
 * 
 * Responsive Design:
 * - Mobile: Full width layout
 * - Tablet: Sidebar layout (md:w-1/12)
 * - Desktop: Fixed sidebar with proper margins
 * - Consistent spacing across breakpoints
 * 
 * Usage:
 * ```html
 * <app-vr-navigation-panel 
 *   [data]="navigationData">
 * </app-vr-navigation-panel>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const navigationData: VrNavigationData = {
 *   profileImage: '/assets/img/profile.jpg',
 *   buttons: [
 *     {
 *       icon: 'fas fa-home',
 *       tooltip: 'Home'
 *     },
 *     {
 *       icon: 'fas fa-cog',
 *       tooltip: 'Settings'
 *     },
 *     {
 *       icon: 'fas fa-user',
 *       tooltip: 'Profile'
 *     }
 *   ]
 * };
 * ```
 * 
 * Styling Features:
 * - Shadow effects for depth perception
 * - Hover animations for interactivity
 * - Glass morphism design elements
 * - Responsive hover and active states
 * - Smooth transitions and animations
 * - Modern, immersive design
 * 
 * VR Optimizations:
 * - Large, accessible navigation buttons
 * - High contrast design for readability
 * - Smooth animations for comfort
 * - Clear visual hierarchy
 * - Intuitive navigation patterns
 * 
 * Dependencies:
 * - Tailwind CSS for styling and effects
 * - Angular Common for structural directives
 * - Font Awesome for navigation icons
 * - Popper.js for tooltip positioning
 * - Profile images for user avatars
 */
@Component({
  selector: 'app-vr-navigation-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vr-navigation-panel.html'
})
export class VrNavigationPanelComponent {
  /** Navigation data containing profile image and button configuration */
  @Input() data!: VrNavigationData;

  /**
   * TrackBy function for optimizing ngFor rendering
   * Uses button icon or index for efficient DOM updates
   * @param index - Current index in the array
   * @param button - Current navigation button
   * @returns Button icon or index as unique identifier
   */
  trackByButton(index: number, button: any): string {
    return button.icon || index.toString();
  }
} 
