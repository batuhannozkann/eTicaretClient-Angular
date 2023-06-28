import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Product } from 'src/app/contracts/list_product';
import { Observable, firstValueFrom } from 'rxjs';

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
  async read(page:number=0,size:number=5,successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void):Promise<{totalCount:number ; products:List_Product[]}>
  {
      var promiseData:Promise<{totalCount:number;products:List_Product[]}>=firstValueFrom<{totalCount:number;products:List_Product[]}>(await this.httpClientService.get<{totalCount:number;products:List_Product[]}>({
        controller:"products",
        action:"GetProductsWithPage",
        queryString:`page=${page}&size=${size}`
         }));
          promiseData.then(()=>{successCallBack})
         .catch((errorResponse:HttpErrorResponse) =>errorCallBack(errorResponse.message));


    console.log();
    return promiseData
  }
  async delete(id:string)
  {
    const observableDelete:Observable<any>=this.httpClientService.delete(
      {
        controller:"products"
      },id
    );
    await firstValueFrom(observableDelete);
  }
}
