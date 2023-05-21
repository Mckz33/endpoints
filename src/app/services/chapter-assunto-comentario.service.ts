import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChapterAssuntoComentario} from "../models/chapter-assunto-comentario";

@Injectable({
  providedIn: 'root'
})
export class ChapterAssuntoComentarioService {

  baseUrl = "http://localhost:3001/chapter"

  constructor(private http: HttpClient) {
  }

  obterTodos(): Observable<any> {
    return this.http.get<ChapterAssuntoComentario[]>(this.baseUrl)
  }

  criarChapterAssuntoComentario(chapterAssuntoComentario: ChapterAssuntoComentario): Observable<ChapterAssuntoComentario> {
    return this.http.post<ChapterAssuntoComentario>(this.baseUrl, chapterAssuntoComentario)
  }

  delete(id: ChapterAssuntoComentario): Observable<ChapterAssuntoComentario> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<ChapterAssuntoComentario>(url)
  }

  readById(id: string | null): Observable<ChapterAssuntoComentario> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<ChapterAssuntoComentario>(url)
  }

  update(chapterAssuntoComentario: ChapterAssuntoComentario): Observable<ChapterAssuntoComentario> {
    const url = `${this.baseUrl}/${chapterAssuntoComentario.chapter_assunto_comentario_id}`
    return this.http.put<ChapterAssuntoComentario>(url, chapterAssuntoComentario)
  }

}
