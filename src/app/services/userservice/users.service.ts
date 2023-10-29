import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

import { userLogin } from 'src/app/models/userLogin';

import { Alumno } from 'src/app/models/alumno';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  URL_SUPEBASE = 'https://ndroieqpblapcuoesdhr.supabase.co/rest/v1/'
  constructor(private _httpcliente: HttpClient) { }

  supebaseheards = new HttpHeaders()
    .set('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kcm9pZXFwYmxhcGN1b2VzZGhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyODY2MTUsImV4cCI6MjAxMjg2MjYxNX0.yIT6MJyBQ5ErLYH5aqPdpTw5reje0SpQmYpE4RoJI58')


  getLogin(UserLogin: userLogin): Observable<string | any> {
    return this._httpcliente.get<any>(this.URL_SUPEBASE + "Alumno?correo=eq." + UserLogin.usuario + "&password=eq." + UserLogin.password, { headers: this.supebaseheards }).pipe(
      map((user) => {
        console.log("Map", user[0])
        return user[0]
      }), catchError((err) => {
        console.log(err)
        return err;
      })
    )
  }

  //prueba

  AgregarAlumno(newUser: Alumno): Observable<any> {
    // Define los datos del nuevo usuario que deseas agregar
    console.log(newUser)
    return this._httpcliente.post<any>(this.URL_SUPEBASE + 'Alumno',newUser, { headers: this.supebaseheards }).pipe(
      catchError((error) => {
        console.error('Error al crear un nuevo usuario', error);
        return error;
      })
    );
  }

//get alumno
getPerfilAlumno(rut: string): Observable<Alumno | any> {
  return this._httpcliente.get<Alumno[]>(this.URL_SUPEBASE + "Alumno?Rut=eq." + rut, { headers: this.supebaseheards }).pipe(
    map((alumnos) => {
      console.log("Obtenido:", alumnos[0]);
      return alumnos[0];
    }),
    catchError((err) => {
      console.error('Error al obtener el perfil del alumno', err);
      return err;
    })
  );
}
getHorarioAlumno(rut: string): Observable<any> {
  return this._httpcliente.get<any>(this.URL_SUPEBASE + "Horarios?RutAlumno=eq." + rut, { headers: this.supebaseheards }).pipe(
    map((horarios) => {
      return horarios[0];  // Asumiendo que cada alumno tiene un solo horario. Ajustar si no es el caso.
    }),
    catchError((err) => {
      console.error('Error al obtener el horario del alumno', err);
      return err;
    })
  );
}
//Carrera
getCarrera(id: number | undefined){
  return this._httpcliente.get<any>(this.URL_SUPEBASE + 'Carrera?id_carrera=eq.'+ id, { headers: this.supebaseheards }).pipe(
  map((user) => {
      console.log("Map", user[0])
      return user[0]
    }), catchError((err) => {
      console.log(err)
      return err;
    })
  );
}

//Asignatura

getAsignaturas(rut: string | undefined){
  return this._httpcliente.get<any>(this.URL_SUPEBASE + 'Asignatura?rut_alumno=eq.'+ rut, { headers: this.supebaseheards }).pipe(   
    catchError((error) => {
      console.error('Error al encontrar asignatura', error);
      return error;
    })
  );
}

}



