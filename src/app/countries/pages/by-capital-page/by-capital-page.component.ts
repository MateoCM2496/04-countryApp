import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',

})
export class ByCapitalPageComponent {
  
  searchByCapital(value:string):void{
    console.log('desde capitalpage')
    console.log()
  }
}
