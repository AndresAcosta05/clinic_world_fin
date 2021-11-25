import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspecialidadMedicoPage } from './especialidad-medico.page';

const routes: Routes = [
  {
    path: '',
    component: EspecialidadMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialidadMedicoPageRoutingModule {}
