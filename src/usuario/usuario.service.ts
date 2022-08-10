import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService {
    private usuarios: Usuario[] = [];

    public cria(usuario: Usuario) {
        this.usuarios.push(usuario)
        return usuario;
    }

    public retornaTodos() {
        return [...this.usuarios];
    }

    public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario | undefined {
        return this.usuarios.filter((u) => u.nomeDeUsuario.indexOf(nomeDeUsuario) >= 0)[0];
    }
}