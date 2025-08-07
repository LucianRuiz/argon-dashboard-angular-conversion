import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SecondaryNavbarComponent } from '../../../components/layout/secondary-navbar/secondary-navbar';
import { SecondaryFooterComponent } from '../../../components/layout/secondary-footer/secondary-footer';
import { PricingDataService } from '../../../services/pricing-data.service';
import { PricingPlan } from '../../../components/pricing/pricing-cards/pricing-cards';
import { BrandLogo } from '../../../components/pricing/brands-section/brands-section';
import { FaqItem } from '../../../components/pricing/faq-section/faq-section';
import { PricingHeaderComponent } from '../../../components/pricing/pricing-header/pricing-header';
import { PricingCardsComponent } from '../../../components/pricing/pricing-cards/pricing-cards';
import { BrandsSectionComponent } from '../../../components/pricing/brands-section/brands-section';
import { FaqSectionComponent } from '../../../components/pricing/faq-section/faq-section';
import { Observable } from 'rxjs';

/**
 * Pricing Page Component
 * 
 * This component implements the pricing and subscription page for the application.
 * It provides a comprehensive interface for displaying pricing plans, subscription
 * options, billing cycles, brand partnerships, and frequently asked questions
 * in a complete layout designed for conversion and user decision-making.
 * 
 * Features:
 * - Pricing header with compelling value proposition
 * - Pricing cards with different subscription tiers
 * - Monthly and annual billing toggle functionality
 * - Brand logos section showcasing partnerships
 * - FAQ section with common questions and answers
 * - Secondary navbar for simplified navigation
 * - Secondary footer with additional information
 * - Plan selection and comparison capabilities
 * - Responsive design for various screen sizes
 * - Pricing data management through dedicated service
 * - Billing cycle switching with price updates
 * - Plan feature comparison and highlighting
 * 
 * The component serves as a comprehensive pricing interface, providing
 * potential customers with clear pricing information, feature comparisons,
 * billing options, and answers to common questions in an organized and
 * conversion-optimized layout.
 * 
 * @example
 * ```html
 * <app-pricing-page></app-pricing-page>
 * ```
 */
@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    SecondaryNavbarComponent, 
    SecondaryFooterComponent,
    PricingHeaderComponent,
    PricingCardsComponent,
    BrandsSectionComponent,
    FaqSectionComponent
  ],
  templateUrl: './pricing-page.component.html'
})
export class PricingPageComponent {

  /** Observable for navbar configuration data */
  navbarData$!: Observable<any>;
  
  /** Flag indicating whether annual billing is selected */
  isAnnual: boolean = false;
  
  /** Array of available pricing plans */
  pricingPlans: PricingPlan[] = [];
  
  /** Array of FAQ items */
  faqItems: FaqItem[] = [];
  
  /** Array of brand logos for partnerships section */
  brandLogos: BrandLogo[] = [];

  /**
   * Creates an instance of PricingPageComponent.
   * 
   * Initializes the component by subscribing to data streams from PricingDataService
   * for navbar configuration, pricing plans, FAQ items, and brand logos.
   * 
   * @param pricingService - Service for managing pricing data and subscription information
   */
  constructor(private pricingService: PricingDataService) {
    this.navbarData$ = this.pricingService.getNavbarData();
    this.pricingService.getPricingPlans().subscribe(plans => this.pricingPlans = plans);
    this.pricingService.getFaqItems().subscribe(faqItems => this.faqItems = faqItems);
    this.pricingService.getBrandLogos().subscribe(logos => this.brandLogos = logos);
  }

  /**
   * Toggles between monthly and annual billing cycles.
   * 
   * Switches the billing cycle flag and typically triggers
   * price updates in the pricing cards to reflect the new
   * billing period and any applicable discounts.
   */
  toggleBilling(): void {
    this.isAnnual = !this.isAnnual;
  }

  /**
   * Handles pricing plan selection by users.
   * 
   * Processes the selection of a pricing plan and logs the
   * selection for debugging purposes. In a real application,
   * this would typically initiate the subscription process
   * or redirect to a checkout page.
   * 
   * @param plan - The selected pricing plan with all its details
   */
  onPlanSelected(plan: PricingPlan): void {
    console.log('Plan seleccionado:', plan);
    
  }
} 