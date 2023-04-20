import { Component } from '@angular/core';
import {Chapter} from "../../../models/chapter";
import {ChapterService} from "../../../services/chapter.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  chapter: Chapter[] = [
    {chapter_nome: ""}
  ]

  constructor(private chapterService: ChapterService) {
  }

  criarChapter() {
    this.chapterService.criarChapter(this.chapter).subscribe(() => {
      console.log("Criado com sucesso!")
    })
  }

}
