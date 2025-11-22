import { Routes } from '@angular/router';
import { PublicTemplate } from './+pages/+public/public-template/public-template';
import { PrivateTemplate } from './+pages/+private/private-template/private-template';
import { HomePage } from './+pages/+public/home-page/home-page';
import { AboutPage } from './+pages/+public/about-page/about-page';
import { LoginPage } from './+pages/+public/login-page/login-page';
import { ProductPage } from './+pages/+public/product-page/product-page';
import * as productPagePrivate from './+pages/+private/product-page/product-page';
import { ContactPage } from './+pages/+public/contact-page/contact-page';
import { DashboardPage } from './+pages/+private/dashboard-page/dashboard-page';
import { OrdersPage } from './+pages/+private/orders-page/orders-page';
import { UsersPage } from './+pages/+private/users-page/users-page';

export const routes: Routes = [
   {path:'public',component:PublicTemplate,children:[
    {path:'home',component:HomePage},
    {path:'about',component:AboutPage},
    {path:'login',component:LoginPage},
    {path:'prouduct',component:ProductPage},
    {path:'contact',component:ContactPage},
    {path:'',redirectTo:'hpme',pathMatch:'prefix'},
    {path:'**',redirectTo:'home'},
   ]},
   {path:'private',component:PrivateTemplate,children:[
    {path:'dashboard',component:DashboardPage},
    {path:'order',component:OrdersPage},
    {path:'users',component:UsersPage},
    {path:'product',component:productPagePrivate.ProductPage},
    {path:'',redirectTo:'DashboardPage',pathMatch:'prefix'},
    {path:'**',redirectTo:'DashboardPage'}
   ]},
   {path:'',redirectTo:'public',pathMatch:'full'},
   {path:'**',redirectTo:'public'},
];
