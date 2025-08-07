import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';
import { ReportCard } from '../components/cards/report-cards/report-cards';
import { ReviewStat } from '../components/widgets/review-stats/review-stats';
import { UserReview } from '../components/tables/user-reviews-table/user-reviews-table';

/**
 * ReportsDataService
 *
 * Provides mock data and configuration for the Reports page. This service supplies
 * comprehensive reporting and analytics data including user activity metrics,
 * review statistics, and user feedback. The service is designed for demo and UI
 * prototyping purposes, simulating backend responses for reporting functionality.
 *
 * The service manages:
 * - Sidebar configuration for the reports page
 * - Navbar data with breadcrumbs and notifications
 * - Report cards with key performance indicators
 * - Review statistics with sentiment analysis
 * - User reviews table with feedback data
 * - Analytics and metrics visualization
 *
 * @example
 * ```typescript
 * constructor(private reportsDataService: ReportsDataService) {}
 *
 * ngOnInit() {
 *   this.reportsDataService.getReportCards().subscribe(cards => {
 *     this.reportCards = cards;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class ReportsDataService {

  constructor(private sidebarDataService: SidebarDataService) { }

  /**
   * Retrieves sidebar configuration data for the reports page.
   *
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the reports interface.
   *
   * @returns Observable<SidebarData> - Default sidebar configuration
   *
   * @example
   * ```typescript
   * this.reportsDataService.getSidebarData().subscribe(sidebarData => {
   *   this.sidebarConfig = sidebarData;
   * });
   * ```
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves navbar configuration data with breadcrumbs and notifications.
   *
   * Returns navbar data including:
   * - Breadcrumb navigation with icon, title, and section
   * - Search functionality configuration
   * - User authentication elements (Sign In, config, bell)
   * - Sample notification list with avatars, titles, and timestamps
   *
   * @returns Observable<NavbarData> - Navbar configuration with notifications
   *
   * @example
   * ```typescript
   * this.reportsDataService.getNavbarData().subscribe(navbarData => {
   *   this.breadcrumb = navbarData.breadcrumbTitle;
   *   this.notifications = navbarData.notifications;
   * });
   * ```
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Reports',
      breadcrumbSection: 'Users',
      searchPlaceholder: 'Type here...',
      signInText: 'Sign In',
      signInIcon: 'fa fa-user',
      configIcon: 'fa fa-cog',
      bellIcon: 'fa fa-bell',
      notifications: [
        {
          avatarUrl: './assets/img/team-2.jpg',
          title: '<span class="font-semibold">New message</span> from Laur',
          description: '',
          time: '13 minutes ago'
        },
        {
          avatarUrl: './assets/img/small-logos/logo-spotify.svg',
          title: '<span class="font-semibold">New album</span> by Travis Scott',
          description: '',
          time: '1 day'
        },
        {
          title: 'Payment successfully completed',
          description: '',
          time: '2 days'
        }
      ]
    });
  }

  /**
   * Retrieves report cards with key performance indicators and background images.
   *
   * Returns report cards including:
   * - Users Active count with percentage growth
   * - Click Events with performance metrics
   * - Purchases with revenue tracking
   * - Likes with engagement statistics
   * - Background images for visual appeal
   *
   * @returns Observable<ReportCard[]> - Array of report card configurations
   *
   * @example
   * ```typescript
   * this.reportsDataService.getReportCards().subscribe(cards => {
   *   this.activeUsers = cards.find(card => card.title === 'Users Active');
   *   this.clickEvents = cards.find(card => card.title === 'Click Events');
   *   this.purchases = cards.find(card => card.title === 'Purchases');
   *   this.likes = cards.find(card => card.title === 'Likes');
   * });
   * ```
   */
  getReportCards(): Observable<ReportCard[]> {
    const cards: ReportCard[] = [
      {
        title: 'Users Active',
        value: '1600',
        icon: 'ni ni-circle-08',
        percentage: '+55%',
        backgroundImage: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/reports1.jpg'
      },
      {
        title: 'Click Events',
        value: '357',
        icon: 'ni ni-active-40',
        percentage: '+124%',
        backgroundImage: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/reports2.jpg'
      },
      {
        title: 'Purchases',
        value: '2300',
        icon: 'ni ni-cart',
        percentage: '+15%',
        backgroundImage: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/reports3.jpg'
      },
      {
        title: 'Likes',
        value: '940',
        icon: 'ni ni-like-2',
        percentage: '+90%',
        backgroundImage: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/reports4.jpg'
      }
    ];
    return of(cards);
  }

  /**
   * Retrieves review statistics with sentiment analysis and color coding.
   *
   * Returns review statistics including:
   * - Positive reviews with blue gradient
   * - Neutral reviews with gray gradient
   * - Negative reviews with red gradient
   * - Percentage breakdowns for each sentiment
   *
   * @returns Observable<ReviewStat[]> - Array of review statistics
   *
   * @example
   * ```typescript
   * this.reportsDataService.getReviewStats().subscribe(stats => {
   *   this.positiveReviews = stats.find(s => s.label === 'Positive Reviews');
   *   this.neutralReviews = stats.find(s => s.label === 'Neutral Reviews');
   *   this.negativeReviews = stats.find(s => s.label === 'Negative Reviews');
   *   this.satisfactionRate = this.positiveReviews?.percentage || 0;
   * });
   * ```
   */
  getReviewStats(): Observable<ReviewStat[]> {
    const stats: ReviewStat[] = [
      {
        label: 'Positive Reviews',
        percentage: 80,
        color: 'from-blue-700 to-cyan-500'
      },
      {
        label: 'Neutral Reviews',
        percentage: 17,
        color: 'from-zinc-800 to-zinc-700'
      },
      {
        label: 'Negative Reviews',
        percentage: 3,
        color: 'from-red-600 to-orange-600'
      }
    ];
    return of(stats);
  }

  /**
   * Retrieves user reviews table with detailed feedback information.
   *
   * Returns user review data including:
   * - User names, avatars, and functions
   * - Review sentiment (positive, neutral, negative)
   * - Contact information and employment dates
   * - Review IDs for tracking
   *
   * @returns Observable<UserReview[]> - Array of user reviews
   *
   * @example
   * ```typescript
   * this.reportsDataService.getUserReviews().subscribe(reviews => {
   *   this.allReviews = reviews;
   *   this.positiveReviews = reviews.filter(r => r.review === 'positive');
   *   this.negativeReviews = reviews.filter(r => r.review === 'negative');
   *   this.neutralReviews = reviews.filter(r => r.review === 'neutral');
   * });
   * ```
   */
  getUserReviews(): Observable<UserReview[]> {
    const reviews: UserReview[] = [
      {
        id: 43431,
        name: 'John Michael',
        avatar: 'assets/img/team-2.jpg',
        function: 'Manager',
        review: 'positive',
        email: 'john@user.com',
        employed: '23/04/18'
      },
      {
        id: 93021,
        name: 'Alexa Liras',
        avatar: 'assets/img/team-3.jpg',
        function: 'Programator',
        review: 'positive',
        email: 'alexa@user.com',
        employed: '11/01/19'
      },
      {
        id: 10392,
        name: 'Laurent Perrier',
        avatar: 'assets/img/team-4.jpg',
        function: 'Executive',
        review: 'neutral',
        email: 'laurent@user.com',
        employed: '23/04/18'
      },
      {
        id: 34002,
        name: 'Michael Levi',
        avatar: 'assets/img/team-3.jpg',
        function: 'Backend developer',
        review: 'positive',
        email: 'michael@user.com',
        employed: '24/12/08'
      },
      {
        id: 91879,
        name: 'Richard Gran',
        avatar: 'assets/img/team-2.jpg',
        function: 'Manager',
        review: 'negative',
        email: 'richard@user.com',
        employed: '04/10/21'
      },
      {
        id: 23042,
        name: 'Miriam Eric',
        avatar: 'assets/img/team-4.jpg',
        function: 'Programator',
        review: 'positive',
        email: 'miriam@user.com',
        employed: '14/09/20'
      }
    ];
    return of(reviews);
  }
}
