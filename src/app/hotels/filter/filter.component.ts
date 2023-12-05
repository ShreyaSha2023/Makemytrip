import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  filterob:any;
  @Output()
  emitobj:EventEmitter<any>=new EventEmitter()
constructor(){}
ngOnInit(){
this.filterob={
  rating :[{
    type:"RATING",
    filtervalue:4,
    isRangefilter:false,
    filterRange:null,
    isSelected:false
  },
  {
    type:"RATING",
    filtervalue:3,
    isRangefilter:false,
    filterRange:null,
    isSelected:false
  }],
  pricepernight:[
    {
      type:"HOTEL_PRICE_BUCKET",
      filtervalue:null,
      isRangefilter:false,
      filterRange:
      {
        min:0,
        max:2000
      },
      isSelected:false
    },
    {
      type:"HOTEL_PRICE_BUCKET",
      filtervalue:null,
      isRangefilter:true,
      filterRange:
      {
        min:2000,
        max:4000
      },
      isSelected:false
    },
    {
      type:"HOTEL_PRICE_BUCKET",
      filtervalue:null,
      isRangefilter:false,
      filterRange:
      {
        min:4000,
        max:8000
      },
      isSelected:false
    }

  ]
}
}
emitdata(data:any)
{
  this.emitobj.emit(data)
}
}
