import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEdu: string = '';
  descripcionEdu: string ='';

  constructor(private educacionService: EducacionService, private router: Router){}
  
  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new Educacion(this.nombreEdu,this.descripcionEdu);
    this.educacionService.save(edu).subscribe(
      data=>{
        alert("Nueva educación creada");
        this.router.navigate(['']);
      }, err=>{
        alert("Fallo la creación de educación");
        this.router.navigate(['']);
      }
    )
  }

}
