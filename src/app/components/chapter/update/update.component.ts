import { Component } from '@angular/core';
import {ChapterService} from "../../../services/chapter.service";
import {Chapter} from "../../../models/chapter";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  chapter: Chapter = {
    chapter_nome: ""
  }
  constructor(private chapterService: ChapterService) {
  }
  updateChapter() {
    this.chapterService.update(this.chapter).subscribe(() => {
      console.log("Atualizado com sucesso!")
    })
  }
}
