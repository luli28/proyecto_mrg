import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditIdiomasComponent } from './components/idiomas/edit-idiomas.component';
import { NewIdiomasComponent } from './components/idiomas/new-idiomas.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectosComponent } from './components/proyectos/editproyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newexp', component: NewExperienciaComponent},
  {path: 'newedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'newskill', component: NewSkillsComponent},
  {path: 'editacercade/:id', component: EditAcercaDeComponent},
  {path: 'editproyectos/:id', component: EditproyectosComponent},
  {path: 'newproyectos', component: NewProyectosComponent},
  {path: 'newidiomas', component: NewIdiomasComponent},
  {path: 'editidiomas/:id', component: EditIdiomasComponent},
  {path: 'editskills/:id', component: EditSkillsComponent},
  {path: 'editexperiencia/:id', component: EditExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
