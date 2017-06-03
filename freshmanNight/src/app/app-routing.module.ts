import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { TtacComponent } from "./ttac/ttac.component";
import { StaffComponent } from "./staff/staff.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'about', component: AboutComponent },
  { path: 'program', loadChildren: 'app/program/program.module#ProgramModule' },
  { path: 'staff', component: StaffComponent },
  { path: 'ttac', component: TtacComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  PageNotFoundComponent,
  AboutComponent,
  StaffComponent,
  TtacComponent,
  ContactComponent
]
