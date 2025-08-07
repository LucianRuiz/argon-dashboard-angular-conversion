import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';
import { ProductImageData } from '../components/forms/product-image/product-image';
import { ProductInformationData, CategoryOption, ColorOption } from '../components/forms/product-information/product-information';
import { ProductSocialsData } from '../components/forms/product-socials/product-socials';
import { ProductPricingData, CurrencyOption } from '../components/forms/product-pricing/product-pricing';

/**
 * EditProductDataService
 * 
 * Service that provides mock data for the product editing page.
 * This service manages all the data required for editing product information,
 * including product details, images, social media links, and pricing information.
 * 
 * The service provides data for:
 * - Product image management and editing
 * - Product information fields (name, weight, collection, price, quantity, description)
 * - Category and color selection options
 * - Social media account links (Shopify, Facebook, Instagram)
 * - Pricing configuration with currency options
 * - Navigation components (sidebar, navbar)
 * 
 * This service is part of the e-commerce module for product management.
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({
  providedIn: 'root'
})
export class EditProductDataService {

  /**
   * Creates an instance of EditProductDataService.
   * 
   * @param sidebarDataService - Service for managing sidebar data
   */
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar data using the existing sidebar service.
   * 
   * @returns Observable<SidebarData> - Observable containing the sidebar configuration
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves navbar data specifically configured for the Edit Product page.
   * 
   * @returns Observable<NavbarData> - Observable containing navbar configuration with breadcrumbs,
   *          search placeholder, and notifications including custom SVG icons
   */
  getNavbarData(): Observable<NavbarData> {
    const navbarData: NavbarData = {
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Edit Product',
      breadcrumbSection: 'Pages',
      searchPlaceholder: 'Type here...',
      signInText: 'Sign In',
      signInIcon: 'fa fa-user',
      configIcon: 'fa fa-cog',
      bellIcon: 'fa fa-bell',
      notifications: [
        {
          avatarUrl: './assets/img/team-2.jpg',
          title: 'New message from Laur',
          description: 'New message',
          time: '13 minutes ago'
        },
        {
          iconSvg: '<svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>credit-card</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero"><g transform="translate(1716.000000, 291.000000)"><g transform="translate(453.000000, 454.000000)"><path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path><path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path></g></g></g></g></svg>',
          title: 'Payment successfully completed',
          description: 'Payment completed',
          time: '2 days'
        }
      ]
    };
    return of(navbarData);
  }

  /**
   * Retrieves product image data for displaying and managing product images.
   * 
   * @returns Observable<ProductImageData> - Observable containing product image configuration
   *          with image URL, alt text, edit/remove buttons, and section title
   */
  getProductImageData(): Observable<ProductImageData> {
    const productImageData: ProductImageData = {
      imageUrl: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-page.jpg',
      imageAlt: 'product_image',
      editButtonText: 'Edit',
      removeButtonText: 'Remove',
      sectionTitle: 'Product Image'
    };
    return of(productImageData);
  }

  /**
   * Retrieves product information data for displaying product details and form fields.
   * 
   * @returns Observable<ProductInformationData> - Observable containing product information
   *          with form fields, category options, color options, and validation data
   */
  getProductInformationData(): Observable<ProductInformationData> {
    const categories: CategoryOption[] = [
      { value: 'Choice 1', label: 'Furniture', selected: true },
      { value: 'Choice 2', label: 'Real Estate', selected: false },
      { value: 'Choice 3', label: 'Electronics', selected: false },
      { value: 'Choice 4', label: 'Clothing', selected: false },
      { value: 'Choice 5', label: 'Others', selected: false }
    ];

    const colors: ColorOption[] = [
      { value: 'Choice 1', label: 'Black', selected: true },
      { value: 'Choice 2', label: 'White', selected: false },
      { value: 'Choice 3', label: 'Blue', selected: false },
      { value: 'Choice 4', label: 'Orange', selected: false },
      { value: 'Choice 5', label: 'Green', selected: false }
    ];

    const productInformationData: ProductInformationData = {
      sectionTitle: 'Product Information',
      fields: {
        productName: {
          label: 'Name',
          value: 'Minimal Bar Stool',
          placeholder: 'Enter product name...'
        },
        weight: {
          label: 'Weight',
          value: 2,
          placeholder: 'Enter weight...'
        },
        collection: {
          label: 'Collection',
          value: 'Summer',
          placeholder: 'Enter collection...'
        },
        price: {
          label: 'Price',
          value: '$90',
          placeholder: 'Enter price...'
        },
        quantity: {
          label: 'Quantity',
          value: 50,
          placeholder: 'Enter quantity...'
        },
        description: {
          label: 'Description',
          value: 'Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.',
          placeholder: 'Enter product description...'
        },
        category: {
          label: 'Category',
          options: categories
        },
        color: {
          label: 'Color',
          options: colors
        }
      }
    };
    return of(productInformationData);
  }

  /**
   * Retrieves product social media data for managing social media account links.
   * 
   * @returns Observable<ProductSocialsData> - Observable containing social media configuration
   *          with Shopify handle, Facebook URL, and Instagram URL fields
   */
  getProductSocialsData(): Observable<ProductSocialsData> {
    const productSocialsData: ProductSocialsData = {
      sectionTitle: 'Socials',
      fields: {
        shopifyHandle: {
          label: 'Shoppify Handle',
          value: '@argon',
          placeholder: 'Enter Shopify handle...'
        },
        facebookUrl: {
          label: 'Facebook Account',
          value: 'https://',
          placeholder: 'Enter Facebook URL...'
        },
        instagramUrl: {
          label: 'Instagram Account',
          value: 'https://',
          placeholder: 'Enter Instagram URL...'
        }
      }
    };
    return of(productSocialsData);
  }

  /**
   * Retrieves product pricing data for managing product pricing and inventory information.
   * 
   * @returns Observable<ProductPricingData> - Observable containing pricing configuration
   *          with price, currency options, SKU, and tags fields
   */
  getProductPricingData(): Observable<ProductPricingData> {
    const currencies: CurrencyOption[] = [
      { value: 'Choice 1', label: 'USD', selected: true },
      { value: 'Choice 2', label: 'EUR', selected: false },
      { value: 'Choice 3', label: 'GBP', selected: false },
      { value: 'Choice 4', label: 'CNY', selected: false },
      { value: 'Choice 5', label: 'INR', selected: false },
      { value: 'Choice 6', label: 'BTC', selected: false }
    ];

    const productPricingData: ProductPricingData = {
      sectionTitle: 'Pricing',
      fields: {
        price: {
          label: 'Price',
          value: 99.00,
          placeholder: 'Enter price...'
        },
        currency: {
          label: 'Currency',
          value: 'USD',
          options: currencies
        },
        sku: {
          label: 'SKU',
          value: '71283476591',
          placeholder: 'Enter SKU...'
        },
        tags: {
          label: 'Tags',
          value: 'In Stock, Out of Stock',
          placeholder: 'Enter something'
        }
      }
    };
    return of(productPricingData);
  }
} 