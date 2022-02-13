import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';
import { ProductService } from "./../product.service";
import { Product } from "./../product";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  products: Observable<Product[]>

  orderId: number;
  order: Order;

  constructor(private route: ActivatedRoute,private router: Router,
    private orderService: OrderService,private productService: ProductService) { }

  ngOnInit() {
    this.reloadData();
    this.order = new Order();

    this.orderId = this.route.snapshot.params['id'];
    
    this.orderService.getOrder(this.orderId)
      .subscribe(data => {
        console.log(data)
        this.order = data;
      }, error => console.log(error));
  }

  reloadData() {
    this.products = this.productService.getSelectProduct();
  }

  updateOrder() {
    this.orderService.updateOrder(this.orderId, this.order)
      .subscribe(data => console.log(data), error => console.log(error));
    this.order = new Order();
    this.gotoList();
  }

  onSubmit() {
    this.updateOrder();    
  }

  gotoList() {
    this.router.navigate(['/orders']);
  }
}
