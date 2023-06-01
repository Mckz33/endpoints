import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Chapter} from "../../../models/Chapter";
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
  public chapter: Chapter[] = [{
    chapter_id: null as unknown as number,
    chapter_nome: "",
    chapter_descricao: "",
    chapter_status: null as unknown as number,
    usuario_id: {
      id: "",
      userName: "",
      normalizedUserName: "",
      normalizedEmail: "",
      emailConfirmed: false,
      passwordHash: "",
      securityStamp: "",
      concurrencyStamp: "",
      phoneNumber: "",
      phoneNumberConfirmed: false,
      twoFactorEnabled: false,
      lockoutEnd: new Date(),
      lockoutEnabled: false,
      accessFailedCount: null as unknown as number,
      cpf: "",
      foto: "",
      nomeCompleto: "",
      apelido: "",
      email: "",
      dataNascimento: new Date(),
      telefone: "",
      dataCadastro: new Date(),
      status: null as unknown as number,
      senacCoin: "",
    }
  }]

  displayedColumns = ['chapter_id', 'chapter_nome', 'chapter_descricao', 'chapter_status', 'usuario_id'];
  constructor(private chapterService: ChapterService) {
  }
  obterTodos() {
    this.chapterService.obterTodos().subscribe(todos => {
      this.chapter = todos
      console.log(todos)
    })
  }
}
