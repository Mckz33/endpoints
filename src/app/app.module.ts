import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelsComponent } from './models/models.component';
import { ChapterComponent } from './models/chapter/chapter.component';
import { ChapterCreateComponent } from './components/chapter-create/chapter-create.component';
import { ChapterReadComponent } from './components/chapter-read/chapter-read.component';
import { ChapterUpdadeComponent } from './components/chapter-updade/chapter-updade.component';
import { ChapterDeleteComponent } from './components/chapter-delete/chapter-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelsComponent,
    ChapterComponent,
    ChapterCreateComponent,
    ChapterReadComponent,
    ChapterUpdadeComponent,
    ChapterDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
