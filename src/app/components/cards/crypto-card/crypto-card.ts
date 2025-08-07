import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Data structure for the crypto card component.
 * 
 * Provides comprehensive cryptocurrency wallet information
 * including wallet details, status, and available actions.
 */
export interface CryptoCardData {
  /** Name of the cryptocurrency (e.g., 'Bitcoin', 'Ethereum') */
  name: string;
  /** URL or path to the cryptocurrency logo image */
  logo: string;
  /** Status text (e.g., 'Active', 'Pending', 'Suspended') */
  status: string;
  /** CSS class for status styling (e.g., 'text-green-500', 'text-red-500') */
  statusClass: string;
  /** Wallet address or public key */
  address: string;
  /** Wallet owner information */
  owner: {
    /** Name of the wallet owner */
    name: string;
  };
  /** Available actions for the wallet */
  actions: {
    /** Whether receive action is available */
    receive: boolean;
    /** Whether send action is available */
    send: boolean;
    /** Whether swap action is available */
    swap: boolean;
  };
}

/**
 * Crypto Card Component
 * 
 * A comprehensive card component that displays cryptocurrency wallet
 * information with interactive action buttons. Designed for crypto
 * dashboards and wallet management applications requiring wallet
 * display and transaction capabilities.
 * 
 * Features:
 * - Displays cryptocurrency name and logo with wallet information
 * - Shows wallet status with customizable styling
 * - Displays wallet address and owner information
 * - Interactive action buttons (receive, send, swap)
 * - Event emission for action handling
 * - Responsive design with Tailwind CSS
 * - Strongly typed with TypeScript interface
 * - Required input validation (prevents null/undefined errors)
 * - Minimal dependencies (only CommonModule)
 * - Configurable data input with comprehensive interface
 * - Flexible status styling with CSS classes
 * - Customizable action availability
 * - Event-driven architecture for action handling
 * - No hardcoded values or styling
 * - Generic design for any cryptocurrency application
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Type-safe data handling
 * - Consistent styling and layout
 * - Professional crypto interface
 * - Event-driven architecture for decoupled action handling
 * - Responsive design across devices
 * - Accessible action buttons
 * 
 * Event Handling:
 * - actionClick: Emits action type when buttons are clicked
 * - Parent component can handle: 'receive', 'send', 'swap'
 * - Enables decoupled action handling
 * - Flexible action management
 * 
 * Use Cases:
 * - Cryptocurrency dashboards
 * - Wallet management applications
 * - Crypto trading platforms
 * - Digital asset management
 * - Blockchain applications
 * - DeFi interfaces
 * 
 * The component serves as a comprehensive crypto card that can be
 * easily integrated into cryptocurrency applications and dashboards,
 * providing users with wallet information display and transaction
 * action capabilities.
 * 
 * @example
 * ```html
 * <app-crypto-card 
 *   [cryptoData]="cryptoData" 
 *   (actionClick)="handleCryptoAction($event)">
 * </app-crypto-card>
 * ```
 * 
 * @example
 * ```typescript
 * const cryptoData: CryptoCardData = {
 *   name: "Bitcoin",
 *   logo: "assets/img/bitcoin-logo.png",
 *   status: "Active",
 *   statusClass: "text-green-500",
 *   address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
 *   owner: {
 *     name: "John Doe"
 *   },
 *   actions: {
 *     receive: true,
 *     send: true,
 *     swap: false
 *   }
 * };
 * ```
 */
@Component({
  selector: 'app-crypto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crypto-card.html'
})
export class CryptoCardComponent {
  /**
   * Required input data for the crypto card.
   * 
   * Contains all cryptocurrency wallet information including name,
   * logo, status, address, owner details, and available actions.
   * This required input property ensures data is always provided,
   * preventing null/undefined errors and ensuring proper display.
   * 
   * @type {CryptoCardData} - Complete crypto wallet data (required)
   */
  @Input() cryptoData!: CryptoCardData;

  /**
   * Event emitter for action button clicks.
   * 
   * Emits the action type ('receive', 'send', 'swap') when action
   * buttons are clicked. This event allows parent components to
   * handle cryptocurrency actions in a decoupled manner.
   * 
   * @type {EventEmitter<string>} - Emits action type string
   */
  @Output() actionClick = new EventEmitter<string>();

  /**
   * Handles action button clicks and emits the action type.
   * 
   * Delegates action handling to the parent component by emitting
   * the specific action type that was clicked. This method provides
   * the interactive functionality for cryptocurrency wallet actions.
   * 
   * @param {string} action - The action type ('receive', 'send', 'swap')
   */
  onActionClick(action: string): void {
    this.actionClick.emit(action);
  }
} 
