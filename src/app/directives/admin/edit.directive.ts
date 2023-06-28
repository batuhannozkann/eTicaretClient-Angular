import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Directive({
  selector: '[appEdit]'
})
export class EditDirective {

  constructor(private element:ElementRef,
    private renderer:Renderer2,
    private httpClientService:HttpClientService
      ) {

        const btnEdit = renderer.createElement("button");
        btnEdit.className="btn btn-primary";
        btnEdit.innerText="Edit";
        renderer.appendChild(element.nativeElement,btnEdit);
      }

}
