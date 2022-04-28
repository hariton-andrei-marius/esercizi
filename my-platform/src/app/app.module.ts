import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BodyComponent } from './shared/components/body/body.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AppPageComponent } from './shared/components/app-page/app-page.component';
import { AboutComponent } from './shared/components/about/about.component';
import { MapsComponent } from './shared/utils/maps/maps.component';
import { NotesComponent } from './shared/utils/notes/notes.component';
import { ApplicationsService } from './shared/services/applications.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    DashboardComponent,
    AppPageComponent,
    AboutComponent,
    MapsComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ApplicationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
