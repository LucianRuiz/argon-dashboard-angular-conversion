import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface para un elemento de navegación
 */
export interface NavigationItem {
  /** ID del elemento */
  id: string;
  /** Icono del elemento */
  icon: string;
  /** Texto del elemento */
  text: string;
  /** Si está activo */
  isActive?: boolean;
}

/**
 * Interface para los datos de navegación
 */
export interface SettingsNavigationData {
  /** Elementos de navegación */
  items: NavigationItem[];
}

/**
 * Componente widget para la navegación lateral de la página de settings
 */
@Component({
  selector: 'app-settings-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings-navigation.html'
})
export class SettingsNavigationComponent implements OnInit {
  @Input() data!: SettingsNavigationData;
  
  /** ID del elemento activo */
  activeId: string = 'profile';

  constructor() {}

  ngOnInit(): void {
    // Detectar el hash inicial de la URL
    const hash = window.location.hash.replace('#', '');
    if (hash && this.data.items.some(item => item.id === hash)) {
      this.activeId = hash;
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

  /**
   * Selecciona un elemento de navegación
   */
  selectItem(itemId: string): void {
    this.activeId = itemId;
    
    // Navegar a la sección correspondiente usando el hash del navegador
    window.location.hash = itemId;
    
    // También hacer scroll suave como respaldo
    setTimeout(() => {
      const element = document.getElementById(itemId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  /**
   * Verifica si un elemento está activo
   */
  isActive(itemId: string): boolean {
    return this.activeId === itemId;
  }
} 