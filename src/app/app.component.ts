import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eTicaretClient';
}
$(window).on('resize',()=>{
  if($(window).width()<960){
    $('.nav-item').removeClass('btn btn-outline-warning')
  }
});
$(window).on('resize',()=>{
  if($(window).width()>960){
    $('.nav-item').addClass('btn btn-outline-warning')
  }
});

