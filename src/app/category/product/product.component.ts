import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;
  private error: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.categoryService.getProducts()
      .then(products => {
        this.products = products;
        console.log('success');
      })
      .catch(error => {
        this.error = error;
        console.log('error :///');
      })
  }

}
