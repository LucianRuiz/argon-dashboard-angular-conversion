import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapWidgetComponent } from '../map-widget/map-widget';

/**
 * Interface representing navigation data
 * Defines the structure for GPS navigation information
 */
export interface NavigationData {
  /** Current time display */
  currentTime: string;
  /** Estimated arrival time at destination */
  estimatedArrival: string;
  /** Information about the next turn/direction */
  nextTurn: {
    /** Distance to next turn */
    distance: number;
    /** Unit of measurement (e.g., 'm', 'km') */
    unit: string;
    /** Turn instruction (e.g., 'Turn left', 'Continue straight') */
    instruction: string;
  };
  /** Destination information */
  destination: {
    /** Distance to destination */
    distance: number;
    /** Unit of measurement (e.g., 'm', 'km') */
    unit: string;
    /** Destination name/location */
    name: string;
  };
}

/**
 * Interface representing music player data
 * Defines the structure for music playback information
 */
export interface MusicPlayerData {
  /** Current song information */
  currentSong: {
    /** Song title */
    title: string;
    /** Artist name */
    artist: string;
    /** Music genre */
    genre: string;
    /** Album cover image URL */
    coverImage: string;
    /** Spotify logo overlay URL */
    spotifyLogo: string;
  };
  /** Current volume level (0-100) */
  volume: number;
  /** Whether music is currently playing */
  isPlaying: boolean;
}

/**
 * Interface representing control panel data
 * Defines the structure for navigation control elements
 */
export interface ControlPanelData {
  /** Placeholder text for search input */
  searchPlaceholder: string;
  /** Array of control icons with tooltips and states */
  controlIcons: Array<{
    /** Icon class name (Nucleo Icons) */
    icon: string;
    /** Tooltip text for the icon */
    tooltip: string;
    /** Whether the icon is currently active */
    isActive: boolean;
  }>;
}

/**
 * Navigation Panel Component
 * 
 * A comprehensive navigation dashboard that combines GPS navigation, music playback,
 * and control panel functionality. Designed for automotive or mobile navigation applications.
 * 
 * Features:
 * - Real-time navigation information with turn-by-turn directions
 * - Interactive map display using MapWidgetComponent
 * - Integrated music player with Spotify-style interface
 * - Search functionality with placeholder text
 * - Control icons with tooltips and active states
 * - Responsive design for different screen sizes
 * - Dark mode support throughout all sections
 * 
 * Layout Sections:
 * - Header: Search input and control icons with current time
 * - Trip Info: Estimated arrival, next turn, and destination details
 * - Map: Interactive map display for navigation
 * - Music Player: Current song info and playback controls
 * 
 * Navigation Features:
 * - Current time display
 * - Estimated arrival time calculation
 * - Distance to next turn with instructions
 * - Destination distance and name
 * - Visual separators between sections
 * 
 * Music Integration:
 * - Album cover display with Spotify branding
 * - Song title, artist, and genre information
 * - Playback controls (previous, play/pause, next)
 * - Volume control with visual slider
 * - Menu icons for additional functionality
 * 
 * Usage:
 * ```html
 * <app-navigation-panel 
 *   [navigationData]="navData"
 *   [musicData]="musicData"
 *   [controlData]="controlData">
 * </app-navigation-panel>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const navData: NavigationData = {
 *   currentTime: '14:30',
 *   estimatedArrival: '15:45',
 *   nextTurn: {
 *     distance: 200,
 *     unit: 'm',
 *     instruction: 'Turn left'
 *   },
 *   destination: {
 *     distance: 2.5,
 *     unit: 'km',
 *     name: 'Creative Tim Office'
 *   }
 * };
 * ```
 * 
 * Dependencies:
 * - MapWidgetComponent for map display
 * - Nucleo Icons for control elements
 * - Tailwind CSS for responsive design
 * - Spotify branding assets
 */
@Component({
  selector: 'app-navigation-panel',
  standalone: true,
  imports: [CommonModule, MapWidgetComponent],
  templateUrl: './navigation-panel.html'
})
export class NavigationPanelComponent implements OnInit, AfterViewInit {
  /** Navigation data including current time, arrival estimates, and turn information */
  @Input() navigationData: NavigationData | null = null;
  
  /** Music player data including current song and playback state */
  @Input() musicData: MusicPlayerData | null = null;
  
  /** Control panel data including search placeholder and control icons */
  @Input() controlData: ControlPanelData | null = null;

  @ViewChild('volumeSlider', { static: false }) volumeSliderRef!: ElementRef;
  @ViewChild('volumeTrack', { static: false }) volumeTrackRef!: ElementRef;

  ngOnInit() {
    // Initialize with default volume if not set
    if (this.musicData && this.musicData.volume === undefined) {
      this.musicData.volume = 40;
    }
  }

  ngAfterViewInit() {
    this.initializeVolumeSlider();
  }

  private initializeVolumeSlider() {
    // Create interactive volume slider
    if (this.volumeTrackRef && this.volumeSliderRef) {
      const track = this.volumeTrackRef.nativeElement;
      const slider = this.volumeSliderRef.nativeElement;
      
      // Set initial position
      this.updateVolumeSlider(this.musicData?.volume || 40);
      
      // Add click event to track
      track.addEventListener('click', (event: MouseEvent) => {
        const rect = track.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const percentage = (clickX / rect.width) * 100;
        const newVolume = Math.max(0, Math.min(100, Math.round(percentage)));
        this.updateVolume(newVolume);
      });

      // Add drag functionality to slider
      let isDragging = false;
      
      slider.addEventListener('mousedown', () => {
        isDragging = true;
      });

      document.addEventListener('mousemove', (event: MouseEvent) => {
        if (isDragging) {
          const rect = track.getBoundingClientRect();
          const mouseX = event.clientX - rect.left;
          const percentage = (mouseX / rect.width) * 100;
          const newVolume = Math.max(0, Math.min(100, Math.round(percentage)));
          this.updateVolume(newVolume);
        }
      });

      document.addEventListener('mouseup', () => {
        isDragging = false;
      });
    }
  }

  private updateVolumeSlider(volume: number) {
    if (this.volumeSliderRef) {
      const slider = this.volumeSliderRef.nativeElement;
      slider.style.left = `${volume}%`;
    }
  }

  private updateVolume(newVolume: number) {
    if (this.musicData) {
      this.musicData.volume = newVolume;
      this.updateVolumeSlider(newVolume);
    }
  }

  // Method to handle play/pause toggle
  togglePlayPause() {
    if (this.musicData) {
      this.musicData.isPlaying = !this.musicData.isPlaying;
      console.log(`Music ${this.musicData.isPlaying ? 'playing' : 'paused'}`);
    }
  }

  // Method to handle previous track
  previousTrack() {
    console.log('Previous track');
    // Add logic to change to previous track
  }

  // Method to handle next track
  nextTrack() {
    console.log('Next track');
    // Add logic to change to next track
  }
} 
