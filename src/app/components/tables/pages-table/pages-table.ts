import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * PAGES TABLE COMPONENT
 * ========================================
 *
 * A table component for displaying website page performance metrics
 * including page views, average time, and bounce rates.
 *
 * FEATURES:
 * - Page performance metrics display
 * - Page views, average time, and bounce rate tracking
 * - Tooltip information for additional context
 * - Responsive design with Tailwind CSS
 * - Performance analytics visualization
 *
 * USAGE:
 * <app-pages-table [data]="pagesData"></app-pages-table>
 *
 * REUSABILITY: High - Generic page analytics display
 * COMPLEXITY: Low - Simple metrics data display
 */

/**
 * Interface representing individual page data structure.
 *
 * @property {string} page - Page name or URL
 * @property {number} pageViews - Number of page views
 * @property {string} avgTime - Average time spent on page
 * @property {string} bounceRate - Bounce rate percentage
 *
 * @example
 * const page: Page = {
 *   page: '/home',
 *   pageViews: 1250,
 *   avgTime: '2m 30s',
 *   bounceRate: '45%'
 * };
 */
export interface Page {
  /** Page name or URL */
  page: string;
  /** Number of page views */
  pageViews: number;
  /** Average time spent on page */
  avgTime: string;
  /** Bounce rate percentage */
  bounceRate: string;
}

/**
 * Interface representing the complete pages table data structure.
 *
 * @property {string} title - Component title
 * @property {string} tooltipText - Tooltip information text
 * @property {Page[]} pages - Array of page data
 *
 * @example
 * const pagesData: PagesTableData = {
 *   title: 'Page Performance',
 *   tooltipText: 'Click for detailed analytics',
 *   pages: [
 *     {
 *       page: '/home',
 *       pageViews: 1250,
 *       avgTime: '2m 30s',
 *       bounceRate: '45%'
 *     }
 *   ]
 * };
 */
export interface PagesTableData {
  /** Component title */
  title: string;
  /** Tooltip text */
  tooltipText: string;
  /** Array of page data */
  pages: Page[];
}

/**
 * Pages Table Component
 *
 * A standalone component for displaying website page performance metrics
 * in a table format with analytics data.
 *
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Required input validation
 * - Responsive design with Tailwind CSS
 * - Minimal dependencies (only CommonModule)
 *
 * REUSABILITY FEATURES:
 * - Configurable data input with complete interface
 * - Flexible page metrics display
 * - Tooltip information support
 * - No hardcoded values
 * - Easily extendable for additional metrics
 *
 * USE CASES:
 * - Website analytics dashboards
 * - Page performance monitoring
 * - SEO analytics displays
 * - Content performance tracking
 * - User behavior analysis
 *
 * INTEGRATION EXAMPLE:
 *
 * ```typescript
 * // In parent component
 * pagesData: PagesTableData = {
 *   title: 'Page Analytics',
 *   tooltipText: 'Performance metrics for each page',
 *   pages: []
 * };
 *
 * ngOnInit() {
 *   this.loadPageAnalytics();
 * }
 *
 * loadPageAnalytics() {
 *   this.analyticsService.getPageMetrics().subscribe(data => {
 *     this.pagesData.pages = data;
 *   });
 * }
 * ```
 */
@Component({
  selector: 'app-pages-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pages-table.html'
})
export class PagesTableComponent {
  
  /**
   * Pages table data containing title, tooltip, and page metrics.
   * @type {PagesTableData}
   * @required - Ensures data is always provided
   */
  @Input({ required: true }) data!: PagesTableData;

} 