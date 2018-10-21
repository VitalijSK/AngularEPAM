import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IUser from '../../interfaces/user';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>('https://localhost:3000/api/users');
  }
  getCurrectName (name: string) : Observable<Boolean> {
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      const data  = { checkName: name };
      const dat = { name: 'name',
      password: '1234', 
     dateOfBirth: '', 
     information: '' };
     this.http.post('https://localhost:3000/api/users', dat, httpOptions).subscribe(
         data => {
             console.log(data);
         }
         );
    return this.http.post<Boolean>('https://localhost:3000/api/users/checkName', data, httpOptions);
  }
}

