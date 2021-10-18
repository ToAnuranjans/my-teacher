import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProductPage } from './edit-product/edit-product.page';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListPage } from './product-list/product-list.page';

const routes: Routes = [
  {
    path: ':id/edit',
    component: EditProductPage
  },
  {
    path: 'all',
    component: ProductListPage
  },
  {
    path: '',
    redirectTo: 'all'
  }
];

@NgModule({
  declarations: [
    ProductListPage,
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
