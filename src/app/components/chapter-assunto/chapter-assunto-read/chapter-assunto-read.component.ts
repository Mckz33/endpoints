import { Component } from '@angular/core';
import {ChapterAssunto} from "../../../models/Chapter-assunto";
import {ChapterAssuntoService} from "../../../services/chapter-assunto.service";

@Component({
  selector: 'app-chapter-assunto-read',
  templateUrl: './chapter-assunto-read.component.html',
  styleUrls: ['./chapter-assunto-read.component.css']
})
export class ChapterAssuntoReadComponent {

  chapterAssunto: ChapterAssunto = {
    id: null as unknown as number,
    descricao: "",
    status: null as unknown as number,
    chapter: {
      id: null as unknown as number,
      nome: "",
      descricao: "",
      status: "",
      usuario_id: {
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
        senacCoin: ""
      }
    },
    usuario: {
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
      senacCoin: ""
    }
  }

  constructor(private chapterAssuntoService: ChapterAssuntoService) {
  }

  obterTodos() {
    this.chapterAssuntoService.obterTodos().subscribe(todos => {
      this.chapterAssunto = todos
      console.log(todos)
    })
  }
}
