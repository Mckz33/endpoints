import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateComponent} from './components/chapter/create/create.component';
import {ReadComponent} from './components/chapter/read/read.component';
import {UpdateComponent} from './components/chapter/update/update.component';
import {DeleteComponent} from './components/chapter/delete/delete.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {
  ChapterAssuntoComentarioCreateComponent
} from './components/chapter-assunto-comentario/chapter-assunto-comentario-create/chapter-assunto-comentario-create.component';
import {
  ChapterAssuntoComentarioReadComponent
} from './components/chapter-assunto-comentario/chapter-assunto-comentario-read/chapter-assunto-comentario-read.component';
import {
  ChapterAssuntoComentarioUpdateComponent
} from './components/chapter-assunto-comentario/chapter-assunto-comentario-update/chapter-assunto-comentario-update.component';
import {
  ChapterAssuntoComentarioDeleteComponent
} from './components/chapter-assunto-comentario/chapter-assunto-comentario-delete/chapter-assunto-comentario-delete.component';
import { ChapterAssuntoCreateComponent } from './components/chapter-assunto/chapter-assunto-create/chapter-assunto-create.component';
import { ChapterAssuntoReadComponent } from './components/chapter-assunto/chapter-assunto-read/chapter-assunto-read.component';
import { ChapterAssuntoUpdateComponent } from './components/chapter-assunto/chapter-assunto-update/chapter-assunto-update.component';
import { ChapterAssuntoDeleteComponent } from './components/chapter-assunto/chapter-assunto-delete/chapter-assunto-delete.component';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    ChapterAssuntoComentarioCreateComponent,
    ChapterAssuntoComentarioReadComponent,
    ChapterAssuntoComentarioUpdateComponent,
    ChapterAssuntoComentarioDeleteComponent,
    ChapterAssuntoCreateComponent,
    ChapterAssuntoReadComponent,
    ChapterAssuntoUpdateComponent,
    ChapterAssuntoDeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
