import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { TaskbarComponent } from './worldmap/taskbar/taskbar.component';

  const routes: Routes = [
  { path: '', redirectTo: '/worldmap', pathMatch: 'full' },
  { path: 'worldmap', component: WorldmapComponent },
  { path: 'taskbar', component: TaskbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
