import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChapterAssunto} from "../models/Chapter-assunto";

@Injectable({
  providedIn: 'root'
})
export class ChapterAssuntoService {

  baseUrl = "http://localhost:3001/chapter"

  constructor(private http: HttpClient) {
  }

  obterTodos(): Observable<any> {
    return this.http.get<[ChapterAssunto]>(this.baseUrl)
  }

  criarChapter(chapterAssunto: ChapterAssunto): Observable<ChapterAssunto> {
    return this.http.post<ChapterAssunto>(this.baseUrl, chapterAssunto)
  }

  delete(id: number | undefined): Observable<ChapterAssunto> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<ChapterAssunto>(url)
  }

  readById(id: string | null): Observable<ChapterAssunto> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<ChapterAssunto>(url)
  }

  update(chapterAssunto: ChapterAssunto): Observable<ChapterAssunto> {
    const url = `${this.baseUrl}/${chapterAssunto.id}`
    return this.http.put<ChapterAssunto>(url, chapterAssunto)
  }
}
