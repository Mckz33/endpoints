import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from "./components/chapter/create/create.component";
import {ReadComponent} from "./components/chapter/read/read.component";
import {UpdateComponent} from "./components/chapter/update/update.component";
import {DeleteComponent} from "./components/chapter/delete/delete.component";

const routes: Routes = [
  {path: "chapter/read", component: ReadComponent},
  {path: "chapter/create", component: CreateComponent},
  {path: "chapter/delete/:id", component: DeleteComponent},
  {path: "chapter/update/:id", component: UpdateComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
