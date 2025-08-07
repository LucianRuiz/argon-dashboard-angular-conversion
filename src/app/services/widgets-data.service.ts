import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';

// Import interfaces from components
import { BatteryHealthWidgetData } from '../components/widgets/battery-health-widget/battery-health-widget';
import { MusicVolumeWidgetData } from '../components/widgets/music-volume-widget/music-volume-widget';
import { IncomeChartWidgetData } from '../components/charts/income-chart-widget/income-chart-widget';
import { TasksStatsCardData } from '../components/cards/tasks-stats-card/tasks-stats-card';
import { UpcomingEventsWidgetData } from '../components/widgets/upcoming-events-widget/upcoming-events-widget';
import { FullBodyWidgetData } from '../components/widgets/full-body-widget/full-body-widget';
import { LightsWidgetData } from '../components/widgets/lights-widget/lights-widget';
import { CaloriesWidgetData } from '../components/widgets/calories-widget/calories-widget';
import { LocationDistanceWidgetData } from '../components/widgets/location-distance-widget/location-distance-widget';
import { StepsWidgetData } from '../components/steps/steps-widget/steps-widget';
import { SummaryCardsData } from '../components/cards/summary-cards/summary-cards';
import { CreditCardVisualData } from '../components/cards/credit-card-visual/credit-card-visual';
import { CalendarWidgetData } from '../components/widgets/calendar-widget/calendar-widget';
import { CategoryItem } from '../components/widgets/categories/categories';
import { TimelineData } from '../components/widgets/timeline-item/timeline-item';
import { VrMusicPlayerData } from '../components/widgets/vr-music-player/vr-music-player';

/**
 * WidgetsDataService
 *
 * Service that provides mock data for various dashboard widgets and components.
 * This service manages data for the widgets page, including health metrics, charts,
 * calendars, and interactive components.
 *
 * The service provides data for:
 * - Health and fitness widgets (battery, steps, calories)
 * - Financial widgets (income charts, payment cards)
 * - Entertainment widgets (music player, VR components)
 * - Utility widgets (lights, location, calendar)
 * - Navigation components (sidebar, navbar)
 *
 * @author Argon Dashboard Team
 * @version 1.0.0
 * @since 2024
 */
@Injectable({
  providedIn: 'root'
})
export class WidgetsDataService {

  /**
   * Creates an instance of WidgetsDataService.
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
   * Retrieves navbar data specifically configured for the Widgets page.
   *
   * @returns Observable<NavbarData> - Observable containing navbar configuration with breadcrumbs,
   *          search placeholder, and notifications
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Widgets',
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
   * Retrieves battery health widget data for displaying device battery status.
   *
   * @returns Observable<BatteryHealthWidgetData> - Observable containing battery percentage,
   *          icon, and styling information
   */
  getBatteryHealthData(): Observable<BatteryHealthWidgetData> {
    return of({
      title: 'Battery Health',
      value: '99%',
      icon: 'ni-controller',
      iconColor: 'text-slate-700',
      backgroundGradient: 'bg-gradient-to-tl from-zinc-800 to-zinc-700'
    });
  }

  /**
   * Retrieves music volume widget data for displaying audio control information.
   *
   * @returns Observable<MusicVolumeWidgetData> - Observable containing volume level,
   *          icon, and styling information
   */
  getMusicVolumeData(): Observable<MusicVolumeWidgetData> {
    return of({
      title: 'Music Volume',
      value: '15/100',
      icon: 'ni-note-03',
      iconColor: 'text-slate-700',
      backgroundGradient: 'bg-gradient-to-tl from-zinc-800 to-zinc-700'
    });
  }

  /**
   * Retrieves income chart widget data for displaying financial metrics with chart visualization.
   *
   * @returns Observable<IncomeChartWidgetData> - Observable containing income value,
   *          percentage change, chart configuration, and dropdown options
   */
  getIncomeChartData(): Observable<IncomeChartWidgetData> {
    return of({
      title: 'Income',
      value: '$130,832',
      percentage: '+90%',
      percentageColor: 'text-lime-500',
      chartId: 'chart-widgets-2',
      // Sin backgroundGradient para usar el estilo por defecto (fondo blanco)
      titleColor: 'dark:text-white',
      textColor: 'dark:text-white',
      dropdownIconColor: 'text-slate-500',
      dropdownItems: [
        { text: 'Action', href: 'javascript:;' },
        { text: 'Another action', href: 'javascript:;' },
        { text: 'Something else here', href: 'javascript:;' }
      ],
      chartData: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Income',
          data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
          backgroundColor: 'rgba(37,47,64,0.05)',
          borderColor: '#252f40',
          tension: 0.5,
          borderWidth: 2,
          pointRadius: 0,
          maxBarThickness: 6,
          fill: true
        }]
      }
    });
  }

  /**
   * Retrieves tasks statistics card data for displaying task completion metrics.
   *
   * @returns Observable<TasksStatsCardData> - Observable containing task count,
   *          completion percentage, progress bar, and chart data
   */
  getTasksChartData(): Observable<TasksStatsCardData> {
    return of({
      icon: 'ni-calendar-grid-58',
      title: 'Tasks',
      value: '480',
      percentage: '60%',
      progressValue: 'w-3/5',
      chartData: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        data: [30, 45, 35, 50, 40, 60, 35]
      },
      iconColor: 'text-white',
      iconBackground: 'bg-gradient-to-tl from-blue-500 to-violet-500',
      progressColor: 'bg-gradient-to-tl from-blue-500 to-violet-500',
      titleColor: 'text-slate-700',
      valueColor: 'text-slate-700',
      percentageColor: 'text-slate-400',
      chartColors: {
        borderColor: '#2152ff',
        backgroundColor: 'rgba(33, 82, 255, 0.1)',
        pointBackgroundColor: '#2152ff',
        pointBorderColor: '#ffffff'
      },
      chartOptions: {
        tension: 0.3,
        pointRadius: 2,
        borderWidth: 2,
        maxBarThickness: 6,
        fill: true
      }
    });
  }

  /**
   * Retrieves upcoming events widget data for displaying scheduled activities.
   *
   * @returns Observable<UpcomingEventsWidgetData> - Observable containing event list
   *          with titles, dates, and icons
   */
  getUpcomingEventsData(): Observable<UpcomingEventsWidgetData> {
    return of({
      title: 'Upcoming Events',
      subtitle: 'Joined',
      events: [
        {
          title: 'Cyber Week',
          date: '27 March 2020, at 12:30 PM',
          icon: 'ni-money-coins',
          iconColor: 'text-transparent bg-clip-text bg-gradient-to-tl from-blue-700 to-cyan-500'
        },
        {
          title: 'Meeting with Marry',
          date: '24 March 2021, at 10:00 PM',
          icon: 'ni-bell-55',
          iconColor: 'text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500'
        }
      ]
    });
  }

  /**
   * Retrieves full body widget data for displaying fitness or health information.
   *
   * @returns Observable<FullBodyWidgetData> - Observable containing title, description,
   *          and status badge
   */
  getFullBodyData(): Observable<FullBodyWidgetData> {
    return of({
      title: 'Full Body',
      description: 'What matters is the people who are sparked by it. And the people who are liked.',
      badge: {
        text: 'Moderate',
        color: 'bg-blue-500/13 text-blue-600'
      }
    });
  }

  /**
   * Retrieves lights widget data for displaying smart home lighting control.
   *
   * @returns Observable<LightsWidgetData> - Observable containing light status,
   *          icon, and toggle state
   */
  getLightsData(): Observable<LightsWidgetData> {
    return of({
      title: 'Lights',
      imageUrl: './assets/img/small-logos/icon-bulb.svg',
      isChecked: true
    });
  }

  /**
   * Retrieves calories widget data for displaying daily calorie consumption.
   *
   * @returns Observable<CaloriesWidgetData> - Observable containing calorie value,
   *          percentage change, and chart configuration
   */
  getCaloriesData(): Observable<CaloriesWidgetData> {
    return of({
      title: 'Calories',
      value: '97',
      percentage: '+5%',
      percentageColor: 'text-lime-500',
      chartId: 'chart-widgets-1',
      chartData: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Calories',
          data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
          backgroundColor: 'rgba(37,47,64,0.05)',
          borderColor: '#252f40',
          tension: 0.5,
          borderWidth: 2,
          pointRadius: 0,
          maxBarThickness: 6,
          fill: true
        }]
      }
    });
  }

  /**
   * Retrieves location distance widget data for displaying distance to a specific location.
   *
   * @returns Observable<LocationDistanceWidgetData> - Observable containing distance,
   *          unit, icon, and styling information
   */
  getLocationDistanceData(): Observable<LocationDistanceWidgetData> {
    return of({
      title: 'New York City',
      distance: '754',
      unit: 'm',
      icon: 'ni-curved-next',
      iconColor: 'text-white',
      backgroundGradient: 'bg-gradient-to-tl from-blue-500 to-violet-500'
    });
  }

  /**
   * Retrieves steps widget data for displaying daily step count.
   *
   * @returns Observable<StepsWidgetData> - Observable containing step value,
   *          and status badge
   */
  getStepsData(): Observable<StepsWidgetData> {
    return of({
      title: 'Steps',
      value: '11.4K',
      badge: {
        text: '+4.3%',
        color: 'bg-emerald-200 text-emerald-600'
      }
    });
  }



  /**
   * Retrieves payment cards data for displaying salary and PayPal payment information.
   *
   * @returns Observable<SummaryCardsData> - Observable containing payment cards with
   *          amounts, icons, and descriptions
   */
  getPaymentCardsData(): Observable<SummaryCardsData> {
    return of({
      cards: [
        {
          id: 1,
          title: 'Salary',
          amount: '+$2000',
          icon: 'fas fa-landmark',
          bgClass: 'bg-gradient-to-tl from-blue-500 to-violet-500',
          description: 'Belong Interactive'
        },
        {
          id: 2,
          title: 'Paypal',
          amount: '$455.00',
          icon: 'fab fa-paypal',
          bgClass: 'bg-gradient-to-tl from-blue-500 to-violet-500',
          description: 'Freelance Payment'
        }
      ]
    });
  }

  /**
   * Retrieves credit card visual data for displaying card information.
   *
   * @returns Observable<CreditCardVisualData> - Observable containing card number,
   *          holder name, expiry date, and card styling
   */
  getCreditCardData(): Observable<CreditCardVisualData> {
    return of({
      cardNumber: '4562    1122    4594    7852',
      cardHolder: 'Jack Peterson',
      expires: '11/22',
      backgroundImage: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/card-visa.jpg',
      logoUrl: './assets/img/logos/mastercard.png',
      logoAlt: 'Mastercard logo'
    });
  }

  /**
   * Retrieves calendar widget data for displaying events and appointments.
   *
   * @returns Observable<CalendarWidgetData> - Observable containing calendar configuration,
   *          current date, and event list with styling
   */
  getCalendarData(): Observable<CalendarWidgetData> {
    return of({
      title: 'Calendar',
      currentDate: new Date(),
      type: 'widget',
      showHeaderToolbar: false,
      initialDate: '2020-12-01',
      events: [
        { date: '2020-11-18', title: 'Call with Dave', className: 'bg-gradient-to-tl from-red-600 to-orange-600' },
        { date: '2020-11-21', title: 'Lunch meeting', className: 'bg-gradient-to-tl from-orange-500 to-yellow-500' },
        { date: '2020-11-29', title: 'All day conference', className: 'bg-gradient-to-tl from-emerald-500 to-teal-400' },
        { date: '2020-12-01', title: 'Meeting with Mary', className: 'bg-gradient-to-tl from-blue-700 to-cyan-500' },
        { date: '2020-12-03', title: 'Winter Hackaton', className: 'bg-gradient-to-tl from-red-600 to-orange-600' },
        { date: '2020-12-07', title: 'Digital event', className: 'bg-gradient-to-tl from-orange-500 to-yellow-500' },
        { date: '2020-12-10', title: 'Marketing event', className: 'bg-gradient-to-tl from-blue-500 to-violet-500' },
        { date: '2020-12-19', title: 'Dinner with Family', className: 'bg-gradient-to-tl from-red-600 to-orange-600' },
        { date: '2020-12-23', title: 'Black Friday', className: 'bg-gradient-to-tl from-blue-700 to-cyan-500' },
        { date: '2020-12-02', title: 'Cyber Week', className: 'bg-gradient-to-tl from-orange-500 to-yellow-500' }
      ]
    });
  }

  /**
   * Retrieves categories data for displaying different system categories.
   *
   * @returns Observable<CategoryItem[]> - Observable containing category items with
   *          icons, titles, subtitles, and statistics
   */
  getCategoriesData(): Observable<CategoryItem[]> {
    return of([
      {
        id: 'devices',
        icon: 'ni ni-spaceship',
        iconColor: 'text-white',
        title: 'Devices',
        subtitle: '250 in stock, 346+ sold',
        companies: ''
      },
      {
        id: 'tickets',
        icon: 'ni ni-settings',
        iconColor: 'text-white',
        title: 'Tickets',
        subtitle: '123 closed, 15 open',
        companies: ''
      },
      {
        id: 'error-logs',
        icon: 'ni ni-box-2',
        iconColor: 'text-white',
        title: 'Error logs',
        subtitle: '1 is active, 40 closed',
        companies: ''
      },
      {
        id: 'happy-users',
        icon: 'ni ni-single-02',
        iconColor: 'text-white',
        title: 'Happy users',
        subtitle: '+ 430',
        companies: ''
      }
    ]);
  }

  /**
   * Retrieves timeline data for displaying chronological events and activities.
   *
   * @returns Observable<TimelineData> - Observable containing timeline configuration,
   *          percentage metrics, and timeline items with icons and descriptions
   */
  getTimelineData(): Observable<TimelineData> {
    return of({
      title: 'Orders overview',
      isDark: false,
      percentage: '24%',
      percentageText: 'this month',
      percentageIcon: 'fa-arrow-up text-lime-500',
      items: [
        {
          id: 1,
          time: '7:20 PM',
          title: '$2400, Design changes',
          date: '22 DEC',
          description: '',
          icon: 'ni ni-bell-55',
          iconGradient: 'bg-gradient-to-tl from-emerald-500 to-teal-400',
          tags: []
        },
        {
          id: 2,
          time: '11 PM',
          title: 'New order #1832412',
          date: '21 DEC',
          description: '',
          icon: 'ni ni-html5',
          iconGradient: 'bg-gradient-to-tl from-red-600 to-orange-600',
          tags: []
        },
        {
          id: 3,
          time: '9:34 PM',
          title: 'Server payments for April',
          date: '21 DEC',
          description: '',
          icon: 'ni ni-cart',
          iconGradient: 'bg-gradient-to-tl from-blue-700 to-cyan-500',
          tags: []
        },
        {
          id: 4,
          time: '2:20 AM',
          title: 'New card added for order #4395133',
          date: '20 DEC',
          description: '',
          icon: 'ni ni-credit-card',
          iconGradient: 'bg-gradient-to-tl from-orange-500 to-yellow-500',
          tags: []
        },
        {
          id: 5,
          time: '4:54 AM',
          title: 'Unlock packages for development',
          date: '18 DEC',
          description: '',
          icon: 'ni ni-key-25',
          iconGradient: 'bg-gradient-to-tl from-blue-500 to-violet-500',
          tags: []
        },
        {
          id: 6,
          time: '09:00 AM',
          title: 'Launch the product',
          date: '21 DEC',
          description: '',
          icon: 'ni ni-box-2',
          iconGradient: 'bg-gradient-to-tl from-zinc-800 to-zinc-700',
          tags: []
        }
      ]
    });
  }



  /**
   * Retrieves VR music player data for virtual reality entertainment components.
   *
   * @returns Observable<VrMusicPlayerData> - Observable containing music player
   *          configuration for VR environments
   */
  getVrMusicPlayerData(): Observable<VrMusicPlayerData> {
    return of({
      title: 'Some Kind Of Blues',
      artist: 'Deftones',
      backgroundImage: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/card-music.jpg',
      gradientColors: {
        from: 'zinc-800',
        to: 'zinc-700',
        opacity: '85'
      }
    });
  }
}
