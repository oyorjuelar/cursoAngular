import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TracksPageComponent } from '@modules/tracks/pages/tracks-page/tracks-page.component';
import { TracksModule } from './modules/tracks/tracks.module';




const routes: Routes = [
  {
    path: 'auth', //TODO (Public) Login, Register, Forgot...
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
