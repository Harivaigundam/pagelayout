import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app.component';
import { HeaderComp } from './head-layout.component';
import { HomeComp } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { EventsComp } from './Events/Events.component';
import {BlogsComp} from './Blogs/blogs.component';
import {EnquiresComp} from './enquires/enquires.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [App, HeaderComp, HomeComp, EventsComp,BlogsComp,EnquiresComp],
  bootstrap: [App, HeaderComp],
})
export class AppModule {}
