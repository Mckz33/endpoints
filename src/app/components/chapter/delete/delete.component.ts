import {Component, OnInit} from '@angular/core';
import {Chapter} from "../../../models/Chapter";
import {ChapterService} from "../../../services/chapter.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{

  public chapter: Chapter = {
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
  }

  ngOnInit() {
    // @ts-ignore
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.chapterService.readById(id).subscribe(chapter => {
      this.chapter = chapter
    })
  }

  constructor(private chapterService: ChapterService, private router: Router, private activatedRoute: ActivatedRoute) {
  }
  deletarChapter() {
      this.chapterService.delete(this.chapter.id).subscribe(() => {
        console.log("Deletado com sucesso!")
        this.router.navigate(["/chapter/read"])
      })
  }
  cancel() {
    this.router.navigate(["/chapter/read"])
  }
}
