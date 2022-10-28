import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products:string[] = ["Laptop","Televizyon","Kulaklık"];

  name:string = '';

  constructor() {

  }

  ngOnInit(): void {
    this.getProducts();
  }

  addProducts(name:string){
    this.products.push(name);
    this.name = '';
  }
  getProducts(){
    return this.products;
  }
  deleteProduct(name:string){
    this.products = this.products.filter(item => item !== name);
  }
}