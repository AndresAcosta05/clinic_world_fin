import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposUsuariosPage } from './tipos-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: TiposUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposUsuariosPageRoutingModule {}
