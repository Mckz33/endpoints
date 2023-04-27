import {Chapter} from "./Chapter";
import {Usuario} from "./Usuario";

export interface ChapterAssunto {

  id?: number;
  descricao: string;
  status: number;
  chapter: Chapter;
  usuario: Usuario;
}
