import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';
import { SidebarComponent, SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { NavbarComponent, NavbarData } from '../../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { ReportCardsComponent } from '../../../../components/cards/report-cards/report-cards';
import { ReviewStatsComponent } from '../../../../components/widgets/review-stats/review-stats';
import { UserReviewsTableComponent } from '../../../../components/tables/user-reviews-table/user-reviews-table';
import { ReportsDataService } from '../../../../services/reports-data.service';
import { ReportCard } from '../../../../components/cards/report-cards/report-cards';
import { ReviewStat } from '../../../../components/widgets/review-stats/review-stats';
import { UserReview } from '../../../../components/tables/user-reviews-table/user-reviews-table';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';

/**
 * Reports Component
 * 
 * This component implements the user reports and analytics page for the application.
 * It provides a comprehensive interface for viewing user-generated reports, review
 * statistics, and user feedback data in a structured and analytical layout.
 * 
 * Features:
 * - Report cards displaying key metrics and insights
 * - Review statistics with performance indicators
 * - User reviews table with detailed feedback data
 * - Sidebar navigation for easy access to other sections
 * - Navbar with search and filtering capabilities
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Perfect scrollbar for smooth navigation
 * - Report data management through dedicated service
 * - Analytics and insights visualization
 * 
 * The component serves as a comprehensive reporting interface, providing
 * administrators and managers with detailed insights into user activity,
 * review performance, and feedback trends in an organized and analytical
 * format for data-driven decision making.
 * 
 * @example
 * ```html
 * <app-reports></app-reports>
 * ```
 */
@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    PerfectScrollbarDirective,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ReportCardsComponent,
    ReviewStatsComponent,
    UserReviewsTableComponent,
    ArgonConfiguratorComponent,
  ],
  templateUrl: './reports.html'
})
export class ReportsComponent {
  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;
  
  /** Observable for report cards data */
  reportCards$: Observable<ReportCard[]>;
  
  /** Observable for review statistics data */
  reviewStats$: Observable<ReviewStat[]>;
  
  /** Observable for user reviews data */
  userReviews$: Observable<UserReview[]>;

  /**
   * Creates an instance of ReportsComponent.
   * 
   * Initializes the component by subscribing to data streams from ReportsDataService
   * for sidebar configuration, navbar configuration, report cards, review statistics,
   * and user reviews data.
   * 
   * @param reportsDataService - Service for managing reports data and analytics
   */
  constructor(private reportsDataService: ReportsDataService) {
    this.sidebarData$ = this.reportsDataService.getSidebarData();
    this.navbarData$ = this.reportsDataService.getNavbarData();
    this.reportCards$ = this.reportsDataService.getReportCards();
    this.reviewStats$ = this.reportsDataService.getReviewStats();
    this.userReviews$ = this.reportsDataService.getUserReviews();
  }
} 
