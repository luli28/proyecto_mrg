import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idiomas } from 'src/app/model/idiomas';
import { IdiomasService } from 'src/app/service/idiomas.service';

@Component({
  selector: 'app-edit-idiomas',
  templateUrl: './edit-idiomas.component.html',
  styleUrls: ['./edit-idiomas.component.css']
})
export class EditIdiomasComponent implements OnInit {
  idiomas: Idiomas = null;

  constructor(
    private idiomasS: IdiomasService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }
   

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.idiomasS.detail(id).subscribe(
      data => {
        this.idiomas = data;
      }, err =>{
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id= this.activatedRouter.snapshot.params['id'];
    this.idiomasS.update(id,this.idiomas).subscribe(
      data => {
        this.router.navigate([''])
      }, err => {
        alert("Error al modificar idioma");
        this.router.navigate(['']);
      }
    )
  }

}
