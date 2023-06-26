import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { List_Product } from 'src/app/contracts/list_product';
import { ProductService } from 'src/app/services/common/models/product.service';
import { BaseComponent, SpinnerName } from 'src/app/base/base.component';
import { AlertifyService, MessageType } from 'src/app/services/admin/alertify.service';
import {MatPaginator} from '@angular/material/paginator';

declare var $:any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseComponent implements OnInit {
constructor(private productService:ProductService,spinner:NgxSpinnerService,private alertifyService:AlertifyService){
  super(spinner)

}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns :string[]=['productName','Stock','Price','CreatedDate','UpdatedDate','Button'];
  dataSource:MatTableDataSource<List_Product>=null;
  products : List_Product[]=null;


  async ngOnInit(){

    const allProducts:List_Product[]= await this.productService.read(()=>{
      this.hideSpinner(SpinnerName.CircleLoading)
    },message=>{
      this.alertifyService.message(message,MessageType.Error)}
    )
    this.dataSource=new MatTableDataSource<List_Product>(allProducts)
    this.dataSource.paginator=this.paginator
  }

}
