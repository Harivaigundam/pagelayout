import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComp } from './home/home.component';
import { EventsComp } from './Events/Events.component';
import {BlogsComp} from './Blogs/blogs.component';
import {EnquiresComp} from './enquires/enquires.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComp },
  { path: 'Events', component: EventsComp },
  {path: 'blogs', component:BlogsComp},
  {path: 'enquires', component: EnquiresComp},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
