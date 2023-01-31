import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
educa : Educacion = null;

  constructor(private educacionService: EducacionService,  private activatedRouter: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(
      data=>{
        this.educa = data;
      }, err =>{
        alert("Error a modificar educación");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.update(id, this.educa).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error");
        this.router.navigate(['']);
      }
    )
  }

}
