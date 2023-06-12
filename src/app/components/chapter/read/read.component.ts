import {Component, OnInit} from '@angular/core';
import {Chapter} from "../../../models/Chapter";
import {ChapterService} from "../../../services/chapter.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']

})
export class ReadComponent implements OnInit {

  chapters: Chapter[] = []

  displayedColumns = ['id', 'chapter_nome', 'chapter_descricao', 'chapter_status', 'usuario_id'];

  constructor(private chapterService: ChapterService, private router: Router) {
  }

  ngOnInit(): void {
    this.chapterService.obterTodos().subscribe(todos => {
      this.chapters = todos
      console.log(todos)
    })
  }

  obterTodos() {
    this.chapterService.obterTodos().subscribe(todos => {
      this.chapters = todos
      console.log(todos)
    })
  }

  navigateToProductCreate() {
    this.router.navigate(["/chapter/create"])
  }

  deletar() {
    this.router.navigate(["/chapter/delete"])
  }
}
