import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editproyectos',
  templateUrl: './editproyectos.component.html',
  styleUrls: ['./editproyectos.component.css']
})
export class EditproyectosComponent implements OnInit {
  proyectos: Proyectos = null;

  constructor(
    private proyectosS: ProyectosService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    const id= this.activateRouter.snapshot.params['id'];
    this.proyectosS.detail(id).subscribe(
      data =>{
        this.proyectos = data;
      }, err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activateRouter.snapshot.params['id'];
    this.proyectosS.update(id,this.proyectos).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar el proyecto");
        this.router.navigate([''])
      }
    )

  }
}
