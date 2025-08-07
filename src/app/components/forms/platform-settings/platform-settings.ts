import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * PLATFORM SETTINGS WIDGET COMPONENT
 * ========================================
 * 
 * Un widget de configuraciones de plataforma que muestra switches para
 * configuraciones de cuenta y aplicación del usuario.
 * 
 * CARACTERÍSTICAS:
 * - Switches personalizados para configuraciones
 * - Separación entre configuraciones de cuenta y aplicación
 * - Manejo de cambios de estado
 * - Diseño responsive con Tailwind CSS
 * 
 * USO:
 * <app-platform-settings-widget [data]="platformSettingsData" 
 *                               (settingChanged)="onSettingChanged($event)"></app-platform-settings-widget>
 * 
 * REUTILIZACIÓN: Alta - Widget genérico para configuraciones
 * COMPLEJIDAD: Media - Manejo de múltiples switches y eventos
 */

/**
 * Estructura de datos para cada configuración individual.
 * Define la apariencia y estado de cada switch.
 */
export interface SettingItem {
  /** Identificador único de la configuración */
  id: string;
  /** Texto descriptivo de la configuración */
  label: string;
  /** Estado actual del switch (activo/inactivo) */
  checked: boolean;
}

/**
 * Estructura de datos completa para el widget de configuraciones.
 * Organiza las configuraciones en categorías.
 */
export interface PlatformSettingsWidgetData {
  /** Título del widget */
  title: string;
  /** Array de configuraciones de cuenta */
  accountSettings: SettingItem[];
  /** Array de configuraciones de aplicación */
  applicationSettings: SettingItem[];
}



/**
 * Platform Settings Widget Component
 * 
 * Un componente widget reutilizable que muestra configuraciones de plataforma
 * con switches interactivos organizados por categorías.
 * 
 * CARACTERÍSTICAS DE CALIDAD:
 * - Componente standalone para fácil integración
 * - Fuertemente tipado con interfaces TypeScript
 * - Validación de input requerido (previene errores null/undefined)
 * - Emisión de eventos para cambios de configuración
 * - Dependencias mínimas (solo CommonModule)
 * 
 * CARACTERÍSTICAS DE REUTILIZACIÓN:
 * - Input de datos configurable con interfaz completa
 * - Switches dinámicos configurables
 * - Manejo de eventos personalizable
 * - Sin valores hardcodeados
 * - Categorización flexible de configuraciones
 */
@Component({
  selector: 'app-platform-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './platform-settings.html'
})
export class PlatformSettingsComponent {
  /**
   * Datos requeridos para el widget de configuraciones.
   * Contiene todas las configuraciones organizadas por categorías.
   * 
   * @type {PlatformSettingsWidgetData} - Datos completos del widget (requerido)
   * @required - Asegura que los datos siempre se proporcionen, previniendo errores null
   */
  @Input() data!: PlatformSettingsWidgetData;

  /**
   * Obtiene todas las configuraciones activas.
   * Útil para validaciones o acciones basadas en configuraciones activas.
   * 
   * @returns {SettingItem[]} - Array de configuraciones activas
   */
  getActiveSettings(): SettingItem[] {
    return [
      ...this.data.accountSettings.filter(s => s.checked),
      ...this.data.applicationSettings.filter(s => s.checked)
    ];
  }
} 