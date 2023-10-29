import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombreResultat!: number;
  parite!: string ;
  nombreEnBinaire! : string;
  masque: number = 0b1111;
  

  convertir(nombre:number){
      let teste = nombre & this.masque;
      this.nombreEnBinaire = teste.toString(2).padStart(4,'0');
      this.parite = "impaire";
      if(parseInt(this.nombreEnBinaire.replace(/\D/g, '')[3]) == 0){
        this.parite = "paire";
      }
  }
 
}
