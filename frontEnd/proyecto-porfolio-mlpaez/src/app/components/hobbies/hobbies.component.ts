import { Component, OnInit } from '@angular/core';
import { HobbiesService } from 'src/app/service/hobbies.service';
import { TokenService } from 'src/app/service/token.service';
import { Hobbies } from '../../model/hobbies';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  hobbies: Hobbies[] = [];

  constructor(private hobbiesS: HobbiesService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarHobbies();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHobbies(): void{
    this.hobbiesS.lista().subscribe(
      data =>{
        this.hobbies = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.hobbiesS.delete(id).subscribe(
        data => {
          this.cargarHobbies();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
