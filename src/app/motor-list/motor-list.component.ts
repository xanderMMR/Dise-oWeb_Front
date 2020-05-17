import { Component, OnInit } from '@angular/core';

import {Motor} from '../model/motor';
import { Observable } from 'rxjs';
import { MotorService } from '../motor.service';

@Component({
  selector: 'app-motor-list',
  templateUrl: './motor-list.component.html',
  styleUrls: ['./motor-list.component.css']
})
export class MotorListComponent implements OnInit {
  motores: Motor=new Motor();


  constructor(private motorService: MotorService) { }

  ngOnInit(): void {
    this.cargarData();
  }
  cargarData() {//Llama al servicio
    console.log("Llamando al servicio");  
    this.motorService.getMotorList().subscribe(
      motores => this.motores=motores
    )
  }
 

}
