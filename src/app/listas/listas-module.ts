import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListasComponent } from '../components/listas/listas.component';



@NgModule({
  declarations: [ ListasModule],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[
    ListasComponent
  ]
})
export class ListasModule { }
