import { OrderService } from '../order.service';
import { Order } from '../order';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from "./../product.service";
import { Product } from "./../product";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  products: Observable<Product[]>;


  order: Order = new Order();
  submitted = false;

  constructor(private orderService: OrderService,private productService: ProductService,
    private router: Router) { }

    ngOnInit() {
      this.reloadData();
    }
    reloadData() {
      this.products = this.productService.getSelectProduct();
    }
    

  newOrder(): void {
    this.submitted = false;
    this.order = new Order();
  }

  save() {
    this.orderService.createOrder(this.order)
      .subscribe(data => console.log(data), error => console.log(error));
    this.order = new Order();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/orders']);
  }
}
