import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { List_Product } from 'src/app/contracts/list_product';
import { ProductService } from 'src/app/services/common/models/product.service';
import { BaseComponent, SpinnerName } from 'src/app/base/base.component';
import { AlertifyService, MessageType } from 'src/app/services/admin/alertify.service';
import {MatPaginator} from '@angular/material/paginator';
import { Create_Product } from 'src/app/contracts/create_product';

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
  displayedColumns :string[]=['productName','Stock','Price','CreatedDate','UpdatedDate','Delete','Edit'];
  dataSource:MatTableDataSource<List_Product>=null;
  products : List_Product[]=null;


  async ngOnInit(){
    this.showSpinner(SpinnerName.CircleLoading);
    await this.getProducts().then(()=>{this.hideSpinner(SpinnerName.CircleLoading)});


  }
  async onChanged()
  {
    await this.getProducts();
  }
  async getProducts()
  {
    const allProducts: {totalCount:number ; products:List_Product[]} = await this.productService.read(this.paginator?this.paginator.pageIndex:0,this.paginator?this.paginator.pageSize:5,()=>{
      this.hideSpinner(SpinnerName.CircleLoading);
      console.log("okey");
    },message=>{
      this.alertifyService.message(message,MessageType.Error)}
    )
    this.dataSource=new MatTableDataSource<List_Product>(allProducts.products)
    this.paginator.length=allProducts.totalCount;
    console.log(allProducts);
  }
}
