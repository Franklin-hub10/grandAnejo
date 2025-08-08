import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class GalleryComponent implements OnInit {
  galleryImages: string[] = [];
  current = 0;

  ngOnInit(): void {
    this.galleryImages = [
      'https://img.freepik.com/foto-gratis/filete-cordero-servido-papas-fritas-queso-derretido_140725-6691.jpg?semt=ais_hybrid&w=740&q=80',
      'https://www.shutterstock.com/image-photo/hands-food-sprinkle-on-dish-260nw-2488467481.jpg',
      'https://img.freepik.com/fotos-premium/fotografia-plato-comida-gourmet-mesa-restaurante-yuri-ugarte-cespedes_261378-907.jpg',
      'https://plus.unsplash.com/premium_photo-1663036447682-8f0d918adbed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D'
    ];
  }

  prev(): void {
    this.current = (this.current === 0)
      ? this.galleryImages.length - 1
      : this.current - 1;
  }

  next(): void {
    this.current = (this.current === this.galleryImages.length - 1)
      ? 0
      : this.current + 1;
  }

  goTo(idx: number): void {
    this.current = idx;
  }
}
