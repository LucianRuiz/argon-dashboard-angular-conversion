import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerData } from '../navigation-panel/navigation-panel';

/**
 * Music Player Component
 * 
 * A comprehensive music player widget that displays current song information,
 * playback controls, volume management, and additional menu options.
 * Integrates with Spotify-like interface for music streaming applications.
 * 
 * Features:
 * - Current song display with album cover and Spotify branding
 * - Playback controls (previous, play/pause, next)
 * - Volume control with visual progress bar
 * - Responsive design for desktop and mobile
 * - Dark mode support with theme-aware styling
 * - Interactive buttons with hover and active states
 * - Menu icons for additional functionality
 * 
 * Layout Sections:
 * - Song Info: Album cover, title, artist, genre
 * - Control Buttons: Previous, play/pause, next
 * - Volume Control: Visual volume slider
 * - Menu Icons: Hide menu and track messages
 * 
 * Interactive Elements:
 * - Play/Pause button with dynamic icon changes
 * - Previous/Next navigation buttons
 * - Volume slider with percentage display
 * - Menu icons for additional controls
 * - Hover effects and active states
 * 
 * Visual Design:
 * - Spotify-style interface with logo overlay
 * - Circular album cover with shadow effects
 * - Rounded control buttons with border styling
 * - Progress bar for volume visualization
 * - Icon-based navigation and controls
 * 
 * Usage:
 * ```html
 * <app-music-player [data]="musicPlayerData"></app-music-player>
 * ```
 * 
 * Data structure (from navigation-panel):
 * ```typescript
 * interface MusicPlayerData {
 *   currentSong: {
 *     title: string;
 *     artist: string;
 *     genre: string;
 *     coverImage: string;
 *     spotifyLogo: string;
 *   };
 *   isPlaying: boolean;
 *   volume: number;
 * }
 * ```
 * 
 * Dependencies:
 * - MusicPlayerData interface from navigation-panel
 * - Nucleo Icons for control buttons
 * - Tailwind CSS for responsive design
 * - Spotify branding assets
 */
@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-player.html'
})
export class MusicPlayerComponent {
  /** Music player data including current song, playback state, and volume */
  @Input() data: MusicPlayerData | null = null;
} 
