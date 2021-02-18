'use strict';
/*
Location           Min / Cust                      Max / Cust                         Avg Cookie / Sale
 Seattle                23                              65                                      6.3
 Tokyo                  3                               24                                      1.2
 Dubai                  11                              38                                      3.7
 Paris                  20                              38                                      2.3
 Lima                   2                               16                                      4.6

*/
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

const seattle = {
  locationName:'Seattle',
  minCustomers : 23,
  maxCustomers:65,
  avgCookies:6.3,
  customersEachHour:[],
  cookiesEachHour:[],
  total: 0,

  // claculate a random number of customers every hour
  calcCustomersEachHour:function(){
    for(let i=0;i<hours.length;i++){
      this.customersEachHour.push(random(this.minCustomers,this.maxCustomers));
    }
  },

  calcCookiesEachHour:function(){
    for(let i=0;i<hours.length;i++){
      // console.log(this.customersEachHour[i]);
      this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));

      this.total+=this.cookiesEachHour[i]
    }
  },
  render:function(){
    // get the parent element by id:
    let parent= document.getElementById('parent');
    console.log(parent);

    let shopName = document.createElement("tr");

    parent.appendChild(shopName);

  

    for(let i =0;i<17;i++){
      // create li
      let listItem=document.createElement('td');
      // append li
      shopName.appendChild(listItem);
      // give text content
      listItem.textContent = `${this.cookiesEachHour[i]}`
    }

  }

}

seattle.calcCustomersEachHour();
seattle.calcCookiesEachHour();
seattle.render();
console.log(seattle);

///////////////////////////Tokyo//////////////////////////

const tokyo = {
  locationName:'Tokyo',
  minCustomers : 3,
  maxCustomers:24,
  avgCookies:1.2,
  customersEachHour:[],
  cookiesEachHour:[],
  total: 0,

  // claculate a random number of customers every hour
  calcCustomersEachHour:function(){
    for(let i=0;i<hours.length;i++){
      this.customersEachHour.push(random(this.minCustomers,this.maxCustomers));
    }
  },

  calcCookiesEachHour:function(){
    for(let i=0;i<hours.length;i++){
      // console.log(this.customersEachHour[i]);
      this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));

      this.total+=this.cookiesEachHour[i]
    }
  },
  render:function(){
    // get the parent element by id:
    let parent= document.getElementById('parent');
    console.log(parent);

    let shopName = document.createElement('h3');

    parent.appendChild(shopName);

    // give text content
    shopName.textContent = this.locationName;

    // created an element 
    let unorderedList=document.createElement('ul');
    // append element to parent
    parent.appendChild(unorderedList);

    for(let i =0;i<hours.length;i++){
      // create li
      let listItem=document.createElement('li');
      // append li
      unorderedList.appendChild(listItem);
      // give text content
      listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`
    }

    // create total elemnt:
    let totalItem = document.createElement('li');

    unorderedList.appendChild(totalItem);

    totalItem.textContent=`total: ${this.total} cookies`;

  }

}

tokyo.calcCustomersEachHour();
tokyo.calcCookiesEachHour();
tokyo.render();
console.log(tokyo);

///////////////////////////Dubai//////////////////////////

const Dubai = {
  locationName:'Dubai',
  minCustomers : 3,
  maxCustomers:24,
  avgCookies:1.2,
  customersEachHour:[],
  cookiesEachHour:[],
  total: 0,

  // claculate a random number of customers every hour
  calcCustomersEachHour:function(){
    for(let i=0;i<hours.length;i++){
      this.customersEachHour.push(random(this.minCustomers,this.maxCustomers));
    }
  },

  calcCookiesEachHour:function(){
    for(let i=0;i<hours.length;i++){
      // console.log(this.customersEachHour[i]);
      this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));

      this.total+=this.cookiesEachHour[i]
    }
  },
  render:function(){
    // get the parent element by id:
    let parent= document.getElementById('parent');
    console.log(parent);

    let shopName = document.createElement('h3');

    parent.appendChild(shopName);

    // give text content
    shopName.textContent = this.locationName;

    // created an element 
    let unorderedList=document.createElement('ul');
    // append element to parent
    parent.appendChild(unorderedList);

    for(let i =0;i<hours.length;i++){
      // create li
      let listItem=document.createElement('li');
      // append li
      unorderedList.appendChild(listItem);
      // give text content
      listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`
    }

    // create total elemnt:
    let totalItem = document.createElement('li');

    unorderedList.appendChild(totalItem);

    totalItem.textContent=`total: ${this.total} cookies`;

  }

}

Dubai.calcCustomersEachHour();
Dubai.calcCookiesEachHour();
Dubai.render();
console.log(Dubai);

///////////////////////////Paris//////////////////////////

const Paris = {
  locationName:'Paris',
  minCustomers : 3,
  maxCustomers:24,
  avgCookies:1.2,
  customersEachHour:[],
  cookiesEachHour:[],
  total: 0,

  // claculate a random number of customers every hour
  calcCustomersEachHour:function(){
    for(let i=0;i<hours.length;i++){
      this.customersEachHour.push(random(this.minCustomers,this.maxCustomers));
    }
  },

  calcCookiesEachHour:function(){
    for(let i=0;i<hours.length;i++){
      // console.log(this.customersEachHour[i]);
      this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));

      this.total+=this.cookiesEachHour[i]
    }
  },
  render:function(){
    // get the parent element by id:
    let parent= document.getElementById('parent');
    console.log(parent);

    let shopName = document.createElement('h3');

    parent.appendChild(shopName);

    // give text content
    shopName.textContent = this.locationName;

    // created an element 
    let unorderedList=document.createElement('ul');
    // append element to parent
    parent.appendChild(unorderedList);

    for(let i =0;i<hours.length;i++){
      // create li
      let listItem=document.createElement('li');
      // append li
      unorderedList.appendChild(listItem);
      // give text content
      listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`
    }

    // create total elemnt:
    let totalItem = document.createElement('li');

    unorderedList.appendChild(totalItem);

    totalItem.textContent=`total: ${this.total} cookies`;

  }

}

Paris.calcCustomersEachHour();
Paris.calcCookiesEachHour();
Paris.render();
console.log(Paris);
///////////////////////////Lima//////////////////////////

const Lima = {
  locationName:'Lima',
  minCustomers : 3,
  maxCustomers:24,
  avgCookies:1.2,
  customersEachHour:[],
  cookiesEachHour:[],
  total: 0,

  // claculate a random number of customers every hour
  calcCustomersEachHour:function(){
    for(let i=0;i<hours.length;i++){
      this.customersEachHour.push(random(this.minCustomers,this.maxCustomers));
    }
  },

  calcCookiesEachHour:function(){
    for(let i=0;i<hours.length;i++){
      // console.log(this.customersEachHour[i]);
      this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));

      this.total+=this.cookiesEachHour[i]
    }
  },
  render:function(){
    // get the parent element by id:
    let parent= document.getElementById('parent');
    console.log(parent);

    let shopName = document.createElement('h3');

    parent.appendChild(shopName);

    // give text content
    shopName.textContent = this.locationName;

    // created an element 
    let unorderedList=document.createElement('ul');
    // append element to parent
    parent.appendChild(unorderedList);

    for(let i =0;i<hours.length;i++){
      // create li
      let listItem=document.createElement('li');
      // append li
      unorderedList.appendChild(listItem);
      // give text content
      listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`
    }

    // create total elemnt:
    let totalItem = document.createElement('li');

    unorderedList.appendChild(totalItem);

    totalItem.textContent=`total: ${this.total} cookies`;

  }

}

Lima.calcCustomersEachHour();
Lima.calcCookiesEachHour();
Lima.render();
console.log(Lima);

