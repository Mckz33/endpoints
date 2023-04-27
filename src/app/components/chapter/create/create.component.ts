import {Component} from '@angular/core';
import {Chapter} from "../../../models/Chapter";
import {ChapterService} from "../../../services/chapter.service";
import {Usuario} from "../../../models/Usuario";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  public chapter: Chapter =
    {
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

  criarChapter() {
    this.chapter.usuario_id = {userName: "Mario"}
    this.chapterService.criarChapter(this.chapter).subscribe(() => {
      console.log("Criado com sucesso!")
    })
  }

}
