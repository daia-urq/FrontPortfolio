import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(private proyectoService: ProyectoService, private activatedRouter: ActivatedRoute,
    private router: Router, public imageService: ImageService) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.proyectoService.detail(id).subscribe(
        data=>{
          this.proyecto = data;
        }, err =>{
          alert("Error al modificar proyecto");
          this.router.navigate(['']);
        }
      )
    }

    onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    // this.proyecto.imagenP = this.imageService.url;
    this.proyectoService.update(id, this.proyecto).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error");
        this.router.navigate(['']); 
      }
    )
  }

  // uploadImage($event: any){
  //   const id = this.activatedRouter.snapshot.params['id'];
  //   const name = "proyecto_" + id;
  //   this.imageService.uploadImage($event, name);
  // }  

}
