import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Product } from 'src/app/contracts/list_product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }
  create(product:Create_Product,succesCallBack?:any,errorCallBack?:any){
    this.httpClientService.post({
      controller:"products"
    },{
      Name:product.Name,
      Stock:product.Stock,
      Price:product.Price,
    }).subscribe(data=>{
      succesCallBack();},(errorResponse:HttpErrorResponse)=>{
        const error:Array<{key:string,value:Array<string>}>=errorResponse.error;
        let message="";
        error.forEach((v,index)=>
        {
          v.value.forEach((_v,_index)=>
          {
            message+=`${_v}<br>`;
          }
          );
        }
        );
        errorCallBack(message);
      });
  }
  async read(successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void):Promise<List_Product[]>
  {
    const promiseData:Promise<List_Product[]>=this.httpClientService.get<List_Product[]>({
      controller:"products"
    }).toPromise();
    promiseData.then(d=>successCallBack)
    .catch((errorResponse:HttpErrorResponse) =>errorCallBack(errorResponse.message));
    return await promiseData;
  }
}