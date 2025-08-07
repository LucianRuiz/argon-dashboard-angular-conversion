import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { LockCardComponent, LockCardData } from '../../../../components/auth/lock-card/lock-card';
import { LockBasicDataService } from '../../../../services/lock-basic-data.service';

/**
 * Basic Lock Component
 * 
 * This component implements a lock screen page with a basic design layout.
 * It provides a clean and simple authentication interface with a card-based lock
 * form for straightforward user interaction during the unlock process.
 * 
 * Features:
 * - Lock screen form with basic card design
 * - Secondary navbar and footer for consistent branding
 * - Clean and minimal interface design
 * - Integration with lock data service
 * - Simple and intuitive user experience
 * 
 * The component serves as the standard lock screen design that focuses on
 * functionality and clarity, providing users with a straightforward unlock
 * experience without visual distractions.
 * 
 * @example
 * ```html
 * <app-basic-lock></app-basic-lock>
 * ```
 */
@Component({
  selector: 'app-basic-lock',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, LockCardComponent],
  templateUrl: './basic.html'
})
export class BasicLockComponent {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for lock card configuration and data */
  lockCardData$: Observable<LockCardData>;

  /**
   * Creates an instance of BasicLockComponent.
   * 
   * Initializes the component by subscribing to data streams from LockBasicDataService
   * for navbar configuration and lock card data.
   * 
   * @param lockBasicDataService - Service for managing lock basic page data and card configuration
   */
  constructor(private lockBasicDataService: LockBasicDataService) {
    this.navbarData$ = this.lockBasicDataService.getNavbarData();
    this.lockCardData$ = this.lockBasicDataService.getLockCardData();
  }
} 
