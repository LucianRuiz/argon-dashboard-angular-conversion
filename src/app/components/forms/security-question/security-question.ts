import { Component, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SecurityQuestionOption {
  id: number;
  value: string;
  text: string;
  disabled?: boolean;
}

export interface SecurityQuestionData {
  questionLabel: string;
  answerLabel: string;
  answerPlaceholder: string;
  options: SecurityQuestionOption[];
}

// Declarar Choices para TypeScript
declare var Choices: any;

@Component({
  selector: 'app-security-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './security-question.html'
})
export class SecurityQuestionComponent implements AfterViewInit {
  @Input() data!: SecurityQuestionData;

  trackByOption(index: number, option: SecurityQuestionOption): number {
    return option.id;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const element = document.getElementById('choices-questions');
      if (element && typeof Choices !== 'undefined') {
        new Choices(element);
      }
    }, 0);
  }
} 