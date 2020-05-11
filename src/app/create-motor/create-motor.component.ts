import { Component, OnInit } from '@angular/core';
import {Motor} from '../model/motor';
import {Router} from '@angular/router';
import {MotorService} from '../motor.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-create-motor',
  templateUrl: './create-motor.component.html',
  styleUrls: ['./create-motor.component.css']
})
export class CreateMotorComponent implements OnInit {

  motor: Motor = new Motor();
  constructor(private motorService: MotorService,
              private router:Router) { }

  ngOnInit(): void {
  }
  save(){
    console.log("CLICK");
    console.log(this.motor);
    this.motorService.registrar(this.motor).subscribe(
      data =>this.router.navigate(['/list'])
    ); 
  }
}
