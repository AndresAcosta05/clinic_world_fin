import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiposUsuariosPageRoutingModule } from './tipos-usuarios-routing.module';

import { TiposUsuariosPage } from './tipos-usuarios.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiposUsuariosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TiposUsuariosPage]
})
export class TiposUsuariosPageModule {}
