import { Injectable } from '@angular/core';
import type { PerspectiveImageData } from '../components/widgets/perspective-image/perspective-image';
import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { Observable, of } from 'rxjs';

/**
 * LandingDataService
 * 
 * Provides mock data and configuration for the Landing page module. This service supplies
 * data for perspective images (desktop and mobile views) and sidebar configuration to create
 * an interactive landing page experience. The service is designed for demo and UI prototyping
 * purposes, simulating backend responses for the landing page showcase.
 * 
 * The service manages:
 * - Desktop perspective images with 3D transformations and hover effects
 * - Mobile perspective images with simplified layouts
 * - Sidebar configuration for the landing page
 * 
 * @example
 * ```typescript
 * constructor(private landingDataService: LandingDataService) {}
 * 
 * ngOnInit() {
 *   this.landingDataService.getDesktopImages().subscribe(images => {
 *     this.desktopImages = images;
 *   });
 * }
 * ```
 */
export type { PerspectiveImageData };

@Injectable({
  providedIn: 'root'
})
export class LandingDataService {
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves desktop perspective images with 3D transformations and interactive effects.
   * 
   * Returns an array of PerspectiveImageData objects configured for desktop view with:
   * - 3D perspective transformations using CSS transforms
   * - Hover effects for interactive elements
   * - Z-index layering for depth perception
   * - Clickable links for navigation
   * 
   * @returns Observable<PerspectiveImageData[]> - Array of desktop perspective image configurations
   * 
   * @example
   * ```typescript
   * this.landingDataService.getDesktopImages().subscribe(images => {
   *   // images contains desktop perspective configurations
   *   // with 3D transforms and hover effects
   * });
   * ```
   */
  getDesktopImages(): Observable<PerspectiveImageData[]> {
    return of([
      {
        src: 'assets/img/default.jpg',
        alt: 'default page',
        link: '../../index.html',
        isClickable: true,
        zIndex: 30,
        transformClass: '[transform:scale(1)_perspective(2000px)_rotateY(-35deg)_rotateX(2deg)_rotate(0deg)]',
        hoverTransformClass: 'hover:[transform:scale(1)_perspective(2000px)_rotateY(-15deg)_rotateX(0deg)_rotate(0deg)]'
      },
      {
        src: 'assets/img/automotive.jpg',
        alt: 'automotive page',
        isClickable: false,
        zIndex: 20,
        transformClass: '[transform:scale(.7)_perspective(2000px)_rotateY(-32deg)_rotateX(2deg)_rotate(0deg)]'
      },
      {
        src: 'assets/img/crm.jpg',
        alt: 'crm page',
        isClickable: false,
        zIndex: 10,
        transformClass: '[transform:scale(.5)_perspective(2000px)_rotateY(-30deg)_rotateX(2deg)_rotate(0deg)]'
      }
    ]);
  }

  /**
   * Retrieves mobile perspective images with simplified layouts for mobile devices.
   * 
   * Returns an array of PerspectiveImageData objects configured for mobile view with:
   * - Simplified transformations without complex 3D effects
   * - Basic z-index layering
   * - Clickable links for navigation
   * - Optimized for mobile touch interactions
   * 
   * @returns Observable<PerspectiveImageData[]> - Array of mobile perspective image configurations
   * 
   * @example
   * ```typescript
   * this.landingDataService.getMobileImages().subscribe(images => {
   *   // images contains mobile perspective configurations
   *   // with simplified transforms for mobile devices
   * });
   * ```
   */
  getMobileImages(): Observable<PerspectiveImageData[]> {
    return of([
      {
        src: 'assets/img/default.jpg',
        alt: 'default page',
        link: '../../index.html',
        isClickable: true,
        zIndex: 3,
        transformClass: ''
      },
      {
        src: 'assets/img/automotive.jpg',
        alt: 'automotive page',
        isClickable: false,
        zIndex: 2,
        transformClass: ''
      },
      {
        src: 'assets/img/crm.jpg',
        alt: 'crm page',
        isClickable: false,
        zIndex: 1,
        transformClass: ''
      }
    ]);
  }

  /**
   * Retrieves sidebar configuration data for the landing page.
   * 
   * Returns sidebar data without footer configuration, optimized for the landing page layout.
   * The sidebar is configured to complement the perspective image showcase without
   * interfering with the main visual elements.
   * 
   * @returns Observable<SidebarData> - Sidebar configuration without footer
   * 
   * @example
   * ```typescript
   * this.landingDataService.getSidebarData().subscribe(sidebarData => {
   *   // sidebarData contains navigation configuration
   *   // without footer for landing page layout
   * });
   * ```
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getSidebarWithoutFooter());
  }
} 
