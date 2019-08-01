import { NgModule } from '@angular/core';
import { Excel2jsonComponent } from './excel2json/excel2json.component';
import { Excel2jsonRouting } from './excel2json-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


@NgModule({
  declarations: [Excel2jsonComponent],
  imports: [
      Excel2jsonRouting,
      MatCardModule,
      MatGridListModule,
      NgxJsonViewerModule
    ],
})
export class Excel2jsonModule{}