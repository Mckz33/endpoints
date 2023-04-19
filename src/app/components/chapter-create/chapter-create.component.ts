import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ChapterService} from "../../services/chapter.service";
import {Chapter} from "../../models/chapter";

@Component({
  selector: 'app-chapter-create',
  templateUrl: './chapter-create.component.html',
  styleUrls: ['./chapter-create.component.css']
})
export class ChapterCreateComponent implements OnInit{

  chapter: Chapter
  constructor(private http: HttpClient, private chapterService: ChapterService) {
    this.chapter = {
      chapter_nome: ""
    }
  }
  ngOnInit(): void {
    this.chapter.chapter_nome = "TESTANDO NEGIN"
    this.criarChapter()
  }
  criarChapter(){
    this.chapterService.criarChapter(this.chapter).subscribe(() => {
      console.log("Criado com sucesso!");
    })
  }

}
