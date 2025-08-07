import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { ProductsService } from '../../../../services/products-data.service';
import { SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { NavbarData } from '../../../../components/layout/navbar/navbar';
import { Product } from '../../../../components/tables/products-table/products-table';
import { SidebarComponent } from '../../../../components/layout/sidebar/sidebar';
import { NavbarComponent } from '../../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';
import { ProductsTableComponent } from '../../../../components/tables/products-table/products-table';

import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';

/**
 * Products List Component
 * 
 * This component implements the products list page for the ecommerce system.
 * It provides a comprehensive interface for displaying and managing product
 * catalogs with a table-based layout that includes product information,
 * inventory status, and management capabilities.
 * 
 * Features:
 * - Products table with comprehensive product information
 * - Sidebar navigation for easy access to other sections
 * - Navbar with search and filtering capabilities
 * - Integration with Argon configurator for customization
 * - Responsive design for various screen sizes
 * - Perfect scrollbar for smooth navigation
 * - Product data management through dedicated service
 * 
 * The component serves as the main product catalog interface, providing
 * administrators and users with a complete view of all available products,
 * their status, and management options in a clean, organized table format.
 * 
 * @example
 * ```html
 * <app-products-list></app-products-list>
 * ```
 */
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.html',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    ProductsTableComponent,
    PerfectScrollbarDirective
  ]
})
export class ProductsListComponent {
  /** Observable for sidebar configuration data */
  public sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  public navbarData$: Observable<NavbarData>;
  
  /** Observable for products data */
  public productsData$: Observable<Product[]>;
  
  /**
   * Creates an instance of ProductsListComponent.
   * 
   * Initializes the component by subscribing to data streams from ProductsService
   * for sidebar configuration, navbar configuration, and products data.
   * 
   * @param productsService - Service for managing products data and configurations
   */
  constructor(private productsService: ProductsService) {
    this.sidebarData$ = this.productsService.getSidebarData();
    this.navbarData$ = this.productsService.getNavbarData();
    this.productsData$ = this.productsService.getProducts();
  }
} 