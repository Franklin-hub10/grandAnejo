// src/app/components/menu/menu.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule }               from '@angular/common';

interface Dish {
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule                       // ← ngFor y el pipe currency vienen de aquí
  ],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = [];

  ngOnInit(): void {
    this.dishes = [
      {
        name: 'Tagliatelle al Ragù',
        description: 'Pasta fresca con salsa boloñesa casera.',
        price: 12.50,
        image: 'assets/menu/tagliatelle.jpg'
      },
      {
        name: 'Risotto de Hongos',
        description: 'Arroz cremoso con setas seleccionadas.',
        price: 14.00,
        image: 'assets/menu/risotto.jpg'
      },
      {
        name: 'Tiramisú Clásico',
        description: 'Postre tradicional italiano con café.',
        price: 6.00,
        image: 'assets/menu/tiramisu.jpg'
      }
      // …añade más platos según tu menú
    ];
  }
}
