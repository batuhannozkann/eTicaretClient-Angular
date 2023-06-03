import {NgxSpinnerService} from 'ngx-spinner'

export class BaseComponent {
  constructor(private ngxSpinner :NgxSpinnerService){
  }
  showSpinner(spinnerName:SpinnerName){
    this.ngxSpinner.show(spinnerName);
    setTimeout(()=>{
      this.ngxSpinner.hide(spinnerName);
    },5000);
  }
}
export enum SpinnerName{
  SquareLoading="sq1",
  CircleLoading="circle-loading"
}
