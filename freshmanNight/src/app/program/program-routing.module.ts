import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramComponent } from "../program/program.component";
import { ClassComponent } from "./class/class.component";
import { ClassListComponent } from "./classlist/classList.component";

const routes: Routes = [
  {
    path: 'program',
    component: ProgramComponent,
    children: [
      { path: '', component: ClassListComponent },
      { path: ':id', component: ClassComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramRoutingModule { }
export const routedComponents = [
  ClassComponent,
  ClassListComponent
]
