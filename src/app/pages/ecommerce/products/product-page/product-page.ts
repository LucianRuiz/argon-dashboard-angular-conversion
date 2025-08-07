import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../../../components/layout/sidebar/sidebar';
import { PerfectScrollbarDirective } from '../../../../components/layout/sidebar/perfect-scrollbar.directive';
import { NavbarComponent } from '../../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../../components/layout/argon-configurator/argon-configurator';
import { ProductGalleryComponent } from '../../../../components/forms/product-gallery/product-gallery';
import { ProductDetailsComponent, ProductDetailsData } from '../../../../components/forms/product-details/product-details';
import { ProductOptionsComponent } from '../../../../components/forms/product-options/product-options';
import { ProductActionsComponent } from '../../../../components/forms/product-actions/product-actions';
import { RelatedProductsTableComponent } from '../../../../components/tables/related-products-table/related-products-table';
import { ProductPageDataService } from '../../../../services/product-page-data.service';
import { Observable, of } from 'rxjs';

/**
 * Product Page Component
 * 
 * This component implements the detailed product page for the ecommerce system.
 * It provides a comprehensive interface for displaying product information,
 * including gallery, details, options, actions, and related products in a
 * complete layout optimized for product browsing and purchasing.
 * 
 * Features:
 * - Complete layout with sidebar, navbar, footer, and configurator
 * - Dynamic data loading from services
 * - Product gallery with PhotoSwipe integration for image viewing
 * - Detailed product information and specifications
 * - Product options and customization choices
 * - Product action buttons (add to cart, wishlist, etc.)
 * - Related products table for cross-selling
 * - Responsive design for all screen sizes
 * - Dark mode support for enhanced user experience
 * - Perfect scrollbar for smooth navigation
 * 
 * The component serves as the primary product detail interface, providing
 * customers with comprehensive product information, high-quality image galleries,
 * and seamless purchasing options in an engaging and user-friendly layout.
 * 
 * @example
 * ```html
 * <app-product-page></app-product-page>
 * ```
 */
@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    PerfectScrollbarDirective,
    ProductGalleryComponent,
    ProductDetailsComponent,
    ProductOptionsComponent,
    ProductActionsComponent,
    RelatedProductsTableComponent
  ],
  templateUrl: './product-page.html'
})
export class ProductPageComponent implements OnInit {
  /** Observable for sidebar configuration data */
  sidebarData$!: Observable<any>;
  
  /** Observable for navbar configuration data */
  navbarData$!: Observable<any>;
  
  /** Observable for product gallery data */
  productGalleryData$!: Observable<any>;
  
  /** Observable for product details data */
  productDetailsData$!: Observable<ProductDetailsData>;
  
  /** Observable for product options data */
  productOptionsData$!: Observable<any>;
  
  /** Observable for product actions data */
  productActionsData$!: Observable<any>;
  
  /** Observable for related products data */
  relatedProducts$!: Observable<any[]>;

  /**
   * Creates an instance of ProductPageComponent.
   * 
   * @param productPageDataService - Service for managing product page data and configurations
   */
  constructor(private productPageDataService: ProductPageDataService) {}

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * 
   * Initializes the component by subscribing to data streams from ProductPageDataService
   * for all product page elements including sidebar, navbar, product gallery, information,
   * options, actions, and related products.
   */
  ngOnInit(): void {
    this.sidebarData$ = this.productPageDataService.getSidebarData();
    this.navbarData$ = this.productPageDataService.getNavbarData();
    this.productGalleryData$ = this.productPageDataService.getProductGalleryData();
    this.productDetailsData$ = this.productPageDataService.getProductDetailsData();
    this.productOptionsData$ = this.productPageDataService.getProductOptionsData();
    this.productActionsData$ = this.productPageDataService.getProductActionsData();
    this.relatedProducts$ = this.productPageDataService.getRelatedProducts();
  }

  /**
   * Handles product action button clicks.
   * 
   * Processes user interactions with product action buttons such as
   * add to cart, add to wishlist, share, or other product-related actions.
   * Currently logs the action for debugging purposes.
   * 
   * @param event - Object containing the action ID and action data
   */
  onActionClick(event: { actionId: string; action: any }): void {
    console.log('Action clicked:', event.actionId, event.action);
    // Handle different actions here
  }
} 