import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idiomas } from 'src/app/model/idiomas';
import { IdiomasService } from 'src/app/service/idiomas.service';

@Component({
  selector: 'app-new-idiomas',
  templateUrl: './new-idiomas.component.html',
  styleUrls: ['./new-idiomas.component.css']
})
export class NewIdiomasComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private idiomasS: IdiomasService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const idiomas = new Idiomas(this.nombre, this.porcentaje);
    this.idiomasS.save(idiomas).subscribe(
      data => {
        alert("Se creó idioma");
        this.router.navigate(['']);
      }, err =>{
        alert("No se pudo cargar idioma");
        this.router.navigate(['']);
      }
    )
  } 

}
