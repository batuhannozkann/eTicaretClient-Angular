import { Component } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner'
import { EmptyError, defaultIfEmpty, isEmpty } from 'rxjs';
import { BaseComponent, SpinnerName } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { AlertifyService, MessageType } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BaseComponent {
  constructor(spinner:NgxSpinnerService,private productService:ProductService,private alertifyService:AlertifyService)
  {
    super(spinner)
  }
  createProduct(name:HTMLInputElement,stock:HTMLInputElement,price:HTMLInputElement)
  {
      this.showSpinner(SpinnerName.CircleLoading)
     const createProduct : Create_Product = new Create_Product();
      createProduct.Name=name.value;
      stock.value!=""?createProduct.Stock=parseInt(stock.value):createProduct.Stock=-1;
      price.value!=""?createProduct.Price=parseFloat(price.value):createProduct.Price=-1;
     this.productService.create(createProduct,()=>{
      this.hideSpinner(SpinnerName.CircleLoading);
      this.alertifyService.message("Product created successfully",MessageType.Success)
    },(errorMessage)=>{
      this.hideSpinner(SpinnerName.CircleLoading)
      this.alertifyService.message(errorMessage,MessageType.Error)})
  }
  }

