import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';
import { Product } from '../components/tables/products-table/products-table';

/**
 * ProductsService
 * 
 * Provides mock data and configuration for the Products List page. This service supplies
 * comprehensive product management data including product listings, inventory status,
 * pricing information, and product categorization. The service is designed for demo and
 * UI prototyping purposes, simulating backend responses for product management functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the products page
 * - Navbar data with breadcrumbs and notifications
 * - Complete product catalog with 15 diverse products
 * - Product categories (Clothing, Electronics, Furniture, Shoes, Designer)
 * - Inventory status tracking (In Stock, Out of Stock)
 * - Product selection and management functionality
 * 
 * @example
 * ```typescript
 * constructor(private productsService: ProductsService) {}
 * 
 * ngOnInit() {
 *   this.productsService.getProducts().subscribe(products => {
 *     this.productList = products;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar configuration data for the products page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the products interface.
   * 
   * @returns Observable<SidebarData> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.productsService.getSidebarData().subscribe(sidebarData => {
   *   this.sidebarConfig = sidebarData;
   * });
   * ```
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves navbar configuration data with breadcrumbs and notifications.
   * 
   * Returns navbar data including:
   * - Breadcrumb navigation with icon, title, and section
   * - Search functionality configuration
   * - User authentication elements (Sign In, config, bell)
   * - Sample notification list with avatars, titles, and timestamps
   * 
   * @returns Observable<NavbarData> - Navbar configuration with notifications
   * 
   * @example
   * ```typescript
   * this.productsService.getNavbarData().subscribe(navbarData => {
   *   this.breadcrumb = navbarData.breadcrumbTitle;
   *   this.notifications = navbarData.notifications;
   * });
   * ```
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Products List',
      breadcrumbSection: 'Pages',
      searchPlaceholder: 'Type here...',
      signInText: 'Sign In',
      signInIcon: 'fa fa-user',
      configIcon: 'fa fa-cog',
      bellIcon: 'fa fa-bell',
      notifications: [
        {
          avatarUrl: '/assets/img/team-2.jpg',
          title: 'New message from Laur',
          description: 'You have a new message',
          time: '13 minutes ago'
        },
        {
          iconSvg: '/assets/img/small-logos/logo-spotify.svg',
          title: 'New album by Travis Scott',
          description: 'New album released',
          time: '1 day'
        },
        {
          iconSvg: '',
          title: 'Payment successfully completed',
          description: 'Your payment has been processed',
          time: '2 days'
        }
      ]
    });
  }

  /**
   * Retrieves the complete product catalog with detailed product information.
   * 
   * Returns an array of 15 products including:
   * - Product names, categories, and pricing
   * - SKU codes and inventory quantities
   * - Stock status (In Stock, Out of Stock)
   * - Product images and selection states
   * - Diverse categories: Clothing, Electronics, Furniture, Shoes, Designer
   * 
   * @returns Observable<Product[]> - Complete product catalog
   * 
   * @example
   * ```typescript
   * this.productsService.getProducts().subscribe(products => {
   *   this.allProducts = products;
   *   this.inStockProducts = products.filter(p => p.status === 'in Stock');
   *   this.outOfStockProducts = products.filter(p => p.status === 'Out of Stock');
   *   this.selectedProducts = products.filter(p => p.isSelected);
   * });
   * ```
   */
  getProducts(): Observable<Product[]> {
    return of([
      {
        id: 1,
        name: 'BKLGO Full Zip Hoodie',
        category: 'Clothing',
        price: '$1,321',
        sku: '243598234',
        quantity: 0,
        status: 'Out of Stock',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/adidas-hoodie.jpg',
        isSelected: true
      },
      {
        id: 2,
        name: 'MacBook Pro',
        category: 'Electronics',
        price: '$1,869',
        sku: '877712',
        quantity: 0,
        status: 'Out of Stock',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/macbook-pro.jpg',
        isSelected: true
      },
      {
        id: 3,
        name: 'Metro Bar Stool',
        category: 'Furniture',
        price: '$99',
        sku: '0134729',
        quantity: 978,
        status: 'in Stock',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/metro-chair.jpg',
        isSelected: false
      },
      {
        id: 4,
        name: 'Alchimia Chair',
        category: 'Furniture',
        price: '$2,999',
        sku: '113213',
        quantity: 0,
        status: 'Out of Stock',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/alchimia-chair.jpg',
        isSelected: false
      },
      {
        id: 5,
        name: 'Fendi Gradient Coat',
        category: 'Clothing',
        price: '$869',
        sku: '634729',
        quantity: 725,
        status: 'in Stock',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/fendi-coat.jpg',
        isSelected: false
      },
      {
        id: 6,
        name: 'Off White Cotton Bomber',
        category: 'Clothing',
        price: '$1,869',
        sku: '634729',
        quantity: 725,
        status: 'in Stock',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/off-white-jacket.jpg',
        isSelected: false
      },
      {
        id: 7,
        name: 'Y-3 Yohji Yamamoto',
        category: 'Shoes',
        price: '$869',
        sku: '634729',
        quantity: 725,
        status: 'in Stock',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/yohji-yamamoto.jpg',
        isSelected: true
      },
      {
        id: 8,
        name: 'Derbyshire Orange Sofa',
        category: 'Furniture',
        price: '$2,999',
        sku: '561151',
        quantity: 22,
        status: 'in Stock',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/orange-sofa.jpg',
        isSelected: false
      },
      {
        id: 9,
        name: 'Burberry Low-Tops',
        category: 'Shoes',
        price: '$869',
        sku: '634729',
        quantity: 725,
        status: 'in Stock',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/burberry.jpg',
        isSelected: true
      },
      {
        id: 10,
        name: 'Dolce & Gabbana Skirt',
        category: 'Designer',
        price: '$999',
        sku: '01827391',
        quantity: 0,
        status: 'Out of Stock',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/d&g-skirt.jpg',
        isSelected: false
      },
      {
        id: 11,
        name: 'Undercover T-shirt',
        category: 'Shoes',
        price: '$869',
        sku: '634729',
        quantity: 725,
        status: 'in Stock',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/undercover.jpg',
        isSelected: true
      },
      {
        id: 12,
        name: 'Alexander McQueen',
        category: 'Clothing',
        price: '$1,199',
        sku: '00121399',
        quantity: 51293,
        status: 'in Stock',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/mcqueen-shirt.jpg',
        isSelected: true
      },
      {
        id: 13,
        name: 'Luin Floor Lamp',
        category: 'Furniture',
        price: '$1,900',
        sku: '434729',
        quantity: 1100191321,
        status: 'in Stock',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/yellow-chair.jpg',
        isSelected: true
      },
      {
        id: 14,
        name: 'Heron Preston T-shirt',
        category: 'Clothing',
        price: '$149',
        sku: '928341',
        quantity: 0,
        status: 'Out of Stock',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/heron-tshirt.jpg',
        isSelected: false
      },
      {
        id: 15,
        name: 'Gray Living Chair',
        category: 'Furniture',
        price: '$2,099',
        sku: '9912834',
        quantity: 32,
        status: 'in Stock',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/living-chair.jpg',
        isSelected: true
      }
    ]);
  }
} 