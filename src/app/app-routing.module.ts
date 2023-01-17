
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    },
    {
        path: 'skill',
        loadChildren: () => import('./views/skills/skills.module').then(m => m.SkillsModule),
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
