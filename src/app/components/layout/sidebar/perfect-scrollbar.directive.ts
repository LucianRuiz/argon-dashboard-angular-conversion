import { Directive, ElementRef, AfterViewInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Directive({
  selector: '[appPerfectScrollbar]',
  standalone: true
})
export class PerfectScrollbarDirective implements AfterViewInit, OnDestroy, OnChanges {
  private ps: PerfectScrollbar | undefined;
  
  @Input() updateOnChange: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Inicializar inmediatamente sin delay
    this.initPerfectScrollbar();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['updateOnChange'] && this.ps) {
      // Reducir el delay para actualización más rápida
      setTimeout(() => {
        this.ps?.update();
      }, 50);
    }
  }

  ngOnDestroy() {
    if (this.ps) {
      this.ps.destroy();
    }
  }

  private initPerfectScrollbar() {
    if (this.ps) {
      this.ps.destroy();
    }
    
    // Inicializar con opciones optimizadas para carga más rápida
    this.ps = new PerfectScrollbar(this.el.nativeElement, {
      wheelPropagation: false,
      suppressScrollX: true,
      swipeEasing: true,
      minScrollbarLength: 20
    });
  }
} 
