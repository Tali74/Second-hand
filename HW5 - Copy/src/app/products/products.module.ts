import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { OrderByPipe } from '../order-by.pipe';



@NgModule({
  declarations: [
    ProductComponent,
    AddNewComponent,
    ProductListComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  exports: [
    ProductListComponent

  ]
})
export class ProductsModule { }
