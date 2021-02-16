'use strict';
/*
Location	         Min / Cust	                     Max / Cust	                        Avg Cookie / Sale
 Seattle              	23	                            65	                                    6.3
 Tokyo	                3	                              24                                    	1.2
 Dubai	                11	                            38                                     	3.7
 Paris	                20	                            38                                    	2.3
 Lima	                  2	                              16	                                    4.6

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

/* 
<table >
<tr>
    <th>
       name
    </th>
    <th>
       age
    </th>
    <th>
    weight
    </th>
</tr>
</table> */

let table = document.createElement('table');

parent.appendChild(table)

let headingRow = document.createElement('tr');

table.appendChild(headingRow);

let nameElement = document.createElement('th');

headingRow.appendChild(nameElement);
nameElement.textContent='name'


let ageElement = document.createElement('th');

headingRow.appendChild(ageElement);
ageElement.textContent='age';



let weightElement = document.createElement('th');

headingRow.appendChild(weightElement);
weightElement.textContent='wight';


for(let i =0; i<students.length;i++){
    let studentRow=document.createElement('tr');
    table.appendChild(studentRow);

    let nameData=document.createElement('td');
    studentRow.appendChild(nameData);
    nameData.textContent=students[i].name;


    let ageData=document.createElement('td');
    studentRow.appendChild(ageData);
    ageData.textContent=students[i].age;


    let weightData=document.createElement('td');
    studentRow.appendChild(weightData);
    weightData.textContent=students[i].weight;


}
 //create table:
 let tableElement= document.createElement('table');
 parentElement.appendChild(tableElement)
 console.log(parentElement);

 let headerRow = document.createElement('tr');
 tableElement.appendChild(headerRow)

 let th1 = document.createElement('th');
 headerRow.appendChild(th1);
 th1.textContent = '6:00am';


 let th2 = document.createElement('th');
 headerRow.appendChild(th2);
 th2.textContent = '7:00am';


 let th3 = document.createElement('th');
 headerRow.appendChild(th3);
 th3.textContent = '8:00am';



 // make row for values

 let dataRow = document.createElement('tr');
 tableElement.appendChild(dataRow);

 // create table data:

 let td1 = document.createElement('td');
 dataRow.appendChild(td1);
 td1.textContent = this.isGoodWithKids;

 let td2 = document.createElement('td');
 dataRow.appendChild(td2);
 td2.textContent = this.isGoodWithDogs;


 let td3 = document.createElement('td');
 dataRow.appendChild(td3);
 td3.textContent = this.isGoodWithOtherCats;






frankie.render()
serena.render() 













