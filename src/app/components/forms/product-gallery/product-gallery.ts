import { Component, Input, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export interface ProductGalleryImage {
  mainImage: string;
  thumbnail: string;
  alt: string;
  dataSize: string;
  description?: string;
}

export interface ProductGalleryData {
  mainImage: ProductGalleryImage;
  thumbnails: ProductGalleryImage[];
  title?: string;
}

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-gallery.html',
  styleUrls: []
})
export class ProductGalleryComponent implements AfterViewInit, OnDestroy {
  @Input() data!: ProductGalleryData;
  private lightbox: PhotoSwipeLightbox | undefined;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.lightbox = new PhotoSwipeLightbox({
      gallery: this.elementRef.nativeElement.querySelector('.my-gallery'),
      children: 'a',
      pswpModule: () => import('photoswipe')
    });
    this.lightbox.init();
  }

  ngOnDestroy(): void {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = undefined;
    }
  }
} 