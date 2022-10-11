import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { Habilidades } from '../../model/habilidades';

@Component({
  selector: 'app-edit-lenguajesyframeworks',
  templateUrl: './edit-lenguajesyframeworks.component.html',
  styleUrls: ['./edit-lenguajesyframeworks.component.css']
})

export class EditLenguajesyframeworksComponent implements OnInit {
  Habilidades: Habilidades= null;

  constructor(
    private habilidades: HabilidadesService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidades.detail(id).subscribe(
      data => {
        this.Habilidades = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidades.update(id, this.Habilidades).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }
}
