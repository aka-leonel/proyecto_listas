import { Component } from '@angular/core';
import { AlertController, IonicModule, ToastController } from '@ionic/angular';
import { ListaService } from '../services/lista-service';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Lista } from '../models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponentModule, CommonModule]
})

export class Tab1Page {

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public listaService: ListaService
  ) {}
  /**
   * @function AgregarLista
   * @description La función será ejecutado cuando el usuario haga click en el botón Agregar
   * Muestra una alerta donde solicita el nombre de la lista
   */
  async AgregarLista() {

    let alerta = await this.alertController.create({
      header: "Agregar lista",
      inputs: [
        {
          type: "text",
          name: "titulo",
          placeholder: "Ingresar nombre de la lista"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Crear",
          handler: (data:any)=> {
           let esValido: boolean = this.validarInput(data)
           if(esValido){
            let creadaOk = this.listaService.crearLista(data.titulo)
            if(creadaOk){
              this.presentToast('Lista creada correctamente!')
            }
           }
          }
        }
      ]
    })
    await alerta.present();
    console.log("Click en el botón")
  }
  

  //llave final
}
