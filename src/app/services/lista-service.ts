import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  public listas: Lista[] = []; //almacena las lisstas de actividades
  constructor() {
    this.cargarStorage()
   }

  crearLista(nombreLista: string) {
    let ObjetoLista = new Lista(nombreLista)
    this.listas.push(ObjetoLista) //ingresamos en el array de listas el objeto con los datos creados
    this.guardarStorage()

    return ObjetoLista.titulo
  }

  guardarStorage() {
    let stringListas: string = JSON.stringify(this.listas) // convertimos el array de listas en texto plano
    localStorage.setItem("listas", stringListas) //se deben ingresar dos parámetros, el primero un nombre y el segundo el contenido
  }

  cargarStorage() {
    const listaStorage = localStorage.getItem('listas') //se debe ingresar el parámetro con el nombre del objeto
    if(listaStorage === null){
      return this.listas = [] // si el storage está vacío devolvemos el objeto listas vacio también
    }
    let ObjetoLista = JSON.parse(listaStorage) // convierte el texto plano a objeto para poder ingresarlo
    return this.listas = ObjetoLista;
  }

  eliminarLista(lista: Lista) {
    let nuevoListado = this.listas.filter((listaItem)=> listaItem.id !== lista.id) //guardamos todas las listas  menos la lista a eliminar
    this.listas = nuevoListado
    this.guardarStorage()
  }

  editarLista(lista: Lista){
    let listaEditar = this.listas.find((listaItem)=> listaItem.id == lista.id) // guardamos el que coincide el id
    //finde devuelve el primer valor que encuentra
    if(listaEditar){
      listaEditar.titulo = lista.titulo
    }
    this.cargarStorage()
  }

}
