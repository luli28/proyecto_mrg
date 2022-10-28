import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private skillsS: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skills = new Skills(this.nombre, this.porcentaje);
    this.skillsS.save(skills).subscribe(
      data => {
        alert("Se creó skill");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al añadir skill");
        this.router.navigate(['']);
      }
    )
  } 
}
