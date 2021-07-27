import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ActualiteComponent } from './pages/actualite/actualite.component';
import { ProductsComponent } from './pages/products/products.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { MainProductComponent } from './pages/main-product/main-product.component';
import { MainAddproductComponent } from './pages/main-addproduct/main-addproduct.component';
import { MainEditproductComponent } from './pages/main-editproduct/main-editproduct.component';

const routes: Routes = [
  {path : ''          ,     component : HomeComponent          },
  {path : 'Contact'   ,     component : ContactComponent       },
  {path : 'Actualite' ,     component : ActualiteComponent     },
  {path : 'Solutions' ,     component : ProductsComponent      },
  {path : 'admin'     ,     component : AdminComponent         },
  {path : 'dashboard' ,     component : DashboardComponent     },
  {path : 'main'      ,     component : AdminProductsComponent },
  {path : 'main-products',  component : MainProductComponent   },
  {path : 'main-addproduct',component : MainAddproductComponent},
  {path : 'editproduct/:id_',component : MainEditproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
