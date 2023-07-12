import { Component, EventEmitter, Output } from '@angular/core';
import Product from '../../model/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent {
  product: Product = new Product();
  products: Product[] = []


  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.route.params.subscribe(params => {
      let id = params["id"];

      this.productService.delete(id).subscribe(data => {
        let product = data;
      })
    })
  }
  addPet(product: Product) {
    this.productService.post(product).subscribe(data => {
      this.products.push(data as Product);
    })
  }
}
