import { Component, Input, AfterViewInit, ElementRef, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importar Choices.js
import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

/**
 * Product Option Interface
 * 
 * Interface for individual product option items
 */
export interface ProductOption {
  /** Option value */
  value: string;
  /** Option display text */
  label: string;
  /** Whether option is selected by default */
  selected?: boolean;
  /** Whether option is disabled */
  disabled?: boolean;
}

/**
 * Product Options Data Interface
 * 
 * Interface for product configuration options
 */
export interface ProductOptionsData {
  /** Material options */
  materials: ProductOption[];
  /** Color options */
  colors: ProductOption[];
  /** Quantity options */
  quantities: ProductOption[];
  /** Selected material */
  selectedMaterial?: string;
  /** Selected color */
  selectedColor?: string;
  /** Selected quantity */
  selectedQuantity?: string;
}

/**
 * Product Options Component
 * 
 * Component for product configuration options with Choices.js integration
 * 
 * FEATURES:
 * - Material selection dropdown
 * - Color selection dropdown
 * - Quantity selection dropdown
 * - Choices.js integration for enhanced UX
 * - Form validation
 * - Responsive design
 * - Dark mode support
 */
@Component({
  selector: 'app-product-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-options.html',
  styleUrls: []
})
export class ProductOptionsComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() data!: ProductOptionsData;
  private choicesInstances: Choices[] = [];

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.initChoices();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && !changes['data'].firstChange) {
      this.destroyChoices();
      setTimeout(() => this.initChoices(), 0);
    }
  }

  ngOnDestroy(): void {
    this.destroyChoices();
  }

  /**
   * Initialize Choices.js for enhanced select dropdowns
   */
  private initChoices(): void {
    const selects = this.elementRef.nativeElement.querySelectorAll('select[choices-select]');
    selects.forEach((select: HTMLSelectElement) => {
      const instance = new Choices(select, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false
        // Si quieres personalizar clases, usa solo las necesarias o elimina classNames para evitar errores de tipado
        // classNames: { containerOuter: 'choices w-full' }
      });
      this.choicesInstances.push(instance);
    });
  }

  /**
   * Destroy Choices.js instances
   */
  private destroyChoices(): void {
    this.choicesInstances.forEach(instance => instance.destroy());
    this.choicesInstances = [];
  }

  /**
   * Get selected material
   */
  getSelectedMaterial(): string {
    return this.data.selectedMaterial || this.data.materials.find(m => m.selected)?.value || '';
  }

  /**
   * Get selected color
   */
  getSelectedColor(): string {
    return this.data.selectedColor || this.data.colors.find(c => c.selected)?.value || '';
  }

  /**
   * Get selected quantity
   */
  getSelectedQuantity(): string {
    return this.data.selectedQuantity || this.data.quantities.find(q => q.selected)?.value || '';
  }

  /**
   * Handle material change
   */
  onMaterialChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.data.selectedMaterial = select.value;
  }

  /**
   * Handle color change
   */
  onColorChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.data.selectedColor = select.value;
  }

  /**
   * Handle quantity change
   */
  onQuantityChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.data.selectedQuantity = select.value;
  }
} 