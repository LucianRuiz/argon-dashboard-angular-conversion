import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent, type SidebarData } from '../../../components/layout/sidebar/sidebar';
import { ImageGalleryComponent, PerspectiveImageData } from '../../../components/widgets/image-gallery/image-gallery.component';
import { LandingDataService } from '../../../services/landing-data.service';
import { Observable } from 'rxjs';

/**
 * Landing Dashboard Component
 * 
 * This component implements the landing page of the Argon Dashboard 2 PRO system.
 * It serves as a visual entry point and showcase for the dashboard system, featuring
 * an interactive image gallery with perspective images optimized for both desktop
 * and mobile viewing experiences.
 * 
 * Features:
 * - Transparent navigation sidebar for minimal visual interference
 * - Responsive image gallery with perspective effects
 * - Desktop and mobile optimized image displays
 * - Visual showcase of dashboard capabilities
 * - Clean and modern landing page design
 * - Integration with landing data service for dynamic content
 * 
 * The component serves as the primary entry point to the Argon Dashboard system,
 * providing users with an engaging visual introduction to the platform's features
 * and capabilities through an interactive image gallery experience.
 * 
 * @example
 * ```html
 * <app-landing></app-landing>
 * ```
 */
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    ImageGalleryComponent
  ],
  templateUrl: './landing.html'
})
export class LandingComponent {
  /** Observable for desktop perspective images data */
  desktopImages$: Observable<PerspectiveImageData[]>;
  
  /** Observable for mobile perspective images data */
  mobileImages$: Observable<PerspectiveImageData[]>;
  
  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;

  /**
   * Creates an instance of LandingComponent.
   * 
   * Initializes the component by subscribing to data streams from LandingDataService
   * for sidebar configuration and image gallery data for both desktop and mobile views.
   * 
   * @param landingDataService - Service for managing landing page data and image configurations
   */
  constructor(private landingDataService: LandingDataService) {
    this.sidebarData$ = this.landingDataService.getSidebarData();
    this.desktopImages$ = this.landingDataService.getDesktopImages();
    this.mobileImages$ = this.landingDataService.getMobileImages();
  }
} 
