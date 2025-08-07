import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ReferralDataService } from '../../../services/referral-data.service';

// UI Components
import { ReferralStatsCardComponent, ReferralStat } from '../../../components/referral/referral-stats-card/referral-stats-card.component';
import { ReferralCodeSectionComponent, ReferralCode } from '../../../components/referral/referral-code-section/referral-code-section.component';
import { ReferralStepCardComponent, ReferralStep } from '../../../components/referral/referral-step-card/referral-step-card.component';
import { ReferralProgramCardComponent, ReferralProgram } from '../../../components/referral/referral-program-card/referral-program-card.component';
import { ReferralUsersTableComponent, ReferredUser } from '../../../components/referral/referral-users-table/referral-users-table.component';
import { SidebarComponent, SidebarData } from '../../../components/layout/sidebar/sidebar';
import { PerfectScrollbarDirective } from '../../../components/layout/sidebar/perfect-scrollbar.directive';
import { NavbarComponent, NavbarData } from '../../../components/layout/navbar/navbar';
import { FooterComponent, FooterData } from '../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../components/layout/argon-configurator/argon-configurator';

/**
 * Referral Program Component
 * 
 * This component implements the referral program page for the ecommerce system.
 * It provides a comprehensive interface for managing and tracking referral activities,
 * including statistics, referral codes, program steps, and user tracking for
 * customer acquisition and retention strategies.
 * 
 * Features:
 * - Referral statistics cards with key performance metrics
 * - Referral code generation and management
 * - Step-by-step referral program guidance
 * - Referral program details and benefits
 * - Top referred users tracking and analytics
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Copy-to-clipboard functionality for referral codes
 * 
 * The component serves as a central hub for referral program management, providing
 * users with tools to track their referral performance, manage referral codes,
 * and monitor the success of their referral activities in driving customer acquisition.
 * 
 * @example
 * ```html
 * <app-referral></app-referral>
 * ```
 */
@Component({
  selector: 'app-referral',
  standalone: true,
  imports: [
    CommonModule,
    ReferralStatsCardComponent,
    ReferralCodeSectionComponent,
    ReferralStepCardComponent,
    ReferralProgramCardComponent,
    ReferralUsersTableComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    PerfectScrollbarDirective
  ],
  templateUrl: './referral.html'
})
export class ReferralComponent {

  /** Static sidebar configuration data */
  sidebarData: SidebarData;
  
  /** Observable for referral statistics data */
  referralStats$: Observable<ReferralStat[]>;
  
  /** Observable for referral code data */
  referralCode$: Observable<ReferralCode>;
  
  /** Observable for referral steps data */
  referralSteps$: Observable<ReferralStep[]>;
  
  /** Observable for referral programs data */
  referralPrograms$: Observable<ReferralProgram[]>;
  
  /** Observable for top referred users data */
  topReferredUsers$: Observable<ReferredUser[]>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;
  
  /** Observable for footer configuration data */
  footerData$: Observable<FooterData>;

  /**
   * Creates an instance of ReferralComponent.
   * 
   * Initializes the component by subscribing to data streams from ReferralDataService
   * for all referral program elements including sidebar, navbar, footer, statistics,
   * referral codes, steps, programs, and top referred users data.
   * 
   * @param dataService - Service for managing referral program data and configurations
   */
  constructor(private dataService: ReferralDataService) {
    this.sidebarData = this.dataService.getSidebarData();
    this.referralStats$ = this.dataService.getReferralStats();
    this.referralCode$ = this.dataService.getReferralCode();
    this.referralSteps$ = this.dataService.getReferralSteps();
    this.referralPrograms$ = this.dataService.getReferralPrograms();
    this.topReferredUsers$ = this.dataService.getTopReferredUsers();
    this.navbarData$ = this.dataService.getNavbarData();
    this.footerData$ = this.dataService.getFooterData();
  }

  /**
   * Handles the copy referral code functionality.
   * 
   * Initiates the copy process for a referral code and logs the success
   * of the operation. This method is typically called when users click
   * on copy buttons for their referral codes.
   * 
   * @param code - The referral code string to be copied to clipboard
   */
  onCopyCode(code: string): void {
    this.dataService.copyReferralCode(code).subscribe(() => {
      console.log('Código copiado exitosamente');
    });
  }
} 