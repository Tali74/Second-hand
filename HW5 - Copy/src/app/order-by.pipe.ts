import { Pipe, PipeTransform } from '@angular/core';
import Product from './products/model/product.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Product[],order: "asc" | "desc" = "asc"): Product[] {
    return value.sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else if (order === "desc") {
        return b.price - a.price;
      }
      return 0;
    });
  }
}
