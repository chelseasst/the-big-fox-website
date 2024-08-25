import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form-physical-card',
  templateUrl: './form-physical-card.component.html',
  styleUrls: ['./form-physical-card.component.css']
})
export class FormPhysicalCardComponent {
  formSubmitHandler(form:any){

  }
  toggleSelect(selectEl:HTMLSelectElement){
    selectEl.focus();
  }
}
