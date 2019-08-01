import { NgModule } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
    declarations: [
        TopbarComponent
    ],
    imports: [
        MatToolbarModule
    ],
    exports: [
        TopbarComponent
    ]
})
export class SharedModule{}