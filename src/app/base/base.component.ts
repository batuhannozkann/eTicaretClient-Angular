import {NgxSpinnerService} from 'ngx-spinner'

export class BaseComponent {
  constructor(private ngxSpinner :NgxSpinnerService){
  }
  showSpinner(spinnerName:SpinnerName){
    this.ngxSpinner.show(spinnerName);
  }
  hideSpinner(spinnerName:SpinnerName)
  {
    this.ngxSpinner.hide(spinnerName);
  }
}
export enum SpinnerName{
  SquareLoading="sq1",
  CircleLoading="circle-loading"
}
