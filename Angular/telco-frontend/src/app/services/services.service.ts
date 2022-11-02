import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../models/service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  controllerUrl = `${environment.apiUrl}/services`;

  constructor(private httpClient: HttpClient) { 
    
  }
  getServices(): Observable<Service[]> {
    //get metodu Get Http istediğini hazırlıyor.
    return this.httpClient.get<Service[]>(this.controllerUrl);
  }
}
