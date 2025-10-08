import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { ListaService } from 'src/app/services/lista-service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent  implements OnInit {

  constructor(
    public listaService: ListaService
  ) { }

  async EditarLista(lista: Lista){
    let alerta = await this.listaService.alertController.create({
      header: "Editar lista",
      inputs: [
        {
          type: "text",
          name: "titulo",
          placeholder: "Ingresar nuevo nombre de la lista",
          value: lista.titulo
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text:"Editar",
          handler: (data: any)=> {
            let esValido: boolean = this.listaService.validarInput(data)
            if(esValido){
              lista.titulo = data.titulo
              this.listaService.editarLista(lista)

              this.listaService.presentToast('Lista editada correctamente!')
            }
          }
        }
      ]
    })
  }


  editarLista(listaItem: Lista) {
    this.EditarLista(listaItem)
  }

  eliminarLista(listaItem: Lista) {
    this.listaService.eliminarLista(listaItem)
    console.log("Eliminar lista: ", listaItem)
  }
  ngOnInit() {}

}
