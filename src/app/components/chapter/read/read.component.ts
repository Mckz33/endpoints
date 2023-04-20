import { Component } from '@angular/core';
import {Chapter} from "../../../models/chapter";
import {ChapterService} from "../../../services/chapter.service";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  chapter: Chapter[] = []
  constructor(private chapterService: ChapterService) {
  }
  obterTodos() {
    this.chapterService.obterTodos().subscribe(todos => {
      this.chapter = todos
      console.log(todos)
    })
  }
}
