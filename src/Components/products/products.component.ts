import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../Core/Services/products.service';
import { Product } from '../../Core/Interfaces/product';
import { ProductCardComponent } from "../../Shared/UI/product-card/product-card.component";

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  private _ProductsService = inject(ProductsService);
  products : Product[] = [];
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._ProductsService.getProducts(1).subscribe({
      next : (res) => {
        this.products = res.data;
      },
      error : () => {

      }
    })
  }
}
