import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesDataService } from '../../../services/employees-data.service';
import { DataTableService } from '../../../services/datatable.service';

/**
 * ========================================
 * DATA TABLE COMPONENT
 * ========================================
 *
 * A comprehensive data table component with DataTables.js integration,
 * providing advanced features like search, pagination, and sorting.
 *
 * FEATURES:
 * - DataTables.js integration for advanced table functionality
 * - Search functionality (optional)
 * - Pagination and sorting
 * - Customizable table classes and ID
 * - Service-based data loading
 * - Performance optimization with lifecycle hooks
 * - Responsive design with Tailwind CSS
 *
 * USAGE:
 * <app-data-table [data]="employees" [enableSearch]="true" [tableId]="'employees-table'"></app-data-table>
 *
 * REUSABILITY: High - Generic data table with advanced features
 * COMPLEXITY: High - DataTables.js integration and lifecycle management
 */

/**
 * Interface representing employee data structure.
 * Defines the structure for employee records in the data table.
 *
 * @property {number} id - Unique employee identifier
 * @property {string} name - Employee's full name
 * @property {string} position - Job title or position
 * @property {string} office - Office location
 * @property {number} age - Employee's age
 * @property {string} startDate - Employment start date
 * @property {string} salary - Formatted salary amount
 *
 * @example
 * const employee: Employee = {
 *   id: 1,
 *   name: 'John Doe',
 *   position: 'Software Engineer',
 *   office: 'San Francisco',
 *   age: 30,
 *   startDate: '2020/01/15',
 *   salary: '$85,000'
 * };
 */
export interface Employee {
  id: number;
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: string;
}

/**
 * Data Table Component
 *
 * A standalone component that provides advanced table functionality
 * through DataTables.js integration, with support for search, pagination,
 * and sorting capabilities.
 *
 * QUALITY ATTRIBUTES:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Service-based data management
 * - Lifecycle management for proper cleanup
 * - Performance optimization with delayed initialization
 * - Error handling for DataTable initialization
 *
 * REUSABILITY FEATURES:
 * - Configurable search functionality
 * - Customizable table styling
 * - Flexible data input options
 * - Service integration for data loading
 * - No hardcoded dependencies
 *
 * USE CASES:
 * - Employee management systems
 * - Customer data displays
 * - Product catalogs
 * - Financial data tables
 * - Any large dataset requiring advanced table features
 *
 * INTEGRATION EXAMPLE:
 *
 * ```typescript
 * // In parent component
 * employees: Employee[] = [];
 *
 * ngOnInit() {
 *   this.loadEmployees();
 * }
 *
 * loadEmployees() {
 *   this.employeeService.getEmployees().subscribe(data => {
 *     this.employees = data;
 *   });
 * }
 * ```
 */
@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.html'
})
export class DataTableComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  /**
   * Whether to enable search functionality in the data table.
   * @type {boolean}
   * @default false
   */
  @Input() enableSearch: boolean = false;
  /**
   * Custom CSS classes to apply to the table element.
   * @type {string}
   * @default ''
   */
  @Input() tableClasses: string = '';
  /**
   * Unique identifier for the table element.
   * @type {string}
   * @default ''
   */
  @Input() tableId: string = '';
  /**
   * Array of employee data to display in the table.
   * @type {Employee[]}
   * @default []
   */
  @Input() data: Employee[] = [];

  /**
   * Reference to the table container element for DataTable initialization.
   * @type {ElementRef}
   */
  @ViewChild('tableContainer') tableContainer!: ElementRef;

  constructor(
    private employeesService: EmployeesDataService,
    private dataTableService: DataTableService
  ) {}

  /**
   * Sample data for demonstration purposes.
   * Contains 57 employee records with various positions and locations.
   * @private
   * @readonly
   */
  private readonly sampleData: Employee[] = [
    { id: 1, name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', age: 33, startDate: '2008/11/28', salary: '$162,700' },
    { id: 2, name: 'Angelica Ramos', position: 'Chief Executive Officer (CEO)', office: 'London', age: 47, startDate: '2009/10/09', salary: '$1,200,000' },
    { id: 3, name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco', age: 66, startDate: '2009/01/12', salary: '$86,000' },
    { id: 4, name: 'Bradley Greer', position: 'Software Engineer', office: 'London', age: 41, startDate: '2012/10/13', salary: '$132,000' },
    { id: 5, name: 'Brenden Wagner', position: 'Software Engineer', office: 'San Francisco', age: 28, startDate: '2011/06/07', salary: '$206,850' },
    { id: 6, name: 'Brielle Williamson', position: 'Integration Specialist', office: 'New York', age: 61, startDate: '2012/12/02', salary: '$372,000' },
    { id: 7, name: 'Bruno Nash', position: 'Software Engineer', office: 'London', age: 38, startDate: '2011/05/03', salary: '$163,500' },
    { id: 8, name: 'Caesar Vance', position: 'Pre-Sales Support', office: 'New York', age: 21, startDate: '2011/12/12', salary: '$106,450' },
    { id: 9, name: 'Cara Stevens', position: 'Sales Assistant', office: 'New York', age: 46, startDate: '2011/12/06', salary: '$145,600' },
    { id: 10, name: 'Cedric Kelly', position: 'Senior Javascript Developer', office: 'Edinburgh', age: 22, startDate: '2012/03/29', salary: '$433,060' },
    { id: 11, name: 'Charde Marshall', position: 'Regional Director', office: 'San Francisco', age: 36, startDate: '2008/10/16', salary: '$470,600' },
    { id: 12, name: 'Colleen Hurst', position: 'Javascript Developer', office: 'San Francisco', age: 39, startDate: '2009/09/15', salary: '$205,500' },
    { id: 13, name: 'Dai Rios', position: 'Personnel Lead', office: 'Edinburgh', age: 35, startDate: '2012/09/26', salary: '$217,500' },
    { id: 14, name: 'Donna Snider', position: 'Customer Support', office: 'New York', age: 27, startDate: '2011/01/25', salary: '$112,000' },
    { id: 15, name: 'Doris Wilder', position: 'Sales Assistant', office: 'Sidney', age: 23, startDate: '2010/09/20', salary: '$85,600' },
    { id: 16, name: 'Finn Camacho', position: 'Support Engineer', office: 'San Francisco', age: 47, startDate: '2009/07/07', salary: '$87,500' },
    { id: 17, name: 'Fiona Green', position: 'Chief Operating Officer (COO)', office: 'San Francisco', age: 48, startDate: '2010/03/11', salary: '$850,000' },
    { id: 18, name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: 63, startDate: '2011/07/25', salary: '$170,750' },
    { id: 19, name: 'Gavin Cortez', position: 'Team Leader', office: 'San Francisco', age: 22, startDate: '2008/10/26', salary: '$235,500' },
    { id: 20, name: 'Gavin Joyce', position: 'Developer', office: 'Edinburgh', age: 42, startDate: '2010/12/22', salary: '$92,575' },
    { id: 21, name: 'Gloria Little', position: 'Systems Administrator', office: 'New York', age: 59, startDate: '2009/04/10', salary: '$237,500' },
    { id: 22, name: 'Haley Kennedy', position: 'Senior Marketing Designer', office: 'London', age: 43, startDate: '2012/12/18', salary: '$313,500' },
    { id: 23, name: 'Hermione Butler', position: 'Regional Director', office: 'London', age: 47, startDate: '2011/03/21', salary: '$356,250' },
    { id: 24, name: 'Herrod Chandler', position: 'Sales Assistant', office: 'San Francisco', age: 59, startDate: '2012/08/06', salary: '$137,500' },
    { id: 25, name: 'Hope Fuentes', position: 'Secretary', office: 'San Francisco', age: 41, startDate: '2010/02/12', salary: '$109,850' },
    { id: 26, name: 'Howard Hatfield', position: 'Office Manager', office: 'San Francisco', age: 51, startDate: '2008/12/16', salary: '$164,500' },
    { id: 27, name: 'Jackson Bradshaw', position: 'Director', office: 'New York', age: 65, startDate: '2008/09/26', salary: '$645,750' },
    { id: 28, name: 'Jena Gaines', position: 'Office Manager', office: 'London', age: 30, startDate: '2008/12/19', salary: '$90,560' },
    { id: 29, name: 'Jenette Caldwell', position: 'Development Lead', office: 'New York', age: 30, startDate: '2011/09/03', salary: '$345,000' },
    { id: 30, name: 'Jennifer Acosta', position: 'Junior Javascript Developer', office: 'Edinburgh', age: 43, startDate: '2013/02/01', salary: '$75,650' },
    { id: 31, name: 'Jennifer Chang', position: 'Regional Director', office: 'Singapore', age: 28, startDate: '2010/11/14', salary: '$357,650' },
    { id: 32, name: 'Jonas Alexander', position: 'Developer', office: 'San Francisco', age: 30, startDate: '2010/07/14', salary: '$86,500' },
    { id: 33, name: 'Lael Greer', position: 'Systems Administrator', office: 'London', age: 21, startDate: '2009/02/27', salary: '$103,500' },
    { id: 34, name: 'Martena Mccray', position: 'Post-Sales support', office: 'Edinburgh', age: 46, startDate: '2011/03/09', salary: '$324,050' },
    { id: 35, name: 'Michael Bruce', position: 'Javascript Developer', office: 'Singapore', age: 29, startDate: '2011/06/27', salary: '$183,000' },
    { id: 36, name: 'Michael Silva', position: 'Marketing Designer', office: 'London', age: 66, startDate: '2012/11/27', salary: '$198,500' },
    { id: 37, name: 'Michelle House', position: 'Integration Specialist', office: 'Sidney', age: 37, startDate: '2011/06/02', salary: '$95,400' },
    { id: 38, name: 'Olivia Liang', position: 'Support Engineer', office: 'Singapore', age: 64, startDate: '2011/02/03', salary: '$234,500' },
    { id: 39, name: 'Paul Byrd', position: 'Chief Financial Officer (CFO)', office: 'New York', age: 64, startDate: '2010/06/09', salary: '$725,000' },
    { id: 40, name: 'Prescott Bartlett', position: 'Technical Author', office: 'London', age: 27, startDate: '2011/05/07', salary: '$145,000' },
    { id: 41, name: 'Quinn Flynn', position: 'Support Lead', office: 'Edinburgh', age: 22, startDate: '2013/03/03', salary: '$342,000' },
    { id: 42, name: 'Rhona Davidson', position: 'Integration Specialist', office: 'Tokyo', age: 55, startDate: '2010/10/14', salary: '$327,900' },
    { id: 43, name: 'Sakura Yamamoto', position: 'Support Engineer', office: 'Tokyo', age: 37, startDate: '2009/08/19', salary: '$139,575' },
    { id: 44, name: 'Serge Baldwin', position: 'Data Coordinator', office: 'Singapore', age: 64, startDate: '2012/04/09', salary: '$138,575' },
    { id: 45, name: 'Shad Decker', position: 'Regional Director', office: 'Edinburgh', age: 51, startDate: '2008/11/13', salary: '$183,000' },
    { id: 46, name: 'Shou Itou', position: 'Regional Marketing', office: 'Tokyo', age: 20, startDate: '2011/08/14', salary: '$163,000' },
    { id: 47, name: 'Sonya Frost', position: 'Software Engineer', office: 'Edinburgh', age: 23, startDate: '2008/12/13', salary: '$103,600' },
    { id: 48, name: 'Suki Burks', position: 'Developer', office: 'London', age: 53, startDate: '2009/10/22', salary: '$114,500' },
    { id: 49, name: 'Tatyana Fitzpatrick', position: 'Regional Director', office: 'London', age: 19, startDate: '2010/03/17', salary: '$385,750' },
    { id: 50, name: 'Thor Walton', position: 'Developer', office: 'New York', age: 61, startDate: '2013/08/11', salary: '$98,540' },
    { id: 51, name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, startDate: '2011/04/25', salary: '$320,800' },
    { id: 52, name: 'Timothy Mooney', position: 'Office Manager', office: 'London', age: 37, startDate: '2008/12/11', salary: '$136,200' },
    { id: 53, name: 'Unity Butler', position: 'Marketing Designer', office: 'San Francisco', age: 47, startDate: '2009/12/09', salary: '$85,675' },
    { id: 54, name: 'Vivian Harrell', position: 'Financial Controller', office: 'San Francisco', age: 62, startDate: '2009/02/14', salary: '$452,500' },
    { id: 55, name: 'Yuri Berry', position: 'Chief Marketing Officer (CMO)', office: 'New York', age: 40, startDate: '2009/06/25', salary: '$675,000' },
    { id: 56, name: 'Zenaida Frank', position: 'Software Engineer', office: 'New York', age: 63, startDate: '2010/01/04', salary: '$125,250' },
    { id: 57, name: 'Zorita Serrano', position: 'Software Engineer', office: 'San Francisco', age: 56, startDate: '2012/06/01', salary: '$115,000' }
  ];

  /**
   * Initializes the component and loads data if not provided.
   * Uses service-based data loading when no data is provided via input.
   */
  ngOnInit(): void {
    // If no data is provided, use the service
    if (!this.data || this.data.length === 0) {
      this.employeesService.getEmployees().subscribe(employees => {
        this.data = employees;
        // Initialize the table after data is available
        setTimeout(() => {
          this.initializeDataTable();
        }, 100);
      });
    } else {
      // If data already exists, initialize after a brief delay
      setTimeout(() => {
        this.initializeDataTable();
      }, 100);
    }
  }

  /**
   * Initializes the DataTable after the view is fully rendered.
   * Ensures DOM elements are available before DataTable initialization.
   */
  ngAfterViewInit(): void {
    // Wait a bit more to ensure DOM is completely rendered
    setTimeout(() => {
      if (this.data && this.data.length > 0) {
        this.initializeDataTable();
      }
    }, 200);
  }

  /**
   * Handles changes to input properties and reinitializes the table.
   * Ensures DataTable is properly updated when data changes.
   * @param changes - Object containing information about the changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    // If data changes, reinitialize the table
    if (changes['data'] && changes['data'].currentValue && changes['data'].currentValue.length > 0) {
      // Wait a bit more to ensure DOM has been updated
      setTimeout(() => {
        this.initializeDataTable();
      }, 300);
    }
  }

  /**
   * Initializes the DataTable with the specified configuration.
   * Sets up search, pagination, and other DataTable features.
   * @private
   */
  private initializeDataTable(): void {
    const tableElement = this.tableContainer.nativeElement.querySelector('table');
    if (tableElement) {
      this.dataTableService.initializeDataTable(tableElement, {
        searchable: this.enableSearch,
        fixedHeight: true,
        perPage: 10
      }).then((dataTable) => {
        console.log('DataTable initialized successfully');
      }).catch((error) => {
        console.error('Failed to initialize DataTable:', error);
      });
    }
  }

  /**
   * Cleans up the DataTable instance when the component is destroyed.
   * Prevents memory leaks and ensures proper cleanup.
   */
  ngOnDestroy(): void {
    // Clean up the DataTable instance when the component is destroyed
    const tableElement = this.tableContainer?.nativeElement?.querySelector('table');
    if (tableElement) {
      this.dataTableService.destroyDataTable(tableElement);
    }
  }
} 