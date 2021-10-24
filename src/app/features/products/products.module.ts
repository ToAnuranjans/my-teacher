import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProductPage } from './edit-product/edit-product.page';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListPage } from './product-list/product-list.page';
import { ProductDetailsPage } from './product-details/product-details.page';

const routes: Routes = [
  {
    path: 'all',
    component: ProductListPage
  },
  {
    path: ':id/edit',
    component: EditProductPage
  },
  {
    path: ':id/details',
    component: ProductDetailsPage
  },
  {
    path: '',
    redirectTo: 'all'
  }
];

@NgModule({
  declarations: [
    ProductListPage,
    ProductDetailsPage,
    EditProductPage
  ],
  imports: [
    IonicModule.forRoot(),
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ProductsModule { }
