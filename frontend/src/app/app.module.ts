import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LogosComponent } from './components/logos/logos.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    IdiomasComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillsComponent,
    NewSkillsComponent,
    EditAcercaDeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],

  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
