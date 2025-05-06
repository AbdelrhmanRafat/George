import { Component, inject, makeStateKey, OnInit, TransferState } from '@angular/core';
import { ProductsService } from '../../Core/Services/products.service';
import { Product } from '../../Core/Interfaces/product';
import { ProductCardComponent } from "../../Shared/UI/product-card/product-card.component";
import { isPlatformServer } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

interface ProductsResponse {
  data: Product[];
  [key: string]: any;
}

const PRODUCTS_KEY = makeStateKey<ProductsResponse>('products-data');

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  private _ProductsService = inject(ProductsService);
  private transferState = inject(TransferState);
  private platformId = inject(PLATFORM_ID);
  
  products: Product[] = [];
  isLoading = true;
  error: string | null = null;

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts() {
    // Check if we have data in TransferState (client-side)
    if (this.transferState.hasKey(PRODUCTS_KEY)) {
      const data = this.transferState.get(PRODUCTS_KEY, null);
      if (data) {
        this.products = data.data;
        this.isLoading = false;
        this.transferState.remove(PRODUCTS_KEY); // Clean up
        return;
      }
    }

    // If no data in TransferState, fetch from API
    this.getAllProducts();
  }

  private getAllProducts() {
    this.isLoading = true;
    this._ProductsService.getProducts(1).subscribe({
      next: (res: ProductsResponse) => {
        this.products = res.data;
        this.isLoading = false;
        
        // Store in TransferState if on server
        if (isPlatformServer(this.platformId)) {
          this.transferState.set(PRODUCTS_KEY, res);
        }
      },
      error: (err) => {
        this.error = 'Failed to load products. Please try again later.';
        this.isLoading = false;
        console.error('Error loading products:', err);
      }
    });
  }
}
