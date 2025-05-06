import { Component, Input } from '@angular/core';
import { Product } from '../../../Core/Interfaces/product';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TitleSplicePipe } from '../../../Core/pipes/title-splice.pipe';

@Component({
  selector: 'app-product-card',
  imports: [NgClass,RouterLink,TitleSplicePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input({required : true}) product! : Product;
  @Input() heartClass! : string;

  AddRemoveWishList(id : string){

  }
  
}
