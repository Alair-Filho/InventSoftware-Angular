import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipamentosComponent } from './pages/equipamentos/equipamentos.component';

export const routes: Routes = [
  { path: '', component: EquipamentosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
