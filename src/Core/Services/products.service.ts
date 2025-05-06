  import { HttpClient } from '@angular/common/http';
  import { Injectable, Inject, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
  import { isPlatformBrowser, isPlatformServer } from '@angular/common';
  import { Observable, of, tap } from 'rxjs';
  import { ProductRoot } from '../Interfaces/product';


  @Injectable({
    providedIn: 'root'
  })
  export class ProductsService {
    private isBrowser: boolean;
    private isServer: boolean;

    constructor(
      private http: HttpClient,
      private transferState: TransferState,
      @Inject(PLATFORM_ID) platformId: Object
    ) {
      this.isBrowser = isPlatformBrowser(platformId);
      this.isServer = isPlatformServer(platformId);
    }

    private getProductsKey(page: number) {
      return makeStateKey<any>(`products-page-${page}`);
    }

    getProducts(currentPage: number): Observable<ProductRoot> {
      const key = this.getProductsKey(currentPage);
      const url = `/api/v1/products?page=${currentPage}`;

      if (this.isServer) {
        // SSR: fetch and store in TransferState
        return this.http.get<ProductRoot>(url).pipe(
          tap(data => this.transferState.set(key, data))
        );
      }

      if (this.isBrowser && this.transferState.hasKey(key)) {
        const data = this.transferState.get(key, null);
        this.transferState.remove(key); // Cleanup
        return of(data);
      }

      // CSR: fallback if TransferState not available
      return this.http.get<ProductRoot>(url);
    }
  }