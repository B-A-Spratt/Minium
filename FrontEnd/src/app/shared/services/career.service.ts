import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// custom
import { Career } from '@app/shared/models/career.model';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  readonly rootUrl = "https://localhost:44346/api/careers";

  formData: Career;
  list: Career[];

  constructor(private http: HttpClient) { }

  postCareer() {
    return this.http.post(this.rootUrl, this.formData);
  }

  putCareer() {
    return this.http.put(this.rootUrl + '/' + this.formData.Id, this.formData);
  }

  deleteCareer(id) {
    return this.http.delete(this.rootUrl + '/' + id);
  }

  refreshList() {
    this.http.get(this.rootUrl)
      .toPromise()
      .then(r => this.list = r as Career[]);
  }
}
