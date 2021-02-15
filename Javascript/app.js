'use strict'
let workHour=['06:00 AM','07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM','12:00 PM','01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM','07:00 PM']

function Location (locNmae,minNumOfCst,maxNumOfCst,avgCstCookeis) {
    this.locNmae=locNmae;
    this.maxNumOfCst=maxNumOfCst;
    this.minNumOfCst= minNumOfCst;
    this.avgCstCookeis=avgCstCookeis;
    this.cstSoldPerHour=[];
    this.cookiesSoldPerHour=[];
    this.total=0;
    
    

  


}
Location.prototype.randomNumber =function(){
    let x = Math.floor(Math.random() * (this.maxNumOfCst - this.minNumOfCst + 1) + this.minNumOfCst);
    
            return Math.floor(Math.random() * (this.maxNumOfCst - this.minNumOfCst + 1) + this.minNumOfCst);
       }

 Location.prototype.randomFun = function(){
    
     for (let i =0 ;i < workHour.length ;i++)
     {
    this.cstSoldPerHour.push(this.randomNumber());

         this.cstSoldPerHour.push(this.randomNumber());
         
     }
}

Location.prototype.expResult =function()
{
    for(let i=0;i<this.cstSoldPerHour.length;i++)
    {
        this.cookiesSoldPerHour.push(this.cstSoldPerHour[i]*Math.floor(this.avgCstCookeis));
    }
}
Location.prototype.totalfun =function(){
    for(let i=0;i<this.cookiesSoldPerHour.length;i++)
    {this.total=this.total+this.cookiesSoldPerHour[i];}
}



let seatle= new Location('Seatle',65,3,6.3);
seatle.randomNumber();
seatle.randomFun();
seatle.expResult();
seatle.totalfun();

let tokeyo =new Location('Tokeyo',24,3,1.2);
tokeyo.randomNumber();
tokeyo.randomFun();
tokeyo.expResult();
tokeyo.totalfun();

let dubai =new Location('Dubai',38,11,3.8);
dubai.randomNumber();
dubai.randomFun();
dubai.expResult();
dubai.totalfun();
let paries =new Location('Paries',38,20,2.3);
paries.randomNumber();
paries.randomFun();
paries.expResult();
paries.totalfun();
let lima =new Location('Lima',16,2,4.6);
lima.randomNumber();
lima.randomFun();
lima.expResult();
lima.totalfun();


let divEl = document.getElementById('Newdiv');
let table =document.createElement('table');
divEl.appendChild(table);
function render_header()
{
    
    let trEl=document.createElement('tr');
        table.appendChild(trEl);

        let thEl=document.createElement('th')
        trEl.appendChild(thEl);
        thEl.textContent=' ';

    for (let i=0; i< workHour.length ;i++ ){
        let thEl=document.createElement('th')
        trEl.appendChild(thEl);
        thEl.textContent= workHour[i];


    }
    let thEl1=document.createElement('th');
    trEl.appendChild(thEl1);
    thEl1.textContent= 'Daily Location Total';

}

Location.prototype.render_Table =function()
{
    
    let trEl=document.createElement('tr');
        table.appendChild(trEl);

        let tdEl=document.createElement('td')
        trEl.appendChild(tdEl);
        tdEl.textContent=this.locNmae;

    for (let i=0; i< workHour.length ;i++ ){
        let tdEl=document.createElement('td')
        trEl.appendChild(tdEl);
        tdEl.textContent= this.cookiesSoldPerHour[i];


    }
    let tdEl1=document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent= this.total;

}

render_header();
seatle.render_Table();
tokeyo.render_Table();
dubai.render_Table();
paries.render_Table();
lima.render_Table();


