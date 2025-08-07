import { Component, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var Choices: any;

/**
 * Interface para los datos de redes sociales del producto
 */
export interface ProductSocialsData {
  /** Título de la sección */
  sectionTitle: string;
  /** Configuración de campos */
  fields: {
    /** Campo handle de Shopify */
    shopifyHandle: {
      label: string;
      value: string;
      placeholder?: string;
    };
    /** Campo URL de Facebook */
    facebookUrl: {
      label: string;
      value: string;
      placeholder?: string;
    };
    /** Campo URL de Instagram */
    instagramUrl: {
      label: string;
      value: string;
      placeholder?: string;
    };
  };
}

/**
 * Product Socials Component
 * 
 * Componente para gestionar las redes sociales del producto.
 * Incluye campos para Shopify, Facebook e Instagram.
 * 
 * FEATURES:
 * - Campos de redes sociales dinámicos
 * - Validación de URLs
 * - Placeholders personalizables
 * - Responsive design
 * - Dark mode support
 */
@Component({
  selector: 'app-product-socials',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-socials.html'
})
export class ProductSocialsComponent implements AfterViewInit {
  
  /**
   * Datos de redes sociales del producto
   */
  @Input() data!: ProductSocialsData;

  /**
   * Inicializar Choices.js después de que el DOM esté listo
   */
  ngAfterViewInit(): void {
    // Inicializar Choices.js para inputs con atributo 'choice'
    setTimeout(() => {
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
   * Manejar cambio en handle de Shopify
   */
  onShopifyHandleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.fields.shopifyHandle.value = target.value;
    console.log('Shopify handle changed:', this.data.fields.shopifyHandle.value);
  }

  /**
   * Manejar cambio en URL de Facebook
   */
  onFacebookUrlChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.fields.facebookUrl.value = target.value;
    console.log('Facebook URL changed:', this.data.fields.facebookUrl.value);
  }

  /**
   * Manejar cambio en URL de Instagram
   */
  onInstagramUrlChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.fields.instagramUrl.value = target.value;
    console.log('Instagram URL changed:', this.data.fields.instagramUrl.value);
  }

  /**
   * Validar URL de Facebook
   */
  validateFacebookUrl(): boolean {
    if (!this.data.fields.facebookUrl.value || this.data.fields.facebookUrl.value === 'https://') {
      return true; // URL vacía es válida
    }
    try {
      new URL(this.data.fields.facebookUrl.value);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validar URL de Instagram
   */
  validateInstagramUrl(): boolean {
    if (!this.data.fields.instagramUrl.value || this.data.fields.instagramUrl.value === 'https://') {
      return true; // URL vacía es válida
    }
    try {
      new URL(this.data.fields.instagramUrl.value);
      return true;
    } catch {
      return false;
    }
  }
} 