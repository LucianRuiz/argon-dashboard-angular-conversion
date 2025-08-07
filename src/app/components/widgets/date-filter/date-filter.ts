import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * DATE FILTER COMPONENT
 * ========================================
 *
 * A styled dropdown component for filtering data by time periods.
 * Emits events when selection changes.
 *
 * FEATURES:
 * - Styled dropdown for date/time filtering
 * - Configurable options and placeholder
 * - Event emission for selection changes
 * - Responsive design with Tailwind CSS
 * - Dropdown state management
 *
 * USAGE:
 * <app-date-filter [data]="filterData" (selectionChange)="onSelectionChange($event)"></app-date-filter>
 *
 * REUSABILITY: High - Generic date filter component
 * COMPLEXITY: Low - Simple dropdown with state management
 */

/**
 * Interface for date filter options.
 *
 * @property {string} value - Option value
 * @property {string} label - Display text
 *
 * @example
 * const option: DateFilterOption = {
 *   value: 'today',
 *   label: 'Today'
 * };
 */
export interface DateFilterOption {
  /** Option value */
  value: string;
  /** Display text */
  label: string;
}

/**
 * Interface for date filter data.
 *
 * @property {string} selectedValue - Currently selected option value
 * @property {DateFilterOption[]} options - Available options list
 * @property {string} [placeholder] - Optional button placeholder
 *
 * @example
 * const filterData: DateFilterData = {
 *   selectedValue: 'today',
 *   options: [
 *     { value: 'today', label: 'Today' },
 *     { value: 'week', label: 'This Week' }
 *   ],
 *   placeholder: 'Select period'
 * };
 */
export interface DateFilterData {
  /** Currently selected option value */
  selectedValue: string;
  /** Available options list */
  options: DateFilterOption[];
  /** Optional button placeholder */
  placeholder?: string;
}

/**
 * Date filter component for filtering data by time periods.
 * 
 * A styled dropdown for filtering data by time periods.
 * Emits events when selection changes.
 */
@Component({
  selector: 'app-date-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-filter.html'
})
export class DateFilterComponent {
  
  /**
   * Date filter data containing options and selection.
   * @type {DateFilterData}
   * @required - Ensures data is always provided
   */
  @Input({ required: true }) data!: DateFilterData;

  /**
   * Event emitted when selection changes.
   * @type {EventEmitter<string>}
   */
  @Output() selectionChange = new EventEmitter<string>();

  /**
   * Dropdown open/closed state.
   * @type {boolean}
   * @default false
   */
  isDropdownOpen = false;

  /**
   * Gets the label of the selected option.
   * @returns {string} Selected option label or placeholder
   */
  get selectedLabel(): string {
    const selectedOption = this.data.options.find(option => option.value === this.data.selectedValue);
    return selectedOption ? selectedOption.label : this.data.placeholder || 'Select...';
  }

  /**
   * Handles dropdown button click to toggle open/closed state.
   */
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  /**
   * Handles option selection and emits change event.
   * @param value - Selected option value
   */
  selectOption(value: string): void {
    this.data.selectedValue = value;
    this.isDropdownOpen = false;
    this.selectionChange.emit(value);
  }

  /**
   * Closes the dropdown.
   */
  closeDropdown(): void {
    this.isDropdownOpen = false;
  }
} 