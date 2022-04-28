import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './shared/components/about/about.component';
import { AppPageComponent } from './shared/components/app-page/app-page.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent },
  {path: "about", component: AboutComponent },
  {path: "app/:id", component: AppPageComponent },
  {path: "**", redirectTo: "dashboard" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
