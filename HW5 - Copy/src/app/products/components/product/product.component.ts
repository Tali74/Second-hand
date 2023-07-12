import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from '../../model/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: Product = new Product();
  products: Product[] = []


  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.route.params.subscribe(params => {
      let id = params["id"];

      this.productService.getById(id).subscribe(data => {
        this.product = data;
      })
    })
   
  }
  delete(id: number) {
    this.productService.delete(id).subscribe(data => {
      this.products = this.products.filter(p=>p.id != id);
    })
  }
}