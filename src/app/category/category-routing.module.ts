import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { ProductComponent } from './product/product.component';

const categoryRoutes: Routes = [
  {
    path: 'categories',
    component: CategoryComponent
  },
  {
    path: 'products',
    component: ProductComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(categoryRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CategoryRoutingModule {
}
