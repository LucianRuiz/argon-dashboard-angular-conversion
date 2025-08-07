import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SecondaryNavbarDataService } from './navbar-v2-data.service';
import { PricingPlan, PricingFeature } from '../components/pricing/pricing-cards/pricing-cards';
import { BrandLogo } from '../components/pricing/brands-section/brands-section';
import { FaqItem } from '../components/pricing/faq-section/faq-section';

/**
 * PricingPageData interface for complete pricing page configuration
 */
export interface PricingPageData {
  header: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  plans: PricingPlan[];
  brands: {
    title: string;
    logos: BrandLogo[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
}

/**
 * PricingDataService
 * 
 * Provides mock data and configuration for the Pricing page. This service supplies
 * comprehensive pricing information including subscription plans, brand logos,
 * frequently asked questions, and pricing calculations. The service is designed for
 * demo and UI prototyping purposes, simulating backend responses for pricing
 * management functionality.
 * 
 * The service manages:
 * - Secondary navbar configuration with custom styling
 * - Complete pricing page data structure
 * - Three-tier pricing plans (Starter, Premium, Enterprise)
 * - Brand logos and trust indicators
 * - FAQ section with expandable items
 * - Pricing calculations and discount computations
 * - Plan comparison and selection utilities
 * 
 * @example
 * ```typescript
 * constructor(private pricingDataService: PricingDataService) {}
 * 
 * ngOnInit() {
 *   this.pricingDataService.getPricingPageData().subscribe(data => {
 *     this.pricingData = data;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class PricingDataService {

  constructor(private secondaryNavbarDataService: SecondaryNavbarDataService) { }

  /**
   * Retrieves secondary navbar configuration customized for the pricing page.
   * 
   * Returns navbar data with specific styling modifications for the pricing context:
   * - White text color for better visibility on pricing backgrounds
   * - Custom buy now button styling with white background
   * - Pricing-specific navigation configuration
   * 
   * @returns Observable<any> - Customized navbar configuration for pricing page
   * 
   * @example
   * ```typescript
   * this.pricingDataService.getNavbarData().subscribe(navbarData => {
   *   this.navbarConfig = navbarData;
   *   this.textColor = navbarData.textColor; // 'text-white'
   * });
   * ```
   */
  getNavbarData(): Observable<any> {
    const navbarData = this.secondaryNavbarDataService.getDefaultNavbar();
    navbarData.textColor = 'text-white';
    navbarData.buyNowButtonColor = 'bg-white text-slate-500';
    return of(navbarData);
  }

  /**
   * Retrieves complete pricing page data including header, plans, brands, and FAQ.
   * 
   * Returns comprehensive pricing page configuration with:
   * - Header section with title, subtitle, and background image
   * - Three pricing plans with features and pricing
   * - Brand logos section for trust building
   * - FAQ section with expandable questions and answers
   * 
   * @returns Observable<PricingPageData> - Complete pricing page configuration
   * 
   * @example
   * ```typescript
   * this.pricingDataService.getPricingPageData().subscribe(data => {
   *   this.headerData = data.header;
   *   this.pricingPlans = data.plans;
   *   this.brandLogos = data.brands.logos;
   *   this.faqItems = data.faq.items;
   * });
   * ```
   */
  getPricingPageData(): Observable<PricingPageData> {
    const data: PricingPageData = {
      header: {
        title: 'See our pricing',
        subtitle: 'You have Free Unlimited Updates and Premium Support on each package.',
        backgroundImage: '/assets/img/pricing-header-bg.jpg'
      },
      plans: this.getPricingPlansData(),
      brands: {
        title: 'More than 50+ brands trust Soft',
        logos: this.getBrandLogosData()
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'A lot of people don\'t appreciate the moment until it\'s passed. I\'m not trying my hardest, and I\'m not trying to do',
        items: this.getFaqItemsData()
      }
    };

    return of(data);
  }

  /**
   * Retrieves all pricing plans with features and configurations.
   * 
   * Returns an array of pricing plans including:
   * - Starter, Premium, and Enterprise tiers
   * - Monthly and annual pricing options
   * - Feature lists with inclusion status
   * - Button configurations and styling
   * 
   * @returns Observable<PricingPlan[]> - Array of pricing plan configurations
   * 
   * @example
   * ```typescript
   * this.pricingDataService.getPricingPlans().subscribe(plans => {
   *   this.starterPlan = plans.find(plan => plan.name === 'Starter');
   *   this.premiumPlan = plans.find(plan => plan.name === 'Premium');
   *   this.enterprisePlan = plans.find(plan => plan.name === 'Enterprise');
   * });
   * ```
   */
  getPricingPlans(): Observable<PricingPlan[]> {
    return of(this.getPricingPlansData());
  }

  /**
   * Retrieves FAQ items with questions, answers, and expandable states.
   * 
   * Returns FAQ configuration including:
   * - 5 common pricing questions
   * - Detailed answers for each question
   * - Open/closed state management
   * - Customer support information
   * 
   * @returns Observable<FaqItem[]> - Array of FAQ item configurations
   * 
   * @example
   * ```typescript
   * this.pricingDataService.getFaqItems().subscribe(faqItems => {
   *   this.faqList = faqItems;
   *   this.openFaqItems = faqItems.filter(item => item.isOpen);
   * });
   * ```
   */
  getFaqItems(): Observable<FaqItem[]> {
    return of(this.getFaqItemsData());
  }

  /**
   * Retrieves brand logos for trust building and credibility.
   * 
   * Returns brand logo configurations including:
   * - 6 major brand logos (Coinbase, NASA, Netflix, etc.)
   * - Logo URLs and alt text
   * - Brand name references
   * 
   * @returns Observable<BrandLogo[]> - Array of brand logo configurations
   * 
   * @example
   * ```typescript
   * this.pricingDataService.getBrandLogos().subscribe(logos => {
   *   this.brandLogos = logos;
   *   this.logoUrls = logos.map(logo => logo.logoUrl);
   * });
   * ```
   */
  getBrandLogos(): Observable<BrandLogo[]> {
    return of(this.getBrandLogosData());
  }

  /**
   * Retrieves a specific pricing plan by name.
   * 
   * Searches through available plans and returns the matching plan
   * based on the provided plan name (case-insensitive).
   * 
   * @param planName - The name of the plan to retrieve
   * @returns Observable<PricingPlan | undefined> - Matching pricing plan or undefined
   * 
   * @example
   * ```typescript
   * this.pricingDataService.getPlanByName('Premium').subscribe(plan => {
   *   if (plan) {
   *     this.selectedPlan = plan;
   *     this.monthlyPrice = plan.monthlyPrice;
   *   }
   * });
   * ```
   */
  getPlanByName(planName: string): Observable<PricingPlan | undefined> {
    const plans = this.getPricingPlansData();
    const plan = plans.find(p => p.name.toLowerCase() === planName.toLowerCase());
    return of(plan);
  }

  /**
   * Retrieves the most popular pricing plan.
   * 
   * Returns the plan marked as popular (typically Premium tier)
   * for highlighting in the UI.
   * 
   * @returns Observable<PricingPlan | undefined> - Popular pricing plan or undefined
   * 
   * @example
   * ```typescript
   * this.pricingDataService.getPopularPlan().subscribe(popularPlan => {
   *   if (popularPlan) {
   *     this.featuredPlan = popularPlan;
   *     this.showPopularBadge = true;
   *   }
   * });
   * ```
   */
  getPopularPlan(): Observable<PricingPlan | undefined> {
    const plans = this.getPricingPlansData();
    const popularPlan = plans.find(p => p.isPopular);
    return of(popularPlan);
  }

  /**
   * Calculates the current price based on billing type (monthly or annual).
   * 
   * Returns the appropriate price for the given plan and billing cycle.
   * 
   * @param plan - The pricing plan to calculate price for
   * @param isAnnual - Whether to use annual pricing (true) or monthly (false)
   * @returns number - The calculated price
   * 
   * @example
   * ```typescript
   * const plan = this.pricingPlans.find(p => p.name === 'Premium');
   * const annualPrice = this.pricingDataService.getCurrentPrice(plan, true);
   * const monthlyPrice = this.pricingDataService.getCurrentPrice(plan, false);
   * ```
   */
  getCurrentPrice(plan: PricingPlan, isAnnual: boolean): number {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  }

  /**
   * Calculates the annual discount percentage for a pricing plan.
   * 
   * Computes the savings percentage when choosing annual billing
   * over monthly billing for the same plan.
   * 
   * @param plan - The pricing plan to calculate discount for
   * @returns number - The discount percentage (rounded)
   * 
   * @example
   * ```typescript
   * const plan = this.pricingPlans.find(p => p.name === 'Premium');
   * const discount = this.pricingDataService.getAnnualDiscount(plan);
   * console.log(`Save ${discount}% with annual billing`);
   * ```
   */
  getAnnualDiscount(plan: PricingPlan): number {
    const monthlyTotal = plan.monthlyPrice * 12;
    const annualPrice = plan.annualPrice;
    const discount = ((monthlyTotal - annualPrice) / monthlyTotal) * 100;
    return Math.round(discount);
  }

  /**
   * Private method to generate pricing plans data.
   * 
   * Returns an array of three pricing tiers with complete configurations
   * including features, pricing, and styling options.
   * 
   * @returns PricingPlan[] - Array of pricing plan configurations
   */
  private getPricingPlansData(): PricingPlan[] {
    return [
      {
        name: 'Starter',
        monthlyPrice: 59,
        annualPrice: 119,
        description: 'Perfect for small teams getting started',
        buttonText: 'Join',
        buttonClass: 'bg-gradient-to-tl from-zinc-800 to-zinc-700',
        features: [
          { text: '2 team members', included: true },
          { text: '20GB Cloud storage', included: true },
          { text: 'Integration help', included: false },
          { text: 'Sketch Files', included: false },
          { text: 'API Access', included: false },
          { text: 'Complete documentation', included: false }
        ]
      },
      {
        name: 'Premium',
        monthlyPrice: 89,
        annualPrice: 159,
        description: 'Best for growing businesses',
        buttonText: 'Try Premium',
        buttonClass: 'bg-gradient-to-tl from-blue-500 to-violet-500',
        isPopular: true,
        features: [
          { text: '10 team members', included: true },
          { text: '40GB Cloud storage', included: true },
          { text: 'Integration help', included: true },
          { text: 'Sketch Files', included: true },
          { text: 'API Access', included: false },
          { text: 'Complete documentation', included: false }
        ]
      },
      {
        name: 'Enterprise',
        monthlyPrice: 99,
        annualPrice: 399,
        description: 'For large organizations with advanced needs',
        buttonText: 'Join',
        buttonClass: 'bg-gradient-to-tl from-zinc-800 to-zinc-700',
        features: [
          { text: 'Unlimited team members', included: true },
          { text: '100GB Cloud storage', included: true },
          { text: 'Integration help', included: true },
          { text: 'Sketch Files', included: true },
          { text: 'API Access', included: true },
          { text: 'Complete documentation', included: true }
        ]
      }
    ];
  }

  /**
   * Private method to generate FAQ items data.
   * 
   * Returns an array of frequently asked questions with detailed answers
   * and initial open/closed states.
   * 
   * @returns FaqItem[] - Array of FAQ item configurations
   */
  private getFaqItemsData(): FaqItem[] {
    return [
      {
        question: 'How do I order?',
        answer: 'We\'re not always in the position that we want to be at. We\'re constantly growing. We\'re constantly making mistakes. We\'re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don\'t appreciate the moment until it\'s passed.',
        isOpen: true
      },
      {
        question: 'How can i make the payment?',
        answer: 'It really matters and then like it really doesn\'t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn\'t matter. Because it\'s about motivating the doers. Because I\'m here to follow my dreams and inspire other people to follow their dreams, too.\n\nWe\'re not always in the position that we want to be at. We\'re constantly growing. We\'re constantly making mistakes. We\'re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don\'t appreciate the moment until it\'s passed.',
        isOpen: false
      },
      {
        question: 'How much time does it take to receive the order?',
        answer: 'The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? If everything I did failed - which it doesn\'t, it actually succeeds - just the fact that I\'m willing to fail is an inspiration. People are so scared to lose that they don\'t even try. Like, one thing people can\'t say is that I\'m not trying, and I\'m not trying my hardest, and I\'m not trying to do the best way I know how.',
        isOpen: false
      },
      {
        question: 'Can I resell the products?',
        answer: 'I always felt like I could do anything. That\'s the main thing people are controlled by! Thoughts- their perception of themselves! They\'re slowed down by their perception of themselves. If you\'re taught you can\'t do anything, you won\'t do anything. I was taught I could do everything.\n\nIf everything I did failed - which it doesn\'t, it actually succeeds - just the fact that I\'m willing to fail is an inspiration. People are so scared to lose that they don\'t even try. Like, one thing people can\'t say is that I\'m not trying, and I\'m not trying my hardest, and I\'m not trying to do the best way I know how.',
        isOpen: false
      },
      {
        question: 'Where do I find the shipping details?',
        answer: 'There\'s nothing I really wanted to do in life that I wasn\'t able to get good at. That\'s my skill. I\'m not really specifically talented at anything except for the ability to learn. That\'s what I do. That\'s what I\'m here for. Don\'t be afraid to be wrong because you can\'t learn anything from a compliment. I always felt like I could do anything. That\'s the main thing people are controlled by! Thoughts- their perception of themselves! They\'re slowed down by their perception of themselves. If you\'re taught you can\'t do anything, you won\'t do anything. I was taught I could do everything.',
        isOpen: false
      }
    ];
  }

  /**
   * Private method to generate brand logos data.
   * 
   * Returns an array of brand logo configurations for trust building
   * and credibility demonstration.
   * 
   * @returns BrandLogo[] - Array of brand logo configurations
   */
  private getBrandLogosData(): BrandLogo[] {
    return [
      {
        name: 'Coinbase',
        logoUrl: '/assets/img/logos/gray-logos/logo-coinbase.svg',
        alt: 'logo_coinbase'
      },
      {
        name: 'NASA',
        logoUrl: '/assets/img/logos/gray-logos/logo-nasa.svg',
        alt: 'logo_nasa'
      },
      {
        name: 'Netflix',
        logoUrl: '/assets/img/logos/gray-logos/logo-netflix.svg',
        alt: 'logo_netflix'
      },
      {
        name: 'Pinterest',
        logoUrl: '/assets/img/logos/gray-logos/logo-pinterest.svg',
        alt: 'logo_pinterest'
      },
      {
        name: 'Spotify',
        logoUrl: '/assets/img/logos/gray-logos/logo-spotify.svg',
        alt: 'logo_spotify'
      },
      {
        name: 'Vodafone',
        logoUrl: '/assets/img/logos/gray-logos/logo-vodafone.svg',
        alt: 'logo_vodafone'
      }
    ];
  }
} 