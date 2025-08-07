import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { ErrorButtonComponent, ErrorButtonData } from '../../../../components/auth/error-button/error-button';
import { Error500DataService } from '../../../../services/error-500-data.service';

/**
 * Error 500 Component
 * 
 * This component implements a 500 Internal Server Error page for authentication.
 * It provides a user-friendly error interface with navigation options and
 * consistent branding elements for handling server-side errors.
 * 
 * Features:
 * - 500 error page with user-friendly messaging
 * - Secondary navbar and footer for consistent branding
 * - Error button component for navigation actions
 * - Integration with error data service
 * - Clean and informative error interface
 * 
 * The component serves as a standardized error page that provides users with
 * clear information about server errors and navigation options to continue
 * their experience within the application.
 * 
 * @example
 * ```html
 * <app-error-500></app-error-500>
 * ```
 */
@Component({
  selector: 'app-error-500',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, ErrorButtonComponent],
  templateUrl: './500.html'
})
export class Error500Component {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for error button configuration and data */
  error500ButtonData$: Observable<ErrorButtonData>;

  /**
   * Creates an instance of Error500Component.
   * 
   * Initializes the component by subscribing to data streams from Error500DataService
   * for navbar configuration and error button data.
   * 
   * @param error500DataService - Service for managing error 500 page data and button configuration
   */
  constructor(private error500DataService: Error500DataService) {
    this.navbarData$ = this.error500DataService.getNavbarData();
    this.error500ButtonData$ = this.error500DataService.getError500ButtonData();
  }
} 
