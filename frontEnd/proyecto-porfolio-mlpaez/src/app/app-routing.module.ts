import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencias/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencias/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewLenguajesyframeworksComponent } from './components/lenguajesyframeworks/new-lenguajesyframeworks.component';
import { EditLenguajesyframeworksComponent } from './components/lenguajesyframeworks/edit-lenguajesyframeworks.component';
import { NewhobbiesComponent } from './components/hobbies/newhobbies.component';
import { EdithobbiesComponent } from './components/hobbies/edithobbies.component';
import { EditAcercaDeMiComponent } from './components/acercademi/edit-acerca-de-mi.component';
import { NewproyectosComponent } from './components/proyectos/newproyectos.component';
import { EditproyectosComponent } from './components/proyectos/editproyectos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  { path:'nuevaexp', component: NewExperienciaComponent },
  { path:'editexp/:id', component: EditExperienciaComponent},
  { path:'nuevaedu', component: NeweducacionComponent },
  { path:'editedu/:id', component: EditeducacionComponent},
  { path:'newlenguajesyframeworks', component: NewLenguajesyframeworksComponent},
  { path:'editlenguajesyframeworks/:id', component: EditLenguajesyframeworksComponent},
  { path:'newhobbies', component: NewhobbiesComponent},
  { path:'edithobbies/:id', component: EdithobbiesComponent},
  { path:'editacercademi/:id', component: EditAcercaDeMiComponent},
  { path:'nuevoproyectos', component: NewproyectosComponent},
  { path:'editproyectos/:id', component: EditproyectosComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
