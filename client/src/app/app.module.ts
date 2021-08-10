import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';




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
import { TeamComponent } from './components/team/team.component';
import { SingleNewComponent } from './pages/single-new/single-new.component';
import { FeaturesComponent } from './components/features/features.component';
import { Team2Component } from './components/team2/team2.component';
import { IngenierieSdbComponent } from './pages/ingenierie-sdb/ingenierie-sdb.component';
import { IngenierieRdfComponent } from './pages/ingenierie-rdf/ingenierie-rdf.component';
import { IngenierieReComponent } from './pages/ingenierie-re/ingenierie-re.component';
import { IngenierieEaComponent } from './pages/ingenierie-ea/ingenierie-ea.component';
import { IngenierieCestComponent } from './pages/ingenierie-cest/ingenierie-cest.component';
import { IngenierieEdcComponent } from './pages/ingenierie-edc/ingenierie-edc.component';
import { SdeAuditeComponent } from './pages/sde-audite/sde-audite.component';
import { SdeGpcComponent } from './pages/sde-gpc/sde-gpc.component';
import { SdeAccompagneComponent } from './pages/sde-accompagne/sde-accompagne.component';
import { SdeModel3dComponent } from './pages/sde-model3d/sde-model3d.component';
import { SdeDdcComponent } from './pages/sde-ddc/sde-ddc.component';
import { AcdemieFormationComponent } from './pages/acdemie-formation/acdemie-formation.component';
import { AcademieCertifComponent } from './pages/academie-certif/academie-certif.component';
import { AcademieUtsComponent } from './pages/academie-uts/academie-uts.component';



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
    TeamComponent,
    SingleNewComponent,
    FeaturesComponent,
    Team2Component,
    IngenierieSdbComponent,
    IngenierieRdfComponent,
    IngenierieReComponent,
    IngenierieEaComponent,
    IngenierieCestComponent,
    IngenierieEdcComponent,
    SdeAuditeComponent,
    SdeGpcComponent,
    SdeAccompagneComponent,
    SdeModel3dComponent,
    SdeDdcComponent,
    AcdemieFormationComponent,
    AcademieCertifComponent,
    AcademieUtsComponent,

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
    MatFormFieldModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
