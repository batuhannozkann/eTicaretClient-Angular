import { Component } from '@angular/core';
import {BaseComponent} from '../../../base/base.component'
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from 'src/app/services/common/http-client.service';

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

}


