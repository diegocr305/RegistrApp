import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/models/Userlogin';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  URL_SUPEBASE ='https://ndroieqpblapcuoesdhr.supabase.co/rest/v1/'
  constructor( private _httpcliente: HttpClient) { }

  supebaseheards = new HttpHeaders()
      .set('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kcm9pZXFwYmxhcGN1b2VzZGhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyODY2MTUsImV4cCI6MjAxMjg2MjYxNX0.yIT6MJyBQ5ErLYH5aqPdpTw5reje0SpQmYpE4RoJI58')


  getLogin (UserLogin:UserLogin): Observable<string | any > {
    return this._httpcliente.get<any>(this.URL_SUPEBASE + "correo=eq."  +  UserLogin.correo  + "&contraseña=eq."  + UserLogin.contrasena, { headers: this.supebaseheards})

    ]

  }




}
