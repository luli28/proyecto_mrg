import { Component, OnInit } from '@angular/core';
import { Idiomas } from 'src/app/model/idiomas';
import { IdiomasService } from 'src/app/service/idiomas.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  idiomas: Idiomas[] = [];

  constructor(
    private idiomasS: IdiomasService, 
    private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarIdiomas();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarIdiomas(): void {
    this.idiomasS.lista().subscribe(
      data => {
        this.idiomas = data;
      }
    )
  }

  delete (id?: number){
    if(id!= undefined){
      this.idiomasS.delete(id).subscribe(
        data =>{
          this.cargarIdiomas();
        }, err =>{
          alert("No se pudo eliminar Idioma");
        }
      )
    }
  }  

}
