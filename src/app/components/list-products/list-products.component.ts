import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = [
    {id: 1, name: 'Coca Cola', description: 'Bebida con azucar', price: 4, stock: 200 },
    {id: 2, name: 'Corona', description: 'Bebida con alcohol', price: 5, stock: 300 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
