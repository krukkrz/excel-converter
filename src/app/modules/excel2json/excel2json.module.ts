import { NgModule } from '@angular/core';
import { Excel2jsonComponent } from './excel2json/excel2json.component';
import { Excel2jsonRouting } from './excel2json-routing.module';

@NgModule({
  declarations: [Excel2jsonComponent],
  imports: [Excel2jsonRouting],
})
export class Excel2jsonModule{}