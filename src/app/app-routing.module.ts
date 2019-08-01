import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'excel2json',
    pathMatch: 'full'
  },
  {
    path: 'excel2json',
    loadChildren: './modules/excel2json/excel2json.module#Excel2jsonModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
