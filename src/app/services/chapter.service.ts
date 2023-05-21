import {Injectable} from '@angular/core';
import {Chapter} from "../models/Chapter";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChapterAssunto} from "../models/Chapter-assunto";

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  baseUrl = "http://localhost:3001/chapter"

  constructor(private http: HttpClient) {
  }

  obterTodos(): Observable<any> {
    return this.http.get<Chapter[]>(this.baseUrl)
  }

  criar(chapterAssunto: ChapterAssunto): Observable<Chapter> {
    return this.http.post<Chapter>(this.baseUrl, chapterAssunto)
  }

  delete(id: number | undefined): Observable<Chapter> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Chapter>(url)
  }
  readById(id: string | null): Observable<any>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Chapter>(url)
  }

  update(chapter: Chapter): Observable<Chapter> {
    const url = `${this.baseUrl}/${chapter.id}`
    return this.http.put<Chapter>(url, chapter)
  }
}

