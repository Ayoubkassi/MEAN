import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ActualiteComponent } from './pages/actualite/actualite.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'Contact' , component : ContactComponent},
  {path : 'Actualite' , component : ActualiteComponent},
  {path : 'Solutions' , component : ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
