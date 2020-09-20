import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerComponent } from './customer/customer.component';
import { MainComponent } from './layout/main/main.component';
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { AuthGuardService } from './guard/auth-guard.service';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { OrderComponent } from './order/order.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { PiechartComponent } from './piechart/piechart.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/chart', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "customer", component: CustomerComponent },
  { path: "category", component: CategoryComponent },
  { path: "product", component: ProductComponent },
  { path: "order", component: OrderComponent },
  { path: "chart", component: PiechartComponent },
  {
    path: 'category-add',
    component: CategoryAddComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  },
  {
    path: 'category-edit/:id',
    component: CategoryEditComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  },
  {
    path: "home", component: MainComponent,
    children: [
      { path: 'chart', component: PiechartComponent },
      { path: 'category', component: CategoryComponent },
      {
        path: 'category-add',
        component: CategoryAddComponent
      },
      {
        path: 'category-edit/:id',
        component: CategoryEditComponent
      },
      { path: 'product', component: ProductComponent },
      {
        path: 'product-add',
        component: ProductAddComponent
      },
      {
        path: 'product-edit/:id',
        component: ProductEditComponent
      },
      { path: 'order', component: OrderComponent },
      { path: 'customer', component: CustomerComponent },
      {
        path: 'customer-add',
        component: CustomerAddComponent
      },
      {
        path: 'customer-edit/:id',
        component: CustomerEditComponent
      },
      {
        path: 'order-add',
        component: OrderAddComponent
      },
      {
        path: 'order-edit/:id',
        component: OrderEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
