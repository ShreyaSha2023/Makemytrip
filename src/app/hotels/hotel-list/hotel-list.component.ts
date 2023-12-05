import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  city:string|null = null;
  inDate:string|null = null;;
  outDate:string|null = null;;
  rooms:string|null = null;;
 hotellistcopy:any;
  hotellist:any;
constructor(private activatedroute:ActivatedRoute,private serv:ApiService)
{
   this.city =this.activatedroute.snapshot.queryParamMap.get('city');
   this.inDate =this.activatedroute.snapshot.queryParamMap.get('checkInDate');
   this.outDate =this.activatedroute.snapshot.queryParamMap.get('checkOutDate');
   this.rooms =this.activatedroute.snapshot.queryParamMap.get('rooms');
  
}
  ngOnInit() {
    let endpoint = "search-hotels?city=" + this.city
    console.log("ngoninit");
    this.serv.getDataFromServer(endpoint).subscribe((data:any) => {
      this.hotellist= data.response.personalizedSections[0].hotels
      ;
      console.log(this.hotellist);
      this.hotellistcopy=[...this.hotellist]
    })
  }
  sortHotels(type:any)
  {
    if(type=='Rating')
   {
      this.hotellist.sort((a:any,b:any)=>b.reviewSummary.cumulativeRating-a.reviewSummary.cumulativeRating);
   }
   else if(type=='prize_high')
   {
    this.hotellist.sort((a:any,b:any)=>b.priceDetail.discountedPrice-a.priceDetail.discountedPrice);

   }
   else if(type=='prize_low')
   {
    this.hotellist.sort((a:any,b:any)=>a.priceDetail.discountedPrice-b.priceDetail.discountedPrice);

   }
}
getFilterCriteria(data:any)
{
  console.log(data);
 this.filterProduct(data);
}
filterProduct(data:any)
{
  if (data.type == 'RATING') {
    if (data.isSelected) {
      //rating 
      this.hotellist = this.hotellistcopy.filter((el: any) => el.reviewSummary.cumulativeRating > data.filtervalue)
    }
  }
  else if (data.type == 'HOTEL_PRICE_BUCKET') {
    //price
    if (data.isSelected) {
      console.log(data);
      this.hotellist = this.hotellistcopy.filter((el: any) => el.priceDetail.discountedPrice > data.filterRange.min && el.priceDetail.discountedPrice < data.filterRange.max)
    }
  }
  else
  {
    this.hotellist =this.hotellistcopy;
  }
}
}
