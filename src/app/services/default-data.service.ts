import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { StatsCardData } from '../components/cards/stats-card/stats-card';
import { CarouselSlide } from '../components/widgets/carousel/carousel';
import { SalesOverviewData } from '../components/widgets/sales-overview/sales-overview';
import { TeamMember } from '../components/lists/team-members/team-members';
import { TodoItem } from '../components/lists/todo-list/todo-list';
import { ProgressItem } from '../components/widgets/progress-track/progress-track';
import { SocialPostData } from '../components/widgets/social-post/social-post';
import { BalanceCardData } from '../components/cards/balance-card/balance-card';
import { CryptoCardData } from '../components/cards/crypto-card/crypto-card';
import { ProjectItem } from '../components/tables/projects-table/projects-table';
import { CountryData } from '../components/tables/sales-by-country/sales-by-country';
import { AuthorData } from '../components/tables/authors-table/authors-table';
import { CategoryItem } from '../components/widgets/categories/categories';
import { NavbarData } from '../components/layout/navbar/navbar';
import { FooterData } from '../components/layout/footer/footer';

/**
 * DefaultDataService
 *
 * This Angular service provides mock data and utility methods for the Default dashboard and general application modules.
 * It supplies data for statistics cards, carousel, sales overview, team members, todo items, progress tracking, 
 * social posts, balance, crypto, projects, countries, authors, categories, navbar, and footer.
 * 
 * The service manages:
 * - Dashboard statistics and key performance indicators
 * - Carousel slides and promotional content
 * - Team member information and status
 * - Todo lists and task management
 * - Progress tracking for projects and initiatives
 * - Social media posts and interactions
 * - Financial data (balance, crypto, sales)
 * - Project management and tracking
 * - Geographic sales data by country
 * - User and author information
 * - Category and classification data
 * - Navigation components (sidebar, navbar, footer)
 * 
 * The service is intended for demo and UI prototyping purposes, simulating backend 
 * responses for the main dashboard and related components.
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({ providedIn: 'root' })
export class DefaultDataService {

  /**
   * Creates an instance of DefaultDataService.
   * 
   * @param sidebarDataService - Service for managing sidebar data
   */
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar data using the existing sidebar service.
   * 
   * @returns SidebarData - Sidebar configuration data
   */
  getSidebarData(): SidebarData {
    return this.sidebarDataService.getDefaultSidebar();
  }

  /**
   * Retrieves statistics cards data for displaying key performance indicators.
   * 
   * @returns Observable<StatsCardData[]> - Observable containing array of stats cards
   *          with financial metrics, user counts, and trend indicators
   */
  getStatsCards(): Observable<StatsCardData[]> {
    return of([
      {
        title: "Today's Money",
        value: '$53,000',
        percentage: '+55%',
        trend: 'up',
        icon: 'ni-money-coins',
        iconColor: 'blue',
        description: 'since yesterday'
      },
      {
        title: "Today's Users",
        value: '2,300',
        percentage: '+3%',
        trend: 'up',
        icon: 'ni-world',
        iconColor: 'red',
        description: 'since last week'
      },
      {
        title: 'New Clients',
        value: '+3,462',
        percentage: '-2%',
        trend: 'down',
        icon: 'ni-paper-diploma',
        iconColor: 'green',
        description: 'since last quarter'
      },
      {
        title: 'Sales',
        value: '$103,430',
        percentage: '+5%',
        trend: 'up',
        icon: 'ni-cart',
        iconColor: 'orange',
        description: 'than last month'
      }
    ]);
  }

  /**
   * Retrieves carousel slides data for displaying promotional content.
   * 
   * @returns Observable<CarouselSlide[]> - Observable containing carousel slides
   *          with images, icons, titles, and descriptions
   */
  getCarouselSlides(): Observable<CarouselSlide[]> {
    return of([
      {
        image: 'assets/img/img-2.jpg',
        icon: 'ni-camera-compact',
        title: 'Get started with Argon',
        description: "There's nothing I really wanted to do in life that I wasn't able to get good at."
      },
      {
        image: 'assets/img/img-1.jpg',
        icon: 'ni-bulb-61',
        title: 'Faster way to create web pages',
        description: "That's my skill. I'm not really specifically talented at anything except for the ability to learn."
      },
      {
        image: 'assets/img/img-3.jpg',
        icon: 'ni-trophy',
        title: 'Share with us your design tips!',
        description: "Don't be afraid to be wrong because you can't learn anything from a compliment."
      }
    ]);
  }

  /**
   * Retrieves sales overview data for displaying sales performance metrics.
   * 
   * @returns Observable<SalesOverviewData> - Observable containing sales overview
   *          with title, subtitle, percentage, and trend information
   */
  getSalesOverviewData(): Observable<SalesOverviewData> {
    return of({
      title: 'Sales overview',
      subtitle: 'in 2021',
      percentage: '4% more',
      trend: 'up'
    });
  }

  /**
   * Retrieves team members data for displaying team information and status.
   * 
   * @returns Observable<TeamMember[]> - Observable containing team member list
   *          with names, avatars, and online/offline status
   */
  getTeamMembers(): Observable<TeamMember[]> {
    return of([
      {
        id: 1,
        name: 'John Michael',
        avatar: 'assets/img/team-1.jpg',
        status: 'Online',
        statusColor: 'text-emerald-600 bg-emerald-200'
      },
      {
        id: 2,
        name: 'Alex Smith',
        avatar: 'assets/img/team-2.jpg',
        status: 'In Meeting',
        statusColor: 'text-orange-600 bg-orange-200'
      },
      {
        id: 3,
        name: 'Samantha Ivy',
        avatar: 'assets/img/team-5.jpg',
        status: 'Offline',
        statusColor: 'text-red-600 bg-red-200'
      },
      {
        id: 4,
        name: 'John Michael',
        avatar: 'assets/img/team-4.jpg',
        status: 'Online',
        statusColor: 'text-emerald-600 bg-emerald-200'
      }
    ]);
  }

  /**
   * Retrieves todo items data for displaying task management information.
   * 
   * @returns Observable<TodoItem[]> - Observable containing todo items list
   *          with titles, times, and completion status
   */
  getTodoItems(): Observable<TodoItem[]> {
    return of([
      { id: 1, title: 'Call with Dave', time: '09:30 AM', completed: true },
      { id: 2, title: 'Brunch Meeting', time: '11:00 AM', completed: false },
      { id: 3, title: 'Argon Dashboard Launch', time: '02:00 PM', completed: false },
      { id: 4, title: 'Winter Hackaton', time: '10:30 AM', completed: true }
    ]);
  }

  /**
   * Retrieves progress items data for displaying project progress tracking.
   * 
   * @returns Observable<ProgressItem[]> - Observable containing progress items
   *          with project names, logos, progress percentages, and colors
   */
  getProgressItems(): Observable<ProgressItem[]> {
    return of([
      {
        id: 1,
        name: 'React Material Dashboard',
        logo: 'assets/img/small-logos/logo-jira.svg',
        progress: 90,
        progressColor: 'bg-blue-500'
      },
      {
        id: 2,
        name: 'Argon Design System',
        logo: 'assets/img/small-logos/logo-asana.svg',
        progress: 60,
        progressColor: 'bg-orange-500'
      },
      {
        id: 3,
        name: 'VueJs Now UI Kit PRO',
        logo: 'assets/img/small-logos/logo-spotify.svg',
        progress: 100,
        progressColor: 'bg-emerald-500'
      },
      {
        id: 4,
        name: 'Soft UI Dashboard',
        logo: 'assets/img/small-logos/bootstrap.svg',
        progress: 72,
        progressColor: 'bg-blue-500'
      }
    ]);
  }

  /**
   * Retrieves social post data for displaying social media content and interactions.
   * 
   * @returns Observable<SocialPostData> - Observable containing social post data
   *          with author information, content, images, stats, and comments
   */
  getSocialPostData(): Observable<SocialPostData> {
    return of({
      author: {
        name: 'John Snow',
        avatar: 'assets/img/team-4.jpg'
      },
      timeAgo: '3 days ago',
      content: 'Personal profiles are the perfect way for you to grab their attention and persuade recruiters to continue reading your CV because you\'re telling them from the off exactly why they should hire you.',
      image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/activity-feed.jpg',
      stats: {
        likes: 150,
        comments: 36,
        shares: 12
      },
      followers: {
        avatars: ['assets/img/team-5.jpg', 'assets/img/team-2.jpg', 'assets/img/team-1.jpg'],
        count: 30
      },
      actionButton: {
        text: 'Follow',
        icon: 'fas fa-plus'
      },
      comments: [
        {
          id: '1',
          author: {
            name: 'Michael Lewis',
            avatar: 'assets/img/bruce-mars.jpg'
          },
          text: 'I always felt like I could do anything. That\'s the main thing people are controlled by! Thoughts- their perception of themselves!',
          likes: 3,
          shares: 2,
          isFirst: true
        },
        {
          id: '2',
          author: {
            name: 'Jessica Stones',
            avatar: 'assets/img/team-5.jpg'
          },
          text: 'Society has put up so many boundaries, so many limitations on what\'s right and wrong that it\'s almost impossible to get a pure thought out. It\'s like a little kid, a little boy.',
          likes: 10,
          shares: 1
        }
      ],
      showCommentForm: true,
      currentUser: {
        name: 'Current User',
        avatar: 'assets/img/team-4.jpg'
      }
    });
  }

  /**
   * Retrieves balance card data for displaying financial balance information.
   * 
   * @returns Observable<BalanceCardData> - Observable containing balance data
   *          with amount, currency, trend, and financial metrics
   */
  getBalanceData(): Observable<BalanceCardData> {
    return of({
      amount: '3,3000',
      currency: '$',
      description: 'Your current balance',
      trend: '+ 15%',
      trendValue: '($250)',
      buttonText: 'Add credit',
      orders: {
        percentage: 60,
        label: 'Orders'
      },
      sales: {
        percentage: 40,
        label: 'Sales'
      }
    });
  }

  /**
   * Retrieves crypto card data for displaying cryptocurrency information.
   * 
   * @returns Observable<CryptoCardData> - Observable containing crypto data
   *          with currency name, logo, status, address, and actions
   */
  getCryptoData(): Observable<CryptoCardData> {
    return of({
      name: 'Bitcoin',
      logo: 'assets/img/logos/bitcoin.jpg',
      status: 'Active',
      statusClass: 'text-emerald-600 bg-emerald-200',
      address: '0yx8Wkasd8uWpa083Jj81qZhs923K21',
      owner: {
        name: 'John Snow'
      },
      actions: {
        receive: true,
        send: true,
        swap: true
      }
    });
  }

  /**
   * Retrieves projects data for displaying project management information.
   * 
   * @returns Observable<ProjectItem[]> - Observable containing project list
   *          with names, logos, budgets, status, and completion percentages
   */
  getProjects(): Observable<ProjectItem[]> {
    return of([
      {
        name: 'Spotify',
        logo: 'assets/img/small-logos/logo-spotify.svg',
        budget: '$2,500',
        status: 'working',
        statusColor: 'bg-cyan-500',
        completion: 60,
        completionColor: 'bg-gradient-to-tl from-blue-700 to-cyan-500',
        completionWidth: 'w-3/5'
      },
      {
        name: 'Invision',
        logo: 'assets/img/small-logos/logo-invision.svg',
        budget: '$5,000',
        status: 'done',
        statusColor: 'bg-emerald-500',
        completion: 100,
        completionColor: 'bg-gradient-to-tl from-emerald-500 to-teal-400',
        completionWidth: 'w-full'
      },
      {
        name: 'Jira',
        logo: 'assets/img/small-logos/logo-jira.svg',
        budget: '$3,400',
        status: 'canceled',
        statusColor: 'bg-red-600',
        completion: 30,
        completionColor: 'bg-gradient-to-tl from-red-600 to-orange-600',
        completionWidth: 'w-3/10'
      },
      {
        name: 'Slack',
        logo: 'assets/img/small-logos/logo-slack.svg',
        budget: '$1,000',
        status: 'canceled',
        statusColor: 'bg-red-600',
        completion: 0,
        completionColor: 'bg-gradient-to-tl from-emerald-500 to-teal-400',
        completionWidth: 'w-0'
      },
      {
        name: 'Webdev',
        logo: 'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-webdev.svg',
        budget: '$14,000',
        status: 'working',
        statusColor: 'bg-cyan-500',
        completion: 80,
        completionColor: 'bg-gradient-to-tl from-blue-700 to-cyan-500',
        completionWidth: 'w-4/5'
      }
    ]);
  }

  /**
   * Retrieves countries data for displaying geographic sales information.
   * 
   * @returns Observable<CountryData[]> - Observable containing country data
   *          with country names, flags, sales figures, and bounce rates
   */
  getCountries(): Observable<CountryData[]> {
    return of([
      {
        country: 'United States',
        flag: 'assets/img/icons/flags/US.png',
        sales: '2.500',
        value: '$230,900',
        bounce: '29.9%'
      },
      {
        country: 'Germany',
        flag: 'assets/img/icons/flags/DE.png',
        sales: '3.900',
        value: '$440,000',
        bounce: '40.22%'
      },
      {
        country: 'Great Britain',
        flag: 'assets/img/icons/flags/GB.png',
        sales: '1.400',
        value: '$190,700',
        bounce: '23.44%'
      },
      {
        country: 'Brazil',
        flag: 'assets/img/icons/flags/BR.png',
        sales: '562',
        value: '$143,960',
        bounce: '32.14%'
      }
    ]);
  }

  /**
   * Retrieves authors data for displaying user and author information.
   * 
   * @returns Observable<AuthorData[]> - Observable containing author list
   *          with names, avatars, functions, departments, and employment dates
   */
  getAuthors(): Observable<AuthorData[]> {
    return of([
      {
        avatar: './assets/img/team-2.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        function: 'Manager',
        department: 'Organization',
        status: 'Online',
        statusColor: 'text-emerald-500 bg-emerald-100',
        employed: '23/04/18'
      },
      {
        avatar: './assets/img/team-1.jpg',
        name: 'Alexa Liras',
        email: 'alexa@creative-tim.com',
        function: 'Programator',
        department: 'Developer',
        status: 'Offline',
        statusColor: 'text-slate-500 bg-slate-100',
        employed: '11/01/19'
      },
      {
        avatar: './assets/img/team-3.jpg',
        name: 'Laurent Perrier',
        email: 'laurent@creative-tim.com',
        function: 'Executive',
        department: 'Projects',
        status: 'Online',
        statusColor: 'text-emerald-500 bg-emerald-100',
        employed: '19/09/17'
      },
      {
        avatar: './assets/img/team-4.jpg',
        name: 'Michael Levi',
        email: 'michael@creative-tim.com',
        function: 'Programator',
        department: 'Developer',
        status: 'Online',
        statusColor: 'text-emerald-500 bg-emerald-100',
        employed: '24/12/08'
      },
      {
        avatar: './assets/img/team-5.jpg',
        name: 'Samantha Ivy',
        email: 'samantha@creative-tim.com',
        function: 'Programator',
        department: 'Developer',
        status: 'Offline',
        statusColor: 'text-slate-500 bg-slate-100',
        employed: '15/05/19'
      }
    ]);
  }

  /**
   * Retrieves categories data for displaying classification information.
   * 
   * @returns Observable<CategoryItem[]> - Observable containing category items
   *          with icons, titles, subtitles, and company counts
   */
  getCategories(): Observable<CategoryItem[]> {
    return of([
      {
        id: 'devices',
        icon: 'ni ni-mobile-button',
        iconColor: 'bg-gradient-to-tl from-purple-700 to-pink-500',
        title: 'Devices',
        subtitle: '250 in stock, 346+ sold',
        companies: '250'
      },
      {
        id: 'tickets',
        icon: 'ni ni-tag',
        iconColor: 'bg-gradient-to-tl from-blue-600 to-cyan-600',
        title: 'Tickets',
        subtitle: '123 closed, 15 open',
        companies: '123'
      },
      {
        id: 'error-logs',
        icon: 'ni ni-box-2',
        iconColor: 'bg-gradient-to-tl from-red-500 to-yellow-400',
        title: 'Error logs',
        subtitle: '1 is active, 40 closed',
        companies: '1'
      },
      {
        id: 'happy-users',
        icon: 'ni ni-satisfied',
        iconColor: 'bg-gradient-to-tl from-emerald-500 to-teal-400',
        title: 'Happy users',
        subtitle: '+ 430 this week',
        companies: '430'
      }
    ]);
  }

  /**
   * Retrieves navbar data specifically configured for the Default dashboard page.
   * 
   * @returns Observable<NavbarData> - Observable containing navbar configuration
   *          with breadcrumbs, search placeholder, and notifications
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Default',
      breadcrumbSection: 'Pages',
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
   * Retrieves footer data for displaying footer information and links.
   * 
   * @returns Observable<FooterData> - Observable containing footer configuration
   *          with copyright information and navigation links
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
