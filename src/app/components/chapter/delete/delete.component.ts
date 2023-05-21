import { Component } from '@angular/core';
import {Chapter} from "../../../models/Chapter";
import {ChapterService} from "../../../services/chapter.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  public chapter: Chapter = {
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
  }
  constructor(private chapterService: ChapterService) {
  }
  deletarChapter() {
      this.chapterService.delete(this.chapter).subscribe(() => {
        console.log("Deletado com sucesso!")
      })
  }
}
