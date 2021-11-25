import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoggeadoGuard } from './cores/loggeado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./layout/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./layout/admin/admin.module').then( m => m.AdminPageModule),
    canActivate: [LoggeadoGuard]
  },
  {
    path: 'citas',
    loadChildren: () => import('./layout/citas/citas.module').then( m => m.CitasPageModule),
    canActivate: [LoggeadoGuard]
  },
  {
    path: 'cliente',
    loadChildren: () => import('./layout/cliente/cliente.module').then( m => m.ClientePageModule),
    canActivate: [LoggeadoGuard]
  },
  {
    path: 'especialidad',
    loadChildren: () => import('./layout/especialidad/especialidad.module').then( m => m.EspecialidadPageModule),
    canActivate: [LoggeadoGuard]
  },
  {
    path: 'medicos',
    loadChildren: () => import('./layout/medicos/medicos.module').then( m => m.MedicosPageModule),
    canActivate: [LoggeadoGuard]
  },
  {
    path: 'tipos-usuarios',
    loadChildren: () => import('./layout/tipos-usuarios/tipos-usuarios.module').then( m => m.TiposUsuariosPageModule),
    canActivate: [LoggeadoGuard]
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./layout/usuarios/usuarios.module').then( m => m.UsuariosPageModule),
    canActivate: [LoggeadoGuard]
  },
  {
    path: 'especialidad-medico',
    loadChildren: () => import('./layout/especialidad-medico/especialidad-medico.module').then( m => m.EspecialidadMedicoPageModule),
    canActivate: [LoggeadoGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
