import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-new-lenguajesyframeworks',
  templateUrl: './new-lenguajesyframeworks.component.html',
  styleUrls: ['./new-lenguajesyframeworks.component.css']
})

export class NewLenguajesyframeworksComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private habilidades: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const habilidades = new Habilidades(this.nombre, this.porcentaje);
    this.habilidades.save(habilidades).subscribe(
      data => {
        alert("Habilidad creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la habilidad");
        this.router.navigate(['']);
      }
    )
  }
}