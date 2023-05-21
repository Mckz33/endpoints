import { Component } from '@angular/core';
import {ChapterService} from "../../../services/chapter.service";
import {Chapter} from "../../../models/Chapter";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

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

  constructor(private chapterService: ChapterService) {
  }
  updateChapter() {
    this.chapterService.update(this.chapter).subscribe(() => {
      console.log("Atualizado com sucesso!")
    })
  }
}
