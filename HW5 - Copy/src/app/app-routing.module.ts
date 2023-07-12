import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { AddNewComponent } from './products/components/add-new/add-new.component';
import { ProductComponent } from './products/components/product/product.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'add-new', component: AddNewComponent},
  {path: 'product/:id', component: ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
