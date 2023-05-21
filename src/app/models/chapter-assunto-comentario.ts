import {ChapterAssunto} from "./Chapter-assunto";
import {Usuario} from "./Usuario";

export interface ChapterAssuntoComentario {

  chapter_assunto_comentario_id: number
  chapter_assunto_comentario_texto: string
  chapter_assunto_comentario_pai: number
  chapter_assunto_comentario_data: Date
  chapter_assunto_id: ChapterAssunto
  usuario_id: Usuario
}
