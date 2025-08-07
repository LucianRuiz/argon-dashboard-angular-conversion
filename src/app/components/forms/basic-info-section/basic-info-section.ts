import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface para los datos de información básica del usuario
 */
export interface BasicInfoData {
  /** Título de la sección */
  title: string;
  /** Información personal del usuario */
  personalInfo: {
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: {
      month: string;
      day: string;
      year: string;
    };
    email: string;
    confirmEmail: string;
    location: string;
    phone: string;
    language: string;
    skills: string;
  };
  /** Opciones de género disponibles */
  genderOptions: string[];
  /** Opciones de idioma disponibles */
  languageOptions: string[];
}

/**
 * Componente widget para mostrar y editar la información básica del usuario
 */
@Component({
  selector: 'app-basic-info-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-info-section.html'
})
export class BasicInfoSectionComponent {
  @Input() data!: BasicInfoData;

  trackByIndex(index: number): number {
    return index;
  }
} 