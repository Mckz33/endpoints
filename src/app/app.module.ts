import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { CreateComponent } from './components/chapter/create/create.component';
import { ReadComponent } from './components/chapter/read/read.component';
import { UpdateComponent } from './components/chapter/update/update.component';
import { DeleteComponent } from './components/chapter/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
