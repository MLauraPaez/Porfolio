import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hobbies } from 'src/app/model/hobbies';
import { HobbiesService } from 'src/app/service/hobbies.service';

@Component({
  selector: 'app-newhobbies',
  templateUrl: './newhobbies.component.html',
  styleUrls: ['./newhobbies.component.css']
})

export class NewhobbiesComponent implements OnInit {
    nombreE: string;
    descripcionE: string;
    imagenE: string;

    constructor(private hobbiesS: HobbiesService, private router: Router) { }
  
    ngOnInit(): void {
    }
  
    onCreate(): void{
      const hobbies = new Hobbies(this.nombreE, this.descripcionE);
      this.hobbiesS.save(hobbies).subscribe({
        next: data =>{
          alert("Hobbie añadido correctamente");
          this.router.navigate(['']);
        },
        error: err =>{
          alert("falló");
          this.router.navigate(['']);
        }}
      )
    }
  
  }