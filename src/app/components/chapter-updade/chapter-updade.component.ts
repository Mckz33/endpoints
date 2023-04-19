import {Component, OnInit} from '@angular/core';
import {ChapterService} from "../../services/chapter.service";
import {Chapter} from "../../models/chapter";

@Component({
  selector: 'app-chapter-updade',
  templateUrl: './chapter-updade.component.html',
  styleUrls: ['./chapter-updade.component.css']
})
export class ChapterUpdadeComponent {

  chapter: Chapter;
  constructor(private chapterService: ChapterService) {
    this.chapter = {
      chapter_nome: ""
    }
  }
}
