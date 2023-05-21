import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Chapter} from "../models/Chapter";
import {Usuario} from "../models/Usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = "http://localhost:3001/chapter"
  constructor(private http: HttpClient) { }

  obterTodos(): Observable<any> {
    return this.http.get<Usuario[]>(this.baseUrl)
  }

  criarChapter(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario)
  }

  delete(id: number | undefined): Observable<Usuario> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Usuario>(url)
  }
  readById(id: string | null): Observable<Usuario>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Usuario>(url)
  }

  update(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/${usuario.id}`
    return this.http.put<Usuario>(url, usuario)
  }

}
