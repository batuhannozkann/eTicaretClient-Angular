import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  toggleSideBar()
  {
    $("#sidebarmenu").animate({width:'toggle'},500);
  }
}
$(document).click(function(){
  if(window.location.pathname.includes("orders"))
  {
    $("#admin").removeClass("active");
    $("#orders").addClass("active");
  }
  else[
    $("#orders").removeClass("active")
  ]
  if(window.location.pathname.includes("products"))
  {
    $("#admin").removeClass("active");
    $("#products").addClass("active");
  }
  else{
    $("#products").removeClass("active")
  }
  if(window.location.pathname.includes("customers"))
  {
    $("#customers").addClass("active");
    $("#admin").removeClass("active");
  }
  else{
    $("#customers").removeClass("active")
  }
  if(window.location.pathname=="/admin")
  {
    $("#admin").addClass("active");
  }
});
$(document).ready(function(){
  if(window.location.pathname.includes("orders"))
  {
    $("#orders").addClass("active");
  }
  else[
    $("#orders").removeClass("active")
  ]
  if(window.location.pathname.includes("products"))
  {
    $("#products").addClass("active");
  }
  else{
    $("#products").removeClass("active")
  }
  if(window.location.pathname.includes("customers"))
  {
    $("#customers").addClass("active");
  }
  else{
    $("#customers").removeClass("active")
  }
  if(window.location.pathname=="/admin")
  {
    $("#admin").addClass("active");
  }
  else[
    $("#admin").removeClass("active")
  ]
});
$(document).on("scroll",function(){
  $(".sidebar-btn").addClass("opacity-50")
})



