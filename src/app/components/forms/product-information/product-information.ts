import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import Quill styles
import 'quill/dist/quill.snow.css';

/**
 * Interface para las opciones de categoría
 */
export interface CategoryOption {
  value: string;
  label: string;
  selected?: boolean;
}

/**
 * Interface para las opciones de color
 */
export interface ColorOption {
  value: string;
  label: string;
  selected?: boolean;
}

/**
 * Interface para los datos de información del producto
 */
export interface ProductInformationData {
  /** Título de la sección */
  sectionTitle: string;
  /** Configuración de campos */
  fields: {
    /** Campo nombre del producto */
    productName: {
      label: string;
      value: string;
      placeholder?: string;
    };
    /** Campo peso del producto */
    weight: {
      label: string;
      value: number;
      placeholder?: string;
    };
    /** Campo colección del producto */
    collection: {
      label: string;
      value: string;
      placeholder?: string;
    };
    /** Campo precio del producto */
    price: {
      label: string;
      value: string;
      placeholder?: string;
    };
    /** Campo cantidad disponible */
    quantity: {
      label: string;
      value: number;
      placeholder?: string;
    };
    /** Campo descripción del producto */
    description: {
      label: string;
      value: string;
      placeholder?: string;
    };
    /** Campo categoría */
    category: {
      label: string;
      options: CategoryOption[];
    };
    /** Campo color */
    color: {
      label: string;
      options: ColorOption[];
    };
  };
}

/**
 * Product Information Component
 * 
 * Componente para gestionar la información básica del producto.
 * Incluye formulario con todos los campos necesarios.
 * 
 * FEATURES:
 * - Formulario completo con validaciones
 * - Campos dinámicos con datos desde servicio
 * - Selects para categoría y color
 * - Editor de texto para descripción
 * - Responsive design
 * - Dark mode support
 */
@Component({
  selector: 'app-product-information',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-information.html'
})
export class ProductInformationComponent implements AfterViewInit {
  
  private quillEditor: any;

  constructor(private elementRef: ElementRef) {}
  
  /**
   * Datos de información del producto
   */
  @Input() data!: ProductInformationData;

  /**
   * Lifecycle hook for component initialization.
   * Initializes Quill editor and Choices.js after view is ready.
   */
  ngAfterViewInit(): void {
    this.initializeQuillEditor();
    this.initializeChoices();
  }

  /**
   * Initialize Quill rich text editor.
   * Sets up the editor for product description.
   */
  private initializeQuillEditor(): void {
    // Import Quill dynamically
    import('quill').then((Quill) => {
      const editorElement = this.elementRef.nativeElement.querySelector('#quill-editor');
      if (editorElement) {
        this.quillEditor = new Quill.default(editorElement, {
          theme: "snow",
        });

        // Set initial content
        if (this.data.fields.description.value) {
          this.quillEditor.root.innerHTML = this.data.fields.description.value;
        } else {
          // Set default content like in the original template
          this.quillEditor.root.innerHTML = `
            <p>Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.</p>
          `;
        }

        // Listen for changes
        this.quillEditor.on('text-change', () => {
          this.data.fields.description.value = this.quillEditor.root.innerHTML;
          console.log('Description changed:', this.data.fields.description.value);
        });
      }
    });
  }

  /**
   * Manejar cambio en nombre del producto
   */
  onProductNameChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.fields.productName.value = target.value;
    console.log('Product name changed:', this.data.fields.productName.value);
  }

  /**
   * Manejar cambio en peso
   */
  onWeightChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.fields.weight.value = Number(target.value);
    console.log('Weight changed:', this.data.fields.weight.value);
  }

  /**
   * Manejar cambio en colección
   */
  onCollectionChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.fields.collection.value = target.value;
    console.log('Collection changed:', this.data.fields.collection.value);
  }

  /**
   * Manejar cambio en precio
   */
  onPriceChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.fields.price.value = target.value;
    console.log('Price changed:', this.data.fields.price.value);
  }

  /**
   * Manejar cambio en cantidad
   */
  onQuantityChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.data.fields.quantity.value = Number(target.value);
    console.log('Quantity changed:', this.data.fields.quantity.value);
  }

  /**
   * Manejar cambio en descripción (método legacy - ahora se maneja con Quill)
   */
  onDescriptionChange(event: Event): void {
    // Este método se mantiene por compatibilidad pero ya no se usa
    // La descripción ahora se maneja directamente con el editor Quill
    console.log('Description change event (legacy method)');
  }

  /**
   * Manejar cambio en categoría
   */
  onCategoryChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;
    
    // Actualizar selección
    this.data.fields.category.options.forEach((cat: CategoryOption) => {
      cat.selected = cat.value === selectedValue;
    });
    
    console.log('Category changed:', selectedValue);
  }

  /**
   * Manejar cambio en color
   */
  onColorChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;
    
    // Actualizar selección
    this.data.fields.color.options.forEach((color: ColorOption) => {
      color.selected = color.value === selectedValue;
    });
    
    console.log('Color changed:', selectedValue);
  }

  /**
   * Initialize Choices.js for select elements.
   * Sets up the category and color selects with proper positioning.
   */
  private initializeChoices(): void {
    // Import Choices dynamically
    import('choices.js').then((Choices) => {
      // Initialize category select
      const categoryElement = this.elementRef.nativeElement.querySelector('select[name="choices-category"]');
      if (categoryElement) {
        new Choices.default(categoryElement, {
          searchEnabled: false,
          position: 'bottom',
          shouldSort: false
        });
      }

      // Initialize color select
      const colorElement = this.elementRef.nativeElement.querySelector('select[name="choices-color"]');
      if (colorElement) {
        new Choices.default(colorElement, {
          searchEnabled: false,
          position: 'bottom',
          shouldSort: false
        });
      }
    });
  }
} 