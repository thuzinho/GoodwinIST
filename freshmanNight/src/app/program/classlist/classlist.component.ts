import { Component, OnInit } from '@angular/core';
import { ProgramService } from "../../program/program.service";
import { Class } from "../../model/class";

@Component({
  selector: 'app-classList',
  templateUrl: './classList.component.html',
  styleUrls: ['./classList.component.css']
})
export class ClassListComponent implements OnInit {
  classes: Class[];
  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.classes = [];
    this.programService.getClasses()
      .subscribe(classes => {
        this.classes = classes
        console.log(this.classes);
      });
  }
}
