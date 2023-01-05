import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinimalistPageComponent } from './minimalist-page/minimalist-page.component';
import { ModernPageComponent } from './modern-page/modern-page.component';
import { RetroPageComponent } from './retro-page/retro-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MinimalistPageComponent,
    ModernPageComponent,
    RetroPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
