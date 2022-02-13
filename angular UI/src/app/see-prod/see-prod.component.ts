import { ProductService } from "./../product.service";
import { Product } from "./../product";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from "rxjs";


@Component({
  selector: 'app-see-prod',
  templateUrl: './see-prod.component.html',
  styleUrls: ['./see-prod.component.css']
})
export class SeeProdComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private productService: ProductService,
    private router: Router) { }
    
    ngOnInit() {
      this.reloadData();
    }
    reloadData() {
      this.products = this.productService.getSelectProduct();
    }
    

}