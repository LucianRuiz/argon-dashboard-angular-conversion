import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TimelineComponent } from '../../../../components/widgets/timeline/timeline';
import { NavbarComponent } from '../../../../components/layout/navbar/navbar';
import { SidebarComponent } from '../../../../components/layout/sidebar/sidebar';
import { FooterComponent, FooterData } from '../../../../components/layout/footer/footer';
import { TimelineDataService } from '../../../../services/timeline-data.service';
import { TimelinePageData } from '../../../../components/widgets/timeline-item/timeline-item';
import { NavbarData } from '../../../../components/layout/navbar/navbar';
import { SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';

/**
 * Timeline Page Component
 * 
 * This component implements a comprehensive timeline visualization page for the application.
 * It provides a chronological display of project events, milestones, and activities
 * in a timeline format with interactive elements and detailed information in a
 * complete dashboard layout.
 * 
 * Features:
 * - Interactive timeline with chronological event display
 * - Project milestones and activity tracking
 * - Event details with descriptions and metadata
 * - Timeline navigation and filtering capabilities
 * - Sidebar navigation for easy access to other sections
 * - Navbar with search and filtering capabilities
 * - Footer with copyright and external links
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Perfect scrollbar for smooth navigation
 * - Timeline data management through dedicated service
 * - Event categorization and status indicators
 * 
 * The component serves as a comprehensive project timeline interface, providing
 * project managers, team members, and stakeholders with a clear chronological
 * view of project progress, milestones, and activities in an organized and
 * visually appealing timeline format.
 * 
 * @example
 * ```html
 * <app-timeline-page></app-timeline-page>
 * ```
 */
@Component({
  selector: 'app-timeline-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    TimelineComponent,
    PerfectScrollbarDirective,
    ArgonConfiguratorComponent
  ],
  templateUrl: './timeline-page.html'
})
export class TimelinePageComponent implements OnInit {
  /** Observable for timeline data */
  timelineData$!: Observable<TimelinePageData>;
  
  /** Observable for navbar configuration data */
  navbarData$!: Observable<NavbarData>;
  
  /** Observable for sidebar configuration data */
  sidebarData$!: Observable<SidebarData>;
  
  /** Static footer configuration data */
  footerData: FooterData = {
    copyright: {
      enabled: true,
      text: 'made with',
      brandName: 'Creative Tim',
      brandUrl: 'https://www.creative-tim.com'
    },
    links: [
      { text: 'Creative Tim', url: 'https://www.creative-tim.com', target: '_blank' },
      { text: 'About Us', url: 'https://www.creative-tim.com/presentation', target: '_blank' },
      { text: 'Blog', url: 'https://creative-tim.com/blog', target: '_blank' },
      { text: 'License', url: 'https://www.creative-tim.com/license', target: '_blank' }
    ]
  };

  /**
   * Creates an instance of TimelinePageComponent.
   * 
   * @param timelineDataService - Service for managing timeline data and configurations
   */
  constructor(private timelineDataService: TimelineDataService) {}

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * 
   * Initializes the component by subscribing to data streams from TimelineDataService
   * for timeline data, navbar configuration, and sidebar configuration.
   */
  ngOnInit(): void {
    this.timelineData$ = this.timelineDataService.getTimelineData();
    this.navbarData$ = this.timelineDataService.getNavbarData();
    this.sidebarData$ = this.timelineDataService.getSidebarData();
  }
} 