import { Injectable } from '@angular/core';
import { Opinion } from "./opinion.model";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class OpinionService {
  //private apiUrl = "http://localhost/ali-api/";
  private apiUrl = "http://std.usermd.net/api/";
  constructor(private http: Http) { }

  getOpinions(): Observable<Opinion[]> {
    return this.http.get(this.apiUrl)
      .map((res) => res.json())
  }

  getLastOpinions(): Observable<Opinion[]> {
    return this.http.get(this.apiUrl + "?w=last")
      .map((res) => res.json())
  }

  create(opinion: Opinion) {
    return this.http.post(this.apiUrl + "addOpinion.php", opinion).map((response: Response) => response.json());
  }

}