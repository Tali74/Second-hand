import { Component, Pipe} from '@angular/core';
import Product from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products: Product[] = [];

orderBy: "asc" | "desc" = "asc";


constructor(private productService: ProductService, private router: Router) {
 this.productService.get().subscribe(data => {
    this.products = data as Product[];
  })
}
delete(id: number) {
  this.productService.delete(id).subscribe(data => {
    this.products = this.products.filter(p=>p.id != id);
  })
}


}
