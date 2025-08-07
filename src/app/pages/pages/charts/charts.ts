import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NavbarComponent, NavbarData } from '../../../components/layout/navbar/navbar';
import { SidebarComponent, SidebarData } from '../../../components/layout/sidebar/sidebar';
import { FooterComponent } from '../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../components/layout/argon-configurator/argon-configurator';
import { PerfectScrollbarDirective } from '../../../components/layout/sidebar/perfect-scrollbar.directive';
import { ChartsDataService } from '../../../services/charts-data.service';
import { LineChartComponent, LineChartData } from '../../../components/charts/line-chart/line-chart';
import { LineChartGradientComponent, LineChartGradientData } from '../../../components/widgets/line-chart-gradient/line-chart-gradient';
import { BarChartComponent, BarChartData } from '../../../components/charts/bar-chart/bar-chart';
import { BarChartHorizontalComponent, BarChartHorizontalData } from '../../../components/charts/bar-chart-horizontal/bar-chart-horizontal';
import { MixedChartComponent, MixedChartData } from '../../../components/charts/mixed-chart/mixed-chart';
import { BubbleChartComponent, BubbleChartData } from '../../../components/charts/bubble-chart/bubble-chart';
import { DoughnutChartComponent, DoughnutChartData } from '../../../components/charts/doughnut-chart/doughnut-chart';
import { PieChartComponent, PieChartData } from '../../../components/charts/pie-chart/pie-chart';
import { RadarChartComponent, RadarChartData } from '../../../components/charts/radar-chart/radar-chart';
import { PolarChartComponent, PolarChartData } from '../../../components/charts/polar-chart/polar-chart';

/**
 * Charts Component
 * 
 * This component implements a comprehensive charts demonstration page for the application.
 * It provides a showcase of various chart types using Chart.js library, including line
 * charts, bar charts, doughnut charts, pie charts, and more in a complete dashboard
 * layout with interactive data visualization capabilities.
 * 
 * Features:
 * - Complete dashboard layout with sidebar, navbar, footer, and configurator
 * - Multiple chart types: line, bar, doughnut, pie, radar, polar, bubble, and mixed charts
 * - Line chart with gradient styling and trend visualization
 * - Horizontal and vertical bar charts for data comparison
 * - Doughnut and pie charts for proportional data representation
 * - Radar and polar charts for multi-dimensional data analysis
 * - Bubble chart for three-dimensional data visualization
 * - Mixed chart combining multiple chart types
 * - Responsive design for various screen sizes
 * - Dark mode support for enhanced user experience
 * - Perfect scrollbar integration for smooth navigation
 * - Chart data management through dedicated service
 * - Interactive chart elements and tooltips
 * 
 * The component serves as a comprehensive chart showcase, providing developers
 * and users with examples of various chart types, their configurations, and
 * interactive capabilities to understand how to implement data visualization
 * in their applications using Chart.js.
 * 
 * @example
 * ```html
 * <app-charts></app-charts>
 * ```
 */
@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    PerfectScrollbarDirective,
    LineChartComponent,
    LineChartGradientComponent,
    BarChartComponent,
    BarChartHorizontalComponent,
    MixedChartComponent,
    BubbleChartComponent,
    DoughnutChartComponent,
    PieChartComponent,
    RadarChartComponent,
    PolarChartComponent
  ],
  templateUrl: './charts.html'
})
export class ChartsComponent {

  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;

  /** Observable for line chart data */
  lineChartData$: Observable<LineChartData>;
  
  /** Observable for line chart gradient data */
  lineChartGradientData$: Observable<LineChartGradientData>;
  
  /** Observable for bar chart data */
  barChartData$: Observable<BarChartData>;
  
  /** Observable for bar chart horizontal data */
  barChartHorizontalData$: Observable<BarChartHorizontalData>;

  /** Observable for mixed chart data */
  mixedChartData$: Observable<MixedChartData>;
  
  /** Observable for bubble chart data */
  bubbleChartData$: Observable<BubbleChartData>;
  
  /** Observable for doughnut chart data */
  doughnutChartData$: Observable<DoughnutChartData>;
  
  /** Observable for pie chart data */
  pieChartData$: Observable<PieChartData>;

  /** Observable for radar chart data */
  radarChartData$: Observable<RadarChartData>;
  
  /** Observable for polar chart data */
  polarChartData$: Observable<PolarChartData>;

  /**
   * Creates an instance of ChartsComponent.
   * 
   * Initializes the component by subscribing to data streams from ChartsDataService
   * for sidebar, navbar, and all chart data including line, bar, doughnut, pie,
   * radar, polar, bubble, and mixed chart configurations.
   * 
   * @param chartsDataService - Service for managing charts data and configurations
   */
  constructor(private chartsDataService: ChartsDataService) {
    this.sidebarData$ = this.chartsDataService.getSidebarData();
    this.navbarData$ = this.chartsDataService.getNavbarData();
    this.lineChartData$ = this.chartsDataService.getLineChartData();
    this.lineChartGradientData$ = this.chartsDataService.getLineChartGradientData();
    this.barChartData$ = this.chartsDataService.getBarChartData();
    this.barChartHorizontalData$ = this.chartsDataService.getBarChartHorizontalData();
    this.mixedChartData$ = this.chartsDataService.getMixedChartData();
    this.bubbleChartData$ = this.chartsDataService.getBubbleChartData();
    this.doughnutChartData$ = this.chartsDataService.getDoughnutChartData();
    this.pieChartData$ = this.chartsDataService.getPieChartData();
    this.radarChartData$ = this.chartsDataService.getRadarChartData();
    this.polarChartData$ = this.chartsDataService.getPolarChartData();
  }
} 