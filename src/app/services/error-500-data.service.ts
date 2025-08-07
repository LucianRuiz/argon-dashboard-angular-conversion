import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';
import { ErrorButtonData } from '../components/auth/error-button/error-button';

/**
 * Error500DataService
 * 
 * Service that provides mock data for the 500 error page.
 * This service manages navigation and error handling components specifically
 * configured for the "Internal Server Error" scenario.
 * 
 * The service provides data for:
 * - Secondary navbar with custom styling for error pages
 * - Error button configuration for navigation back to homepage
 * - Custom color schemes and styling for 500 error context
 * 
 * This service is part of the authentication/error handling module.
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({
  providedIn: 'root'
})
export class Error500DataService {

  /**
   * Creates an instance of Error500DataService.
   * 
   * @param secondaryNavbarDataService - Service for managing secondary navbar data
   */
  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) { }

  /**
   * Retrieves secondary navbar data with custom styling for the 500 error page.
   * 
   * @returns Observable<SecondaryNavbarData> - Observable containing navbar configuration
   *          with custom text colors and button styling for error context
   */
  getNavbarData(): Observable<SecondaryNavbarData> {
    const navbarData = this.secondaryNavbarDataService.getDefaultNavbar();
    navbarData.textColor = 'text-slate-700';
    navbarData.buyNowButtonColor = 'text-white bg-gradient-to-tl from-orange-500 to-yellow-500 hover:-translate-y-px active:opacity-85';
    return of(navbarData);
  }

  /**
   * Retrieves error button data for the 500 page navigation.
   * 
   * @returns Observable<ErrorButtonData> - Observable containing button configuration
   *          with text, link, and styling for returning to homepage
   */
  getError500ButtonData(): Observable<ErrorButtonData> {
    return of({
      buttonText: 'GO TO HOMEPAGE',
      buttonLink: '/dashboards/default',
      buttonClass: 'inline-block px-6 py-3 mt-6 mb-4 text-xs font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer animate-fade-up hover:-translate-y-px active:opacity-85 hover:shadow-xs bg-gradient-to-tl from-orange-500 to-yellow-500 leading-pro tracking-tight-rem bg-150 bg-x-25'
    });
  }
} 