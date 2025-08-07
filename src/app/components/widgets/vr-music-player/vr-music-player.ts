import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing VR music player data
 * Defines the structure for music information in virtual reality environments
 */
export interface VrMusicPlayerData {
  /** Song title */
  title: string;
  /** Artist name */
  artist: string;
  /** Background image URL for the music player */
  backgroundImage: string;
  /** Gradient color configuration for the overlay */
  gradientColors?: {
    from: string;
    to: string;
    opacity?: string;
  };
}

/**
 * VR Music Player Component
 * 
 * A component that displays a music player interface designed for virtual reality
 * environments. Features a background image with overlay controls and 3D transform effects.
 * 
 * Features:
 * - Background image display with overlay effects
 * - 3D transform effects on hover
 * - Music playback controls (previous, play/pause, next)
 * - Gradient overlay for better text readability
 * - Interactive buttons with hover and active states
 * - Tooltip system for button labels
 * - VR-optimized design with depth effects
 * 
 * Visual Elements:
 * - Background image with full coverage
 * - Gradient overlay for text contrast
 * - 3D transform effects on hover
 * - Circular control buttons with glass morphism
 * - White text overlay for readability
 * - Shadow effects and rounded corners
 * 
 * 3D Effects:
 * - Transform3D hover effects for depth
 * - Smooth transitions and animations
 * - Glass morphism styling on buttons
 * - Gradient overlays for visual appeal
 * - Responsive hover states
 * 
 * Control Buttons:
 * - Previous track button with backward icon
 * - Play/Pause button with play icon
 * - Next track button with forward icon
 * - Glass morphism styling with transparency
 * - Hover effects with opacity and translation
 * - Active states for user feedback
 * 
 * Tooltip System:
 * - Hidden tooltips for button labels
 * - Popper.js integration for positioning
 * - Arrow indicators for better UX
 * - Black background with white text
 * - Proper z-index layering
 * 
 * Usage:
 * ```html
 * <app-vr-music-player 
 *   [data]="musicData">
 * </app-vr-music-player>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const musicData: VrMusicPlayerData = {
 *   title: 'Midnight City',
 *   artist: 'M83',
 *   backgroundImage: '/assets/img/music-bg.jpg'
 * };
 * ```
 * 
 * Styling Features:
 * - 3D transform effects for VR immersion
 * - Glass morphism design elements
 * - Gradient overlays for visual depth
 * - Responsive hover and active states
 * - Smooth transitions and animations
 * - Modern, immersive design
 * 
 * VR Optimizations:
 * - 3D transform effects for depth perception
 * - Large, accessible control buttons
 * - High contrast text for readability
 * - Smooth animations for comfort
 * - Glass morphism for modern aesthetics
 * 
 * Dependencies:
 * - Tailwind CSS for styling and effects
 * - Angular Common for structural directives
 * - Font Awesome for control icons
 * - Popper.js for tooltip positioning
 * - Background images for visual appeal
 */
@Component({
  selector: 'app-vr-music-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vr-music-player.html'
})
export class VrMusicPlayerComponent {
  /** Music player data containing title, artist, and background image */
  @Input() data!: VrMusicPlayerData;

  /**
   * Get gradient classes based on data configuration or default values
   * @returns Object with gradient classes for ngClass
   */
  getGradientClasses(): { [key: string]: boolean } {
    const defaultGradient = {
      'after:bg-gradient-to-tl': true,
      'after:from-blue-500': true,
      'after:to-violet-500': true,
      'after:opacity-85': true
    };

    if (!this.data.gradientColors) {
      return defaultGradient;
    }

    return {
      'after:bg-gradient-to-tl': true,
      [`after:from-${this.data.gradientColors.from}`]: true,
      [`after:to-${this.data.gradientColors.to}`]: true,
      [`after:opacity-${this.data.gradientColors.opacity || '85'}`]: true
    };
  }
} 
