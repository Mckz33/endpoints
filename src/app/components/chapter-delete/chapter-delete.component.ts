import {Component, OnInit} from '@angular/core';
import {ChapterService} from "../../services/chapter.service";
import {Chapter} from "../../models/chapter";

@Component({
  selector: 'app-chapter-delete',
  templateUrl: './chapter-delete.component.html',
  styleUrls: ['./chapter-delete.component.css']
})
export class ChapterDeleteComponent {

  chapter: Chapter
  constructor(private chapterService: ChapterService) {
    this.chapter = {
      chapter_nome: ""
    }
  }

  deleteChapter() {
    this.chapterService.delete(this.chapter.chapter_id).subscribe(() => {
      console.log("Deletado com sucesso")
    })
  }

}
