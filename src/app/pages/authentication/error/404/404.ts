import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondaryNavbarComponent, SecondaryNavbarData } from '../../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../../components/layout/secondary-footer/secondary-footer';
import { ErrorButtonComponent, ErrorButtonData } from '../../../../components/auth/error-button/error-button';
import { Error404DataService } from '../../../../services/error-404-data.service';

/**
 * Error 404 Component
 * 
 * This component implements a 404 Not Found Error page for authentication.
 * It provides a user-friendly error interface with navigation options and
 * consistent branding elements for handling page not found errors.
 * 
 * Features:
 * - 404 error page with user-friendly messaging
 * - Secondary navbar and footer for consistent branding
 * - Error button component for navigation actions
 * - Integration with error data service
 * - Clean and informative error interface
 * 
 * The component serves as a standardized error page that provides users with
 * clear information about missing pages and navigation options to continue
 * their experience within the application.
 * 
 * @example
 * ```html
 * <app-error-404></app-error-404>
 * ```
 */
@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondaryNavbarComponent, SecondaryFooterComponent, ErrorButtonComponent],
  templateUrl: './404.html'
})
export class Error404Component {
  /** Observable for secondary navbar configuration data */
  navbarData$: Observable<SecondaryNavbarData>;
  
  /** Observable for error button configuration and data */
  error404ButtonData$: Observable<ErrorButtonData>;

  /**
   * Creates an instance of Error404Component.
   * 
   * Initializes the component by subscribing to data streams from Error404DataService
   * for navbar configuration and error button data.
   * 
   * @param error404DataService - Service for managing error 404 page data and button configuration
   */
  constructor(private error404DataService: Error404DataService) {
    this.navbarData$ = this.error404DataService.getNavbarData();
    this.error404ButtonData$ = this.error404DataService.getError404ButtonData();
  }
} 
