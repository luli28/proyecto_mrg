import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
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
    private router: Router,
    public imageService: ImageService
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
  uploadImage($event: any) {
    const id = this.activateRouter.snapshot.params['id'];
    const name = "proyectos_" + id;
    this.imageService.uploadImage($event, name)
  } 

}
