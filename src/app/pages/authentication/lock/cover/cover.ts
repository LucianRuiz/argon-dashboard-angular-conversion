import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { LockFormComponent, LockFormData } from '../../../../components/auth/lock-form/lock-form';
import { LockCoverDataService } from '../../../../services/lock-cover-data.service';

/**
 * Lock Cover Component
 * 
 * This component implements a lock screen page with a cover design layout.
 * It provides a full-screen authentication interface with background cover imagery
 * and centered lock form for a modern, immersive user experience.
 * 
 * Features:
 * - Lock screen form with cover background design
 * - Secondary navbar and footer for consistent branding
 * - Full-screen layout with centered form elements
 * - Integration with lock data service
 * - Modern and immersive lock screen interface
 * 
 * The component serves as an alternative lock screen design that provides
 * a full-screen experience with cover imagery, creating an engaging and modern
 * unlock interface while maintaining security functionality.
 * 
 * @example
 * ```html
 * <app-lock-cover></app-lock-cover>
 * ```
 */
@Component({
  selector: 'app-lock-cover',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, LockFormComponent],
  templateUrl: './cover.html'
})
export class LockCoverComponent {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for lock form configuration and data */
  formData$: Observable<LockFormData>;

  /**
   * Creates an instance of LockCoverComponent.
   * 
   * Initializes the component by subscribing to data streams from LockCoverDataService
   * for navbar configuration and lock form data.
   * 
   * @param lockCoverDataService - Service for managing lock cover page data and form configuration
   */
  constructor(private lockCoverDataService: LockCoverDataService) {
    this.navbarData$ = this.lockCoverDataService.getNavbarData();
    this.formData$ = this.lockCoverDataService.getFormData();
  }
} 
