import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertCardComponent, AlertCardData } from '../../cards/alert-card/alert-card';

/**
 * Alert Example Component
 * 
 * Displays a single alert example with customizable data.
 * 
 * FEATURES:
 * - Single alert display
 * - Customizable alert data
 * - Responsive design
 * - Reusable component
 * 
 * USAGE:
 * <app-alert-example [alertData]="alertData"></app-alert-example>
 */
@Component({
  selector: 'app-alert-example',
  templateUrl: './alerts-examples.html',
  standalone: true,
  imports: [CommonModule, AlertCardComponent]
})
export class AlertExampleComponent {
  
  /** Alert data to display */
  @Input() alertData!: AlertCardData;
} 