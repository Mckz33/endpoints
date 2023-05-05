import {Usuario} from "./Usuario";

export interface Chapter {

  id: number;
  nome: string;
  descricao: string;
  status: string;
  usuario_id: Usuario;
}
