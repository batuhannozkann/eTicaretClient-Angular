import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { ProductService } from 'src/app/services/common/models/product.service';
declare var $:any;
@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element:ElementRef,
  private renderer:Renderer2,
  private productService:ProductService,
  private dialog:MatDialog
    ) {
      const btnDelete =renderer.createElement("button");
      btnDelete.innerText="Delete";
      btnDelete.className="btn btn-danger";
      renderer.appendChild(element.nativeElement,btnDelete);

    }
    @Input() id:string;
    @Output() callback : EventEmitter<any> = new EventEmitter<any>;
    @HostListener("click")
    async onClick()
    {
      this.openDialog(async ()=>{const td :HTMLTableCellElement = this.element.nativeElement;
        await this.productService.delete(this.id);
        $(td.parentElement).fadeOut(2000,()=>{
          this.callback.emit();
        });})

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
