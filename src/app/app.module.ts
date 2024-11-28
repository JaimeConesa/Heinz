import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProductosComponent } from './productos/productos.component';
import { RecetasComponent } from './recetas/recetas.component';
import { HistoriaComponent } from './historia/historia.component';
import { CultivadoComponent } from './cultivado/cultivado.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ProductosComponent,
    RecetasComponent,
    HistoriaComponent,
    CultivadoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
