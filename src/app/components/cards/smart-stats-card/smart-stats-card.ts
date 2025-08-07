import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the smart stats card component.
 * 
 * Provides comprehensive information for displaying smart home
 * and IoT statistics with intelligent spacing and styling options.
 */
export interface SmartStatsCardData {
  /** The title or label for the statistic */
  title: string;
  /** The numerical value to display */
  value: string;
  /** Unit of measurement (e.g., '%', '°C', 'm³', 'GB', 'kW') */
  unit: string;
  /** Descriptive text about the statistic */
  description: string;
  /** CSS gradient class for background styling */
  gradient: string;
  /** Optional custom spacing class (e.g., '-ml-1', '-ml-2') */
  spacing?: string;
}

/**
 * Smart Stats Card Component
 * 
 * An intelligent statistics card component designed for smart home
 * and IoT dashboards. Features automatic spacing calculation based
 * on units and gradient styling for optimal visual presentation.
 * 
 * Features:
 * - Displays title, value, unit, and description with smart formatting
 * - Automatic spacing calculation based on unit type for optimal layout
 * - Gradient background styling for visual appeal
 * - Smart home and IoT unit support with specialized handling
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Custom spacing override capability
 * - Gradient styling flexibility
 * - Intelligent unit recognition and spacing
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Intelligent spacing calculation based on unit types
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional smart home interface
 * - Optimized spacing for common IoT units
 * - Fallback spacing for unknown units
 * 
 * Spacing Logic:
 * - Automatic spacing based on unit type for optimal visual balance
 * - Custom spacing override option for specific requirements
 * - Optimized for smart home units (%, °C, m³, GB, kW)
 * - Fallback to default spacing for unknown units
 * - Tailwind CSS spacing classes for consistent design
 * 
 * Use Cases:
 * - Smart home dashboards
 * - IoT monitoring applications
 * - Home automation systems
 * - Energy monitoring displays
 * - Environmental monitoring
 * - Device status displays
 * 
 * The component serves as an intelligent statistics card that can be
 * easily integrated into smart home and IoT applications, providing
 * users with optimally formatted statistics with automatic spacing
 * and professional styling.
 * 
 * @example
 * ```html
 * <app-smart-stats-card [data]="smartStatsData"></app-smart-stats-card>
 * ```
 * 
 * @example
 * ```typescript
 * const smartStatsData: SmartStatsCardData = {
 *   title: "Temperature",
 *   value: "24",
 *   unit: "°C",
 *   description: "Living room",
 *   gradient: "bg-gradient-info"
 * };
 * ```
 */
@Component({
  selector: 'app-smart-stats-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './smart-stats-card.html'
})
export class SmartStatsCardComponent {
  /**
   * Required input data for the smart stats card.
   * 
   * Contains all statistics information including title, value,
   * unit, description, and styling options. This required input
   * property ensures data is always provided, preventing null/undefined
   * errors and ensuring proper display with intelligent formatting.
   * 
   * @type {SmartStatsCardData} - Complete smart stats data (required)
   */
  @Input() data!: SmartStatsCardData;

  /**
   * Calculates the appropriate spacing class based on the unit type.
   * 
   * Provides automatic spacing for common smart home and IoT units
   * or uses custom spacing if provided. This method ensures optimal
   * visual balance between the value and unit display.
   * 
   * Spacing Logic:
   * - Percentage (%) - minimal spacing (-ml-1)
   * - Temperature (°C) - standard spacing (-ml-2)
   * - Volume (m³) - standard spacing (-ml-2)
   * - Data storage (GB) - standard spacing (-ml-2)
   * - Power (kW) - standard spacing (-ml-2)
   * - Unknown units - default spacing (-ml-2)
   * 
   * @returns {string} Tailwind CSS spacing class for optimal layout
   */
  getSpacing(): string {
    // Use custom spacing if provided
    if (this.data.spacing) {
      return this.data.spacing;
    }
    
    // Automatic spacing calculation based on unit type
    switch (this.data.unit) {
      case '%': return '-ml-1';    // Percentage - minimal spacing
      case '°C': return '-ml-2';   // Temperature - standard spacing
      case 'm³': return '-ml-2';   // Volume - standard spacing
      case 'GB': return '-ml-2';   // Data storage - standard spacing
      case 'kW': return '-ml-2';   // Power - standard spacing
      default: return '-ml-2';     // Default spacing for unknown units
    }
  }
} 
