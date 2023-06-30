import { Component } from '@angular/core';
import { MessageType, ToastrPosition, ToastrpackageService } from 'src/app/services/ui/toastrpackage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private toastr:ToastrpackageService){

  }
}
