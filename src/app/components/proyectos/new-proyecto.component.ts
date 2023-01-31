import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ActivatedRoute} from '@angular/router';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreProy: string = '';
  descripcionProy: string = '';
  direccion: string = '';
  imagenP: string = '';
  

  constructor(private proyectoService: ProyectoService, private router: Router,  private activatedRouter: ActivatedRoute, public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proyecto = new Proyecto(this.nombreProy, this.descripcionProy, this.direccion, this.imagenP);
    // proyecto.imagenP = this.imageService.url;
    this.proyectoService.save(proyecto).subscribe(
      data =>{
        alert("Proyecto creado");
        this.router.navigate(['']);
      }, err=>{
        alert("Fallo la creación de experiencia");
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
