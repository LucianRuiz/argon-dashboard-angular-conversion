import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SecondaryNavbarData } from '../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';
import { ErrorButtonData } from '../components/auth/error-button/error-button';

/**
 * Error404DataService
 * 
 * Service that provides mock data for the 404 error page.
 * This service manages navigation and error handling components specifically
 * configured for the "Page Not Found" error scenario.
 * 
 * The service provides data for:
 * - Secondary navbar with custom styling for error pages
 * - Error button configuration for navigation back to homepage
 * - Custom color schemes and styling for 404 error context
 * 
 * This service is part of the authentication/error handling module.
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({
  providedIn: 'root'
})
export class Error404DataService {

  /**
   * Creates an instance of Error404DataService.
   * 
   * @param secondaryNavbarDataService - Service for managing secondary navbar data
   */
  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) { }

  /**
   * Retrieves secondary navbar data with custom styling for the 404 error page.
   * 
   * @returns Observable<SecondaryNavbarData> - Observable containing navbar configuration
   *          with custom text colors and button styling for error context
   */
  getNavbarData(): Observable<SecondaryNavbarData> {
    const navbarData = this.secondaryNavbarDataService.getDefaultNavbar();
    navbarData.textColor = 'text-slate-700';
    navbarData.buyNowButtonColor = 'text-white bg-blue-500 hover:-translate-y-px active:opacity-85';
    return of(navbarData);
  }

  /**
   * Retrieves error button data for the 404 page navigation.
   * 
   * @returns Observable<ErrorButtonData> - Observable containing button configuration
   *          with text, link, and styling for returning to homepage
   */
  getError404ButtonData(): Observable<ErrorButtonData> {
    return of({
      buttonText: 'Go to Homepage',
      buttonLink: '/dashboards/default',
      buttonClass: 'inline-block px-5 py-2.5 mt-6 mb-2 text-sm font-bold text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer active:-translate-y-px active:hover:text-white hover:-translate-y-px hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25 bg-gradient-to-tl from-zinc-800 to-zinc-700 hover:text-white'
    });
  }
} 