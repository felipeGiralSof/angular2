import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const routes : Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'recargas',
    loadChildren: () => import('./recargas/recargas.module').then(m => m.RecargasModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
