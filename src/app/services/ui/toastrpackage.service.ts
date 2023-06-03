import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrpackageService {

  constructor(private toastr:ToastrService) {}
  showSuccess(title:string,message:string,messageType:MessageType,position:ToastrPosition=ToastrPosition.TopFullWidth){
    this.toastr[messageType](title,message,{positionClass:position});
   }
}
export enum MessageType{
  Success="success",
  Error="error",
  Info="info",
  Warning="warning"
}
export enum ToastrPosition{
TopRight='toast-top-right',
BottomRight='toast-bottom-right',
BottomLeft='toast-bottom-left',
TopLeft='toast-top-left',
TopFullWidth='toast-top-full-width',
BottomFullWidth='toast-bottom-full-width',
TopCenter='toast-top-center',
BottomCenter='toast-top-center'
}
