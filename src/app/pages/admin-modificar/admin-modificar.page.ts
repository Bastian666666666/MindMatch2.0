import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  usuario = "";
  contrasena = "";
  nombre = "";
  apellido = "";
  nacimiento = 0;



  constructor(private dbservice: DbserviceService, private router: Router) { }

  guardar() {
    this.dbservice.addUsuario(this.usuario,this.contrasena,this.nombre,this.apellido,this.nacimiento);
    this.dbservice.presentToast("Usuario Agregado");
    this.router.navigate(['/adminhome']);
  }

  ngOnInit() {
  }

}