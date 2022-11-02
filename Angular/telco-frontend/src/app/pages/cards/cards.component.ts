import { Component, OnInit } from '@angular/core';

import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  services !: Service[];

  constructor(private servicesService:ServicesService) { }

  ngOnInit(): void {
    this.getServices();
  }
  
  getServices() {
    // Object tipi henüz belli olmayan referans tip diyebiliriz. Referans tiplerin en temel sınıfı diyebiliriz.
    this.servicesService.getServices().subscribe((response) => { //Observer design pattern
      this.services = response;
      console.log(this.services);;
    });
  }

}
