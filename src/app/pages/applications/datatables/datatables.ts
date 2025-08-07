import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NavbarData } from '../../../components/layout/navbar/navbar';
import { SidebarData } from '../../../components/layout/sidebar/sidebar';
import { NavbarComponent } from '../../../components/layout/navbar/navbar';
import { SidebarComponent } from '../../../components/layout/sidebar/sidebar';
import { FooterComponent } from '../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../components/layout/argon-configurator/argon-configurator';
import { PerfectScrollbarDirective } from '../../../components/layout/sidebar/perfect-scrollbar.directive';
import { DataTablesDataService } from '../../../services/datatables-data.service';
import { DataTableComponent, Employee } from '../../../components/tables/data-table/data-table';
import { EmployeesDataService } from '../../../services/employees-data.service';

/**
 * DataTables Application Component
 * 
 * This component implements a comprehensive data tables application that demonstrates
 * advanced table functionality with employee data management. It showcases features
 * like sorting, filtering, pagination, and responsive design using the DataTable component.
 * 
 * Features:
 * - Interactive data tables with employee information
 * - Integration with layout components (sidebar, navbar, footer)
 * - Data management through dedicated services
 * - Responsive design with Argon configurator support
 * - Employee data display and management capabilities
 * 
 * The component serves as a demonstration page for the DataTable component's
 * capabilities and provides a complete example of how to integrate data tables
 * into the Argon Dashboard application.
 * 
 * @example
 * ```html
 * <app-datatables></app-datatables>
 * ```
 */
@Component({
  selector: 'app-datatables',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    PerfectScrollbarDirective,
    DataTableComponent
  ],
  templateUrl: './datatables.html'
})
export class DataTablesComponent implements OnInit {
  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;
  
  /** Array of employee data to be displayed in the table */
  employeesData: Employee[] = [];

  /**
   * Creates an instance of DataTablesComponent.
   * 
   * Initializes the component by subscribing to data streams from DataTablesDataService
   * for sidebar and navbar configuration. Also injects the EmployeesDataService
   * for managing employee data.
   * 
   * @param datatablesDataService - Service for managing DataTables page configuration data
   * @param employeesService - Service for managing employee data operations
   */
  constructor(
    private datatablesDataService: DataTablesDataService,
    private employeesService: EmployeesDataService
  ) {
    this.sidebarData$ = this.datatablesDataService.getSidebarData();
    this.navbarData$ = this.datatablesDataService.getNavbarData();
  }

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * 
   * Loads employee data from the EmployeesDataService and populates the
   * employeesData array for display in the data table.
   */
  ngOnInit(): void {
    // Obtener datos del servicio
    this.employeesService.getEmployees().subscribe(employees => {
      this.employeesData = employees;
    });
  }
} 