import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  recordDivClass="hidden";
  name = 'Angular';
  selectedRecord="";

  records=[
    "Record 1",
    "Record 2",
    "Record 3",
    "Record 4",
    "Record 5"
    ];

  toggleRecordDiv()
  {
    if(this.recordDivClass)
    {
      this.recordDivClass="";
    }
    else
    {
      this.recordDivClass="hidden";
    }
  }
  onChange(data)
  {
    if(data)
    {
      this.recordDivClass="";
    }
    else
    {
      this.recordDivClass="hidden";
    }
    
    //console.log(data);
  }

  setCurrentSelectedId(selectedRecord)
  {
    this.selectedRecord=selectedRecord;
    this.recordDivClass="hidden";
    
  }
}
