import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercademiComponent } from './components/acercademi/acercademi.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { RedesComponent } from './components/redes/redes.component';
import { ExperienciaComponent } from './components/experiencias/experiencias.component';
import { LenguajesyframeworksComponent } from './components/lenguajesyframeworks/lenguajesyframeworks.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewExperienciaComponent } from './components/experiencias/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencias/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditLenguajesyframeworksComponent } from './components/lenguajesyframeworks/edit-lenguajesyframeworks.component';
import { NewLenguajesyframeworksComponent } from './components/lenguajesyframeworks/new-lenguajesyframeworks.component';
import { NewhobbiesComponent } from './components/hobbies/newhobbies.component';
import { EdithobbiesComponent } from './components/hobbies/edithobbies.component';
import { EditAcercaDeMiComponent } from './components/acercademi/edit-acerca-de-mi.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercademiComponent,
    EducacionComponent,
    RedesComponent,
    ExperienciaComponent,
    LenguajesyframeworksComponent,
    HobbiesComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditLenguajesyframeworksComponent,
    NewLenguajesyframeworksComponent,
    NewhobbiesComponent,
    EdithobbiesComponent,
    EditAcercaDeMiComponent
    
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
