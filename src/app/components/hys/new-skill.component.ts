import { Component, OnInit } from '@angular/core';
import { SkilService } from 'src/app/service/skil.service';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombreSkill: string = '';
  porcentaje: number = 0 ;

  constructor(private skillService: SkilService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const exp = new Skill(this.nombreSkill, this.porcentaje);
    this.skillService.save(exp).subscribe(
      data=>{
        alert("Skill creada");
        this.router.navigate(['']);
      }, err=>{
        alert("Fallo la creación de skill");
        this.router.navigate(['']);
      }
    )
  }

}
