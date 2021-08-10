import { NgModule }                       from '@angular/core';
import { RouterModule, Routes }           from '@angular/router';
import { ContactComponent }               from './pages/contact/contact.component';
import { HomeComponent }                  from './pages/home/home.component';
import { ActualiteComponent }             from './pages/actualite/actualite.component';
import { ProductsComponent }              from './pages/products/products.component';
import { AdminComponent }                 from './pages/admin/admin.component';
import { DashboardComponent }             from './pages/dashboard/dashboard.component';
import { AdminProductsComponent }         from './pages/admin-products/admin-products.component';
import { MainProductComponent }           from './pages/main-product/main-product.component';
import { MainAddproductComponent }        from './pages/main-addproduct/main-addproduct.component';
import { MainEditproductComponent }       from './pages/main-editproduct/main-editproduct.component';
import { MainActualiteComponent }         from './pages/main-actualite/main-actualite.component';
import { MainAddnewsComponent }           from './pages/main-addnews/main-addnews.component';
import { MainEditnewsComponent }          from './pages/main-editnews/main-editnews.component';
import { SingleNewComponent }             from './pages/single-new/single-new.component';
import {FeaturesComponent}                from './components/features/features.component';
import { Team2Component }                 from './components/team2/team2.component';
import { IngenierieSdbComponent }         from './pages/ingenierie-sdb/ingenierie-sdb.component';
import { IngenierieRdfComponent }         from './pages/ingenierie-rdf/ingenierie-rdf.component';
import { IngenierieReComponent }          from './pages/ingenierie-re/ingenierie-re.component';
import { IngenierieEaComponent }          from './pages/ingenierie-ea/ingenierie-ea.component';
import { IngenierieCestComponent }        from './pages/ingenierie-cest/ingenierie-cest.component';
import { IngenierieEdcComponent }         from './pages/ingenierie-edc/ingenierie-edc.component';
import { SdeAuditeComponent }             from './pages/sde-audite/sde-audite.component';
import { SdeGpcComponent }                from './pages/sde-gpc/sde-gpc.component';
import { SdeAccompagneComponent  }        from './pages/sde-accompagne/sde-accompagne.component';
import { SdeModel3dComponent }            from './pages/sde-model3d/sde-model3d.component';
import {  SdeDdcComponent  }              from './pages/sde-ddc/sde-ddc.component';
import { AcdemieFormationComponent }      from './pages/acdemie-formation/acdemie-formation.component';
import { AcademieCertifComponent }        from './pages/academie-certif/academie-certif.component';
import { AcademieUtsComponent }           from './pages/academie-uts/academie-uts.component';

const routes: Routes = [
  {path : ''                   , component : HomeComponent          },
  {path : 'Contact'            , component : ContactComponent       },
  {path : 'Actualite'          , component : ActualiteComponent     },
  {path : 'Solutions'          , component : ProductsComponent      },
  {path : 'admin'              , component : AdminComponent         },
  {path : 'dashboard'          , component : DashboardComponent     },
  {path : 'main'               , component : AdminProductsComponent },
  {path : 'main-products'      , component : MainProductComponent   },
  {path : 'main-addproduct'    , component : MainAddproductComponent},
  {path : 'editproduct/:id_'   , component : MainEditproductComponent},
  {path : 'main-actualite'     , component : MainActualiteComponent},
  {path : 'main-addnews'       , component : MainAddnewsComponent},
  {path : 'editnews/:id'       , component : MainEditnewsComponent},
  {path : 'news/:id'           , component : SingleNewComponent },
  {path : 'test'               , component : FeaturesComponent},
  {path : 'test2'              , component : Team2Component},
  {path : 'ingenierie/sdb'     , component : IngenierieSdbComponent},
  {path : 'ingenierie/rdf'     , component : IngenierieRdfComponent},
  {path : 'ingenierie/re'      , component : IngenierieReComponent},
  {path : 'ingenierie/ea'      , component : IngenierieEaComponent},
  {path : 'inegnierie/cest'    , component : IngenierieCestComponent},
  {path : 'ingenierie/edc'     , component : IngenierieEdcComponent},
  {path : 'sde-bim/audite'     , component : SdeAuditeComponent},
  {path : 'sde-bim/gpc'        , component : SdeGpcComponent},
  {path : 'sde-bim/accompagne' , component : SdeAccompagneComponent },
  {path : 'sde-bim/model3d'    , component : SdeModel3dComponent},
  {path : 'sde-bim/ddc'        , component : SdeDdcComponent },
  {path : 'academie/formation' , component : AcdemieFormationComponent},
  {path : 'academie/certification' , component : AcademieCertifComponent},
  {path : 'academie/uts'        , component : AcademieUtsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
