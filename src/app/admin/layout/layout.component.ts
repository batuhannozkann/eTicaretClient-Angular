import { Component, OnInit } from '@angular/core';
import {  AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import{NgxSpinnerService} from 'ngx-spinner';
import {BaseComponent, SpinnerName} from 'src/app/base/base.component';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent extends BaseComponent  {
  constructor(private alertify:AlertifyService,spinnerService:NgxSpinnerService){
    super(spinnerService)

  }
  //  ngOnInit():void{

  //  }

}
