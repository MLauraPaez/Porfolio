import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../../service/persona.service';
import { ImageService } from '../../service/image.service';

@Component({
  selector: 'app-edit-acerca-de-mi',
  templateUrl: './edit-acerca-de-mi.component.html',
  styleUrls: ['./edit-acerca-de-mi.component.css']
})
export class EditAcercaDeMiComponent implements OnInit {
  persona: persona = null;

  constructor(private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe({
      next:data =>{
        this.persona = data;
      },
      error: err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }});
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      },err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
   )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }
}
