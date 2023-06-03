import { Injectable } from '@angular/core';
declare var alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() { }
  message(message:string,messageType:MessageType,delay:number=3,dismiss:boolean=true,position:Position=Position.TopCenter)
  {
    alertify.set('notifier','position',position);
    alertify.set('notifier','delay',delay)
    if(dismiss)
    {
      alertify[messageType](message).dismissOthers();
    }
    else{alertify[messageType](message);}
  }
}
export enum MessageType{
  Error="error",
  Message="message",
  Notify="notify",
  Success="success",
  Warning="warning"
}
export class AlertifyOptions{
  messageType:MessageType;
  position:Position;
  delay:number;
  dismiss:boolean;
}
export enum Position{
  TopCenter="top-center",
  TopRight="top-right",
  TopLeft="top-left",
  BottomCenter="bottom-center",
  BottomRight="bottom-right",
  BottomLeft="bottom-left"
}
