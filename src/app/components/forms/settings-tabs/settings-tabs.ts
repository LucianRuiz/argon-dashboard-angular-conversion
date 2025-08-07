import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface para una pestaña de navegación
 */
export interface SettingsTab {
  /** ID de la pestaña */
  id: string;
  /** Texto de la pestaña */
  text: string;
  /** Si está activa */
  isActive: boolean;
}

/**
 * Interface para los datos de las pestañas
 */
export interface SettingsTabsData {
  /** Pestañas disponibles */
  tabs: SettingsTab[];
}

/**
 * Componente widget para las pestañas de navegación de settings
 */
@Component({
  selector: 'app-settings-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings-tabs.html'
})
export class SettingsTabsComponent {
  @Input() data!: SettingsTabsData;

  trackByIndex(index: number): number {
    return index;
  }

  /**
   * Cambia la pestaña activa
   */
  selectTab(selectedTab: SettingsTab): void {
    // Desactivar todas las pestañas
    this.data.tabs.forEach(tab => tab.isActive = false);
    // Activar la pestaña seleccionada
    selectedTab.isActive = true;
  }
} 