import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { NavbarData } from '../components/layout/navbar/navbar';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { SidebarDataService } from './sidebar-data.service';
import { LineChartData } from '../components/charts/line-chart/line-chart';
import { LineChartGradientData } from '../components/widgets/line-chart-gradient/line-chart-gradient';
import { BarChartData } from '../components/charts/bar-chart/bar-chart';
import { BarChartHorizontalData } from '../components/charts/bar-chart-horizontal/bar-chart-horizontal';
import { MixedChartData } from '../components/charts/mixed-chart/mixed-chart';
import { BubbleChartData, BubbleDataPoint } from '../components/charts/bubble-chart/bubble-chart';
import { DoughnutChartData } from '../components/charts/doughnut-chart/doughnut-chart';
import { PieChartData } from '../components/charts/pie-chart/pie-chart';
import { RadarChartData } from '../components/charts/radar-chart/radar-chart';
import { PolarChartData } from '../components/charts/polar-chart/polar-chart';

/**
 * ChartsDataService
 *
 * Service that provides mock data for various chart components and visualizations.
 * This service manages data for different chart types including line charts, bar charts,
 * pie charts, and other statistical visualizations.
 *
 * The service provides data for:
 * - Line charts with and without gradients
 * - Bar charts (vertical and horizontal)
 * - Mixed charts combining multiple chart types
 * - Bubble charts for multi-dimensional data
 * - Doughnut and pie charts for proportions
 * - Radar and polar charts for specialized visualizations
 * - Navigation components (sidebar, navbar)
 *
 * @version 1.0.0
 * @since 2024
 */
@Injectable({
  providedIn: 'root'
})
export class ChartsDataService {

  // BehaviorSubjects para datos reactivos
  private lineChartDataSubject = new BehaviorSubject<LineChartData>({
    title: 'Line chart',
    chartId: 'line-chart',
    chartData: {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Organic Search",
          tension: 0.4,
          borderWidth: 3,
          pointRadius: 2,
          pointBackgroundColor: "#5e72e4",
          borderColor: "#5e72e4",
          backgroundColor: null,
          data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
          maxBarThickness: 6
        },
        {
          label: "Referral",
          tension: 0.4,
          borderWidth: 3,
          pointRadius: 2,
          pointBackgroundColor: "#3A416F",
          borderColor: "#3A416F",
          backgroundColor: null,
          data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
          maxBarThickness: 6
        },
        {
          label: "Direct",
          tension: 0.4,
          borderWidth: 3,
          pointRadius: 2,
          pointBackgroundColor: "#17c1e8",
          borderColor: "#17c1e8",
          backgroundColor: null,
          data: [40, 80, 70, 90, 30, 90, 140, 130, 200],
          maxBarThickness: 6
        }
      ]
    }
  });

  private lineChartGradientDataSubject = new BehaviorSubject<LineChartGradientData>({
    title: 'Line chart with gradient',
    chartId: 'line-chart-gradient',
    chartData: {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Mobile apps",
          tension: 0.4,
          borderWidth: 3,
          pointRadius: 0,
          borderColor: "#5e72e4",
          backgroundColor: null,
          fill: true,
          data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
          maxBarThickness: 6
        },
        {
          label: "Websites",
          tension: 0.4,
          borderWidth: 3,
          pointRadius: 0,
          borderColor: "#3A416F",
          backgroundColor: null,
          fill: true,
          data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
          maxBarThickness: 6
        }
      ]
    }
  });

  private barChartDataSubject = new BehaviorSubject<BarChartData>({
    title: 'Bar chart',
    chartId: 'bar-chart',
    chartData: {
      labels: ['16-20', '21-25', '26-30', '31-36', '36-42', '42+'],
      datasets: [{
        label: "Sales by age",
        weight: 5,
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: '#3A416F',
        data: [15, 20, 12, 60, 20, 15],
        fill: false,
        maxBarThickness: 35
      }]
    }
  });

  private barChartHorizontalDataSubject = new BehaviorSubject<BarChartHorizontalData>({
    title: 'Bar chart horizontal',
    chartId: 'bar-chart-horizontal',
    chartData: {
      labels: ['16-20', '21-25', '26-30', '31-36', '36-42', '42+'],
      datasets: [{
        label: "Sales by age",
        weight: 5,
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: '#3A416F',
        data: [15, 20, 12, 60, 20, 15],
        fill: false
      }]
    }
  });

  private mixedChartDataSubject = new BehaviorSubject<MixedChartData>({
    title: 'Mixed chart',
    chartId: 'mixed-chart',
    chartData: {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          type: "bar",
          label: "Organic Search",
          weight: 5,
          tension: 0.4,
          borderWidth: 0,
          pointBackgroundColor: "#3A416F",
          borderColor: "#3A416F",
          backgroundColor: '#3A416F',
          borderRadius: 4,
          borderSkipped: false,
          data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
          maxBarThickness: 10
        },
        {
          type: "line",
          label: "Referral",
          weight: 5,
          tension: 0.4,
          borderWidth: 3,
          pointRadius: 0,
          pointBackgroundColor: "#5e72e4",
          borderColor: "#5e72e4",
          backgroundColor: null,
          borderRadius: 0,
          borderSkipped: false,
          data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
          maxBarThickness: 6,
          fill: true
        }
      ]
    }
  });

  private bubbleChartDataSubject = new BehaviorSubject<BubbleChartData>({
    title: 'Bubble chart',
    chartId: 'bubble-chart',
    chartData: {
      labels: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [
            { x: 100, y: 0, r: 10 },
            { x: 60, y: 30, r: 20 },
            { x: 40, y: 350, r: 10 },
            { x: 80, y: 80, r: 10 },
            { x: 20, y: 30, r: 15 },
            { x: 0, y: 100, r: 5 }
          ],
          backgroundColor: '#5e72e4'
        },
        {
          label: 'Dataset 2',
          data: [
            { x: 70, y: 40, r: 10 },
            { x: 30, y: 60, r: 20 },
            { x: 10, y: 300, r: 25 },
            { x: 60, y: 200, r: 10 },
            { x: 50, y: 300, r: 15 },
            { x: 20, y: 350, r: 5 }
          ],
          backgroundColor: '#3A416F'
        }
      ]
    }
  });

  private doughnutChartDataSubject = new BehaviorSubject<DoughnutChartData>({
    title: 'Doughnut chart',
    chartId: 'doughnut-chart',
    chartData: {
      labels: ['Facebook', 'Direct', 'Organic', 'Referral'],
      datasets: [{
        label: "Projects",
        weight: 9,
        cutout: 60,
        tension: 0.9,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: ['#17c1e8', '#5e72e4', '#3A416F', '#a8b8d8'],
        data: [10, 20, 12, 60],
        fill: false
      }]
    }
  });

  private pieChartDataSubject = new BehaviorSubject<PieChartData>({
    title: 'Pie chart',
    chartId: 'pie-chart',
    chartData: {
      labels: ['Facebook', 'Direct', 'Organic', 'Referral'],
      datasets: [{
        label: "Projects",
        weight: 9,
        cutout: 0,
        tension: 0.9,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: ['#17c1e8', '#5e72e4', '#3A416F', '#a8b8d8'],
        data: [10, 20, 12, 60],
        fill: false
      }]
    }
  });

  private radarChartDataSubject = new BehaviorSubject<RadarChartData>({
    title: 'Radar chart',
    chartId: 'radar-chart',
    chartData: {
      labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
      datasets: [{
        label: "Student A",
        backgroundColor: "rgba(58,65,111,0.2)",
        data: [65, 75, 70, 80, 60, 80],
        borderDash: [5, 5]
      }, {
        label: "Student B",
        backgroundColor: "rgba(203,12,159,0.2)",
        data: [54, 65, 60, 70, 70, 75]
      }]
    }
  });

  private polarChartDataSubject = new BehaviorSubject<PolarChartData>({
    title: 'Polar chart',
    chartId: 'polar-chart',
    chartData: {
      labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
      datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#17c1e8', '#5e72e4', '#3A416F', '#a8b8d8', '#82d616']
      }]
    }
  });

  /**
   * Creates an instance of ChartsDataService.
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
   * Retrieves navbar data specifically configured for the Charts page.
   *
   * @returns Observable<NavbarData> - Observable containing navbar configuration with breadcrumbs,
   *          search placeholder, and notifications
   */
  getNavbarData(): Observable<NavbarData> {
    const navbarData: NavbarData = {
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Charts',
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
          description: 'New message from Laur',
          time: '13 minutes ago'
        },
        {
          avatarUrl: 'assets/img/small-logos/logo-spotify.svg',
          title: 'New album by Travis Scott',
          description: 'New album by Travis Scott',
          time: '1 day'
        },
        {
          avatarUrl: 'assets/img/small-logos/logo-spotify.svg',
          title: 'Payment successfully completed',
          description: 'Payment successfully completed',
          time: '2 days'
        }
      ]
    };
    return of(navbarData);
  }

  /**
   * Retrieves line chart data for displaying time-series data with multiple datasets.
   *
   * @returns Observable<LineChartData> - Observable containing line chart configuration
   *          with labels, datasets, colors, and styling options
   */
  getLineChartData(): Observable<LineChartData> {
    return this.lineChartDataSubject.asObservable();
  }

  /**
   * Updates line chart data with new values.
   *
   * @param newData - New line chart data to update
   */
  updateLineChartData(newData: LineChartData): void {
    this.lineChartDataSubject.next(newData);
  }

  /**
   * Retrieves line chart gradient data for displaying time-series data with gradient fills.
   *
   * @returns Observable<LineChartGradientData> - Observable containing line chart configuration
   *          with gradient fills, labels, and multiple datasets
   */
  getLineChartGradientData(): Observable<LineChartGradientData> {
    return this.lineChartGradientDataSubject.asObservable();
  }

  /**
   * Updates line chart gradient data with new values.
   *
   * @param newData - New line chart gradient data to update
   */
  updateLineChartGradientData(newData: LineChartGradientData): void {
    this.lineChartGradientDataSubject.next(newData);
  }

  /**
   * Retrieves bar chart data for displaying categorical data in vertical bars.
   *
   * @returns Observable<BarChartData> - Observable containing bar chart configuration
   *          with labels, dataset, colors, and styling options
   */
  getBarChartData(): Observable<BarChartData> {
    return this.barChartDataSubject.asObservable();
  }

  /**
   * Updates bar chart data with new values.
   *
   * @param newData - New bar chart data to update
   */
  updateBarChartData(newData: BarChartData): void {
    this.barChartDataSubject.next(newData);
  }

  /**
   * Retrieves horizontal bar chart data for displaying categorical data in horizontal bars.
   *
   * @returns Observable<BarChartHorizontalData> - Observable containing horizontal bar chart
   *          configuration with labels, dataset, and styling options
   */
  getBarChartHorizontalData(): Observable<BarChartHorizontalData> {
    return this.barChartHorizontalDataSubject.asObservable();
  }

  /**
   * Updates horizontal bar chart data with new values.
   *
   * @param newData - New horizontal bar chart data to update
   */
  updateBarChartHorizontalData(newData: BarChartHorizontalData): void {
    this.barChartHorizontalDataSubject.next(newData);
  }

  /**
   * Retrieves mixed chart data for displaying combined chart types in a single visualization.
   *
   * @returns Observable<MixedChartData> - Observable containing mixed chart configuration
   *          with multiple chart types and datasets
   */
  getMixedChartData(): Observable<MixedChartData> {
    return this.mixedChartDataSubject.asObservable();
  }

  /**
   * Updates mixed chart data with new values.
   *
   * @param newData - New mixed chart data to update
   */
  updateMixedChartData(newData: MixedChartData): void {
    this.mixedChartDataSubject.next(newData);
  }

  /**
   * Retrieves bubble chart data for displaying multi-dimensional data points.
   *
   * @returns Observable<BubbleChartData> - Observable containing bubble chart configuration
   *          with labels, datasets, and data points
   */
  getBubbleChartData(): Observable<BubbleChartData> {
    return this.bubbleChartDataSubject.asObservable();
  }

  /**
   * Updates bubble chart data with new values.
   *
   * @param newData - New bubble chart data to update
   */
  updateBubbleChartData(newData: BubbleChartData): void {
    this.bubbleChartDataSubject.next(newData);
  }

  /**
   * Retrieves doughnut chart data for displaying proportions of different categories.
   *
   * @returns Observable<DoughnutChartData> - Observable containing doughnut chart configuration
   *          with labels, datasets, and proportions
   */
  getDoughnutChartData(): Observable<DoughnutChartData> {
    return this.doughnutChartDataSubject.asObservable();
  }

  /**
   * Updates doughnut chart data with new values.
   *
   * @param newData - New doughnut chart data to update
   */
  updateDoughnutChartData(newData: DoughnutChartData): void {
    this.doughnutChartDataSubject.next(newData);
  }

  /**
   * Retrieves pie chart data for displaying proportions of different categories.
   *
   * @returns Observable<PieChartData> - Observable containing pie chart configuration
   *          with labels, datasets, and proportions
   */
  getPieChartData(): Observable<PieChartData> {
    return this.pieChartDataSubject.asObservable();
  }

  /**
   * Updates pie chart data with new values.
   *
   * @param newData - New pie chart data to update
   */
  updatePieChartData(newData: PieChartData): void {
    this.pieChartDataSubject.next(newData);
  }

  /**
   * Retrieves radar chart data for displaying multi-dimensional data analysis.
   *
   * @returns Observable<RadarChartData> - Observable containing radar chart configuration
   *          with labels, datasets, and multi-dimensional data
   */
  getRadarChartData(): Observable<RadarChartData> {
    return this.radarChartDataSubject.asObservable();
  }

  /**
   * Updates radar chart data with new values.
   *
   * @param newData - New radar chart data to update
   */
  updateRadarChartData(newData: RadarChartData): void {
    this.radarChartDataSubject.next(newData);
  }

  /**
   * Retrieves polar chart data for displaying comparative analysis of multiple categories.
   *
   * @returns Observable<PolarChartData> - Observable containing polar chart configuration
   *          with labels, datasets, and comparative data
   */
  getPolarChartData(): Observable<PolarChartData> {
    return this.polarChartDataSubject.asObservable();
  }

  /**
   * Updates polar chart data with new values.
   *
   * @param newData - New polar chart data to update
   */
  updatePolarChartData(newData: PolarChartData): void {
    this.polarChartDataSubject.next(newData);
  }
}
