import { NgModule } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { IntroComponent } from './intro/intro.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
    declarations: [
        TopbarComponent,
        IntroComponent
    ],
    imports: [
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatDividerModule
    ],
    exports: [
        TopbarComponent,
        IntroComponent
    ]
})
export class SharedModule{}