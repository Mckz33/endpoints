import {Component} from '@angular/core';
import {ChapterAssunto} from "../../../models/Chapter-assunto";
import {ChapterAssuntoService} from "../../../services/chapter-assunto.service";

@Component({
  selector: 'app-chapter-assunto-create',
  templateUrl: './chapter-assunto-create.component.html',
  styleUrls: ['./chapter-assunto-create.component.css']
})
export class ChapterAssuntoCreateComponent {

  public chapterAssunto: ChapterAssunto = {
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
  }

  constructor(private chapterAssuntoService: ChapterAssuntoService) {
  }

  criarChapterAssunto(chapterAssunto: ChapterAssunto) {
    this.chapterAssuntoService.criar(this.chapterAssunto).subscribe(() => {
      console.log()
    })
  }

}
