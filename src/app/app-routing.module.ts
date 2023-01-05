import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinimalistPageComponent } from './minimalist-page/minimalist-page.component';
import { ModernPageComponent } from './modern-page/modern-page.component';
import { RetroPageComponent } from './retro-page/retro-page.component';

const routes: Routes = [
  {
    path: 'minimalista',
    component: MinimalistPageComponent
  },
  {
    path: 'moderna',
    component: ModernPageComponent
  },
  {
    path: 'retro',
    component: RetroPageComponent
  },
  {
    path: '**',
    component: MinimalistPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
