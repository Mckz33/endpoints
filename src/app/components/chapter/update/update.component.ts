import { Component } from '@angular/core';
import {ChapterService} from "../../../services/chapter.service";
import {Chapter} from "../../../models/Chapter";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  chapter: Chapter =
    {
      id: null as unknown as number,
      descricao: "",
      nome: "",
      status: "",
      usuario_id:
        {
          userName: ""
        }
    }

  constructor(private chapterService: ChapterService) {
  }
  updateChapter() {
    this.chapterService.update(this.chapter).subscribe(() => {
      console.log("Atualizado com sucesso!")
    })
  }
}
