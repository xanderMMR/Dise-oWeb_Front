import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMotorComponent } from './create-motor/create-motor.component';
import { MotorListComponent } from './motor-list/motor-list.component';
import { FiltrarComponent } from './filtrar/filtrar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMotorComponent,
    MotorListComponent,
    FiltrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
