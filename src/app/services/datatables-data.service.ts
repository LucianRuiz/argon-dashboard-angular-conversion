import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavbarData } from '../components/layout/navbar/navbar';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { SidebarDataService } from './sidebar-data.service';

/**
 * DataTablesDataService
 * 
 * Service that provides mock data for the DataTables application page.
 * This service manages navigation data specifically configured for the DataTables
 * demonstration page, including sidebar and navbar configurations.
 * 
 * The service provides data for:
 * - Sidebar navigation configuration
 * - Navbar with DataTables-specific breadcrumbs and notifications
 * - Page-specific styling and branding
 * 
 * This service is part of the DataTables demo page that showcases
 * different table implementations and configurations.
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({
  providedIn: 'root'
})
export class DataTablesDataService {

  /**
   * Creates an instance of DataTablesDataService.
   * 
   * @param sidebarDataService - Service for managing sidebar data
   */
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar data using the existing sidebar service.
   * 
   * @returns Observable<SidebarData> - Observable containing the sidebar configuration
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves navbar data specifically configured for the DataTables page.
   * 
   * @returns Observable<NavbarData> - Observable containing navbar configuration with breadcrumbs,
   *          search placeholder, and notifications including custom SVG icons
   */
  getNavbarData(): Observable<NavbarData> {
    const navbarData: NavbarData = {
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'DataTables',
      breadcrumbSection: 'Pages',
      searchPlaceholder: 'Type here...',
      signInText: 'Sign In',
      signInIcon: 'fa fa-user',
      configIcon: 'fa fa-cog',
      bellIcon: 'fa fa-bell',
      notifications: [
        {
          avatarUrl: 'assets/img/team-2.jpg',
          title: 'New message from Laur',
          description: '13 minutes ago',
          time: '13 minutes ago'
        },
        {
          avatarUrl: 'assets/img/small-logos/logo-spotify.svg',
          title: 'New album by Travis Scott',
          description: '1 day',
          time: '1 day'
        },
        {
          iconSvg: `<svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>credit-card</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                <g transform="translate(1716.000000, 291.000000)">
                  <g transform="translate(453.000000, 454.000000)">
                    <path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                    <path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>`,
          title: 'Payment successfully completed',
          description: '2 days',
          time: '2 days'
        }
      ]
    };
    return of(navbarData);
  }
} 