import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyectos',
  templateUrl: './newproyectos.component.html',
  styleUrls: ['./newproyectos.component.css']
})

export class NewproyectosComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  imagenE: string = '';


  constructor(private sProyectos: ProyectosService,private router: Router ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyectos = new Proyectos(this.nombreE, this.descripcionE);
      
    this.sProyectos.save(proyectos).subscribe(data => {
      alert("Proyecto añadido");
         this.router.navigate(['']);
        },err => {
        alert("falló");
        this.router.navigate(['']);
        }
         );
      } 
    }
  