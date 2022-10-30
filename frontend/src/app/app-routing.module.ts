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
  {path: '',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editarexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editaredu/:id', component: EditeducacionComponent},
  {path: 'nuevaskill', component: NewSkillsComponent},
  {path: 'editarskill/:id', component: EditSkillsComponent},
  {path: 'editaracercade/:id', component: EditAcercaDeComponent},
  {path: 'editarproy/:id', component: EditproyectosComponent},
  {path: 'nuevoproy', component: NewProyectosComponent},
  {path: 'editaridiomas/:id', component: EditIdiomasComponent},
  {path: 'nuevoidiomas', component: NewIdiomasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
