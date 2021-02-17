'use strict';


 

 
var operatingHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

var locationDetailsArray = [];

 function LocationDetails(locationName, minCustomersHourly, avgPerCustHourly, maxCustomersHourly, cookiesSalesHourly, randomCustomersHourly, totalSalesDaily) {
    this.locationName = locationName;
    this.minCustomersHourly = minCustomersHourly;
    this.maxCustomersHourly = maxCustomersHourly;
    this.avgPerCustHourly = avgPerCustHourly;
    this.cookiesSalesHourly = cookiesSalesHourly;
    this.randomCustomersHourly = randomCustomersHourly;
    this.totalSalesDaily = totalSalesDaily;
}