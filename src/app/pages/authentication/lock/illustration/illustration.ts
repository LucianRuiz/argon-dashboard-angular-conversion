import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { LockIllustrationFormComponent, LockIllustrationFormData } from '../../../../components/auth/lock-illustration-form/lock-illustration-form';
import { LockIllustrationDataService } from '../../../../services/lock-illustration-data.service';

/**
 * Illustration Lock Component
 * 
 * This component implements a lock screen page with an illustration design.
 * It provides a visually appealing lock interface with background imagery
 * and overlay elements for enhanced user experience during the unlock process.
 * 
 * Features:
 * - Lock screen form with illustration background
 * - Secondary navbar and footer for consistent branding
 * - Responsive design with overlay elements
 * - Integration with lock data service
 * - Clean and modern lock screen interface
 * 
 * The component serves as an alternative lock screen design that combines
 * functionality with visual appeal, providing users with an engaging unlock
 * experience while maintaining security standards.
 * 
 * @example
 * ```html
 * <app-illustration-lock></app-illustration-lock>
 * ```
 */
@Component({
  selector: 'app-illustration-lock',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, LockIllustrationFormComponent],
  templateUrl: './illustration.html'
})
export class IllustrationLockComponent {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for lock form configuration and data */
  lockFormData$: Observable<LockIllustrationFormData>;

  /**
   * Creates an instance of IllustrationLockComponent.
   * 
   * Initializes the component by subscribing to data streams from LockIllustrationDataService
   * for navbar configuration and lock form data.
   * 
   * @param lockIllustrationDataService - Service for managing lock page data and form configuration
   */
  constructor(private lockIllustrationDataService: LockIllustrationDataService) {
    this.navbarData$ = this.lockIllustrationDataService.getNavbarData();
    this.lockFormData$ = this.lockIllustrationDataService.getLockFormData();
  }
} 
