import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';
import { FooterData } from '../components/layout/footer/footer';
import { ReferralStat } from '../components/referral/referral-stats-card/referral-stats-card.component';
import { ReferralCode } from '../components/referral/referral-code-section/referral-code-section.component';
import { ReferralStep } from '../components/referral/referral-step-card/referral-step-card.component';
import { ReferralProgram } from '../components/referral/referral-program-card/referral-program-card.component';
import { ReferredUser } from '../components/referral/referral-users-table/referral-users-table.component';

/**
 * ReferralDataService
 * 
 * Provides mock data and configuration for the Referral Program page. This service supplies
 * comprehensive referral program data including statistics, code sharing, program steps,
 * user tracking, and layout configuration. The service is designed for demo and UI
 * prototyping purposes, simulating backend responses for referral program functionality.
 * 
 * The service manages:
 * - Referral statistics with earnings and performance metrics
 * - Referral code generation and sharing functionality
 * - Program steps with rewards and incentives
 * - Referral programs with social media integration
 * - Top referred users with performance tracking
 * - Layout configuration (sidebar, navbar, footer)
 * - Code copying functionality
 * 
 * @example
 * ```typescript
 * constructor(private referralDataService: ReferralDataService) {}
 * 
 * ngOnInit() {
 *   this.referralDataService.getReferralStats().subscribe(stats => {
 *     this.referralStats = stats;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class ReferralDataService {

  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves referral statistics with earnings and performance metrics.
   * 
   * Returns referral performance data including:
   * - Total earnings from referral program
   * - Number of customers acquired through referrals
   * - Average value per referral
   * - Refund rate percentage
   * 
   * @returns Observable<ReferralStat[]> - Array of referral statistics
   * 
   * @example
   * ```typescript
   * this.referralDataService.getReferralStats().subscribe(stats => {
   *   this.totalEarnings = stats.find(s => s.title === 'Earnings')?.value;
   *   this.customerCount = stats.find(s => s.title === 'Customers')?.value;
   *   this.avgValue = stats.find(s => s.title === 'Avg. Value')?.value;
   * });
   * ```
   */
  getReferralStats(): Observable<ReferralStat[]> {
    return of([
      { title: 'Earnings', value: 23980, prefix: '$' },
      { title: 'Customers', value: 2400, prefix: '$' },
      { title: 'Avg. Value', value: 48, prefix: '$' },
      { title: 'Refund Rate', value: 4, suffix: '%' }
    ]);
  }

  /**
   * Retrieves referral code information with generation details.
   * 
   * Returns referral code data including:
   * - Unique referral code for sharing
   * - Code generation details and date
   * - Usage count tracking
   * - Code validation information
   * 
   * @returns Observable<ReferralCode> - Referral code configuration
   * 
   * @example
   * ```typescript
   * this.referralDataService.getReferralCode().subscribe(codeData => {
   *   this.referralCode = codeData.code;
   *   this.usageCount = codeData.usedCount;
   *   this.generatedDate = codeData.generatedDate;
   * });
   * ```
   */
  getReferralCode(): Observable<ReferralCode> {
    return of({
      code: 'argon-dashboard-vmsk392',
      generatedBy: 'argondash23',
      generatedDate: '23 days ago',
      usedCount: 1
    });
  }

  /**
   * Retrieves referral program steps with rewards and incentives.
   * 
   * Returns program steps including:
   * - 3-step referral process
   * - Reward values for each step
   * - Step descriptions and icons
   * - Incentive structure
   * 
   * @returns Observable<ReferralStep[]> - Array of referral program steps
   * 
   * @example
   * ```typescript
   * this.referralDataService.getReferralSteps().subscribe(steps => {
   *   this.referralSteps = steps;
   *   this.firstStepReward = steps[0].value; // '$100'
   *   this.secondStepReward = steps[1].value; // '10%'
   * });
   * ```
   */
  getReferralSteps(): Observable<ReferralStep[]> {
    return of([
      {
        step: 1,
        title: 'Create & validate your referral link and get',
        value: '$100',
        icon: 'ni ni-money-coins'
      },
      {
        step: 2,
        title: 'For every order you make you get',
        value: '10%',
        icon: 'ni ni-send'
      },
      {
        step: 3,
        title: 'Get other friends to generate link and get',
        value: '$500',
        icon: 'ni ni-spaceship'
      }
    ]);
  }

  /**
   * Retrieves referral programs with social media integration.
   * 
   * Returns program configurations including:
   * - Social media hashtag campaigns
   * - Invitation link programs
   * - Program status and activation
   * - Campaign images and descriptions
   * 
   * @returns Observable<ReferralProgram[]> - Array of referral programs
   * 
   * @example
   * ```typescript
   * this.referralDataService.getReferralPrograms().subscribe(programs => {
   *   this.activePrograms = programs.filter(p => p.isActive);
   *   this.socialMediaProgram = programs.find(p => p.title.includes('hashtag'));
   * });
   * ```
   */
  getReferralPrograms(): Observable<ReferralProgram[]> {
    return of([
      {
        id: 1,
        title: 'User #hashtag in a photo on social media and get $10 for each purchase you make.',
        imageUrl: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/refferal1.jpg',
        isActive: true
      },
      {
        id: 2,
        title: 'Send the invitation link to 10 friends and get a 50% coupon to use on any purchase.',
        imageUrl: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/refferal2.jpg',
        isActive: true
      },
      {
        id: 3,
        title: 'Join rocketship program',
        imageUrl: '',
        isActive: false
      }
    ]);
  }

  /**
   * Retrieves top referred users with performance tracking.
   * 
   * Returns user performance data including:
   * - User names and avatars
   * - Order counts and revenue values
   * - Profit calculations and refund rates
   * - Performance trends (up/down)
   * 
   * @returns Observable<ReferredUser[]> - Array of top referred users
   * 
   * @example
   * ```typescript
   * this.referralDataService.getTopReferredUsers().subscribe(users => {
   *   this.topPerformers = users.sort((a, b) => b.orders - a.orders);
   *   this.totalRevenue = users.reduce((sum, user) => 
   *     sum + parseFloat(user.value.replace('$', '').replace(',', '')), 0
   *   );
   * });
   * ```
   */
  getTopReferredUsers(): Observable<ReferredUser[]> {
    return of([
      {
        id: 1,
        name: 'Alice Vinget',
        avatar: 'assets/img/team-1.jpg',
        orders: 8232,
        value: '$130.992',
        profit: '$9.500',
        refunds: 13,
        refundTrend: 'down'
      },
      {
        id: 2,
        name: 'John Alura',
        avatar: 'assets/img/team-2.jpg',
        orders: 12821,
        value: '$80.250',
        profit: '$4.200',
        refunds: 40,
        refundTrend: 'down'
      },
      {
        id: 3,
        name: 'Andrew Sian',
        avatar: 'assets/img/team-3.jpg',
        orders: 2421,
        value: '$40.600',
        profit: '$9.430',
        refunds: 54,
        refundTrend: 'up'
      },
      {
        id: 4,
        name: 'Luca Willaim',
        avatar: 'assets/img/team-4.jpg',
        orders: 5921,
        value: '$91.300',
        profit: '$7.364',
        refunds: 5,
        refundTrend: 'down'
      },
      {
        id: 5,
        name: 'Richel Manuel',
        avatar: 'assets/img/team-5.jpg',
        orders: 921,
        value: '$140.925',
        profit: '$20.531',
        refunds: 121,
        refundTrend: 'up'
      }
    ]);
  }

  /**
   * Copies referral code to clipboard and returns success status.
   * 
   * Uses the browser's clipboard API to copy the provided code
   * and returns a success indicator.
   * 
   * @param code - The referral code to copy to clipboard
   * @returns Observable<boolean> - Success status of copy operation
   * 
   * @example
   * ```typescript
   * this.referralDataService.copyReferralCode('my-referral-code').subscribe(success => {
   *   if (success) {
   *     this.showCopySuccess = true;
   *   }
   * });
   * ```
   */
  copyReferralCode(code: string): Observable<boolean> {
    navigator.clipboard.writeText(code).then(() => {
      console.log('Código copiado al portapapeles');
    });
    return of(true);
  }

  /**
   * Retrieves sidebar configuration data for the referral page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the referral program interface.
   * 
   * @returns SidebarData - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * const sidebarData = this.referralDataService.getSidebarData();
   * this.sidebarConfig = sidebarData;
   * ```
   */
  getSidebarData(): SidebarData {
    return this.sidebarDataService.getDefaultSidebar();
  }

  /**
   * Retrieves navbar configuration data with referral-specific notifications.
   * 
   * Returns navbar data including:
   * - Breadcrumb navigation with referral program context
   * - Search functionality configuration
   * - User authentication elements
   * - Referral-specific notification list
   * 
   * @returns Observable<NavbarData> - Navbar configuration with referral notifications
   * 
   * @example
   * ```typescript
   * this.referralDataService.getNavbarData().subscribe(navbarData => {
   *   this.breadcrumb = navbarData.breadcrumbTitle;
   *   this.referralNotifications = navbarData.notifications;
   * });
   * ```
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Referral Program',
      breadcrumbSection: 'Ecommerce',
      searchPlaceholder: 'Type here...',
      signInText: 'Sign In',
      signInIcon: 'fa fa-user',
      configIcon: 'fa fa-cog',
      bellIcon: 'fa fa-bell',
      notifications: [
        {
          avatarUrl: './assets/img/team-2.jpg',
          title: '<span class="font-semibold">New referral</span> from John',
          description: '',
          time: '13 minutes ago'
        },
        {
          avatarUrl: './assets/img/small-logos/logo-spotify.svg',
          title: '<span class="font-semibold">Referral bonus</span> earned',
          description: '',
          time: '1 day'
        },
        {
          title: 'Referral program updated',
          description: '',
          time: '2 days'
        }
      ]
    });
  }

  /**
   * Retrieves footer configuration data with copyright and links.
   * 
   * Returns footer data including:
   * - Copyright information with brand details
   * - Footer links with external URLs
   * - Creative Tim branding and attribution
   * 
   * @returns Observable<FooterData> - Footer configuration
   * 
   * @example
   * ```typescript
   * this.referralDataService.getFooterData().subscribe(footerData => {
   *   this.copyright = footerData.copyright;
   *   this.footerLinks = footerData.links;
   * });
   * ```
   */
  getFooterData(): Observable<FooterData> {
    return of({
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
    });
  }
} 