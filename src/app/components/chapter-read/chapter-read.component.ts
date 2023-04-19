import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Chapter} from "../../models/chapter";
import {ChapterService} from "../../services/chapter.service";

@Component({
  selector: 'app-chapter-read',
  templateUrl: './chapter-read.component.html',
  styleUrls: ['./chapter-read.component.css']
})
export class ChapterReadComponent implements OnInit{

  chapter: Chapter[]
  constructor(private chapterService: ChapterService, private http: HttpClient) {
    this.chapter = []
  }
  ngOnInit(): void {
    this.chapterService.obterTodos().subscribe(chapter => {
      this.chapter = chapter
      console.log(chapter)
    })
  }

}
