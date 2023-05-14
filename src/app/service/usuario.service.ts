import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {GLOBAL} from './GLOBAL'
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url;

  constructor(private _http:HttpClient,
    ) {
    this.url=GLOBAL.url
   }

   listarUusuarios():Observable<any>{
    let headers=new HttpHeaders().set('content-type','aplication/json');
    return this._http.get(this.url+'todos',{headers:headers});

   }
}
