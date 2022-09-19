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
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { LenguajesyframeworksComponent } from './components/lenguajesyframeworks/lenguajesyframeworks.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercademiComponent,
    EducacionComponent,
    RedesComponent,
    ExperienciasComponent,
    LenguajesyframeworksComponent,
    HobbiesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
