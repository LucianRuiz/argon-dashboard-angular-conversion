import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface para los datos de la imagen del producto
 */
export interface ProductImageData {
  /** URL de la imagen del producto */
  imageUrl: string;
  /** Texto alternativo de la imagen */
  imageAlt: string;
  /** Texto del botón de editar */
  editButtonText: string;
  /** Texto del botón de remover */
  removeButtonText: string;
  /** Título de la sección */
  sectionTitle: string;
}

/**
 * Product Image Component
 * 
 * Componente para mostrar y gestionar la imagen del producto.
 * Incluye funcionalidad para editar y remover la imagen.
 * 
 * FEATURES:
 * - Imagen del producto con URL dinámica
 * - Botones de editar y remover
 * - Estilos consistentes con el tema
 * - Responsive design
 * - Dark mode support
 */
@Component({
  selector: 'app-product-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-image.html'
})
export class ProductImageComponent {
  
  /**
   * Datos de la imagen del producto
   */
  @Input() data!: ProductImageData;

  /**
   * Manejar clic en botón editar
   */
  onEditClick(): void {
    // TODO: Implementar lógica de edición de imagen
    console.log('Edit image clicked');
  }

  /**
   * Manejar clic en botón remover
   */
  onRemoveClick(): void {
    // TODO: Implementar lógica de remoción de imagen
    console.log('Remove image clicked');
  }
} 