import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarDataService } from './sidebar-data.service';

/**
 * Product Page Data Service
 * 
 * Service for managing product page data including navbar and sidebar configuration
 * 
 * FEATURES:
 * - Dynamic navbar data with breadcrumb and notifications
 * - Sidebar data integration with existing service
 * - Product gallery data with PhotoSwipe support
 * - Product information and options data
 * - Product actions configuration
 * - Observable-based data management
 */
@Injectable({
  providedIn: 'root'
})
export class ProductPageDataService {
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Get sidebar data from existing service
   */
  getSidebarData(): Observable<any> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Get navbar data for product page
   */
  getNavbarData(): Observable<any> {
    const navbarData = {
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Product Page',
      breadcrumbSection: 'Pages',
      searchPlaceholder: 'Type here...',
      signInText: 'Sign In',
      signInIcon: 'fa fa-user',
      configIcon: 'fa fa-cog',
      bellIcon: 'fa fa-bell',
      notifications: [
        {
          id: '1',
          type: 'message',
          title: 'New message from Laur',
          description: '13 minutes ago',
          time: '13 minutes ago',
          image: 'assets/img/team-2.jpg'
        },
        {
          id: '2',
          type: 'album',
          title: 'New album by Travis Scott',
          description: '1 day',
          time: '1 day',
          image: 'assets/img/small-logos/logo-spotify.svg'
        },
        {
          id: '3',
          type: 'payment',
          title: 'Payment successfully completed',
          description: '2 days',
          time: '2 days',
          icon: 'credit-card'
        }
      ]
    };
    return of(navbarData);
  }

  /**
   * Get product gallery data
   */
  getProductGalleryData(): Observable<any> {
    const galleryData = {
      mainImage: {
        mainImage: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb.jpg',
        thumbnail: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb.jpg',
        alt: 'Apple Bundle Product',
        dataSize: '500x600',
        description: 'Apple Bundle Product Image'
      },
      thumbnails: [
        {
          mainImage: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-1.jpg',
          thumbnail: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-1.jpg',
          alt: 'Product View 1',
          dataSize: '500x600'
        },
        {
          mainImage: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-2.jpg',
          thumbnail: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-2.jpg',
          alt: 'Product View 2',
          dataSize: '500x600'
        },
        {
          mainImage: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-3.jpg',
          thumbnail: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-3.jpg',
          alt: 'Product View 3',
          dataSize: '500x600'
        },
        {
          mainImage: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-4.jpg',
          thumbnail: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-4.jpg',
          alt: 'Product View 4',
          dataSize: '500x600'
        },
        {
          mainImage: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-5.jpg',
          thumbnail: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-5.jpg',
          alt: 'Product View 5',
          dataSize: '500x600'
        }
      ],
      title: 'Apple Bundle Gallery'
    };
    return of(galleryData);
  }

  /**
   * Get product details data
   */
  getProductDetailsData(): Observable<any> {
    const detailsData = {
      name: 'Apple Bundle',
      price: '$1,419',
      stockStatus: 'In Stock',
      rating: 4.5,
      description: [
        'The most beautiful curves of this swivel stool adds an elegant touch to any environment',
        'Memory swivel seat returns to original seat position',
        'Comfortable integrated layered chair seat cushion design',
        'Fully assembled! No assembly required'
      ]
    };
    return of(detailsData);
  }

  /**
   * Get product options data
   */
  getProductOptionsData(): Observable<any> {
    const optionsData = {
      materials: [
        { value: 'wood', label: 'Wood', selected: true },
        { value: 'steel', label: 'Steel' },
        { value: 'aluminium', label: 'Aluminium' },
        { value: 'carbon', label: 'Carbon' }
      ],
      colors: [
        { value: 'white', label: 'White', selected: true },
        { value: 'gray', label: 'Gray' },
        { value: 'black', label: 'Black' },
        { value: 'blue', label: 'Blue' },
        { value: 'red', label: 'Red' },
        { value: 'pink', label: 'Pink' }
      ],
      quantities: [
        { value: '1', label: '1', selected: true },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' }
      ],
      selectedMaterial: 'wood',
      selectedColor: 'white',
      selectedQuantity: '1'
    };
    return of(optionsData);
  }

  /**
   * Get product actions data
   */
  getProductActionsData(): Observable<any> {
    const actionsData = {
      primaryAction: {
        id: 'add-to-cart',
        text: 'Add to cart',
        icon: 'fas fa-shopping-cart',
        classes: 'bg-blue-500 text-white',
        type: 'primary'
      },
      secondaryActions: [
        {
          id: 'wishlist',
          text: 'Add to Wishlist',
          icon: 'fas fa-heart',
          classes: 'bg-transparent border border-slate-700 text-slate-700',
          type: 'outline'
        },
        {
          id: 'compare',
          text: 'Compare',
          icon: 'fas fa-exchange-alt',
          classes: 'bg-transparent border border-slate-700 text-slate-700',
          type: 'outline'
        }
      ],
      isAvailable: true,
      isLoading: false
    };
    return of(actionsData);
  }

  /**
   * Get related products data
   */
  getRelatedProducts(): Observable<any[]> {
    return of([
      {
        id: '230019',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-1.jpg',
        name: 'Christopher Knight Home',
        price: '$89.53',
        rating: 4.5,
        available: true
      },
      {
        id: '87120',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-2.jpg',
        name: 'Bar Height Swivel Barstool',
        price: '$99.99',
        rating: 5,
        available: true
      },
      {
        id: '412301',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-3.jpg',
        name: 'Signature Design by Ashley',
        price: '$129.00',
        rating: 4.5,
        available: false
      },
      {
        id: '001992',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-4.jpg',
        name: 'Modern Square',
        price: '$59.99',
        rating: 4.5,
        available: false
      }
    ]);
  }
} 