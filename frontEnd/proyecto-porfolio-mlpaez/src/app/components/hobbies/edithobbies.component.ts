import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HobbiesService } from 'src/app/service/hobbies.service';
import { Hobbies } from '../../model/hobbies';

@Component({
  selector: 'app-edithobbies',
  templateUrl: './edithobbies.component.html',
  styleUrls: ['./edithobbies.component.css']
})
export class EdithobbiesComponent implements OnInit {
  hobbies: Hobbies = null;
  
    constructor(
      private hobbiesS: HobbiesService,
      private activatedRouter : ActivatedRoute,
      private router: Router
    ) { }
  
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.hobbiesS.detail(id).subscribe({
        next:data =>{
          this.hobbies = data;
        },
        error: err =>{
           alert("Error al modificar");
           this.router.navigate(['']);
        }});
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.hobbiesS.update(id, this.hobbies).subscribe(
        data => {
          this.router.navigate(['']);
        },err => {
          alert("Error al modificar Hobbies");
          this.router.navigate(['']);
        });
    }
  }
 