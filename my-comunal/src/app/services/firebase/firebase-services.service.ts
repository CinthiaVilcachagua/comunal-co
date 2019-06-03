import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


interface Visitor {
  foto: string;
  nombre: string;
  correo: string;
  empresaPorVisitada: string;
  persona: string;
  empresaVisitante: string;
  id: any;
  fechaDeSalida: any;
  fecha: string;
  cantidadDvisitantes: number;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseServicesService {
   public Visitor = {
    foto: '',
    nombre: '',
    correo: '',
    empresaPorVisitada: '',
    persona: '',
    empresaVisitante: '',
    id: '',
    fechaDeSalida: '',
    cantidadDvisitantes: '',
  };

  constructor(public firestore: AngularFirestore) {

  }


  getValue(name, email, companyVisitor, comunero, cantidadVisitantes, imagen) {
    console.log('aqui',name)
    const newObject = {
      ...this.Visitor,
      foto: imagen,
      nombre: name,
      correo: email,
      persona: comunero,
      empresaVisitante: companyVisitor,
      fecha: new Date(),
      fechaDeSalida: '',
      id: Math.random(),
      cantidadDvisitantes: cantidadVisitantes
    };
    this.firestore.collection('visitors').add(newObject);
    }

  getEmpresas() {
    return this.firestore.collection('empresas').valueChanges();
  }

  // postNotification() {
  //   return this.http.post<any>(
  //   'http://10.1.230.161:8080/notification',
  //     {
  //       "message": "Hola"
  //    }
  //   );


}