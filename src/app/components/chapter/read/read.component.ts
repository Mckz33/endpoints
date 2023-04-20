import {Component, OnInit} from '@angular/core';
import {Chapter} from "../../../models/chapter";
import {ChapterService} from "../../../services/chapter.service";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit{
  ngOnInit(): void {
    this.chapterService.obterTodos().subscribe(todos => {
      this.chapter = todos
      console.log(todos)
    })
  }
  chapter: Chapter[] = [
    {chapter_nome: ""}
  ]
  constructor(private chapterService: ChapterService) {
  }
  obterTodos() {
    this.chapterService.obterTodos().subscribe(todos => {
      this.chapter = todos
      console.log(todos)
    })
  }
}
