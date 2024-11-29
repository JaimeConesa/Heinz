import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ProductosComponent } from './productos/productos.component';
import { RecetasComponent } from './recetas/recetas.component';
import { HistoriaComponent } from './historia/historia.component';
import { CultivadoComponent } from './cultivado/cultivado.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'cultivado', component: CultivadoComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'header', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
