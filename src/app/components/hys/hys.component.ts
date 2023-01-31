import { Component, OnInit } from '@angular/core';
import { SkilService } from 'src/app/service/skil.service';
import { TokenService } from 'src/app/service/token.service';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {

  skill: Skill[]=[];

  constructor(private skillService: SkilService,private tokenService : TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarSkill():void{
    this.skillService.list().subscribe(
      data=>{
        this.skill = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data=>{
          this.cargarSkill();
        }, err=>{
          alert("No fue posible borrar el componenete skill");
        }
      )
    }
  }

}
