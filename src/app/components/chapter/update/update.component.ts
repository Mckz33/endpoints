import {Component, OnInit} from '@angular/core';
import {ChapterService} from "../../../services/chapter.service";
import {Chapter} from "../../../models/Chapter";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

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

  constructor(private chapterService: ChapterService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // @ts-ignore
    const id = +this.activateRoute.snapshot.paramMap.get('id');
    this.chapterService.readById(id).subscribe(chapter => {
      this.chapter = chapter;
    })
  }

  updateChapter() {
    this.chapterService.update(this.chapter).subscribe(() => {
      console.log("Atualizado com sucesso!");
      this.router.navigate(["/chapter/read"]);
    })
  }

  cancel() {
    this.router.navigate(['/chapter/read']);
  }
}
