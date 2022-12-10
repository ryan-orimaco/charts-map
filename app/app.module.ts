import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { TaskbarComponent } from './worldmap/taskbar/taskbar.component';

//import { spotifyService } from './api/spotify-token.service';

@NgModule({
  declarations: [
    AppComponent,
    WorldmapComponent,
    TaskbarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent, WorldmapComponent, TaskbarComponent]
})
export class AppModule { }
