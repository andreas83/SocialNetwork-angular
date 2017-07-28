import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { Content }           from './content';

@Injectable()
export class ContentService {

  constructor(private http: Http) { }

  get(term: string): Observable<Content[]> {
      return this.http
                 .get(`http://localhost:3000/api/Contents`)
                 .map(response => response.json().data as Content[]);
  }

}
