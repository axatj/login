import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  users: any[] = [];
  products: any[]=[];

  constructor(private ProductListService:ProductListService , private router: Router) {}

  ngOnInit() {
    this.ProductListService.getProducts().subscribe(data => {
      this.users = data;
      this.products=data;
    });
  }

  showProductDetails(userId: number) {
    this.router.navigate(['/product', userId]);
  }

}
