import { Component } from '@angular/core';
import {ChapterAssuntoComentario} from "../../../models/chapter-assunto-comentario";
import {ChapterAssuntoComentarioService} from "../../../services/chapter-assunto-comentario.service";

@Component({
  selector: 'app-chapter-assunto-comentario-delete',
  templateUrl: './chapter-assunto-comentario-delete.component.html',
  styleUrls: ['./chapter-assunto-comentario-delete.component.css']
})
export class ChapterAssuntoComentarioDeleteComponent {

  public chapterAssuntoComentario: ChapterAssuntoComentario = {
    chapter_assunto_comentario_id: null as unknown as number,
    chapter_assunto_comentario_texto: "",
    chapter_assunto_comentario_pai: null as unknown as number,
    chapter_assunto_comentario_data: new Date(),
    chapter_assunto_id: {
      chapter_assunto_id: null as unknown as number,
      chapter_assunto_descricao: "",
      chapter_assunto_contador_visualizacao: null as unknown as number,
      chapter_assunto_status: null as unknown as number,
      chapter_id: {
        id: null as unknown as number,
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
      },
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
        senacCoin: ""
      }
    },
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
      senacCoin: ""
    }
  }
  constructor(private chapterAssuntoComentarioService: ChapterAssuntoComentarioService) {
  }

  deletarChapter() {
    this.chapterAssuntoComentarioService.delete(this.chapterAssuntoComentario).subscribe(() => {
      console.log("Deletado com sucesso!")
    })
  }

}
