import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { Proyectos } from '../../model/proyectos';

@Component({
  selector: 'app-editproyectos',
  templateUrl: './editproyectos.component.html',
  styleUrls: ['./editproyectos.component.css']
})


export class EditproyectosComponent implements OnInit {
  proyectos: Proyectos = null; 
 
   constructor(private sProyectos: ProyectosService, private activatedRouter: ActivatedRoute, private router:Router) { }
 
   ngOnInit(): void {
     const id =this.activatedRouter.snapshot.params['id'];
     this.sProyectos.detail(id).subscribe(
       data =>{
         this.proyectos = data;
       }, err =>{
       alert("Error al modificar Proyectos");
       this.router.navigate(['']);
       }
       )
     }
   
 
   onUpdate(): void {
     const id =this.activatedRouter.snapshot.params['id'];
     this.sProyectos.update(id, this.proyectos).subscribe(
       data =>{
         this.router.navigate(['']);
       }, err =>{
       alert("Error al modificar Proyectos");
       this.router.navigate(['']);
       }
     )
  }
 }
 