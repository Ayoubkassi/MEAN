import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import { LandingComponent } from './components/landing/landing.component';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicesComponent } from './components/services/services.component';
import { ServiceItemComponent } from './components/service-item/service-item.component';
import { SupportComponent } from './components/support/support.component';
import { SupportItemComponent } from './components/support-item/support-item.component';
import { InfoComponent } from './components/info/info.component';
import { FooterComponent } from './components/footer/footer.component';
import { MessageComponent } from './components/message/message.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ActualiteComponent } from './pages/actualite/actualite.component';
import { NewsBoxComponent } from './components/news-box/news-box.component';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { MainProductComponent } from './pages/main-product/main-product.component';
import { MainAddproductComponent } from './pages/main-addproduct/main-addproduct.component';
import { MainEditproductComponent } from './pages/main-editproduct/main-editproduct.component';
import { MainActualiteComponent } from './pages/main-actualite/main-actualite.component';
import { MainAddnewsComponent } from './pages/main-addnews/main-addnews.component';
import { MainEditnewsComponent } from './pages/main-editnews/main-editnews.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    LandingComponent,
    ButtonComponent,
    ServiceItemComponent,
    ServicesComponent,
    SupportComponent,
    SupportItemComponent,
    InfoComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    MessageComponent,
    InputFormComponent,
    ProductsComponent,
    ActualiteComponent,
    NewsBoxComponent,
    ProductBoxComponent,
    AdminComponent,
    DashboardComponent,
    AdminProductsComponent,
    MainProductComponent,
    MainAddproductComponent,
    MainEditproductComponent,
    MainActualiteComponent,
    MainAddnewsComponent,
    MainEditnewsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC_DhLt9pwH4WWwzS9Vp1OLU2Yh8Wo9Dno'
    }),
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
