import { Component } from '@angular/core';
import {Chapter} from "../../../models/chapter";
import {ChapterService} from "../../../services/chapter.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  chapter: Chapter = {
    chapter_nome: ""
  }
  constructor(private chapterService: ChapterService) {
  }
  deletarChapter() {
      this.chapterService.delete(this.chapter.chapter_id).subscribe(() => {
        console.log("Deletado com sucesso!")
      })
  }
}
