import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Revenue } from './revenue.model';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {
selectedRevenue: Revenue;
revenues: Revenue[];
readonly baseURL = 'http://localhost:3000/api/revenues';

  constructor(private http: HttpClient) { }

  postRevenue(rev: Revenue) {
    return this.http.post(this.baseURL, rev);
  }

  getRevenueList() {
    return this.http.get(this.baseURL);
  }

  putRevenue(rev: Revenue) {
    return this.http.put(this.baseURL + `/${rev._id}`, rev);
  }

  deleteRevenue(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
