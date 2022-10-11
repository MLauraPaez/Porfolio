import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { Habilidades } from '../../model/habilidades';
import { HabilidadesService } from '../../service/habilidades.service';

@Component({
  selector: 'app-lenguajesyframeworks',
  templateUrl: './lenguajesyframeworks.component.html',
  styleUrls: ['./lenguajesyframeworks.component.css']
})

export class LenguajesyframeworksComponent implements OnInit {
  Habilidades: Habilidades[] = [];

  constructor(private habilidades: HabilidadesService, private tokenService: TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarHabilidades();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHabilidades(): void{
    this.habilidades.lista().subscribe(
      data => {
        this.Habilidades = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.habilidades.delete(id).subscribe(
        data => {
          this.cargarHabilidades();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }
}