import {Usuario} from "./Usuario";
import {Chapter} from "./Chapter";

export interface ChapterAssunto {

  chapter_assunto_id: number
  chapter_assunto_descricao: string
  chapter_assunto_contador_visualizacao: number
  chapter_assunto_status: number
  chapter_id: Chapter
  usuario_id: Usuario

}
