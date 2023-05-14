import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public usuarios: Array<any> = [];
  public usuarios_const: Array<any> = [];
  public page = 1;
  public pageSize = 5;
  public filtro="";

  constructor(private _usuarioservice: UsuarioService) {}

  ngOnInit(): void {
    this._usuarioservice.listarUusuarios().subscribe(
      response => {
        console.log(response);
        this.usuarios_const = response;
        this.usuarios = this.usuarios_const;
      }
    );
  }
  filtrar_usuario(){
    if(this.filtro){
      var term=new RegExp(this.filtro.toString().trim(),'i');
      this.usuarios=   this.usuarios_const.filter(item=>term.test(item.userId)||term.test(item.id)||term.test(item.title)||term.test(item.completed));

    }else{
      this.usuarios=this.usuarios_const;
    }

  }

}
