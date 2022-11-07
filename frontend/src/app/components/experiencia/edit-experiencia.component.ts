import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
experiencia: Experiencia = null;

  constructor(
    private sexperienciaS: SExperienciaService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sexperienciaS.detail(id).subscribe(
      data =>{
        this.experiencia = data;
      }, err =>{
        alert("Error a modificar Experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id= this.activateRouter.snapshot.params['id'];
    this.sexperienciaS.update(id, this.experiencia).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar Experiencia");
        this.router.navigate(['']);
      }
    )
  }
  
}
