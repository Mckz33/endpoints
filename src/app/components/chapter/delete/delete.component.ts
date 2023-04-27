import { Component } from '@angular/core';
import {Chapter} from "../../../models/Chapter";
import {ChapterService} from "../../../services/chapter.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  chapter: Chapter =
    {
      id: null as unknown as number,
      nome: ""
    }
  constructor(private chapterService: ChapterService) {
  }
  deletarChapter() {
      this.chapterService.delete(this.chapter.id).subscribe(() => {
        console.log("Deletado com sucesso!")
      })
  }
}
