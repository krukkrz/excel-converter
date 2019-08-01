import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Excel2jsonComponent } from './excel2json/excel2json.component';

const routes: Routes = [
    {
        path: '',
        component: Excel2jsonComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})
export class Excel2jsonRouting{}