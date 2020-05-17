import { Component, OnInit } from '@angular/core';
import {Motor} from '../model/motor';
import { Observable } from 'rxjs';
import { MotorService } from '../motor.service';
@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css']
})
export class FiltrarComponent implements OnInit {
  motores: Observable<Motor[]>
  min : number=0;
  max: number=0;
  constructor(private motorService: MotorService) { }  

  ngOnInit(): void {
    this.filtrar();
  }
  filtrar(){
    this.motorService.filtrarList(this.min,this.max).subscribe(motores =>this.motores=motores);
  }

}
