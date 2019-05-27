import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductsListComponent, ProductDetailsComponent],
  providers: [HttpClientModule],
  imports: [
    CommonModule,
    RouterModule.forChild([
    { path: 'products', component: ProductsListComponent },
    { path: 'products/:id', component: ProductDetailsComponent },
    ]),
    SharedModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
