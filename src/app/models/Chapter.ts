import {Usuario} from "./Usuario";

export interface Chapter {

  id: number
  chapter_nome: string
  chapter_descricao: string
  chapter_status: number
  usuario_id: Usuario
}
