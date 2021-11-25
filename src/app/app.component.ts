import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth=true;

  appareilOne = "Machine a laver";
  appareilTwo = "Cafetière";
  appareilThree = "Sèche linge";

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Cafetière ',
      status: 'allumé'
    },
    {
      name: 'Sèche linge ',
      status: 'éteint'
    },
  ];
  lastUpdate =  new Promise<Date>((resolve,reject) => {
  const date = new Date();
  setTimeout(
    () => {
      resolve(date)
    }, 2000
  );
  });

  onAllumer() {
    console.log("On allume tout !");
  }
}
