import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SidebarComponent, SidebarData } from '../../../../components/layout/sidebar/sidebar';
import { NavbarComponent, NavbarData } from '../../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';
import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';
import { SaveButtonComponent } from '../../../../components/buttons/save-button/save-button';
import { ProductImageComponent } from '../../../../components/forms/product-image/product-image';
import { ProductInformationComponent } from '../../../../components/forms/product-information/product-information';
import { ProductSocialsComponent } from '../../../../components/forms/product-socials/product-socials';
import { ProductPricingComponent } from '../../../../components/forms/product-pricing/product-pricing';
import { EditProductDataService } from '../../../../services/edit-product-data.service';
import { ProductImageData } from '../../../../components/forms/product-image/product-image';
import { ProductInformationData } from '../../../../components/forms/product-information/product-information';
import { ProductSocialsData } from '../../../../components/forms/product-socials/product-socials';
import { ProductPricingData } from '../../../../components/forms/product-pricing/product-pricing';

/**
 * Edit Product Component
 * 
 * This component implements the product editing page for the ecommerce system.
 * It provides a comprehensive interface for modifying existing product information,
 * including images, details, social media links, and pricing in a complete
 * dashboard layout with all necessary navigation and configuration options.
 * 
 * Features:
 * - Complete dashboard layout with sidebar, navbar, footer, and configurator
 * - Dynamic data loading from dedicated services
 * - Specialized components for each product section
 * - Product image management and upload capabilities
 * - Product information editing with validation
 * - Social media integration and link management
 * - Pricing and inventory configuration
 * - Save functionality with progress tracking
 * - Responsive design with Tailwind CSS
 * - Dark mode support for enhanced user experience
 * - Perfect scrollbar for smooth navigation
 * 
 * The component serves as a comprehensive product management interface, providing
 * administrators and content managers with all necessary tools to update product
 * information, media, and configurations in an organized and user-friendly manner.
 * 
 * @example
 * ```html
 * <app-edit-product></app-edit-product>
 * ```
 */
@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    PerfectScrollbarDirective,
    SaveButtonComponent,
    ProductImageComponent,
    ProductInformationComponent,
    ProductSocialsComponent,
    ProductPricingComponent
  ],
  templateUrl: './edit-product.html'
})
export class EditProductComponent implements OnInit {
  
  /** Observable for sidebar configuration data */
  sidebarData$!: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  navbarData$!: Observable<NavbarData>;

  /** Observable for product image data */
  productImageData$!: Observable<ProductImageData>;

  /** Observable for product information data */
  productInformationData$!: Observable<ProductInformationData>;

  /** Observable for product social media data */
  productSocialsData$!: Observable<ProductSocialsData>;

  /** Observable for product pricing data */
  productPricingData$!: Observable<ProductPricingData>;

  /**
   * Creates an instance of EditProductComponent.
   * 
   * @param editProductDataService - Service for managing edit product data and configurations
   */
  constructor(private editProductDataService: EditProductDataService) {}

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * 
   * Initializes the component by subscribing to data streams from EditProductDataService
   * for sidebar, navbar, and all product editing sections including images, information,
   * social media, and pricing data.
   */
  ngOnInit(): void {
    // Get sidebar and navbar data from service
    this.sidebarData$ = this.editProductDataService.getSidebarData();
    this.navbarData$ = this.editProductDataService.getNavbarData();
    
    // Get form component data
    this.productImageData$ = this.editProductDataService.getProductImageData();
    this.productInformationData$ = this.editProductDataService.getProductInformationData();
    this.productSocialsData$ = this.editProductDataService.getProductSocialsData();
    this.productPricingData$ = this.editProductDataService.getProductPricingData();
  }
} 