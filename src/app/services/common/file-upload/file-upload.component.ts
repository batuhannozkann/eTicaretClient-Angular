import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { HttpClientService } from '../http-client.service';
import { HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AlertifyService, MessageType } from '../../admin/alertify.service';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadDialogComponent, FileUploadState } from 'src/app/dialogs/file-upload-dialog/file-upload-dialog.component';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  constructor(private httpClientService:HttpClientService,private alertifyService:AlertifyService,private refDialog:MatDialog)
  {

  }

  @Input() selectedOptions : Partial<FileUploadOptions>;
  public files: NgxFileDropEntry[];
  public formData: FormData = new FormData();

    uploadSelectedFile(files: NgxFileDropEntry[]) {
    this.files = files;

    for (const droppedFile of files) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.formData.append(file.name,file,droppedFile.relativePath);
        });
    }
    this.openDialog(()=>{
      const promiseData:Promise<any>=firstValueFrom<any>(this.httpClientService.post(
        {
          controller:this.selectedOptions.controller,
          action:this.selectedOptions.action,
          queryString:this.selectedOptions.queryString,
          headers:new HttpHeaders({ "responseType": "blob" })
        },this.formData
      ));
        promiseData.then(()=>{
        this.alertifyService.message("File uploaded successfully",MessageType.Success);
      }).catch((e)=>{
        this.alertifyService.message(e.data,MessageType.Error);
        console.log(e);
      });
    })
    }
    openDialog(callback:()=>void)
    {
      const dialog = this.refDialog.open(FileUploadDialogComponent,{
        data:FileUploadState.Yes
      });
      dialog.afterClosed().subscribe(result=>{
        if(result==FileUploadState.Yes)
        {
          callback();
        }
      })
    }
  }
export class FileUploadOptions{
  controller?:string;
  action?:string;
  queryString?:string;
  explain?:string;
  accept?:string;
  isAdminPage?:boolean;
}
