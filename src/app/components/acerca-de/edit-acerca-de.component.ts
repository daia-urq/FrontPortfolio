import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: Persona = null;

  constructor(private personaService: PersonaService,  private activatedRouter: ActivatedRoute,
    private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data=>{
        this.persona = data;
      }, err =>{
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url;
    this.personaService.update(id, this.persona).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error");
        this.router.navigate(['']); 
      }
    )
  }

  uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name);
  }  
}
