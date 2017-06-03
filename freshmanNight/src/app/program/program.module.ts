import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routedComponents, ProgramRoutingModule } from './program-routing.module';
import { ProgramComponent } from './program.component';
import { ProgramService } from "../program/program.service";

@NgModule({
  imports: [
    CommonModule,
    ProgramRoutingModule
  ],
  declarations: [routedComponents, ProgramComponent]
  , providers: [ProgramService]
})
export class ProgramModule { }
