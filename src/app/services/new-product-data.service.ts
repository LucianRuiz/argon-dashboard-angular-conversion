import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { ProfileHeaderWidgetData } from '../components/headers/profile-header/profile-header';
import { SidebarDataService } from './sidebar-data.service';

// Importar interfaces específicas de cada componente
import { ProductInfoStepData } from '../components/steps/product-info-step/product-info-step';
import { MediaStepData } from '../components/steps/media-step/media-step';
import { SocialsStepData } from '../components/steps/socials-step/socials-step';
import { PricingStepData } from '../components/steps/pricing-step/pricing-step';

/**
 * FormStep interface for multistep form configuration
 */
export interface FormStep {
  id: string;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}

/**
 * MultistepFormData interface for complete form structure
 */
export interface MultistepFormData {
  steps: FormStep[];
  currentStep: string;
  containerConfig?: {
    showContainer: boolean;
    containerClasses?: string;
    contentClasses?: string;
  };
}

/**
 * FormData interface containing all form step data
 */
export interface FormData {
  productInfo: ProductInfoStepData;
  media: MediaStepData;
  socials: SocialsStepData;
  pricing: PricingStepData;
}

/**
 * NewProductDataService
 * 
 * Provides mock data and configuration for the New Product page. This service supplies
 * data for creating new products through a multistep form interface, including product
 * information, media uploads, social media links, and pricing details.
 * The service is designed for demo and UI prototyping purposes, simulating backend
 * responses for product creation functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the new product page
 * - Profile header data with user information and tabs
 * - Multistep form configuration with 4 steps (Info, Media, Socials, Pricing)
 * - Complete form data structure for all product creation fields
 * - Form state management and updates
 * 
 * @example
 * ```typescript
 * constructor(private newProductDataService: NewProductDataService) {}
 * 
 * ngOnInit() {
 *   this.newProductDataService.getMultistepFormData().subscribe(formData => {
 *     this.steps = formData.steps;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class NewProductDataService {

  constructor(private sidebarDataService: SidebarDataService) { }

  /**
   * Retrieves sidebar configuration data for the new product page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the new product creation interface.
   * 
   * @returns Observable<SidebarData> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.newProductDataService.getSidebarData().subscribe(sidebarData => {
   *   this.sidebarConfig = sidebarData;
   * });
   * ```
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves profile header data with user information and navigation tabs.
   * 
   * Returns profile header configuration including:
   * - User profile image and basic information
   * - Navigation tabs for different sections (App, Messages, Settings)
   * - Active tab state management
   * 
   * @returns Observable<ProfileHeaderWidgetData> - Profile header configuration
   * 
   * @example
   * ```typescript
   * this.newProductDataService.getProfileHeaderData().subscribe(headerData => {
   *   this.userProfile = headerData;
   *   this.activeTab = headerData.tabs.find(tab => tab.active)?.id;
   * });
   * ```
   */
  getProfileHeaderData(): Observable<ProfileHeaderWidgetData> {
    const profileHeaderData: ProfileHeaderWidgetData = {
      profileImage: 'assets/img/team-1.jpg',
      name: 'Sayo Kravits',
      position: 'Public Relations',
      tabs: [
        { id: 'app', label: 'App', icon: 'ni ni-app', active: true },
        { id: 'messages', label: 'Messages', icon: 'ni ni-email-83', active: false },
        { id: 'settings', label: 'Settings', icon: 'ni ni-settings-gear-65', active: false }
      ]
    };
    return of(profileHeaderData);
  }

  /**
   * Retrieves multistep form configuration with step definitions and container settings.
   * 
   * Returns form structure with:
   * - 4 form steps: Product Info, Media, Socials, Pricing
   * - Current step tracking and completion status
   * - Container configuration for layout management
   * - Step navigation and state management
   * 
   * @returns Observable<MultistepFormData> - Multistep form configuration
   * 
   * @example
   * ```typescript
   * this.newProductDataService.getMultistepFormData().subscribe(formConfig => {
   *   this.steps = formConfig.steps;
   *   this.currentStep = formConfig.currentStep;
   *   this.containerConfig = formConfig.containerConfig;
   * });
   * ```
   */
  getMultistepFormData(): Observable<MultistepFormData> {
    const multistepFormData: MultistepFormData = {
      steps: [
        { id: 'info', title: '1. Product Info', isActive: true, isCompleted: false },
        { id: 'media', title: '2. Media', isActive: false, isCompleted: false },
        { id: 'socials', title: '3. Socials', isActive: false, isCompleted: false },
        { id: 'pricing', title: '4. Pricing', isActive: false, isCompleted: false }
      ],
      currentStep: 'info',
      containerConfig: {
        showContainer: false,
        containerClasses: 'mb-6',
        contentClasses: 'w-full max-w-full px-3 m-auto flex-0 lg:w-8/12'
      }
    };
    return of(multistepFormData);
  }

  /**
   * Retrieves complete form data structure for all product creation fields.
   * 
   * Returns comprehensive form data including:
   * - Product information (name, weight, description, category, sizes)
   * - Media upload configuration with dropzone settings
   * - Social media account links (Shopify, Facebook, Instagram)
   * - Pricing information (price, currency, SKU, tags)
   * 
   * @returns Observable<FormData> - Complete form data structure
   * 
   * @example
   * ```typescript
   * this.newProductDataService.getFormData().subscribe(formData => {
   *   this.productInfo = formData.productInfo;
   *   this.mediaConfig = formData.media;
   *   this.socialsData = formData.socials;
   *   this.pricingData = formData.pricing;
   * });
   * ```
   */
  getFormData(): Observable<FormData> {
    const formData: FormData = {
      productInfo: {
        productName: {
          label: 'Name',
          value: '',
          placeholder: 'eg. Off-White'
        },
        weight: {
          label: 'Weight',
          value: '',
          placeholder: 'eg. 42'
        },
        description: {
          label: 'Description',
          value: '<p>Some initial <strong>bold</strong> text</p>',
          placeholder: 'Enter product description...'
        },
        category: {
          label: 'Category',
          options: [
            { value: 'Choice 1', label: 'Clothing', selected: true },
            { value: 'Choice 2', label: 'Real Estate', selected: false },
            { value: 'Choice 3', label: 'Electronics', selected: false },
            { value: 'Choice 4', label: 'Furniture', selected: false },
            { value: 'Choice 5', label: 'Others', selected: false }
          ]
        },
        sizes: {
          label: 'Sizes',
          options: [
            { value: 'Choice 1', label: 'Medium', selected: true },
            { value: 'Choice 2', label: 'Small', selected: false },
            { value: 'Choice 3', label: 'Large', selected: false },
            { value: 'Choice 4', label: 'Extra Large', selected: false },
            { value: 'Choice 5', label: 'Extra Small', selected: false }
          ]
        }
      },
      media: {
        productImage: {
          label: 'Product Image',
          dropzoneConfig: {
            url: '/file-upload',
            acceptedFiles: '.jpg,.png,.pdf,.doc,.docx',
            maxFiles: 10,
            maxFilesize: 5
          }
        }
      },
      socials: {
        shopifyHandle: {
          label: 'Shoppify Handle',
          value: '',
          placeholder: '@argon'
        },
        facebookAccount: {
          label: 'Facebook Account',
          value: '',
          placeholder: 'https://...'
        },
        instagramAccount: {
          label: 'Instagram Account',
          value: '',
          placeholder: 'https://...'
        }
      },
      pricing: {
        price: {
          label: 'Price',
          value: '',
          placeholder: '99.00'
        },
        currency: {
          label: 'Currency',
          options: [
            { value: 'Choice 1', label: 'USD', selected: true },
            { value: 'Choice 2', label: 'EUR', selected: false },
            { value: 'Choice 3', label: 'GBP', selected: false },
            { value: 'Choice 4', label: 'CNY', selected: false },
            { value: 'Choice 5', label: 'INR', selected: false },
            { value: 'Choice 6', label: 'BTC', selected: false }
          ]
        },
        sku: {
          label: 'SKU',
          value: '',
          placeholder: '71283476591'
        },
        tags: {
          label: 'Tags',
          value: 'In Stock, Out of Stock',
          placeholder: 'Enter something'
        }
      }
    };
    return of(formData);
  }

  /**
   * Updates multistep form data and returns the updated configuration.
   * 
   * Simulates form state persistence by returning the updated form data.
   * In a real application, this would typically save to a backend service.
   * 
   * @param data - Updated multistep form data to persist
   * @returns Observable<MultistepFormData> - Updated form configuration
   * 
   * @example
   * ```typescript
   * const updatedFormData = { ...currentFormData, currentStep: 'media' };
   * this.newProductDataService.updateMultistepFormData(updatedFormData).subscribe(result => {
   *   console.log('Form data updated:', result);
   * });
   * ```
   */
  updateMultistepFormData(data: MultistepFormData): Observable<MultistepFormData> {
    return of(data);
  }
} 