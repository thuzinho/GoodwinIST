import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Class } from "../model/class";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProgramService {

  constructor(private http: Http) {
    console.log('created program service');
  }

  getClass(id: string) {
    return this.getClasses()
      .map(classes => classes.find(classes => classes.id === id));
  }

  getClasses() {
    return this.http
      .get('api/program.json')
      .map(
        (response:Response) =><Class[]>response.json().data
        );

  }
}
