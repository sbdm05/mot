import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {}
  // eslint-disable-next-line @typescript-eslint/member-ordering
  //token!: number;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  private refreshCollection$: BehaviorSubject<any> = new BehaviorSubject<any>(
    ''
  );

  // attention sans le typage, on ne récupère pas la valeur dans le subscribe !!!!
  onSignUp(user): Observable<any> {
    console.log(user, 'user');
    return this.http.post<User>(`${this.urlApi}/api/v1/letters`, user);
  }

  onLogin(user): Observable<any> {
    // const token = localStorage.getItem('token');
    // let headers_object = new HttpHeaders().set(
    //   'Authorization',
    //   'Bearer ' + token
    // );
    console.log(user, 'user');
    return this.http.post<User>(`${this.urlApi}/api/v1/letters/login`, user);
    // ).pipe(
    //   catchError(async (err) => console.log(err))
    // );
    // return this.http.post<User>(

    // )
  }

  // je commente cette fonction pour des tests
  // getUser(token): Observable<any> {
  //   const headers = new HttpHeaders()
  //     .set('content-type', 'application/json')
  //     .set('Access-Control-Allow-Origin', '*')
  //     .set('Authorization', 'Bearer ' + token);

  //   return this.http.get('http://localhost:4000/api/v1/letters/user', {
  //     headers,
  //   });
  // }

  // getUser(token) {
  //   const headers = new HttpHeaders()
  //     .set('content-type', 'application/json')
  //     .set('Access-Control-Allow-Origin', '*')
  //     .set('Authorization', 'Bearer ' + token);
  //   this.token = token;
  //   this.refreshCollection(token, headers);
  //   return this.refreshCollection$;
  // }

  refreshCollection(token): Observable<any> {
    // console.log('depuis refreshcollection');
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + token);

    this.http
      .get(`${this.urlApi}/api/v1/letters/user`, {
        headers,
      })
      .subscribe((data) => {
        this.refreshCollection$.next(data);
        console.log(data, 'depuis refreshcollection');
      });
    return;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  collection(token) {
    console.log(token, 'toekn depuis collection');
    this.refreshCollection(token);
    return this.refreshCollection$;
  }

  // je comment cette fonction pour tester avec le behavior chaud
  updateUser(user, token): Observable<any> {
    return this.http.patch(`${this.urlApi}/api/v1/letters/user`, user).pipe(
      tap(() => {
        this.refreshCollection(token);
      })
    );
  }

  // refreshCollection(data): void {
  //   console.log('depuis refreshcollection', data);
  //   return this.refreshCollection$.next(data);
  // }

  // tentative avec refresh collection
  // updateUser(user): Observable<any> {
  //   return this.http
  //     .patch('http://localhost:4000/api/v1/letters/user', user)
  //     .pipe(
  //       tap(() => {
  //         this.refreshCollection(this.token);
  //       })
  //     );
  // }

  // saveInfos(infos): Observable<any>{
  //   console.log(infos, 'depuis')
  //    return this.http.patch('http://localhost:4000/api/v1/letters/create-application', infos);
  // }
  createApplication(user): Observable<any> {
    console.log(user, 'depuis');
    return this.http.patch(
      `${this.urlApi}/api/v1/letters/create-application`,
      user
    );
  }

  savedApplication(user, newValue, token): Observable<any> {
    //console.log('data depuis saved application');

    const data = Object.assign({});
    data.user = user;
    data.newValue = newValue;
    //console.log(data);
    return this.http
      .patch(`${this.urlApi}/api/v1/letters/saved-application`, data)
      .pipe(
        tap(() => {
          this.refreshCollection(token);
        })
      );
  }

  deleteApplication(user, letter, token): Observable<any> {
    const data = Object.assign({});
    data.user = user;
    data.toRemove = letter;
    return this.http
      .patch(`${this.urlApi}/api/v1/letters/delete-application`, data)
      .pipe(
        tap(() => {
          this.refreshCollection(token);
        })
      );
  }

  forgotPassword(email): Observable<any> {
    console.log(email, 'depuis service');
    return this.http.post(`${this.urlApi}/api/v1/letters/forgot-password`, {
      email,
    });
  }

  resetPassword(obj): Observable<any> {
    console.log('depuis service', obj);

    return this.http.post(`${this.urlApi}/api/v1/letters/reset-password/`, obj);
  }

  saveNewPassword(obj): Observable<any> {
    console.log(obj);

    return this.http.post(
      `${this.urlApi}/api/v1/letters/save-new-password`,
      obj
    );
  }

  // deleteUser(user: User): Observable<User>{
  //   return this.http.delete('')
  // }
}
