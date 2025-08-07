import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface for product details data
 */
export interface ProductDetailsData {
  /** Product name */
  name: string;
  /** Product price */
  price: string;
  /** Stock status */
  stockStatus: string;
  /** Product description */
  description: string[];
  /** Product rating */
  rating: number;
}



/**
 * Product Details Component
 * 
 * Component for displaying complete product details
 * based on the original Argon Dashboard HTML template
 * 
 * FEATURES:
 * - Product name and price
 * - Star rating
 * - Stock status
 * - Detailed description
 * - Material, color and quantity options
 * - Add to cart button
 * - Responsive design
 * - Dark mode support
 */
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html'
})
export class ProductDetailsComponent {
  
  /**
   * Product details data
   */
  @Input() data!: ProductDetailsData;

  /**
   * Get stars to display the rating
   */
  getStars(): boolean[] {
    const stars = [];
    const fullStars = Math.floor(this.data.rating);
    const hasHalfStar = this.data.rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(true);
    }
    
    if (hasHalfStar) {
      stars.push(false); // For half star
    }
    
    // Complete up to 5 stars
    while (stars.length < 5) {
      stars.push(false);
    }
    
    return stars;
  }


} 