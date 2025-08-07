import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface para una configuración de notificación
 */
export interface NotificationSetting {
  /** Nombre de la actividad */
  activity: string;
  /** Descripción de la actividad */
  description: string;
  /** Si está habilitado por email */
  emailEnabled: boolean;
  /** Si está habilitado por push */
  pushEnabled: boolean;
  /** Si está habilitado por SMS */
  smsEnabled: boolean;
}

/**
 * Interface para los datos de la sección de notificaciones
 */
export interface NotificationsData {
  /** Título de la sección */
  title: string;
  /** Descripción de la sección */
  description: string;
  /** Configuraciones de notificaciones */
  settings: NotificationSetting[];
}

/**
 * Componente widget para la configuración de notificaciones
 */
@Component({
  selector: 'app-notifications-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications-section.html'
})
export class NotificationsSectionComponent {
  @Input() data!: NotificationsData;

  trackByIndex(index: number): number {
    return index;
  }
} 