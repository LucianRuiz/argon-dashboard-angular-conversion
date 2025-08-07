import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface para una cuenta integrada
 */
export interface AccountIntegration {
  /** Nombre del servicio */
  name: string;
  /** Descripción del servicio */
  description: string;
  /** Logo del servicio */
  logo: string;
  /** Estado de la integración */
  status: string;
  /** Si está habilitada */
  isEnabled: boolean;
  /** Información adicional de configuración */
  configInfo?: {
    verificationCode?: string;
    connectedAccount?: string;
  };
  /** Si mostrar información expandida */
  showExpanded?: boolean;
}

/**
 * Interface para los datos de la sección de cuentas
 */
export interface AccountsData {
  /** Título de la sección */
  title: string;
  /** Descripción de la sección */
  description: string;
  /** Integraciones disponibles */
  integrations: AccountIntegration[];
}

/**
 * Componente widget para la gestión de cuentas e integraciones
 */
@Component({
  selector: 'app-accounts-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accounts-section.html'
})
export class AccountsSectionComponent {
  @Input() data!: AccountsData;

  trackByIndex(index: number): number {
    return index;
  }
} 