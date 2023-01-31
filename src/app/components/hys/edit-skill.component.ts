import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkilService } from 'src/app/service/skil.service';
import { ActivatedRoute, Route, Router } from '@angular/router'

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skills : Skill = null;

  constructor(private skillService: SkilService,private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.detail(id).subscribe(
      data =>{
        this.skills = data;
      }, err =>{
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.update(id, this.skills).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error ");
         this.router.navigate(['']);
      }
    )
  }

}
