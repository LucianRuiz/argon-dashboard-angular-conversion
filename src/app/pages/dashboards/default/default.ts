import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DefaultDataService } from '../../../services/default-data.service';


// UI Components
import { CarouselComponent, type CarouselSlide } from '../../../components/widgets/carousel/carousel';
import { StatsCardComponent, type StatsCardData } from '../../../components/cards/stats-card/stats-card';
import { BalanceCardComponent, type BalanceCardData } from '../../../components/cards/balance-card/balance-card';
import { CryptoCardComponent, type CryptoCardData } from '../../../components/cards/crypto-card/crypto-card';
import { SalesOverviewComponent, type SalesOverviewData } from '../../../components/widgets/sales-overview/sales-overview';
import { TeamMembersComponent, type TeamMember } from '../../../components/lists/team-members/team-members';
import { TodoListComponent, type TodoItem } from '../../../components/lists/todo-list/todo-list';
import { ProgressTrackComponent, type ProgressItem } from '../../../components/widgets/progress-track/progress-track';
import { SocialPostComponent, type SocialPostData } from '../../../components/widgets/social-post/social-post';
import { ProjectsTableComponent, type ProjectItem } from '../../../components/tables/projects-table/projects-table';
import { SalesByCountryComponent, type CountryData } from '../../../components/tables/sales-by-country/sales-by-country';
import { AuthorsTableComponent, type AuthorData } from '../../../components/tables/authors-table/authors-table';
import { CategoriesComponent, type CategoryItem } from '../../../components/widgets/categories/categories';
import { SidebarComponent, type SidebarData } from '../../../components/layout/sidebar/sidebar';
import { PerfectScrollbarDirective } from '../../../components/layout/sidebar/perfect-scrollbar.directive';
import { NavbarComponent, NavbarData } from '../../../components/layout/navbar/navbar';
import { FooterComponent, FooterData } from '../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../components/layout/argon-configurator/argon-configurator';

/**
 * Default Dashboard Component
 * 
 * This component implements the main dashboard of the Argon Dashboard 2 PRO system.
 * It serves as a comprehensive example of how to integrate multiple reusable components
 * and data services to display statistics, tables, charts, and widgets in a professional
 * layout that showcases the full capabilities of the dashboard system.
 * 
 * Features:
 * - Interactive carousel with dynamic slides
 * - Statistics cards with real-time data
 * - Balance and crypto currency tracking
 * - Sales overview with detailed analytics
 * - Team member management and collaboration
 * - Task management with todo list functionality
 * - Progress tracking and visualization
 * - Social media integration and posts
 * - Project management with detailed tables
 * - Sales analytics by country
 * - Author management and profiles
 * - Category organization and management
 * - Integration with Argon configurator for customization
 * - Responsive design for all screen sizes
 * 
 * The component serves as the primary dashboard interface and demonstrates best practices
 * for integrating all core components of the Argon Dashboard system, providing users with
 * a complete overview of their business metrics, team activities, and project status.
 * 
 * @example
 * ```html
 * <app-default></app-default>
 * ```
 */
@Component({
  selector: 'app-default',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent, 
    StatsCardComponent, 
    BalanceCardComponent,
    CryptoCardComponent,
    SalesOverviewComponent,
    TeamMembersComponent,
    TodoListComponent,
    ProgressTrackComponent,
    SocialPostComponent,
    ProjectsTableComponent,
    SalesByCountryComponent,
    AuthorsTableComponent,
    CategoriesComponent,
    SidebarComponent,
    PerfectScrollbarDirective,
    NavbarComponent,
    FooterComponent,
    ArgonConfiguratorComponent
  ],
  templateUrl: './default.html'
})
export class DefaultComponent {

  /** Static sidebar configuration data */
  sidebarData: SidebarData;
  
  /** Observable for statistics cards data */
  statsCards$: Observable<StatsCardData[]>;
  
  /** Observable for carousel slides data */
  carouselSlides$: Observable<CarouselSlide[]>;
  
  /** Observable for sales overview data */
  salesOverviewData$: Observable<SalesOverviewData>;
  
  /** Observable for team members data */
  teamMembers$: Observable<TeamMember[]>;
  
  /** Observable for todo items data */
  todoItems$: Observable<TodoItem[]>;
  
  /** Observable for progress tracking items data */
  progressItems$: Observable<ProgressItem[]>;
  
  /** Observable for social post data */
  socialPostData$: Observable<SocialPostData>;
  
  /** Observable for balance card data */
  balanceData$: Observable<BalanceCardData>;
  
  /** Observable for crypto card data */
  cryptoData$: Observable<CryptoCardData>;
  
  /** Observable for projects table data */
  projects$: Observable<ProjectItem[]>;
  
  /** Observable for sales by country data */
  countries$: Observable<CountryData[]>;
  
  /** Observable for authors table data */
  authors$: Observable<AuthorData[]>;
  
  /** Observable for categories data */
  categories$: Observable<CategoryItem[]>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;
  
  /** Observable for footer configuration data */
  footerData$: Observable<FooterData>;

  /**
   * Creates an instance of DefaultComponent.
   * 
   * Initializes the component by subscribing to data streams from DefaultDataService
   * for all dashboard elements including sidebar, navbar, footer, statistics, carousel,
   * sales data, team members, todo items, progress tracking, social posts, balance,
   * crypto data, projects, countries, authors, and categories.
   * 
   * @param dataService - Service for managing default dashboard data and configurations
   */
  constructor(private dataService: DefaultDataService) {
    this.sidebarData = this.dataService.getSidebarData();
    this.statsCards$ = this.dataService.getStatsCards();
    this.carouselSlides$ = this.dataService.getCarouselSlides();
    this.salesOverviewData$ = this.dataService.getSalesOverviewData();
    this.teamMembers$ = this.dataService.getTeamMembers();
    this.todoItems$ = this.dataService.getTodoItems();
    this.progressItems$ = this.dataService.getProgressItems();
    this.socialPostData$ = this.dataService.getSocialPostData();
    this.balanceData$ = this.dataService.getBalanceData();
    this.cryptoData$ = this.dataService.getCryptoData();
    this.projects$ = this.dataService.getProjects();
    this.countries$ = this.dataService.getCountries();
    this.authors$ = this.dataService.getAuthors();
    this.categories$ = this.dataService.getCategories();
    this.navbarData$ = this.dataService.getNavbarData();
    this.footerData$ = this.dataService.getFooterData();
  }
} 
