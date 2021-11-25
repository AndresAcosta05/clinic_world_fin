import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecialidadMedicoPageRoutingModule } from './especialidad-medico-routing.module';

import { EspecialidadMedicoPage } from './especialidad-medico.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecialidadMedicoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EspecialidadMedicoPage]
})
export class EspecialidadMedicoPageModule {}
