import { Component } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  
  roomsArr :string []=[];
  fromDate :any;
  toDate:any;
  selectedDate !:Date [];
  selectedcity :string ="";
  selectedRoom :string ="";
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 3);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
    this.setRooms();

  }
  setRooms()
  {
    this.roomsArr.push("1 Room 1 Adult");
    this.roomsArr.push("1 Room 2 Adults");
    this.roomsArr.push("2 Room 2 Adults");
  }
  print()
  {
    this.fromDate=this.selectedDate[0];
    this.toDate=this.selectedDate[1];
    console.log(this.toDate + "and " + this.fromDate)
console.log("selected parametrs " + this.selectedcity , this.selectedDate ,this.selectedRoom)
  }
  selectroomtype(data:any)
  {
   this.selectedRoom= data;
  }
  dateChange()
  {
    this.fromDate=this.selectedDate[0];
    this.toDate=this.selectedDate[1];
  }
}
