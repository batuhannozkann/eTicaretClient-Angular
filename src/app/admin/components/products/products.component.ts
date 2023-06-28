import { Component, ViewChild } from '@angular/core';
import {BaseComponent} from '../../../base/base.component'
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { Create_Product } from 'src/app/contracts/create_product';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent {

  constructor(spinner:NgxSpinnerService,private httpClientService:HttpClientService)
  {
    super(spinner)
  }
  @ViewChild(ListComponent) listComponents:ListComponent
  createdProduct(createdProduct:Create_Product)
  {
    this.listComponents.getProducts();
  }
}


