import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';


@NgModule({
  declarations: [TracksPageComponent],
  imports: [
    CommonModule,
    TracksRoutingModule
  ],
  exports: [TracksPageComponent]
})
export class TracksModule { }