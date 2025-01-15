// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificarPicoPlacaComponent } from './components/verificar-pico-placa/verificar-pico-placa.component';

const routes: Routes = [
  { path: '', component: VerificarPicoPlacaComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
