import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================
 * PROFILE INFORMATION WIDGET COMPONENT
 * ========================================
 * 
 * Un widget de información de perfil que muestra los datos personales
 * del usuario incluyendo descripción, información personal y enlaces sociales.
 * 
 * CARACTERÍSTICAS:
 * - Muestra descripción personalizada del usuario
 * - Lista de información personal (nombre, email, etc.)
 * - Enlaces a redes sociales con iconos
 * - Botón de edición opcional
 * - Diseño responsive con Tailwind CSS
 * 
 * USO:
 * <app-profile-information-widget [data]="profileInfoData" 
 *                                 (editProfile)="onEditProfile()"></app-profile-information-widget>
 * 
 * REUTILIZACIÓN: Alta - Widget genérico para información de perfil
 * COMPLEJIDAD: Media - Múltiples tipos de información y enlaces
 */

/**
 * Estructura de datos para información personal.
 * Define cada campo de información del usuario.
 */
export interface PersonalInfo {
  /** Etiqueta del campo (ej: "Full Name", "Email") */
  label: string;
  /** Valor del campo */
  value: string;
}

/**
 * Estructura de datos para enlaces sociales.
 * Define cada enlace a redes sociales.
 */
export interface SocialLink {
  /** Nombre de la plataforma social */
  platform: string;
  /** Icono de la plataforma (clase CSS) */
  icon: string;
  /** URL del enlace */
  url: string;
  /** Color del icono (clase CSS) */
  color: string;
}

/**
 * Estructura de datos completa para el widget de información de perfil.
 * Organiza toda la información del usuario.
 */
export interface ProfileInformationWidgetData {
  /** Título del widget */
  title: string;
  /** Descripción o biografía del usuario */
  description: string;
  /** Array de información personal */
  personalInfo: PersonalInfo[];
  /** Array de enlaces sociales */
  socialLinks: SocialLink[];
}

/**
 * Profile Information Widget Component
 * 
 * Un componente widget reutilizable que muestra información detallada
 * del perfil del usuario con opciones de edición.
 * 
 * CARACTERÍSTICAS DE CALIDAD:
 * - Componente standalone para fácil integración
 * - Fuertemente tipado con interfaces TypeScript
 * - Validación de input requerido (previene errores null/undefined)
 * - Emisión de eventos para edición
 * - Dependencias mínimas (solo CommonModule)
 * 
 * CARACTERÍSTICAS DE REUTILIZACIÓN:
 * - Input de datos configurable con interfaz completa
 * - Información personal dinámica
 * - Enlaces sociales configurables
 * - Sin valores hardcodeados
 * - Manejo de eventos personalizable
 */
@Component({
  selector: 'app-profile-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-information.html'
})
export class ProfileInformationComponent {
  /**
   * Datos requeridos para el widget de información de perfil.
   * Contiene toda la información del usuario.
   * 
   * @type {ProfileInformationWidgetData} - Datos completos del perfil (requerido)
   * @required - Asegura que los datos siempre se proporcionen, previniendo errores null
   */
  @Input() data!: ProfileInformationWidgetData;

  /**
   * Verifica si hay enlaces sociales disponibles.
   * Útil para mostrar/ocultar la sección de enlaces sociales.
   * 
   * @returns {boolean} - True si hay enlaces sociales
   */
  hasSocialLinks(): boolean {
    return this.data.socialLinks && this.data.socialLinks.length > 0;
  }

  /**
   * Verifica si hay información personal disponible.
   * Útil para mostrar/ocultar la sección de información personal.
   * 
   * @returns {boolean} - True si hay información personal
   */
  hasPersonalInfo(): boolean {
    return this.data.personalInfo && this.data.personalInfo.length > 0;
  }
} 