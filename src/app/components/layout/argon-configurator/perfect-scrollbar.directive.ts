import { Directive, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Directive({
  selector: '[appPerfectScrollbar]',
  standalone: true
})
export class PerfectScrollbarDirective implements AfterViewInit, OnDestroy {
  private ps: PerfectScrollbar | undefined;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.ps = new PerfectScrollbar(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.ps) {
      this.ps.destroy();
    }
  }
} 
