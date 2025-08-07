import { Component, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var Choices: any;

/**
 * Interface para las opciones de moneda
 */
export interface CurrencyOption {
  value: string;
  label: string;
  selected?: boolean;
}

/**
 * Interface para los datos de pricing del producto
 */
export interface ProductPricingData {
  /** Título de la sección */
  sectionTitle: string;
  /** Configuración de campos */
  fields: {
    /** Campo precio del producto */
    price: {
      label: string;
      value: number;
      placeholder?: string;
    };
    /** Campo moneda */
    currency: {
      label: string;
      value: string;
      options: CurrencyOption[];
    };
    /** Campo SKU del producto */
    sku: {
      label: string;
      value: string;
      placeholder?: string;
    };
    /** Campo tags del producto */
    tags: {
      label: string;
      value: string;
      placeholder?: string;
    };
  };
}

/**
 * Product Pricing Component
 * 
 * Componente para gestionar el pricing del producto.
 * Incluye precio, moneda, SKU y tags.
 * 
 * FEATURES:
 * - Campos de pricing dinámicos
 * - Select de monedas
 * - Validación de precio
 * - Gestión de tags
 * - Responsive design
 * - Dark mode support
 */
@Component({
  selector: 'app-product-pricing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-pricing.html'
})
export class ProductPricingComponent implements AfterViewInit {
  
  /**
   * Datos de pricing del producto
   */
  @Input() data!: ProductPricingData;

  /**
   * Inicializar Choices.js después de que el DOM esté listo
   */
  ngAfterViewInit(): void {
    // Inicializar Choices.js para selects con atributo 'choices-select'
    setTimeout(() => {
      const choiceSelectElements = document.querySelectorAll('[choices-select]');
      choiceSelectElements.forEach((element: any) => {
        if (element && !element.choices) {
          new Choices(element, {
            position: 'bottom'
          });
        }
      });

      // Inicializar Choices.js para inputs con atributo 'choice'
      const choiceElements = document.querySelectorAll('[choice]');
      choiceElements.forEach((element: any) => {
        if (element && !element.choices) {
          new Choices(element, {
            removeItemButton: true,
            position: 'bottom'
          });
        }
      });
    }, 100);
  }

  /**
   * Manejar cambio en precio
   */
  onPriceChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.fields.price.value = Number(target.value);
    console.log('Price changed:', this.data.fields.price.value);
  }

  /**
   * Manejar cambio en moneda
   */
  onCurrencyChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;
    
    // Actualizar selección
    this.data.fields.currency.options.forEach((currency: CurrencyOption) => {
      currency.selected = currency.value === selectedValue;
    });
    
    this.data.fields.currency.value = selectedValue;
    console.log('Currency changed:', selectedValue);
  }

  /**
   * Manejar cambio en SKU
   */
  onSkuChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.fields.sku.value = target.value;
    console.log('SKU changed:', this.data.fields.sku.value);
  }

  /**
   * Manejar cambio en tags
   */
  onTagsChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.fields.tags.value = target.value;
    console.log('Tags changed:', this.data.fields.tags.value);
  }

  /**
   * Validar precio
   */
  validatePrice(): boolean {
    return this.data.fields.price.value >= 0;
  }

  /**
   * Validar SKU
   */
  validateSku(): boolean {
    return this.data.fields.sku.value.length > 0;
  }
} 