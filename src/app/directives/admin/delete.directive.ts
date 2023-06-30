import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService, MessageType } from 'src/app/services/admin/alertify.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';
declare var $:any;
@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element:ElementRef,
  private renderer:Renderer2,
  private httpClientService:HttpClientService,
  private dialog:MatDialog,
  private alertifyService:AlertifyService
    ) {
      const btnDelete =renderer.createElement("button");
      btnDelete.innerText="Delete";
      btnDelete.className="btn btn-danger";
      renderer.appendChild(element.nativeElement,btnDelete);

    }
    @Input() id:string;
    @Input() controller:string;
    @Output() callback : EventEmitter<any> = new EventEmitter<any>;
    @HostListener("click")
    async onClick()
    {
      this.openDialog(async ()=>{const td :HTMLTableCellElement = this.element.nativeElement;
       const promiseDeleted:Promise<any>=firstValueFrom<any>(this.httpClientService.delete(
        {
          controller:this.controller
        },
        this.id
       )).then(()=>{$(td.parentElement).fadeOut(1000,()=>{
        this.callback.emit();
        this.alertifyService.message("Product deleted successfully",MessageType.Success);
      })}).catch(e=>console.log(e));
        })
    }
    openDialog(callback:()=>void): void {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        data:"Yes"
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result=="Yes")
        {
          callback();
        }
      });
    }

}
