import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing country sales data
 * Defines the structure for country-specific sales information
 */
export interface CountryData {
  /** Country name */
  country: string;
  /** URL to country flag image */
  flag: string;
  /** Sales figure (formatted string) */
  sales: string;
  /** Value metric (formatted string) */
  value: string;
  /** Bounce rate or percentage (formatted string) */
  bounce: string;
}

/**
 * Sales by Country Component
 * 
 * A component that displays sales data organized by country in a table format.
 * Each country entry includes a flag, country name, sales figures, value metrics,
 * and bounce rates. Designed for business analytics and reporting dashboards.
 * 
 * Features:
 * - Tabular display of country sales data
 * - Country flags for visual identification
 * - Multiple metrics per country (sales, value, bounce)
 * - Responsive table design with horizontal scroll
 * - Dark mode support throughout
 * - Optimized rendering with trackBy function
 * - Clean typography and spacing
 * 
 * Table Structure:
 * - Country column: Flag + country name
 * - Sales column: Sales figures
 * - Value column: Value metrics
 * - Bounce column: Bounce rates or percentages
 * 
 * Visual Elements:
 * - Country flags with proper sizing
 * - Consistent table borders and spacing
 * - Responsive design for mobile devices
 * - Proper text hierarchy with labels and values
 * - Dark mode compatible styling
 * 
 * Data Display:
 * - All values are displayed as formatted strings
 * - Country names are prominently displayed
 * - Metrics are clearly labeled and centered
 * - Proper spacing between table rows
 * 
 * Responsive Features:
 * - Horizontal scroll for small screens
 * - Maintains table structure on all devices
 * - Proper text wrapping and overflow handling
 * - Consistent spacing across breakpoints
 * 
 * Usage:
 * ```html
 * <app-sales-by-country 
 *   [title]="'Global Sales Performance'"
 *   [countries]="countrySalesData">
 * </app-sales-by-country>
 * ```
 * 
 * Data structure example:
 * ```typescript
 * const countrySalesData: CountryData[] = [
 *   {
 *     country: 'United States',
 *     flag: '/assets/img/flags/us.png',
 *     sales: '2,300',
 *     value: '$230,900',
 *     bounce: '29.9%'
 *   },
 *   {
 *     country: 'Germany',
 *     flag: '/assets/img/flags/de.png',
 *     sales: '3,579',
 *     value: '$440,000',
 *     bounce: '40.22%'
 *   }
 * ];
 * ```
 * 
 * Styling Features:
 * - Shadow effects for depth
 * - Rounded corners for modern look
 * - Proper table borders and spacing
 * - Dark mode compatibility
 * - Responsive breakpoints
 * - Consistent typography
 * 
 * Dependencies:
 * - Tailwind CSS for styling
 * - Angular Common for structural directives
 * - Country flag images
 */
@Component({
  selector: 'app-sales-by-country',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-by-country.html'
})
export class SalesByCountryComponent {
  /** Title displayed at the top of the sales table */
  @Input() title: string = 'Sales by Country';
  
  /** Array of country sales data to display */
  @Input() countries: CountryData[] = [];

  /**
   * TrackBy function for optimizing ngFor rendering
   * Uses country name for efficient DOM updates
   * @param index - Current index in the array
   * @param country - Current country data
   * @returns Country name as unique identifier
   */
  trackByCountry(index: number, country: CountryData): string {
    return country.country;
  }
} 
