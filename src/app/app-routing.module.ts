import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from "./components/chapter/create/create.component";
import {ReadComponent} from "./components/chapter/read/read.component";
import {UpdateComponent} from "./components/chapter/update/update.component";
import {DeleteComponent} from "./components/chapter/delete/delete.component";

const routes: Routes = [
  {path: "chapter/read", component: CreateComponent},
  {path: "chapter/create", component: ReadComponent},
  {path: "chapter/delete", component: UpdateComponent},
  {path: "chapter/update", component: DeleteComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
